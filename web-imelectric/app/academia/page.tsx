import { Navbar } from "@/components/Navbar";
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

      <nav className="sticky top-20 z-40 border-b border-slate-800 bg-slate-950/90 py-4 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-7xl gap-8 px-6">
          <a
            href="#confiabilidad"
            className="text-sm font-bold text-slate-400 transition-colors hover:text-blue-500"
          >
            Confiabilidad
          </a>
          <a href="#sst" className="text-sm font-bold text-slate-400 transition-colors hover:text-emerald-500">
            Seguridad (SST)
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
