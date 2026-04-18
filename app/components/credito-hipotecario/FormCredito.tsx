"use client";

import { useState, useEffect, useRef } from "react";

export default function FormCredito() {
  const [openId, setOpenId] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));
  const close  = ()           => setOpenId(null);

  // ✅ Cierra cualquier dropdown si el click fue fuera del formulario
  useEffect(() => {
    if (!openId) return;
    const handler = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openId]);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="w-full lg:w-[680px] bg-[#FBF8F3] border border-[#0F2D5C]/10 rounded-[32px] p-[40.8px]">
            <p className="text-[16px] text-[#0A0A0A] leading-[24px]">Verificación gratuita</p>
            <h2 className="mt-[8px] text-[25.6px] font-semibold text-[#0F2D5C] leading-[32px]">
              ¿Calificas para crédito?
            </h2>
            <p className="mt-[8px] text-[14px] text-[#475569] leading-[25.4px] max-w-[498.4px]">
              Llena el formulario con tu información básica. En 3–5 días te decimos si calificas,
              cuánto puedes pedir y qué necesitas para avanzar. Sin costo. Sin compromiso.
            </p>

            {/* ✅ ref aquí para detectar clicks fuera */}
            <form ref={formRef} autoComplete="on" className="mt-[40px] space-y-[12px]">

              <Row>
                <Input label="Nombre completo"     placeholder="Tu nombre"         name="name"        autoComplete="name" />
                <Input label="Cédula"              placeholder="12345678"          name="national-id" autoComplete="off" />
              </Row>

              <Row>
                <Input label="Email"               placeholder="tu@email.com"      name="email"       autoComplete="email" type="email" />
                <Input label="Teléfono / WhatsApp" placeholder="+123 567 8900"     name="tel"         autoComplete="tel"   type="tel" />
              </Row>

              <Row>
                <CountrySelectPro
                  id="country"
                  label="País donde resides"
                  name="country"
                  autoComplete="country"
                  isOpen={openId === "country"}
                  onToggle={() => toggle("country")}
                  onClose={close}
                  options={[
                    { label: "Estados Unidos", value: "US" },
                    { label: "España",         value: "ES" },
                    { label: "Italia",         value: "IT" },
                    { label: "Alemania",       value: "DE" },
                    { label: "Francia",        value: "FR" },
                    { label: "Reino Unido",    value: "GB" },
                    { label: "Canadá",         value: "CA" },
                    { label: "Australia",      value: "AU" },
                    { label: "Otro",           value: "XX" },
                  ]}
                />
                <SelectPro
                  id="employment"
                  label="Situación laboral"
                  name="employment-type"
                  autoComplete="off"
                  isOpen={openId === "employment"}
                  onToggle={() => toggle("employment")}
                  onClose={close}
                  options={["Selecciona","Empleado con contrato","Independiente / Emprendedor","Profesional liberal","Otro"]}
                />
              </Row>

              <Row>
                <Input label="Ingreso mensual (USD)"  placeholder="3000"             name="income"      autoComplete="off" type="number" />
                <Input label="¿Cuánto quieres pedir?" placeholder="COP $200.000.000" name="loan-amount" autoComplete="off" />
              </Row>

              <SelectPro
                id="housing"
                label="¿Ya tienes vivienda seleccionada?"
                name="housing-status"
                autoComplete="off"
                isOpen={openId === "housing"}
                onToggle={() => toggle("housing")}
                onClose={close}
                options={[
                  "No, todavía estoy mirando opciones",
                  "Sí, ya tengo una vivienda en mente",
                  "Sí, ya separé con reserva",
                ]}
              />

              <Textarea label="Mensaje adicional (opcional)" />

              <button
                type="submit"
                className="w-full h-[47.6px] rounded-full bg-[#FFC107] text-white text-[14.4px] font-semibold shadow-[0_8px_20px_rgba(255,193,7,0.3)]"
              >
                Enviar y verificar viabilidad →
              </button>

              <p className="text-center text-[11.52px] text-[#94A3B8] leading-[17.3px]">
                Respuesta en 3–5 días hábiles. Sin costo. Sin compromiso.
              </p>
            </form>
          </div>

          <div className="w-full lg:w-[340px] flex flex-col gap-4">
            <InfoCard icon="🔒" title="Información segura"  text="Tus datos están protegidos y solo se usan para la verificación de viabilidad. No los compartimos con terceros." />
            <InfoCard icon="⚡" title="Respuesta rápida"    text="En 3–5 días te decimos si calificas y cuánto puedes pedir. Si hay algo que ajustar, te lo explicamos claro." />
            <InfoCard icon="💯" title="Sin compromiso"      text="Esta verificación no te compromete a nada. Es un primer paso para que sepas si estás listo." />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── HELPERS ─────────────────────────── */

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
      {children}
    </div>
  );
}

function Input({
  label, placeholder, type = "text", name, autoComplete,
}: {
  label: string; placeholder?: string; type?: string; name?: string; autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-[5px]">
      <label className="text-[12px] font-semibold text-[#0F2D5C] tracking-[0.72px]">{label}</label>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="
          h-[44.6px] px-[14px] rounded-[6px]
          border border-[#0F2D5C]/15
          bg-white text-[14px] text-[#0F2D5C]/50
          outline-none [appearance:textfield]
        "
      />
    </div>
  );
}

/* ─── HÍBRIDO país: visual custom + select nativo oculto para autofill ─── */

function CountrySelectPro({
  id, label, name, autoComplete, options = [], isOpen, onToggle, onClose,
}: {
  id: string;
  label: string;
  name: string;
  autoComplete: string;
  options: { label: string; value: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const displayLabel = options.find((o) => o.value === value)?.label ?? "Selecciona";

  // ✅ Cierra si click fue fuera de este dropdown
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <div ref={ref} className="flex flex-col gap-[5px] relative">
      <label className="text-[12px] font-semibold text-[#0F2D5C] tracking-[0.72px]">{label}</label>

      <select
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => { setValue(e.target.value); onClose(); }}
        tabIndex={-1}
        aria-hidden="true"
        style={{ position:"absolute", opacity:0, pointerEvents:"none", width:0, height:0, overflow:"hidden" }}
      >
        <option value="">Selecciona</option>
        {options.map(({ label: l, value: v }) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>

      <div
        onClick={onToggle}
        className="h-[44.6px] px-[14px] flex items-center justify-between rounded-[6px] border border-[#0F2D5C]/15 bg-white cursor-pointer"
      >
        <span className="text-[14px] text-[#0F2D5C]/50">{displayLabel}</span>
        <span className="text-xs text-[#0F2D5C]">▼</span>
      </div>

      {isOpen && (
        <div className="absolute top-[70px] w-full bg-white border border-[#0F2D5C]/15 rounded-[6px] shadow-lg z-50 overflow-hidden">
          {options.map(({ label: l, value: v }) => (
            <div
              key={v}
              onClick={() => { setValue(v); onClose(); }}
              className="px-[14px] py-[10px] text-[14px] text-[#0F2D5C] cursor-pointer hover:bg-[#0F2D5C] hover:text-white transition"
            >
              {l}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Select CUSTOM estándar ─── */

function SelectPro({
  id, label, options = [], name, autoComplete, isOpen, onToggle, onClose,
}: {
  id: string;
  label: string;
  options?: string[];
  name?: string;
  autoComplete?: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const [value, setValue] = useState(options[0]);
  const ref = useRef<HTMLDivElement>(null);

  // ✅ Cierra si click fue fuera de este dropdown
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <div ref={ref} className="flex flex-col gap-[5px] relative">
      <label className="text-[12px] font-semibold text-[#0F2D5C] tracking-[0.72px]">{label}</label>

      <input type="hidden" name={name} autoComplete={autoComplete} value={value} readOnly />

      <div
        onClick={onToggle}
        className="h-[44.6px] px-[14px] flex items-center justify-between rounded-[6px] border border-[#0F2D5C]/15 bg-white cursor-pointer"
      >
        <span className="text-[14px] text-[#0F2D5C]/50">{value}</span>
        <span className="text-xs text-[#0F2D5C]">▼</span>
      </div>

      {isOpen && (
        <div className="absolute top-[70px] w-full bg-white border border-[#0F2D5C]/15 rounded-[6px] shadow-lg z-50 overflow-hidden">
          {options.map((opt, i) => (
            <div
              key={i}
              onClick={() => { setValue(opt); onClose(); }}
              className="px-[14px] py-[10px] text-[14px] text-[#0F2D5C] cursor-pointer hover:bg-[#0F2D5C] hover:text-white transition"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <label className="text-[12px] font-semibold text-[#0F2D5C] tracking-[0.72px]">{label}</label>
      <textarea
        name="message"
        autoComplete="off"
        placeholder="Cuéntanos tu caso o déjanos alguna duda..."
        className="
          h-[86.6px] px-[14px] py-[11px] rounded-[6px]
          border border-[#0F2D5C]/15
          bg-white text-[14px] text-[#0F2D5C]/50
          outline-none resize-none
        "
      />
    </div>
  );
}

function InfoCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="bg-[#FBF8F3] border border-[#0F2D5C]/10 rounded-tl-[16px] rounded-br-[16px] p-[20.8px]">
      <div className="text-[24px]">{icon}</div>
      <h4 className="mt-[10px] text-[15.2px] font-semibold text-[#0F2D5C]">{title}</h4>
      <p className="mt-[8px] text-[13.12px] text-[#475569] leading-[21px]">{text}</p>
    </div>
  );
}