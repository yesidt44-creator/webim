"use client";

import type { ReactNode } from "react";
import { CheckCircle2, Droplets, Zap, HardHat, ShoppingBasket } from "lucide-react";

export const About = () => {
  return (
    <section id="nosotros" className="scroll-mt-28 border-t border-slate-900 bg-slate-950 py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-2">
        <div className="lg:sticky lg:top-32">
          <span className="mb-4 block text-xs font-bold tracking-widest text-blue-500 uppercase">
            Especialización Industrial
          </span>
          <h2 className="mb-6 text-3xl leading-tight font-bold md:text-5xl">
            Sectores de <br />
            <span className="text-blue-500">Impacto Estratégico.</span>
          </h2>
          <p className="mb-6 leading-relaxed text-slate-400">
            Entendemos la complejidad operativa de las industrias base de la economía. No solo entregamos software;
            entregamos continuidad operativa.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <CheckCircle2 className="text-blue-500" size={20} />
            <span className="text-sm font-bold text-white">10+ años de experiencia técnica</span>
          </div>
        </div>

        <div className="space-y-6">
          <SectorCard
            icon={<Droplets size={24} />}
            title="Petróleo y Gas"
            text="Entendemos la complejidad de las estaciones de tratamiento de crudo. Nuestras soluciones digitales aseguran que los reportes de mantenimiento y protocolos de seguridad se cumplan sin excepciones."
          />
          <SectorCard
            icon={<Zap size={24} />}
            title="Energía y Generación"
            text="Apoyamos la operación de subestaciones y centrales. Garantizamos respuesta logística inmediata ante la necesidad de componentes especializados."
          />
          <SectorCard
            icon={<HardHat size={24} />}
            title="Minería e Industria Pesada"
            text="Llevamos la inteligencia industrial a los procesos mineros. Eliminamos el papeleo en inspecciones de campo y agilizamos la toma de decisiones críticas."
          />
          <SectorCard
            icon={<ShoppingBasket size={24} />}
            title="Alimentos y Consumo Masivo"
            text="En líneas de alta velocidad, cada segundo cuenta. Agilizamos reportes de calidad eliminando el papel en zonas limpias y recuperamos sistemas de automatización."
          />
        </div>
      </div>
    </section>
  );
};

const SectorCard = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700">
    <div className="mb-3 flex items-center gap-4">
      <div className="text-blue-500">{icon}</div>
      <h4 className="text-lg font-bold text-white">{title}</h4>
    </div>
    <p className="text-sm leading-relaxed text-slate-500">{text}</p>
  </div>
);
