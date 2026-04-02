"use client";

import { ArrowRight } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const FixAICta = () => (
  <ContactModal>
    <button
      type="button"
      className="mx-auto flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-4 font-bold text-white shadow-lg shadow-blue-900/50 transition hover:bg-blue-500"
    >
      Solicitar Demo Técnica <ArrowRight size={20} />
    </button>
  </ContactModal>
);
