"use client";

import { useState } from "react";

export const FalionRoiCalc = () => {
  const [analysts, setAnalysts] = useState(2);
  const [rcasPerMonth, setRcasPerMonth] = useState(8);
  const [hoursPerRca, setHoursPerRca] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(50000);
  const planCost = 200000;

  const hoursSaved = rcasPerMonth * hoursPerRca;
  const moneySaved = hoursSaved * hourlyRate * analysts;
  const roi = moneySaved / planCost;

  const fmt = (n: number) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8">
      <p className="mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase">
        Calculadora ROI — ajusta los valores a tu equipo real
      </p>

      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-xs font-semibold text-slate-400">
            Ingenieros / analistas que hacen RCAs
          </span>
          <input
            type="number"
            min={1}
            max={50}
            value={analysts}
            onChange={(e) => setAnalysts(Math.max(1, Number(e.target.value)))}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="space-y-2">
          <span className="block text-xs font-semibold text-slate-400">
            RCAs completos / mes (por analista)
          </span>
          <input
            type="number"
            min={1}
            max={100}
            value={rcasPerMonth}
            onChange={(e) => setRcasPerMonth(Math.max(1, Number(e.target.value)))}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="space-y-2">
          <span className="block text-xs font-semibold text-slate-400">
            Horas manuales por RCA (mín. conservador: 8 h)
          </span>
          <input
            type="number"
            min={1}
            max={80}
            value={hoursPerRca}
            onChange={(e) => setHoursPerRca(Math.max(1, Number(e.target.value)))}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="space-y-2">
          <span className="block text-xs font-semibold text-slate-400">
            Tarifa hora del ingeniero (COP)
          </span>
          <input
            type="number"
            min={10000}
            step={5000}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Math.max(10000, Number(e.target.value)))}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>

      {/* Resultado */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center">
          <p className="mb-1 text-xs font-bold tracking-widest text-slate-500 uppercase">Horas liberadas / mes</p>
          <p className="text-3xl font-extrabold text-white">~{(hoursSaved * analysts).toLocaleString("es-CO")} h</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center">
          <p className="mb-1 text-xs font-bold tracking-widest text-slate-500 uppercase">Ahorro estimado / mes</p>
          <p className="text-3xl font-extrabold text-white">{fmt(moneySaved)}</p>
        </div>
        <div className="rounded-2xl border border-blue-500/30 bg-blue-600/10 p-5 text-center">
          <p className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">ROI mes 1 (estimado)</p>
          <p className="text-3xl font-extrabold text-blue-300">~{Math.round(roi)}×</p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-600">
        Esta calculadora usa el extremo bajo del rango (1 día hábil / 8 h por RCA) para mantener el reclamo conservador y defendible.
        Si el ciclo real de tu operación es de 2–3 días por caso, el ahorro y el ROI son sustancialmente mayores.
        Costo del plan de referencia: {fmt(planCost)}/mes. Ningún valor aquí representa datos de un cliente específico.
      </p>
    </div>
  );
};
