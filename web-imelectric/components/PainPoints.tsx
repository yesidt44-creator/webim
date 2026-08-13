"use client";

import { Wrench, ShieldCheck, Truck, Brain, ArrowRight } from "lucide-react";

export const PainPoints = () => {
  return (
    <section id="productos" className="bg-slate-900/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Nuestra Suite de Soluciones</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Cinco soluciones digitales con IA para contratistas industriales, operadores HSEQ, flotas, confiabilidad y empresas colombianas con obligación SG-SST.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Fix AI */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-blue-500/50">
            <div className="mb-6 inline-block text-blue-500">
              <Wrench size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Fix AI</h3>
            <p className="mb-4 text-sm font-bold text-blue-400">Control de ejecución del plan</p>
            <p className="mb-6 flex-grow text-sm text-slate-400">
              Para contratistas de mantenimiento: control diario de lo ejecutado frente a lo planeado,
              operación offline y exportación por archivo hacia el ERP del operador — sin API ni doble
              digitación. Roles de supervisor, planeador y programador; módulo{" "}
              <strong className="text-slate-300">Falion</strong> de IA bajo control humano.
            </p>
            <div className="mb-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
              Sin integraciones API · Offline-first · Operativo en días
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/fixai-cmms"
                className="flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
              >
                Ver Fix AI <ArrowRight size={16} />
              </a>
              <a
                href="/falion"
                className="flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-blue-400"
              >
                Conoce Falion → <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-blue-400">RCA · Weibull · FMECA</span>
              </a>
            </div>
          </div>

          {/* Veriwork */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-emerald-500/50">
            <div className="mb-6 inline-block text-emerald-500">
              <ShieldCheck size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Veriwork</h3>
            <p className="mb-4 text-sm font-bold text-emerald-400">Gestión HSE verificable</p>
            <p className="mb-6 flex-grow text-sm text-slate-400">
              Permisos de trabajo digitales con firma criptográfica y verificación pública instantánea. El sistema
              alerta automáticamente cuando algo se sale de norma — la autorización y la firma del permiso siguen
              siendo de la persona competente para hacerlo.
            </p>
            <div className="mb-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
              Trazabilidad diseñada para detectar alteraciones · Cumplimiento Res. 0312 · Dec. 1072
            </div>
            <a
              href="/veriwork"
              className="flex items-center gap-2 text-sm font-bold text-emerald-400 transition hover:text-emerald-300"
            >
              Ver Veriwork <ArrowRight size={16} />
            </a>
          </div>

          {/* Nexvia */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-amber-500/50">
            <div className="mb-6 inline-block text-amber-500">
              <Truck size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Nexvia</h3>
            <p className="mb-4 text-sm font-bold text-amber-400">Gestión de Flotas HSEQ</p>
            <p className="mb-6 flex-grow text-sm text-slate-400">
              Tu flota, bajo control, incluso sin internet. HSEQ, Talleres, Personales y EV.
              Scoring de riesgo con el acelerómetro del celular — sin hardware adicional.
              Pasaporte digital del vehículo y trazabilidad con hash SHA-256 del documento.
            </p>
            <div className="mb-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
              Offline-first · ISO 9001 · Normativo CO nativo
            </div>
            <a
              href="/nexvia"
              className="flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-amber-300"
            >
              Ver Nexvia <ArrowRight size={16} />
            </a>
          </div>

          {/* Shield AI */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-violet-500/50">
            <div className="mb-6 inline-block text-violet-400">
              <Brain size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Shield AI</h3>
            <p className="mb-4 text-sm font-bold text-violet-400">SG-SST para toda empresa</p>
            <p className="mb-6 flex-grow text-sm text-slate-400">
              La Res. 0312 obliga a toda empresa colombiana desde 1 trabajador. Shield AI detecta brechas,
              genera la evidencia documental y alerta antes de que venzan los plazos. El responsable
              revisa y firma. Retención mínima 20 años (Dec. 1072).
            </p>
            <div className="mb-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
              Res. 0312 · Decreto 1072 · Firma dual · Retención 20 años
            </div>
            <a
              href="/shield-ai"
              className="flex items-center gap-2 text-sm font-bold text-violet-400 transition hover:text-violet-300"
            >
              Ver Shield AI <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
