"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const FixAICta = () => (
  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
    <ContactModal>
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-4 font-bold text-white shadow-lg shadow-blue-900/50 transition hover:bg-blue-500"
      >
        Solicitar Demo Técnica <ArrowRight size={20} />
      </button>
    </ContactModal>
    <a
      href="/fixai-cmms"
      className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
    >
      Ver página completa <ExternalLink size={15} />
    </a>
  </div>
);
