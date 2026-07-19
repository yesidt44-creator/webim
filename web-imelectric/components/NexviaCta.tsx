"use client";

import { ArrowRight } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const NexviaCta = () => (
  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
    <ContactModal product="Nexvia" sourceCta="Solicitar Demo Técnica">
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-4 font-bold text-white shadow-lg shadow-blue-900/50 transition hover:bg-blue-500"
      >
        Solicitar Demo Técnica <ArrowRight size={20} />
      </button>
    </ContactModal>
  </div>
);
