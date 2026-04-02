import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Fmeca } from "@/components/Fmeca";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/fmeca" },
  title: "Matriz FMECA Online Gratis — Análisis de Modos de Falla y Criticidad | IMELECTRIC",
  description:
    "Herramienta FMECA online gratuita para ingenieros. Calcula el Número de Prioridad de Riesgo (NPR = Severidad × Ocurrencia × Detección), identifica fallas críticas y aplica metodología RCM. Sin registro.",
  keywords: [
    "FMECA online",
    "matriz FMECA gratis",
    "análisis modos de falla",
    "NPR criticidad",
    "RCM FMECA Colombia",
    "FMEA industrial",
    "número prioridad riesgo",
    "análisis criticidad equipos",
    "herramienta RCM online",
    "mantenimiento centrado confiabilidad",
  ],
  openGraph: {
    title: "Matriz FMECA Online Gratis | IMELECTRIC",
    description:
      "Calcula NPR (Severidad × Ocurrencia × Detección), identifica fallas críticas y aplica RCM con nuestra herramienta FMECA online gratuita.",
    url: "https://imelectric.es/academia/fmeca",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
  },
};

export default function FmecaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-900 px-6 pt-32 pb-12">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-500" aria-label="Miga de pan">
            <Link href="/academia" className="hover:text-blue-400 transition-colors">
              Academia Técnica
            </Link>
            <span>/</span>
            <span className="text-slate-300">Matriz FMECA</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Matriz <span className="text-blue-500">FMECA</span> Online — Análisis de Modos de Falla y Criticidad
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            Herramienta gratuita para ingenieros: identifica modos de falla, calcula el{" "}
            <strong className="text-slate-300">NPR (Número de Prioridad de Riesgo)</strong> y prioriza acciones de
            mantenimiento siguiendo la metodología <strong className="text-slate-300">RCM</strong>.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <Fmeca />

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="mb-4 text-xl font-bold text-white">¿Qué es el FMECA y para qué sirve?</h2>
          <p className="mb-4 leading-relaxed text-slate-400">
            El <strong className="text-slate-300">FMECA (Failure Mode, Effects and Criticality Analysis)</strong> es
            una metodología sistemática para identificar los posibles modos de falla de un equipo, evaluar sus efectos
            y calcular su criticidad mediante el{" "}
            <strong className="text-slate-300">NPR = Severidad × Ocurrencia × Detección</strong>.
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            Es la base del <strong className="text-slate-300">RCM (Reliability-Centered Maintenance)</strong> y
            permite priorizar las acciones de mantenimiento preventivo, predictivo o correctivo según el riesgo real
            de cada modo de falla.
          </p>
          <p className="leading-relaxed text-slate-400">
            Un NPR alto (generalmente &gt;100–200) indica un modo de falla crítico que requiere acción inmediata para
            reducir la probabilidad, severidad o mejorar la detección.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/academia/calculadora-mtbf"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            → Calculadora MTBF
          </Link>
          <Link
            href="/academia/ishikawa"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            → Diagrama Ishikawa
          </Link>
          <Link
            href="/academia"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            ← Volver a Academia
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
