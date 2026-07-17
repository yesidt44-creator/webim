import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/resolucion-0312-estandares-minimos" },
  title: "Resolución 0312 de 2019: Estándares Mínimos SG-SST por Tamaño de Empresa | IMELECTRIC",
  description:
    "La Resolución 0312 de 2019 obliga a toda empresa colombiana desde 1 trabajador. Explica cuántos estándares aplican según tamaño y clase de riesgo, los errores más comunes y el riesgo real de incumplir ante el Ministerio de Trabajo.",
  keywords: [
    "resolución 0312 de 2019 estándares mínimos",
    "SG-SST Colombia requisitos",
    "estándares mínimos SST Colombia",
    "resolución 0312 tamaño empresa",
    "COPASST Colombia",
    "multas SG-SST Colombia",
    "Decreto 1072 SG-SST",
    "seguridad salud trabajo Colombia obligaciones",
    "diagnóstico SG-SST Colombia",
    "incumplimiento resolución 0312",
  ],
  openGraph: {
    title: "Resolución 0312 de 2019: Estándares Mínimos SG-SST | IMELECTRIC",
    description:
      "Guía práctica: cuántos estándares SG-SST aplican a tu empresa según tamaño y clase de riesgo, errores más frecuentes y consecuencias del incumplimiento en Colombia.",
    url: "https://imelectric.es/academia/resolucion-0312-estandares-minimos",
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
      name: "¿Cuántos estándares mínimos SG-SST aplican a mi empresa según la Resolución 0312?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tamaño y la clase de riesgo: 7 estándares para empresas de 1 a 10 trabajadores con clase de riesgo I, II o III; 21 estándares para empresas de 11 a 50 trabajadores; 60 estándares para empresas de más de 50 trabajadores o con clase de riesgo IV o V.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué multas puede imponer el Ministerio de Trabajo por incumplimiento del SG-SST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Decreto 472 de 2015 establece las sanciones por incumplimiento de las normas de seguridad y salud en el trabajo. Las multas van de 1 SMMLV hasta 500 SMMLV según la gravedad del incumplimiento y el tamaño de la empresa. En casos graves con accidente mortal puede haber suspensión de actividades y responsabilidad penal del representante legal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el COPASST y cada cuánto debe reunirse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Comité Paritario de Seguridad y Salud en el Trabajo (COPASST) es de obligatorio establecimiento en empresas con 10 o más trabajadores. Debe reunirse mensualmente como mínimo y documentar las actas de cada reunión. La ausencia de actas vigentes es uno de los hallazgos más frecuentes en visitas del Ministerio de Trabajo.",
      },
    },
  ],
};

const EstandarBadge = ({ num, label }: { num: string; label: string }) => (
  <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
    <span className="shrink-0 rounded-lg bg-violet-500/20 px-3 py-1.5 font-mono text-xl font-extrabold text-violet-400">{num}</span>
    <p className="text-sm text-slate-400">{label}</p>
  </div>
);

export default async function Resolucion0312Page() {
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
            <Link href="/academia" className="transition-colors hover:text-violet-400">Academia Técnica</Link>
            <span>/</span>
            <span className="text-slate-300">Resolución 0312 — Estándares Mínimos</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-violet-400 uppercase">
            SG-SST · Shield AI · Res. 0312
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Los estándares mínimos de la Resolución 0312 de 2019 explicados por tamaño de empresa
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            La Resolución 0312 de 2019 define qué debe tener implementado el SG-SST de cada empresa colombiana, y en qué cantidad mínima. No es optativa. No tiene excepción por sector. Y el incumplimiento tiene consecuencias reales.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-4 mt-0 text-2xl font-bold text-white">El marco legal que genera la obligación</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          El SG-SST en Colombia nació como obligación con el <strong className="text-slate-200">Decreto 1072 de 2015</strong> (Decreto Único Reglamentario del Sector Trabajo), que compiló y unificó toda la normativa laboral. El artículo 2.2.4.6 de ese decreto establece las obligaciones del empleador frente a la seguridad y salud de sus trabajadores.
        </p>
        <p className="mb-6 leading-relaxed text-slate-400">
          La <strong className="text-slate-200">Resolución 0312 de 2019</strong> llegó a establecer los <em>estándares mínimos</em> — los entregables concretos y verificables que el Ministerio de Trabajo puede exigir en una visita de inspección o en el reporte de autoevaluación anual.
        </p>

        <h2 className="mb-6 mt-10 text-2xl font-bold text-white">Los tres conjuntos de estándares</h2>

        {/* Tabla resumen */}
        <div className="mb-8 grid gap-4">
          {/* ✅ CORRECCIÓN APLICADA: Estándar I incluye riesgo I, II o III (no solo I y II).
              Estándar III aplica a riesgo IV o V (riesgo III queda en Estándar I para ≤10 trabajadores). */}
          <EstandarBadge num="7" label="Empresas de 1 a 10 trabajadores · Clase de riesgo I, II o III" />
          <EstandarBadge num="21" label="Empresas de 11 a 50 trabajadores · Cualquier clase de riesgo" />
          <EstandarBadge num="60" label="Empresas de más de 50 trabajadores · O cualquier tamaño con clase de riesgo IV o V" />
        </div>
        <p className="mb-6 text-xs leading-relaxed text-slate-600">
          ⚠️ La clasificación por clase de riesgo la asigna tu ARL. Verifica con el Anexo Técnico oficial de la Res. 0312 si tienes dudas sobre el tramo que aplica a tu empresa.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Estándar I — 7 estándares mínimos</h3>
        <p className="mb-3 leading-relaxed text-slate-400">
          Aplica a empresas de 10 o menos trabajadores con clase de riesgo I, II o III. Los 7 estándares son:
        </p>
        <ul className="mb-6 space-y-2">
          {[
            "Asignación de una persona responsable del SG-SST",
            "Afiliación al Sistema de Seguridad Social (ARL, EPS, AFP)",
            "Identificación de peligros, evaluación y valoración de riesgos",
            "Plan de trabajo anual en SST",
            "Programa de capacitación y entrenamiento",
            "Medidas de prevención y control frente a los peligros identificados",
            "Plan de prevención, preparación y respuesta ante emergencias",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Estándar II — 21 estándares mínimos</h3>
        <p className="mb-4 leading-relaxed text-slate-400">
          Aplica a empresas de 11 a 50 trabajadores, de cualquier clase de riesgo. Los 21 estándares amplían el Estándar I con requisitos adicionales de documentación, seguimiento y medición. Entre los más frecuentemente incumplidos:
        </p>
        <ul className="mb-6 space-y-2">
          {[
            "Evaluación inicial del SG-SST documentada y con fecha",
            "Matriz de identificación de peligros actualizada al menos una vez al año y cuando cambien las condiciones",
            "COPASST en funcionamiento con actas de reunión vigentes (mínimo mensual)",
            "Indicadores del SG-SST medidos y registrados: frecuencia de accidentes, severidad, ausentismo",
            "Reporte de accidentes de trabajo a la ARL y al Ministerio dentro de los plazos legales",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 mt-8 text-xl font-bold text-white">Estándar III — 60 estándares mínimos</h3>
        <p className="mb-4 leading-relaxed text-slate-400">
          Aplica a empresas de más de 50 trabajadores, o empresas con clase de riesgo IV o V (construcción, minería, manufactura pesada, Oil &amp; Gas). Los 60 estándares cubren el ciclo completo PHVA:
        </p>
        <ul className="mb-6 space-y-2">
          {[
            "Auditoría interna anual del SG-SST",
            "Revisión por la alta dirección con acta documentada",
            "Plan de mejoramiento con acciones correctivas y preventivas trazadas",
            "Gestión del cambio cuando cambian procesos, equipos o personal",
            "Investigación de todos los accidentes de trabajo con metodología establecida",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">Los errores más frecuentes que encuentra el Ministerio</h2>
        <div className="mb-6 space-y-4">
          {[
            { n: "01", t: "Matriz de peligros desactualizada", d: "La empresa la hizo en 2020 y nunca la revisó después de cambiar el proceso productivo o contratar personal nuevo." },
            { n: "02", t: "COPASST sin actas de reunión vigentes", d: "Existe el comité en papel, pero no se reúne mensualmente ni documenta los acuerdos." },
            { n: "03", t: "Plan de emergencias sin simulacro documentado", d: "La norma exige al menos un simulacro al año, con acta de participación y evaluación." },
            { n: "04", t: "Indicadores sin medición", d: "El empleador tiene el sistema pero no lleva el registro de frecuencia y severidad de accidentes." },
            { n: "05", t: "Certificados de capacitación vencidos", d: "Los trabajadores hicieron la inducción inicial pero no tienen registro de capacitaciones periódicas." },
          ].map(({ n, t, d }) => (
            <div key={n} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
              <span className="shrink-0 font-mono text-xs font-bold text-slate-600">{n}</span>
              <div>
                <p className="mb-1 font-bold text-white">{t}</p>
                <p className="text-sm leading-relaxed text-slate-400">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">¿Qué pasa si el Ministerio de Trabajo encuentra incumplimientos?</h2>
        {/* ✅ CORRECCIÓN APLICADA: cita Decreto 472 de 2015, no "artículo 91 del Decreto 1072" */}
        <p className="mb-6 leading-relaxed text-slate-400">
          El <strong className="text-slate-200">Decreto 472 de 2015</strong> establece el régimen sancionatorio para incumplimiento de las normas de seguridad y salud en el trabajo. Las multas van de <strong className="text-slate-200">1 SMMLV hasta 500 SMMLV</strong> según la gravedad del incumplimiento y el tamaño de la empresa. En los casos más graves — accidente mortal con incumplimiento normativo demostrado — la consecuencia puede ser la suspensión de actividades y responsabilidad penal del representante legal.
        </p>
        <p className="mb-6 leading-relaxed text-slate-400">
          La autoevaluación anual del SG-SST que el empleador reporta al Ministerio de Trabajo es también un documento que puede usarse como evidencia en su contra en una demanda laboral posterior a un accidente.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">¿Qué tan difícil es cumplir?</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          Para el Estándar I, una empresa organizada con un responsable dedicado puede implementar el SG-SST en dos a cuatro semanas. El volumen documental es manejable. Para el Estándar III, el volumen y la complejidad son significativos.
        </p>
        <p className="mb-6 leading-relaxed text-slate-400">
          La trampa más común: copiar plantillas de internet, imprimir carpetas y considerar que eso es cumplir. El Ministerio de Trabajo puede detectar esto en una visita de 30 minutos. La diferencia entre "tiene carpetas" y "realmente cumple" está en si los documentos están actualizados, los indicadores se miden y la alta dirección participa activamente en la revisión.
        </p>

        {/* CTA Shield AI */}
        <div className="my-10 rounded-2xl border border-violet-500/20 bg-violet-600/5 p-6">
          <p className="mb-1 text-xs font-bold tracking-widest text-violet-400 uppercase">¿Tu empresa ya sabe en qué estándar está y cuántas brechas tiene?</p>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            <strong className="text-slate-200">Shield AI</strong> hace el diagnóstico automático contra la Res. 0312 en menos de 30 minutos. Detecta las brechas, genera la hoja de ruta y los borradores documentales. El responsable del SG-SST y el representante legal los revisan y los firman. El sistema nunca firma en nombre de nadie.
          </p>
          <Link href="/shield-ai" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-500">
            Ver Shield AI →
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link href="/academia/firma-electronica-vs-firma-digital-colombia" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-white">
            → Firma electrónica en Colombia
          </Link>
          <Link href="/academia/certificacion-trabajo-en-alturas-colombia" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-white">
            → Certificación trabajo en alturas
          </Link>
          <Link href="/academia" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-white">
            ← Academia Técnica
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
