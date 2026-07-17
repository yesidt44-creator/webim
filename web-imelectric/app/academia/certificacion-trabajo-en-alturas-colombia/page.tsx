import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/certificacion-trabajo-en-alturas-colombia" },
  title: "Certificación trabajo en alturas | Res. 4272 | IMELECTRIC",
  description:
    "La Res. 4272 de 2021 derogó la Res. 1409 y cambió los requisitos de certificación para trabajo en alturas en Colombia. Vigencia, roles obligatorios, permiso de trabajo y lo que el inspector del Ministerio de Trabajo realmente verifica.",
  keywords: [
    "certificación trabajo en alturas Colombia",
    "resolución 4272 2021 requisitos",
    "vigencia certificado trabajo alturas Colombia",
    "coordinador trabajo en alturas",
    "permiso de trabajo en alturas",
    "resolución 4272 vs 1409",
    "trabajo en alturas más de 2 metros",
    "inspector ministerio trabajo alturas",
    "EPP trabajo en alturas Colombia",
    "formación trabajo seguro alturas",
  ],
  openGraph: {
    title: "Certificación Trabajo en Alturas Colombia — Res. 4272 de 2021 | IMELECTRIC",
    description:
      "Vigencia, roles obligatorios y contenido del permiso de trabajo según la Res. 4272 de 2021. Lo que el inspector del Ministerio de Trabajo verifica en campo.",
    url: "https://imelectric.es/academia/certificacion-trabajo-en-alturas-colombia",
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
      name: "¿Desde qué altura aplica la Resolución 4272 en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Resolución 4272 de 2021 aplica a toda actividad laboral realizada a más de 2 metros sobre el nivel inferior donde exista riesgo de caída libre que pueda generar lesiones o la muerte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tiene de vigencia el certificado de coordinador de trabajo en alturas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El certificado de coordinador de trabajo en alturas tiene una vigencia de 3 años, contados desde la fecha de expedición por parte de una institución de formación autorizada (SENA u organismo de certificación acreditado ante ONAC). Verificar con el texto oficial vigente de la Res. 4272 antes de cada decisión operativa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debe contener un permiso de trabajo en alturas según la Res. 4272?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El permiso debe incluir: identificación del trabajador autorizado y del coordinador, descripción de la tarea y el punto de trabajo, evaluación de peligros del punto de anclaje, verificación del EPP anticaída, verificación del sistema de rescate disponible, condiciones meteorológicas (para exterior), y firma del coordinador y del trabajador.",
      },
    },
  ],
};


const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: 'Certificación de trabajo en alturas en Colombia: vigencia y requisitos',
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
  mainEntityOfPage: 'https://imelectric.es/academia/certificacion-trabajo-en-alturas-colombia',
  // ARTICLE_META_INJECTED
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://imelectric.es/" },
    { "@type": "ListItem", position: 2, name: "Academia Técnica", item: "https://imelectric.es/academia" },
    { "@type": "ListItem", position: 3, name: 'Certificación trabajo en alturas', item: 'https://imelectric.es/academia/certificacion-trabajo-en-alturas-colombia' },
  ],
};

export default async function CertificacionTrabajoAlturasPage() {
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
            <span className="text-slate-300">Trabajo en Alturas — Certificación</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-emerald-400 uppercase">
            HSE · Veriwork · Res. 4272
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Certificación de trabajo en alturas en Colombia: vigencia y requisitos reales según la Resolución 4272 de 2021
          </h1>
          <p className="mt-3 text-xs text-slate-500">
            Publicado: 1 jul 2026 · Actualizado: 17 jul 2026 · Equipo de Ingeniería IMELECTRIC
          </p>
          <p className="text-lg leading-relaxed text-slate-400">
            El trabajo en alturas sigue siendo la primera causa de accidentes mortales en la industria colombiana. Y uno de los factores que más se repite en los informes de investigación de accidentes es el mismo: la documentación existía — pero nadie había verificado que estuviera vigente.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-4 mt-0 text-2xl font-bold text-white">La Res. 4272 reemplaza a la Res. 1409 de 2012</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          Desde el 27 de agosto de 2021, la <strong className="text-slate-200">Resolución 4272 de 2021</strong> es la norma vigente para trabajo en alturas en Colombia. Deroga la Resolución 1409 de 2012 en su totalidad.
        </p>
        <p className="mb-6 leading-relaxed text-slate-400">
          Si tu empresa o contratista todavía hace referencia a la Res. 1409 en sus procedimientos, formatos o permisos de trabajo, tiene un incumplimiento formal — aunque el contenido sea técnicamente equivalente. <strong className="text-slate-200">Primer paso:</strong> actualiza todos los documentos que citen la Res. 1409 para referenciar la Res. 4272.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">¿Cuándo aplica?</h2>
        {/* ✅ CORRECCIÓN APLICADA: "1,50 metros" corregido a "más de 2 metros" */}
        <p className="mb-4 leading-relaxed text-slate-400">
          La norma aplica a toda actividad laboral realizada a <strong className="text-slate-200">más de 2 metros</strong> sobre el nivel inferior siguiente, cuando la caída libre pueda generar lesiones o la muerte. Aplica a todos los sectores: construcción, Oil &amp; Gas, manufactura, telecomunicaciones, energía eléctrica y cualquier otro.
        </p>
        <p className="mb-6 leading-relaxed text-slate-400">
          No hay excepción por tamaño de empresa.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">Los roles obligatorios y su certificación</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          La Res. 4272 establece tres niveles de rol para trabajo en alturas:
        </p>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Trabajador autorizado</h3>
        <p className="mb-6 leading-relaxed text-slate-400">
          Persona que ejecuta trabajos en altura. Debe tener aprobado el curso de trabajo seguro en alturas del nivel correspondiente a la tarea. El empleador debe verificar anualmente que el trabajador mantiene las competencias y actualizar la formación cuando cambien las condiciones del trabajo o el equipo.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Coordinador de trabajo en alturas</h3>
        <p className="mb-4 leading-relaxed text-slate-400">
          Es el rol más crítico desde el punto de vista documental. El coordinador es quien revisa el lugar de trabajo, verifica las condiciones, aprueba el permiso de trabajo y supervisa la ejecución.
        </p>
        <div className="my-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <p className="text-sm leading-relaxed text-amber-200">
            <strong>Vigencia del certificado de coordinador: 3 años</strong>, contados desde la fecha de expedición por una institución de formación autorizada (SENA u organismo de certificación acreditado ante ONAC). <em>Verifica este plazo directamente con el texto oficial de la Res. 4272 o con el SENA antes de cada decisión operativa.</em>
          </p>
        </div>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Persona competente</h3>
        <p className="mb-6 leading-relaxed text-slate-400">
          Profesional con formación en seguridad y salud en el trabajo que valida el programa de protección contra caídas de la empresa.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">El permiso de trabajo en alturas: qué debe contener</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          El permiso de trabajo en alturas es el documento que el coordinador debe emitir y firmar antes de que comience cualquier labor. Los elementos mínimos que debe incluir:
        </p>
        <ul className="mb-6 space-y-2 pl-0">
          {[
            "Identificación del trabajador autorizado y del coordinador",
            "Descripción de la tarea y del punto de trabajo",
            "Evaluación de los peligros específicos del punto de anclaje",
            "Verificación del EPP anticaída: arnés, línea de vida, casco con barbuquejo",
            "Verificación del sistema de rescate disponible",
            "Condiciones meteorológicas al momento de la tarea (para trabajos en exterior)",
            "Firma del coordinador y del trabajador",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Lo que el inspector del Ministerio de Trabajo verifica en una visita</h3>
        <ul className="mb-6 space-y-2 pl-0">
          {[
            "Que el permiso esté firmado por un coordinador con certificado vigente",
            "Que el certificado no esté vencido (el inspector puede pedir el documento en el momento)",
            "Que el EPP entregado esté registrado con firma de recibido del trabajador",
            "Que exista plan de rescate documentado para ese punto de trabajo específico",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">El error más frecuente: el certificado vencido</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          El coordinador lleva tres años en la empresa. Nadie registró la fecha de vencimiento. Llega la inspección — o peor, ocurre un accidente — y el certificado venció hace seis meses.
        </p>
        <p className="mb-6 leading-relaxed text-slate-400">
          En ese escenario, el permiso de trabajo firmado por ese coordinador no tiene validez legal retroactiva. El empleador asume responsabilidad directa. La solución no es verificar manualmente en una hoja de Excel. La solución es que el sistema verifique la vigencia <strong className="text-slate-200">automáticamente antes de permitir que el coordinador firme</strong> el permiso.
        </p>

        {/* CTA Veriwork */}
        <div className="my-10 rounded-2xl border border-emerald-500/20 bg-emerald-600/5 p-6">
          <p className="mb-1 text-xs font-bold tracking-widest text-emerald-400 uppercase">¿Cómo controla tu empresa la vigencia de los certificados?</p>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            <strong className="text-slate-200">Veriwork</strong> verifica automáticamente si el certificado del coordinador está vigente antes de habilitar su firma en el permiso de trabajo en alturas. El sistema no firma por él — le da la información correcta para que tome la decisión. La firma siempre es de la persona competente.
          </p>
          <Link href="/veriwork" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-500">
            Ver Veriwork →
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link href="/academia/trabajo-en-alturas" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white">
            → Simulador DCL Res. 4272
          </Link>
          <Link href="/academia/firma-electronica-vs-firma-digital-colombia" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white">
            → Firma electrónica vs firma digital
          </Link>
          <Link href="/academia" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white">
            ← Academia Técnica
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
