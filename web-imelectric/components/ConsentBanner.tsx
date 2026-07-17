"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/consent";

interface Props {
  onConsent: (choice: "accepted" | "rejected") => void;
}

export const ConsentBanner = ({ onConsent }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsent("accepted");
    setVisible(false);
    onConsent("accepted");
  };

  const handleReject = () => {
    setConsent("rejected");
    setVisible(false);
    onConsent("rejected");
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[200] border-t border-slate-800 bg-slate-950/95 px-4 py-5 shadow-2xl backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm sm:rounded-2xl sm:border"
    >
      <p className="mb-1 text-sm font-bold text-white">Este sitio usa cookies</p>
      <p className="mb-4 text-xs leading-relaxed text-slate-400">
        Usamos Google Analytics y Microsoft Clarity para entender cómo se usa el sitio y mejorarlo.
        Ninguna cookie analítica se activa sin tu consentimiento. Puedes cambiar tu preferencia en{" "}
        <Link href="/cookies" className="underline hover:text-slate-200">
          Política de Cookies
        </Link>
        .
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-500"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={handleReject}
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:border-slate-500 hover:text-white"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};
