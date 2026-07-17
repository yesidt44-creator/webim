import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/firma-electronica-vs-firma-digital-colombia" },
  title: "Firma electrónica vs digital Colombia | IMELECTRIC",
  description:
    "En Colombia, firma electrónica y firma digital son dos regímenes legales distintos. Cuál aplica para permisos de trabajo HSE, contratos laborales y documentos del SG-SST — y cuál es la diferencia que sí importa en un juicio laboral.",
  keywords: [
    "firma electrónica Colombia",
    "firma digital Colombia",
    "Decreto 2364 2012 firma electrónica",
    "firma electrónica vs firma digital diferencia",
    "valor legal firma electrónica Colombia",
    "Ed25519 firma permisos trabajo",
    "PAdES Colombia",
    "firma electrónica SG-SST Colombia",
    "Ley 527 1999 Colombia",
    "firma digital certificada ONAC Colombia",
  ],
  openGraph: {
    title: "Firma Electrónica vs Firma Digital en Colombia | IMELECTRIC",
    description:
      "Dos regímenes legales distintos. Cuál aplica para permisos de trabajo HSE y documentos del SG-SST — y la diferencia que sí importa en un juicio laboral colombiano.",
    url: "https://imelectric.es/academia/firma-electronica-vs-firma-digital-colombia",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es válida la firma electrónica para los permisos de trabajo en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La firma electrónica es válida para permisos de trabajo industriales en Colombia bajo la Ley 527 de 1999 y el Decreto 2364 de 2012, siempre que permita identificar al firmante y detectar alteraciones posteriores al documento. El Decreto 1072 y la Resolución 0312 no exigen firma digital certificada para documentos del SG-SST.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la firma digital certificada y cuándo se exige en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La firma digital certificada usa criptografía PKI con un certificado emitido por una entidad de certificación acreditada ante la ONAC (Certicámara y otras). Equivale a la firma manuscrita en todos los efectos legales. Se exige en actos jurídicos de mayor formalidad como contratos notarizados, ciertos trámites ante entidades públicas y actos societarios. Para permisos de trabajo HSE, la firma electrónica avanzada es suficiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es Ed25519 y qué valor legal tiene en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ed25519 es un algoritmo de firma criptográfica de clave pública. Genera una firma que, sin la clave privada, es computacionalmente inviable de forjar. Combinada con un hash SHA-256 del documento y un sello de tiempo externo conforme a RFC 3161 (perfil PAdES para PDF), equivale funcionalmente a una firma electrónica avanzada con valor probatorio reforzado ante un tribunal colombiano, sin necesidad de certificado de entidad de certificación.",
      },
    },
  ],
};


const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: 'Firma electrónica vs firma digital certificada en Colombia',
  datePublished: "2026-07-01",
  dateModified: "2026-07-17",
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
  mainEntityOfPage: 'https://imelectric.es/academia/firma-electronica-vs-firma-digital-colombia',
  // ARTICLE_META_INJECTED
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
    { "@type": "ListItem", position: 3, name: 'Firma electrónica vs digital', item: 'https://imelectric.es/academia/firma-electronica-vs-firma-digital-colombia' },
  ],
};

export default async function FirmaElectronicaPage() {
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
            <Link href="/academia" className="transition-colors hover:text-emerald-400">Academia Técnica</Link>
            <span>/</span>
            <span className="text-slate-300">Firma Electrónica vs Digital</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-emerald-400 uppercase">
            HSE · SG-SST · Veriwork · Shield AI
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Firma electrónica vs. firma digital certificada en Colombia
          </h1>
          <p className="mt-3 text-xs text-slate-500">
            Publicado: 1 jul 2026 · Actualizado: 17 jul 2026 · Equipo de Ingeniería IMELECTRIC
          </p>
          <p className="text-lg leading-relaxed text-slate-400">
            Cuando un coordinador HSE firma un permiso de trabajo en una tablet, o cuando el representante legal firma el acta de revisión del SG-SST en un sistema digital, la pregunta que nadie hace — hasta que hay un accidente — es: <em>¿esa firma tiene valor legal en Colombia?</em>
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-4 mt-0 text-2xl font-bold text-white">Los dos regímenes en Colombia</h2>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Firma electrónica (régimen general)</h3>
        <p className="mb-3 leading-relaxed text-slate-400">
          <strong className="text-slate-200">Marco legal:</strong> Ley 527 de 1999 (Comercio Electrónico) y su reglamento, el <strong className="text-slate-200">Decreto 2364 de 2012</strong>.
        </p>
        <p className="mb-4 leading-relaxed text-slate-400">
          La firma electrónica es cualquier método tecnológico que permita:
        </p>
        <ul className="mb-4 space-y-2">
          <li className="flex items-start gap-3 text-sm text-slate-400"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />Identificar al firmante</li>
          <li className="flex items-start gap-3 text-sm text-slate-400"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />Detectar si el documento fue alterado después de firmado</li>
        </ul>
        <p className="mb-4 leading-relaxed text-slate-400">
          No requiere un certificado expedido por una entidad de certificación. Puede ser una firma sobre pantalla, un token de un solo uso, una firma con clave privada, o cualquier mecanismo técnico que cumpla las dos condiciones anteriores.
        </p>
        <div className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="text-sm leading-relaxed text-slate-300">
            <strong className="text-emerald-400">Valor probatorio:</strong> Válida y vinculante entre las partes. Quien afirme que la firma no es válida debe probarlo. La carga de la prueba se invierte: no tienes que demostrar que la firma es tuya — la otra parte debe demostrar que no lo es.
          </p>
        </div>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Firma digital con certificado (régimen reforzado)</h3>
        <p className="mb-4 leading-relaxed text-slate-400">
          <strong className="text-slate-200">Marco legal:</strong> Ley 527 de 1999, artículos 28-32, y reglamentación de la ONAC (Organismo Nacional de Acreditación de Colombia).
        </p>
        <p className="mb-4 leading-relaxed text-slate-400">
          La firma digital certificada usa criptografía de clave pública (PKI) con un certificado emitido por una <strong className="text-slate-200">entidad de certificación acreditada ante la ONAC</strong> (Certicámara, Mática, e.firma y otras autorizadas). Equivale a la firma manuscrita en todos los efectos legales cuando el certificado está vigente.
        </p>
        <div className="mb-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <p className="text-sm leading-relaxed text-slate-300">
            <strong className="text-blue-400">Valor probatorio:</strong> Presunción legal de autenticidad e integridad. El documento con firma digital certificada se presume auténtico salvo prueba en contrario — el estándar más alto posible.
          </p>
        </div>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">¿Cuál aplica para permisos de trabajo y SG-SST?</h2>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Para permisos de trabajo HSE</h3>
        <p className="mb-4 leading-relaxed text-slate-400">
          La <strong className="text-slate-200">firma electrónica es suficiente</strong> para la gran mayoría de permisos de trabajo industriales. El Decreto 1072 y la Resolución 0312 no exigen firma digital certificada para los documentos del SG-SST. Lo que sí exigen es:
        </p>
        <ul className="mb-6 space-y-2">
          {[
            "Que se pueda identificar quién firmó",
            "Que se pueda demostrar que el documento no fue alterado después de firmado",
            "Que la firma corresponda a la persona competente para autorizarla (el coordinador HSE certificado)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Para actas de alta severidad</h3>
        <p className="mb-6 leading-relaxed text-slate-400">
          Cuando el documento es un acta de investigación de accidente grave, una conciliación laboral o un acto jurídico con consecuencias penales potenciales, la firma digital certificada añade una capa de protección significativa. El empleador que la usa tiene una posición probatoria mucho más sólida ante un tribunal.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">Qué es Ed25519 y por qué importa</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          <strong className="text-slate-200">Ed25519</strong> es un algoritmo de firma criptográfica de clave pública (variante de EdDSA sobre Curve25519). Sus propiedades relevantes para documentos HSE:
        </p>
        <ul className="mb-4 space-y-2">
          {[
            "Genera una firma de 64 bytes que, sin la clave privada, es computacionalmente inviable de forjar",
            "La verificación es instantánea y puede hacerse offline",
            "La firma está ligada al contenido: si una sola letra cambia, la verificación falla",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-6 leading-relaxed text-slate-400">
          Una firma Ed25519 sobre el hash SHA-256 del documento, con sello de tiempo externo conforme a <strong className="text-slate-200">RFC 3161</strong> (perfil <strong className="text-slate-200">PAdES</strong> para PDF), equivale funcionalmente a una firma electrónica avanzada según la clasificación del Decreto 2364/2012 — con valor probatorio reforzado ante un tribunal colombiano, sin necesidad de certificado de entidad de certificación.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">La pregunta práctica</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          Si mañana ocurre un accidente en tu operación y el abogado del trabajador accidentado pregunta en el juzgado: <em>&ldquo;¿Con qué garantía afirman que el permiso de trabajo fue firmado por el coordinador HSE y no fue alterado después?&rdquo;</em>
        </p>
        <div className="mb-4 rounded-xl border border-slate-700 bg-slate-900 p-5">
          <p className="mb-2 text-xs font-bold tracking-widest text-red-400 uppercase">Respuesta sin firma criptográfica</p>
          <p className="text-sm text-slate-400">
            &ldquo;Aquí está el permiso impreso y firmado a mano que guardamos en una carpeta.&rdquo; → La contraparte preguntará cuándo fue impreso, si tiene tachaduras, y si alguien pudo reemplazar el papel después del accidente.
          </p>
        </div>
        <div className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="mb-2 text-xs font-bold tracking-widest text-emerald-400 uppercase">Respuesta con firma Ed25519 + PAdES</p>
          <p className="text-sm text-slate-400">
            &ldquo;Aquí está el hash SHA-256 del documento, la firma Ed25519, el sello de tiempo RFC 3161 de las 14:37:42 del día del accidente, el GPS del punto de firma y el UUID del coordinador que lo autorizó — todo verificable públicamente desde este enlace.&rdquo; → La discusión jurídica cambia completamente.
          </p>
        </div>

        {/* CTAs */}
        <div className="my-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-600/5 p-5">
            <p className="mb-1 text-xs font-bold tracking-widest text-emerald-400 uppercase">Permisos de trabajo HSE</p>
            <p className="mb-3 text-sm leading-relaxed text-slate-400">
              Veriwork implementa hash SHA-256 + firma Ed25519 + sello de tiempo RFC 3161 (perfil PAdES) en cada permiso. La persona competente firma con su usuario; la clave de empresa sella la transacción.
            </p>
            <Link href="/veriwork" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-500">
              Ver Veriwork →
            </Link>
          </div>
          <div className="rounded-2xl border border-violet-500/20 bg-violet-600/5 p-5">
            <p className="mb-1 text-xs font-bold tracking-widest text-violet-400 uppercase">Documentos SG-SST</p>
            <p className="mb-3 text-sm leading-relaxed text-slate-400">
              Shield AI gestiona la firma dual del responsable y el representante legal en los documentos del SG-SST.
            </p>
            <Link href="/shield-ai" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-violet-500">
              Ver Shield AI →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link href="/academia/resolucion-0312-estandares-minimos" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-white">
            → Resolución 0312 explicada
          </Link>
          <Link href="/academia/certificacion-trabajo-en-alturas-colombia" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white">
            → Certificación trabajo en alturas
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
