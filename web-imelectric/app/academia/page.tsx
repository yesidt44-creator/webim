import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imelectric.es/academia",
  },
  title: "Academia Técnica IMELECTRIC — Confiabilidad, RCM, FMECA y SST Industrial",
  description:
    "Herramientas interactivas gratuitas para ingenieros: calculadora MTBF y MTTR online, matriz FMECA, diagrama Ishikawa, simulador trabajo en alturas (Resolución 4272) y biblioteca normativa SST. ISO 55001, RCM y confiabilidad industrial.",
  keywords: [
    "academia ingeniería industrial",
    "herramientas confiabilidad gratis",
    "calculadora MTBF online",
    "calcular MTTR online",
    "FMECA online gratis",
    "diagrama Ishikawa online",
    "RCM Colombia",
    "resolución 4272 trabajo alturas",
    "decreto 1072 SG-SST",
    "resolución 0312 2019",
    "ISO 55001 gestión activos",
    "confiabilidad R(t) exponencial",
    "análisis causa raíz industrial",
    "herramientas ingeniero mantenimiento",
    "IMELECTRIC academia",
  ],
  openGraph: {
    title: "Academia Técnica IMELECTRIC — Confiabilidad, FMECA, SST y RCM",
    description:
      "Herramientas gratuitas para ingenieros: calculadora MTBF, matriz FMECA, Ishikawa, simulador alturas y biblioteca normativa SST.",
    url: "https://imelectric.es/academia",
    siteName: "IMELECTRIC",
    locale: "es_ES",
    type: "website",
  },
};
import { Footer } from "@/components/Footer";
import { ReliabilityCalculator } from "@/components/ReliabilityCalculator";
import { Ishikawa } from "@/components/Ishikawa";
import { Fmeca } from "@/components/Fmeca";
import { SSTAcademy } from "@/components/SSTAcademy";
import { NormsLibrary } from "@/components/NormsLibrary";

export default function AcademiaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-900 px-6 pt-32 pb-12 print:hidden">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Knowledge Hub <span className="text-blue-500">IMELECTRIC</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            Herramientas interactivas, confiabilidad EAM y normativa SST en un solo lugar.
          </p>
        </div>
      </section>

      <nav className="sticky top-20 z-40 border-b border-slate-800 bg-slate-950/90 py-3 backdrop-blur-md print:hidden" aria-label="Navegación academia">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-2 px-6">
          <a href="#confiabilidad" className="text-sm font-bold text-slate-400 transition-colors hover:text-blue-500">
            Confiabilidad
          </a>
          <a href="#sst" className="text-sm font-bold text-slate-400 transition-colors hover:text-emerald-500">
            Seguridad (SST)
          </a>
          <span className="hidden text-slate-700 sm:block">|</span>
          <a href="/academia/calculadora-mtbf" className="text-sm text-slate-500 transition-colors hover:text-blue-400">
            Calculadora MTBF
          </a>
          <a href="/academia/fmeca" className="text-sm text-slate-500 transition-colors hover:text-blue-400">
            FMECA
          </a>
          <a href="/academia/ishikawa" className="text-sm text-slate-500 transition-colors hover:text-blue-400">
            Ishikawa
          </a>
          <a href="/academia/trabajo-en-alturas" className="text-sm text-slate-500 transition-colors hover:text-emerald-400">
            Trabajo en Alturas
          </a>
          <a href="/academia/rodamientos" className="text-sm text-slate-500 transition-colors hover:text-orange-400">
            Rodamientos
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl space-y-32 px-6 py-16">
        <div id="confiabilidad" className="scroll-mt-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-8 w-1 rounded-full bg-blue-600"></div>
            <div>
              <h3 className="text-2xl font-black tracking-tighter text-white uppercase">
                Ingeniería de Confiabilidad
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Modelo exponencial, Ishikawa, FMECA y metodologías EAM (ISO 55001)
              </p>
            </div>
          </div>
          <ReliabilityCalculator />
          <Ishikawa />
          <Fmeca />
        </div>

        <div id="sst" className="scroll-mt-40">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-8 w-1 rounded-full bg-emerald-500"></div>
            <h3 className="text-2xl font-bold tracking-tighter text-white uppercase">
              Seguridad Operacional y SST
            </h3>
          </div>
          <SSTAcademy />
          <NormsLibrary />
        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}
