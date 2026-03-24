"use client";

import { useState } from "react";
import { FileText, Download, Search, Lightbulb, AlertCircle, ArrowRight } from "lucide-react";
import { LeadModal } from "./LeadModal";

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
  /** Marco legal único del sector trabajo — CTA “base consolidada” (mismo PDF que la tarjeta del Decreto 1072) */
  "Base Normativa Completa 2026": {
    href: "/norms/decreto-1072-2015.pdf",
    fileName: "Decreto-1072-2015-Sector-Trabajo-Base-Legal.pdf",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadTarget, setLeadTarget] = useState<{ title: string; pdf: NormPdf | null }>({
    title: "",
    pdf: null,
  });

  const handleOpenModal = (title: string) => {
    setLeadTarget({
      title,
      pdf: NORM_PDF_BY_TITLE[title] ?? null,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="mt-16 space-y-8">
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        normTitle={leadTarget.title}
        downloadUrl={leadTarget.pdf?.href ?? null}
        downloadFileName={leadTarget.pdf?.fileName}
      />

      <div className="mb-8 flex items-center gap-3">
        <FileText size={28} className="text-emerald-500" />
        <h2 className="text-2xl font-bold text-white md:text-3xl">Biblioteca Normativa SST</h2>
      </div>

      {/* IA + Safety On */}
      <div className="group relative mb-12 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-blue-900/40 to-emerald-900/40 p-8">
        <div className="absolute top-0 right-0 rounded-full bg-white/5 p-24 blur-[80px]"></div>
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
          <div className="rounded-2xl bg-emerald-500/20 p-4">
            <Lightbulb size={40} className="animate-pulse text-emerald-400" />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">IA Integrada en Safety On</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Nuestra IA no solo almacena estas normas; las <strong>analiza en tiempo real</strong>. Al realizar un Análisis
              de Riesgo en la plataforma, la IA cruza su descripción de la tarea con este marco normativo para sugerir
              controles preventivos automáticos, asegurando que su permiso de trabajo nunca incumpla la ley vigente.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {NORMS.map((norm) => (
          <div
            key={norm.id}
            className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-emerald-500/30"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="rounded bg-slate-800 px-2 py-1 text-[10px] font-black tracking-widest text-slate-400 uppercase transition-colors group-hover:text-emerald-400">
                {norm.tag}
              </span>
              <button
                type="button"
                onClick={() => handleOpenModal(norm.title)}
                className="text-slate-500 transition-colors hover:text-white"
                aria-label={`Descargar resumen: ${norm.title}`}
              >
                <Download size={18} />
              </button>
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

            <button
              type="button"
              onClick={() => handleOpenModal(norm.title)}
              className="mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest text-emerald-500 uppercase transition-colors hover:text-emerald-400"
            >
              Descargar Resumen Técnico <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={() => handleOpenModal("Base Normativa Completa 2026")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpenModal("Base Normativa Completa 2026");
          }
        }}
        className="group flex cursor-pointer items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:bg-slate-800"
      >
        <div className="flex items-center gap-4">
          <AlertCircle className="text-amber-500" size={24} />
          <span className="text-sm font-bold tracking-tight text-slate-300">
            Base legal consolidada: Decreto Único del Sector Trabajo (Decreto 1072 de 2015) — descarga tras registro
          </span>
        </div>
        <ArrowRight size={20} className="text-slate-600 transition-transform group-hover:translate-x-2" />
      </div>
    </div>
  );
};
