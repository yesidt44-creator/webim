"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const SafetyOnCta = () => (
  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
    <ContactModal>
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl bg-emerald-600 px-10 py-4 font-bold text-white shadow-lg shadow-emerald-900/50 transition hover:bg-emerald-500"
      >
        Agendar Auditoría de Viabilidad HSE <ArrowRight size={20} />
      </button>
    </ContactModal>
    <a
      href="/safety-on"
      className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-emerald-400"
    >
      Ver página completa <ExternalLink size={15} />
    </a>
  </div>
);
