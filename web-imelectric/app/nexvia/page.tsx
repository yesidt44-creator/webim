import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Nexvia } from "@/components/Nexvia";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/nexvia",
  },
  title: "Nexvia — Gestión de Flotas con HSEQ Digital para Colombia | IMELECTRIC",
  description:
    "Software de gestión de flotas con seguridad vial digital, inspección preoperacional, HSEQ e ISO 9001 para PyMEs de transporte en Colombia. Trazabilidad 100%, offline-first y 10× más económico que soluciones enterprise.",
  keywords: [
    "Nexvia gestión flotas Colombia",
    "software gestión flotas Colombia",
    "HSEQ Colombia transporte",
    "seguridad vial digital Colombia",
    "inspección preoperacional digital Colombia",
    "software HSE transporte Colombia",
    "ISO 9001 transporte Colombia",
    "gestión flota PyME Colombia",
    "trazabilidad HSEQ transporte",
    "software SST transporte Colombia",
    "gestión seguridad vial Colombia",
    "permisos trabajo transporte digital",
    "verificación conductores SST Colombia",
    "software flota offline Colombia",
    "digitalización transporte industrial Colombia",
    "HSEQ PyME Colombia",
    "cumplimiento HSEQ transporte",
    "inspección vehicular digital Colombia",
    "control flota seguridad industrial",
    "gestión activos transporte Colombia",
  ],
  openGraph: {
    title: "Nexvia — Gestión de Flotas con HSEQ Digital | IMELECTRIC Colombia",
    description:
      "Inspección preoperacional, seguridad vial digital, trazabilidad HSEQ e ISO 9001 para PyMEs de transporte en Colombia. Offline-first.",
    url: "https://imelectric.es/nexvia",
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
      name: "¿Qué es HSEQ en transporte y por qué es obligatorio en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HSEQ son las siglas de Health, Safety, Environment and Quality (Salud, Seguridad, Medio Ambiente y Calidad). En Colombia, las empresas de transporte que operan como contratistas para empresas del sector oil & gas, minería o construcción deben cumplir requisitos HSEQ que incluyen: Plan Estratégico de Seguridad Vial (PESV), verificación de competencias SST de conductores, inspecciones preoperacionales documentadas y registros de incidentes. El incumplimiento puede resultar en la pérdida de contratos y sanciones del Ministerio de Transporte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye una inspección preoperacional digital con Nexvia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La inspección preoperacional digital de Nexvia incluye: checklist configurable del estado del vehículo (frenos, luces, llantas, cinturones, extintores), verificación de documentos del conductor (licencia, exámenes médicos, capacitaciones SST vigentes), evaluación de fatiga y riesgo con matriz de 8 criterios, registro fotográfico del vehículo, firma electrónica del conductor y timestamp con geolocalización. Todo queda trazado con integridad para auditorías HSEQ.",
      },
    },
    {
      "@type": "Question",
      name: "¿Nexvia sirve para obtener o mantener la certificación ISO 9001 en transporte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Nexvia digitaliza los procesos de gestión de calidad requeridos por ISO 9001:2015 en empresas de transporte: registros de no conformidades, medición de satisfacción del cliente mediante encuestas QR post-servicio, trazabilidad de procesos operativos y evidencia documentada de mejora continua. Estos registros facilitan las auditorías de certificación y mantenimiento de ISO 9001 al proporcionar evidencia digital íntegra y consultable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Nexvia en comparación con soluciones enterprise de gestión de flotas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexvia está diseñado para PyMEs de transporte en Colombia y es entre 10 y 20 veces más económico que las soluciones enterprise multinacionales de gestión de flotas. El modelo de precios se adapta al tamaño de la flota y los módulos requeridos. Contactar a IMELECTRIC para una auditoría de viabilidad gratuita y cotización según el número de vehículos y conductores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Nexvia funciona sin conexión a internet en rutas remotas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Nexvia fue desarrollado con arquitectura offline-first para operar en rutas con conectividad limitada o nula, comunes en Colombia en rutas hacia zonas de operación minera o petrolera. Los conductores pueden completar inspecciones preoperacionales, registrar incidentes y firmar documentos sin internet. Los datos se sincronizan automáticamente al recuperar cobertura.",
      },
    },
  ],
};

export default function NexviaPage() {
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
            <span className="text-slate-400">Nexvia</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-blue-500 uppercase">
            Plataforma SaaS — Flotas e HSEQ Digital
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Nexvia: gestión de flotas con HSEQ digital e ISO 9001 para Colombia
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Para PyMEs de transporte que necesitan integrar operación, seguridad vial digital
            y cumplimiento HSEQ sin el costo de soluciones enterprise. Inspección preoperacional,
            trazabilidad 100% y offline-first para rutas remotas.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["HSEQ Colombia","ISO 9001 Transporte","Inspección preoperacional","Seguridad vial digital","Offline-First"].map(tag => (
              <span key={tag} className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Componente principal */}
      <Nexvia />

      {/* FAQ SEO */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            Preguntas frecuentes sobre Nexvia HSEQ
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
              { href: "/fixai-cmms", label: "FixAI CMMS — Mantenimiento con IA" },
              { href: "/safety-on",  label: "Safety On — HSE y SST Digital" },
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
