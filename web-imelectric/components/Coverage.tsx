import { MapPin, Compass } from "lucide-react";

export const Coverage = () => {
  return (
    <section
      id="cobertura"
      className="scroll-mt-28 border-t border-slate-900 bg-slate-950 py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <span className="mb-3 block text-xs font-bold tracking-widest text-blue-500 uppercase">
            Cobertura
          </span>
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            Cobertura nacional, con base en el <span className="text-blue-500">Magdalena Medio.</span>
          </h2>
          <p className="leading-relaxed text-slate-400">
            Operamos en todo el territorio colombiano. Nuestra base operativa está en Yondó, Antioquia — el
            corazón del Magdalena Medio — desde donde coordinamos la operación hacia el resto del país.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
            <MapPin className="shrink-0 text-blue-500" size={22} />
            <div>
              <p className="text-xs font-bold tracking-wide text-slate-500 uppercase">Base operativa</p>
              <p className="font-semibold text-white">Yondó, Antioquia — Magdalena Medio</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
            <Compass className="shrink-0 text-blue-500" size={22} />
            <div>
              <p className="text-xs font-bold tracking-wide text-slate-500 uppercase">Alcance</p>
              <p className="font-semibold text-white">Cobertura nacional — Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
