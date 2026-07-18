"use client";

import { motion } from "framer-motion";
import { ArrowRight, WifiOff, Brain } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { ProductEcosystemVisual } from "./ProductEcosystemVisual";

export const Hero = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-8 pb-16 sm:gap-10 sm:px-6 md:grid-cols-2 md:gap-12 md:pb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm font-semibold leading-snug text-blue-400 sm:text-base">
          Software industrial con IA para contratistas y operadores en Colombia
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl"
        >
          El software industrial que entiende{" "}
          <span className="text-blue-400">cómo se trabaja en Latinoamérica.</span>
        </motion.h1>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-slate-300">
          Mantenimiento, HSE y SG-SST digitalizados — construido desde Colombia, con la profundidad
          normativa que un producto genérico o adaptado de otro país no tiene.
        </p>
        <p className="mb-8 max-w-xl leading-relaxed text-slate-400">
          Cinco plataformas, un mismo principio: la IA hace el trabajo repetitivo — tu equipo sigue
          revisando, aprobando y firmando.
        </p>
        <div className="flex flex-wrap gap-4">
          <ContactModal>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-700"
            >
              Solicitar demo <ArrowRight size={20} />
            </button>
          </ContactModal>
          <a
            href="#como-pensamos-la-ia"
            className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-6 py-4 font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-blue-300"
          >
            Ver cómo pensamos la IA ↓
          </a>
          <div className="flex flex-wrap items-center gap-4 border-l border-slate-800 pl-4 font-mono text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Brain size={16} className="text-blue-500" />
              Compatible con el ERP del operador
            </div>
            <div className="flex items-center gap-2">
              <WifiOff size={16} className="text-blue-500" />
              OFFLINE-FIRST
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex w-full justify-center md:justify-end"
      >
        <ProductEcosystemVisual />
      </motion.div>
    </section>
  );
};
