"use client";

import { useState } from "react";
import { OFFICIAL_WHATSAPP_URL } from "@/app/lib/officialUrls";

type ContactView = "main" | "call";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ContactView>("main");

  const handleToggleOpen = () => {
    if (!isOpen) {
      setView("main");
    }

    setIsOpen((prev) => !prev);
  };

  const handleCall = () => {
    setView("call");
  };

  const handleScheduleCall = () => {
    // TODO: conectar flujo de agendamiento de llamada.
  };

  const handleChat = () => {
    window.open(OFFICIAL_WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-[Montserrat]">
      {isOpen && (
        <div
          className={`absolute bottom-20 right-0 overflow-hidden rounded-2xl border border-[#2A3F77]/10 bg-white shadow-[0_8px_32px_rgba(42,63,119,0.2)] ${
            view === "call" ? "min-w-[240px]" : "w-[240px]"
          }`}
        >
          {view === "main" ? (
            <>
              <div className="bg-gradient-to-br from-[#2A3F77] to-[#1A2847] px-5 py-4">
                <h3 className="mb-1 text-[15px] font-bold text-white">
                  ¿Cómo te ayudamos?
                </h3>

                <p className="text-xs font-normal text-white/70">
                  Elige una opción de contacto
                </p>
              </div>

              <div className="p-2">
                <button
                  type="button"
                  onClick={handleCall}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-transparent px-4 py-3.5 text-left transition hover:bg-[#2A3F77]/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2A3F77] to-[#1A2847] text-lg">
                    📞
                  </span>

                  <span className="flex-1">
                    <span className="mb-0.5 block text-sm font-semibold text-[#2A3F77]">
                      Llamada
                    </span>

                    <span className="block text-[11px] font-normal text-[#2A3F77]/60">
                      Habla con un asesor
                    </span>
                  </span>

                  <span className="text-xl leading-none text-[#2A3F77]/40">
                    ›
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleChat}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-transparent px-4 py-3.5 text-left transition hover:bg-[#2A3F77]/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFC107] to-[#FFB300] text-lg">
                    💬
                  </span>

                  <span className="flex-1">
                    <span className="mb-0.5 block text-sm font-semibold text-[#2A3F77]">
                      Chat
                    </span>

                    <span className="block text-[11px] font-normal text-[#2A3F77]/60">
                      Escribe tu consulta
                    </span>
                  </span>

                  <span className="text-xl leading-none text-[#2A3F77]/40">
                    ›
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 bg-gradient-to-br from-[#2A3F77] to-[#1A2847] px-5 py-4">
                <button
                  type="button"
                  aria-label="Volver al menú de contacto"
                  onClick={() => setView("main")}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[1.3rem] leading-none text-white transition hover:bg-white/10"
                >
                  ‹
                </button>

                <div className="min-w-0">
                  <h3 className="mb-1 text-[15px] font-bold text-white">
                    Llamada
                  </h3>

                  <p className="text-xs font-normal text-white/70">
                    Elige cuándo prefieres hablar
                  </p>
                </div>
              </div>

              <div className="p-2">
                <button
                  type="button"
                  onClick={handleScheduleCall}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3.5 text-left transition hover:bg-[#2A3F77]/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2A3F77] to-[#1A2847] text-lg">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 28 28"
                      fill="none"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5"
                        y="6"
                        width="18"
                        height="17"
                        rx="3"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M5 9C5 7.34315 6.34315 6 8 6H20C21.6569 6 23 7.34315 23 9V12H5V9Z"
                        fill="#4D9FFF"
                      />
                      <rect
                        x="8"
                        y="4"
                        width="2"
                        height="5"
                        rx="1"
                        fill="#F5B3C7"
                      />
                      <rect
                        x="18"
                        y="4"
                        width="2"
                        height="5"
                        rx="1"
                        fill="#F5B3C7"
                      />
                      <rect
                        x="8"
                        y="15"
                        width="3.5"
                        height="3.5"
                        rx="0.8"
                        fill="#F48FB1"
                      />
                      <rect
                        x="13"
                        y="15"
                        width="3.5"
                        height="3.5"
                        rx="0.8"
                        fill="#7FB7FF"
                      />
                      <rect
                        x="18"
                        y="15"
                        width="3.5"
                        height="3.5"
                        rx="0.8"
                        fill="#F48FB1"
                      />
                      <rect
                        x="8"
                        y="20"
                        width="3.5"
                        height="2"
                        rx="0.8"
                        fill="#7FB7FF"
                      />
                      <rect
                        x="13"
                        y="20"
                        width="3.5"
                        height="2"
                        rx="0.8"
                        fill="#F48FB1"
                      />
                    </svg>
                  </span>

                  <span className="flex-1">
                    <span className="mb-0.5 block text-[0.9rem] font-semibold text-[#2A3F77]">
                      Agendar llamada
                    </span>

                    <span className="block text-[0.7rem] font-normal text-[#2A3F77]/60">
                      Escoge día y hora
                    </span>
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        aria-label={
          isOpen ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"
        }
        onClick={handleToggleOpen}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1F3468] shadow-[0_12px_30px_rgba(15,45,92,0.35)] transition duration-200 hover:scale-105 hover:bg-[#192A55]"
      >
        {isOpen ? (
          <span className="relative block h-7 w-7">
            <span className="absolute left-1/2 top-1/2 h-[2px] w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-black" />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-black" />
          </span>
        ) : (
          <span className="translate-y-[1px] text-[25px] leading-none">
            💬
          </span>
        )}
      </button>
    </div>
  );
}
