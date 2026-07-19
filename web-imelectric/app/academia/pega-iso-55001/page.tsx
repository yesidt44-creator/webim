import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/pega-iso-55001" },
  title: "Qué es el PEGA y cómo se conecta con ISO 55001 | IMELECTRIC",
  description:
    "Qué es un PEGA, qué debe contener, los primeros pasos para construirlo y cómo aplica la Resolución CREG 015 de 2018 a operadores de red eléctrica en Colombia.",
  keywords: [
    "PEGA Plan Estratégico Gestión Activos",
    "ISO 55001 Colombia",
    "gestión de activos Colombia",
    "CREG 015 2018 ISO 55001",
    "cómo construir un PEGA",
    "consultoría ISO 55001 Colombia",
    "gestión activos sector eléctrico Colombia",
    "CGMC ACIEM Colombia",
    "implementar ISO 55001 empresa",
    "contenido Plan Estratégico Gestión Activos",
  ],
  openGraph: {
    title: "Qué es el PEGA y cómo se conecta con ISO 55001 | IMELECTRIC",
    description:
      "Guía sobre el Plan Estratégico de Gestión de Activos, su marco normativo en Colombia (CREG 015 de 2018) y los primeros pasos para construirlo según ISO 55001.",
    url: "https://imelectric.es/academia/pega-iso-55001",
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
      name: "¿Qué es un Plan Estratégico de Gestión de Activos (PEGA) y qué debe contener?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El PEGA es el documento que convierte los objetivos de la organización en una hoja de ruta para sus activos físicos. Debe delimitar el alcance y los objetivos, describir el portafolio y su estado, establecer criterios de priorización durante el ciclo de vida, definir iniciativas y recursos, y asignar responsables, indicadores y revisiones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué empresas están obligadas a implementar ISO 55001 en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Resolución CREG 015 de 2018 obliga a los operadores de red de distribución eléctrica en Colombia a implementar un sistema de gestión de activos conforme a ISO 55001. Fuera del sector eléctrico, la norma no es obligatoria por regulación, pero puede exigirse contractualmente (por ejemplo, en licitaciones de concesiones de infraestructura) o adoptarse voluntariamente para mejorar la rentabilidad de la operación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los primeros pasos para construir un PEGA en mi empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El primer paso es acordar el alcance y los objetivos que debe apoyar el PEGA. Después se consolida el inventario con una taxonomía común, se evalúan el estado, los riesgos y los costos de los activos, se priorizan iniciativas de ciclo de vida y finalmente se asignan responsables, recursos, indicadores y una frecuencia de revisión.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qué es el PEGA (Plan Estratégico de Gestión de Activos) y cómo se conecta con ISO 55001",
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
  mainEntityOfPage: "https://imelectric.es/academia/pega-iso-55001",
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
      name: "PEGA e ISO 55001",
      item: "https://imelectric.es/academia/pega-iso-55001",
    },
  ],
};

export default async function PegaIso55001Page() {
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
            <span className="text-slate-300">PEGA e ISO 55001</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Gestión de Activos · ISO 55001 · Estrategia
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Qué es el PEGA (Plan Estratégico de Gestión de Activos) y cómo se conecta con ISO 55001
          </h1>
          <p className="mt-3 text-xs text-slate-500">Publicado: 18 jul 2026 · Equipo de Ingeniería IMELECTRIC</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Esta guía se concentra en el documento práctico: qué debe contener un PEGA, cómo iniciar su construcción y
            cuál es su driver regulatorio concreto para operadores de red eléctrica en Colombia.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm leading-relaxed text-slate-300">
            Si todavía no tienes claro qué es ISO 55001 y por qué importa, empieza por{" "}
            <Link
              href="/academia/gestion-activos-iso-55001"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              esta introducción →
            </Link>
            . Aquí nos enfocamos en el documento práctico: el PEGA.
          </p>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white">Qué es el PEGA</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          El <strong className="text-slate-200">Plan Estratégico de Gestión de Activos (PEGA)</strong> es el documento
          que traduce los objetivos estratégicos de la organización en decisiones sobre cómo gestionar sus activos
          físicos durante su ciclo de vida completo.
        </p>
        <p className="mb-8 leading-relaxed text-slate-400">
          En el marco de ISO 55001, funciona como la hoja de ruta que conecta las decisiones sobre adquisición,
          operación, mantenimiento, renovación y disposición con prioridades, responsables y recursos definidos.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">Qué debe contener un PEGA</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          No existe una plantilla única que sirva para todas las organizaciones. Como estructura práctica, el
          documento debe dejar claros estos componentes:
        </p>
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Alcance y objetivos", body: "Qué activos, sedes y procesos cubre, y qué objetivos de la organización debe apoyar." },
            { title: "Portafolio y estado actual", body: "Inventario con taxonomía común, condición, criticidad y datos disponibles de cada grupo de activos." },
            { title: "Criterios e iniciativas", body: "Cómo se priorizan adquisición, mantenimiento, renovación y disposición, con sus proyectos asociados." },
            { title: "Gobierno y seguimiento", body: "Responsables, recursos, indicadores, calendario de revisión y mecanismo para actualizar el documento." },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
              <p className="font-bold text-white">{title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white">Drivers regulatorios concretos en Colombia</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          La <strong className="text-slate-200">Resolución CREG 015 de 2018</strong> obliga a los{" "}
          <strong className="text-slate-200">operadores de red de distribución eléctrica en Colombia</strong> a
          implementar un sistema de gestión de activos conforme a ISO 55001. Es el ejemplo más claro de driver
          regulatorio sectorial en el país: para estos operadores, el PEGA no es opcional — está anclado a un
          requisito de la Comisión de Regulación de Energía y Gas (CREG), que conecta directamente con el sector de{" "}
          &ldquo;Energía y Generación&rdquo; que ya hace parte de los sectores de impacto del portafolio de IMELECTRIC.
        </p>
        <p className="mb-8 leading-relaxed text-slate-400">
          Fuera del sector eléctrico, la norma puede exigirse contractualmente en licitaciones de concesiones de
          infraestructura, o adoptarse voluntariamente para mejorar la rentabilidad de la operación. La{" "}
          <strong className="text-slate-200">certificación CGMC (Certified Global Maintenance and Reliability
          Professional)</strong> que ofrece ACIEM en Colombia es una señal de la comunidad profesional formal que ha
          crecido alrededor de esta disciplina en el país.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">Primeros pasos para construirlo</h2>
        <div className="mb-10 space-y-3">
          {[
            "Acordar el alcance del PEGA y los objetivos de la organización que debe apoyar.",
            "Consolidar el inventario de activos con una taxonomía común y datos confiables.",
            "Evaluar el estado, la criticidad, los riesgos y los costos disponibles por activo o familia.",
            "Priorizar las iniciativas de adquisición, mantenimiento, renovación y disposición.",
            "Asignar responsables, recursos, indicadores y una frecuencia formal de revisión.",
          ].map((step, index) => (
            <div key={step} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
              <span className="shrink-0 font-mono text-sm font-bold text-blue-400">{index + 1}</span>
              <p className="text-sm leading-relaxed text-slate-300">{step}</p>
            </div>
          ))}
        </div>

        <div className="my-10 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
          <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Diagnóstico y hoja de ruta hacia ISO 55001
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            Nuestra consultoría diagnostica dónde está su operación frente al marco ISO 55001 y diseña la ruta para
            cerrar esa brecha — ya sea que busque ordenar su gestión de activos o prepararse para una certificación
            formal.
          </p>
          <Link
            href="/consultoria-mantenimiento"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Ver consultoría en gestión de activos →
          </Link>
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
          <Link href="/academia/gestion-activos-iso-55001" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white">
            → Gestión de activos ISO 55001 (fundamentos)
          </Link>
          <Link href="/academia/plan-mantenimiento-preventivo" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white">
            → Plan de mantenimiento preventivo
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
