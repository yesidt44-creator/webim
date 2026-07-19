import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/copasst-matriz-legal-plan-trabajo-sgsst" },
  title: "COPASST, matriz legal y plan de trabajo anual del SG-SST | IMELECTRIC",
  description:
    "Qué es el COPASST, diferencia con el Vigía de SST, cómo elaborar la matriz IPEVR y la matriz de requisitos legales, y qué debe incluir el Plan de Trabajo Anual del SG-SST en Colombia.",
  keywords: [
    "COPASST Colombia",
    "Comité Paritario Seguridad Salud Trabajo",
    "Vigía SST diferencia COPASST",
    "matriz IPEVR SG-SST",
    "matriz requisitos legales SG-SST",
    "plan de trabajo anual SG-SST",
    "Decreto 1072 COPASST",
    "identificación de peligros Colombia",
    "valoración de riesgos SG-SST",
    "software SG-SST Colombia",
  ],
  openGraph: {
    title: "COPASST, matriz legal y plan de trabajo anual: tres piezas clave del SG-SST | IMELECTRIC",
    description:
      "Qué es el COPASST, diferencia con el Vigía de SST, cómo construir la matriz IPEVR y la matriz de requisitos legales, y qué debe contener el Plan de Trabajo Anual.",
    url: "https://imelectric.es/academia/copasst-matriz-legal-plan-trabajo-sgsst",
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
      name: "¿Qué es el COPASST y quién debe conformarlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El COPASST (Comité Paritario de Seguridad y Salud en el Trabajo) es un organismo de participación que deben conformar las empresas con 10 o más trabajadores permanentes. Está integrado de forma paritaria: igual número de representantes del empleador y de los trabajadores. Tiene presidente y secretario, y se reúne al menos una vez al mes. Sus funciones incluyen proponer actividades de SST, vigilar el cumplimiento del SG-SST y participar en la investigación de incidentes y accidentes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre el COPASST y el Vigía de SST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Vigía de SST aplica en empresas con menos de 10 trabajadores: es una sola persona designada por el empleador, que cumple funciones equivalentes al COPASST pero sin estructura de comité. En empresas con 10 o más trabajadores debe conformarse el COPASST.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debe contener la matriz de identificación de peligros (IPEVR)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La matriz de Identificación de Peligros, Evaluación y Valoración de Riesgos (IPEVR) debe incluir: descripción de las actividades y tareas del trabajo, identificación de los peligros asociados a cada actividad, evaluación del nivel de probabilidad y consecuencia del riesgo, valoración del riesgo, y las medidas de control existentes y propuestas (eliminación, sustitución, controles de ingeniería, administrativos y EPP). Debe actualizarse cuando se introducen cambios en el sistema de gestión, en los procesos o después de un accidente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la matriz de requisitos legales del SG-SST y cómo se elabora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La matriz de requisitos legales es el inventario de las normas aplicables al SG-SST de la empresa: leyes, decretos, resoluciones y estándares que regulan las condiciones de trabajo y salud. Su primera fuente debe ser el Decreto Único Reglamentario del Sector Trabajo (Decreto 1072 de 2015). Se construye identificando cuáles normas aplican según la actividad económica, el nivel de riesgo y el número de trabajadores, y especificando qué exige cada norma y cómo la empresa demuestra su cumplimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debe incluir el Plan de Trabajo Anual del SG-SST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Plan de Trabajo Anual del SG-SST debe contener las actividades previstas para el año, las fechas de ejecución, los responsables de cada actividad y los recursos asignados (humanos, técnicos y financieros). Debe estar firmado por el empleador o el responsable del SG-SST y actualizado cuando cambian las condiciones de la empresa o los resultados de la revisión por la dirección.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "COPASST, matriz legal y plan de trabajo anual: las 3 piezas documentales que más preguntas generan del SG-SST",
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
  mainEntityOfPage: "https://imelectric.es/academia/copasst-matriz-legal-plan-trabajo-sgsst",
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
      name: "COPASST, matriz legal y plan de trabajo anual",
      item: "https://imelectric.es/academia/copasst-matriz-legal-plan-trabajo-sgsst",
    },
  ],
};

export default async function CopasstMatrizLegalPage() {
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
            <span className="text-slate-300">COPASST y matrices del SG-SST</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-violet-400 uppercase">
            SG-SST · Documentación · Normativa
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            COPASST, matriz legal y plan de trabajo anual: las 3 piezas documentales que más preguntas generan del SG-SST
          </h1>
          <p className="mt-3 text-xs text-slate-500">Publicado: 18 jul 2026 · Equipo de Ingeniería IMELECTRIC</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Son los tres documentos que más dudas generan al implementar un SG-SST. Esta guía explica qué son, quién
            los elabora y qué debe incluir cada uno.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-4 text-2xl font-bold text-white">El COPASST: qué es y quién debe conformarlo</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          El <strong className="text-slate-200">COPASST</strong> (Comité Paritario de Seguridad y Salud en el Trabajo)
          es el órgano de participación que el{" "}
          <strong className="text-slate-200">Decreto 1072 de 2015</strong> establece para empresas con{" "}
          <strong className="text-slate-200">10 o más trabajadores permanentes</strong>. Es un comité con presidente y
          secretario, conformado de manera paritaria: igual número de representantes del empleador y de los trabajadores.
          Se reúne al menos <strong className="text-slate-200">una vez al mes</strong>.
        </p>
        <p className="mb-6 leading-relaxed text-slate-400">
          Sus funciones incluyen proponer actividades de SST, vigilar el cumplimiento del SG-SST y participar en la
          investigación de incidentes y accidentes. No es un órgano ejecutivo: vigila y propone, pero la ejecución recae
          en el empleador y el responsable del SG-SST.
        </p>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-bold text-white">COPASST</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Aplica a empresas con <strong className="text-slate-200">10 o más trabajadores</strong>. Comité con
              presidente, secretario y miembros paritarios.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6">
            <h3 className="font-bold text-white">Vigía de SST</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Aplica a empresas con <strong className="text-slate-200">menos de 10 trabajadores</strong>. Una sola
              persona designada por el empleador que cumple funciones equivalentes.
            </p>
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white">La matriz IPEVR: identificación y valoración de riesgos</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          La <strong className="text-slate-200">matriz de Identificación de Peligros, Evaluación y Valoración de Riesgos (IPEVR)</strong>{" "}
          es la columna vertebral técnica del SG-SST. Debe incluir:
        </p>
        <ul className="mb-8 space-y-3 text-slate-400">
          {[
            "Descripción de las actividades y tareas del trabajo.",
            "Identificación de peligros asociados a cada actividad.",
            "Evaluación del nivel de probabilidad y consecuencia del riesgo.",
            "Valoración del riesgo resultante.",
            "Medidas de control existentes y propuestas: eliminación, sustitución, controles de ingeniería, administrativos y EPP.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm">
              <span className="mt-0.5 shrink-0 text-violet-400">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-8 leading-relaxed text-slate-400">
          La IPEVR debe actualizarse cuando se introducen cambios en el sistema de gestión, en los procesos o después
          de un accidente de trabajo.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">La matriz de requisitos legales</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          La <strong className="text-slate-200">matriz de requisitos legales</strong> del SG-SST inventaría todas las
          normas aplicables a la empresa: leyes, decretos, resoluciones y estándares que regulan las condiciones de
          trabajo y salud. Su primera fuente debe ser el{" "}
          <strong className="text-slate-200">Decreto Único Reglamentario del Sector Trabajo (Decreto 1072 de 2015)</strong>.
        </p>
        <p className="mb-8 leading-relaxed text-slate-400">
          Para cada norma debe especificarse qué exige y cómo la empresa demuestra su cumplimiento. La selección de
          normas aplicables depende de la actividad económica, el nivel de riesgo y el número de trabajadores.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">El Plan de Trabajo Anual del SG-SST</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          El <strong className="text-slate-200">Plan de Trabajo Anual</strong> organiza la ejecución del SG-SST durante
          el año. Debe contener:
        </p>
        <div className="mb-10 space-y-3">
          {[
            "Las actividades previstas para el período.",
            "Las fechas de ejecución de cada actividad.",
            "Los responsables de cada actividad.",
            "Los recursos asignados: humanos, técnicos y financieros.",
          ].map((item, index) => (
            <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
              <span className="shrink-0 font-mono text-sm font-bold text-violet-400">{index + 1}</span>
              <p className="text-sm leading-relaxed text-slate-300">{item}</p>
            </div>
          ))}
        </div>
        <p className="mb-8 leading-relaxed text-slate-400">
          Debe estar firmado por el empleador o el responsable del SG-SST y revisarse cuando cambian las condiciones de
          la empresa o los resultados de la revisión por la dirección.
        </p>

        <div className="my-10 rounded-2xl border border-violet-500/20 bg-violet-600/5 p-6">
          <p className="mb-1 text-xs font-bold tracking-widest text-violet-400 uppercase">
            Shield AI genera y mantiene actualizada esta documentación
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            Shield AI genera borradores del COPASST, las matrices y el Plan de Trabajo Anual. El responsable del
            SG-SST revisa y firma. La empresa no depende de un consultor externo para la operación diaria.
          </p>
          <Link
            href="/shield-ai"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-500"
          >
            Conocer Shield AI →
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
          <Link href="/academia/pesv-sg-sst-integracion" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-white">
            → PESV y SG-SST: integración obligatoria
          </Link>
          <Link href="/shield-ai" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-white">
            → Shield AI — SG-SST automatizado
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
