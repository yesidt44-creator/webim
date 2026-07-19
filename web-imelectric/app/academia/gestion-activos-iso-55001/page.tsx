import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/gestion-activos-iso-55001" },
  title: "Qué es ISO 55001 y la gestión de activos | IMELECTRIC",
  description:
    "Qué es ISO 55001, su filosofía de valor y Balance Costo/Riesgo/Desempeño, y la diferencia entre mantenimiento táctico y gestión de activos estratégica.",
  keywords: [
    "gestión de activos ISO 55001 Colombia",
    "qué es ISO 55001",
    "asset management Colombia",
    "mantenimiento y gestión de activos diferencia",
    "balance costo riesgo desempeño",
    "gestión estratégica activos físicos",
    "consultoría ISO 55001 Colombia",
    "ISO 55001 filosofía gestión de activos",
    "activos físicos valor estratégico",
    "mantenimiento táctico vs estratégico",
  ],
  openGraph: {
    title: "Qué es ISO 55001 y la Gestión de Activos | IMELECTRIC",
    description:
      "La filosofía de ISO 55001: del mantenimiento táctico al valor estratégico mediante el Balance Costo/Riesgo/Desempeño.",
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
      name: "¿Qué es ISO 55001 y por qué es diferente del mantenimiento tradicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISO 55001 es una norma para gestionar activos a partir del valor que aportan a la organización. A diferencia del mantenimiento tradicional, que se concentra en conservar o reparar equipos, conecta las decisiones sobre los activos con los objetivos estratégicos y financieros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Balance Costo/Riesgo/Desempeño en gestión de activos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es el criterio para decidir sobre un activo considerando simultáneamente cuánto cuesta intervenirlo o conservarlo, qué riesgos asume la organización y qué desempeño necesita obtener. El objetivo no es minimizar una sola variable, sino encontrar un equilibrio coherente con el valor esperado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre mantenimiento táctico y gestión de activos estratégica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mantenimiento táctico se concentra en ejecutar tareas y reparar o prevenir fallas. La gestión de activos estratégica relaciona esas decisiones con el valor para la organización, los objetivos financieros y el Balance Costo/Riesgo/Desempeño.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qué es ISO 55001 y la filosofía de la gestión de activos",
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
            Qué es ISO 55001 y la filosofía de la gestión de activos
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

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm leading-relaxed text-slate-300">
            ¿Buscas el documento práctico para implementar esto en tu operación?{" "}
            <Link href="/academia/pega-iso-55001" className="font-semibold text-blue-400 hover:text-blue-300">
              Conoce qué es el PEGA y cómo se conecta con esta norma →
            </Link>
          </p>
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
