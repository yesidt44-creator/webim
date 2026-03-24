"use client";

import React, { useState } from "react";
import { Plus, X, Activity, AlertTriangle } from "lucide-react";

interface FailureMode {
  id: number;
  mode: string;
  effect: string;
  s: number; // Severidad (1-10)
  o: number; // Ocurrencia (1-10)
  d: number; // Detección (1-10)
}

export const Fmeca = () => {
  const [failures, setFailures] = useState<FailureMode[]>([
    {
      id: 1,
      mode: "Fuga en sello mecánico",
      effect: "Derrame de fluido, riesgo ambiental, parada de bomba.",
      s: 8,
      o: 6,
      d: 4,
    },
    {
      id: 2,
      mode: "Desgaste de rodamiento",
      effect: "Aumento de vibración, sobrecalentamiento.",
      s: 5,
      o: 4,
      d: 2,
    },
  ]);

  const [newMode, setNewMode] = useState("");
  const [newEffect, setNewEffect] = useState("");
  const [newS, setNewS] = useState<number>(1);
  const [newO, setNewO] = useState<number>(1);
  const [newD, setNewD] = useState<number>(1);

  const calculateRPN = (s: number, o: number, d: number) => s * o * d;

  const getRiskColor = (rpn: number) => {
    if (rpn >= 200) return "text-red-500 font-bold bg-red-500/10";
    if (rpn >= 100) return "text-amber-500 font-bold bg-amber-500/10";
    return "text-emerald-500 font-bold bg-emerald-500/10";
  };

  const getRiskLabel = (rpn: number) => {
    if (rpn >= 200) return "CRÍTICO";
    if (rpn >= 100) return "MODERADO";
    return "BAJO";
  };

  const addFailure = () => {
    if (newMode.trim() && newEffect.trim()) {
      const newId = failures.length > 0 ? Math.max(...failures.map((f) => f.id)) + 1 : 1;
      setFailures([...failures, { id: newId, mode: newMode, effect: newEffect, s: newS, o: newO, d: newD }]);
      setNewMode("");
      setNewEffect("");
      setNewS(1);
      setNewO(1);
      setNewD(1);
    } else {
      alert("Por favor ingrese el Modo y el Efecto de la falla.");
    }
  };

  const removeFailure = (id: number) => {
    setFailures(failures.filter((f) => f.id !== id));
  };

  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-12 print:border-none print:bg-white print:text-black print:shadow-none">
      <div className="mb-8 flex items-center gap-3 border-b border-slate-800 pb-6 print:border-gray-300">
        <Activity size={28} className="text-amber-500 print:text-black" />
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Matriz FMECA (RCM)</h2>
          <p className="mt-1 text-sm text-slate-400 print:text-gray-600">
            Análisis de Modos de Falla, Efectos y Criticidad (NPR).
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-800 print:border-gray-300">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/50 text-xs tracking-wider text-slate-400 uppercase print:border-gray-300 print:bg-gray-100 print:text-black">
              <th className="p-4 font-bold">Modo de Falla</th>
              <th className="p-4 font-bold">Efecto / Consecuencia</th>
              <th className="p-4 text-center font-bold" title="Severidad (1-10)">
                S
              </th>
              <th className="p-4 text-center font-bold" title="Ocurrencia (1-10)">
                O
              </th>
              <th className="p-4 text-center font-bold" title="Detección (1-10)">
                D
              </th>
              <th className="p-4 text-center font-bold">NPR (SxOxD)</th>
              <th className="p-4 text-center font-bold print:hidden">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 print:divide-gray-300">
            {failures.map((f) => {
              const rpn = calculateRPN(f.s, f.o, f.d);
              return (
                <tr
                  key={f.id}
                  className="text-sm text-slate-300 transition-colors hover:bg-slate-800/20 print:text-gray-800"
                >
                  <td className="p-4 font-medium">{f.mode}</td>
                  <td className="p-4">{f.effect}</td>
                  <td className="p-4 text-center font-mono">{f.s}</td>
                  <td className="p-4 text-center font-mono">{f.o}</td>
                  <td className="p-4 text-center font-mono">{f.d}</td>
                  <td className="p-4 text-center">
                    <div
                      className={`inline-flex flex-col items-center justify-center rounded-md px-3 py-1 ${getRiskColor(rpn)}`}
                    >
                      <span className="text-lg leading-none">{rpn}</span>
                      <span className="mt-1 text-[10px] tracking-widest uppercase opacity-80">{getRiskLabel(rpn)}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center print:hidden">
                    <button
                      type="button"
                      onClick={() => removeFailure(f.id)}
                      className="rounded p-2 text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                    >
                      <X size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
            {failures.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-sm text-slate-500 italic">
                  No hay modos de falla registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Formulario de Entrada (Oculto en impresión) */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-6 print:hidden">
        <h4 className="mb-4 border-b border-slate-800 pb-2 text-sm font-bold tracking-wider text-slate-400 uppercase">
          Añadir Nuevo Modo de Falla
        </h4>
        <div className="grid items-end gap-4 md:grid-cols-12">
          <div className="space-y-2 md:col-span-3">
            <label className="text-xs font-bold text-slate-500">Modo de Falla</label>
            <input
              type="text"
              value={newMode}
              onChange={(e) => setNewMode(e.target.value)}
              placeholder="Ej: Rotura de correa"
              className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-sm text-white focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2 md:col-span-4">
            <label className="text-xs font-bold text-slate-500">Efecto / Consecuencia</label>
            <input
              type="text"
              value={newEffect}
              onChange={(e) => setNewEffect(e.target.value)}
              placeholder="Pérdida de transmisión de potencia"
              className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-sm text-white focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2 text-center md:col-span-1">
            <label className="text-xs font-bold text-slate-500" title="Severidad (1-10)">
              S
            </label>
            <input
              type="number"
              min={1}
              max={10}
              value={newS}
              onChange={(e) => setNewS(Number(e.target.value))}
              className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-center font-mono text-sm text-white focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2 text-center md:col-span-1">
            <label className="text-xs font-bold text-slate-500" title="Ocurrencia (1-10)">
              O
            </label>
            <input
              type="number"
              min={1}
              max={10}
              value={newO}
              onChange={(e) => setNewO(Number(e.target.value))}
              className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-center font-mono text-sm text-white focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2 text-center md:col-span-1">
            <label className="text-xs font-bold text-slate-500" title="Detección (1-10)">
              D
            </label>
            <input
              type="number"
              min={1}
              max={10}
              value={newD}
              onChange={(e) => setNewD(Number(e.target.value))}
              className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-center font-mono text-sm text-white focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="button"
              onClick={addFailure}
              className="flex w-full items-center justify-center gap-2 rounded border border-amber-500/50 bg-amber-600/20 p-2 text-sm font-bold text-amber-500 transition hover:bg-amber-600 hover:text-white"
            >
              <Plus size={16} /> Agregar
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 p-3 text-xs text-slate-500">
          <AlertTriangle size={14} className="text-amber-500" />
          <span>
            <strong>NPR (Número Prioritario de Riesgo)</strong> = Severidad x Ocurrencia x Detección. Evalúe del 1
            (Mínimo) al 10 (Máximo) cada variable. Riesgo Crítico &ge; 200.
          </span>
        </div>
      </div>
    </div>
  );
};
