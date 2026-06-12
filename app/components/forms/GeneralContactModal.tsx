"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

type GeneralContactModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  source?: string;
  serviceInterest?: string;
  showHelpField?: boolean;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function GeneralContactModal({
  open,
  onClose,
  title = "Te contactamos para ayudarte",
  subtitle = "a invertir y construir patrimonio en Colombia",
  source = "formulario_general",
  serviceInterest = "Contacto general",
  showHelpField = false,
}: GeneralContactModalProps) {
  const submittingRef = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submittingRef.current || isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fieldValue = (name: string) =>
      String(formData.get(name) ?? "").trim();

    const firstname = fieldValue("nombre_completo");
    const email = fieldValue("correo_electronico");
    const phone = fieldValue("telefono");
    const country = fieldValue("pais_residencia");
    const bestCallDay = fieldValue("mejor_dia_llamada");
    const timeSlot = fieldValue("franja_horaria");
    const acceptedPrivacyPolicy = Boolean(formData.get("acepta_politica"));

    if (!firstname || !email || !phone || !country || !bestCallDay || !timeSlot) {
      setSubmitStatus("idle");
      setValidationError("Completa todos los campos obligatorios antes de enviar.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setSubmitStatus("idle");
      setValidationError("Ingresa un correo electrónico válido.");
      return;
    }

    if (!acceptedPrivacyPolicy) {
      setSubmitStatus("idle");
      setValidationError(
        "Debes aceptar la política de tratamiento de datos para continuar.",
      );
      return;
    }

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

    if (!portalId || !formId) {
      setValidationError("");
      setSubmitStatus("error");
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setValidationError("");

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: firstname },
              { name: "email", value: email },
              { name: "phone", value: phone },
              { name: "pais", value: country },
              {
                name: "fecha_para_llamada",
                value: bestCallDay,
              },
              { name: "franja_horaria", value: timeSlot },
              {
                name: "en_que_podemos_ayudarte",
                value: showHelpField
                  ? fieldValue("ayuda_requerida")
                  : serviceInterest,
              },
              {
                name: "acepto_politica_de_tratamiento_de_datos",
                value: acceptedPrivacyPolicy ? "true" : "",
              },
              { name: "servicio_de_interes", value: serviceInterest },
              { name: "origen_del_formulario", value: source },
              {
                name: "titulo_del_modal",
                value: title,
              },
              {
                name: "pagina_de_origen",
                value: window.location.pathname,
              },
              {
                name: "url_de_origen",
                value: window.location.href,
              },
              { name: "fuente_del_formulario", value: "Web Colraices" },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title || window.location.pathname,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("HubSpot submission failed");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-[#0A0A0A]/50 px-4 pt-[90px] md:pt-[110px] lg:pt-[158px]"
      onClick={onClose}
    >
      <div
        className="max-h-[calc(100dvh-106px)] w-full max-w-[600px] overflow-x-hidden overflow-y-auto rounded-bl-none rounded-br-[16px] rounded-tl-[16px] rounded-tr-none bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:max-h-[calc(100dvh-126px)] lg:max-h-[calc(100dvh-174px)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-[134px] bg-[#2A3F77] px-[32px] pt-[38px] text-white">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar formulario"
            className="absolute right-[22px] top-[22px] text-[24px] font-light leading-none text-[#FFC107] transition hover:scale-110"
          >
            ×
          </button>

          <h2 className="text-[24px] font-bold leading-[1.2] tracking-[-0.2px]">
            {title}
          </h2>

          <p className="mt-[14px] text-[15px] font-normal leading-[1.4] text-white/90">
            {subtitle}
          </p>
        </div>

        <form
          className="px-[32px] pb-[34px] pt-[30px]"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="source" value={source} />

          {submitStatus === "success" && (
            <p className="mb-[14px] text-[13px] font-semibold leading-[1.4] text-[#2A3F77]">
              Gracias. Hemos recibido tus datos y te contactaremos pronto.
            </p>
          )}

          {(validationError || submitStatus === "error") && (
            <p className="mb-[14px] text-[13px] font-semibold leading-[1.4] text-[#B42318]">
              {validationError ||
                "No pudimos enviar el formulario. Intenta nuevamente."}
            </p>
          )}

          <div className="grid grid-cols-1 gap-x-[16px] gap-y-[14px] md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#2A3F77]">
                Nombre Completo: *
              </label>
              <input
                name="nombre_completo"
                type="text"
                required
                className="h-[40px] w-full rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#0A0A0A] outline-none transition focus:border-[#2A3F77]"
              />
            </div>

            <div>
              <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#2A3F77]">
                Correo Electrónico: *
              </label>
              <input
                name="correo_electronico"
                type="email"
                required
                className="h-[40px] w-full rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#0A0A0A] outline-none transition focus:border-[#2A3F77]"
              />
            </div>

            <div>
              <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#2A3F77]">
                Teléfono: *
              </label>
              <input
                name="telefono"
                type="tel"
                required
                placeholder="+57 300 123 4567"
                className="h-[40px] w-full rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#0A0A0A] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#2A3F77]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#2A3F77]">
                País de residencia: *
              </label>
              <select
                name="pais_residencia"
                required
                defaultValue=""
                className="h-[40px] w-full rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#0A0A0A] outline-none transition focus:border-[#2A3F77]"
              >
                <option value="" disabled>
                  Selecciona tu país
                </option>
                <option value="Alemania">Alemania</option>
                <option value="Argentina">Argentina</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Brasil">Brasil</option>
                <option value="Bélgica">Bélgica</option>
                <option value="Canadá">Canadá</option>
                <option value="Chile">Chile</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Dinamarca">Dinamarca</option>
                <option value="Ecuador">Ecuador</option>
                <option value="España">España</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Finlandia">Finlandia</option>
                <option value="Francia">Francia</option>
                <option value="Irlanda">Irlanda</option>
                <option value="Italia">Italia</option>
                <option value="México">México</option>
                <option value="Noruega">Noruega</option>
                <option value="Nueva Zelanda">Nueva Zelanda</option>
                <option value="Panamá">Panamá</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Países Bajos">Países Bajos</option>
                <option value="Perú">Perú</option>
                <option value="Portugal">Portugal</option>
                <option value="Reino Unido">Reino Unido</option>
                <option value="Suecia">Suecia</option>
                <option value="Suiza">Suiza</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>

            <div>
              <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#2A3F77]">
                Mejor día para llamarte: *
              </label>
              <input
                name="mejor_dia_llamada"
                type="date"
                required
                className="h-[40px] w-full rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#0A0A0A] outline-none transition focus:border-[#2A3F77]"
              />
            </div>

            <div>
              <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#2A3F77]">
                Franja horaria: *
              </label>
              <select
                name="franja_horaria"
                required
                defaultValue=""
                className="h-[40px] w-full rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#0A0A0A] outline-none transition focus:border-[#2A3F77]"
              >
                <option value="" disabled>
                  Selecciona
                </option>
                <option value="Mañana">Mañana</option>
                <option value="Tarde">Tarde</option>
                <option value="Noche">Noche</option>
              </select>
            </div>

            {showHelpField && (
              <div className="md:col-span-2">
                <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#2A3F77]">
                  ¿En qué podemos ayudarte?: *
                </label>
                <input
                  name="ayuda_requerida"
                  type="text"
                  required
                  className="h-[40px] w-full rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-[14px] text-[#0A0A0A] outline-none transition focus:border-[#2A3F77]"
                />
              </div>
            )}
          </div>

          <label className="mt-[18px] flex items-center justify-center gap-[8px] text-[13px] font-medium leading-none text-[#2A3F77]">
            <input
              name="acepta_politica"
              type="checkbox"
              required
              className="h-[14px] w-[14px] shrink-0 border border-[#D1D5DB]"
            />
            <span>Acepto la política de tratamiento de datos *</span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-[26px] h-[52px] w-full rounded-[8px] bg-[#FFC107] text-[15px] font-bold leading-none text-[#2A3F77] transition hover:bg-[#e9af00]"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}
