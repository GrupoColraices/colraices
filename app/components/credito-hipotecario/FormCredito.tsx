"use client";

import { useState } from "react";

export default function FormCredito() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">

        <div className="flex flex-col lg:flex-row gap-16">

          {/* ================= FORM ================= */}
          <div className="w-full lg:w-[680px] bg-[#FBF8F3] border border-[#0F2D5C]/10 rounded-[32px] p-[40.8px]">

            <p className="text-[16px] text-[#0A0A0A] leading-[24px]">
              Verificación gratuita
            </p>

            <h2 className="mt-[8px] text-[25.6px] font-semibold text-[#0F2D5C] leading-[32px]">
              ¿Calificas para crédito?
            </h2>

            <p className="mt-[8px] text-[14px] text-[#475569] leading-[25.4px] max-w-[498.4px]">
              Llena el formulario con tu información básica. En 3–5 días te decimos si calificas, cuánto puedes pedir y qué necesitas para avanzar. Sin costo. Sin compromiso.
            </p>

            <div className="mt-[40px] space-y-[12px]">

              <Row>
                <Input label="Nombre completo" placeholder="Tu nombre" />
                <Input label="Cédula" placeholder="12345678" />
              </Row>

              <Row>
                <Input label="Email" placeholder="tu@email.com" />
                <Input label="Teléfono / WhatsApp" placeholder="+123 567 8900" />
              </Row>

              <Row>
                <SelectPro
                  label="País donde resides"
                  options={[
                    "Selecciona",
                    "Estados Unidos",
                    "España",
                    "Italia",
                    "Alemania",
                    "Francia",
                    "Reino Unido",
                    "Canadá",
                    "Australia",
                    "Otro",
                  ]}
                />

                <SelectPro
                  label="Situación laboral"
                  options={[
                    "Selecciona",
                    "Empleado con contrato",
                    "Independiente / Emprendedor",
                    "Profesional liberal",
                    "Otro",
                  ]}
                />
              </Row>

              <Row>
                <Input label="Ingreso mensual (USD)" placeholder="3" type="number" />
                <Input label="¿Cuánto quieres pedir?" placeholder="COP $200.000.000" />
              </Row>

              <SelectPro
                label="¿Ya tienes vivienda seleccionada?"
                options={[
                  "No, todavía estoy mirando opciones",
                  "Sí, ya tengo una vivienda en mente",
                  "Sí, ya separé con reserva",
                ]}
              />

              <Textarea label="Mensaje adicional (opcional)" />

              <button className="w-full h-[47.6px] rounded-full bg-[#FFC107] text-white text-[14.4px] font-semibold shadow-[0_8px_20px_rgba(255,193,7,0.3)]">
                Enviar y verificar viabilidad →
              </button>

              <p className="text-center text-[11.52px] text-[#94A3B8] leading-[17.3px]">
                Respuesta en 3–5 días hábiles. Sin costo. Sin compromiso.
              </p>

            </div>
          </div>

          {/* ================= SIDE ================= */}
          <div className="w-full lg:w-[340px] flex flex-col gap-4">

            <InfoCard
              icon="🔒"
              title="Información segura"
              text="Tus datos están protegidos y solo se usan para la verificación de viabilidad. No los compartimos con terceros."
            />

            <InfoCard
              icon="⚡"
              title="Respuesta rápida"
              text="En 3–5 días te decimos si calificas y cuánto puedes pedir. Si hay algo que ajustar, te lo explicamos claro."
            />

            <InfoCard
              icon="💯"
              title="Sin compromiso"
              text="Esta verificación no te compromete a nada. Es un primer paso para que sepas si estás listo."
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function Row({ children }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
      {children}
    </div>
  );
}

function Input({ label, placeholder, type = "text" }: any) {
  return (
    <div className="flex flex-col gap-[5px]">
      <label className="text-[12px] font-semibold text-[#0F2D5C] tracking-[0.72px]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-[44.6px]
          px-[14px]
          rounded-[6px]
          border border-[#0F2D5C]/15
          bg-white
          text-[14px]
          text-[#0F2D5C]/50
          outline-none
          [appearance:textfield]
        "
      />
    </div>
  );
}

/* ================= SELECT PRO ================= */

function SelectPro({ label, options = [] }: any) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0]);

  return (
    <div className="flex flex-col gap-[5px] relative">
      <label className="text-[12px] font-semibold text-[#0F2D5C] tracking-[0.72px]">
        {label}
      </label>

      {/* TRIGGER */}
      <div
        onClick={() => setOpen(!open)}
        className="h-[44.6px] px-[14px] flex items-center justify-between rounded-[6px] border border-[#0F2D5C]/15 bg-white cursor-pointer"
      >
        <span className="text-[14px] text-[#0F2D5C]/50">{value}</span>
        <span className="text-xs text-[#0F2D5C]">▼</span>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-[70px] w-full bg-white border border-[#0F2D5C]/15 rounded-[6px] shadow-lg z-50 overflow-hidden">
          {options.map((opt: string, i: number) => (
            <div
              key={i}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              className="
                px-[14px] py-[10px]
                text-[14px]
                text-[#0F2D5C]
                cursor-pointer
                hover:bg-[#0F2D5C]
                hover:text-white
                transition
              "
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Textarea({ label }: any) {
  return (
    <div className="flex flex-col gap-[5px]">
      <label className="text-[12px] font-semibold text-[#0F2D5C] tracking-[0.72px]">
        {label}
      </label>

      <textarea
        placeholder="Cuéntanos tu caso o déjanos alguna duda..."
        className="
          h-[86.6px]
          px-[14px]
          py-[11px]
          rounded-[6px]
          border border-[#0F2D5C]/15
          bg-white
          text-[14px]
          text-[#0F2D5C]/50
          outline-none
          resize-none
        "
      />
    </div>
  );
}

function InfoCard({ icon, title, text }: any) {
  return (
    <div className="bg-[#FBF8F3] border border-[#0F2D5C]/10 rounded-[16px] p-[20.8px]">
      <div className="text-[24px] text-[#0A0A0A]">{icon}</div>
      <h4 className="mt-[10px] text-[15.2px] font-semibold text-[#0F2D5C]">
        {title}
      </h4>
      <p className="mt-[8px] text-[13.12px] text-[#475569] leading-[21px]">
        {text}
      </p>
    </div>
  );
}