import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SafetyOn } from "@/components/SafetyOn";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/safety-on",
  },
  title: "Safety On — Software HSE y SST para Colombia | Permisos de Trabajo Digitales | IMELECTRIC",
  description:
    "Gestión de seguridad industrial digital con permisos de trabajo digitales, trabajo en alturas, trazabilidad SHA-256 e integridad forense. Cumplimiento Resolución 0312, Decreto 1072 y normativa SST en Colombia y Latinoamérica.",
  keywords: [
    "Safety On software HSE",
    "software gestión HSE Colombia",
    "permisos de trabajo digitales Colombia",
    "software SST Colombia",
    "trabajo en alturas digital Colombia",
    "seguridad industrial digital",
    "gestión seguridad industrial Colombia",
    "trazabilidad HSE forense",
    "Resolución 0312 software",
    "Decreto 1072 SG-SST digital",
    "blindaje legal HSE Colombia",
    "permisos trabajo altura Resolución 4272",
    "software HSE oil gas Colombia",
    "gestión permisos trabajo industrial",
    "firma digital seguridad industrial",
    "SHA-256 trazabilidad documentos SST",
    "software cumplimiento normativo SST",
    "auditoría HSE digital Colombia",
    "seguridad industrial Ecopetrol",
    "software inspección seguridad industrial",
  ],
  openGraph: {
    title: "Safety On — Software HSE y SST Digital para Colombia | IMELECTRIC",
    description:
      "Permisos de trabajo digitales, trabajo en alturas, trazabilidad SHA-256 y blindaje legal HSE. Cumplimiento Res. 0312 y Dec. 1072.",
    url: "https://imelectric.es/safety-on",
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
      name: "¿Qué es un permiso de trabajo digital y cómo mejora la seguridad industrial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un permiso de trabajo digital es la versión electrónica del Permiso de Trabajo en Frío/Caliente que reemplaza el papel por un flujo digital con firma electrónica, geolocalización y timestamp. Safety On genera permisos con hash SHA-256 que garantizan la integridad del documento ante auditorías: cualquier alteración es detectable. Esto elimina el riesgo de pérdida documental y proporciona blindaje legal ante inspecciones del Ministerio de Trabajo en Colombia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Safety On cumple con la Resolución 0312 de 2019 y el Decreto 1072 de 2015?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Safety On está diseñado para cumplir con los estándares mínimos del SG-SST establecidos en la Resolución 0312 de 2019 y el Decreto 1072 de 2015 (Decreto Único Reglamentario del Sector Trabajo). El sistema digitaliza la evidencia documental requerida por estas normas: matrices de riesgo, registros de capacitación, verificación de competencias SST y permisos de trabajo, todo con trazabilidad temporal y forense.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo gestiona Safety On el trabajo en alturas según la normativa colombiana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safety On integra los requisitos de la Resolución 4272 de 2021 para trabajo en alturas: verificación digital del Certificado de Coordinador de Trabajo en Alturas, validación de vigencia de capacitaciones, generación del permiso de trabajo en alturas con checklist de equipos de protección contra caídas y registro fotográfico del punto de anclaje. Todo queda archivado con timestamp e integridad SHA-256.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa que Safety On tenga trazabilidad SHA-256?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SHA-256 es un algoritmo criptográfico que genera una huella digital única para cada documento. Safety On calcula el hash SHA-256 de cada permiso de trabajo, registro de inspección y evidencia fotográfica en el momento de su creación. Si el documento es alterado posteriormente, su hash cambia y la manipulación es detectable. Esto convierte los registros de Safety On en evidencia forense válida ante demandas laborales o auditorías de la Superintendencia de Industria y Comercio.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué sectores industriales de Colombia aplica Safety On?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safety On aplica en todos los sectores regulados por el SG-SST colombiano: oil & gas (upstream, midstream, downstream), minería, construcción, manufactura, energía eléctrica y transporte. Es especialmente relevante en sectores donde el trabajo en alturas, espacios confinados y permisos de trabajo caliente son frecuentes y donde una demanda laboral por accidente puede tener consecuencias millonarias si no se cuenta con evidencia documental íntegra.",
      },
    },
  ],
};

export default function SafetyOnPage() {
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
            <span className="text-slate-400">Safety On</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-emerald-500 uppercase">
            Plataforma SaaS — Seguridad Industrial Digital
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Safety On: software HSE y SST con permisos de trabajo digitales para Colombia
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Gestión de seguridad industrial de reactiva a preventiva. Permisos de trabajo digitales
            con integridad SHA-256, cumplimiento Resolución 0312 y Decreto 1072, y blindaje legal
            ante auditorías del Ministerio de Trabajo.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Permisos digitales SHA-256","Res. 0312 · Dec. 1072","Trabajo en alturas","Trazabilidad forense","Colombia · Latinoamérica"].map(tag => (
              <span key={tag} className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Componente principal */}
      <SafetyOn />

      {/* FAQ SEO */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            Preguntas frecuentes sobre Safety On HSE
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:hidden group-open:text-emerald-400">
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
              { href: "/fixai-cmms", label: "FixAI CMMS — Mantenimiento con IA" },
              { href: "/nexvia",     label: "Nexvia — Gestión de Flotas HSEQ" },
              { href: "/academia",   label: "Academia Técnica" },
              { href: "/",           label: "← Inicio" },
            ].map(l => (
              <a key={l.href} href={l.href}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400">
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
