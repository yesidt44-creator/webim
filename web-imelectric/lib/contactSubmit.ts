const CONTACT_MAIL = "contacto@imelectric.es";
const REQUEST_TIMEOUT_MS = 12_000;

export type WebFormSendResult =
  | { status: "sent" }
  | { status: "mailto"; reason: string }
  | { status: "error"; message: string };

export async function sendWebForm(payload: Record<string, unknown>): Promise<WebFormSendResult> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; configured?: boolean; error?: string; message?: string };

    if (res.ok && data.ok) {
      return { status: "sent" };
    }

    if (res.status === 503 && data.configured === false) {
      return { status: "mailto", reason: data.message || "Servidor sin Resend" };
    }

    return { status: "error", message: data.error || "No se pudo enviar el formulario." };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return {
        status: "error",
        message: "El envío tardó demasiado. Verifica tu conexión e intenta nuevamente.",
      };
    }
    return { status: "error", message: "Sin conexión o error de red." };
  } finally {
    window.clearTimeout(timeoutId);
  }
}

type MailtoContactPayload = {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
  product: string;
  sourcePage: string;
  sourceCta: string;
};

export function openMailtoContact(payload: MailtoContactPayload): void {
  const subject = encodeURIComponent(`Consulta web IMELECTRIC — ${payload.product}`);
  const body = encodeURIComponent(
    [
      "Consulta desde formulario web",
      "",
      `Nombre: ${payload.fullName}`,
      `Empresa: ${payload.company}`,
      `Correo: ${payload.email}`,
      `Teléfono: ${payload.phone?.trim() || "(no indicado)"}`,
      `Producto / servicio: ${payload.product}`,
      `Página de origen: ${payload.sourcePage}`,
      `CTA de origen: ${payload.sourceCta}`,
      `Mensaje: ${payload.message?.trim() || "(sin mensaje)"}`,
      "Autorización de datos: marcada en el formulario web",
    ].join("\n"),
  );
  window.location.href = `mailto:${CONTACT_MAIL}?subject=${subject}&body=${body}`;
}
