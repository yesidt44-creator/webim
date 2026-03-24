"use client";

import { PackageSearch, CircuitBoard, Globe, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const IndustrialServices = () => {
  return (
    <section id="servicios" className="scroll-mt-28 border-t border-slate-900 bg-slate-900/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Servicios de <span className="text-blue-500">Respuesta Crítica</span>
          </h2>
          <p className="max-w-2xl leading-relaxed text-slate-400">
            Más allá del software, somos su brazo ejecutor en campo. Resolvemos la falta de repuestos y la obsolescencia
            tecnológica para que su operación nunca se detenga.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Suministros Críticos */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
            <div className="absolute top-0 right-0 rounded-full bg-blue-600/5 p-24 blur-[100px] transition-all group-hover:bg-blue-600/10"></div>
            <PackageSearch size={48} className="relative z-10 mb-8 text-blue-500" />
            <h3 className="relative z-10 mb-4 text-2xl font-bold">Suministros Críticos</h3>
            <p className="relative z-10 mb-8 leading-relaxed text-slate-400">
              Localización y suministro de componentes electrónicos y mecánicos críticos que el mercado local no ofrece.
              Reducimos drásticamente los tiempos de espera en paradas de planta y estaciones de tratamiento.
            </p>
            <div className="relative z-10 mb-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Globe size={14} className="text-blue-500" /> Red Global de Aliados
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Zap size={14} className="text-blue-500" /> Logística de Emergencia
              </div>
            </div>
            <ContactModal>
              <button
                type="button"
                className="relative z-10 flex items-center gap-2 text-sm font-bold text-white transition-all hover:gap-4"
              >
                Consultar Componente <ArrowRight size={16} />
              </button>
            </ContactModal>
          </div>

          {/* Mantenimiento Electrónico */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">
            <div className="absolute top-0 right-0 rounded-full bg-emerald-600/5 p-24 blur-[100px] transition-all group-hover:bg-emerald-600/10"></div>
            <CircuitBoard size={48} className="relative z-10 mb-8 text-emerald-500" />
            <h3 className="relative z-10 mb-4 text-2xl font-bold">Mantenimiento Electrónico de Alta Especialidad</h3>
            <p className="relative z-10 mb-8 leading-relaxed text-slate-400">
              Prolongamos la vida útil de sus activos tecnológicos más complejos. Intervención experta en PLCs, Variadores
              de Frecuencia y tarjetas electrónicas industriales, evitando la obsolescencia forzada.
            </p>
            <div className="relative z-10 mb-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <ShieldCheck size={14} className="text-emerald-500" /> Recuperación de Activos
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Zap size={14} className="text-emerald-500" /> Ingeniería de Reversa
              </div>
            </div>
            <ContactModal>
              <button
                type="button"
                className="relative z-10 flex items-center gap-2 text-sm font-bold text-white transition-all hover:gap-4"
              >
                Agendar Diagnóstico <ArrowRight size={16} />
              </button>
            </ContactModal>
          </div>
        </div>
      </div>
    </section>
  );
};
