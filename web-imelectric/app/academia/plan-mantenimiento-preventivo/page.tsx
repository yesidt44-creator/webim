import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/plan-mantenimiento-preventivo" },
  title: "Cómo hacer un plan de mantenimiento preventivo desde cero | IMELECTRIC",
  description:
    "Pasos para construir un plan de mantenimiento preventivo: inventario de equipos, criticidad, frecuencias, ejecución y medición. Por qué el Excel degrada el plan con el tiempo y cómo evitarlo.",
  keywords: [
    "plan de mantenimiento preventivo",
    "cómo hacer plan mantenimiento",
    "mantenimiento preventivo pasos",
    "criticidad de equipos mantenimiento",
    "frecuencias de mantenimiento preventivo",
    "mantenimiento preventivo vs correctivo",
    "software mantenimiento preventivo Colombia",
    "plan mantenimiento industrial Colombia",
    "trazabilidad mantenimiento campo",
    "CMMS mantenimiento preventivo",
  ],
  openGraph: {
    title: "Cómo hacer un plan de mantenimiento preventivo desde cero | IMELECTRIC",
    description:
      "Guía práctica: inventario, criticidad, frecuencias, ejecución y medición. Por qué el Excel se degrada y cómo preservar la trazabilidad del plan.",
    url: "https://imelectric.es/academia/plan-mantenimiento-preventivo",
    siteName: "IMELECTRIC",
    locale: "es_CO",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuáles son los pasos para crear un plan de mantenimiento preventivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los pasos fundamentales son: (1) definir los objetivos del plan (reducir fallas no planificadas, mejorar disponibilidad, cumplir normativas), (2) levantar el inventario de equipos con datos técnicos, (3) clasificar los equipos por criticidad según su impacto en producción, seguridad y costos, (4) definir las frecuencias de mantenimiento según criticidad y recomendaciones del fabricante, (5) capacitar al equipo técnico en los procedimientos, y (6) elegir la forma de ejecutar y medir el plan: quién registra, cómo se reporta y qué indicadores se usan.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué porcentaje del presupuesto de mantenimiento debería ser preventivo vs. correctivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una referencia ampliamente citada en la industria es destinar alrededor del 80% del presupuesto de mantenimiento a actividades preventivas y dejar el 20% para correctivas. Esta proporción no es universal: depende del tipo de activos, el nivel de criticidad y la madurez del sistema de gestión. En operaciones con equipos de alta criticidad o regulaciones de seguridad estrictas, el porcentaje preventivo suele ser mayor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué un plan de mantenimiento en Excel deja de funcionar con el tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plan en Excel se degrada principalmente por tres razones: (1) desactualización — cuando los técnicos ejecutan tareas en campo y no registran en tiempo real, el Excel queda obsoleto; (2) falta de trazabilidad — no hay registro con firma, foto o evidencia del técnico que ejecutó, la fecha real y las observaciones del estado del equipo; (3) sin visibilidad en tiempo real — el supervisor no puede ver el avance de las órdenes de trabajo hasta que alguien actualiza manualmente el archivo.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo hacer un plan de mantenimiento preventivo desde cero (sin caer en la trampa del Excel)",
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
  author: {
    "@type": "Organization",
    name: "Equipo de Ingeniería IMELECTRIC",
    url: "https://imelectric.es",
  },
  publisher: {
    "@type": "Organization",
    name: "IMELECTRIC",
    logo: {
      "@type": "ImageObject",
      url: "https://imelectric.es/imelectric-logo.png",
    },
  },
  mainEntityOfPage: "https://imelectric.es/academia/plan-mantenimiento-preventivo",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Plan de mantenimiento preventivo",
      item: "https://imelectric.es/academia/plan-mantenimiento-preventivo",
    },
  ],
};

export default async function PlanMantenimientoPreventivo() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
      <script type="application/ld+json" suppressHydrationWarning nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" suppressHydrationWarning nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" suppressHydrationWarning nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-900 px-6 pt-32 pb-12">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-500" aria-label="Miga de pan">
            <Link href="/academia" className="transition-colors hover:text-blue-400">Academia Técnica</Link>
            <span>/</span>
            <span className="text-slate-300">Plan de mantenimiento preventivo</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-cyan-400 uppercase">
            Mantenimiento Industrial · Planificación
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cómo hacer un plan de mantenimiento preventivo desde cero (sin caer en la trampa del Excel)
          </h1>
          <p className="mt-3 text-xs text-slate-500">Publicado: 18 jul 2026 · Equipo de Ingeniería IMELECTRIC</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Un plan de mantenimiento preventivo bien construido reduce las fallas no planificadas, alarga la vida útil
            de los equipos y hace predecibles los costos de operación. Aquí están los pasos y el punto en que el Excel
            deja de funcionar.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-4 text-2xl font-bold text-white">Los pasos para construir el plan</h2>
        <div className="mb-10 space-y-4">
          {[
            {
              num: "01",
              title: "Definir los objetivos",
              body: "¿Qué quiere lograr el plan: reducir fallas no planificadas, mejorar la disponibilidad de equipos críticos, cumplir una normativa? Los objetivos determinan qué equipos priorizamos y cómo medimos el éxito.",
            },
            {
              num: "02",
              title: "Levantar el inventario de equipos",
              body: "Registro de todos los equipos con sus datos técnicos: fabricante, modelo, número de serie, ubicación, año de instalación y manual de mantenimiento. Sin inventario actualizado no hay plan real.",
            },
            {
              num: "03",
              title: "Clasificar por criticidad",
              body: "No todos los equipos merecen la misma atención. La criticidad se evalúa según el impacto de una falla en producción, seguridad, calidad y costo. Los equipos más críticos reciben mayor frecuencia y más recursos.",
            },
            {
              num: "04",
              title: "Definir frecuencias de mantenimiento",
              body: "Para cada equipo crítico: ¿cada cuánto se lubrica, se inspecciona, se calibra? Las frecuencias parten de las recomendaciones del fabricante y se ajustan con el historial de fallas real.",
            },
            {
              num: "05",
              title: "Capacitar al equipo técnico",
              body: "El plan no funciona si el técnico no sabe cómo ejecutar el procedimiento ni qué registrar. La capacitación incluye los formularios de ejecución, los criterios de aceptación y qué hacer ante una anomalía.",
            },
            {
              num: "06",
              title: "Elegir cómo se ejecuta y se mide",
              body: "Definir quién registra la ejecución, cómo se reporta al supervisor, qué indicadores se usan (disponibilidad, cumplimiento, MTBF, MTTR) y con qué frecuencia se revisa el plan.",
            },
          ].map(({ num, title, body }) => (
            <div key={num} className="flex gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <span className="shrink-0 font-mono text-2xl font-bold text-cyan-400/50">{num}</span>
              <div>
                <h3 className="mb-2 font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white">La referencia del 80/20</h2>
        <p className="mb-8 leading-relaxed text-slate-400">
          Una referencia ampliamente citada en la industria propone destinar alrededor del{" "}
          <strong className="text-slate-200">80% del presupuesto de mantenimiento a actividades preventivas</strong> y
          reservar el 20% para correctivas. Esta proporción no es universal: depende del tipo de activos, el nivel de
          criticidad y la madurez del sistema. En operaciones con equipos de alta criticidad o regulaciones de seguridad
          estrictas, el porcentaje preventivo suele ser mayor.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">Por qué el Excel no es suficiente</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          Muchas operaciones arrancan el plan de mantenimiento preventivo en una hoja de cálculo. Funciona al principio,
          pero con el tiempo aparecen tres problemas:
        </p>
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Desactualización",
              body: "Los técnicos ejecutan en campo pero no actualizan el archivo en tiempo real. El Excel queda obsoleto en días.",
            },
            {
              title: "Sin trazabilidad",
              body: "No hay evidencia firmada, foto ni registro del estado real del equipo al momento de la ejecución.",
            },
            {
              title: "Sin visibilidad",
              body: "El supervisor no sabe el avance de las órdenes hasta que alguien actualiza manualmente el archivo.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
              <p className="font-bold text-white">{title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>

        <div className="my-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-600/5 p-6">
            <p className="mb-1 text-xs font-bold tracking-widest text-cyan-400 uppercase">Ejecución y trazabilidad de campo</p>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Fix AI permite que el técnico registre la OT desde el celular y el supervisor apruebe con firma digital.
              Todo trazable y exportable.
            </p>
            <Link href="/fixai-cmms" className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-cyan-500">
              Conocer Fix AI →
            </Link>
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
            <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">Diseño del plan y estrategia</p>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Si necesita construir o revisar el plan de mantenimiento preventivo de su operación, nuestra consultoría
              acompaña desde el inventario hasta la medición.
            </p>
            <Link href="/consultoria-mantenimiento" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500">
              Ver consultoría →
            </Link>
          </div>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-white">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqJsonLd.mainEntity.map((faq) => (
            <details key={faq.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <summary className="cursor-pointer font-semibold text-white">{faq.name}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link href="/academia/pega-iso-55001" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-500/50 hover:text-white">
            → PEGA e ISO 55001
          </Link>
          <Link href="/academia/rca-rcm-fmea-diferencias" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-500/50 hover:text-white">
            → RCA, RCM y FMEA
          </Link>
          <Link href="/academia" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white">
            ← Academia Técnica
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
