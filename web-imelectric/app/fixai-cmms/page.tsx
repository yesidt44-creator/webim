import { headers } from "next/headers";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FixAI } from "@/components/FixAI";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/fixai-cmms",
  },
  title: "Fix AI — Software de Mantenimiento Industrial con IA para Contratistas | IMELECTRIC",
  description:
    "Fix AI es una PWA de gestión de mantenimiento industrial con IA para contratistas. Reporte de campo offline, exportación compatible con el ERP del operador, supervisión digital y módulo Falion de confiabilidad. Sin doble digitación, sin penalizaciones por OTs sin cerrar.",
  keywords: [
    "Fix AI CMMS",
    "software mantenimiento industrial Colombia",
    "PWA mantenimiento industrial Colombia",
    "reporte OT digital Colombia",
    "CMMS Oil Gas Colombia contratistas",
    "software mantenimiento offline campo",
    "Falion IA confiabilidad mantenimiento",
    "gestión mantenimiento Colombia",
    "CMMS contratistas Latinoamérica",
    "digitalización OTs mantenimiento",
    "CMMS sin integración API",
    "mantenimiento campo sin internet",
    "software planeación mantenimiento Colombia",
    "backlog mantenimiento digital",
    "reporte técnico mantenimiento electrónico",
    "gestión contratos mantenimiento Colombia",
    "CMMS Oil Gas Colombia",
    "Fix AI IMELECTRIC",
  ],
  openGraph: {
    title: "Fix AI — Mantenimiento Industrial con IA para Contratistas | IMELECTRIC",
    description:
      "PWA con IA para contratistas de mantenimiento. Reporte offline, exportación para el ERP del operador, supervisión y módulo Falion de confiabilidad. Sin doble digitación.",
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
      name: "¿Qué es Fix AI y en qué se diferencia de un CMMS tradicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix AI es una aplicación web progresiva (PWA) de gestión de mantenimiento industrial con inteligencia artificial diseñada para contratistas. A diferencia de un CMMS tradicional, no requiere integraciones API ni licencias adicionales del ERP del operador: importa el programa semanal, acompaña la ejecución en campo y exporta los reportes listos para cargar en el ERP (compatible con SAP PM IW38/IW41 y otros formatos). También puede operar como CMMS completo cuando la organización lo necesita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Fix AI funciona sin conexión a internet en campo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Fix AI fue diseñado con arquitectura offline-first para operar en zonas con cobertura de red intermitente o inexistente, comunes en operaciones Oil & Gas upstream en Colombia. Los técnicos pueden registrar órdenes de trabajo, adjuntar fotos y firmar electrónicamente sin señal. Los datos se sincronizan automáticamente al recuperar conexión, sin pérdida de información.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona la exportación al ERP del operador sin integración API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix AI genera un archivo de exportación compatible con el ERP del operador (incluye el formato de carga masiva compatible con SAP PM IW38/IW41 y formatos configurables para otros ERP). El planeador importa ese archivo directamente en el ERP sin necesidad de re-digitar ningún dato. Esto elimina la figura del re-digitador y el riesgo de errores de transcripción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el módulo Falion de Fix AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Falion es el módulo de inteligencia artificial de Fix AI. Analiza el historial acumulado de reportes de campo para identificar equipos críticos, hallazgos recurrentes y patrones de falla bajo demanda del supervisor o planeador. Es un insumo directo para tomar mejores decisiones operativas y para negociar futuros contratos con datos propios — algo que los contratistas raramente tienen disponible de forma estructurada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Fix AI aplica solo para Oil & Gas o sirve en otros sectores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix AI aplica en cualquier industria que requiera gestión de mantenimiento en campo: Oil & Gas, manufactura, minería, energía eléctrica y más. Su arquitectura está diseñada para personalizarse según los procesos, checklists, roles y flujos de aprobación de cada cliente. El punto de partida habitual es el sector Oil & Gas porque ahí la brecha entre ejecución y registro administrativo tiene el mayor costo operativo.",
      },
    },
  ],
};

export default async function FixAICmmsPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
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
            PWA · Gestión de Mantenimiento Industrial con IA
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Fix AI: todo registrado, nada se te escapa
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Software de mantenimiento industrial con IA para contratistas.
            Reporte de campo offline, exportación compatible con el ERP del operador, supervisión digital y módulo Falion de
            confiabilidad — sin doble digitación ni integraciones complejas.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Compatible con el ERP del operador","Offline-First","Exportación IW38/IW41","Falion IA","Colombia · Latinoamérica"].map(tag => (
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
            Preguntas frecuentes sobre Fix AI
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
              { href: "/veriwork",   label: "Veriwork — Gestión HSE verificable" },
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
