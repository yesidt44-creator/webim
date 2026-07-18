import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/gestion-activos-iso-55001" },
  title: "Gestión de activos según ISO 55001 | IMELECTRIC",
  description:
    "Qué es la gestión de activos según ISO 55001, cómo se diferencia del mantenimiento táctico y qué preguntas ayudan a iniciar una transición hacia el balance Costo/Riesgo/Desempeño.",
  keywords: [
    "gestión de activos ISO 55001 Colombia",
    "qué es ISO 55001",
    "asset management Colombia",
    "mantenimiento y gestión de activos diferencia",
    "balance costo riesgo desempeño",
    "gestión estratégica activos físicos",
    "consultoría ISO 55001 Colombia",
    "taxonomía estándar de equipos",
    "CAPEX OPEX por activo",
    "mantenimiento por impacto financiero",
  ],
  openGraph: {
    title: "Qué es la Gestión de Activos según ISO 55001 y por Dónde Empezar | IMELECTRIC",
    description:
      "Del mantenimiento táctico al valor estratégico: guía inicial sobre ISO 55001, balance Costo/Riesgo/Desempeño y tres preguntas de autodiagnóstico.",
    url: "https://imelectric.es/academia/gestion-activos-iso-55001",
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
      name: "¿Qué es la gestión de activos según ISO 55001?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La gestión de activos según ISO 55001 no se centra en el activo en sí, sino en el valor que aporta a la organización. Exige alinear el rendimiento del activo físico con los objetivos financieros estratégicos y equilibrar Costo, Riesgo y Desempeño.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre mantenimiento y gestión de activos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mantenimiento táctico se concentra en ejecutar tareas y reparar lo que se rompe. La gestión de activos estratégica conecta esas decisiones con el valor para la organización, el impacto financiero de las fallas y el balance entre Costo, Riesgo y Desempeño.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo empiezo a implementar gestión de activos en mi empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un punto de partida básico es revisar tres condiciones: si la empresa tiene una taxonomía estándar de equipos, si puede trazar CAPEX y OPEX por activo, y si prioriza el mantenimiento según el impacto financiero de cada falla. Las respuestas permiten identificar la brecha inicial frente al enfoque de ISO 55001.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qué es la gestión de activos según ISO 55001 y por dónde empezar",
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
  mainEntityOfPage: "https://imelectric.es/academia/gestion-activos-iso-55001",
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
      name: "Gestión de activos ISO 55001",
      item: "https://imelectric.es/academia/gestion-activos-iso-55001",
    },
  ],
};

export default async function GestionActivosIso55001Page() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-900 px-6 pt-32 pb-12">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-500" aria-label="Miga de pan">
            <Link href="/academia" className="transition-colors hover:text-blue-400">
              Academia Técnica
            </Link>
            <span>/</span>
            <span className="text-slate-300">Gestión de activos ISO 55001</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Gestión de Activos · ISO 55001
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Qué es la gestión de activos según ISO 55001 y por dónde empezar
          </h1>
          <p className="mt-3 text-xs text-slate-500">
            Publicado: 18 jul 2026 · Equipo de Ingeniería IMELECTRIC
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            La gestión de activos amplía la mirada del mantenimiento: conecta el rendimiento del activo físico con el
            valor que aporta a la organización.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-4 text-2xl font-bold text-white">Qué propone ISO 55001</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          El paradigma tradicional táctico —&quot;reparar lo que se rompe&quot;— está superado. La norma{" "}
          <strong className="text-slate-200">ISO 55001</strong> exige alinear el rendimiento del activo físico con los
          objetivos financieros estratégicos de la organización.
        </p>

        <blockquote className="mb-10 rounded-r-xl border-l-4 border-blue-500 bg-slate-900/60 p-6 italic text-slate-300">
          &ldquo;La Gestión de Activos no se centra en el activo en sí, sino en el valor que este puede aportar a la
          organización. Es el paso de un centro de costos a un generador de rentabilidad.&rdquo;
          <footer className="mt-3 text-sm font-bold text-blue-400 not-italic">
            — Dr. Luigi Amendola, Ph.D. (ABC de la Gestión de Activos)
          </footer>
        </blockquote>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Mantenimiento táctico y gestión de activos estratégica
        </h2>
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-bold text-white">Mantenimiento táctico</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Se concentra en ejecutar tareas y reparar lo que se rompe.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6">
            <h3 className="font-bold text-white">Gestión de activos estratégica</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Alinea el rendimiento del activo físico con los objetivos financieros de la organización.
            </p>
          </div>
        </div>
        <p className="mb-8 leading-relaxed text-slate-400">
          Esa alineación requiere tomar decisiones con un{" "}
          <strong className="text-slate-200">Balance Costo/Riesgo/Desempeño</strong>: priorizar el mantenimiento según
          el impacto financiero de la falla y conservar una línea de visión entre el trabajo sobre el activo y el valor
          esperado por la organización.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Tres preguntas para saber por dónde empezar
        </h2>
        <div className="mb-10 space-y-3">
          {[
            "¿Tiene una taxonomía estándar de equipos?",
            "¿Tiene trazabilidad de CAPEX/OPEX por activo?",
            "¿Prioriza el mantenimiento por impacto financiero?",
          ].map((question, index) => (
            <div key={question} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
              <span className="shrink-0 font-mono text-sm font-bold text-blue-400">{index + 1}</span>
              <p className="text-sm leading-relaxed text-slate-300">{question}</p>
            </div>
          ))}
        </div>

        <div className="my-10 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
          <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Del mantenimiento táctico al valor estratégico
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            Diseñar esta transición requiere diagnóstico experto — conoce nuestra consultoría en gestión de activos.
          </p>
          <Link
            href="/consultoria-mantenimiento"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Conocer la consultoría en gestión de activos →
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
          <Link
            href="/academia/rca-rcm-fmea-diferencias"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            → RCA, RCM y FMEA
          </Link>
          <Link
            href="/academia"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            ← Academia Técnica
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
