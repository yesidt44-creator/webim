"use client";

import { Wrench, ShieldCheck, Truck, ArrowRight } from "lucide-react";

export const PainPoints = () => {
  return (
    <section id="productos" className="bg-slate-900/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Nuestra Suite de Soluciones</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Tecnología que funciona donde las redes complejas fallan, diseñada para operaciones de alto riesgo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* FixAI */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-blue-500/50">
            <div className="mb-6 inline-block text-blue-500">
              <Wrench size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-bold">FixAI CMMS</h3>
            <p className="mb-4 text-sm font-bold text-blue-400">Mantenimiento con IA</p>
            <p className="mb-6 flex-grow text-sm text-slate-400">
              Reduce el tiempo de reporte de 20 a 3 minutos. Clasificación automática de fallas (ISO 14224), historial de
              activos y asistente IA para supervisores. 100% offline.
            </p>
            <div className="mb-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
              ROI: Ahorre &gt;300 horas/mes con 30 técnicos.
            </div>
            <a
              href="#fixai"
              className="flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
            >
              Saber más <ArrowRight size={16} />
            </a>
          </div>

          {/* Safety On */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-emerald-500/50">
            <div className="mb-6 inline-block text-emerald-500">
              <ShieldCheck size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Safety On</h3>
            <p className="mb-4 text-sm font-bold text-emerald-400">Blindaje Legal HSE</p>
            <p className="mb-6 flex-grow text-sm text-slate-400">
              Transforme la gestión HSE. Permisos de trabajo digitales, firmas legales, verificación automática de
              competencias y trazabilidad forense ante auditorías.
            </p>
            <div className="mb-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
              Impacto: Cero pérdida de documentos y alteraciones.
            </div>
            <a
              href="#safety-on"
              className="flex items-center gap-2 text-sm font-bold text-emerald-400 transition hover:text-emerald-300"
            >
              Saber más <ArrowRight size={16} />
            </a>
          </div>

          {/* Nexvia */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-amber-500/50">
            <div className="mb-6 inline-block text-amber-500">
              <Truck size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Nexvia</h3>
            <p className="mb-4 text-sm font-bold text-amber-400">Gestión de Flotas e ISO 9001</p>
            <p className="mb-6 flex-grow text-sm text-slate-400">
              El único sistema nativo para Colombia que integra operación, HSEQ (RV-GSSTA-F-07) y Ley 1581. Checklist
              offline con firma forense (GPS + SHA-256) y encuestas de satisfacción vía QR.
            </p>
            <div className="mb-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
              Impacto: Auditable 100%. Adiós al Excel y el papel.
            </div>
            <a
              href="#nexvia"
              className="flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-amber-300"
            >
              Saber más <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
