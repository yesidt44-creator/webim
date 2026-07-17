import Image from "next/image";
import { headers } from "next/headers";
import {
  Smartphone,
  WifiOff,
  ShieldCheck,
  RefreshCw,
  LayoutDashboard,
  Sparkles,
  Lock,
  Package,
  Layers,
} from "lucide-react";
import { FixAICta } from "./FixAICta";

const fixAiJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fix AI",
  alternateName: [
    "FixAI CMMS",
    "Fix AI PWA mantenimiento",
    "software mantenimiento industrial Colombia",
    "CMMS contratistas Oil Gas Colombia",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CMMS, EAM, Mantenimiento Industrial",
  operatingSystem: "Web, PWA, Android, iOS",
  description:
    "Fix AI es una PWA de gestión de mantenimiento industrial con IA diseñada para contratistas. Digitaliza el ciclo completo de ejecución: reporte de campo offline, supervisión, exportación compatible con el ERP del operador y módulo Falion de análisis de confiabilidad.",
  keywords:
    "Fix AI CMMS, software mantenimiento industrial Colombia, PWA mantenimiento industrial, reporte OT digital Colombia, CMMS Oil Gas Colombia, mantenimiento offline campo, Falion IA confiabilidad, gestión mantenimiento Colombia",
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
      knowsAbout: [
      "Mantenimiento industrial",
      "CMMS contratistas",
      "Oil & Gas Colombia",
      "Confiabilidad industrial",
      "ERP mantenimiento",
    ],
  },
  featureList: [
    "Reporte de campo con foto, firma electrónica y hash de trazabilidad",
    "Modo offline-first para zonas sin cobertura",
    "Supervisión y aprobación digital de reportes antes de ERP",
    "Exportación compatible con el ERP del operador (IW38/IW41 y otros formatos)",
    "Dashboard en tiempo real: backlog, OTs sin tratar y avance por frente",
    "Falion: módulo de IA para análisis de confiabilidad y hallazgos recurrentes",
    "Aislamiento de datos por empresa (multiproyecto)",
    "Control de repuestos y consumibles por orden de trabajo",
  ],
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent?: "blue" | "emerald" | "violet";
};

const FeatureCard = ({ icon, title, desc, accent = "blue" }: FeatureCardProps) => {
  const colors = {
    blue:    "text-blue-500 group-hover:bg-blue-500/10 border-blue-500/20",
    emerald: "text-emerald-500 group-hover:bg-emerald-500/10 border-emerald-500/20",
    violet:  "text-violet-400 group-hover:bg-violet-500/10 border-violet-500/20",
  };
  return (
    <li className="group flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900">
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${colors[accent]}`} aria-hidden="true">
        {icon}
      </div>
      <div>
        <h4 className="mb-1.5 font-bold text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
      </div>
    </li>
  );
};

type StatProps = { value: string; label: string; sub: string };
const Stat = ({ value, label, sub }: StatProps) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 transition-colors hover:border-blue-500/30">
    <div className="mb-2 text-3xl font-extrabold tracking-tight text-blue-400 md:text-4xl">{value}</div>
    <p className="text-sm font-bold text-white">{label}</p>
    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{sub}</p>
  </div>
);

export const FixAI = async () => {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <section
      id="fixai"
      aria-labelledby="fixai-heading"
      className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fixAiJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* ── HERO ────────────────────────────────────────────── */}
        <div className="mb-20 grid items-start gap-12 lg:grid-cols-2">
          <div className="max-w-3xl">

            {/* Logo */}
            <div className="mb-8 inline-flex items-center rounded-2xl border border-slate-800 bg-white px-6 py-4 shadow-lg">
              <Image
                src="/fixai-logo.png"
                alt="Fix AI — Software de mantenimiento industrial"
                width={180}
                height={60}
                className="h-10 w-auto object-contain"
                priority
                unoptimized
              />
            </div>

            <p className="mb-3 text-xs font-bold tracking-widest text-blue-500 uppercase">
              PWA · Gestión de Mantenimiento Industrial con IA
            </p>

            <h2
              id="fixai-heading"
              className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl"
              itemProp="name"
            >
              Todo registrado.<br />
              <span className="text-blue-400">Nada se te escapa.</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-400" itemProp="description">
              Gestión de mantenimiento industrial con inteligencia artificial, diseñada para{" "}
              <strong className="text-white">contratistas de mantenimiento</strong> — y para cualquier
              organización que necesite un{" "}
              <strong className="text-white">CMMS completo</strong> adaptado a su operación real.
            </p>

            {/* El problema */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
              <p className="mb-2 text-xs font-bold tracking-widest text-amber-500 uppercase">El problema que resolvemos</p>
              <p className="text-sm leading-relaxed text-slate-300">
                Los contratistas de mantenimiento Oil &amp; Gas enfrentan un reto diario: la ejecución en campo
                y el registro administrativo viven separados. Reportes en papel, Excel sin control, y una persona
                dedicada solo a re-digitar en el ERP del operador — con el riesgo constante de penalizaciones por órdenes que
                no cierran a tiempo. <strong className="text-white">Fix AI existe para cerrar esa brecha.</strong>
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-8">
            <p className="mb-2 text-xs font-bold tracking-widest text-slate-500 uppercase">Qué cambia en la operación</p>
            <h3 className="mb-6 text-base font-bold text-white">
              Lo que cambia cuando el campo y el ERP hablan el mismo idioma
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat
                value="0"
                label="Doble digitación"
                sub="Del reporte de campo directamente al formato de carga del ERP — sin reingreso manual de datos."
              />
              <Stat
                value="Completa"
                label="Trazabilidad por OT"
                sub="Arquitectura diseñada para que cada reporte lleve hash, timestamp y firma desde el primer minuto."
              />
              <Stat
                value="↑ Cierre de OTs"
                label="Visibilidad en tiempo real"
                sub="El planeador ve backlog y estado por frente en tiempo real para actuar antes de que venzan los plazos."
              />
              <Stat
                value="Offline"
                label="Funciona sin señal"
                sub="El técnico reporta, toma fotos y firma sin cobertura. La sincronización es automática al recuperar red."
              />
            </div>
          </div>
        </div>

        {/* ── QUÉ ES FIX AI ───────────────────────────────────── */}
        <div className="group relative mb-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <div className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-40 blur-[120px] transition-colors group-hover:bg-blue-500/10" aria-hidden="true" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest text-blue-500 uppercase">¿Qué es Fix AI?</p>
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Una PWA que digitaliza todo el ciclo de ejecución de mantenimiento
              </h3>
              <p className="mb-5 leading-relaxed text-slate-400">
                Fix AI es una <strong className="text-white">aplicación web progresiva (PWA)</strong> que acompaña
                al técnico desde que recibe la orden de trabajo en campo hasta que el reporte queda listo para
                cargarse en el ERP. Compatible con el ERP del operador —incluyendo SAP PM (IW38/IW41) y otros—{" "}
                <em>sin licencias adicionales ni acceso API</em>.
              </p>
              <p className="leading-relaxed text-slate-400">
                Y cuando la operación lo requiere, Fix AI puede ir un paso más allá:{" "}
                <strong className="text-white">convertirse en el CMMS principal</strong> de la organización,
                asumiendo la gestión completa de mantenimiento.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Compatible con el ERP del operador", color: "blue" },
                { label: "Exportación IW38/IW41 y otros formatos", color: "blue" },
                { label: "Sin integración API", color: "emerald" },
                { label: "PWA nativa móvil", color: "emerald" },
                { label: "Multisector", color: "violet" },
                { label: "CMMS completo opcional", color: "violet" },
              ].map(({ label, color }) => (
                <span key={label} className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  color === "blue"    ? "border-blue-500/30 bg-blue-500/10 text-blue-300" :
                  color === "emerald" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" :
                  "border-violet-500/30 bg-violet-500/10 text-violet-300"
                }`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── SCREENSHOTS ─────────────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold tracking-widest text-slate-500 uppercase">Fix AI en acción</p>
            <h3 className="text-2xl font-bold text-white">Así lo ve el técnico en campo y el planeador en oficina</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="overflow-hidden rounded-3xl border border-slate-700 shadow-2xl shadow-blue-950/50" style={{ width: 240 }}>
                <Image
                  src="/fixai-screen-1.png"
                  alt="Fix AI — Tablero de planeación con KPIs: OTs semana, cumplimiento, backlog y sesiones pendientes"
                  width={540}
                  height={960}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
              <p className="text-center text-xs text-slate-500">Dashboard del planeador — KPIs y cumplimiento semanal</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="overflow-hidden rounded-3xl border border-slate-700 shadow-2xl shadow-blue-950/50" style={{ width: 240 }}>
                <Image
                  src="/fixai-screen-2.png"
                  alt="Fix AI — Formulario de ejecución de OT con clasificación, fecha y encabezado de la orden de trabajo"
                  width={540}
                  height={960}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
              <p className="text-center text-xs text-slate-500">Ejecución de OT en campo — paso a paso guiado</p>
            </div>
          </div>
        </div>

        {/* ── FEATURES ────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold tracking-widest text-blue-500 uppercase">Funcionalidades principales</p>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Todo lo que necesita el contratista para operar sin fricción</h3>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 list-none p-0" aria-label="Funcionalidades de Fix AI" itemProp="featureList">
            <FeatureCard
              icon={<Smartphone size={20} />}
              title="Reporte de campo sin fricción"
              desc="Evidencia fotográfica, hallazgos técnicos, repuestos y firma electrónica con hash + timestamp desde el celular. Código único de trazabilidad por reporte."
              accent="blue"
            />
            <FeatureCard
              icon={<WifiOff size={20} />}
              title="Funciona sin conexión"
              desc="100% offline en campo. El técnico reporta, toma fotos y firma sin señal. Sincronización automática al recuperar conexión. Ninguna captura se pierde."
              accent="blue"
            />
            <FeatureCard
              icon={<ShieldCheck size={20} />}
              title="Supervisión con control real"
              desc="El supervisor audita y aprueba cada reporte antes de que pase al ERP. Calidad de información blindada. Supervisor en campo, no corrigiendo papeles."
              accent="emerald"
            />
            <FeatureCard
              icon={<RefreshCw size={20} />}
              title="Ciclo nativo con el ERP"
              desc="Importación del programa semanal → ejecución → exportación lista para el ERP del operador (compatible con IW38/IW41 y otros formatos). Sin doble digitación."
              accent="emerald"
            />
            <FeatureCard
              icon={<Layers size={20} />}
              title="Se adapta a cualquier industria"
              desc="Arquitectura personalizable según procesos, checklists, roles y flujos de aprobación. Oil & Gas, manufactura, energía y más."
              accent="blue"
            />
            <FeatureCard
              icon={<LayoutDashboard size={20} />}
              title="Visibilidad total para el planeador"
              desc="Dashboard en tiempo real con backlog, órdenes sin tratar, parciales y avance por frente — disponible 24/7, actualizado al instante."
              accent="blue"
            />
            <FeatureCard
              icon={<Sparkles size={20} />}
              title="Falion — IA de confiabilidad"
              desc="Módulo de IA que analiza el historial de reportes para identificar equipos críticos y hallazgos recurrentes. Insumo directo para decisiones operativas y negociación de contratos."
              accent="violet"
            />
            <FeatureCard
              icon={<Package size={20} />}
              title="Control de repuestos"
              desc="Seguimiento diario de materiales por orden de trabajo y ejecutor con costos asociados. Soporte directo para la facturación al operador."
              accent="blue"
            />
          </ul>
        </div>

        {/* ── PARA QUIÉN ──────────────────────────────────────── */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20">
                <Lock size={16} className="text-blue-400" aria-hidden="true" />
              </div>
              <h4 className="font-bold text-white">Para el contratista</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Fix AI nace pensado para el <strong className="text-slate-200">contratista de mantenimiento</strong> que
              opera bajo outsourcing — con el ERP del operador o sin uno. Horas documentadas,
              cumplimiento de OTs y evidencia lista para facturar. Cada funcionalidad está diseñada para
              su rentabilidad y su cumplimiento contractual.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20">
                <LayoutDashboard size={16} className="text-emerald-400" aria-hidden="true" />
              </div>
              <h4 className="font-bold text-white">Para el operador dueño del activo</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              La información operacional real que Fix AI captura en campo —ejecución, hallazgos, tiempos,
              condición de equipos— es exactamente el insumo que una compañía necesita para{" "}
              <strong className="text-slate-200">ajustar su plan de mantenimiento a su realidad operativa</strong>,
              sin que esa información se pierda en estructuras jerárquicas. Una vía directa desde el campo
              hasta quien toma las decisiones.
            </p>
          </div>
        </div>

        {/* ── SEGURIDAD ───────────────────────────────────────── */}
        <div className="mb-20 rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <Lock className="mb-4 text-slate-500" size={28} aria-hidden="true" />
          <h3 className="mb-3 text-xl font-bold text-white">Seguridad y cumplimiento</h3>
          <ul className="grid gap-3 sm:grid-cols-3 list-none p-0">
            {[
              { label: "Aislamiento por empresa", desc: "Datos de cada proyecto completamente separados a nivel de base de datos. Ideal para operaciones con múltiples clientes o proyectos." },
              { label: "Ley 1581 Habeas Data", desc: "Cumplimiento de la normativa colombiana de protección de datos personales, con consentimiento explícito del usuario." },
              { label: "Auditoría de acciones críticas", desc: "Registro inmutable de cada acción relevante: firma, aprobación, exportación. Trazabilidad forense completa." },
            ].map(item => (
              <li key={item.label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="mb-1 text-sm font-bold text-slate-200">{item.label}</p>
                <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4 border-t border-slate-800 pt-5">
            <Image
              src="/badges/iso-9001-ll-c.png"
              alt="Certificación ISO 9001 — LL-C Certification"
              width={160}
              height={63}
              className="opacity-90"
            />
            <p className="text-xs leading-relaxed text-slate-500">
              Respaldo de compañía certificada <strong className="text-slate-400">ISO 9001:2015</strong> por LL-C Certification.
            </p>
          </div>
        </div>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-emerald-500" aria-hidden="true" />
          <div className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-40 blur-[100px]" aria-hidden="true" />
          <div className="relative z-10">
            <h3 className="mb-4 text-3xl font-bold text-white">
              ¿Listo para que el campo y el ERP hablen el mismo idioma?
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-slate-400">
              Fix AI funciona con el ERP del operador o como{" "}
              <strong className="text-white">CMMS independiente</strong>. Sin licencias adicionales,
              sin integraciones complejas — operativo en días, no en meses.
            </p>
            <FixAICta />
          </div>
        </div>

      </div>
    </section>
  );
};
