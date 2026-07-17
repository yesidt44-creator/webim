"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Clock,
  Users,
  Lock,
  Building2,
  ArrowRight,
} from "lucide-react";
import { ContactModal } from "./ContactModal";

const shieldAiJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Shield AI",
  alternateName: [
    "Shield AI SG-SST Colombia",
    "software SG-SST Colombia",
    "software seguridad social trabajo Colombia",
    "sistema gestión SST PyME Colombia",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "SG-SST, SST, Seguridad y Salud en el Trabajo, Resolución 0312",
  operatingSystem: "Web",
  description:
    "Shield AI es la plataforma SG-SST para toda empresa colombiana obligada por la Res. 0312. Automatiza la generación de evidencia documental, detecta brechas de cumplimiento y emite alertas normativas — la persona responsable revisa, completa y firma. Ciclo de retención de 20 años.",
  keywords:
    "Shield AI SG-SST Colombia, software SG-SST Colombia, Resolución 0312 cumplimiento, Decreto 1072 SG-SST digital, sistema gestión seguridad trabajo Colombia, software HSE PyME Colombia, cumplimiento normativo SST Colombia, SG-SST automatizado",
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
    areaServed: ["Colombia"],
    knowsAbout: [
      "SG-SST Colombia",
      "Resolución 0312",
      "Decreto 1072",
      "Seguridad y Salud en el Trabajo",
      "Cumplimiento normativo laboral Colombia",
    ],
  },
  featureList: [
    "Diagnóstico inicial de brecha SG-SST contra Resolución 0312",
    "Generación automática de evidencia documental requerida",
    "Alertas de cumplimiento antes de vencimientos regulatorios",
    "Firma dual: responsable del SG-SST y representante legal",
    "Retención documental de 20 años (régimen 7/21/60)",
    "Tablero de estado de cumplimiento en tiempo real",
    "Compatible con empresas de todos los tamaños (Res. 0312 estándares mínimos)",
  ],
};

const features = [
  {
    icon: <Brain size={22} />,
    title: "Diagnóstico de brecha automático",
    desc: "Shield AI analiza el estado actual del SG-SST contra los estándares mínimos de la Res. 0312 y genera un mapa de brechas priorizado por riesgo. El responsable ve exactamente qué falta y qué debe hacer primero.",
  },
  {
    icon: <FileText size={22} />,
    title: "Generación de evidencia documental",
    desc: "El sistema prepara los documentos requeridos (matrices de peligros, planes de emergencia, programas de capacitación) en los formatos exigidos. El responsable del SG-SST los revisa, completa los datos específicos y firma.",
  },
  {
    icon: <Clock size={22} />,
    title: "Alertas de vencimiento y cumplimiento",
    desc: "Shield AI rastrea vencimientos de inspecciones, renovaciones de certificaciones, fechas de entrega de planes correctivos y plazos regulatorios. Las alertas llegan antes de que sea tarde.",
  },
  {
    icon: <Users size={22} />,
    title: "Firma dual con valor legal",
    desc: "Cada documento crítico requiere firma del responsable del SG-SST y del representante legal de la empresa, conforme al régimen de firma electrónica colombiano (Decreto 2364/2012).",
  },
  {
    icon: <Lock size={22} />,
    title: "Retención documental 20 años",
    desc: "Ciclo 7/21/60: documentos activos accesibles en línea, archivo a mediano plazo y retención de largo plazo para obligaciones legales. Todo con trazabilidad forense inalterable.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Tablero de estado en tiempo real",
    desc: "Vista de cumplimiento por proceso, por área y por fecha. El responsable sabe en todo momento cuál es el porcentaje de cumplimiento de la empresa contra la Res. 0312.",
  },
];

const segments = [
  {
    icon: <Building2 size={20} />,
    name: "PyME de 11–50 trabajadores",
    desc: "Estándar II: 21 estándares mínimos. Shield AI cubre la totalidad del ciclo documental.",
  },
  {
    icon: <Building2 size={20} />,
    name: "Mediana empresa 51–200 trabajadores",
    desc: "Estándar III: 60 estándares. Módulo de auditoría interna y plan de mejoramiento incluido.",
  },
  {
    icon: <Building2 size={20} />,
    name: "Empresa de clase de riesgo I y II",
    desc: "Estándar I (7 estándares). Onboarding en una jornada laboral.",
  },
];

export const ShieldAI = () => {
  return (
    <section
      id="shield-ai"
      aria-labelledby="shieldai-heading"
      className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* JSON-LD movido a app/shield-ai/page.tsx (Server Component) para poder recibir nonce */}

      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-2 text-violet-400 text-xs font-bold tracking-widest uppercase">
            <Brain size={20} aria-hidden="true" />
            SG-SST con IA para toda empresa colombiana
          </p>
          <h2
            id="shieldai-heading"
            className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-6xl"
            itemProp="name"
          >
            Shield AI:{" "}
            <span className="text-violet-400">
              cumplimiento SG-SST sin depender de un consultor externo.
            </span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-slate-400" itemProp="description">
            La Res. 0312 obliga a toda empresa colombiana — desde 1 trabajador. Shield AI detecta las
            brechas, genera la evidencia documental requerida y alerta antes de que venzan los plazos.
            El responsable del SG-SST y el representante legal revisan y firman. Nosotros no firmamos
            por nadie.
          </p>
          <div className="flex items-center gap-3 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 text-sm text-slate-300">
            <CheckCircle2 size={18} className="shrink-0 text-violet-400" />
            <span>
              Diferencia vs Veriwork: Shield AI es para el cumplimiento del <strong className="text-white">SG-SST de la empresa</strong> (toda organización). Veriwork es para la <strong className="text-white">operación HSE en campo</strong> (contratistas de riesgo alto).
            </span>
          </div>
        </motion.div>

        {/* Grid de features */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7"
            >
              <div className="mb-4 inline-block rounded-lg bg-violet-500/10 p-2 text-violet-400">
                {f.icon}
              </div>
              <h3 className="mb-2 font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Régimen documental */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid items-center gap-12 md:grid-cols-2"
        >
          <div>
            <p className="mb-2 text-xs font-bold tracking-widest text-violet-400 uppercase">
              Régimen documental 7 / 21 / 60
            </p>
            <h3 className="mb-4 text-3xl font-bold text-white">
              Retención de 20 años — sin buscar en carpetas físicas
            </h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              La normativa colombiana exige conservar evidencia del SG-SST por periodos extensos.
              Shield AI gestiona tres ciclos:
            </p>
            <ul className="space-y-4">
              {[
                {
                  label: "7 años",
                  desc: "Documentos activos accesibles en línea para auditorías inmediatas",
                },
                {
                  label: "21 años",
                  desc: "Archivo histórico de incidentes, investigaciones y planes correctivos",
                },
                {
                  label: "60 años",
                  desc: "Retención máxima para enfermedades laborales de manifestación tardía",
                },
              ].map(({ label, desc }) => (
                <li key={label} className="flex gap-4">
                  <span className="shrink-0 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-sm font-bold text-violet-400">
                    {label}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Segmentos de empresa cubiertos
            </p>
            {segments.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
              >
                <div className="mb-2 flex items-center gap-2 font-bold text-white">
                  <span className="text-violet-400">{s.icon}</span>
                  {s.name}
                </div>
                <p className="text-xs leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-violet-600/10 p-12 text-center"
        >
          <div
            className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500"
            aria-hidden="true"
          />
          <h3 className="mb-4 text-3xl font-bold text-white">
            ¿Tu empresa ya cumple con la Res. 0312?
          </h3>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Shield AI hace el diagnóstico en menos de 30 minutos.{" "}
            <strong className="text-white">Sin consultores. Sin burocracia.</strong>
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ContactModal>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-10 py-4 font-bold text-white shadow-lg shadow-violet-900/50 transition hover:bg-violet-500"
              >
                Solicitar diagnóstico gratuito <ArrowRight size={20} />
              </button>
            </ContactModal>
            <a
              href="/shield-ai"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-violet-400"
            >
              Ver página completa →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
