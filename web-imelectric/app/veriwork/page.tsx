import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SafetyOn } from "@/components/SafetyOn";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/veriwork",
  },
  title: "Veriwork — Gestión HSE verificable | IMELECTRIC",
  description:
    "Veriwork: la gestión HSE que tu operación puede verificar, no solo archivar. Permisos de trabajo digitales con firma criptográfica verificable, cumplimiento Resolución 0312, Decreto 1072 y Res. 4272 de trabajo en alturas. Para Colombia y Latinoamérica.",
  keywords: [
    "Veriwork software HSE",
    "software gestión HSE Colombia",
    "permisos de trabajo digitales Colombia",
    "software SST Colombia",
    "trabajo en alturas digital Colombia",
    "seguridad industrial digital",
    "gestión seguridad industrial Colombia",
    "trazabilidad HSE forense",
    "Resolución 0312 software",
    "Decreto 1072 SG-SST digital",
    "permisos trabajo altura Resolución 4272",
    "software HSE oil gas Colombia",
    "gestión permisos trabajo industrial",
    "firma electrónica seguridad industrial Colombia",
    "firma Ed25519 permisos trabajo Colombia",
    "PAdES sello tiempo HSE",
    "software cumplimiento normativo SST",
    "auditoría HSE digital Colombia",
    "trazabilidad documental HSE verificable",
    "Decreto 2364 firma electrónica Colombia",
  ],
  openGraph: {
    title: "Veriwork — Gestión HSE verificable para Colombia | IMELECTRIC",
    description:
      "Permisos de trabajo digitales con firma criptográfica verificable. Cumplimiento Res. 0312, Dec. 1072 y normativa trabajo en alturas. La gestión HSE que tu operación puede verificar, no solo archivar.",
    url: "https://imelectric.es/veriwork",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/veriwork-marketing-hse.png",
        width: 1024,
        height: 356,
        alt: "Veriwork — gestión HSE inteligente y verificada en operaciones industriales",
      },
    ],
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
        text: "Un permiso de trabajo digital es la versión electrónica del Permiso de Trabajo en Frío/Caliente que reemplaza el papel por un flujo digital con firma electrónica, geolocalización y timestamp. Veriwork genera permisos con firma criptográfica que garantizan la integridad del documento ante auditorías: cualquier alteración es detectable. Esto elimina el riesgo de pérdida documental y proporciona trazabilidad forense ante inspecciones del Ministerio de Trabajo en Colombia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Veriwork cumple con la Resolución 0312 de 2019 y el Decreto 1072 de 2015?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Veriwork está diseñado para cumplir con los estándares mínimos del SG-SST establecidos en la Resolución 0312 de 2019 y el Decreto 1072 de 2015 (Decreto Único Reglamentario del Sector Trabajo). El sistema digitaliza la evidencia documental requerida: matrices de riesgo, registros de capacitación, verificación de competencias SST y permisos de trabajo, con trazabilidad temporal diseñada para que la evidencia no pueda modificarse sin dejar rastro.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo gestiona Veriwork el trabajo en alturas según la normativa colombiana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veriwork integra los requisitos de la Resolución 4272 de 2021 para trabajo en alturas: verificación digital del Certificado de Coordinador de Trabajo en Alturas, validación de vigencia de capacitaciones, generación del permiso de trabajo en alturas con checklist de equipos de protección contra caídas y registro fotográfico del punto de anclaje. Todo queda archivado con timestamp y firma verificable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo garantiza Veriwork la integridad de los documentos HSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veriwork aplica hash SHA-256 del documento + firma Ed25519 (clave de empresa) + sello de tiempo conforme a RFC 3161 (perfil PAdES). La identificación del firmante individual proviene del registro de usuario y sus credenciales; la clave de empresa sella la transacción. Cada permiso incluye un QR de verificación pública. Para actas de alta severidad (accidentes graves, fatalidades) el protocolo incluye refuerzo notarial. La segregación de roles garantiza que quien reporta no es quien autoriza, cumpliendo el requisito de firma electrónica con valor legal del Decreto 2364 de 2012.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué sectores industriales de Colombia aplica Veriwork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veriwork aplica en todos los sectores regulados por el SG-SST colombiano: oil & gas (upstream, midstream, downstream), minería, construcción, manufactura, energía eléctrica y transporte. Es especialmente relevante en sectores donde el trabajo en alturas, espacios confinados y permisos de trabajo caliente son frecuentes y donde una demanda laboral por accidente puede tener consecuencias millonarias si no se cuenta con evidencia documental íntegra.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre Veriwork y una firma electrónica genérica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una firma electrónica genérica acredita identidad. Veriwork va más allá: además de identificar al firmante, registra contexto operativo (GPS, timestamp, foto del sitio), verifica que las competencias del firmante estén vigentes según normativa colombiana y genera un log forense que reconstruye minuto a minuto quién aprobó qué, cuándo y bajo qué condiciones. Esto es lo que distingue 'gestión HSE verificable' de simplemente 'gestión HSE archivada'.",
      },
    },
  ],
};

export default async function VeriworkPage() {
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
            <span className="text-slate-400">Veriwork</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-emerald-500 uppercase">
            Plataforma SaaS — Gestión HSE verificable
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Veriwork: la gestión HSE que tu operación puede verificar, no solo archivar
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Permisos de trabajo digitales con firma criptográfica verificable, cumplimiento Resolución 0312
            y Decreto 1072, y trazabilidad diseñada para que la evidencia no pueda modificarse sin dejar rastro.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Firma verificable","Res. 0312 · Dec. 1072","Trabajo en alturas · Res. 4272","Trazabilidad forense","Colombia · Latinoamérica"].map(tag => (
              <span key={tag} className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">{tag}</span>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900 shadow-2xl shadow-emerald-950/30 sm:rounded-3xl">
            <Image
              src="/veriwork-marketing-hse.png"
              alt="Veriwork — gestión HSE inteligente, activa, legal y verificada"
              width={1024}
              height={356}
              sizes="(max-width: 768px) calc(100vw - 3rem), 1280px"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Componente principal */}
      <SafetyOn />

      {/* FAQ SEO */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            Preguntas frecuentes sobre Veriwork HSE
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
              { href: "/fixai-cmms", label: "Fix AI — Mantenimiento Industrial con IA" },
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
