import { headers } from "next/headers";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldAI } from "@/components/ShieldAI";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/shield-ai",
  },
  title: "Shield AI — SG-SST con IA | Res. 0312 | IMELECTRIC",
  description:
    "Shield AI automatiza el cumplimiento del SG-SST: diagnóstico de brecha contra Res. 0312, generación de evidencia documental, alertas de vencimiento y firma dual con valor legal. Retención documental mínima de 20 años (Decreto 1072). Para toda empresa colombiana obligada por el Decreto 1072.",
  keywords: [
    "Shield AI SG-SST Colombia",
    "software SG-SST Colombia",
    "Resolución 0312 cumplimiento software",
    "Decreto 1072 SG-SST digital",
    "sistema gestión seguridad trabajo Colombia",
    "SG-SST automatizado Colombia",
    "software HSE PyME Colombia",
    "cumplimiento normativo SST Colombia",
    "diagnóstico SG-SST Colombia",
    "evidencia documental SG-SST",
    "firma dual SG-SST Colombia",
    "retención documental SST 20 años",
    "estándares mínimos Resolución 0312",
    "auditoría SG-SST Colombia",
    "software seguridad salud trabajo Colombia",
  ],
  openGraph: {
    title: "Shield AI — SG-SST con IA para toda empresa colombiana | IMELECTRIC",
    description:
      "Diagnóstico de brecha Res. 0312, evidencia documental automática, alertas de vencimiento y firma dual. Retención mínima 20 años (Dec. 1072 Art. 2.2.4.6.13). Sin consultores externos.",
    url: "https://imelectric.es/shield-ai",
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
      name: "¿Qué es el SG-SST y qué empresas colombianas están obligadas a implementarlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) es obligatorio para toda empresa colombiana con al menos un trabajador, según el Decreto 1072 de 2015 y la Resolución 0312 de 2019. La Res. 0312 establece estándares mínimos diferenciados: 7 para empresas de 1 a 10 trabajadores con riesgo I, II o III; 21 para empresas de 11 a 50 trabajadores con riesgo I, II o III; y 60 para empresas de más de 50 trabajadores (cualquier riesgo) o de 50 o menos con riesgo IV o V.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo automatiza Shield AI la evidencia documental del SG-SST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shield AI analiza el estado actual del SG-SST de la empresa y genera automáticamente los borradores de los documentos requeridos: matrices de identificación de peligros, plan de emergencias, programas de capacitación, actas de comité COPASST y otros. El responsable del SG-SST revisa cada documento, completa los datos específicos de la empresa y firma junto al representante legal. El sistema nunca genera documentos firmados de forma autónoma.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo debe conservarse la documentación del SG-SST en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Decreto 1072 de 2015 (Art. 2.2.4.6.13) exige conservar por un mínimo de 20 años, contados desde el cese de la relación laboral, documentos clave del SG-SST (perfiles epidemiológicos, conceptos de exámenes médicos, mediciones de ambiente de trabajo, capacitaciones y suministro de EPP). Para el resto de registros, el empleador debe definir su propia tabla de retención documental. Shield AI está diseñado para soportar esa retención mínima de 20 años con trazabilidad que permite detectar si la evidencia fue alterada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre Shield AI y Veriwork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shield AI está diseñado para el cumplimiento del SG-SST de la empresa como organización, cubriendo todos los requisitos de la Res. 0312 para cualquier empresa colombiana. Veriwork está diseñado para la gestión HSE en campo, específicamente para operaciones de alto riesgo como trabajo en alturas, permisos de trabajo caliente y gestión de contratistas en Oil & Gas, construcción y manufactura. Muchas empresas usan ambas: Shield AI para cumplimiento corporativo y Veriwork para ejecución operativa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Shield AI requiere contratar un consultor de SG-SST externo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Shield AI está diseñado para que el responsable interno del SG-SST de la empresa pueda gestionar el cumplimiento sin depender permanentemente de un consultor externo. El sistema provee el diagnóstico, la hoja de ruta, los borradores documentales y las alertas. La empresa puede usar un consultor para el arranque inicial si lo desea, pero la operación diaria del sistema no lo requiere.",
      },
    },
  ],
};

export default async function ShieldAIPage() {
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
            <Link href="/" className="transition hover:text-slate-300">Inicio</Link>
            <span>/</span>
            <span className="text-slate-400">Shield AI</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-violet-400 uppercase">
            Plataforma SaaS — SG-SST automatizado
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Shield AI: cumplimiento SG-SST sin depender de un consultor externo
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            La Res. 0312 obliga a toda empresa colombiana. Shield AI diagnostica brechas, genera evidencia
            documental y alerta antes de que venzan los plazos. El responsable y el representante legal firman.
            Régimen documental anclado al Decreto 1072 (Art. 2.2.4.6.13).
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Res. 0312","Decreto 1072","SG-SST automatizado","Firma dual","Retención 20 años","Toda empresa colombiana"].map(tag => (
              <span key={tag} className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Componente principal */}
      <ShieldAI />

      {/* FAQ SEO */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            Preguntas frecuentes sobre Shield AI y el SG-SST
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:hidden group-open:text-violet-400">
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
              { href: "/fixai-cmms", label: "Fix AI — Mantenimiento Industrial con IA" },
              { href: "/veriwork",   label: "Veriwork — Gestión HSE verificable" },
              { href: "/nexvia",     label: "Nexvia — Gestión de Flotas HSEQ" },
              { href: "/",           label: "← Inicio" },
            ].map(l => (
              <a key={l.href} href={l.href}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-violet-500/40 hover:text-violet-400">
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
