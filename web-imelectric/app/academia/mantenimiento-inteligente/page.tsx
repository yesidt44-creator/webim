import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/mantenimiento-inteligente" },
  title: "Mantenimiento inteligente: qué es y cómo aumenta la productividad | IMELECTRIC",
  description:
    "El mantenimiento inteligente combina datos de campo, IA y disciplina de ejecución para aumentar la productividad industrial y reducir tiempos muertos. Guía práctica para implementarlo en Colombia y Latinoamérica.",
  keywords: [
    "mantenimiento inteligente",
    "qué es mantenimiento inteligente",
    "aumentar productividad industrial",
    "mantenimiento inteligente Colombia",
    "mantenimiento predictivo con IA",
    "reducir tiempos muertos mantenimiento",
    "software mantenimiento inteligente",
    "mantenimiento inteligente pymes",
  ],
  openGraph: {
    title: "Mantenimiento inteligente: qué es y cómo aumenta la productividad | IMELECTRIC",
    description:
      "Datos de campo + IA + disciplina de ejecución: qué es el mantenimiento inteligente y cómo implementarlo sin comprar una plataforma que tu equipo no va a usar.",
    url: "https://imelectric.es/academia/mantenimiento-inteligente",
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
      name: "¿Qué es el mantenimiento inteligente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mantenimiento inteligente es un modelo de gestión de activos que combina datos reales de campo, análisis asistido por IA y disciplina de ejecución para anticipar fallas y reducir tiempos muertos, en vez de reaccionar a ellas o reemplazar componentes por calendario sin evidencia de que lo necesiten.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencia del mantenimiento predictivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mantenimiento predictivo es una técnica: usar sensores y condición del equipo para anticipar cuándo va a fallar. El mantenimiento inteligente es el marco más amplio que integra predictivo, preventivo y correctivo bajo un mismo sistema de datos, con IA que asiste el análisis (RCA, Weibull, FMECA) y una persona que siempre revisa y aprueba antes de actuar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo aumenta la productividad de una empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reduce el tiempo que un ingeniero gasta en tareas repetitivas (transcribir reportes, buscar en normas, calcular manualmente índices de confiabilidad) para que ese tiempo se use en decisiones que sí requieren criterio humano. También reduce paradas no planeadas al anticipar fallas con datos reales del activo, en vez de calendarios genéricos de mantenimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito sensores IoT para empezar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No para empezar. El primer paso es tener el historial de fallas y órdenes de trabajo en un sistema estructurado (un CMMS), no en papel o Excel disperso. Sin ese historial limpio, ningún sensor ni modelo de IA tiene con qué trabajar — los sensores mejoran la detección temprana, pero no reemplazan la base de datos de mantenimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Un contratista pequeño puede implementarlo, o es solo para grandes operadores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí puede. El error común es asumir que mantenimiento inteligente exige una plataforma enterprise costosa. El requisito real es empezar por capturar datos de campo de forma consistente (aunque sea offline) y construir disciplina de análisis sobre ese historial — eso es alcanzable para un equipo de pocos técnicos, no solo para operadores con presupuestos grandes.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mantenimiento inteligente: qué es y cómo aumenta la productividad industrial",
  datePublished: "2026-09-15",
  dateModified: "2026-09-15",
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
  mainEntityOfPage: "https://imelectric.es/academia/mantenimiento-inteligente",
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
      name: "Mantenimiento inteligente",
      item: "https://imelectric.es/academia/mantenimiento-inteligente",
    },
  ],
};

export default async function MantenimientoInteligentePage() {
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
            <Link href="/academia" className="transition-colors hover:text-blue-400">
              Academia Técnica
            </Link>
            <span>/</span>
            <span className="text-slate-300">Mantenimiento inteligente</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Mantenimiento Industrial · Confiabilidad
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Mantenimiento inteligente: qué es y cómo aumenta la productividad
          </h1>
          <p className="mt-3 text-xs text-slate-500">
            Publicado: 15 sep 2026 · Equipo de Ingeniería IMELECTRIC
          </p>
          <p className="text-lg leading-relaxed text-slate-400">
            El mantenimiento inteligente no es un producto que se compra — es un modelo de gestión que combina
            datos reales de campo, análisis asistido por IA y disciplina de ejecución. Aquí está lo que
            significa en la práctica, y cómo empezar sin comprar una plataforma que tu equipo termine sin usar.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <section className="prose-article">
          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">¿Qué es el mantenimiento inteligente?</h2>
          <p className="mb-4 leading-relaxed text-slate-400">
            Es el modelo de gestión de activos que reemplaza dos extremos igual de costosos: esperar a que un
            equipo falle (mantenimiento correctivo puro) y cambiar componentes por calendario sin evidencia de
            que lo necesiten (preventivo genérico). En su lugar, usa el{" "}
            <strong className="text-slate-200">historial real de fallas</strong> de cada activo, análisis
            asistido por IA sobre esos datos, y ejecución disciplinada en campo para decidir cuándo intervenir —
            ni antes ni después de lo necesario.
          </p>
          <p className="mb-6 leading-relaxed text-slate-400">
            La palabra clave es <em>asistido</em>. El mantenimiento inteligente no reemplaza el criterio del
            ingeniero — acelera la parte del trabajo que no requiere criterio (transcribir reportes, buscar en
            normas, calcular manualmente índices de confiabilidad) para que el ingeniero dedique su tiempo a lo
            que sí lo requiere: revisar, decidir y firmar.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">Los tres pilares</h2>
          <p className="mb-6 leading-relaxed text-slate-400">
            Cualquier implementación seria de mantenimiento inteligente se sostiene sobre tres pilares. Faltar
            uno de los tres es la razón más común por la que una empresa compra software y seis meses después
            sigue llevando el control en Excel.
          </p>

          <h3 className="mb-3 mt-8 text-xl font-bold text-white">1. Planificación inteligente</h3>
          <p className="mb-6 leading-relaxed text-slate-400">
            Priorizar qué activos revisar primero según el impacto real de una falla — no según una lista fija
            de tareas mensuales. Un activo crítico con historial de fallas frecuentes necesita más atención que
            uno secundario que nunca ha fallado, aunque ambos estén en el mismo plan preventivo genérico.
          </p>

          <h3 className="mb-3 mt-8 text-xl font-bold text-white">2. Ejecución disciplinada</h3>
          <p className="mb-6 leading-relaxed text-slate-400">
            De nada sirve la mejor planificación si el técnico reporta en papel y ese reporte se transcribe (o
            se pierde) antes de llegar a un sistema. La ejecución disciplinada significa capturar el dato en el
            momento y el lugar donde ocurre — en campo, offline si hace falta — no reconstruirlo de memoria al
            final del turno.
          </p>

          <h3 className="mb-3 mt-8 text-xl font-bold text-white">3. Aprendizaje (KPIs reales)</h3>
          <p className="mb-6 leading-relaxed text-slate-400">
            Cada orden de trabajo cerrada es un dato. Sin un sistema que acumule ese historial de forma
            estructurada, cada falla se analiza como si fuera la primera vez. Con él, métricas como{" "}
            <Link href="/academia/calculadora-mtbf" className="text-blue-400 underline underline-offset-2 hover:text-blue-300">
              MTBF, MTTR y disponibilidad
            </Link>{" "}
            dejan de ser un cálculo trimestral en una hoja de cálculo y se vuelven la base para decidir qué
            activo revisar la próxima semana.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
            ¿En qué se diferencia del mantenimiento predictivo?
          </h2>
          <p className="mb-6 leading-relaxed text-slate-400">
            El mantenimiento predictivo es una <strong className="text-slate-200">técnica</strong>: usar
            sensores o condición del equipo para anticipar una falla antes de que ocurra. El mantenimiento
            inteligente es el <strong className="text-slate-200">marco completo</strong> que integra predictivo,
            preventivo y correctivo bajo un mismo sistema de datos — con o sin sensores IoT. Se puede empezar a
            practicar mantenimiento inteligente con solo un CMMS bien alimentado; los sensores mejoran la
            detección temprana, pero no son el punto de partida obligatorio.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
            Cómo aumenta la productividad de una empresa
          </h2>
          <p className="mb-4 leading-relaxed text-slate-400">
            El impacto en productividad viene de dos frentes distintos, y vale la pena separarlos:
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            <strong className="text-slate-200">Menos tiempo muerto de planta.</strong> Anticipar una falla con
            datos reales del activo —en vez de reaccionar cuando ya paró la línea— reduce las horas de
            producción perdidas y el costo de una reparación de emergencia frente a una programada.
          </p>
          <p className="mb-6 leading-relaxed text-slate-400">
            <strong className="text-slate-200">Menos tiempo muerto del ingeniero.</strong> Un análisis de causa
            raíz (RCA) manual puede tomar entre uno y tres días hábiles cuando el historial de fallas está bien
            organizado — y bastante más si hay que reconstruirlo primero. La IA no reemplaza ese análisis:
            lo acelera al cruzar el historial del activo contra normativa técnica (ISO 14224, FMECA, Weibull)
            para que el ingeniero revise una propuesta en vez de partir de cero.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">Cómo empezar (sin comprar de más)</h2>
          <p className="mb-4 leading-relaxed text-slate-400">
            El error más común en Colombia y Latinoamérica es saltar directo a una plataforma enterprise con
            sensores IoT antes de resolver lo básico. El orden que sí funciona:
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            <strong className="text-slate-200">1. Estructura el historial de fallas.</strong> Si hoy vive en
            papel o en Excel disperso, ese es el primer problema a resolver — con un{" "}
            <Link href="/academia/cmms-vs-gmao" className="text-blue-400 underline underline-offset-2 hover:text-blue-300">
              CMMS
            </Link>{" "}
            que funcione offline si tu operación tiene zonas sin señal.
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            <strong className="text-slate-200">2. Construye un{" "}
              <Link href="/academia/plan-mantenimiento-preventivo" className="text-blue-400 underline underline-offset-2 hover:text-blue-300">
                plan de mantenimiento preventivo
              </Link>{" "}
              basado en criticidad real</strong>, no en una plantilla genérica del fabricante.
          </p>
          <p className="mb-6 leading-relaxed text-slate-400">
            <strong className="text-slate-200">3. Añade análisis asistido por IA</strong> sobre ese historial ya
            limpio — recién en este punto tiene sentido, porque un modelo de IA sin datos reales del activo solo
            puede responder con generalidades de internet, no con el patrón de falla real de tu operación.
          </p>

          <div className="my-6 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
            <p className="text-base italic leading-relaxed text-slate-300">
              &ldquo;¿Tu historial de fallas hoy vive en un sistema, o en la cabeza del técnico con más
              antigüedad?&rdquo;
            </p>
          </div>
          <p className="mb-6 leading-relaxed text-slate-400">
            Si la respuesta es la segunda, ese —no la IA— es el paso que hay que resolver primero.
          </p>

          {/* CTA Fix AI + Falion */}
          <div className="my-10 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
            <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">
              De dónde parte IMELECTRIC en esto
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              <strong className="text-slate-200">Fix AI</strong> es la base disponible hoy: un CMMS
              offline-first para contratistas industriales que estructura el historial de OTs en campo, sin
              doble digitación hacia el ERP del operador. <strong className="text-slate-200">Falion</strong>,
              el módulo de análisis de confiabilidad asistido por IA (RCA, FMECA, Weibull) sobre ese historial,
              está en desarrollo — lo documentamos así porque el pilar 3 (aprendizaje) solo funciona si el
              pilar 2 (datos reales, estructurados) ya existe.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/fixai-cmms"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Ver Fix AI →
              </Link>
              <Link
                href="/academia/calculadora-mtbf"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-blue-300"
              >
                Calculadora MTBF/MTTR gratis
              </Link>
            </div>
          </div>
        </section>

        {/* Navegación cruzada */}
        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link
            href="/academia/cmms-vs-gmao"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            → CMMS vs GMAO
          </Link>
          <Link
            href="/academia/rca-rcm-fmea-diferencias"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            → RCA, RCM y FMEA: diferencias
          </Link>
          <Link
            href="/academia/plan-mantenimiento-preventivo"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            → Plan de mantenimiento preventivo
          </Link>
          <Link
            href="/academia"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            ← Academia Técnica
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
