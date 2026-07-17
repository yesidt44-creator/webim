import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/rca-rcm-fmea-diferencias" },
  title: "RCA, RCM y FMEA: Diferencias y Cuándo Usar Cada Metodología | IMELECTRIC Academia",
  description:
    "RCA, RCM y FMEA no son sinónimos. Confundirlos es el error más frecuente en departamentos de mantenimiento industrial. Guía práctica: qué problema resuelve cada metodología, cuándo aplicarla y cómo se conectan entre sí.",
  keywords: [
    "RCA análisis causa raíz mantenimiento",
    "RCM mantenimiento centrado confiabilidad",
    "FMEA AMEF diferencias",
    "diferencias RCA RCM FMEA",
    "metodología confiabilidad industrial",
    "cuándo usar RCA Colombia",
    "FMECA criticidad mantenimiento",
    "RCM SAE JA1011",
    "análisis falla mantenimiento industrial",
    "RCA 5 porqués árbol causas",
  ],
  openGraph: {
    title: "RCA, RCM y FMEA: Diferencias Reales y Cuándo Aplicar Cada Uno | IMELECTRIC",
    description:
      "Guía práctica para ingenieros de mantenimiento: RCA es reactivo, FMEA es preventivo, RCM es estratégico. Cuándo usar cada uno y cómo se alimentan entre sí.",
    url: "https://imelectric.es/academia/rca-rcm-fmea-diferencias",
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
      name: "¿Cuál es la diferencia entre RCA y FMEA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RCA (Análisis de Causa Raíz) es reactivo: se aplica después de que ocurrió una falla o accidente para encontrar la causa raíz y evitar recurrencia. FMEA (Análisis de Modos y Efectos de Falla) es preventivo: se aplica antes de que ocurran las fallas, identificando qué puede fallar y cuáles serían las consecuencias para diseñar medidas preventivas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es RCM y cuándo se debe aplicar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RCM (Reliability-Centered Maintenance o Mantenimiento Centrado en Confiabilidad) es una metodología estratégica para definir el plan de mantenimiento óptimo de un activo, basada en la norma SAE JA1011. Se aplica al diseñar o rediseñar el plan de mantenimiento de un activo, al arrancar una nueva operación, o cuando se quiere justificar inversiones en mantenimiento predictivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre FMEA y FMECA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FMECA (Failure Mode, Effects and Criticality Analysis) añade al FMEA una evaluación de criticidad: combina la probabilidad de ocurrencia de cada modo de falla con la severidad de su efecto para generar un índice de prioridad de riesgo (RPN). Los modos de falla con mayor RPN son los que deben atenderse primero.",
      },
    },
  ],
};

const MethodCard = ({
  label,
  type,
  color,
  when,
  def,
}: {
  label: string;
  type: string;
  color: string;
  when: string;
  def: string;
}) => (
  <div className={`rounded-2xl border p-6 ${color}`}>
    <div className="mb-2 flex items-center justify-between">
      <span className="text-lg font-extrabold text-white">{label}</span>
      <span className="rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-widest opacity-80">{type}</span>
    </div>
    <p className="mb-2 text-sm leading-relaxed opacity-80">{def}</p>
    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Cuándo: {when}</p>
  </div>
);

export default async function RcaRcmFmeaPage() {
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
            <span className="text-slate-300">RCA, RCM y FMEA</span>
          </nav>
          <div className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Confiabilidad Industrial · Fix AI · Falion
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            RCA, RCM y FMEA: diferencias reales y cuándo usar cada metodología de confiabilidad
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            Si trabajas en mantenimiento industrial y has participado en una capacitación de confiabilidad, probablemente escuchaste los tres términos en la misma frase — y probablemente también los escuchaste usados como si fueran intercambiables. No lo son.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">

        <h2 className="mb-6 mt-0 text-2xl font-bold text-white">El punto de partida: tres herramientas con tres propósitos distintos</h2>

        <div className="mb-10 grid gap-4">
          <MethodCard
            label="RCA"
            type="Reactivo"
            color="border-red-500/30 bg-red-500/5 text-red-300"
            def="Encontrar por qué ocurrió una falla o accidente"
            when="Después de que ocurrió"
          />
          <MethodCard
            label="FMEA / AMEF"
            type="Preventivo"
            color="border-amber-500/30 bg-amber-500/5 text-amber-300"
            def="Identificar qué puede fallar y qué consecuencias tendría"
            when="Antes de que ocurra — en fase de análisis o diseño"
          />
          <MethodCard
            label="RCM"
            type="Estratégico"
            color="border-blue-500/30 bg-blue-500/5 text-blue-300"
            def="Definir la estrategia óptima de mantenimiento para un activo"
            when="Al diseñar o rediseñar el plan de mantenimiento"
          />
        </div>

        {/* RCA */}
        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">RCA — Análisis de Causa Raíz</h2>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">Qué es</h3>
        <p className="mb-6 leading-relaxed text-slate-400">
          El RCA es una metodología <strong className="text-slate-200">reactiva</strong>. Se activa después de que ocurrió algo: una falla de equipo, un accidente, un evento de pérdida de producción. Su objetivo no es describir qué pasó — eso lo hace el informe de investigación — sino encontrar <strong className="text-slate-200">por qué</strong> pasó, llegando a la causa raíz que, si se elimina, evita que el evento se repita.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">Las metodologías más usadas</h3>
        <ul className="mb-4 space-y-2">
          {[
            { t: "Árbol de causas (Fault Tree Analysis)", d: "Representa gráficamente las relaciones lógicas entre causas intermedias y la causa raíz. Muy usado en accidentes de seguridad." },
            { t: "5 Porqués", d: "Técnica de encadenamiento de preguntas '¿por qué?' hasta llegar al origen sistémico. Efectiva en fallas simples, insuficiente en sistemas complejos." },
            { t: "Diagrama de Ishikawa (causa-efecto)", d: "Organiza causas potenciales en categorías: máquina, mano de obra, método, material, entorno, medición. Útil como herramienta de lluvia de ideas estructurada." },
          ].map(({ t, d }) => (
            <li key={t} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm">
              <span className="font-bold text-white">{t}: </span>
              <span className="text-slate-400">{d}</span>
            </li>
          ))}
        </ul>
        <p className="mb-6 text-sm text-slate-500">
          Herramienta interactiva: <Link href="/academia/ishikawa" className="text-blue-400 underline hover:text-blue-300">Diagrama de Ishikawa — Academia IMELECTRIC</Link>
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">Cuándo NO usar RCA</h3>
        <p className="mb-6 leading-relaxed text-slate-400">
          El RCA no es predictivo. Si la pregunta es "¿qué podría fallar?" en lugar de "¿por qué falló?", la herramienta correcta es el FMEA. Una trampa frecuente: hacer un RCA de "modos de falla frecuentes" sin que haya ocurrido un evento específico. El resultado es una lista de hipótesis, no un análisis de causa raíz real.
        </p>

        {/* FMEA */}
        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">FMEA / AMEF — Análisis de Modos y Efectos de Falla</h2>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">Qué es</h3>
        <p className="mb-6 leading-relaxed text-slate-400">
          El FMEA es una metodología <strong className="text-slate-200">preventiva y analítica</strong>. Se aplica antes de que ocurran las fallas, descomponiendo un equipo o sistema en sus funciones y preguntando: para cada función, ¿de qué manera puede fallar? ¿Qué efecto tiene esa falla sobre el sistema y sobre la operación?
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">La variante FMECA</h3>
        <p className="mb-4 leading-relaxed text-slate-400">
          La <strong className="text-slate-200">FMECA</strong> añade una evaluación de <strong className="text-slate-200">criticidad</strong>: combina la probabilidad de ocurrencia de cada modo de falla con la severidad de su efecto para generar un índice de prioridad de riesgo (RPN). Los modos de falla con mayor RPN son los que deben atenderse primero.
        </p>
        <p className="mb-6 text-sm text-slate-500">
          Herramienta interactiva: <Link href="/academia/fmeca" className="text-blue-400 underline hover:text-blue-300">FMECA con criticidad — Academia IMELECTRIC</Link>
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">Cuándo usar FMEA/FMECA</h3>
        <ul className="mb-6 space-y-2">
          {[
            "Al diseñar o rediseñar un proceso o equipo nuevo",
            "Antes de implementar un plan de mantenimiento preventivo",
            "Cuando un activo tiene historial de fallas frecuentes y quieres entender los modos dominantes antes de actuar",
            "Como input para el análisis RCM",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {item}
            </li>
          ))}
        </ul>

        {/* RCM */}
        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">RCM — Mantenimiento Centrado en Confiabilidad</h2>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">Qué es</h3>
        <p className="mb-6 leading-relaxed text-slate-400">
          El RCM es una metodología <strong className="text-slate-200">estratégica</strong> para definir el plan de mantenimiento óptimo de un activo o sistema. Su base es la norma <strong className="text-slate-200">SAE JA1011</strong> (criterios de evaluación de procesos RCM). La pregunta central no es "¿qué tareas de mantenimiento hago?" sino: <em>¿cuál es la función de este activo en su contexto operacional, y cuál es la estrategia de mantenimiento que garantiza esa función al menor costo y riesgo posibles?</em>
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">Las 7 preguntas del RCM</h3>
        <div className="mb-6 space-y-3">
          {[
            "¿Cuáles son las funciones del activo y los estándares de rendimiento requeridos?",
            "¿De qué manera puede el activo dejar de cumplir sus funciones? (fallas funcionales)",
            "¿Qué causa cada falla funcional? (modos de falla — aquí entra el FMEA como input)",
            "¿Qué ocurre cuando se produce cada falla? (efectos de la falla)",
            "¿Qué consecuencias tiene cada falla? (seguridad, medio ambiente, operación, costos)",
            "¿Qué puede hacerse para predecir o prevenir cada falla?",
            "¿Qué debe hacerse si no se puede prevenir o predecir la falla?",
          ].map((q, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
              <span className="shrink-0 font-mono text-sm font-bold text-blue-400">{i + 1}</span>
              <p className="text-sm leading-relaxed text-slate-400">{q}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-3 mt-6 text-xl font-bold text-white">Resultado del RCM</h3>
        <p className="mb-6 leading-relaxed text-slate-400">
          Un plan diferenciado: tareas preventivas con frecuencia definida, tareas predictivas (vibración, termografía, análisis de aceite), monitoreo de condición, y algunas deliberadamente "correr hasta fallar" cuando el costo del preventivo supera el costo de la falla.
        </p>

        {/* Cómo se conectan */}
        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">Cómo se conectan las tres metodologías</h2>
        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 font-mono text-xs leading-loose text-slate-400">
          <p>FMEA  ──→  Identifica modos de falla potenciales</p>
          <p className="ml-4">↓</p>
          <p>RCM   ──→  Define qué hacer con cada modo de falla</p>
          <p className="ml-4">↓</p>
          <p>RCA   ──→  Analiza los modos de falla que ya ocurrieron</p>
          <p className="ml-4">↑              ↓</p>
          <p>└──── retroalimenta el FMEA con datos reales de campo</p>
        </div>

        {/* ✅ CORRECCIÓN APLICADA: eliminado el "80%" sin fuente, reemplazado por afirmación cualitativa */}
        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">El error más frecuente en Colombia</h2>
        <p className="mb-4 leading-relaxed text-slate-400">
          Es común encontrar en operaciones colombianas planes denominados "RCM" que en realidad son mantenimiento preventivo de frecuencia fija, construidos por intuición o copiados de otra planta. Técnicamente son PM (Preventive Maintenance) — no RCM.
        </p>
        <p className="mb-6 leading-relaxed text-slate-400">
          El RCM real requiere un análisis funcional formal, la metodología de las 7 preguntas y un proceso de revisión con participación del operador, el mantenedor y el confiabilista. No se hace en una tarde. Esto no significa que sea inalcanzable — significa que hay que ser honesto sobre qué está haciendo la organización y qué no.
        </p>

        {/* CTA Fix AI / Falion */}
        <div className="my-10 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
          <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">De los datos del campo al análisis de confiabilidad</p>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            <strong className="text-slate-200">Fix AI</strong> captura las OTs cerradas en campo. <strong className="text-slate-200">Falion</strong> asiste el análisis de causa raíz, calcula MTBF/MTTR e identifica patrones de falla con los datos reales de tus activos — no con conocimiento genérico de internet. El confiabilista revisa, valida el diagnóstico y decide la estrategia. La IA acelera el análisis; la persona decide la acción.
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

        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link href="/academia/fmeca" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white">
            → FMECA interactiva
          </Link>
          <Link href="/academia/ishikawa" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white">
            → Diagrama Ishikawa
          </Link>
          <Link href="/academia/cmms-vs-gmao" className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white">
            → CMMS vs GMAO
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
