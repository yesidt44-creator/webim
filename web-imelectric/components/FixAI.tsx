import Image from "next/image";
import { headers } from "next/headers";
import {
  WifiOff,
  ShieldCheck,
  LayoutDashboard,
  Sparkles,
  Lock,
  Package,
  Eye,
  Layers,
  Copy,
  Target,
  Wrench,
  Building2,
  Scale,
  BadgeCheck,
  Bell,
  Activity,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { FixAICta } from "./FixAICta";
import { ProductTour } from "./ProductTour";

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
    "Fix AI es una PWA de control de ejecución del plan de mantenimiento con IA, diseñada para contratistas. Control diario de lo ejecutado frente a lo planeado, operación offline, supervisión digital, exportación compatible con el ERP del operador y módulo Falion de análisis de confiabilidad.",
  keywords:
    "Fix AI CMMS, control ejecución plan mantenimiento, software mantenimiento industrial Colombia, PWA mantenimiento industrial, reporte OT digital Colombia, CMMS Oil Gas Colombia, mantenimiento offline campo, Falion IA confiabilidad, gestión mantenimiento Colombia",
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
    "Control de ejecución del plan de mantenimiento (ejecutado vs. planeado)",
    "Modo offline-first para zonas sin cobertura",
    "Supervisión y aprobación digital de reportes antes de ERP",
    "Exportación compatible con el ERP del operador (IW38/IW41 y otros formatos)",
    "Visibilidad por rol: supervisor, planeador, programador y administrador",
    "Falion: módulo de IA para corrección de reportes, chat y apoyo a RCA",
    "Arquitectura multi-empresa con aislamiento de datos por diseño",
    "Seguimiento de hallazgos, equipos fuera de servicio y OT no ejecutadas",
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
    blue: "text-blue-500 group-hover:bg-blue-500/10 border-blue-500/20",
    emerald: "text-emerald-500 group-hover:bg-emerald-500/10 border-emerald-500/20",
    violet: "text-violet-400 group-hover:bg-violet-500/10 border-violet-500/20",
  };
  return (
    <li className="group flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${colors[accent]}`}
        aria-hidden="true"
      >
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

const CYCLE_STEPS = [
  "Plan semanal/mensual programado",
  "Ejecución en campo (con o sin señal)",
  "Revisión y aprobación del supervisor",
  "Trazabilidad ejecutado vs. pendiente",
  "Alimenta el ERP del cliente y la base de confiabilidad",
];

const ROLE_ROWS = [
  {
    control: "Órdenes de trabajo (OT)",
    who: "Supervisor — avance del día y del frente",
  },
  {
    control: "Materiales y consumibles",
    who: "Planeador — cumplimiento del plan semanal/mensual",
  },
  {
    control: "Horas hombre",
    who: "Programador — backlog y próximas OT",
  },
  {
    control: "Ejecutado vs. pendiente, semanal y mensual",
    who: "Administrador — horas, materiales y cierre",
  },
];

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
            <div className="mb-8 inline-flex max-w-full items-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60 px-4 py-3 shadow-[0_18px_45px_-22px_rgba(34,211,238,0.9)] sm:px-6 sm:py-4">
              <Image
                src="/fixai-logo-transparent-v2.png"
                alt="Fix AI — Software de mantenimiento industrial"
                width={1024}
                height={331}
                sizes="(max-width: 640px) 72vw, 288px"
                className="h-auto w-[min(72vw,17rem)] object-contain drop-shadow-[0_8px_22px_rgba(20,184,166,0.22)] sm:w-72"
                priority
              />
            </div>

            <p className="mb-3 text-xs font-bold tracking-widest text-blue-500 uppercase">
              PWA · Control de ejecución del plan de mantenimiento
            </p>

            <h2
              id="fixai-heading"
              className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl"
              itemProp="name"
            >
              Su plan de mantenimiento,{" "}
              <span className="text-blue-400">ejecutado día a día.</span>
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-slate-400" itemProp="description">
              <p>
                Fix AI no es una app de reportes: es{" "}
                <strong className="text-white">control de ejecución del plan de mantenimiento</strong>.
                Mantiene el control diario de lo que se ejecuta, hace visibles los avances y los
                inconvenientes a todos los interesados del proceso — supervisor, planeador, programador
                y administrador — y deja trazabilidad de lo ejecutado frente a lo planeado, a nivel
                semanal y mensual, no solo por jornada.
              </p>
              <p className="border-l-2 border-blue-500 pl-4 text-sm leading-relaxed text-slate-300">
                Diseñada por y para contratistas que operan bajo el ciclo de programación y cierre de
                órdenes de un ERP tipo SAP PM (importación de programación → ejecución en campo → cierre
                de orden), sin necesidad de acceso a API: Fix AI se integra por intercambio de
                archivos, funciona como complemento del ERP del operador, no como su reemplazo.
              </p>
            </div>
          </div>

          {/* Stats — sin cambios de copy de negocio más allá del layout existente */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-8">
            <p className="mb-2 text-xs font-bold tracking-widest text-slate-500 uppercase">
              Qué cambia en la operación
            </p>
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
                value="Tiempo real"
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

        {/* ── EL PROBLEMA ─────────────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-bold tracking-widest text-amber-500 uppercase">
              El problema
            </p>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              El plan se pierde entre el papel, el Excel y la memoria del supervisor
            </h3>
          </div>
          <ul className="mb-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
            <FeatureCard
              icon={<Eye size={20} />}
              title="El avance real no se ve a tiempo"
              desc="Nadie sabe cuánto del plan semanal o mensual quedó ejecutado hasta que alguien lo consolida a mano — normalmente tarde."
              accent="violet"
            />
            <FeatureCard
              icon={<Layers size={20} />}
              title="OT, materiales y horas dispersos"
              desc="Nadie tiene el cuadro completo en tiempo real: órdenes, consumo de materiales y horas hombre viven en sistemas distintos."
              accent="violet"
            />
            <FeatureCard
              icon={<Copy size={20} />}
              title="Doble digitación"
              desc="Lo que el técnico ya reportó en campo se vuelve a escribir a mano en el ERP — tiempo perdido y margen de error."
              accent="violet"
            />
          </ul>
          <p className="text-sm leading-relaxed text-slate-300">
            Fix AI ataca los tres al mismo tiempo, con captura estructurada desde el punto de
            ejecución.
          </p>
        </div>

        {/* ── CÓMO FUNCIONA ───────────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-bold tracking-widest text-blue-500 uppercase">
              Cómo funciona
            </p>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Un ciclo cerrado, del plan programado al ERP del cliente
            </h3>
          </div>
          <ol className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 list-none p-0">
            {CYCLE_STEPS.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
              >
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-bold text-blue-400">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold leading-snug text-white">{step}</p>
              </li>
            ))}
          </ol>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-400 list-none p-0">
            <li>
              <strong className="text-slate-200">100% offline-first:</strong> el técnico registra
              jornada, materiales, fotografía y firma digital sin necesidad de conexión; todo
              sincroniza automáticamente al recuperar señal. Probado en campo en dispositivos
              móviles reales.
            </li>
            <li>
              <strong className="text-slate-200">Sin necesidad de acceso a API del ERP:</strong> la
              integración ocurre por intercambio de archivos, lo que reduce fricción de aprobación
              de TI del operador y acelera la puesta en marcha.
            </li>
            <li>
              <strong className="text-slate-200">El dato entra una sola vez:</strong> lo que el
              técnico reporta en campo es lo mismo que alimenta el ERP del cliente y los análisis de
              confiabilidad después — no hay reprocesos.
            </li>
          </ul>
        </div>

        {/* ── QUÉ ES FIX AI ───────────────────────────────────── */}
        <div className="group relative mb-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <div
            className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-40 blur-[120px] transition-colors group-hover:bg-blue-500/10"
            aria-hidden="true"
          />
          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest text-blue-500 uppercase">
                ¿Qué es Fix AI?
              </p>
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Una PWA que digitaliza todo el ciclo de ejecución de mantenimiento
              </h3>
              <p className="mb-5 leading-relaxed text-slate-400">
                Fix AI es una <strong className="text-white">aplicación web progresiva (PWA)</strong>{" "}
                que acompaña al técnico desde que recibe la orden de trabajo en campo hasta que el
                reporte queda listo para cargarse en el ERP. Compatible con el ERP del operador
                —incluyendo SAP PM (IW38/IW41) y otros— <em>sin licencias adicionales ni acceso API</em>.
              </p>
              <p className="leading-relaxed text-slate-400">
                Y cuando la operación lo requiere, Fix AI puede ir un paso más allá:{" "}
                <strong className="text-white">convertirse en el CMMS principal</strong> de la
                organización, asumiendo la gestión completa de mantenimiento.
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
                <span
                  key={label}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    color === "blue"
                      ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                      : color === "emerald"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                        : "border-violet-500/30 bg-violet-500/10 text-violet-300"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOUR INTERACTIVO ─────────────────────────────────── */}
        <ProductTour />

        {/* ── CADA ROL ────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-bold tracking-widest text-blue-500 uppercase">
              Visibilidad por rol
            </p>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Cada rol ve lo que necesita</h3>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900">
                <tr className="border-b border-slate-800">
                  <th scope="col" className="px-5 py-4 font-bold text-white">
                    Qué controla
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-white">
                    Quién lo ve
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROLE_ROWS.map((row) => (
                  <tr key={row.control} className="border-b border-slate-800 last:border-0">
                    <td className="px-5 py-4 font-medium text-slate-200">{row.control}</td>
                    <td className="px-5 py-4 text-slate-400">{row.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-400">
            No es una hoja de cálculo genérica compartida: cada rol ve exactamente lo que necesita
            para su parte del proceso.
          </p>
        </div>

        {/* ── SEGUIMIENTO ACTIVO ──────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold tracking-widest text-blue-500 uppercase">
              Seguimiento activo
            </p>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              No solo registra: hace seguimiento hasta que se resuelve
            </h3>
          </div>
          <ul
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 list-none p-0"
            aria-label="Seguimiento activo en Fix AI"
          >
            <FeatureCard
              icon={<AlertTriangle size={20} />}
              title="Reportes automáticos de hallazgos"
              desc="Cuando el técnico levanta un hallazgo en campo, sale un reporte automático a quien debe actuar, sin esperar al cierre de semana."
              accent="emerald"
            />
            <FeatureCard
              icon={<Activity size={20} />}
              title="Seguimiento al estado de los equipos"
              desc="Fix AI hace seguimiento a los equipos marcados fuera de servicio hasta que vuelven a operar — no solo registra que pararon."
              accent="emerald"
            />
            <FeatureCard
              icon={<ClipboardList size={20} />}
              title="Trazabilidad de OT no ejecutadas"
              desc="Las órdenes que no se ejecutaron quedan con seguimiento semana a semana, hasta su ejecución o su justificación formal."
              accent="blue"
            />
            <FeatureCard
              icon={<Bell size={20} />}
              title="Tableros y alertas a la medida"
              desc="Toda esta información es visible en tableros, con alertas programadas y configurables según cada operación."
              accent="blue"
            />
          </ul>
        </div>

        {/* ── LO QUE NOS DIFERENCIA ───────────────────────────── */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold tracking-widest text-blue-500 uppercase">
              Lo que nos diferencia
            </p>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Control de ejecución, pensado para el ciclo real del contratista
            </h3>
          </div>
          <ul
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 list-none p-0"
            aria-label="Diferenciadores de Fix AI"
            itemProp="featureList"
          >
            <FeatureCard
              icon={<Target size={20} />}
              title="Control de ejecución, no solo registro de campo"
              desc="Visibilidad de lo ejecutado vs. lo planeado, semanal y mensual, para supervisor, planeador, programador y administrador."
              accent="blue"
            />
            <FeatureCard
              icon={<Wrench size={20} />}
              title="Formulario que se adapta a la actividad"
              desc="Mecánico, eléctrico, instrumentación — cada rol captura el dato que realmente sirve para el análisis de falla."
              accent="blue"
            />
            <FeatureCard
              icon={<WifiOff size={20} />}
              title="Operación offline real"
              desc="No una promesa de marketing: validada en dispositivos móviles reales en condiciones de campo sin señal."
              accent="emerald"
            />
            <FeatureCard
              icon={<ShieldCheck size={20} />}
              title="Integridad verificable de cada jornada"
              desc="Cada reporte queda sellado con un hash criptográfico del contenido más marca de tiempo — responde a «¿cómo sé que este reporte no fue alterado después de firmado?», sin sobre-prometer una firma digital formal tipo X.509."
              accent="emerald"
            />
            <FeatureCard
              icon={<Building2 size={20} />}
              title="Arquitectura multi-empresa con aislamiento de datos por diseño"
              desc="Hecha para el ciclo SAP PM de operadores O&G en Colombia."
              accent="blue"
            />
            <FeatureCard
              icon={<Package size={20} />}
              title="Inventario y consumibles, bajo solicitud"
              desc="Imelectric ya lleva control de inventario; Fix AI gestiona consumibles cuando el cliente lo requiere — capacidad real disponible, no una limitación del producto."
              accent="blue"
            />
            <FeatureCard
              icon={<Scale size={20} />}
              title="Cumplimiento legal colombiano"
              desc="Tratamiento de datos personales alineado con la Ley 1581 de 2012 (Habeas Data), con registro de derechos de autor del software ante la Dirección Nacional de Derecho de Autor."
              accent="violet"
            />
            <FeatureCard
              icon={<BadgeCheck size={20} />}
              title="Respaldo ISO 9001:2015"
              desc="IMELECTRIC S.A.S., compañía certificada."
              accent="violet"
            />
          </ul>
        </div>

        {/* ── FALION ──────────────────────────────────────────── */}
        <div className="mb-20 overflow-hidden rounded-3xl border border-violet-500/20 bg-violet-500/5 p-8 md:p-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
              <Sparkles size={20} aria-hidden="true" />
            </div>
            <p className="text-xs font-bold tracking-widest text-violet-400 uppercase">
              Módulo de IA
            </p>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Falion: inteligencia artificial aplicada al mantenimiento
          </h3>
          <p className="mb-6 max-w-3xl leading-relaxed text-slate-300">
            Cada reporte capturado en campo — ajustado al rol y a la actividad del técnico — alimenta
            una base de datos consistente. Falion, el módulo de IA integrado en Fix AI, usa esa base
            para apoyar al supervisor y al equipo técnico con:
          </p>
          <ul className="mb-6 space-y-3 list-none p-0">
            {[
              "Corrección y mejora de texto en reportes de campo — revisa antes de aprobar, sin bloquear la jornada de nadie.",
              "El corrector mejora con el uso, aprendiendo los términos técnicos propios de la operación de cada cliente.",
              "Detección de reportes con redacción casi idéntica entre técnicos — una señal de calidad de dato que hoy se pierde en papel.",
              "Consulta conversacional (Falion Chat) con contexto del frente, equipos y órdenes.",
              "Apoyo al análisis de confiabilidad y causa raíz (RCA) sobre la información ya capturada en el sistema.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-violet-400"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
            El análisis con IA se activa bajo control del supervisor, no de forma automática — así
            cada empresa administra su propio uso y consumo.{" "}
            <strong className="text-slate-200">Falion propone; el ingeniero decide.</strong>
          </p>
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
              Fix AI nace pensado para el{" "}
              <strong className="text-slate-200">contratista de mantenimiento</strong> que opera bajo
              outsourcing — con el ERP del operador o sin uno. Horas documentadas, cumplimiento de OTs
              y evidencia lista para facturar. Cada funcionalidad está diseñada para su rentabilidad y
              su cumplimiento contractual.
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
              La información operacional real que Fix AI captura en campo —ejecución, hallazgos,
              tiempos, condición de equipos— es exactamente el insumo que una compañía necesita para{" "}
              <strong className="text-slate-200">
                ajustar su plan de mantenimiento a su realidad operativa
              </strong>
              , sin que esa información se pierda en estructuras jerárquicas. Una vía directa desde el
              campo hasta quien toma las decisiones.
            </p>
          </div>
        </div>

        {/* ── SEGURIDAD ───────────────────────────────────────── */}
        <div className="mb-20 rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <Lock className="mb-4 text-slate-500" size={28} aria-hidden="true" />
          <h3 className="mb-3 text-xl font-bold text-white">Seguridad y cumplimiento</h3>
          <ul className="grid gap-3 sm:grid-cols-3 list-none p-0">
            {[
              {
                label: "Aislamiento por empresa",
                desc: "Arquitectura de datos diseñada con separación por empresa, pensada para operaciones con múltiples clientes o proyectos.",
              },
              {
                label: "Ley 1581 Habeas Data",
                desc: "Cumplimiento de la normativa colombiana de protección de datos personales, con consentimiento explícito del usuario.",
              },
              {
                label: "Auditoría de acciones críticas",
                desc: "Diseño orientado a que cada firma y aprobación quede asociada a su autor y a una marca de tiempo, como base de una trazabilidad forense verificable.",
              },
            ].map((item) => (
              <li key={item.label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="mb-1 text-sm font-bold text-slate-200">{item.label}</p>
                <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-start gap-4 border-t border-slate-800 pt-5 sm:flex-row sm:items-center">
            <Image
              src="/badges/iso-9001-ll-c.png"
              alt="Certificación ISO 9001 — LL-C Certification"
              width={160}
              height={63}
              className="opacity-90"
            />
            <div className="max-w-md text-xs leading-relaxed">
              <p className="text-slate-400">
                Certificado No. 576091 · ISO 9001:2015 · LL-C Certification · vigente hasta jun-2029
              </p>
              <a
                href="https://www.ll-c.info"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-semibold text-blue-400 underline underline-offset-2 transition-colors hover:text-blue-300"
              >
                Verificar certificado · código 6B39360F-AAF
              </a>
            </div>
          </div>
        </div>

        {/* ── VALIDADO EN CAMPO ───────────────────────────────── */}
        <div className="mb-20 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 md:p-10">
          <p className="mb-2 text-xs font-bold tracking-widest text-emerald-400 uppercase">
            Validación
          </p>
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Validado en campo, no en presentaciones
          </h3>
          <p className="max-w-3xl leading-relaxed text-slate-300">
            Fix AI opera hoy en un piloto activo con un contratista real del sector, con múltiples
            usuarios activos distribuidos en varios frentes operativos (eléctrico, mecánico,
            instrumentación, unidades de bombeo), bajo un contrato vigente de mantenimiento industrial
            en campo colombiano.
          </p>
        </div>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
          <div
            className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-emerald-500"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-40 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h3 className="mb-4 text-3xl font-bold text-white">
              ¿Sabe, ahora mismo, cuánto de su plan semanal ya se ejecutó y qué quedó pendiente?
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-slate-400">
              Agende una demostración de Fix AI y vea el control de ejecución del plan, en tiempo
              real, desde el primer día.
            </p>
            <FixAICta />
          </div>
        </div>
      </div>
    </section>
  );
};
