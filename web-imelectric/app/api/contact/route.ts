import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX = 600;

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

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const formType = clamp(body.formType);
  if (formType !== "contact" && formType !== "lead_norm") {
    return NextResponse.json({ error: "Tipo de formulario no válido" }, { status: 400 });
  }

  const fullName = clamp(body.fullName);
  const company = clamp(body.company);
  const email = clamp(body.email);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!fullName || !company || !emailOk) {
    return NextResponse.json({ error: "Nombre, empresa y correo válido son obligatorios" }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || "contacto@imelectric.es";
  const from = process.env.RESEND_FROM_EMAIL?.trim() || "IMELECTRIC Web <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY?.trim();

  let subject: string;
  let text: string;
  let html: string;

  if (formType === "contact") {
    const priority = clamp(body.priority);
    if (!priority) {
      return NextResponse.json({ error: "Seleccione una prioridad técnica" }, { status: 400 });
    }
    subject = `[Web IMELECTRIC] Consulta: ${priority}`;
    text = [
      "Nueva consulta desde el formulario de contacto (web IMELECTRIC).",
      "",
      `Nombre: ${fullName}`,
      `Empresa: ${company}`,
      `Correo: ${email}`,
      `Prioridad / interés: ${priority}`,
      "",
      "Responder directamente a este correo usando «Responder» (reply-to configurado).",
    ].join("\n");
    html = `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;">${escapeHtml(text)}</pre>`;
  } else {
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
      "",
      "Responder directamente al interesado usando «Responder».",
    ].join("\n");
    html = `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;">${escapeHtml(text)}</pre>`;
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
      replyTo: email,
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
