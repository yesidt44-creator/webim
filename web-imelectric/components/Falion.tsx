"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  Shield,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";
import { ContactModal } from "./ContactModal";
import { FalionRoiCalc } from "./FalionRoiCalc";

const falionJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Falion",
  alternateName: [
    "Falion análisis confiabilidad",
    "Falion RCA industrial",
    "software RCA mantenimiento Colombia",
    "análisis causa raíz automatizado",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Confiabilidad Industrial, RCA, FMECA, Weibull, RAM, CBM",
  operatingSystem: "Web",
  description:
    "Falion asiste el análisis de causa raíz (RCA), FMECA, Weibull, RAM y confiabilidad industrial con los datos reales de los activos del cliente — no con conocimiento genérico. El ingeniero revisa, valida y firma. Falion propone; la decisión siempre es del experto.",
  keywords:
    "Falion RCA industrial, análisis causa raíz Colombia, software confiabilidad industrial, FMECA automatizado, Weibull análisis, RAM confiabilidad, CBM mantenimiento basado condición, LCC costo ciclo vida, PST-IA seguridad funcional, CMMS confiabilidad Colombia",
  provider: {
    "@type": "Organization",
    name: "IMELECTRIC",
    url: "https://imelectric.es",
    areaServed: ["Colombia", "Latinoamérica"],
    knowsAbout: [
      "Análisis de causa raíz RCA",
      "FMECA análisis preventivo",
      "Distribución de Weibull mantenimiento",
      "Confiabilidad RAM industrial",
      "Mantenimiento basado en condición CBM",
      "ISO 14224",
      "GTC-45",
    ],
  },
  featureList: [
    "RCA con árbol de causas basado en historial real de activos",
    "Análisis Weibull con advertencia de baja confianza estadística (guardrails)",
    "FMECA con índice de criticidad",
    "Entregable en Word auditable con trazabilidad normativa (GTC-45, RETIE, ISO 14224, API)",
    "Grounding en datos propios — no en internet",
    "El ingeniero revisa y aprueba; Falion nunca ejecuta cambios automáticamente en el CMMS",
    "8 módulos de análisis: RCA, Weibull, FMECA, RAM, CBM, LCC, PST-IA, Chat RAG",
    "Integración de datos con Fix AI CMMS",
  ],
};

const differentiators = [
  {
    icon: <Brain size={24} />,
    num: "01",
    title: "Dos plantas con el mismo compresor reciben análisis distintos",
    body: "La mayoría de herramientas de IA responden con lo que aprendieron de internet. Falion responde con el historial de fallas real de tus activos, cargado desde Fix AI o desde tus propias fuentes. Dos plantas con el mismo compresor pueden tener patrones de falla completamente distintos según sus condiciones operativas, su historial de mantenimiento y su entorno. Falion usa el historial de cada operación — no el promedio de internet — para construir el análisis.",
  },
  {
    icon: <AlertTriangle size={24} />,
    num: "02",
    title: "Si los datos no alcanzan para una conclusión confiable, Falion te lo dice",
    body: "Ejemplo real de diseño: un activo con clasificación SIL-2 tiene menos de 5 fallas registradas en el historial. Estadísticamente, construir una curva de Weibull con esa muestra produce un resultado falsamente preciso. En ese caso, Falion no genera la curva — genera una advertencia de baja confianza estadística y te indica qué datos adicionales se necesitan antes de que el análisis sea válido para tomar decisiones de mantenimiento. Una herramienta que siempre produce un resultado, aunque los datos no lo justifiquen, no es una herramienta de ingeniería.",
  },
  {
    icon: <FileText size={24} />,
    num: "03",
    title: "El informe sale en Word, con trazabilidad normativa completa",
    body: "El resultado de un análisis de Falion no es una respuesta en pantalla que desaparece al cerrar la pestaña. Es un documento en formato Word estructurado, con árbol de causas trazable al historial del activo, referencias normativas explícitas (GTC-45, RETIE, ISO 14224 y API según el tipo de análisis), nivel de confianza estadística declarado para cada cálculo probabilístico, y campo de observaciones del ingeniero. El supervisor, el cliente o el ente regulador puede auditar el informe sin necesidad de saber que Falion existió en el proceso.",
  },
  {
    icon: <Shield size={24} />,
    num: "04",
    title: "Tú decides. Falion propone.",
    body: "Cuando Falion termina un análisis, el resultado llega al ingeniero para su revisión. Si el análisis recomienda cambiar la frecuencia de mantenimiento preventivo de un activo, esa recomendación aparece como propuesta — no como acción ejecutada. El ingeniero revisa, ajusta si tiene información adicional que el sistema no tenía, y aprueba. Solo después de esa aprobación el cambio puede reflejarse en Fix AI. Este no es un límite técnico. Es un principio de diseño: en mantenimiento industrial, una decisión mal tomada sobre un activo crítico no se deshace con un Ctrl+Z.",
  },
];

const modules = [
  { name: "RCA", cat: "Diagnóstico de fallas" },
  { name: "Weibull", cat: "Análisis probabilístico" },
  { name: "FMECA", cat: "Análisis preventivo" },
  { name: "RAM", cat: "Disponibilidad y confiabilidad" },
  { name: "CBM", cat: "Mantenimiento basado en condición" },
  { name: "LCC", cat: "Costo del ciclo de vida" },
  { name: "PST-IA", cat: "Prueba de seguridad funcional" },
  { name: "Chat RAG", cat: "Consulta documentación técnica propia" },
];

const sectors = [
  "Oil & Gas",
  "Minería",
  "Agroindustria",
  "Palma africana",
  "Alimentos",
  "Subestaciones eléctricas",
  "Manufactura general",
];

const faqItems = [
  {
    q: "¿Qué es el análisis de causa raíz (RCA) y cuándo se usa?",
    a: "El RCA es una metodología reactiva que se activa después de que ocurrió una falla o accidente. Su objetivo es encontrar la causa raíz para evitar que el evento se repita. Falion asiste este proceso con los datos reales del activo y genera el informe auditable — el ingeniero revisa y valida.",
    link: { href: "/academia/rca-rcm-fmea-diferencias", label: "Ver guía completa de RCA, RCM y FMEA →" },
  },
  {
    q: "¿Cómo se calcula el MTBF y el MTTR de un equipo?",
    a: "MTBF (Mean Time Between Failures) es el tiempo promedio entre fallas. MTTR (Mean Time To Repair) es el tiempo promedio de reparación. Disponibilidad = MTBF / (MTBF + MTTR). Falion calcula estos indicadores directamente desde las OTs cerradas en Fix AI.",
    link: { href: "/academia/calculadora-mtbf", label: "Calculadora MTBF/MTTR gratis →" },
  },
  {
    q: "¿Qué diferencia hay entre RCM y FMEA?",
    a: "RCM es estratégico — define la estrategia óptima de mantenimiento para un activo. FMEA es preventivo — identifica qué puede fallar antes de que ocurra. Son complementarios: el FMEA es un input del RCM. Falion asiste el análisis FMECA (con criticidad) como parte de su suite.",
    link: { href: "/academia/rca-rcm-fmea-diferencias", label: "Ver diferencias completas →" },
  },
];

export const Falion = () => {
  return (
    <section
      id="falion"
      aria-labelledby="falion-heading"
      className="overflow-hidden bg-slate-950"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* JSON-LD movido a app/falion/page.tsx (Server Component) para poder recibir nonce */}

      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* ── EL PROBLEMA ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Un RCA completo toma entre 1 y 3 días hábiles.{" "}
              <span className="text-blue-400">Sin datos bien organizados, puede tomar más.</span>
            </h2>
            <p className="mb-4 leading-relaxed text-slate-400">
              Reunir el historial de fallas, cruzarlo con los modos según ISO 14224, estructurar el árbol de causas, calcular los índices de Weibull con los datos que tienes (no con los que querrías tener), redactar el informe en el formato que pide el operador y asegurarte de que las referencias normativas sean correctas.
            </p>
            <p className="leading-relaxed text-slate-400">
              Eso es lo que tarda un equipo competente. Falion no reemplaza ese criterio de ingeniería —{" "}
              <strong className="text-slate-200">lo acelera y lo respalda con los datos propios de tu operación.</strong>
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <p className="mb-2 text-xs font-bold tracking-widest text-slate-500 uppercase">Según fuentes especializadas en confiabilidad industrial</p>
            <div className="mb-4 text-5xl font-extrabold text-blue-400">1–3</div>
            <p className="text-lg font-bold text-white">días hábiles por RCA completo</p>
            <p className="mt-2 text-sm text-slate-400">Un RCA "rápido" de 1–2 horas solo aplica a fallas simples con evidencia ya disponible. Falion compite contra el ciclo real de días que consume un caso completo.</p>
          </div>
        </motion.div>

        {/* ── 4 DIFERENCIADORES ───────────────────────────────────── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
              Por qué Falion da un análisis distinto para cada operación
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl" id="falion-heading">
              Los 4 diferenciadores reales
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-slate-600">{d.num}</span>
                  <div className="text-blue-400">{d.icon}</div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{d.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MÓDULOS + SECTORES ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Lo que hay detrás
          </p>
          <h2 className="mb-2 text-3xl font-bold text-white">
            8 módulos de análisis confirmados. Una base de conocimiento técnico propia. Multisector.
          </h2>
          <p className="mb-10 text-slate-400">
            Falion no es un chatbot de mantenimiento. Es un sistema de análisis de confiabilidad con módulos especializados, cada uno construido para un tipo específico de análisis técnico.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <div key={m.name} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p className="mb-1 font-bold text-blue-400">{m.name}</p>
                <p className="text-xs text-slate-500">{m.cat}</p>
              </div>
            ))}
          </div>
          <p className="mb-8 text-sm text-slate-600 italic">
            ...y más módulos en desarrollo.
          </p>

          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span key={s} className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── FASE DE PRUEBAS ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 rounded-3xl border border-blue-500/20 bg-blue-600/5 p-10"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl bg-blue-500/10 p-3 text-blue-400">
              <FlaskConical size={28} />
            </div>
            <div>
              <p className="mb-2 text-xs font-bold tracking-widest text-blue-400 uppercase">
                Estado actual
              </p>
              <h3 className="mb-3 text-2xl font-bold text-white">
                En pruebas activas con un operador industrial real
              </h3>
              <p className="mb-4 leading-relaxed text-slate-400">
                Falion está actualmente en fase de pruebas de campo con un operador industrial real. Los análisis generados durante esta fase son revisados por el equipo de ingeniería de IMELECTRIC y por los ingenieros del operador antes de ser usados en decisiones operativas.
              </p>
              <p className="text-sm text-slate-400">
                ¿Tu operación quiere participar en la fase de pruebas? El acceso es limitado.
              </p>
              <ContactModal>
                <button
                  type="button"
                  className="mt-4 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
                >
                  Solicitar acceso a la fase de pruebas <ArrowRight size={18} />
                </button>
              </ContactModal>
            </div>
          </div>
        </motion.div>

        {/* ── ROI ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase">ROI</p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Comparación real: 60 segundos vs. días de trabajo distribuido
          </h2>
          <p className="mb-8 max-w-2xl leading-relaxed text-slate-400">
            Según fuentes especializadas en mantenimiento industrial y confiabilidad, un RCA completo (recolección de evidencia, análisis formal y documentación) toma típicamente 1 a 3 días hábiles, no minutos. Falion no compite contra los 90 minutos de un ejercicio de pizarra; compite contra el ciclo real de días que consume un caso completo.
          </p>
          <FalionRoiCalc />
        </motion.div>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-2xl font-bold text-white">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:hidden group-open:text-blue-400">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.a}</p>
                <Link
                  href={item.link.href}
                  className="mt-2 inline-block text-xs font-bold text-blue-400 hover:text-blue-300"
                >
                  {item.link.label}
                </Link>
              </details>
            ))}
          </div>
        </motion.div>

        {/* ── LINKS CRUZADOS ──────────────────────────────────────── */}
        <div className="border-t border-slate-800 pt-12">
          <p className="mb-6 text-center text-sm font-bold tracking-widest text-slate-500 uppercase">
            Relacionado
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/fixai-cmms", label: "Fix AI — CMMS para contratistas" },
              { href: "/academia/rca-rcm-fmea-diferencias", label: "RCA, RCM y FMEA: diferencias" },
              { href: "/academia/calculadora-mtbf", label: "Calculadora MTBF/MTTR gratis" },
              { href: "/academia/cmms-vs-gmao", label: "CMMS vs GMAO" },
              { href: "/academia", label: "Academia Técnica" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
