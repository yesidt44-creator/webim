import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/pesv-sg-sst-integracion" },
  title: "PESV y SG-SST: por qué el Artículo 32 de la Res. 0312 los obliga a integrarse | IMELECTRIC",
  description:
    "Por qué gestionar el Plan Estratégico de Seguridad Vial separado del SG-SST duplica documentos e introduce inconsistencias. Marco legal, niveles de exigencia y consecuencias de incumplimiento.",
  keywords: [
    "PESV Colombia",
    "Plan Estratégico de Seguridad Vial",
    "Resolución 40595 de 2022",
    "integración PESV SG-SST",
    "artículo 32 resolución 0312 PESV",
    "software PESV Colombia",
    "niveles PESV básico estándar avanzado",
    "Ley 1503 de 2011",
    "PESV empresas obligadas Colombia",
    "Superintendencia de Transporte PESV",
  ],
  openGraph: {
    title: "PESV y SG-SST en Colombia: por qué el Artículo 32 de la Res. 0312 los obliga a integrarse",
    description:
      "Por qué gestionar el PESV como un sistema aparte del SG-SST duplica documentos e introduce inconsistencias en la operación.",
    url: "https://imelectric.es/academia/pesv-sg-sst-integracion",
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
      name: "¿Qué empresas están obligadas a tener un PESV en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Según la Resolución 40595 de 2022, están obligadas las empresas que cuenten con una flota de más de 10 vehículos, que transporten personas o mercancías, o que subcontraten servicios de transporte. La norma define tres niveles: Básico (11–19 vehículos o conductores), Estándar (20–50) y Avanzado (más de 50).",
      },
    },
    {
      "@type": "Question",
      name: "¿El PESV reemplaza al SG-SST o se integra con él?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El PESV no reemplaza al SG-SST; ambos son obligaciones independientes. Sin embargo, el Artículo 32 de la Resolución 0312 de 2019 exige articularlos porque comparten elementos comunes como registros de conductores, exámenes médicos y capacitaciones. Tratarlos como sistemas separados genera duplicación documental e inconsistencias de datos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi empresa no tiene el PESV actualizado según la Resolución 40595?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El incumplimiento del PESV puede derivar en sanciones por parte de la Superintendencia de Transporte, el Ministerio de Trabajo y los Organismos de Tránsito, con base en la Ley 2050 de 2020. Además, la ausencia o desactualización del PESV expone a la empresa a responsabilidades legales ante accidentes de tránsito con su flota.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "PESV y SG-SST en Colombia: por qué el Artículo 32 de la Res. 0312 los obliga a integrarse",
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
  mainEntityOfPage: "https://imelectric.es/academia/pesv-sg-sst-integracion",
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
      name: "PESV y SG-SST: integración obligatoria",
      item: "https://imelectric.es/academia/pesv-sg-sst-integracion",
    },
  ],
};

export default async function PesvSgSstPage() {
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
            <span className="text-slate-300">PESV y SG-SST</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-violet-400 uppercase">
            Seguridad Vial · SG-SST · Normativa
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            PESV y SG-SST en Colombia: por qué el Artículo 32 de la Res. 0312 los obliga a integrarse
          </h1>
          <p className="mt-3 text-xs text-slate-500">Publicado: 18 jul 2026 · Equipo de Ingeniería IMELECTRIC</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Muchas empresas gestionan el Plan Estratégico de Seguridad Vial como si fuera un proyecto aparte del SG-SST.
            La Resolución 0312 de 2019 dice lo contrario.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-4 text-2xl font-bold text-white">Qué es el PESV y quién lo exige</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          El <strong className="text-slate-200">Plan Estratégico de Seguridad Vial (PESV)</strong> es el instrumento de
          planificación y gestión que toda organización con actividad relacionada con el tránsito debe implementar para
          reducir los accidentes de tránsito. Su marco legal parte de la{" "}
          <strong className="text-slate-200">Ley 1503 de 2011</strong>, que establece la obligación para las entidades
          públicas y privadas, y se desarrolla operativamente en la{" "}
          <strong className="text-slate-200">Resolución 40595 de 2022</strong> del Ministerio de Transporte, que derogó
          la anterior Resolución 1565 de 2014.
        </p>
        <p className="mb-8 leading-relaxed text-slate-400">
          La Resolución 40595 estructura el PESV en <strong className="text-slate-200">4 fases y 24 pasos bajo ciclo PHVA</strong>{" "}
          (Planear, Hacer, Verificar, Actuar). Está integrado además con la norma internacional{" "}
          <strong className="text-slate-200">ISO 39001:2012</strong> de gestión de seguridad vial.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">¿A quién aplica?</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          Están obligadas las empresas que cuenten con una flota de más de 10 vehículos, que transporten personas o
          mercancías, o que subcontraten servicios de transporte. La norma define tres niveles de exigencia:
        </p>
        <div className="mb-10 grid gap-3 sm:grid-cols-3">
          {[
            { level: "Básico", range: "11–19 vehículos o conductores" },
            { level: "Estándar", range: "20–50 vehículos o conductores" },
            { level: "Avanzado", range: "Más de 50 vehículos o conductores" },
          ].map(({ level, range }) => (
            <div key={level} className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">
              <p className="font-bold text-white">{level}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{range}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white">
          Por qué gestionarlo separado del SG-SST genera problemas
        </h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          El{" "}<strong className="text-slate-200">Artículo 32 de la Resolución 0312 de 2019</strong> establece la
          obligación de articular el PESV con el SG-SST. La razón es que ambos sistemas comparten documentos y datos:
        </p>
        <ul className="mb-8 space-y-3 text-slate-400">
          {[
            "Registros de conductores (licencias, exámenes médicos, capacitaciones).",
            "Información de vehículos y sus condiciones de mantenimiento.",
            "Reportes de condiciones de trabajo y fatiga que deberían alimentar la asignación de rutas.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm">
              <span className="mt-0.5 shrink-0 text-violet-400">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-8 leading-relaxed text-slate-400">
          Cuando el PESV vive en una carpeta independiente del SG-SST, la misma información se pide dos veces, se
          actualiza en momentos distintos y termina siendo inconsistente: el departamento de SST reporta fatiga de un
          conductor, pero esa alerta no llega al sistema que asigna las rutas. El Artículo 32 existe precisamente para
          eliminar esa brecha.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">Supervisión y consecuencias de incumplimiento</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          La supervisión del PESV está a cargo de la{" "}
          <strong className="text-slate-200">Superintendencia de Transporte</strong>, el{" "}
          <strong className="text-slate-200">Ministerio de Trabajo</strong> y los{" "}
          <strong className="text-slate-200">Organismos de Tránsito</strong>. El incumplimiento puede derivar en
          sanciones con base en la <strong className="text-slate-200">Ley 2050 de 2020</strong>. Adicionalmente, la
          ausencia o desactualización del PESV expone a la empresa a responsabilidades legales ante accidentes de
          tránsito con su flota.
        </p>

        <div className="my-10 rounded-2xl border border-violet-500/20 bg-violet-600/5 p-6">
          <p className="mb-1 text-xs font-bold tracking-widest text-violet-400 uppercase">
            Gestión documental integrada del PESV y el SG-SST
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            Shield AI articula el ciclo documental del PESV dentro del mismo entorno del SG-SST, evitando la duplicación
            de carpetas y la inconsistencia de datos. El responsable del SG-SST revisa y firma.
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
          <Link href="/academia/copasst-matriz-legal-plan-trabajo-sgsst" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-white">
            → COPASST, matriz legal y plan de trabajo anual
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
