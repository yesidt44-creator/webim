"use client";

import { useState, type ReactNode } from "react";
import { ShieldAlert, Calculator, Construction, Zap, Flame, AlertOctagon, Info } from "lucide-react";

export const SSTAcademy = () => {
  const [le, setLe] = useState(1.8);
  const [da, setDa] = useState(1.06);
  const [hu, setHu] = useState(1.7);
  const [sf, setSf] = useState(0.5);

  const dcl = le + da + hu + sf;

  return (
    <div className="mt-12 space-y-12">
      {/* SECCIÓN: TRABAJO EN ALTURAS */}
      <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-12">
        <div className="absolute top-0 right-0 rounded-full bg-blue-500/5 p-32 blur-[120px]"></div>

        <div className="relative z-10 mb-8 flex items-center gap-3 border-b border-slate-800 pb-6">
          <Construction size={28} className="text-blue-500" />
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ingeniería de Trabajo en Alturas</h2>
            <p className="mt-1 text-sm font-bold tracking-tighter text-blue-400 uppercase">
              Normativa: Resolución 4272 de 2021 (Colombia)
            </p>
          </div>
        </div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="leading-relaxed text-slate-300">
              La <strong>Resolución 4272 de 2021</strong> define los requisitos mínimos de seguridad para el trabajo en
              alturas. Es vital calcular la <strong>Distancia de Caída Libre (DCL)</strong> para garantizar que, en caso
              de una caída, el trabajador no impacte contra el suelo o un obstáculo.
            </p>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-blue-500 uppercase">
                <Calculator size={14} /> Simulador de Distancia de Detención
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <DclNumberInput label="Long. Eslinga (m)" value={le} min={0.6} max={1.8} step={0.1} onChange={setLe} />
                <DclNumberInput
                  label="Elongación Absorbedor (m)"
                  value={da}
                  min={0}
                  max={1.2}
                  step={0.01}
                  onChange={setDa}
                />
                <DclNumberInput label="Estatura al anillo (m)" value={hu} min={1.5} max={2} step={0.05} onChange={setHu} />
                <DclNumberInput label="Factor Seguridad (m)" value={sf} min={0.3} max={1} step={0.1} onChange={setSf} />
              </div>

              <div className="mt-6 flex items-end justify-between border-t border-slate-800 pt-6">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Requerimiento de Claridad (DCL)</div>
                  <div className={`text-4xl font-black ${dcl > 5 ? "text-amber-500" : "text-emerald-500"}`}>
                    {dcl.toFixed(2)}m
                  </div>
                </div>
                <div className="max-w-[150px] text-right text-[10px] text-slate-500 italic">*DCL = L.e + D.a + H.u + S.f</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-white italic">
              <Info size={18} className="text-blue-500 shrink-0" /> Conceptos Críticos
            </h4>
            <div className="grid gap-4">
              <InfoCard
                title="Efecto Péndulo"
                text="Ocurre cuando el anclaje no está perpendicular. Aumenta drásticamente la distancia de caída."
                color="amber"
              />
              <InfoCard
                title="Factor de Caída"
                text="F0 (Anclaje arriba), F1 (Al nivel del pecho), F2 (Anclaje a los pies - ¡Riesgo Extremo!)."
                color="red"
              />
              <InfoCard
                title="Plan de Rescate"
                text="Es obligatorio según la norma. El tiempo máximo de suspensión segura es de 15 minutos."
                color="blue"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN: ÁREAS CLASIFICADAS */}
      <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-12">
        <div className="absolute top-0 left-0 rounded-full bg-amber-500/5 p-32 blur-[120px]"></div>

        <div className="relative z-10 mb-8 flex items-center gap-3 border-b border-slate-800 pb-6">
          <Zap size={28} className="text-amber-500" />
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Riesgo en Áreas Clasificadas</h2>
            <p className="mt-1 text-sm font-bold tracking-tighter text-amber-500 uppercase">
              Referencia: RETIE / NFPA 70 (NEC)
            </p>
          </div>
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-3">
          <RiskCard
            title="Clase I: Gases/Vapores"
            zones="Zona 0, 1 y 2"
            desc="Común en estaciones de tratamiento de crudo. Requiere equipos a prueba de explosión (Explosion-Proof)."
            icon={<Flame className="text-red-500" />}
          />
          <RiskCard
            title="Clase II: Polvos"
            zones="Zona 20, 21 y 22"
            desc="Áreas con polvos metálicos o carbón inflamable. El sellado del equipo es la barrera crítica."
            icon={<AlertOctagon className="text-amber-500" />}
          />
          <RiskCard
            title="Clase L: Baterías Li-ion"
            zones="Novedad ISO 3941-2026"
            desc="Nueva categoría para incendios en sistemas de almacenamiento de energía y UPS."
            icon={<Zap className="text-blue-500" />}
          />
        </div>

        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6">
          <ShieldAlert className="shrink-0 text-amber-500" size={24} />
          <div>
            <h4 className="mb-2 font-bold text-white">Integración con Safety On</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Nuestra plataforma <strong>Safety On</strong> permite cargar el mapa de áreas clasificadas de su planta.
              Antes de emitir un Permiso de Trabajo (PT), el sistema alerta si el equipo electrónico del contratista cumple
              con la clasificación de la zona.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

type DclNumberInputProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
};

function DclNumberInput({ label, value, min, max, step, onChange }: DclNumberInputProps) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-bold text-slate-500 uppercase">{label}</label>
      <input
        type="number"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const v = parseFloat(e.target.value);
          if (!Number.isFinite(v)) return;
          onChange(Math.min(max, Math.max(min, v)));
        }}
        className="w-full rounded border border-slate-700 bg-slate-900 p-2 font-mono text-sm text-white outline-none focus:border-blue-500"
      />
    </div>
  );
}

type InfoColor = "amber" | "red" | "blue";

const infoColorClasses: Record<InfoColor, string> = {
  amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  red: "text-red-500 bg-red-500/10 border-red-500/20",
  blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
};

function InfoCard({ title, text, color }: { title: string; text: string; color: InfoColor }) {
  return (
    <div className={`rounded-xl border p-4 ${infoColorClasses[color]}`}>
      <div className="mb-1 text-xs font-bold text-white uppercase">{title}</div>
      <p className="text-[10px] leading-normal text-slate-200/90">{text}</p>
    </div>
  );
}

function RiskCard({ title, zones, desc, icon }: { title: string; zones: string; desc: string; icon: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all hover:border-amber-500/30">
      <div className="mb-4">{icon}</div>
      <h4 className="mb-1 text-lg font-bold text-white">{title}</h4>
      <div className="mb-4 text-[10px] font-black tracking-widest text-amber-500 uppercase">{zones}</div>
      <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
    </div>
  );
}
