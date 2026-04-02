import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Ishikawa } from "@/components/Ishikawa";

export const metadata: Metadata = {
  alternates: { canonical: "https://imelectric.es/academia/ishikawa" },
  title: "Diagrama Ishikawa Online — Análisis Causa Raíz 6M | IMELECTRIC",
  description:
    "Crea diagramas de causa y efecto Ishikawa (espina de pescado) online gratis. Análisis de causa raíz con metodología 6M para ingenieros de mantenimiento y confiabilidad industrial. Sin registro.",
  keywords: [
    "diagrama ishikawa online",
    "causa raíz fallas",
    "diagrama espina de pescado",
    "RCA industrial",
    "análisis causa raíz Colombia",
    "diagrama causa efecto online",
    "6M mantenimiento",
    "ishikawa gratis",
    "análisis causa raíz industrial",
    "herramienta RCA ingenieros",
  ],
  openGraph: {
    title: "Diagrama Ishikawa Online — Análisis Causa Raíz 6M | IMELECTRIC",
    description:
      "Herramienta gratuita para crear diagramas Ishikawa (espina de pescado) y realizar análisis de causa raíz con metodología 6M.",
    url: "https://imelectric.es/academia/ishikawa",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
  },
};

export default function IshikawaPage() {
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
            <span className="text-slate-300">Diagrama Ishikawa</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Diagrama <span className="text-blue-500">Ishikawa</span> Online — Análisis de Causa Raíz 6M
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            Herramienta gratuita para ingenieros: construye el{" "}
            <strong className="text-slate-300">diagrama causa-efecto (espina de pescado)</strong> e identifica las
            causas raíz de fallas industriales con la metodología{" "}
            <strong className="text-slate-300">6M (Máquina, Mano de obra, Método, Material, Medición, Medio ambiente)</strong>.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <Ishikawa />

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="mb-4 text-xl font-bold text-white">¿Qué es el diagrama Ishikawa?</h2>
          <p className="mb-4 leading-relaxed text-slate-400">
            El <strong className="text-slate-300">diagrama de Ishikawa</strong>, también llamado diagrama de{" "}
            <strong className="text-slate-300">causa-efecto</strong> o{" "}
            <strong className="text-slate-300">espina de pescado</strong>, es una herramienta visual de análisis de
            causa raíz (<strong className="text-slate-300">RCA</strong>) desarrollada por Kaoru Ishikawa.
          </p>
          <p className="mb-4 leading-relaxed text-slate-400">
            La metodología <strong className="text-slate-300">6M</strong> agrupa las causas potenciales en seis
            categorías: Máquina, Mano de obra, Método, Material, Medición y Medio ambiente. Es ampliamente usada en
            industrias de oil &amp; gas, minería y manufactura para investigación de fallas críticas.
          </p>
          <p className="leading-relaxed text-slate-400">
            Complementa el análisis cuantitativo del{" "}
            <Link href="/academia/fmeca" className="text-blue-400 underline hover:text-blue-300">
              FMECA
            </Link>{" "}
            y los indicadores de{" "}
            <Link href="/academia/calculadora-mtbf" className="text-blue-400 underline hover:text-blue-300">
              MTBF y confiabilidad
            </Link>.
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
            href="/academia/calculadora-mtbf"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-white"
          >
            → Calculadora MTBF
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
