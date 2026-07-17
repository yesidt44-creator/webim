import {
  Check,
  FileCheck2,
  Radio,
  Shield,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import type { ReactNode } from "react";

type ProductCardProps = {
  className: string;
  headerColor: string;
  icon: ReactNode;
  name: string;
  description: string;
  secondaryDescription?: string;
  iconColor: string;
};

const ProductCard = ({
  className,
  headerColor,
  icon,
  name,
  description,
  secondaryDescription,
  iconColor,
}: ProductCardProps) => (
  <div
    className={`absolute overflow-hidden rounded-[clamp(0.55rem,1.4vw,1rem)] border border-white/20 bg-slate-50 shadow-[0_18px_40px_rgba(0,0,0,0.42)] ${className}`}
  >
    <div
      className="flex h-[29%] items-center justify-center px-3 text-[clamp(0.72rem,1.8vw,1.35rem)] font-extrabold tracking-tight text-white"
      style={{ backgroundColor: headerColor }}
    >
      {name}
    </div>
    <div className="flex h-[71%] items-center gap-[clamp(0.45rem,1.4vw,1rem)] px-[clamp(0.55rem,1.8vw,1.25rem)]">
      <span
        className={`flex size-[clamp(2rem,4.7vw,3.7rem)] shrink-0 items-center justify-center rounded-xl ${iconColor}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <p className="min-w-0 text-[clamp(0.48rem,1.2vw,0.92rem)] leading-[1.12] break-words text-slate-900">
        <strong className="font-extrabold">{description}</strong>
        {secondaryDescription ? (
          <span className="mt-[0.22em] block font-medium text-slate-700">
            {secondaryDescription}
          </span>
        ) : null}
      </p>
    </div>
  </div>
);

const BlueprintPattern = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-[6%] h-[80%] w-[88%] text-cyan-300"
    viewBox="0 0 900 540"
    fill="none"
  >
    <g opacity="0.12" stroke="currentColor" strokeWidth="1.4">
      <path d="M35 80H865V470H35zM70 115H830V435H70z" />
      <path d="M115 435V240h95v195M690 435V200h110v235M250 435V145h150v290M490 435V110h145v325" />
      <path d="M35 350h830M35 285h830M35 220h830M35 155h830" />
      <path d="M115 240l48-58 47 58M690 200l55-70 55 70M490 110l72-48 73 48" />
      <circle cx="325" cy="350" r="34" />
      <circle cx="562" cy="285" r="42" />
      <path d="M291 350h-42v85M359 350h52v85M520 285h-65v150M604 285h54v150" />
      <path strokeDasharray="7 9" d="M25 52h850M25 492h850M12 105v330M888 105v330" />
    </g>
  </svg>
);

const WorkerIcon = () => (
  <svg
    aria-hidden="true"
    className="size-[70%]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.4"
  >
    <path d="M14 20v-2a10 10 0 0 1 20 0v2M11 20h26" />
    <path d="M20 9v7M28 9v7M16 22c.6 6 3.4 10 8 10s7.4-4 8-10" />
    <path d="M17 32 9 36v7h30v-7l-8-4M19 34l5 5 5-5M24 39v4" />
  </svg>
);

export const ProductEcosystemVisual = () => (
  <figure
    aria-label="Ecosistema de productos y servicios de IMELECTRIC"
    className="relative aspect-[16/11] min-w-0 overflow-hidden rounded-[clamp(1rem,3vw,2rem)] border border-white/10 bg-[#0b0e10] shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
    style={{ width: "min(100%, 920px)" }}
  >
    <div
      aria-hidden="true"
      className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.22)_0%,rgba(37,99,235,0.16)_36%,transparent_72%)] blur-2xl"
    />
    <BlueprintPattern />

    <div aria-hidden="true" className="absolute inset-0">
      <svg className="h-full w-full" viewBox="0 0 1000 688" fill="none">
        <g stroke="url(#connector-gradient)" strokeWidth="3" opacity="0.42">
          <path d="M500 270 310 215M500 270l190-55M500 270 290 365M500 270l210 95M500 270v285" />
        </g>
        <defs>
          <linearGradient id="connector-gradient" x1="250" y1="180" x2="750" y2="560">
            <stop stopColor="#38BDF8" />
            <stop offset="0.55" stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <ProductCard
      className="top-[11%] left-[9%] z-20 h-[24%] w-[38%] -rotate-[1.5deg]"
      headerColor="#1E3A8A"
      icon={<TimerReset className="size-[66%]" strokeWidth={1.9} />}
      iconColor="bg-blue-100 text-blue-800"
      name="Fix AI"
      description="Reporte en Minutos"
      secondaryDescription="Cumplimiento y Trazabilidad Total"
    />
    <ProductCard
      className="top-[15%] right-[8%] z-10 h-[24%] w-[38%] rotate-[1.2deg]"
      headerColor="#0F6E56"
      icon={
        <span className="relative block size-[72%]">
          <Shield className="absolute inset-0 size-full" strokeWidth={1.8} />
          <FileCheck2
            className="absolute right-[-8%] bottom-[-5%] size-[54%] rounded-sm bg-emerald-100"
            strokeWidth={2.1}
          />
        </span>
      }
      iconColor="bg-emerald-100 text-emerald-800"
      name="Veriwork"
      description="Blindaje Legal HSE"
      secondaryDescription="Aseguramiento Integral de Permisos"
    />
    <ProductCard
      className="top-[38%] left-[6%] z-10 h-[24%] w-[38%] rotate-[0.8deg]"
      headerColor="#2980B9"
      icon={<Radio className="size-[63%]" strokeWidth={1.8} />}
      iconColor="bg-sky-100 text-sky-700"
      name="Nexvia"
      description="Conectividad Operativa"
    />
    <ProductCard
      className="top-[40%] right-[5%] z-20 h-[24%] w-[38%] -rotate-[1deg]"
      headerColor="#6C3483"
      icon={<ShieldCheck className="size-[63%]" strokeWidth={1.8} />}
      iconColor="bg-violet-100 text-violet-800"
      name="Shield AI"
      description="Seguridad e Integridad"
    />

    <div
      aria-hidden="true"
      className="absolute top-[34%] left-1/2 z-30 flex size-[clamp(3.2rem,8vw,5.2rem)] -translate-x-1/2 items-center justify-center rounded-full border border-cyan-100/50 bg-gradient-to-br from-cyan-200/90 via-teal-400/90 to-blue-700/90 text-white shadow-[0_0_35px_rgba(45,212,191,0.48)] backdrop-blur-md"
    >
      <Check className="size-[68%] drop-shadow-md" strokeWidth={3} />
    </div>

    <div className="absolute top-[66%] left-1/2 z-30 w-[58%] -translate-x-1/2 rounded-full border border-cyan-200/20 bg-slate-950/88 px-[clamp(0.5rem,2.3vw,1.5rem)] py-[clamp(0.3rem,0.8vw,0.55rem)] text-center text-[clamp(0.48rem,1.25vw,0.9rem)] font-semibold leading-tight text-cyan-50 shadow-lg backdrop-blur-md">
      Tecnología propia + ingeniería de campo
    </div>

    <div className="absolute bottom-[6%] left-1/2 z-30 flex h-[19%] w-[48%] -translate-x-1/2 items-center gap-[clamp(0.55rem,1.8vw,1.25rem)] rounded-[clamp(0.65rem,1.6vw,1.05rem)] border-2 border-amber-700 bg-gradient-to-br from-stone-100 to-amber-50 px-[clamp(0.65rem,2vw,1.4rem)] text-stone-900 shadow-[0_18px_45px_rgba(0,0,0,0.48),0_0_24px_rgba(180,83,9,0.18)]">
      <span
        aria-hidden="true"
        className="flex size-[clamp(2.1rem,5.2vw,4rem)] shrink-0 items-center justify-center rounded-xl bg-amber-100 text-[#B45309]"
      >
        <WorkerIcon />
      </span>
      <p className="text-[clamp(0.62rem,1.55vw,1.08rem)] font-extrabold leading-[1.12]">
        Consultoría &amp; Servicios de Ingeniería
      </p>
    </div>
  </figure>
);
