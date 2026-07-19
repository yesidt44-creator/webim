"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, AlertTriangle, ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";
import { sendWebForm, openMailtoContact } from "@/lib/contactSubmit";

export const CONTACT_PRODUCTS = [
  "Fix AI",
  "Veriwork",
  "Nexvia",
  "Shield AI",
  "Falion",
  "Consultoría en mantenimiento",
] as const;

export type ContactProduct = (typeof CONTACT_PRODUCTS)[number];

type ContactCopy = {
  title: string;
  subtitle: string;
  submitLabel: string;
};

const GENERIC_COPY: ContactCopy = {
  title: "Hablemos de su operación",
  subtitle: "Déjenos sus datos y auditaremos la viabilidad técnica para su planta.",
  submitLabel: "Solicitar Análisis Técnico",
};

const PRODUCT_COPY: Record<ContactProduct, ContactCopy> = {
  "Fix AI": {
    title: "Solicitar demo de Fix AI",
    subtitle: "Cuéntenos de su operación de mantenimiento y le mostramos Fix AI en acción.",
    submitLabel: "Solicitar Demo Técnica",
  },
  Veriwork: {
    title: "Agendar asesoría — Veriwork",
    subtitle:
      "Cuéntenos sobre su operación HSE y evaluamos cómo Veriwork puede blindar sus permisos de trabajo.",
    submitLabel: "Agendar Asesoría Personalizada",
  },
  Nexvia: {
    title: "Solicitar demo de Nexvia",
    subtitle: "Cuéntenos sobre su flota y le mostramos cómo Nexvia la mantiene bajo control, incluso sin señal.",
    submitLabel: "Solicitar Demo Técnica",
  },
  "Shield AI": {
    title: "Solicitar diagnóstico — Shield AI",
    subtitle: "Cuéntenos el tamaño y riesgo de su empresa y le indicamos su régimen SG-SST aplicable.",
    submitLabel: "Solicitar Diagnóstico Gratuito",
  },
  Falion: {
    title: "Acceso a la fase de pruebas — Falion",
    subtitle: "Cuéntenos sobre sus activos y evaluamos si hay ajuste técnico para la fase de pruebas.",
    submitLabel: "Solicitar Acceso",
  },
  "Consultoría en mantenimiento": {
    title: "Agendar Asesoría — Consultoría en Mantenimiento",
    subtitle: "Cuéntenos el estado actual de su operación y diseñamos el primer diagnóstico.",
    submitLabel: "Agendar Asesoría",
  },
};

type ContactModalProps = {
  children: React.ReactNode;
  product?: ContactProduct;
  sourceCta: string;
};

type SubmitFeedback =
  | { status: "idle"; message: "" }
  | { status: "success" | "error" | "mailto"; message: string };

export const ContactModal = ({ children, product, sourceCta }: ContactModalProps) => {
  const pathname = usePathname();
  const fieldId = useId();
  const fullNameId = `${fieldId}-full-name`;
  const companyId = `${fieldId}-company`;
  const emailId = `${fieldId}-email`;
  const phoneId = `${fieldId}-phone`;
  const productLabelId = `${fieldId}-product-label`;
  const messageId = `${fieldId}-message`;
  const consentId = `${fieldId}-consent`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ContactProduct | "">(product ?? "");
  const [authorized, setAuthorized] = useState(false);
  const [feedback, setFeedback] = useState<SubmitFeedback>({ status: "idle", message: "" });
  const modalCopy = selectedProduct ? PRODUCT_COPY[selectedProduct] : GENERIC_COPY;

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) {
      setSelectedProduct(product ?? "");
      setFeedback({ status: "idle", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedProduct) {
      setFeedback({ status: "error", message: "Seleccione un producto o servicio para continuar." });
      return;
    }
    if (!authorized) {
      setFeedback({
        status: "error",
        message: "Debe autorizar el tratamiento de sus datos personales para continuar.",
      });
      return;
    }
    // Read honeypot from the raw form — not from React state (bots fill DOM inputs)
    const hpValue = String(new FormData(e.currentTarget).get("_hp") ?? "");
    setIsSubmitting(true);
    setFeedback({ status: "idle", message: "" });
    try {
      const result = await sendWebForm({
        formType: "contact",
        fullName,
        company,
        email,
        phone: phone.trim() || undefined,
        message: message.trim() || undefined,
        product: selectedProduct,
        sourcePage: pathname || "/",
        sourceCta,
        consent: authorized,
        _hp: hpValue,
      });

      if (result.status === "sent") {
        setFeedback({
          status: "success",
          message: "Solicitud enviada correctamente. Un ingeniero se pondrá en contacto.",
        });
      } else if (result.status === "mailto") {
        setFeedback({
          status: "mailto",
          message:
            "El envío automático no está disponible. Abre tu aplicación de correo y pulsa Enviar allí para completar la solicitud.",
        });
      } else {
        setFeedback({ status: "error", message: result.message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto border-slate-800 bg-slate-950 p-0 text-slate-50 sm:max-w-[800px] [-webkit-overflow-scrolling:touch]">
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-3 p-6 sm:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold tracking-tight">{modalCopy.title}</DialogTitle>
              <p className="mt-2 text-sm text-slate-400">{modalCopy.subtitle}</p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — hidden from real users, bots fill it, server rejects silently */}
              <input
                type="text"
                name="_hp"
                defaultValue=""
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: "absolute", opacity: 0, left: "-9999px", width: 0, height: 0 }}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor={fullNameId}
                    className="text-xs font-semibold tracking-wider text-slate-400 uppercase"
                  >
                    Nombre completo
                  </label>
                  <Input
                    id={fullNameId}
                    required
                    name="fullName"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ing. Carlos Pérez"
                    className="min-h-12 bg-slate-900 text-base text-white border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor={companyId}
                    className="text-xs font-semibold tracking-wider text-slate-400 uppercase"
                  >
                    Empresa
                  </label>
                  <Input
                    id={companyId}
                    required
                    name="company"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Industrias XYZ"
                    className="min-h-12 bg-slate-900 text-base text-white border-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={emailId}
                  className="text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Correo corporativo
                </label>
                <Input
                  id={emailId}
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="carlos@empresa.com"
                  className="min-h-12 bg-slate-900 text-base text-white border-slate-700"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={phoneId}
                  className="text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Teléfono <span className="normal-case tracking-normal text-slate-600">(opcional)</span>
                </label>
                <Input
                  id={phoneId}
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+57 300 000 0000"
                  className="min-h-12 bg-slate-900 text-base text-white border-slate-700"
                />
              </div>

              <div className="space-y-2">
                <label
                  id={productLabelId}
                  className="text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Producto o servicio
                </label>
                <Select
                  value={selectedProduct}
                  onValueChange={(value) => setSelectedProduct(value as ContactProduct)}
                  required
                >
                  <SelectTrigger
                    aria-labelledby={productLabelId}
                    className="min-h-12 bg-slate-900 text-base text-white border-slate-700"
                  >
                    <SelectValue placeholder="Seleccione una opción..." />
                  </SelectTrigger>
                  <SelectContent className="border-slate-700 bg-slate-800 text-white">
                    {CONTACT_PRODUCTS.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={messageId}
                  className="text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Mensaje <span className="normal-case tracking-normal text-slate-600">(opcional)</span>
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contexto breve de su operación o necesidad…"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-base text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <label
                htmlFor={consentId}
                className="flex items-start gap-3 pt-1 text-xs leading-relaxed text-slate-400"
              >
                <input
                  id={consentId}
                  type="checkbox"
                  name="consent"
                  required
                  checked={authorized}
                  onChange={(e) => setAuthorized(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-600 bg-slate-900 accent-blue-600"
                />
                <span>
                  Autorizo el tratamiento de mis datos personales conforme a la{" "}
                  <Link href="/privacidad" target="_blank" className="text-blue-400 underline hover:text-blue-300">
                    Política de Tratamiento de Datos
                  </Link>
                  .
                </span>
              </label>

              <Button
                type="submit"
                disabled={isSubmitting || feedback.status === "success"}
                className="mt-4 h-12 w-full bg-blue-600 text-base font-bold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Enviando…"
                ) : feedback.status === "success" ? (
                  "Solicitud enviada"
                ) : feedback.status === "error" || feedback.status === "mailto" ? (
                  "Reintentar envío"
                ) : (
                  <>
                    {modalCopy.submitLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {feedback.status !== "idle" ? (
                <div
                  role={feedback.status === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`rounded-xl border p-3 text-sm ${
                    feedback.status === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                      : feedback.status === "mailto"
                        ? "border-amber-500/30 bg-amber-500/10 text-amber-100"
                        : "border-red-500/30 bg-red-500/10 text-red-200"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {feedback.status === "success" ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                    <p>{feedback.message}</p>
                  </div>
                  {feedback.status === "mailto" && selectedProduct ? (
                    <button
                      type="button"
                      onClick={() =>
                        openMailtoContact({
                          fullName,
                          company,
                          email,
                          phone,
                          message,
                          product: selectedProduct,
                          sourcePage: pathname || "/",
                          sourceCta,
                        })
                      }
                      className="mt-3 rounded-lg border border-amber-400/40 px-3 py-2 font-semibold text-amber-100 transition hover:bg-amber-500/10"
                    >
                      Abrir mi correo para completar el envío
                    </button>
                  ) : null}
                </div>
              ) : null}

              <p className="text-center text-xs text-slate-500">
                Usaremos estos datos únicamente para responder tu solicitud.{" "}
                <Link href="/privacidad" target="_blank" className="text-slate-400 underline hover:text-slate-300">
                  Más información
                </Link>
                .
              </p>
            </form>
          </div>

          <div className="flex flex-col justify-center border-t border-slate-800 bg-slate-900 p-6 sm:p-8 md:border-t-0 md:border-l">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
              <AlertTriangle size={24} />
            </div>
            <h3 className="mb-3 text-xl font-bold">¿Emergencia en planta?</h3>
            <p className="mb-8 text-sm leading-relaxed text-slate-400">
              Si tiene un equipo detenido, omita el formulario y contáctenos directamente.
            </p>

            <a
              href="https://wa.me/573026002877?text=Hola%20IMELECTRIC,%20necesito%20soporte%20técnico%20urgente"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 min-h-[48px] w-full items-center justify-center rounded-md bg-green-600 text-base font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Mail size={14} />
              <a href="mailto:contacto@imelectric.es" className="underline hover:text-slate-300">
                contacto@imelectric.es
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
