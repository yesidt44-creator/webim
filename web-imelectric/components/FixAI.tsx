import type { ReactNode } from "react";
import {
  Cpu,
  WifiOff,
  CalendarDays,
  Lock,
  Mic,
  LayoutDashboard,
  FileText,
  CheckCircle2,
  TrendingDown,
  Timer,
  Wallet,
  ClipboardList,
} from "lucide-react";
import { FixAICta } from "./FixAICta";

const fixAiJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FixAI CMMS",
  alternateName: ["CMMS con IA", "Software mantenimiento industrial", "CMMS Colombia", "CMMS Latinoamérica"],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CMMS, EAM, Mantenimiento Industrial",
  operatingSystem: "Web, Android, iOS",
  description:
    "FixAI CMMS es el software de mantenimiento industrial con inteligencia artificial para upstream oil & gas en Colombia y Latinoamérica. Digitaliza órdenes de trabajo, aplica taxonomía ISO 14224, funciona offline-first y genera KPIs de confiabilidad (MTBF, MTTR) en tiempo real.",
  keywords:
    "CMMS con IA, FixAI CMMS, software mantenimiento industrial, mantenimiento con inteligencia artificial, CMMS Colombia, CMMS Latinoamérica, ISO 14224, mantenimiento oil gas, MTBF, MTTR, confiabilidad industrial",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "PriceSpecification",
      description: "Precio según auditoría de viabilidad. Contactar para demo técnica.",
    },
  },
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
    areaServed: ["Colombia", "Latinoamérica"],
    knowsAbout: ["Mantenimiento industrial", "ISO 14224", "Oil & Gas", "CMMS", "EAM", "Confiabilidad"],
  },
  featureList: [
    "Órdenes de trabajo digitales con foto y firma electrónica",
    "Taxonomía automática ISO 14224 para oil & gas",
    "Modo offline-first para zonas sin cobertura en upstream",
    "Mantenimiento preventivo planificado con alertas automáticas",
    "Dashboard KPIs: disponibilidad, MTBF y MTTR en tiempo real",
    "Asistente de IA en lenguaje natural para supervisores",
    "Candado digital EDSO (bloqueo y etiquetado)",
    "Roles diferenciados para técnicos y supervisores",
  ],
};

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
      <div className="text-blue-500/80" aria-hidden="true">{icon}</div>
    </div>
    <p className="text-sm font-bold text-white">{label}</p>
    <p className="mt-2 text-xs leading-relaxed text-slate-500">{hint}</p>
  </div>
);

export const FixAI = () => {
  return (
    <section
      id="fixai"
      aria-labelledby="fixai-heading"
      className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* JSON-LD estructurado para Google */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fixAiJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera + indicadores de ahorro */}
        <div className="mb-20 grid items-start gap-12 lg:grid-cols-2">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-2 text-blue-500 text-xs font-bold tracking-widest uppercase">
              <Cpu size={20} aria-hidden="true" />
              CMMS de Campo con Inteligencia Artificial
            </p>
            <h2
              id="fixai-heading"
              className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-6xl"
              itemProp="name"
            >
              FixAI CMMS: software de mantenimiento industrial con IA para Colombia y Latinoamérica.
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-400" itemProp="description">
              El primer <strong>CMMS con inteligencia artificial</strong> diseñado para el{" "}
              <strong>mantenimiento oil &amp; gas</strong> en el upstream latinoamericano. Digitalice órdenes de
              trabajo en campo, aplique la norma <strong>ISO 14224</strong> de forma automática y elimine el papeleo
              donde los sistemas complejos fallan. Disponible para empresas en <strong>Colombia</strong> y toda{" "}
              <strong>Latinoamérica</strong>.
            </p>
            <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300">
              <span className="font-bold text-blue-400">Diferencial clave:</span>
              <span>Mantenimiento Preventivo Planificado con alertas automáticas y trazabilidad forense digital.</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-8">
            <p className="mb-2 text-xs font-bold tracking-widest text-slate-500 uppercase">Impacto medible (referencial)</p>
            <h3 className="mb-6 text-lg font-bold text-white">
              Ahorro y eficiencia con el software de mantenimiento industrial FixAI CMMS
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <SavingsStat
                value="30%"
                label="Menos tiempo improductivo"
                hint="Reducción de paradas y retrabajo vinculada a mejor planificación y datos confiables."
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
                label="Menos tiempo en reportes"
                hint="De papel o Excel a formularios guiados con fotos y firma en un solo flujo móvil."
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
              Porcentajes orientativos según madurez de datos y adopción en planta; su ingeniero IMELECTRIC los
              aterriza en una auditoría de viabilidad gratuita.
            </p>
          </div>
        </div>

        {/* Taxonomía Industrial ISO 14224 */}
        <div className="group relative mb-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <div
            className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-32 blur-[120px] transition-colors group-hover:bg-blue-500/10"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <CheckCircle2 className="mb-6 text-blue-500" size={32} aria-hidden="true" />
            <h3 className="mb-4 text-3xl font-bold">Taxonomía Industrial ISO 14224 integrada</h3>
            <p className="mb-8 max-w-3xl leading-relaxed text-slate-400">
              FixAI CMMS clasifica automáticamente equipos y modos de falla bajo el estándar global{" "}
              <strong>ISO 14224</strong>. La jerarquía operativa unificada{" "}
              <code className="rounded bg-slate-800 px-2 py-1 font-mono text-sm text-white">
                Equipos &gt; Clase &gt; Tipo &gt; Subsistema
              </code>{" "}
              permite análisis de confiabilidad cuantitativo, reportes MTBF/MTTR comparables entre sitios y handover
              claro entre turnos y contratistas.
            </p>
            <ul className="mb-8 flex flex-wrap gap-3 list-none p-0" aria-label="Métricas ISO 14224">
              <li className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300">
                +35% consistencia de datos de falla
              </li>
              <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-300">
                −50% tiempo armando informes RCA / KPI
              </li>
              <li className="rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 font-mono text-xs text-slate-400">
                Ejemplo: BOMBA-CENTRIFUGA-01 &gt; Transmisión
              </li>
            </ul>
            <ul className="max-w-2xl space-y-3 text-sm text-slate-400">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
                <span>
                  Misma taxonomía en campo y en oficina: menos reinterpretación y menos errores al consolidar datos de
                  mantenimiento industrial.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
                <span>
                  Base sólida para MTBF, MTTR, Pareto de modos de falla y decisiones de mantenimiento basadas en
                  evidencia verificable.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Módulos del CMMS */}
        <h3 className="sr-only">Módulos operativos de FixAI CMMS</h3>
        <ul
          className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4 list-none p-0"
          aria-label="Módulos de FixAI CMMS"
          itemProp="featureList"
        >
          <ValueCard
            icon={<FileText size={24} />}
            title="Órdenes de Trabajo digitales"
            desc="Con fotos, firma electrónica y trazabilidad desde cualquier dispositivo móvil."
          />
          <ValueCard
            icon={<Cpu size={24} />}
            title="IA y análisis ISO 14224"
            desc="Clasificación automática de fallas para modelos de confiabilidad y análisis probabilístico."
          />
          <ValueCard
            icon={<WifiOff size={24} />}
            title="Offline-First en campo"
            desc="Funciona al 100% sin cobertura de red en operaciones upstream oil & gas."
          />
          <ValueCard
            icon={<CalendarDays size={24} />}
            title="Mantenimiento Preventivo"
            desc="Alertas automáticas por tiempo, condición o contadores de operación."
          />
          <ValueCard
            icon={<LayoutDashboard size={24} />}
            title="Dashboard KPIs en tiempo real"
            desc="Disponibilidad, MTBF y MTTR auditables para supervisores y gerencias."
          />
          <ValueCard
            icon={<Mic size={24} />}
            title="Asistente de IA"
            desc="Consultas en lenguaje natural para supervisores técnicos y equipos de mantenimiento."
          />
          <ValueCard
            icon={<Lock size={24} />}
            title="Candado digital EDSO"
            desc="Trazabilidad completa de bloqueo y etiquetado para seguridad operativa."
          />
          <ValueCard
            icon={<CheckCircle2 size={24} />}
            title="Roles diferenciados"
            desc="Perfiles para técnicos de campo y supervisores con control de acceso y trazabilidad."
          />
        </ul>

        {/* CTA */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
          <div
            className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-emerald-500"
            aria-hidden="true"
          />
          <h3 className="mb-4 text-3xl font-bold">
            ¿Listo para implementar un CMMS con IA en su planta industrial?
          </h3>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            FixAI es el <strong className="text-white">software de mantenimiento industrial con inteligencia
            artificial</strong> que su operación necesita para pasar del mantenimiento reactivo al proactivo,
            con trazabilidad digital, cumplimiento <strong className="text-white">ISO 14224</strong> y disponible
            hoy en <strong className="text-white">Colombia y Latinoamérica</strong>.
          </p>
          <FixAICta />
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <li className="group flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:bg-slate-900">
    <div className="text-blue-500 transition-transform group-hover:scale-110" aria-hidden="true">{icon}</div>
    <h4 className="font-bold text-white">{title}</h4>
    <p className="flex-grow text-sm leading-relaxed text-slate-500">{desc}</p>
  </li>
);
