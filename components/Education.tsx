"use client";
import * as Tabs from "@radix-ui/react-tabs";
import {
  BookOpen,
  TrendingUp,
  Activity,
  Network,
  Settings,
  GitBranch,
  ArrowRight,
  Calculator,
  PieChart,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";

export const Education = () => {
  return (
    <section id="excelencia" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16 border-b border-slate-800 pb-8">
        <div className="mb-4 flex items-center gap-3 text-blue-500">
          <BookOpen size={24} />
          <span className="text-xs font-bold tracking-widest uppercase">
            Knowledge Hub: Ingeniería y Normativa
          </span>
        </div>
        <h2 className="mb-6 text-3xl leading-tight font-extrabold md:text-5xl">
          Fundamentos Científicos de <br />
          <span className="text-blue-500">Nuestra Tecnología</span>
        </h2>
        <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
          Nuestras soluciones (FixAI, Safety On, Nexvia) no nacen de la intuición del desarrollo de software. Están
          arquitectadas estrictamente sobre los marcos normativos globales de Confiabilidad y Gestión de Activos. Este
          es nuestro mapa de conocimiento aplicado.
        </p>
      </div>

      <Tabs.Root defaultValue="iso" className="mb-16 flex flex-col gap-8 lg:flex-row">
        <Tabs.List className="hide-scrollbar flex min-w-[280px] gap-2 overflow-x-auto pb-4 lg:flex-col lg:pb-0">
          <TabTrigger value="iso" title="ISO 55001 & Valor" subtitle="Dr. Luigi Amendola" />
          <TabTrigger value="ram" title="Ingeniería RAM" subtitle="Carlos Parra & R. Gulati" />
          <TabTrigger value="rcm" title="LCC, CAPEX & RCM" subtitle="Estrategias Mixtas" />
        </Tabs.List>

        <div className="relative flex-1 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-10">
          <div className="pointer-events-none absolute top-0 right-0 rounded-full bg-blue-500/5 p-32 blur-[120px]"></div>

          <Tabs.Content value="iso" className="animate-in fade-in relative z-10 duration-700">
            <div className="mb-6 flex items-center gap-3">
              <TrendingUp className="text-blue-500" size={28} />
              <h3 className="text-3xl font-bold">Gestión de Activos y Creación de Valor</h3>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <blockquote className="rounded-r-xl border-l-4 border-blue-500 bg-slate-950/50 p-6 italic text-slate-300">
                  &ldquo;La Gestión de Activos no se centra en el activo en sí, sino en el valor que este puede aportar a
                  la organización. Es el paso de un centro de costos a un generador de rentabilidad.&rdquo;
                  <footer className="mt-3 text-sm font-bold text-blue-400 not-italic">
                    — Dr. Luigi Amendola, Ph.D. (ABC de la Gestión de Activos)
                  </footer>
                </blockquote>
                <p className="leading-relaxed text-slate-400">
                  El paradigma tradicional táctico (&quot;reparar lo que se rompe&quot;) está obsoleto. La norma{" "}
                  <strong>ISO 55001</strong> exige una alineación perfecta entre el rendimiento del activo físico y los
                  objetivos financieros estratégicos (Línea de Visión).
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h4 className="mb-4 border-b border-slate-800 pb-2 text-sm font-bold tracking-wider text-white uppercase">
                  Mapa de Aplicación en FixAI
                </h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 shrink-0 text-blue-500" size={16} />
                    <span>
                      <strong>Balance Costo/Riesgo/Desempeño:</strong> Algoritmos que priorizan OTs basados en el
                      impacto financiero de la falla.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 shrink-0 text-blue-500" size={16} />
                    <span>
                      <strong>Hoja de Vida Integral:</strong> Trazabilidad del CAPEX y OPEX unificados por activo para
                      auditorías ISO.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 shrink-0 text-blue-500" size={16} />
                    <span>
                      <strong>Taxonomía Estándar:</strong> Estructuración jerárquica de equipos respetando directrices
                      globales.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="ram" className="animate-in fade-in relative z-10 duration-700">
            <div className="mb-6 flex items-center gap-3">
              <Activity className="text-blue-500" size={28} />
              <h3 className="text-3xl font-bold">Ingeniería RAM & KPIs de Confiabilidad</h3>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <blockquote className="rounded-r-xl border-l-4 border-blue-500 bg-slate-950/50 p-6 italic text-slate-300">
                  &ldquo;Alcanzar la excelencia requiere cambiar la cultura de reactiva a proactiva. Sin datos precisos de
                  campo, los modelos probabilísticos de confiabilidad son inútiles.&rdquo;
                  <footer className="mt-3 text-sm font-bold text-blue-400 not-italic">
                    — Ramesh Gulati & Carlos Parra (Ingeniería de Mantenimiento)
                  </footer>
                </blockquote>
                <p className="leading-relaxed text-slate-400">
                  La Disponibilidad es una función de la Confiabilidad (R) y la Mantenibilidad (M). Nuestra suite elimina
                  la fricción en la captura de datos (Offline-first) para alimentar análisis cuantitativos precisos,
                  como las distribuciones de Weibull.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h4 className="mb-4 border-b border-slate-800 pb-2 text-sm font-bold tracking-wider text-white uppercase">
                  Métricas Automatizadas
                </h4>
                <div className="space-y-4">
                  <div className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                    <div className="mb-1 text-sm font-bold text-blue-400">Confiabilidad (MTBF)</div>
                    <code className="rounded bg-emerald-400/10 px-2 py-1 font-mono text-xs text-emerald-400">
                      MTBF = Σ Uptime / Número de Fallas
                    </code>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                    <div className="mb-1 text-sm font-bold text-blue-400">Mantenibilidad (MTTR)</div>
                    <code className="rounded bg-amber-400/10 px-2 py-1 font-mono text-xs text-amber-400">
                      MTTR = Σ Downtime / Número de Reparaciones
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="rcm" className="animate-in fade-in relative z-10 duration-700">
            <div className="mb-6 flex items-center gap-3">
              <Network className="text-blue-500" size={28} />
              <h3 className="text-3xl font-bold">Gestión LCC, CAPEX y Estrategias RCM</h3>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg font-medium leading-relaxed text-white">
                  El 80% del Costo del Ciclo de Vida (LCC) de un activo físico se compromete irreversiblemente en la fase
                  de diseño (CAPEX).
                </p>
                <p className="leading-relaxed text-slate-400">
                  El mantenimiento no comienza al encender la máquina. Comienza en la ingeniería de confiabilidad. Para los
                  activos en operación, implementamos herramientas digitales para auditar estrategias mixtas
                  directamente en el campo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300">
                    ISO 14224
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300">
                    FMEA / FMECA
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300">
                    Árbol de Fallas
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <GitBranch className="absolute top-4 right-4 text-slate-800" size={48} />
                <h4 className="relative z-10 mb-4 border-b border-slate-800 pb-2 text-sm font-bold tracking-wider text-white uppercase">
                  Metodologías Integradas
                </h4>
                <div className="relative z-10 space-y-5">
                  <div>
                    <h5 className="mb-1 flex items-center gap-2 text-sm font-bold text-blue-400">
                      <Settings size={14} /> Mantenimiento Centrado en Confiabilidad (RCM)
                    </h5>
                    <p className="text-xs text-slate-400">
                      FixAI permite digitalizar el contexto operacional y las consecuencias de fallas para determinar la
                      política óptima.
                    </p>
                  </div>
                  <div>
                    <h5 className="mb-1 flex items-center gap-2 text-sm font-bold text-emerald-400">
                      <Settings size={14} /> Análisis de Causa Raíz (RCA)
                    </h5>
                    <p className="text-xs text-slate-400">
                      Recolección de evidencia forense (fotos, variables, firmas) para erradicar defectos crónicos
                      mediante Safety On.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>

      {/* Banner: Ecosistema de Academia y herramientas EAM */}
      <div className="group relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 p-8 shadow-2xl md:p-12">
        <div className="absolute top-0 right-0 rounded-full bg-blue-500/10 p-32 blur-[100px] transition-all duration-700 group-hover:bg-blue-500/20"></div>

        <div className="relative z-10 grid items-center gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-bold tracking-wide text-blue-300">
              ACCESO GRATUITO PARA INGENIEROS
            </div>
            <h3 className="mb-4 text-3xl font-bold text-white">Ecosistema de Academia y Herramientas EAM</h3>
            <p className="mb-6 leading-relaxed text-slate-300">
              Únase a ingenieros que ya aplican marcos globales en planta: calculadoras RAM, matrices de análisis de fallas
              y recursos listos para usar —sin quedarse solo en la teoría.
            </p>
            <div className="mb-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calculator size={16} className="text-blue-400" />
                Calculadoras Weibull y RAM
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <GitBranch size={16} className="text-blue-400" />
                Plantillas Ishikawa (causa raíz)
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FileSpreadsheet size={16} className="text-blue-400" />
                Matrices FMECA / RCM
              </div>
            </div>

            <Link
              href="/academia"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-900/50 transition-all hover:bg-blue-500 group-hover:translate-x-2"
            >
              Ingresar a la Academia <ArrowRight size={18} />
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              Herramientas interactivas en <code className="text-slate-400">/academia</code>. Para demos o cotizaciones,
              use <span className="text-slate-400">Contactar</span> en la barra superior.
            </p>
          </div>

          <div className="hidden grid-cols-2 gap-4 md:col-span-2 md:grid">
            <div className="flex flex-col items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-center transition-colors hover:bg-slate-800">
              <PieChart size={32} className="mb-2 text-blue-400" />
              <span className="text-xs font-bold text-slate-300">Análisis Weibull</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-center transition-colors hover:bg-slate-800">
              <Network size={32} className="mb-2 text-emerald-400" />
              <span className="text-xs font-bold text-slate-300">Árbol de Fallas</span>
            </div>
            <div className="col-span-2 flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-colors hover:bg-slate-800">
              <Activity size={24} className="text-amber-400" />
              <div className="text-left">
                <span className="block text-sm font-bold text-slate-300">Simulador de KPIs</span>
                <span className="block text-xs text-slate-500">Proyecte el impacto del MTBF en su OEE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TabTrigger = ({ value, title, subtitle }: { value: string; title: string; subtitle: string }) => (
  <Tabs.Trigger
    value={value}
    className="group rounded-xl border border-transparent p-4 text-left transition-all hover:bg-slate-800 data-[state=active]:border-blue-500/50 data-[state=active]:bg-blue-600 data-[state=active]:shadow-lg"
  >
    <div className="font-bold text-slate-400 transition-colors group-data-[state=active]:text-white">{title}</div>
    <div className="mt-1 text-xs font-medium text-slate-500 group-data-[state=active]:text-blue-200">{subtitle}</div>
  </Tabs.Trigger>
);
