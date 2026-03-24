"use client";

import type { ReactNode } from "react";
import {
  ShieldCheck,
  WifiOff,
  QrCode,
  ArrowRight,
  Database,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";
import { ContactModal } from "./ContactModal";

export const Nexvia = () => {
  return (
    <section id="nexvia" className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera Estratégica */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 flex items-center gap-2 text-blue-500">
            <ShieldCheck size={20} />
            <span className="text-xs font-bold tracking-widest uppercase">Gestión de Flotas e ISO 9001</span>
          </div>
          <h2 className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-6xl">
            Nexvia: La evolución del <span className="text-blue-500">control de flota</span> en Colombia.
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Diseñada para PyMEs de transporte que buscan dar el salto a la digitalización total. Nexvia integra operación,
            seguridad vial y HSEQ en una sola fuente de verdad auditable.
          </p>
        </div>

        {/* Bloque 1: KPIs y Operación Offline */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-blue-500/10 p-2 text-blue-400">
                <WifiOff size={24} />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-white">Operación real en zonas de silencio</h3>
              <p className="mb-6 leading-relaxed text-slate-400">
                Sabemos que las rutas colombianas no siempre tienen señal. Nexvia utiliza tecnología{" "}
                <strong>offline-first</strong> para permitir que los conductores completen checklists preoperacionales y
                reportes de riesgo totalmente sin internet.
              </p>
            </div>

            {/* CUADRO DE KPIs LOGRABLES */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-tighter text-blue-400 uppercase">
                  <Clock size={14} /> Tiempo de Reporte
                </div>
                <div className="text-3xl font-extrabold text-white">&lt; 3 min</div>
                <p className="mt-1 text-[10px] text-slate-500 uppercase">Reducción desde 20 min originales</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-tighter text-emerald-400 uppercase">
                  <TrendingDown size={14} /> Ahorro Admin
                </div>
                <div className="text-3xl font-extrabold text-white">+300h</div>
                <p className="mt-1 text-[10px] text-slate-500 uppercase">Horas/mes liberadas (30 técnicos)</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-tighter text-amber-400 uppercase">
                  <ShieldCheck size={14} /> Trazabilidad
                </div>
                <div className="text-3xl font-extrabold text-white">100%</div>
                <p className="mt-1 text-[10px] text-slate-500 uppercase">Auditable y legalmente blindado</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-tighter text-purple-400 uppercase">
                  <Database size={14} /> Digitalización
                </div>
                <div className="text-3xl font-extrabold text-white">100%</div>
                <p className="mt-1 text-[10px] text-slate-500 uppercase">Eliminación total del papel</p>
              </div>
            </div>
          </div>

          {/* Bloque de Respaldo Técnico */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">
            <div className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-32 blur-[120px] transition-colors group-hover:bg-blue-500/10"></div>
            <div className="relative z-10">
              <h4 className="mb-6 border-b border-slate-800 pb-4 text-xl font-bold text-white">Beneficios Estratégicos</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Blindaje Legal ante Incidentes</span>
                    <p className="mt-1 text-xs text-slate-400">
                      Toda la cadena de decisión documentada e inalterable para protección ante auditorías.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Verificación Automática de Competencias</span>
                    <p className="mt-1 text-xs text-slate-400">
                      El sistema impide que un conductor sin certificación o aval vigente opere el vehículo.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Ahorro de Costos Masivo</span>
                    <p className="mt-1 text-xs text-slate-400">
                      Una solución 10 a 20 veces más económica que las plataformas globales de EE.UU..
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Módulos Operativos (Grid) */}
        <div className="grid gap-8 md:grid-cols-3">
          <FeatureItem
            icon={<ClipboardCheck size={24} />}
            title="Inspección Preoperacional"
            text="Formularios digitales personalizados con validación de competencias de conductor y estado del vehículo antes del viaje."
          />
          <FeatureItem
            icon={<AlertTriangle size={24} />}
            title="Evaluación de Riesgo"
            text="Matriz de 8 criterios que incluye evaluación de fatiga y flujo de aprobación por email con tokens UUID de un solo uso."
          />
          <FeatureItem
            icon={<QrCode size={24} />}
            title="Satisfacción del Cliente"
            text="Encuestas vinculadas directamente al viaje mediante códigos QR, permitiendo métricas de calidad en tiempo real."
          />
        </div>

        {/* Llamado a la Acción */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-blue-500/30 bg-blue-600/10 p-12 text-center">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500"></div>
          <h3 className="mb-4 text-3xl font-bold text-white">¿Listo para digitalizar su flota hoy mismo?</h3>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Nexvia es el único sistema nativo colombiano que integra transporte e HSEQ. Agende una demostración técnica.
          </p>
          <ContactModal>
            <button
              type="button"
              className="mx-auto flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-4 font-bold text-white shadow-lg shadow-blue-900/50 transition hover:bg-blue-500"
            >
              Solicitar Demo Técnica <ArrowRight size={20} />
            </button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => (
  <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:bg-slate-900">
    <div className="mb-4 text-blue-500 transition-transform group-hover:scale-110">{icon}</div>
    <h4 className="mb-2 text-lg font-bold text-white">{title}</h4>
    <p className="text-sm leading-relaxed text-slate-500">{text}</p>
  </div>
);
