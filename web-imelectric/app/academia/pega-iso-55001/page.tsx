import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/pega-iso-55001" },
  title: "Qué es el PEGA y cómo se conecta con ISO 55001 | IMELECTRIC",
  description:
    "Qué es el Plan Estratégico de Gestión de Activos (PEGA), su relación con ISO 55001, la Resolución CREG 015 de 2018 para operadores eléctricos y por qué muchas organizaciones tienen dudas al construirlo.",
  keywords: [
    "PEGA Plan Estratégico Gestión Activos",
    "ISO 55001 Colombia",
    "gestión de activos Colombia",
    "CREG 015 2018 ISO 55001",
    "asset management Colombia",
    "consultoría ISO 55001 Colombia",
    "gestión activos sector eléctrico Colombia",
    "CGMC ACIEM Colombia",
    "implementar ISO 55001 empresa",
    "mantenimiento estratégico activos físicos",
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
      name: "¿Qué es un Plan Estratégico de Gestión de Activos (PEGA)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Plan Estratégico de Gestión de Activos (PEGA) es el documento que traduce los objetivos estratégicos de la organización en decisiones sobre cómo gestionar sus activos físicos durante su ciclo de vida. Define qué activos se conservarán, cuándo se renovarán, cómo se equilibrarán los costos, los riesgos y el desempeño, y cómo se asignará el presupuesto de CAPEX y OPEX en función del valor que cada activo aporta a la organización.",
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
      name: "¿Cuál es la diferencia entre mantenimiento y gestión de activos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mantenimiento se concentra en conservar el activo en condiciones de operación (reparar, lubricar, inspeccionar). La gestión de activos amplía la perspectiva: conecta las decisiones de mantenimiento con los objetivos financieros de la organización, evalúa el ciclo de vida completo del activo (adquisición, operación, disposición) y equilibra el costo, el riesgo y el desempeño esperado. El mantenimiento es un componente dentro de la gestión de activos, no su equivalente.",
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
            Muchas organizaciones industriales tienen dudas al construir su PEGA. Esta guía explica qué contiene, qué
            dice ISO 55001 al respecto y cuáles son los drivers regulatorios concretos en Colombia.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-4 text-2xl font-bold text-white">Qué es el PEGA</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          El <strong className="text-slate-200">Plan Estratégico de Gestión de Activos (PEGA)</strong> es el documento
          que traduce los objetivos estratégicos de la organización en decisiones sobre cómo gestionar sus activos
          físicos durante su ciclo de vida completo. No es un plan de mantenimiento: va más arriba.
        </p>
        <p className="mb-8 leading-relaxed text-slate-400">
          El PEGA define qué activos se conservarán, cuándo se renovarán, cómo se equilibrarán los costos, los riesgos
          y el desempeño esperado, y cómo se asignará el presupuesto de{" "}
          <strong className="text-slate-200">CAPEX y OPEX</strong> en función del valor que cada activo aporta a la
          organización. En términos de{" "}
          <strong className="text-slate-200">ISO 55001</strong>, el PEGA es la materialización del{" "}
          <em>Strategic Asset Management Plan (SAMP)</em>.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">Por qué muchas organizaciones tienen dudas al construirlo</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          El PEGA requiere que el área de mantenimiento hable el idioma de la dirección financiera: justificar
          inversiones en reemplazo de activos con datos de riesgo, confiabilidad y costo total de vida. Esa traducción
          no es trivial, especialmente en organizaciones donde el mantenimiento ha operado históricamente como un centro
          de costos sin visibilidad estratégica.
        </p>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {[
            { title: "¿Qué activos conservar?", body: "Decisión de CAPEX sustentada en análisis de riesgo y costo de vida." },
            { title: "¿Cuándo renovar?", body: "Criterios de reemplazo basados en confiabilidad, no solo en antigüedad." },
            { title: "¿Cómo equilibrar Costo/Riesgo/Desempeño?", body: "La métrica estratégica que conecta el activo con el resultado del negocio." },
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

        <h2 className="mb-4 text-2xl font-bold text-white">Mantenimiento vs. gestión de activos: la diferencia clave</h2>
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-bold text-white">Mantenimiento</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Conservar el activo en condiciones de operación: reparar, lubricar, inspeccionar. Horizonte: la próxima
              falla o la próxima tarea programada.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6">
            <h3 className="font-bold text-white">Gestión de activos</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Conectar cada decisión de mantenimiento con el valor para la organización, evaluando el ciclo de vida
              completo. Horizonte: el resultado del negocio a largo plazo.
            </p>
          </div>
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
