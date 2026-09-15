"use client";

import Link from "next/link";
import {
  PackageSearch,
  CircuitBoard,
  Globe,
  Zap,
  ArrowRight,
  ShieldCheck,
  ChartNoAxesCombined,
} from "lucide-react";
import { ContactModal } from "./ContactModal";

const services = [
  {
    icon: PackageSearch,
    accent: "blue",
    title: "Suministros Críticos",
    text: "Localización y suministro de componentes electrónicos y mecánicos críticos que el mercado local no ofrece. Reducimos drásticamente los tiempos de espera en paradas de planta y estaciones de tratamiento.",
    tags: [
      { icon: Globe, label: "Red Global de Aliados" },
      { icon: Zap, label: "Logística de Emergencia" },
    ],
    cta: { label: "Consultar Componente", type: "modal" as const },
  },
  {
    icon: CircuitBoard,
    accent: "emerald",
    title: "Mantenimiento Electrónico de Alta Especialidad",
    text: "Prolongamos la vida útil de sus activos tecnológicos más complejos. Intervención experta en PLCs, Variadores de Frecuencia y tarjetas electrónicas industriales, evitando la obsolescencia forzada.",
    tags: [
      { icon: ShieldCheck, label: "Recuperación de Activos" },
      { icon: Zap, label: "Ingeniería de Reversa" },
    ],
    cta: { label: "Agendar Asesoría Personalizada", type: "modal" as const },
  },
  {
    icon: ChartNoAxesCombined,
    accent: "violet",
    title: "Consultoría en Mantenimiento y Confiabilidad",
    text: "Diagnóstico de madurez, diseño de estrategias de mantenimiento (RCM/PM) y gestión de activos — presencial o remota, para pymes y empresas industriales.",
    tags: [
      { icon: ChartNoAxesCombined, label: "Diagnóstico de Madurez" },
      { icon: ShieldCheck, label: "Estrategias RCM / PM" },
    ],
    cta: { label: "Agendar Asesoría Personalizada", type: "link" as const, href: "/consultoria-mantenimiento" },
  },
];

const accentClasses = {
  blue: { chip: "bg-blue-500/15 text-blue-400", tag: "text-blue-500" },
  emerald: { chip: "bg-emerald-500/15 text-emerald-500", tag: "text-emerald-500" },
  violet: { chip: "bg-violet-500/15 text-violet-400", tag: "text-violet-400" },
};

export const IndustrialServices = () => {
  return (
    <section id="servicios" className="scroll-mt-28 border-t border-slate-900 bg-slate-900/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Servicios de <span className="text-blue-500">Ingeniería</span>
          </h2>
          <p className="max-w-2xl leading-relaxed text-slate-400">
            Más allá del software, apoyamos decisiones, activos y operaciones en campo: desde estrategia de mantenimiento
            hasta suministro de repuestos y recuperación electrónica especializada.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const accent = accentClasses[service.accent as keyof typeof accentClasses];
            return (
              <div
                key={service.title}
                className={`flex flex-col p-10 ${i > 0 ? "border-t border-slate-800 lg:border-t-0 lg:border-l" : ""}`}
              >
                <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accent.chip}`}>
                  <Icon size={24} />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="mb-8 leading-relaxed text-slate-400">{service.text}</p>
                <div className="mb-8 grid grid-cols-2 gap-4">
                  {service.tags.map((tag) => {
                    const TagIcon = tag.icon;
                    return (
                      <div key={tag.label} className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <TagIcon size={14} className={accent.tag} /> {tag.label}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-auto">
                  {service.cta.type === "modal" ? (
                    <ContactModal sourceCta={service.cta.label}>
                      <button
                        type="button"
                        className="flex items-center gap-2 text-sm font-bold text-white transition-all hover:gap-4"
                      >
                        {service.cta.label} <ArrowRight size={16} />
                      </button>
                    </ContactModal>
                  ) : (
                    <Link
                      href={service.cta.href}
                      className="flex items-center gap-2 text-sm font-bold text-white transition-all hover:gap-4"
                    >
                      {service.cta.label} <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
