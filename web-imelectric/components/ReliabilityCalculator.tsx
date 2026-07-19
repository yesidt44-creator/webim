"use client";

import { useState } from "react";
import { Calculator, Clock3, Wrench } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Mode = "from_failures" | "from_mtbf";

export const ReliabilityCalculator = () => {
  const [mode, setMode] = useState<Mode>("from_failures");

  // from_failures inputs
  const [failures, setFailures] = useState("5");
  const [operatingHours, setOperatingHours] = useState("2000");
  const [repairHoursTotal, setRepairHoursTotal] = useState("40");

  // from_mtbf / R(t) inputs
  const [mtbf, setMtbf] = useState("500");
  const [time, setTime] = useState("24");

  const [result, setResult] = useState<{
    mtbf: number;
    mttr: number;
    availability: number;
    reliability: number | null;
  } | null>(null);

  const calculateFromFailures = () => {
    const n = parseFloat(failures);
    const op = parseFloat(operatingHours);
    const repair = parseFloat(repairHoursTotal);
    if (isNaN(n) || isNaN(op) || isNaN(repair) || n <= 0 || op <= 0 || repair < 0) {
      alert("Ingrese valores válidos (fallas > 0, horas de operación > 0).");
      return;
    }
    const mtbfH = op / n;
    const mttrH = repair / n;
    const avail = mtbfH / (mtbfH + mttrH);
    const mission = parseFloat(time);
    const reliability =
      !isNaN(mission) && mission >= 0 ? Math.exp(-(1 / mtbfH) * mission) * 100 : null;
    setResult({ mtbf: mtbfH, mttr: mttrH, availability: avail * 100, reliability });
    setMtbf(String(Math.round(mtbfH * 100) / 100));
    trackEvent("reliability_calculate", {
      mode: "from_failures",
      failures: n,
      operating_hours: op,
      mtbf_hours: Math.round(mtbfH * 100) / 100,
      mttr_hours: Math.round(mttrH * 100) / 100,
    });
  };

  const calculateFromMtbf = () => {
    const mtbfNum = parseFloat(mtbf);
    const timeNum = parseFloat(time);
    const mttrNum = parseFloat(repairHoursTotal) || 0;
    if (isNaN(mtbfNum) || isNaN(timeNum) || mtbfNum <= 0 || timeNum < 0) {
      alert("Ingrese un MTBF válido y un tiempo de misión ≥ 0.");
      return;
    }
    const reliability = Math.exp(-(1 / mtbfNum) * timeNum) * 100;
    const avail = mttrNum > 0 ? (mtbfNum / (mtbfNum + mttrNum)) * 100 : 100;
    setResult({
      mtbf: mtbfNum,
      mttr: mttrNum,
      availability: avail,
      reliability,
    });
    trackEvent("reliability_calculate", {
      mode: "from_mtbf",
      mtbf_hours: mtbfNum,
      mission_hours: timeNum,
      reliability_percent: Math.round(reliability * 100) / 100,
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-12 print:hidden">
      <div className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-32 blur-[100px] transition-colors group-hover:bg-blue-500/10" />

      <div className="relative z-10 mb-6 flex flex-wrap items-center gap-3 border-b border-slate-800 pb-4">
        <Calculator size={28} className="text-blue-500" />
        <h2 className="text-2xl font-bold">Calculadora MTBF, MTTR y Confiabilidad</h2>
      </div>

      <div className="relative z-10 mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setMode("from_failures");
            setResult(null);
          }}
          className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
            mode === "from_failures"
              ? "bg-blue-600 text-white"
              : "border border-slate-700 bg-slate-950 text-slate-400 hover:text-white"
          }`}
        >
          Desde datos de fallas
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("from_mtbf");
            setResult(null);
          }}
          className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
            mode === "from_mtbf"
              ? "bg-blue-600 text-white"
              : "border border-slate-700 bg-slate-950 text-slate-400 hover:text-white"
          }`}
        >
          R(t) con MTBF conocido
        </button>
      </div>

      {mode === "from_failures" ? (
        <p className="relative z-10 mb-6 text-sm text-slate-400">
          <code className="rounded bg-blue-900/30 px-2 py-1 text-xs text-blue-300">MTBF = horas operación / Nº fallas</code>
          {" · "}
          <code className="rounded bg-blue-900/30 px-2 py-1 text-xs text-blue-300">MTTR = horas reparación / Nº fallas</code>
          {" · "}
          <code className="rounded bg-blue-900/30 px-2 py-1 text-xs text-blue-300">A = MTBF / (MTBF + MTTR)</code>
        </p>
      ) : (
        <p className="relative z-10 mb-6 text-sm text-slate-400">
          Fórmula:{" "}
          <code className="rounded bg-blue-900/30 px-2 py-1 text-xs text-blue-300">R(t) = e^(-λ · t)</code> con{" "}
          <code className="rounded bg-blue-900/30 px-2 py-1 text-xs text-blue-300">λ = 1/MTBF</code>
        </p>
      )}

      <div className="relative z-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {mode === "from_failures" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                  <Wrench size={14} /> Nº de fallas
                </label>
                <input
                  type="number"
                  min="1"
                  value={failures}
                  onChange={(e) => setFailures(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-white outline-none focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                  <Clock3 size={14} /> Horas de operación
                </label>
                <input
                  type="number"
                  min="0"
                  value={operatingHours}
                  onChange={(e) => setOperatingHours(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-white outline-none focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                  <Clock3 size={14} /> Horas totales de reparación
                </label>
                <input
                  type="number"
                  min="0"
                  value={repairHoursTotal}
                  onChange={(e) => setRepairHoursTotal(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-white outline-none focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                  <Clock3 size={14} /> Misión t (h) — opcional para R(t)
                </label>
                <input
                  type="number"
                  min="0"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>
          ) : (
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
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                  <Clock3 size={14} /> MTTR (Horas) — opcional para disponibilidad
                </label>
                <input
                  type="number"
                  min="0"
                  value={repairHoursTotal}
                  onChange={(e) => setRepairHoursTotal(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-white outline-none focus:border-blue-500"
                  placeholder="Ej: 8"
                />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={mode === "from_failures" ? calculateFromFailures : calculateFromMtbf}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg transition hover:bg-blue-500"
          >
            <Calculator size={18} /> Calcular
          </button>
        </div>

        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8"
        >
          {result ? (
            <div className="space-y-4 animate-in fade-in duration-500">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">MTBF</div>
                <div className="text-3xl font-extrabold text-white">{result.mtbf.toFixed(2)} h</div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">MTTR</div>
                <div className="text-2xl font-bold text-slate-200">{result.mttr.toFixed(2)} h</div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">Disponibilidad</div>
                <div className="text-2xl font-bold text-emerald-400">{result.availability.toFixed(2)}%</div>
              </div>
              {result.reliability !== null && (
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Confiabilidad R(t)</div>
                  <div className="text-2xl font-bold text-blue-400">{result.reliability.toFixed(2)}%</div>
                </div>
              )}
            </div>
          ) : (
            <span className="text-sm text-slate-700">Ingrese valores para calcular</span>
          )}
        </div>
      </div>
    </div>
  );
};
