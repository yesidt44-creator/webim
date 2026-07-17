import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/cmms-vs-gmao" },
  title: "¿Qué es un CMMS y en qué se diferencia de un GMAO? | IMELECTRIC Academia",
  description:
    "CMMS y GMAO son el mismo tipo de software con nombres distintos. La diferencia real está en si el sistema se adapta a cómo trabaja tu equipo en campo. Guía práctica para elegir el correcto para mantenimiento industrial en Colombia.",
  keywords: [
    "qué es un CMMS",
    "CMMS vs GMAO diferencia",
    "software mantenimiento industrial Colombia",
    "GMAO qué es",
    "CMMS para contratistas Colombia",
    "CMMS offline campo",
    "CMMS Oil Gas Colombia",
    "software mantenimiento offline",
    "gestión mantenimiento asistido ordenador",
    "diferencia EAM CMMS",
  ],
  openGraph: {
    title: "¿Qué es un CMMS y en qué se diferencia de un GMAO? | IMELECTRIC",
    description:
      "CMMS y GMAO son el mismo tipo de software con nombres distintos. La diferencia real está en elegir el que se adapta a tu operación. Guía práctica para contratistas industriales en Colombia.",
    url: "https://imelectric.es/academia/cmms-vs-gmao",
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
      name: "¿Cuál es la diferencia entre CMMS y GMAO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CMMS (Computerized Maintenance Management System) y GMAO (Gestión de Mantenimiento Asistido por Ordenador) son el mismo tipo de software con nombres distintos. CMMS es el término anglosajón dominante en Oil & Gas global; GMAO es la traducción adoptada en España y Latinoamérica. Ambos designan sistemas para planificar, ejecutar y registrar actividades de mantenimiento industrial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Un contratista de mantenimiento necesita un ERP como SAP PM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Un contratista de mantenimiento trabaja sobre los activos del operador y necesita exportar órdenes de trabajo (OT) en los formatos que el ERP del operador acepta. No necesita ser el ERP — necesita alimentarlo sin doble digitación. SAP PM está diseñado para el operador que gestiona sus propios activos a escala industrial, no para el contratista.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es ISO 14224 y por qué importa para un CMMS en Oil & Gas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISO 14224 es la norma internacional que define la taxonomía de equipos, tipos de falla y modos de mantenimiento para la industria del petróleo y gas. Un CMMS sin soporte ISO 14224 obliga al contratista a construir su propia taxonomía, que normalmente no es compatible con lo que el operador exige en sus reportes.",
      },
    },
  ],
};

export default async function CmmsVsGmaoPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-900 px-6 pt-32 pb-12">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-500" aria-label="Miga de pan">
            <Link href="/academia" className="transition-colors hover:text-blue-400">Academia Técnica</Link>
            <span>/</span>
            <span className="text-slate-300">CMMS vs GMAO</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Mantenimiento Industrial · Fix AI
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            ¿Qué es un CMMS y en qué se diferencia de un GMAO?
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            Si buscaste software de mantenimiento industrial en Colombia y encontraste los dos términos mezclados en resultados diferentes — la confusión es comprensible, y no es un error tuyo.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <section className="prose-article">

          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">CMMS y GMAO son lo mismo, con distinto nombre</h2>
          <p className="mb-4 leading-relaxed text-slate-400">
            <strong className="text-slate-200">CMMS</strong> (Computerized Maintenance Management System) es el término anglosajón dominante en Oil &amp; Gas global, en la industria norteamericana y en la literatura técnica en inglés.
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            <strong className="text-slate-200">GMAO</strong> (Gestión de Mantenimiento Asistido por Ordenador) es la traducción adoptada en España y extendida a buena parte de Latinoamérica.
          </p>
          <p className="mb-6 leading-relaxed text-slate-400">
            Ambos se refieren a un sistema de información diseñado para planificar, ejecutar y registrar las actividades de mantenimiento de equipos industriales: órdenes de trabajo (OT), historial de fallas, inventario de repuestos, programación preventiva y métricas de confiabilidad (MTBF, MTTR, disponibilidad). Si alguien te dice que son productos distintos con funcionalidades diferentes, está equivocado — o te está vendiendo algo.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">Entonces, ¿qué sí importa al elegir?</h2>
          <p className="mb-6 leading-relaxed text-slate-400">
            El nombre no importa. Lo que importa es si el sistema se adapta a cómo tu equipo realmente trabaja. Estos son los cuatro criterios que marcan la diferencia en operaciones industriales colombianas:
          </p>

          <h3 className="mb-3 mt-8 text-xl font-bold text-white">1. ¿Tu operación tiene zonas sin señal de internet?</h3>
          <p className="mb-6 leading-relaxed text-slate-400">
            Las rutas colombianas hacia campos petroleros, minas y plantas en zonas remotas no siempre tienen cobertura. Si el sistema no funciona offline, el técnico en campo no puede cerrar OTs — y el backlog se acumula hasta que hay señal. Un CMMS con arquitectura <strong className="text-slate-200">offline-first</strong> sincroniza automáticamente cuando recupera conexión. Uno sin ella simplemente no funciona en esas condiciones.
          </p>

          <h3 className="mb-3 mt-8 text-xl font-bold text-white">2. ¿Eres contratista o empresa con activos propios?</h3>
          <p className="mb-4 leading-relaxed text-slate-400">
            Esta distinción cambia completamente los requisitos del software.
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            Un <strong className="text-slate-200">operador con activos propios</strong> (refinería, planta, terminal) necesita un EAM (Enterprise Asset Management) completo, integrado con su ERP corporativo.
          </p>
          <p className="mb-6 leading-relaxed text-slate-400">
            Un <strong className="text-slate-200">contratista de mantenimiento</strong> trabaja sobre los activos del operador, reporta hacia el ERP del operador y necesita exportar OTs en los formatos que ese ERP acepta. No necesita ser el ERP — necesita alimentarlo sin doble digitación. Muchos contratistas cometen el error de comprar un EAM complejo diseñado para operadores: licencias costosas, implementación larga y resistencia del equipo técnico que no entiende para qué sirven el 70 % de las funciones.
          </p>

          <h3 className="mb-3 mt-8 text-xl font-bold text-white">3. ¿Cuántos técnicos tiene tu equipo?</h3>
          <p className="mb-6 leading-relaxed text-slate-400">
            Por debajo de 50 técnicos de campo, la complejidad de configurar y mantener un EAM enterprise es un lastre operativo. El tiempo que consume la administración del sistema supera el tiempo que ahorra. Un CMMS ágil, diseñado para ser operativo en días (no meses), tiene un retorno sobre inversión mucho más rápido en equipos pequeños y medianos.
          </p>

          <h3 className="mb-3 mt-8 text-xl font-bold text-white">4. ¿Qué normativa técnica aplica a tu operación?</h3>
          <p className="mb-6 leading-relaxed text-slate-400">
            Para mantenimiento en Oil &amp; Gas colombiano, la taxonomía de equipos de la norma <strong className="text-slate-200">ISO 14224</strong> es el piso mínimo. Define cómo clasificar equipos, tipos de falla y modos de mantenimiento de forma que los datos sean comparables entre contratos y operadores. Un CMMS sin soporte ISO 14224 te obliga a construir tu propia taxonomía — y esa taxonomía normalmente no es compatible con lo que pide el operador en sus reportes.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">¿Y los ERP como SAP PM?</h2>
          <p className="mb-6 leading-relaxed text-slate-400">
            SAP PM (Plant Maintenance) es el módulo de mantenimiento del ERP SAP. Es una herramienta poderosa — y está diseñada para el operador que gestiona sus propios activos a escala industrial. Para un contratista, la relación con SAP PM es de <strong className="text-slate-200">compatibilidad</strong>, no de reemplazo. El contratista usa su CMMS para gestionar la ejecución, y exporta las OTs en formato compatible con SAP PM (IW38/IW41) o el formato que el operador requiera. No son el mismo producto, ni compiten directamente.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-white">La pregunta correcta para elegir</h2>
          <div className="my-6 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
            <p className="text-base italic leading-relaxed text-slate-300">
              "¿Cuánto tiempo tarda un técnico en reportar una OT cerrada desde campo, y cuánto tarda ese reporte en llegar al ERP del operador sin que nadie lo tenga que volver a transcribir?"
            </p>
          </div>
          <p className="mb-6 leading-relaxed text-slate-400">
            Si la respuesta es "más de 10 minutos" o "alguien lo transcribe a mano después", tienes un problema de proceso que el software correcto puede resolver.
          </p>

          {/* CTA Fix AI */}
          <div className="my-10 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
            <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">¿Llevas las OTs en papel o Excel?</p>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              <strong className="text-slate-200">Fix AI</strong> es un CMMS offline-first para contratistas industriales. El técnico reporta desde campo, el borrador llega al supervisor para revisión y cierre, y el reporte exporta en formato compatible con el ERP del operador — sin doble digitación. <strong className="text-slate-200">Falion</strong> asiste el análisis de confiabilidad (RCA, FMECA, Weibull) usando los datos reales de las OTs cerradas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/fixai-cmms" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500">
                Ver Fix AI →
              </Link>
              <Link href="/falion" className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-600/10 px-5 py-2.5 text-sm font-bold text-blue-400 transition hover:border-blue-500/60 hover:text-blue-300">
                Conoce Falion →
              </Link>
              <Link href="/academia/calculadora-mtbf" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-blue-300">
                Calculadora MTBF/MTTR gratis
              </Link>
            </div>
          </div>

          {/* Disclaimer SAP */}
          <p className="mt-8 text-xs leading-relaxed text-slate-600">
            SAP y SAP PM son marcas registradas de SAP SE. IMELECTRIC no está afiliado ni certificado por SAP.
          </p>
        </section>

        {/* Navegación cruzada */}
        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link href="/academia/rca-rcm-fmea-diferencias" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white">
            → RCA, RCM y FMEA: diferencias
          </Link>
          <Link href="/academia/calculadora-mtbf" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white">
            → Calculadora MTBF/MTTR
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
