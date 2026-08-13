"use client";

import { motion } from "framer-motion";
import { Brain, UserCheck, Zap, ShieldCheck, Wrench, Truck, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: <Brain size={28} />,
    step: "01",
    heading: "La IA observa y procesa",
    body: "Captura datos del campo, cruza normativas, calcula métricas de confiabilidad, detecta anomalías y organiza la información operativa. Todo lo que consume horas sin requerir criterio.",
  },
  {
    icon: <UserCheck size={28} />,
    step: "02",
    heading: "La persona revisa, aprueba y firma",
    body: "El técnico, el supervisor, el coordinador HSE — la persona competente es quien valida el resultado, toma la decisión y estampa su firma. El sistema nunca actúa en nombre de nadie.",
  },
  {
    icon: <Zap size={28} />,
    step: "03",
    heading: "El registro queda con rastro auditable",
    body: "Una vez firmado, el registro queda asociado a quien lo aprobó y a una marca de tiempo. La cadena de decisión queda documentada: quién aprobó, qué y cuándo. Diseñado para trazabilidad operativa y auditoría.",
  },
];

const products = [
  {
    icon: <Wrench size={20} />,
    name: "Fix AI",
    color: "blue",
    desc: "Control de ejecución del plan de mantenimiento: lo ejecutado frente a lo planeado, en campo y offline. El supervisor cierra y aprueba; Falion asiste bajo control humano.",
  },
  {
    icon: <ShieldCheck size={20} />,
    name: "Veriwork",
    color: "emerald",
    desc: "El sistema analiza el cumplimiento normativo HSE y alerta cuando algo se sale de estándar antes de autorizar la labor. La persona competente revisa y firma.",
  },
  {
    icon: <Truck size={20} />,
    name: "Nexvia",
    color: "blue",
    desc: "Scoring de riesgo del conductor calculado con el acelerómetro del celular. El coordinador ve el marcador y decide si el vehículo puede salir a ruta.",
  },
  {
    icon: <Brain size={20} />,
    name: "Shield AI",
    color: "violet",
    desc: "El sistema detecta brechas en el SG-SST y genera la evidencia documental requerida por la Res. 0312. El responsable la revisa, la completa y la firma.",
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
  emerald: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
  violet: "border-violet-500/30 bg-violet-500/5 text-violet-400",
};

export const AiPhilosophy = () => {
  return (
    <section
      id="como-pensamos-la-ia"
      className="scroll-mt-28 overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
      aria-labelledby="ai-philosophy-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold tracking-widest text-blue-400 uppercase">
            Cómo pensamos la IA en IMELECTRIC
          </p>
          <h2
            id="ai-philosophy-heading"
            className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl"
          >
            La IA hace el trabajo repetitivo.{" "}
            <span className="text-blue-400">Tu equipo sigue tomando las decisiones.</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Nuestro modelo no es &ldquo;la IA reemplaza al experto&rdquo;. Es lo contrario: la IA elimina la parte
            tediosa del trabajo del experto — el reporte manual, la búsqueda en normas, la digitación
            repetitiva — para que ese experto pueda dedicarse a lo único que no se puede automatizar:{" "}
            <strong className="text-slate-200">el juicio, la aprobación y la firma.</strong>
          </p>
        </motion.div>

        {/* Los tres pasos */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-slate-600">{item.step}</span>
                <div className="text-blue-400">{item.icon}</div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{item.heading}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Por qué importa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl border border-blue-500/20 bg-blue-600/5 p-10"
        >
          <h3 className="mb-4 text-2xl font-bold text-white">
            Por qué este principio importa en operaciones industriales
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 leading-relaxed text-slate-400">
                En Oil & Gas, manufactura y transporte, una decisión incorrecta no se deshace con un clic.
                Implica accidentes, multas del Ministerio de Trabajo, demandas laborales y pérdidas operativas.
              </p>
              <p className="leading-relaxed text-slate-400">
                Por eso nuestras plataformas nunca autorizan una labor, no emiten una firma ni toman una
                decisión crítica de forma autónoma.{" "}
                <strong className="text-slate-200">Siempre es la persona quien autoriza, siempre.</strong>
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Fix AI muestra ejecutado vs. planeado · el supervisor cierra y aprueba",
                "Veriwork alerta sobre riesgos · el coord. HSE autoriza",
                "Nexvia calcula el scoring · el despachador decide",
                "Shield AI genera la evidencia · el responsable la firma",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Cómo aplica en cada producto */}
        <div>
          <p className="mb-8 text-xs font-bold tracking-widest text-slate-500 uppercase">
            El principio en acción — producto a producto
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-2xl border p-6 ${colorMap[p.color]}`}
              >
                <div className="mb-3 flex items-center gap-2">
                  {p.icon}
                  <span className="font-bold">{p.name}</span>
                </div>
                <p className="text-xs leading-relaxed opacity-80">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
