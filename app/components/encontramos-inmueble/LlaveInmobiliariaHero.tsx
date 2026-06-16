"use client";

import { useState } from "react";
import GeneralContactModal from "../forms/GeneralContactModal";

const paymentSteps = [
  {
    number: "1",
    moment: "Al activar el servicio",
    amount: "US$180",
    desc: "Inicio de búsqueda y asignación del equipo",
  },
  {
    number: "2",
    moment: "Al firmar la promesa de compraventa",
    amount: "US$250",
    desc: "El inmueble fue encontrado y el cliente decide avanzar",
  },
  {
    number: "3",
    moment: "Al escriturar el inmueble",
    amount: "US$170",
    desc: "Cierre exitoso. La llave está en tus manos",
  },
];

export default function LlaveInmobiliariaHero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const goToHowItWorks = () => {
    document.getElementById("como-funciona")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#091D3E] px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
      style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 h-full w-full opacity-100">
          <defs>
            <pattern
              id="li-grid"
              x="0"
              y="0"
              width="58"
              height="58"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 58 0 L 0 0 0 58"
                fill="none"
                stroke="#1A4F9E"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#li-grid)" opacity="0.12" />
        </svg>

        <div className="absolute -right-40 -top-32 h-[360px] w-[360px] rounded-full bg-[#C9900C]/10 blur-[80px] sm:h-[520px] sm:w-[520px] sm:blur-[90px]" />
        <div className="absolute -bottom-32 -left-28 h-[340px] w-[340px] rounded-full bg-[#1A4F9E]/18 blur-[90px] sm:h-[460px] sm:w-[460px] sm:blur-[100px]" />

        {/* LLAVE GRANDE DEL FONDO */}
        <div className="absolute right-[8%] top-[30%] hidden h-[330px] w-[520px] opacity-[0.08] lg:block">
          <svg viewBox="0 0 520 260" fill="none" className="h-full w-full">
            <circle cx="130" cy="130" r="96" stroke="white" strokeWidth="4" />
            <circle cx="130" cy="130" r="60" stroke="white" strokeWidth="3" />
            <circle cx="130" cy="130" r="24" fill="white" fillOpacity="0.12" />
            <rect x="230" y="118" width="185" height="16" rx="8" fill="white" />
            <rect x="340" y="132" width="16" height="42" rx="6" fill="white" />
            <rect x="382" y="132" width="16" height="58" rx="6" fill="white" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1050px] items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="mx-auto w-full max-w-[540px] text-center lg:mx-0 lg:text-left">
          <h1 className="animate-[liFadeUp_.75s_ease-out_both] text-[clamp(44px,13vw,64px)] font-bold leading-[0.96] tracking-[-0.045em] sm:text-[64px] lg:text-[72px]">
            Llave
            <br />
            <em className="font-bold italic text-[#F0B429]">Inmobiliaria</em>
          </h1>

          <div className="mx-auto mt-7 h-[3px] w-[68px] animate-[liFadeUp_.75s_ease-out_.1s_both] rounded-full bg-[#D9A51B] lg:mx-0" />

          <p className="mx-auto mt-6 max-w-[500px] animate-[liFadeUp_.75s_ease-out_.2s_both] text-[15px] font-medium leading-[1.7] text-white/72 sm:text-[17px] lg:mx-0">
            El colombiano que vive afuera no debería desgastarse buscando dónde
            invertir en Colombia. Nosotros buscamos y analizamos los inmuebles
            por ti hasta encontrar el indicado. Tú solo tienes que recibir la
            llave.
          </p>

          <div className="mt-9 flex animate-[liFadeUp_.75s_ease-out_.3s_both] flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="h-[52px] w-full max-w-[320px] rounded-full bg-[linear-gradient(135deg,#D69A12,#F0B429)] px-9 text-[14px] font-bold tracking-[0.02em] text-[#071B39] shadow-[0_14px_34px_rgba(240,180,41,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(240,180,41,0.42)] sm:w-auto sm:max-w-none"
            >
              Empezar ahora
            </button>

            <button
              type="button"
              onClick={goToHowItWorks}
              className="h-[52px] w-full max-w-[320px] rounded-full border border-white/22 bg-transparent px-9 text-[14px] font-bold tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/7 sm:w-auto sm:max-w-none"
            >
              Ver cómo funciona
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative mx-auto w-full max-w-[400px] animate-[liCardIn_.85s_ease-out_.12s_both] lg:mx-0">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.035))] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:rounded-[30px] sm:p-8">
            {/* AMARILLO DIFUMINADO DE LA CARD */}
            <div className="pointer-events-none absolute -left-16 -top-20 h-[210px] w-[210px] rounded-full bg-[#F0B429]/20 blur-[70px] sm:h-[230px] sm:w-[230px]" />
            <div className="pointer-events-none absolute right-[-90px] top-[20px] h-[230px] w-[230px] rounded-full bg-[#1A4F9E]/18 blur-[75px] sm:h-[260px] sm:w-[260px]" />

            <div className="relative z-10">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-white/35 sm:text-[10px] sm:tracking-[0.28em]">
                Inversión total del servicio
              </p>

              <div className="mt-4 flex items-end leading-none">
                <span className="mb-2 mr-1 text-[22px] font-bold text-[#F0B429] sm:text-[24px]">
                  US$
                </span>
                <span className="text-[48px] font-bold tracking-[-0.06em] text-white sm:text-[52px]">
                  600
                </span>
              </div>

              <p className="mt-3 text-[12px] font-semibold leading-relaxed text-white/40">
                Solo pagas a medida que el proceso avanza
              </p>

              <div className="mt-6 space-y-2 sm:mt-7">
                {paymentSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex min-h-[82px] items-center gap-3 rounded-[11px] border border-white/9 bg-white/[0.045] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-white/[0.07] sm:gap-4 sm:px-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9A51B] text-[12px] font-bold text-[#071B39]">
                      {step.number}
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10.5px] font-medium leading-snug text-white/38 sm:text-[11px]">
                        {step.moment}
                      </p>
                      <p className="mt-1 text-[15px] font-bold leading-none text-white">
                        {step.amount}
                      </p>
                      <p className="mt-2 text-[10.5px] font-medium leading-[1.35] text-white/38 sm:text-[11px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-white/9 pt-4 text-center text-[10.5px] font-medium leading-relaxed text-white/32 sm:text-[11.5px]">
                Si no encuentras el inmueble correcto, no sigues pagando
              </div>
            </div>
          </div>
        </div>
      </div>

      <GeneralContactModal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Déjanos tus datos y te contactaremos"
        subtitle="para acompañarte en tu camino hacia tu inmueble en Colombia"
        source="llave_inmobiliaria_hero_empezar_ahora"
        serviceInterest="Llave Inmobiliaria"
        showHelpField={false}
      />

      <style jsx>{`
        @keyframes liFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes liCardIn {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}