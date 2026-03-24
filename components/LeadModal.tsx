"use client";

import { useState, useEffect, type FormEvent } from "react";
import { X, Send, Download, ShieldCheck, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { sendWebForm, openMailtoLead } from "@/lib/contactSubmit";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  normTitle: string;
  downloadUrl: string | null;
  downloadFileName?: string;
};

export const LeadModal = ({
  isOpen,
  onClose,
  normTitle,
  downloadUrl,
  downloadFileName,
}: LeadModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadCompany, setLeadCompany] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setLoading(false);
      setLeadCompany("");
      trackEvent("lead_modal_open", { norm_name: normTitle });
    }
  }, [isOpen, normTitle]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const fullName = String(fd.get("fullName") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();

    setLoading(true);
    try {
      const result = await sendWebForm({
        formType: "lead_norm",
        fullName,
        company,
        email,
        normTitle,
      });

      setLeadCompany(company);

      if (result.status === "sent") {
        trackEvent("lead_norm_submit", {
          norm_name: normTitle,
          company,
          full_name: fullName,
          email_domain: email.includes("@") ? email.split("@")[1] : "",
          has_pdf: Boolean(downloadUrl),
          delivery: "api",
        });
      } else if (result.status === "mailto") {
        openMailtoLead(normTitle, fullName, company, email);
        trackEvent("lead_norm_submit", {
          norm_name: normTitle,
          company,
          full_name: fullName,
          email_domain: email.includes("@") ? email.split("@")[1] : "",
          has_pdf: Boolean(downloadUrl),
          delivery: "mailto_fallback",
        });
      } else {
        openMailtoLead(normTitle, fullName, company, email);
        trackEvent("lead_norm_submit", {
          norm_name: normTitle,
          company,
          full_name: fullName,
          email_domain: email.includes("@") ? email.split("@")[1] : "",
          has_pdf: Boolean(downloadUrl),
          delivery: "mailto_error",
        });
      }

      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadClick = () => {
    trackEvent("download_norm", {
      norm_name: normTitle,
      company: leadCompany,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-[max(1rem,env(safe-area-inset-bottom))]" role="presentation">
      <button
        type="button"
        aria-label="Cerrar modal"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className="relative z-10 max-h-[min(90dvh,calc(100vh-2rem))] w-full max-w-md overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8 [-webkit-overflow-scrolling:touch]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 min-h-[44px] min-w-[44px] text-slate-500 transition hover:text-white"
          aria-label="Cerrar"
        >
          <X size={24} className="mx-auto" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="mb-4 inline-block rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
                <ShieldCheck size={32} />
              </div>
              <h3 id="lead-modal-title" className="mb-2 text-2xl font-bold text-white">
                Descargar guía técnica
              </h3>
              <p className="text-sm text-slate-400">
                Complete sus datos para recibir el resumen ejecutivo de la <strong>{normTitle}</strong> y acceder a la base
                normativa 2026.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Nombre completo
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  className="min-h-12 w-full rounded-xl border border-slate-800 bg-slate-950 p-4 text-base text-white transition outline-none focus:border-emerald-500"
                  placeholder="Ej: Ing. Carlos Martínez"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Empresa / proyecto
                </label>
                <input
                  required
                  type="text"
                  name="company"
                  autoComplete="organization"
                  className="min-h-12 w-full rounded-xl border border-slate-800 bg-slate-950 p-4 text-base text-white transition outline-none focus:border-emerald-500"
                  placeholder="Nombre de su organización"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Correo corporativo
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  className="min-h-12 w-full rounded-xl border border-slate-800 bg-slate-950 p-4 text-base text-white transition outline-none focus:border-emerald-500"
                  placeholder="correo@empresa.com"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 text-base font-bold text-white shadow-lg transition hover:bg-emerald-500 disabled:bg-emerald-800"
              >
                {loading ? (
                  "Enviando…"
                ) : (
                  <>
                    <Send size={18} /> Solicitar acceso
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="animate-in zoom-in py-4 text-center duration-500 fade-in sm:py-8">
            <div className="mb-6 inline-block rounded-full bg-emerald-500/20 p-4 text-emerald-400">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">¡Listo!</h3>
            <p className="mb-8 text-sm text-slate-400">
              Si configuró el correo en el servidor, ya recibimos su solicitud. En cualquier caso puede descargar el PDF
              si está disponible.
            </p>
            {downloadUrl ? (
              <a
                href={downloadUrl}
                {...(downloadFileName ? { download: downloadFileName } : {})}
                onClick={handleDownloadClick}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-base font-bold text-black shadow-lg transition hover:bg-slate-200"
              >
                <Download size={18} /> Descargar PDF oficial
              </a>
            ) : (
              <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
                El PDF de esta norma aún no está disponible en el portal.{" "}
                <a href="mailto:contacto@imelectric.es" className="font-bold underline">
                  Contáctenos
                </a>{" "}
                para recibirlo.
              </p>
            )}
            <button
              type="button"
              onClick={onClose}
              className="mt-6 min-h-11 text-xs text-slate-500 underline transition hover:text-white"
            >
              Cerrar ventana
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
