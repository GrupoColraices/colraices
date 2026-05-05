"use client";

import React from "react";

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
  const goToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToHowItWorks = () => {
    document.getElementById("como-funciona")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#091D3E] px-5 py-24 text-white sm:px-8 lg:px-12"
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

        <div className="absolute -right-32 -top-28 h-[520px] w-[520px] rounded-full bg-[#C9900C]/10 blur-[90px]" />
        <div className="absolute -bottom-28 -left-20 h-[460px] w-[460px] rounded-full bg-[#1A4F9E]/18 blur-[100px]" />

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

      <div className="relative z-10 mx-auto grid w-full max-w-[1050px] items-center gap-16 lg:grid-cols-[1fr_0.92fr]">
        {/* LEFT CONTENT */}
        <div className="mx-auto w-full max-w-[520px] text-center lg:mx-0 lg:text-left">
          <h1 className="animate-[liFadeUp_.75s_ease-out_both] text-[48px] font-bold leading-[0.96] tracking-[-0.04em] sm:text-[64px] lg:text-[72px]">
            Llave
            <br />
            <em className="font-bold italic text-[#F0B429]">Inmobiliaria</em>
          </h1>

          <div className="mx-auto mt-8 h-[3px] w-[68px] animate-[liFadeUp_.75s_ease-out_.1s_both] rounded-full bg-[#D9A51B] lg:mx-0" />

          <p className="mt-7 animate-[liFadeUp_.75s_ease-out_.2s_both] text-[16px] font-medium leading-[1.75] text-white/72 sm:text-[17px]">
            El colombiano que vive afuera no debería desgastarse buscando dónde
            invertir en Colombia. Nosotros buscamos y analizamos los inmuebles
            por ti hasta encontrar el indicado. Tú solo tienes que recibir la
            llave.
          </p>

          <div className="mt-10 flex animate-[liFadeUp_.75s_ease-out_.3s_both] flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={goToContact}
              className="h-[52px] w-full rounded-full bg-[linear-gradient(135deg,#D69A12,#F0B429)] px-9 text-[14px] font-bold tracking-[0.02em] text-[#071B39] shadow-[0_14px_34px_rgba(240,180,41,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(240,180,41,0.42)] sm:w-auto"
            >
              Empezar ahora
            </button>

            <button
              type="button"
              onClick={goToHowItWorks}
              className="h-[52px] w-full rounded-full border border-white/22 bg-transparent px-9 text-[14px] font-bold tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/7 sm:w-auto"
            >
              Ver cómo funciona
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative mx-auto w-full max-w-[400px] animate-[liCardIn_.85s_ease-out_.12s_both] lg:mx-0">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.035))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-8">
            {/* AMARILLO DIFUMINADO DE LA CARD */}
            <div className="pointer-events-none absolute -left-16 -top-20 h-[230px] w-[230px] rounded-full bg-[#F0B429]/20 blur-[70px]" />
            <div className="pointer-events-none absolute right-[-80px] top-[20px] h-[260px] w-[260px] rounded-full bg-[#1A4F9E]/18 blur-[75px]" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
                Inversión total del servicio
              </p>

              <div className="mt-4 flex items-end leading-none">
                <span className="mb-2 mr-1 text-[24px] font-bold text-[#F0B429]">
                  US$
                </span>
                <span className="text-[52px] font-bold tracking-[-0.06em] text-white">
                  600
                </span>
              </div>

              <p className="mt-3 text-[12px] font-semibold text-white/40">
                Solo pagas a medida que el proceso avanza
              </p>

              <div className="mt-7 space-y-2">
                {paymentSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex min-h-[83px] items-center gap-4 rounded-[11px] border border-white/9 bg-white/[0.045] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9A51B] text-[12px] font-bold text-[#071B39]">
                      {step.number}
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-white/38">
                        {step.moment}
                      </p>
                      <p className="mt-1 text-[15px] font-bold leading-none text-white">
                        {step.amount}
                      </p>
                      <p className="mt-2 text-[11px] font-medium leading-[1.35] text-white/38">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-white/9 pt-4 text-center text-[11.5px] font-medium leading-relaxed text-white/32">
                Si no encuentras el inmueble correcto, no sigues pagando
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT FLOATING */}
      <button
        type="button"
        aria-label="Abrir chat"
        className="fixed bottom-8 right-8 z-20 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#314987] text-[24px] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3b58a2]"
      >
        💬
      </button>

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