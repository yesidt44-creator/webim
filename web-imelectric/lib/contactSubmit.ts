const CONTACT_MAIL = "contacto@imelectric.es";

export type WebFormSendResult =
  | { status: "sent" }
  | { status: "mailto"; reason: string }
  | { status: "error"; message: string };

export async function sendWebForm(payload: Record<string, unknown>): Promise<WebFormSendResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; configured?: boolean; error?: string; message?: string };

    if (res.ok && data.ok) {
      return { status: "sent" };
    }

    if (res.status === 503 && data.configured === false) {
      return { status: "mailto", reason: data.message || "Servidor sin Resend" };
    }

    return { status: "error", message: data.error || "No se pudo enviar el formulario." };
  } catch {
    return { status: "error", message: "Sin conexión o error de red." };
  }
}

export function openMailtoContact(fullName: string, company: string, email: string, priority: string): void {
  const subject = encodeURIComponent(`Consulta web IMELECTRIC — ${priority}`);
  const body = encodeURIComponent(
    `Consulta desde formulario web\n\nNombre: ${fullName}\nEmpresa: ${company}\nCorreo: ${email}\nInterés: ${priority}\n`,
  );
  window.location.href = `mailto:${CONTACT_MAIL}?subject=${subject}&body=${body}`;
}

export function openMailtoLead(normTitle: string, fullName: string, company: string, email: string): void {
  const subject = encodeURIComponent(`Solicitud descarga norma: ${normTitle}`);
  const body = encodeURIComponent(
    `Solicitud desde Academia / Biblioteca normativa\n\nNorma: ${normTitle}\nNombre: ${fullName}\nEmpresa: ${company}\nCorreo: ${email}\n`,
  );
  window.location.href = `mailto:${CONTACT_MAIL}?subject=${subject}&body=${body}`;
}
