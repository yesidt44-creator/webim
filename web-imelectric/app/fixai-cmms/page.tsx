import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FixAI } from "@/components/FixAI";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/fixai-cmms",
  },
  title: "FixAI CMMS — Software de Mantenimiento Industrial con IA | IMELECTRIC",
  description:
    "El primer CMMS con inteligencia artificial para oil & gas en Colombia y Latinoamérica. Digitalice órdenes de trabajo, aplique ISO 14224 automáticamente y obtenga KPIs de MTBF y MTTR en tiempo real. Funciona offline en campo.",
  keywords: [
    "FixAI CMMS",
    "CMMS con IA",
    "software mantenimiento industrial Colombia",
    "CMMS Colombia",
    "CMMS Latinoamérica",
    "software mantenimiento oil gas",
    "ISO 14224 Colombia",
    "mantenimiento con inteligencia artificial",
    "órdenes de trabajo digitales",
    "MTBF MTTR Colombia",
    "confiabilidad industrial Colombia",
    "mantenimiento preventivo planificado",
    "CMMS offline campo",
    "mantenimiento upstream oil gas",
    "software EAM Colombia",
    "gestión activos industriales",
    "mantenimiento predictivo Colombia",
    "CMMS Ecopetrol",
    "software mantenimiento minería Colombia",
    "digitalización mantenimiento industrial",
  ],
  openGraph: {
    title: "FixAI CMMS — Software de Mantenimiento Industrial con IA",
    description:
      "CMMS con IA para oil & gas en Colombia y Latinoamérica. ISO 14224, offline-first, KPIs MTBF/MTTR en tiempo real.",
    url: "https://imelectric.es/fixai-cmms",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un CMMS y para qué sirve en la industria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un CMMS (Computerized Maintenance Management System) es un software que centraliza la gestión del mantenimiento industrial: órdenes de trabajo, historial de equipos, mantenimiento preventivo, inventario de repuestos y KPIs de confiabilidad. FixAI CMMS añade inteligencia artificial para clasificar fallas automáticamente bajo la norma ISO 14224 y asistir a técnicos en campo con lenguaje natural.",
      },
    },
    {
      "@type": "Question",
      name: "¿FixAI CMMS funciona sin conexión a internet en campo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. FixAI CMMS fue diseñado con arquitectura offline-first para operaciones de upstream oil & gas donde la cobertura de red es intermitente o inexistente. Los técnicos pueden registrar órdenes de trabajo, adjuntar fotos y firmar electrónicamente sin conexión. Los datos se sincronizan automáticamente al recuperar señal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la norma ISO 14224 y cómo la aplica FixAI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISO 14224 es el estándar internacional para la recopilación e intercambio de datos de confiabilidad y mantenimiento en las industrias del petróleo, gas y petroquímica. FixAI CMMS aplica esta taxonomía automáticamente al registrar fallas, clasificando equipos por clase, tipo y subsistema. Esto permite calcular MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair) y realizar análisis de confiabilidad comparables entre sitios.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué sectores industriales de Colombia es aplicable FixAI CMMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FixAI CMMS es aplicable en upstream y midstream oil & gas (incluidas operaciones de Ecopetrol y contratistas), minería, generación eléctrica, manufactura y cualquier sector industrial en Colombia y Latinoamérica que requiera gestión de activos con trazabilidad forense y cumplimiento normativo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia a FixAI de otros CMMS disponibles en el mercado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FixAI CMMS se diferencia por tres factores: (1) es el primer CMMS con asistente de inteligencia artificial en lenguaje natural diseñado específicamente para el contexto latinoamericano; (2) integra taxonomía ISO 14224 de forma nativa y automática, no como configuración manual; (3) su arquitectura offline-first lo hace viable en zonas remotas de upstream donde los CMMS tradicionales basados en la nube fallan.",
      },
    },
  ],
};

export default function FixAICmmsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-800 bg-slate-950 px-6 pt-36 pb-12">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <a href="/" className="transition hover:text-slate-300">Inicio</a>
            <span>/</span>
            <span className="text-slate-400">FixAI CMMS</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-blue-500 uppercase">
            Plataforma SaaS IA — Mantenimiento Industrial
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            FixAI CMMS: el software de mantenimiento industrial con inteligencia artificial
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Diseñado para operaciones de oil &amp; gas en Colombia y Latinoamérica. ISO 14224 automático,
            offline-first en campo y KPIs de confiabilidad en tiempo real.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["CMMS con IA","ISO 14224","Offline-First","MTBF · MTTR","Colombia · Latinoamérica"].map(tag => (
              <span key={tag} className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Componente principal */}
      <FixAI />

      {/* FAQ SEO */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            Preguntas frecuentes sobre FixAI CMMS
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:hidden group-open:text-blue-400">
                  {faq.name}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Links a otros productos */}
      <section className="border-t border-slate-800 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-6 text-center text-sm font-bold tracking-widest text-slate-500 uppercase">
            Otras soluciones IMELECTRIC
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/safety-on",  label: "Safety On — HSE y SST Digital" },
              { href: "/nexvia",     label: "Nexvia — Gestión de Flotas HSEQ" },
              { href: "/academia",   label: "Academia Técnica" },
              { href: "/",           label: "← Inicio" },
            ].map(l => (
              <a key={l.href} href={l.href}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
