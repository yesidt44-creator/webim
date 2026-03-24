"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, WifiOff, Brain } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const Hero = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-8 pb-16 sm:gap-10 sm:px-6 md:grid-cols-2 md:gap-12 md:pb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm font-semibold leading-snug text-blue-400 sm:text-base">
          Inteligencia industrial para operaciones que no se detienen
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="text-blue-500">IA</span> en planta,{" "}
          <span className="text-blue-400">sin depender de la red</span>.
        </h1>
        <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-400">
          El primer CMMS con IA diseñado específicamente para el trabajo de campo en upstream oil &amp; gas
          latinoamericano. Digitaliza completamente la gestión de órdenes de trabajo, activos y mantenimiento
          preventivo — funciona sin internet, donde los sistemas complejos fallan.
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
          <div className="flex flex-wrap items-center gap-4 border-l border-slate-800 pl-4 font-mono text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Brain size={16} className="text-blue-500" />
              IA aplicada a activos
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
        {/* Móvil: dvh + ancho tipo “teléfono” evita barras de URL y lectura UI; desktop: más alto */}
        <div className="flex w-full max-w-full justify-center rounded-3xl border border-slate-800 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 p-2 shadow-2xl backdrop-blur-3xl sm:p-3 md:inline-flex md:w-auto md:p-4">
          <Image
            src="/fixai-cmms-app.png"
            alt="FixAI CMMS: Mis OT — suite IMELECTRIC con IA y órdenes de trabajo en campo"
            width={587}
            height={1024}
            priority
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
            className="mx-auto h-auto w-auto max-w-[min(100%,17.5rem)] rounded-2xl border border-slate-700 object-contain shadow-inner max-sm:max-h-[min(52dvh,28rem)] sm:max-w-[min(100%,20rem)] sm:max-h-[min(58dvh,32rem)] md:max-h-[min(80dvh,720px)] md:max-w-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
