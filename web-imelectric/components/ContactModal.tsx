"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, AlertTriangle, ArrowRight } from "lucide-react";
import { sendWebForm, openMailtoContact } from "@/lib/contactSubmit";

const PRIORITY_LABELS: Record<string, string> = {
  papeleo: "Digitalizar reportes de campo",
  suministros: "Suministro crítico de repuestos",
  electronica: "Mantenimiento electrónico",
  otro: "Otro",
};

export const ContactModal = ({ children }: { children: React.ReactNode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!priority) {
      window.alert("Seleccione una prioridad técnica.");
      return;
    }
    const priorityLabel = PRIORITY_LABELS[priority] || priority;
    setIsSubmitting(true);
    try {
      const result = await sendWebForm({
        formType: "contact",
        fullName,
        company,
        email,
        priority: priorityLabel,
      });

      if (result.status === "sent") {
        window.alert("Solicitud enviada correctamente. Un ingeniero se pondrá en contacto pronto.");
        setOpen(false);
        setFullName("");
        setCompany("");
        setEmail("");
        setPriority("");
      } else if (result.status === "mailto") {
        openMailtoContact(fullName, company, email, priorityLabel);
        window.alert(
          "Se abrirá su aplicación de correo para completar el envío. Si no ocurre, escriba a contacto@imelectric.es o use WhatsApp.",
        );
        setOpen(false);
      } else {
        openMailtoContact(fullName, company, email, priorityLabel);
        window.alert(
          `${result.message}\n\nSe intentó abrir su correo como alternativa. También puede escribirnos por WhatsApp.`,
        );
        setOpen(false);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto border-slate-800 bg-slate-950 p-0 text-slate-50 sm:max-w-[800px] [-webkit-overflow-scrolling:touch]">
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-3 p-6 sm:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold tracking-tight">Hablemos de su operación</DialogTitle>
              <p className="mt-2 text-sm text-slate-400">
                Déjenos sus datos y auditaremos la viabilidad técnica para su planta.
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Nombre completo
                  </label>
                  <Input
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
                  <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Empresa</label>
                  <Input
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
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Correo corporativo
                </label>
                <Input
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
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Prioridad técnica
                </label>
                <Select value={priority} onValueChange={setPriority} required>
                  <SelectTrigger className="min-h-12 bg-slate-900 text-base text-white border-slate-700">
                    <SelectValue placeholder="Seleccione un desafío..." />
                  </SelectTrigger>
                  <SelectContent className="border-slate-700 bg-slate-800 text-white">
                    <SelectItem value="papeleo">Digitalizar reportes de campo</SelectItem>
                    <SelectItem value="suministros">Suministro crítico de repuestos</SelectItem>
                    <SelectItem value="electronica">Mantenimiento electrónico</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 h-12 w-full bg-blue-600 text-base font-bold text-white transition-all hover:bg-blue-700"
              >
                {isSubmitting ? (
                  "Enviando…"
                ) : (
                  <>
                    Solicitar análisis técnico <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
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
