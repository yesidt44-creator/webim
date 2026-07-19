"use client";

import { useId, useState, type FormEvent } from "react";
import { FileText, Download, Search, Lightbulb, Bell, ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { sendWebForm } from "@/lib/contactSubmit";

/** PDFs servidos desde /public/norms/ */
type NormPdf = { href: string; fileName: string };

const NORM_PDF_BY_TITLE: Record<string, NormPdf> = {
  "Resolución 4272 de 2021": {
    href: "/norms/resolucion-4272-2021.pdf",
    fileName: "Resolucion-4272-2021-Trabajo-en-Alturas.pdf",
  },
  "Decreto 1072 de 2015": {
    href: "/norms/decreto-1072-2015.pdf",
    fileName: "Decreto-1072-2015-Sector-Trabajo.pdf",
  },
  "Resolución 0312 de 2019": {
    href: "/norms/resolucion-0312-2019.pdf",
    fileName: "Resolucion-0312-2019-Estandares-minimos-SG-SST.pdf",
  },
  "Ley 1581 de 2012": {
    href: "/norms/ley-1581-2012.pdf",
    fileName: "Ley-1581-2012-Habeas-Data.pdf",
  },
  "Resolución 40117 de 2024": {
    href: "/norms/resolucion-40117-2024.pdf",
    fileName: "Resolucion-40117-2024-RETIE.pdf",
  },
};

const NORMS = [
  {
    id: "res-4272",
    title: "Resolución 4272 de 2021",
    subtitle: "Trabajo Seguro en Alturas",
    summary:
      "Establece los requisitos mínimos de seguridad para todo trabajo en el que exista el riesgo de caída a 2.0 metros o más.",
    usage:
      "Obligatorio en mantenimiento de torres, limpieza de fachadas, postes y cualquier labor sobre plataformas elevadas.",
    tag: "Crítica",
  },
  {
    id: "dec-1072",
    title: "Decreto 1072 de 2015",
    subtitle: "Decreto Único Reglamentario del Sector Trabajo",
    summary:
      "Específicamente el Capítulo 6, que dicta la implementación obligatoria del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).",
    usage: "Base legal para todas las empresas en Colombia. Define la estructura de prevención de riesgos y responsabilidades.",
    tag: "Legal",
  },
  {
    id: "res-0312",
    title: "Resolución 0312 de 2019",
    subtitle: "Estándares Mínimos del SG-SST",
    summary: "Define los estándares que deben cumplir las empresas según su número de trabajadores y nivel de riesgo (I a V).",
    usage: "Para auditorías de cumplimiento y autoevaluación anual del sistema de gestión ante el Ministerio del Trabajo.",
    tag: "Auditoría",
  },
  {
    id: "ley-1581",
    title: "Ley 1581 de 2012",
    subtitle: "Habeas Data / Protección de Datos",
    summary: "Regula el tratamiento de datos personales y sensibles recolectados en procesos operativos.",
    usage: "Fundamental al digitalizar firmas, fotos y datos de salud en permisos de trabajo y reportes HSEQ.",
    tag: "Blindaje",
  },
  {
    id: "res-40117",
    title: "Resolución 40117 de 2024",
    subtitle: "RETIE — Ministerio de Minas y Energía",
    summary:
      "Actualiza el Reglamento Técnico de Instalaciones Eléctricas (RETIE): reorganiza requisitos, alinea con la Ley 1715 de 2014 (generación distribuida y autogeneración) y con el marco del Decreto 1595 de 2015, entre otros ajustes de cumplimiento.",
    usage:
      "Diseño, construcción, mantenimiento y auditoría de instalaciones eléctricas en planta industrial, subestaciones, líneas MT/BT y contratistas eléctricos sujetos a RETIE.",
    tag: "RETIE",
  },
  {
    id: "iso-3941",
    title: "ISO 3941:2026",
    subtitle: "Nueva Clasificación de Incendios (Clase L)",
    summary:
      "Introduce protocolos específicos para incendios en baterías de Litio y sistemas de almacenamiento de energía.",
    usage: "Uso en centros de datos, áreas de UPS y flotas de vehículos eléctricos.",
    tag: "Tendencia",
  },
];

export const NormsLibrary = () => {
  const fieldId = useId();
  const notifyEmailId = `${fieldId}-notify-email`;
  const notifyConsentId = `${fieldId}-notify-consent`;
  const [notifyEmail, setNotifyEmail] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [notifyState, setNotifyState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [notifyMessage, setNotifyMessage] = useState("");

  const handleNotifySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!authorized) return;
    const hpValue = String(new FormData(e.currentTarget).get("_hp") ?? "");
    setNotifyState("loading");
    setNotifyMessage("");

    const result = await sendWebForm({
      formType: "norm_updates",
      email: notifyEmail,
      consent: true,
      _hp: hpValue,
    });

    if (result.status === "sent") {
      setNotifyState("success");
      return;
    }

    setNotifyState("error");
    setNotifyMessage(
      result.status === "mailto"
        ? "No pudimos registrar tu correo en este momento. Intenta nuevamente en unos minutos."
        : result.message,
    );
  };

  return (
    <div className="mt-16 space-y-8">
      <div className="mb-8 flex items-center gap-3">
        <FileText size={28} className="text-emerald-500" />
        <h2 className="text-2xl font-bold text-white md:text-3xl">Biblioteca Normativa SST</h2>
      </div>

      {/* IA + Veriwork */}
      <div className="group relative mb-12 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-blue-900/40 to-emerald-900/40 p-8">
        <div className="absolute top-0 right-0 rounded-full bg-white/5 p-24 blur-[80px]"></div>
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
          <div className="rounded-2xl bg-emerald-500/20 p-4">
            <Lightbulb size={40} className="animate-pulse text-emerald-400" />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">IA integrada en Veriwork</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              El motor de Veriwork no solo almacena estas normas; las <strong>analiza en tiempo real</strong>. Al realizar un
              análisis de riesgo, el sistema cruza la descripción de la tarea con el marco normativo y alerta sobre
              controles preventivos omitidos — la persona competente revisa y es quien autoriza el permiso de trabajo.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de normas — descarga directa, sin barrera */}
      <div className="grid gap-6 md:grid-cols-2">
        {NORMS.map((norm) => {
          const pdf = NORM_PDF_BY_TITLE[norm.title] ?? null;
          return (
            <div
              key={norm.id}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-emerald-500/30"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="rounded bg-slate-800 px-2 py-1 text-[10px] font-black tracking-widest text-slate-400 uppercase transition-colors group-hover:text-emerald-400">
                  {norm.tag}
                </span>
                {pdf ? (
                  <a
                    href={pdf.href}
                    download={pdf.fileName}
                    onClick={() => trackEvent("download_norm", { norm_name: norm.title })}
                    className="text-slate-500 transition-colors hover:text-white"
                    aria-label={`Descargar PDF: ${norm.title}`}
                  >
                    <Download size={18} />
                  </a>
                ) : (
                  <span className="text-slate-700" aria-label="PDF próximamente">
                    <Download size={18} />
                  </span>
                )}
              </div>

              <h4 className="mb-1 text-lg font-bold text-white">{norm.title}</h4>
              <p className="mb-4 text-xs font-bold tracking-tighter text-emerald-500 uppercase">{norm.subtitle}</p>

              <div className="flex grow flex-col space-y-4">
                <div>
                  <span className="mb-1 block text-[10px] font-bold text-slate-500 uppercase">Resumen Ejecutivo:</span>
                  <p className="text-xs leading-relaxed text-slate-400">{norm.summary}</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <span className="mb-1 flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase">
                    <Search size={10} /> ¿Dónde aplicarla?
                  </span>
                  <p className="text-[11px] leading-snug text-slate-400 italic">{norm.usage}</p>
                </div>
              </div>

              {pdf ? (
                <a
                  href={pdf.href}
                  download={pdf.fileName}
                  onClick={() => trackEvent("download_norm", { norm_name: norm.title })}
                  className="mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest text-emerald-500 uppercase transition-colors hover:text-emerald-400"
                >
                  Descargar PDF oficial <ArrowRight size={12} />
                </a>
              ) : (
                <span className="mt-6 text-[10px] text-slate-600 uppercase">PDF próximamente</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Base Normativa Completa — descarga directa */}
      <a
        href="/norms/decreto-1072-2015.pdf"
        download="Decreto-1072-2015-Sector-Trabajo-Base-Legal.pdf"
        onClick={() => trackEvent("download_norm", { norm_name: "Base Normativa Completa 2026" })}
        className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:bg-slate-800"
      >
        <div className="flex items-center gap-4">
          <Download className="text-amber-500 shrink-0" size={24} />
          <span className="text-sm font-bold tracking-tight text-slate-300">
            Base legal consolidada: Decreto Único del Sector Trabajo (Decreto 1072 de 2015)
          </span>
        </div>
        <ArrowRight size={20} className="text-slate-600 transition-transform group-hover:translate-x-2 shrink-0" />
      </a>

      {/* ── Avisos de actualización — formulario opcional ────────────────────── */}
      {/* La descarga ya ocurrió arriba. Este CTA es completamente independiente. */}
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
        <div className="mb-3 flex items-center gap-3">
          <Bell size={20} className="shrink-0 text-emerald-400" />
          <p className="text-sm font-bold text-white">
            ¿Quieres que te avisemos cuando alguna de estas normas se actualice?
          </p>
        </div>
        <p className="mb-4 text-xs leading-relaxed text-slate-500">
          Opcional — independiente de la descarga. Solo te escribimos cuando haya una actualización normativa relevante.
        </p>

        {notifyState === "success" ? (
          <div role="status" aria-live="polite" className="flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 size={16} />
            Anotado — te avisamos cuando haya cambios.
          </div>
        ) : (
          <form onSubmit={handleNotifySubmit} className="space-y-3">
            <input
              type="text"
              name="_hp"
              defaultValue=""
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              style={{ position: "absolute", opacity: 0, left: "-9999px", width: 0, height: 0 }}
            />
            <label htmlFor={notifyEmailId} className="block text-xs font-semibold text-slate-300">
              Correo para avisos normativos
            </label>
            <input
              id={notifyEmailId}
              type="email"
              required
              value={notifyEmail}
              onChange={(e) => setNotifyEmail(e.target.value)}
              placeholder="correo@empresa.com"
              inputMode="email"
              autoComplete="email"
              className="min-h-10 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500 focus:outline-none"
            />

            {/* Corrección A — checkbox de autorización expresa, sin marcar por defecto */}
            <label htmlFor={notifyConsentId} className="flex cursor-pointer items-start gap-3">
              <input
                id={notifyConsentId}
                type="checkbox"
                checked={authorized}
                onChange={(e) => setAuthorized(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-700 bg-slate-950 accent-emerald-500"
              />
              <span className="text-xs leading-relaxed text-slate-400">
                Autorizo el tratamiento de mi correo para este fin, conforme a la{" "}
                <a href="/privacidad" className="underline hover:text-slate-300">
                  política de privacidad
                </a>
                .
              </span>
            </label>

            {/* Botón deshabilitado hasta que el checkbox esté marcado */}
            <button
              type="submit"
              disabled={!authorized || notifyState === "loading"}
              className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {notifyState === "loading" ? "Enviando…" : "Suscribir"}
            </button>

            {notifyState === "error" ? (
              <div
                role="alert"
                aria-live="polite"
                className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200"
              >
                <p>{notifyMessage}</p>
                <p className="mt-1 text-xs text-red-300">Tu correo se conserva. Puedes intentar nuevamente.</p>
              </div>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
};
