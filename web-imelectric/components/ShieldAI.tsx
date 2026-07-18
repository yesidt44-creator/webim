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
  BadgeCheck,
  Leaf,
  Database,
} from "lucide-react";
import { ContactModal } from "./ContactModal";

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
    desc: "Diseñado para soportar la conservación mínima de 20 años exigida por el Decreto 1072 (Art. 2.2.4.6.13) para documentos clave del SG-SST, con trazabilidad que permite detectar alteraciones.",
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
    name: "1–10 trabajadores · riesgo I, II o III",
    desc: "Estándar I: 7 estándares mínimos (Art. 3). Onboarding en una jornada laboral.",
  },
  {
    icon: <Building2 size={20} />,
    name: "11–50 trabajadores · riesgo I, II o III",
    desc: "Estándar II: 21 estándares mínimos (Art. 9). Shield AI cubre el ciclo documental completo.",
  },
  {
    icon: <Building2 size={20} />,
    name: "Más de 50 trabajadores · o riesgo IV/V",
    desc: "Estándar III: 60 estándares (Arts. 8, 15 y 16). Incluye auditoría interna y plan de mejoramiento.",
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
          <p className="mb-6 border-l-2 border-violet-500 pl-4 text-sm leading-relaxed text-slate-300">
            A diferencia de plataformas genéricas de SST adaptadas de otros países, Shield AI nace
            de la Resolución 0312 y del Decreto 1072 para el contexto empresarial colombiano.
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
              Decreto 1072 · Art. 2.2.4.6.13
            </p>
            <h3 className="mb-4 text-3xl font-bold text-white">
              Retención mínima de 20 años — sin buscar en carpetas físicas
            </h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              El Decreto 1072 exige conservar por al menos 20 años (desde el cese de la relación laboral)
              documentos clave del SG-SST. Shield AI está diseñado para soportar esa obligación:
            </p>
            <ul className="space-y-4">
              {[
                {
                  label: "20 años",
                  desc: "Mínimo legal para perfiles epidemiológicos, exámenes médicos, mediciones de ambiente, capacitaciones y EPP",
                },
                {
                  label: "Tabla propia",
                  desc: "Para el resto de registros, el empleador define su retención documental; Shield AI la soporta",
                },
                {
                  label: "Trazabilidad",
                  desc: "Diseñado para que la evidencia no pueda modificarse sin dejar rastro auditable",
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

        {/* Ruta hacia un Sistema de Gestión Integrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-10"
        >
          <h2 className="mb-5 text-3xl font-bold text-white">
            De cumplir la norma a certificarse: la ruta hacia el SGI
          </h2>
          <p className="leading-relaxed text-slate-400">
            Shield AI resuelve la obligación legal del SG-SST — pero para muchas empresas, cumplir la
            Resolución 0312 es también el primer paso hacia algo más amplio: un Sistema de Gestión
            Integrado (SGI). La arquitectura de Shield AI comparte la misma Estructura de Alto Nivel (HLS)
            que exigen ISO 9001 (calidad), ISO 14001 (ambiental), ISO 45001 (seguridad y salud) e ISO
            27001 (seguridad de la información). Esto significa que una empresa puede empezar solo con
            SG-SST y, cuando licitaciones (SECOP), un cliente exigente o la necesidad de exportar lo
            requieran, activar los demás módulos sin rediseñar el sistema ni duplicar trabajo documental.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: <BadgeCheck size={22} />,
                title: "ISO 9001 · Calidad",
                desc: "Gestión de calidad de procesos y satisfacción del cliente.",
              },
              {
                icon: <Leaf size={22} />,
                title: "ISO 14001 · Ambiental",
                desc: "Gestión de impacto ambiental de la operación.",
              },
              {
                icon: <Database size={22} />,
                title: "ISO 27001 · Seguridad de la información",
                desc: "Protección de datos y activos digitales.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">
                <div className="mb-3 text-violet-400" aria-hidden="true">{icon}</div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
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
