import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SSTAcademy } from "@/components/SSTAcademy";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/trabajo-en-alturas" },
  title: "Resolución 4272 Trabajo en Alturas — Simulador DCL y Normativa | IMELECTRIC",
  description:
    "Simulador de distancia de caída libre (DCL) según Resolución 4272 de 2021. Calcula la claridad mínima para trabajo seguro en alturas. Conceptos RETIE, NFPA y normativa SST Colombia. Herramienta gratuita.",
  keywords: [
    "resolución 4272 trabajo alturas",
    "distancia caída libre",
    "DCL trabajo alturas",
    "trabajo seguro alturas Colombia",
    "simulador alturas",
    "normativa trabajo en alturas Colombia",
    "permisos trabajo altura",
    "RETIE alturas",
    "SST alturas Colombia",
    "resolución 4272 2021",
    "claridad mínima alturas",
    "trabajo en alturas digital",
  ],
  openGraph: {
    title: "Simulador Resolución 4272 — Trabajo en Alturas | IMELECTRIC",
    description:
      "Calcula la distancia de caída libre (DCL) y la claridad mínima según Resolución 4272 de 2021. Herramienta gratuita para ingenieros SST Colombia.",
    url: "https://imelectric.es/academia/trabajo-en-alturas",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
  },
};

export default function TrabajoEnAlturasPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-900 px-6 pt-32 pb-12">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-500" aria-label="Miga de pan">
            <Link href="/academia" className="hover:text-emerald-400 transition-colors">
              Academia Técnica
            </Link>
            <span>/</span>
            <span className="text-slate-300">Trabajo en Alturas</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-emerald-500">Resolución 4272</span> — Simulador de Trabajo en Alturas
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            Herramienta gratuita para ingenieros SST: calcula la{" "}
            <strong className="text-slate-300">distancia de caída libre (DCL)</strong> y la claridad mínima requerida
            para trabajo seguro en alturas según la{" "}
            <strong className="text-slate-300">Resolución 4272 de 2021</strong>. Incluye conceptos RETIE y NFPA.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <SSTAcademy />

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="mb-4 text-xl font-bold text-white">Resolución 4272 de 2021 — Aspectos clave</h2>
          <p className="mb-4 leading-relaxed text-slate-400">
            La <strong className="text-slate-300">Resolución 4272 de 2021</strong> del Ministerio de Trabajo de
            Colombia establece los requisitos para el trabajo seguro en alturas. Define la obligatoriedad de calcular
            la <strong className="text-slate-300">distancia de caída libre (DCL)</strong> y la{" "}
            <strong className="text-slate-300">claridad mínima</strong> antes de ejecutar cualquier labor en altura.
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            El incumplimiento de esta norma puede resultar en sanciones, suspensión de operaciones y responsabilidad
            penal ante accidentes. La <strong className="text-slate-300">trazabilidad digital</strong> de permisos de
            trabajo en alturas es exigida por los entes reguladores en Colombia.
          </p>
          <p className="leading-relaxed text-slate-400">
            Para la gestión digital de{" "}
            <strong className="text-slate-300">permisos de trabajo en alturas</strong> con firma forense y trazabilidad
            HSE, conozca{" "}
            <Link href="/#safety-on" className="text-emerald-400 underline hover:text-emerald-300">
              Safety On de IMELECTRIC
            </Link>.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/academia/calculadora-mtbf"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white"
          >
            → Calculadora MTBF
          </Link>
          <Link
            href="/academia/fmeca"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white"
          >
            → Matriz FMECA
          </Link>
          <Link
            href="/academia"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-white"
          >
            ← Volver a Academia
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
