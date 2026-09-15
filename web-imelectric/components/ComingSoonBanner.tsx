import { FlaskConical } from "lucide-react";

export const ComingSoonBanner = ({ product }: { product: string }) => (
  <div className="mx-auto mb-10 flex max-w-3xl items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-sm text-amber-300">
    <FlaskConical size={18} className="shrink-0" />
    <p>
      <strong className="font-bold">{product} está en desarrollo.</strong> Lo que ves a continuación es la
      dirección del producto; hoy puedes agendar una demo de{" "}
      <a href="/fixai-cmms" className="underline underline-offset-2 hover:text-amber-200">
        Fix AI
      </a>
      , nuestra plataforma disponible.
    </p>
  </div>
);
