"use client";

import type { ReactNode } from "react";
import { ContactModal } from "./ContactModal";
import {
  Cpu,
  WifiOff,
  CalendarDays,
  Lock,
  Mic,
  LayoutDashboard,
  FileText,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Timer,
  Wallet,
  ClipboardList,
} from "lucide-react";

const SavingsStat = ({
  value,
  label,
  hint,
  icon,
}: {
  value: string;
  label: string;
  hint: string;
  icon: ReactNode;
}) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 transition-colors hover:border-blue-500/40">
    <div className="mb-3 flex items-center justify-between gap-2">
      <span className="text-3xl font-extrabold tracking-tight text-blue-400 md:text-4xl">{value}</span>
      <div className="text-blue-500/80">{icon}</div>
    </div>
    <p className="text-sm font-bold text-white">{label}</p>
    <p className="mt-2 text-xs leading-relaxed text-slate-500">{hint}</p>
  </div>
);

export const FixAI = () => {
  return (
    <section id="fixai" className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera + indicadores de ahorro (sin imágenes) */}
        <div className="mb-20 grid items-start gap-12 lg:grid-cols-2">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-blue-500">
              <Cpu size={20} />
              <span className="text-xs font-bold tracking-widest uppercase">CMMS de Campo con Inteligencia Artificial</span>
            </div>
            <h2 className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-6xl">
              FixAI CMMS: El cerebro operativo de su planta.
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-400">
              El primer CMMS con IA diseñado específicamente para el upstream oil &amp; gas latinoamericano. Digitalice la
              captura de datos en campo, blinde la trazabilidad técnica y elimine el papeleo donde los sistemas complejos
              fallan.
            </p>
            <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300">
              <span className="font-bold text-blue-400">Diferencial Crítico:</span>
              <span>Mantenimiento Preventivo Planificado con Alertas Automáticas y Trazabilidad Forense.</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-8">
            <p className="mb-2 text-xs font-bold tracking-widest text-slate-500 uppercase">Impacto medible (referencial)</p>
            <h3 className="mb-6 text-lg font-bold text-white">Ahorro y eficiencia con FixAI en campo</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <SavingsStat
                value="30%"
                label="Menos tiempo improductivo"
                hint="Reducción referida a paradas y retrabajo vinculado a mejor planificación y datos confiables."
                icon={<TrendingDown size={22} />}
              />
              <SavingsStat
                value="25%"
                label="Ahorro en costos operativos"
                hint="Menos horas administrativas, menos reprocesos y mejor uso de cuadrillas y repuestos."
                icon={<Wallet size={22} />}
              />
              <SavingsStat
                value="85%"
                label="Menos tiempo en reporte"
                hint="De la captura en papel o Excel a formularios guiados, fotos y firma en un solo flujo móvil."
                icon={<Timer size={22} />}
              />
              <SavingsStat
                value="40%"
                label="Más OTs cerradas a tiempo"
                hint="Priorización visible, alertas de preventivo y trazabilidad que aceleran el cierre auditado."
                icon={<ClipboardList size={22} />}
              />
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-slate-600">
              Porcentajes orientativos según mix de proceso, madurez de datos y adopción en planta; su ingeniero IMELECTRIC
              los aterriza en una auditoría rápida.
            </p>
          </div>
        </div>

        {/* Taxonomía Industrial ISO 14224 — solo texto + métricas */}
        <div className="group relative mb-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <div className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-32 blur-[120px] transition-colors group-hover:bg-blue-500/10"></div>
          <div className="relative z-10">
            <CheckCircle2 className="mb-6 text-blue-500" size={32} />
            <h3 className="mb-4 text-3xl font-bold">Taxonomía Industrial ISO 14224</h3>
            <p className="mb-8 max-w-3xl leading-relaxed text-slate-400">
              FixAI clasifica automáticamente sus equipos y fallas bajo el estándar global <strong>ISO 14224</strong>. La
              jerarquía operativa unificada{" "}
              <span className="rounded bg-slate-800 px-2 py-1 font-mono text-sm text-white">
                Equipos &gt; Clase &gt; Tipo &gt; Subsistema
              </span>{" "}
              permite análisis de confiabilidad cuantitativo, reportes comparables entre sitios y handover claro entre
              turnos y contratistas.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300">
                +35% consistencia de datos de falla
              </span>
              <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-300">
                −50% tiempo armando informes RCA / KPI
              </span>
              <span className="rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 font-mono text-xs text-slate-400">
                EJEMPLO: BOMBA-CENTRIFUGA-01 &gt; Transmisión
              </span>
            </div>
            <ul className="max-w-2xl space-y-3 text-sm text-slate-400">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                Misma taxonomía en campo y en oficina: menos reinterpretación y menos errores al consolidar.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                Base sólida para MTBF/MTTR, Pareto de modos de falla y decisiones de mantenimiento basadas en evidencia.
              </li>
            </ul>
          </div>
        </div>

        {/* Módulos Operativos (Grid) */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon={<FileText size={24} />}
            title="Órdenes de Trabajo"
            desc="Digitales, con fotos y firma electrónica desde el móvil."
          />
          <ValueCard
            icon={<Cpu size={24} />}
            title="IA y Análisis ISO"
            desc="Clasificación automática de fallas según ISO 14224 para modelos probabilísticos."
          />
          <ValueCard
            icon={<WifiOff size={24} />}
            title="Offline-First"
            desc="Funciona al 100% sin cobertura en Upstream Oil & Gas."
          />
          <ValueCard
            icon={<CalendarDays size={24} />}
            title="Preventivo Planificado"
            desc="Alertas automáticas basadas en tiempo, condición o contadores."
          />
          <ValueCard
            icon={<LayoutDashboard size={24} />}
            title="Dashboard KPIs"
            desc="Disponibilidad, MTBF y MTTR en tiempo real y auditables."
          />
          <ValueCard
            icon={<Mic size={24} />}
            title="Asistente de IA"
            desc="Consultas en lenguaje natural para supervisores técnicos."
          />
          <ValueCard
            icon={<Lock size={24} />}
            title="Candado Digital EDSO"
            desc="Trazabilidad completa de bloqueo y etiquetado operativo."
          />
          <ValueCard
            icon={<CheckCircle2 size={24} />}
            title="Roles Diferenciados"
            desc="Perfiles para técnicos de campo y supervisores con trazabilidad."
          />
        </div>

        {/* Llamado a la Acción Técnica */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-emerald-500"></div>
          <h3 className="mb-4 text-3xl font-bold">¿Listo para auditar su confiabilidad con datos reales?</h3>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            FixAI es el cerebro operativo que su planta necesita para pasar del mantenimiento reactivo al proactivo con
            blindaje digital.
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

const ValueCard = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <div className="group flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:bg-slate-900">
    <div className="text-blue-500 transition-transform group-hover:scale-110">{icon}</div>
    <h4 className="mb-2 font-bold text-white">{title}</h4>
    <p className="flex-grow text-sm leading-relaxed text-slate-500">{desc}</p>
  </div>
);
