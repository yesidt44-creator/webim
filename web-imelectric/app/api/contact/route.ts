import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp, maskIp } from "@/lib/rateLimit";

export const runtime = "nodejs";

const MAX = 600;
const CONTACT_PRODUCTS = [
  "Fix AI",
  "Veriwork",
  "Nexvia",
  "Shield AI",
  "Falion",
  "Consultoría en mantenimiento",
] as const;

function clamp(v: unknown): string {
  const s = String(v ?? "").trim();
  if (!s) return "";
  return s.length > MAX ? s.slice(0, MAX) : s;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isAllowedRequestUrl(value: string): boolean {
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && (url.hostname === "imelectric.es" || url.hostname === "www.imelectric.es")) {
      return true;
    }
    return url.hostname === "localhost" || url.hostname === "127.0.0.1";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const masked = maskIp(ip);

  const contentType = request.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase();
  if (contentType !== "application/json") {
    return NextResponse.json({ error: "Content-Type debe ser application/json" }, { status: 415 });
  }

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  if ((origin && !isAllowedRequestUrl(origin)) || (!origin && referer && !isAllowedRequestUrl(referer))) {
    console.warn(`[api/contact] ORIGIN_BLOCKED ip=${masked}`);
    return NextResponse.json({ error: "Origen de solicitud no permitido" }, { status: 403 });
  }

  // ── Rate limiting ──────────────────────────────────────────────────────────
  const rl = checkRateLimit(ip);
  if (!rl.allowed) {
    console.warn(`[api/contact] RATE_LIMIT ip=${masked} retry_after=${rl.retryAfterSecs}s`);
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intente de nuevo en unos minutos." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rl.retryAfterSecs),
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": "0",
        },
      },
    );
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let parsedBody: unknown;
  try {
    parsedBody = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (!isPlainObject(parsedBody)) {
    return NextResponse.json({ error: "El cuerpo debe ser un objeto JSON" }, { status: 400 });
  }
  const body = parsedBody;

  // ── Honeypot ───────────────────────────────────────────────────────────────
  // Field "_hp" is hidden from real users (opacity:0, tabIndex=-1, aria-hidden).
  // Bots that fill all form fields will populate it; humans won't.
  const honeypot = clamp(body._hp);
  if (honeypot !== "") {
    // Silent success — don't reveal the gate to the bot.
    console.warn(`[api/contact] HONEYPOT_BLOCKED ip=${masked} form=${clamp(body.formType)}`);
    return NextResponse.json({ ok: true, configured: true });
  }

  // ── Validate form type ─────────────────────────────────────────────────────
  const formType = clamp(body.formType);
  const ALLOWED_TYPES = ["contact", "lead_norm", "norm_updates"];
  if (!ALLOWED_TYPES.includes(formType)) {
    return NextResponse.json({ error: "Tipo de formulario no válido" }, { status: 400 });
  }

  // ── Prueba de autorización (Art. 9, Ley 1581) ──────────────────────────────
  const consent = body.consent === true;
  if (!consent) {
    return NextResponse.json({ error: "Se requiere autorización expresa del titular" }, { status: 400 });
  }

  const receivedAtUtc = new Date().toISOString();
  const consentProof = [
    "",
    "── Prueba de autorización (Habeas Data, Ley 1581/2012) ──",
    `Consentimiento: ${consent ? "SÍ — el titular autorizó expresamente el tratamiento" : "no registrado"}`,
    `Fecha/hora de autorización (UTC): ${receivedAtUtc}`,
    `Formulario de origen: ${formType}`,
  ].join("\n");

  const to = process.env.CONTACT_TO_EMAIL || "contacto@imelectric.es";
  const from = process.env.RESEND_FROM_EMAIL?.trim() || "IMELECTRIC Web <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY?.trim();

  let subject: string;
  let text: string;
  let html: string;
  let replyTo: string | undefined;

  // ── norm_updates: solo requiere email + consent explícito ──────────────────
  if (formType === "norm_updates") {
    const email = clamp(body.email);
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailOk) {
      return NextResponse.json({ error: "Correo válido es obligatorio" }, { status: 400 });
    }

    replyTo = email;
    subject = "[Web IMELECTRIC] Nueva suscripción a avisos normativos";
    text = [
      "Nueva suscripción desde la Biblioteca Normativa.",
      "",
      `Correo: ${email}`,
      consentProof,
      "",
      "No responder a este correo — es solo un aviso interno.",
    ].join("\n");
    html = `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;">${escapeHtml(text)}</pre>`;
  } else {
    // ── contact / lead_norm: requieren fullName + company + email ─────────────
    const fullName = clamp(body.fullName);
    const company = clamp(body.company);
    const email = clamp(body.email);
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!fullName || !company || !emailOk) {
      return NextResponse.json({ error: "Nombre, empresa y correo válido son obligatorios" }, { status: 400 });
    }

    replyTo = email;

    if (formType === "contact") {
      const product = clamp(body.product);
      if (!CONTACT_PRODUCTS.includes(product as (typeof CONTACT_PRODUCTS)[number])) {
        return NextResponse.json({ error: "Seleccione un producto o servicio válido" }, { status: 400 });
      }
      subject = `[Web IMELECTRIC] Consulta: ${product}`;
      const phone = clamp(body.phone);
      const message = clamp(body.message);
      const sourcePage = clamp(body.sourcePage) || "/";
      const sourceCta = clamp(body.sourceCta);
      if (!sourceCta) {
        return NextResponse.json({ error: "Falta el CTA de origen" }, { status: 400 });
      }
      text = [
        "Nueva consulta desde el formulario de contacto (web IMELECTRIC).",
        "",
        `Nombre: ${fullName}`,
        `Empresa: ${company}`,
        `Correo: ${email}`,
        `Teléfono: ${phone || "(no indicado)"}`,
        `Producto / servicio: ${product}`,
        `Página de origen: ${sourcePage}`,
        `CTA de origen: ${sourceCta}`,
        `Mensaje: ${message || "(sin mensaje)"}`,
        consentProof,
        "",
        "Responder directamente a este correo usando «Responder» (reply-to configurado).",
      ].join("\n");
      html = `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;">${escapeHtml(text)}</pre>`;
    } else {
      // lead_norm
      const normTitle = clamp(body.normTitle);
      if (!normTitle) {
        return NextResponse.json({ error: "Falta el título de la norma" }, { status: 400 });
      }
      subject = `[Web IMELECTRIC] Lead normativa: ${normTitle}`;
      text = [
        "Nuevo lead desde Academia / Biblioteca normativa.",
        "",
        `Norma: ${normTitle}`,
        `Nombre: ${fullName}`,
        `Empresa: ${company}`,
        `Correo: ${email}`,
        consentProof,
        "",
        "Responder directamente al interesado usando «Responder».",
      ].join("\n");
      html = `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;">${escapeHtml(text)}</pre>`;
    }
  }

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message: "Servidor de correo no configurado (RESEND_API_KEY).",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      ...(replyTo ? { replyTo } : {}),
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[api/contact] Resend:", error);
      return NextResponse.json({ error: "No se pudo enviar el correo. Intente más tarde." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, configured: true });
  } catch (e) {
    console.error("[api/contact]", e);
    return NextResponse.json({ error: "Error interno al enviar" }, { status: 500 });
  }
}
