import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FalionRoiCalc } from "./FalionRoiCalc";

export const HomeFalionRoi = () => (
  <section
    id="calculadora-roi-falion"
    aria-labelledby="home-falion-roi-heading"
    className="scroll-mt-28 border-t border-slate-900 bg-slate-950 py-20"
  >
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Evidencia interactiva · Falion
          </p>
          <h2
            id="home-falion-roi-heading"
            className="mb-4 text-3xl font-extrabold text-white md:text-4xl"
          >
            Calcula cuánto tiempo recuperaría tu equipo con Falion
          </h2>
          <p className="leading-relaxed text-slate-400">
            Ajusta el volumen de análisis, las horas de ingeniería y la tarifa de tu operación.
            Los resultados son ilustrativos y no representan datos de un cliente específico.
          </p>
        </div>
        <Link
          href="/falion#roi"
          className="inline-flex shrink-0 items-center gap-2 font-bold text-blue-400 transition hover:text-blue-300"
        >
          Ver metodología y alcance de Falion <ArrowRight size={18} />
        </Link>
      </div>

      <FalionRoiCalc />
    </div>
  </section>
);
