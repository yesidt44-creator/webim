"use client";

import React, { useState } from "react";
import { Plus, X, Printer, GitBranch, AlertCircle } from "lucide-react";

const CATEGORIES = [
  "Máquina (Machine)",
  "Método (Method)",
  "Mano de Obra (Manpower)",
  "Material (Material)",
  "Medición (Measurement)",
  "Medio Ambiente (Environment)",
];

export const Ishikawa = () => {
  const [problem, setProblem] = useState("Falla catastrófica en bomba centrífuga P-101");
  const [causes, setCauses] = useState<Record<string, string[]>>({
    "Máquina (Machine)": ["Desalineación del eje", "Rodamiento desgastado"],
    "Método (Method)": ["Procedimiento de lubricación obsoleto"],
    "Mano de Obra (Manpower)": ["Falta de entrenamiento técnico"],
    "Material (Material)": ["Aceite contaminado con agua"],
    "Medición (Measurement)": ["Sensor de vibración descalibrado"],
    "Medio Ambiente (Environment)": ["Alta humedad y polvo"],
  });
  const [newCause, setNewCause] = useState<Record<string, string>>({});

  const handleAddCause = (category: string) => {
    if (newCause[category]?.trim()) {
      setCauses({
        ...causes,
        [category]: [...(causes[category] || []), newCause[category]],
      });
      setNewCause({ ...newCause, [category]: "" });
    }
  };

  const handleRemoveCause = (category: string, index: number) => {
    const updated = [...causes[category]];
    updated.splice(index, 1);
    setCauses({ ...causes, [category]: updated });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-12 print:border-none print:bg-white print:text-black print:shadow-none">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center print:border-gray-300">
        <div className="flex items-center gap-3">
          <GitBranch size={28} className="text-emerald-500 print:text-black" />
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Análisis de Causa Raíz (Ishikawa)</h2>
            <p className="mt-1 text-sm text-slate-400 print:text-gray-600">
              Metodología de las 6M para resolución de problemas.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 font-bold text-white transition hover:bg-slate-700 print:hidden"
        >
          <Printer size={16} /> Exportar / Imprimir PDF
        </button>
      </div>

      {/* Definición del Problema (Cabeza del Pescado) */}
      <div className="mb-10 rounded-2xl border border-red-500/20 bg-slate-950 p-6 print:border-red-500 print:bg-red-50/50">
        <label className="mb-2 flex items-center gap-2 text-xs font-bold text-red-500 uppercase">
          <AlertCircle size={16} /> Efecto / Problema Principal (Cabeza)
        </label>
        <input
          type="text"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="w-full border-b border-slate-700 bg-transparent pb-2 text-xl font-bold text-white transition focus:border-red-500 focus:outline-none md:text-2xl print:text-red-700"
        />
      </div>

      {/* Las 6M (Cuerpo del Pescado) */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => (
          <div
            key={category}
            className="rounded-xl border border-slate-800 bg-slate-950/50 p-5 print:border-gray-300 print:bg-white"
          >
            <h4 className="mb-4 border-b border-slate-800 pb-2 text-sm font-bold tracking-wider text-blue-400 uppercase print:border-gray-300 print:text-black">
              {category}
            </h4>

            <ul className="mb-4 min-h-[100px] space-y-3">
              {causes[category]?.map((cause, idx) => (
                <li
                  key={idx}
                  className="group flex items-start justify-between gap-2 text-sm text-slate-300 print:text-gray-800"
                >
                  <span className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-blue-500 print:text-black">•</span>
                    {cause}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCause(category, idx)}
                    className="text-red-400 opacity-0 transition hover:text-red-300 group-hover:opacity-100 print:hidden"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
              {(!causes[category] || causes[category].length === 0) && (
                <li className="text-xs text-slate-600 italic print:hidden">Sin causas identificadas...</li>
              )}
            </ul>

            <div className="flex gap-2 print:hidden">
              <input
                type="text"
                placeholder="Añadir causa..."
                value={newCause[category] || ""}
                onChange={(e) => setNewCause({ ...newCause, [category]: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && handleAddCause(category)}
                className="flex-1 rounded border border-slate-700 bg-slate-900 p-2 text-xs text-white focus:border-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleAddCause(category)}
                className="rounded border border-blue-500/30 bg-blue-600/20 p-2 text-blue-400 transition hover:bg-blue-600 hover:text-white"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
