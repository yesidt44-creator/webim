import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/inspeccion-preoperacional-control-flota" },
  title: "Inspección preoperacional, control de flota y PESV: registros diarios | IMELECTRIC",
  description:
    "Qué es la inspección preoperacional, qué es el control de flota, cómo funciona el scoring de riesgo de conductor sin hardware adicional y qué es el pasaporte digital de un vehículo.",
  keywords: [
    "inspección preoperacional vehículos",
    "chequeo preoperacional Colombia",
    "control de flota vehicular",
    "scoring riesgo conductor sin GPS",
    "pasaporte digital vehículo",
    "PESV registros diarios flota",
    "software control flota Colombia",
    "Nexvia inspección preoperacional",
    "gestión flota HSEQ Colombia",
    "cumplimiento PESV operativo",
  ],
  openGraph: {
    title: "Inspección preoperacional, control de flota y PESV: lo que debe registrar su operación día a día",
    description:
      "Qué verificar antes de que un conductor salga a ruta, qué es el control de flota, cómo funciona el scoring de riesgo sin hardware adicional y qué registros sostienen el cumplimiento del PESV.",
    url: "https://imelectric.es/academia/inspeccion-preoperacional-control-flota",
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
      name: "¿Qué es la inspección o chequeo preoperacional y qué debe verificar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La inspección preoperacional es la verificación sistemática del vehículo que se realiza antes de iniciar cada ruta o jornada. Debe verificar el funcionamiento de frenos, luces, dirección, estado de neumáticos, niveles de fluidos, cinturones de seguridad, bocina y espejos, entre otros. Su objetivo es detectar condiciones que puedan comprometer la seguridad del conductor, los pasajeros o la carga, antes de que el vehículo salga a vía.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el control de flota vehicular y qué procesos incluye?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El control de flota vehicular comprende el conjunto de procesos, herramientas y estrategias para monitorear, administrar y optimizar el desempeño de los vehículos de una organización. Incluye la asignación de rutas, el seguimiento del estado de mantenimiento de cada vehículo, el registro de conductores y sus habilitaciones, el monitoreo de comportamiento al volante y la generación de reportes de cumplimiento normativo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debe registrar operativamente una flota día a día para cumplir el PESV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El PESV exige que las operaciones con flota mantengan registros del estado del vehículo antes de salir (inspección preoperacional), del conductor que lo opera y sus habilitaciones vigentes, de las rutas asignadas y los kilómetros recorridos, y de cualquier incidente o condición de riesgo identificada durante la operación. La trazabilidad de estos registros debe ser verificable por los entes supervisores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona el scoring de riesgo de un conductor sin hardware adicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El scoring de riesgo del conductor se calcula a partir de los datos del acelerómetro del celular del conductor durante la conducción: mide frenadas bruscas, aceleraciones repentinas, curvas tomadas a velocidad inadecuada y uso del teléfono en movimiento. No requiere instalar un GPS dedicado ni un dispositivo OBD en el vehículo — el propio celular que ya usa el conductor es el sensor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debe verificarse antes de que un conductor salga a ruta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Antes de la salida deben verificarse al menos: (1) el estado físico y emocional del conductor, (2) la vigencia de su licencia de conducción y sus documentos habilitantes, (3) la inspección preoperacional del vehículo, (4) la asignación formal de la ruta y la carga, y (5) que el conductor no presenta síntomas de fatiga ni consumo de sustancias psicoactivas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el pasaporte digital de un vehículo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El pasaporte digital de un vehículo es el registro histórico centralizado de toda la información del activo: inspecciones preoperacionales, mantenimientos preventivos ejecutados, incidentes registrados, estado de documentos (SOAT, revisión técnico-mecánica), conductores que lo han operado y su evaluación de riesgo. Permite tomar decisiones de mantenimiento y sustitución basadas en datos reales, y facilita las auditorías del PESV.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Inspección preoperacional, control de flota y PESV: lo que debe registrar su operación día a día",
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
  mainEntityOfPage: "https://imelectric.es/academia/inspeccion-preoperacional-control-flota",
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
      name: "Inspección preoperacional y control de flota",
      item: "https://imelectric.es/academia/inspeccion-preoperacional-control-flota",
    },
  ],
};

export default async function InspeccionPreoperacionalPage() {
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
            <span className="text-slate-300">Inspección preoperacional y control de flota</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-emerald-400 uppercase">
            Gestión de Flotas · HSEQ · PESV
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Inspección preoperacional, control de flota y PESV: lo que debe registrar su operación día a día
          </h1>
          <p className="mt-3 text-xs text-slate-500">Publicado: 18 jul 2026 · Equipo de Ingeniería IMELECTRIC</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            El cumplimiento diario del PESV no se sostiene con carpetas: requiere registros verificables de cada
            inspección, cada conductor y cada ruta. Aquí está lo que debe capturarse y por qué.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-4 text-2xl font-bold text-white">Qué es la inspección preoperacional</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          La <strong className="text-slate-200">inspección preoperacional</strong> es la verificación sistemática del
          vehículo que se realiza antes de iniciar cada ruta o jornada. Su objetivo es detectar condiciones que puedan
          comprometer la seguridad antes de que el vehículo salga a vía.
        </p>
        <p className="mb-4 leading-relaxed text-slate-400">
          Un chequeo preoperacional completo verifica al menos:
        </p>
        <ul className="mb-10 space-y-2 text-slate-400">
          {[
            "Funcionamiento de frenos y sistema de dirección.",
            "Estado de neumáticos: desgaste, presión y daños visibles.",
            "Funcionamiento de luces, bocina y señales.",
            "Niveles de fluidos: aceite, refrigerante, líquido de frenos.",
            "Cinturones de seguridad y espejos retrovisores.",
            "Vigencia de documentos del vehículo: SOAT y revisión técnico-mecánica.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm">
              <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mb-4 text-2xl font-bold text-white">Qué es el control de flota y qué procesos incluye</h2>
        <p className="mb-6 leading-relaxed text-slate-400">
          El <strong className="text-slate-200">control de flota vehicular</strong> comprende el conjunto de procesos,
          herramientas y estrategias para monitorear, administrar y optimizar el desempeño de los vehículos de una
          organización. No es solo rastreo GPS: incluye la gestión del ciclo operativo completo:
        </p>
        <div className="mb-10 grid gap-3 sm:grid-cols-2">
          {[
            { title: "Asignación de rutas y conductores", body: "Con habilitaciones vigentes y sin señales de fatiga." },
            { title: "Estado de mantenimiento por vehículo", body: "Mantenimientos cumplidos, vencidos y programados." },
            { title: "Comportamiento al volante", body: "Scoring de riesgo del conductor con datos del acelerómetro del celular." },
            { title: "Reportes de cumplimiento PESV", body: "Registros verificables para auditorías de la Superintendencia de Transporte." },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <p className="font-bold text-white">{title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white">El scoring de riesgo sin hardware adicional</h2>
        <p className="mb-8 leading-relaxed text-slate-400">
          Una de las barreras más frecuentes para adoptar herramientas de control de flota es el costo del hardware:
          dispositivos GPS dedicados, equipos OBD o cámaras de abordo. El scoring de riesgo del conductor puede
          calcularse a partir del <strong className="text-slate-200">acelerómetro del celular</strong> que ya usa el
          conductor — midiendo frenadas bruscas, aceleraciones repentinas, curvas a velocidad inadecuada y uso del
          teléfono en movimiento — sin requerir ningún dispositivo adicional instalado en el vehículo.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">El pasaporte digital del vehículo</h2>
        <p className="mb-8 leading-relaxed text-slate-400">
          El <strong className="text-slate-200">pasaporte digital de un vehículo</strong> es el registro histórico
          centralizado de toda la información del activo: inspecciones preoperacionales, mantenimientos ejecutados,
          incidentes registrados, estado de documentos, conductores que lo han operado y su evaluación de riesgo.
          Permite tomar decisiones de mantenimiento y sustitución basadas en datos reales, y facilita las auditorías
          del PESV al tener toda la trazabilidad disponible en un solo lugar.
        </p>

        <div className="my-10 rounded-2xl border border-emerald-500/20 bg-emerald-600/5 p-6">
          <p className="mb-1 text-xs font-bold tracking-widest text-emerald-400 uppercase">
            Registros operativos de flota sin papel
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            Nexvia digitaliza la inspección preoperacional, el scoring de conductor y el pasaporte del vehículo — sin
            hardware adicional, funciona offline y está diseñado para operaciones en zonas con conectividad limitada.
          </p>
          <Link
            href="/nexvia"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-500"
          >
            Conocer Nexvia →
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
          <Link href="/nexvia" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white">
            → Nexvia — Gestión de Flotas HSEQ
          </Link>
          <Link href="/academia/pesv-sg-sst-integracion" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white">
            → PESV y SG-SST
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
