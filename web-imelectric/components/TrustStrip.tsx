import Image from "next/image";
import { BadgeCheck, BriefcaseBusiness, Factory, FileCheck2 } from "lucide-react";

const trustItems = [
  {
    icon: <FileCheck2 size={20} />,
    text: "Compatible con el ERP del operador — SAP PM y otros",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    text: "10+ años de experiencia técnica",
  },
  {
    icon: <Factory size={20} />,
    text: "Ingeniería construida para la normativa colombiana, no adaptada de un producto extranjero",
  },
] as const;

export const TrustStrip = () => (
  <section aria-label="Respaldo y experiencia de IMELECTRIC" className="border-y border-slate-800 bg-slate-900/70">
    <div className="mx-auto grid max-w-7xl gap-px bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex min-h-24 items-center gap-3 bg-slate-950 px-5 py-4">
        <Image
          src="/badges/iso-9001-ll-c.png"
          alt="Certificación ISO 9001 — LL-C Certification"
          width={96}
          height={38}
          className="h-auto w-20 shrink-0"
        />
        <div>
          <p className="flex items-center gap-1.5 text-sm font-bold text-white">
            <BadgeCheck size={17} className="text-blue-400" aria-hidden="true" />
            ISO 9001
          </p>
          <p className="mt-1 text-xs text-slate-400">Certificado No. 576091</p>
        </div>
      </div>

      {trustItems.map((item) => (
        <div key={item.text} className="flex min-h-24 items-center gap-3 bg-slate-950 px-5 py-4">
          <span className="shrink-0 text-blue-400" aria-hidden="true">
            {item.icon}
          </span>
          <p className="text-sm font-semibold leading-snug text-slate-300">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);
