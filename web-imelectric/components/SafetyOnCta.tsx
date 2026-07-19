"use client";

import { ArrowRight } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const SafetyOnCta = () => (
  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
    <ContactModal product="Veriwork" sourceCta="Agendar Asesoría Personalizada">
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl bg-emerald-600 px-10 py-4 font-bold text-white shadow-lg shadow-emerald-900/50 transition hover:bg-emerald-500"
      >
        Agendar Asesoría Personalizada <ArrowRight size={20} />
      </button>
    </ContactModal>
  </div>
);
