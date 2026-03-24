"use client";

import { useState } from "react";
import { Calculator, Clock3 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const ReliabilityCalculator = () => {
  const [mtbf, setMtbf] = useState<string>("500");
  const [time, setTime] = useState<string>("24");
  const [resultR, setResultR] = useState<number | null>(null);

  const calculateReliability = () => {
    const mtbfNum = parseFloat(mtbf);
    const timeNum = parseFloat(time);
    if (isNaN(mtbfNum) || isNaN(timeNum) || mtbfNum <= 0 || timeNum < 0) {
      alert("Ingrese valores válidos.");
      return;
    }
    const lambda = 1 / mtbfNum;
    const reliability = Math.exp(-lambda * timeNum);
    const rPct = reliability * 100;
    setResultR(rPct);
    trackEvent("reliability_calculate", {
      mtbf_hours: mtbfNum,
      mission_hours: timeNum,
      reliability_percent: Math.round(rPct * 100) / 100,
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-12 print:hidden">
      <div className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-32 blur-[100px] transition-colors group-hover:bg-blue-500/10"></div>
      <div className="relative z-10 mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
        <Calculator size={28} className="text-blue-500" />
        <h2 className="text-2xl font-bold">Calculadora de Confiabilidad Exponencial</h2>
      </div>
      <p className="relative z-10 mb-6 text-sm text-slate-400">
        Fórmula:{" "}
        <code className="rounded bg-blue-900/30 px-2 py-1 text-xs text-blue-300">R(t) = e^(-λ · t)</code> con{" "}
        <code className="rounded bg-blue-900/30 px-2 py-1 text-xs text-blue-300">λ = 1/MTBF</code>
      </p>
      <div className="relative z-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                <Clock3 size={14} /> MTBF (Horas)
              </label>
              <input
                type="number"
                value={mtbf}
                onChange={(e) => setMtbf(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-white outline-none focus:border-blue-500"
                placeholder="Ej: 500"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                <Clock3 size={14} /> Misión (Horas)
              </label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-white outline-none focus:border-blue-500"
                placeholder="Ej: 24"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={calculateReliability}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg transition hover:bg-blue-500"
          >
            <Calculator size={18} /> Calcular R(t)
          </button>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8 text-center">
          {resultR !== null ? (
            <div className="animate-in fade-in scale-in duration-500">
              <div className="mb-1 text-xs font-bold text-emerald-400">Confiabilidad R(t)</div>
              <div className="text-5xl font-extrabold text-white">{resultR.toFixed(2)}%</div>
            </div>
          ) : (
            <span className="text-sm text-slate-700">Ingrese valores para simular</span>
          )}
        </div>
      </div>
    </div>
  );
};
