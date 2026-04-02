import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReliabilityCalculator } from "@/components/ReliabilityCalculator";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/calculadora-mtbf" },
  title: "Calculadora MTBF, MTTR y Confiabilidad Online Gratis | IMELECTRIC",
  description:
    "Calcula MTBF, MTTR, disponibilidad y confiabilidad R(t) con nuestra herramienta online gratuita. Fórmula exponencial R(t)=e^(-λ·t) para ingenieros de mantenimiento industrial. Sin registro.",
  keywords: [
    "calculadora MTBF",
    "calcular MTTR online",
    "confiabilidad R(t)",
    "fórmula MTBF",
    "disponibilidad equipo industrial",
    "calculadora confiabilidad exponencial",
    "MTBF MTTR gratis",
    "ingeniería de confiabilidad",
    "herramienta mantenimiento industrial",
    "calcular disponibilidad maquinaria",
  ],
  openGraph: {
    title: "Calculadora MTBF y Confiabilidad Online Gratis | IMELECTRIC",
    description:
      "Herramienta gratuita para calcular MTBF, MTTR, disponibilidad y R(t)=e^(-λ·t) para ingenieros de mantenimiento.",
    url: "https://imelectric.es/academia/calculadora-mtbf",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
  },
};

export default function CalculadoraMtbfPage() {
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
            <span className="text-slate-300">Calculadora MTBF</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Calculadora <span className="text-blue-500">MTBF, MTTR y Confiabilidad</span> Online
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            Herramienta gratuita para ingenieros: calcula el Tiempo Medio Entre Fallas (<strong className="text-slate-300">MTBF</strong>),
            Tiempo Medio de Reparación (<strong className="text-slate-300">MTTR</strong>), disponibilidad y la función
            de confiabilidad exponencial <code className="rounded bg-slate-800 px-2 py-0.5 font-mono text-sm text-blue-300">R(t) = e^(-λ·t)</code>.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <ReliabilityCalculator />

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="mb-4 text-xl font-bold text-white">¿Qué es el MTBF y cómo se calcula?</h2>
          <p className="mb-4 leading-relaxed text-slate-400">
            El <strong className="text-slate-300">MTBF (Mean Time Between Failures)</strong> es el tiempo promedio que
            transcurre entre fallas consecutivas de un equipo en operación continua. Es el indicador central de la{" "}
            <strong className="text-slate-300">confiabilidad industrial</strong> bajo el modelo exponencial.
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            El <strong className="text-slate-300">MTTR (Mean Time To Repair)</strong> mide el tiempo promedio que toma
            restablecer un equipo tras una falla. Junto con el MTBF determina la{" "}
            <strong className="text-slate-300">disponibilidad = MTBF / (MTBF + MTTR)</strong>.
          </p>
          <p className="leading-relaxed text-slate-400">
            La función <code className="rounded bg-slate-800 px-2 py-0.5 font-mono text-sm text-blue-300">R(t) = e^(-λ·t)</code> modela
            la probabilidad de que un equipo opere sin fallas durante el tiempo <em>t</em>, donde λ = 1/MTBF.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/academia/fmeca"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            → Analizar con FMECA
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
