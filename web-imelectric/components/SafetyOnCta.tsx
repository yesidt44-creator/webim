"use client";

import { ArrowRight } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const SafetyOnCta = () => (
  <ContactModal>
    <button
      type="button"
      className="mx-auto flex items-center gap-2 rounded-xl bg-emerald-600 px-10 py-4 font-bold text-white shadow-lg shadow-emerald-900/50 transition hover:bg-emerald-500"
    >
      Agendar Auditoría de Viabilidad HSE <ArrowRight size={20} />
    </button>
  </ContactModal>
);
