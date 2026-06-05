"use client";

import { useState } from "react";
import { OFFICIAL_WHATSAPP_URL } from "@/app/lib/officialUrls";
import GeneralContactModal from "../forms/GeneralContactModal";

type ContactView = "main" | "call" | "chat";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ContactView>("main");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
    setIsOpen(false);
    setView("main");
    setIsContactModalOpen(true);
  };

  const handleChat = () => {
    window.open(OFFICIAL_WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  const handleWebChat = () => {
    // TODO: conectar chat web
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9999] font-[Montserrat]">
      {isOpen && (
        <div
          className={`absolute bottom-20 right-0 overflow-hidden rounded-2xl border border-[#2A3F77]/10 bg-white shadow-[0_8px_32px_rgba(42,63,119,0.2)] ${
            view === "main" ? "w-[240px]" : "min-w-[240px]"
          }`}
        >
          {view === "main" && (
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
                  onClick={() => setView("chat")}
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
          )}

          {view === "chat" && (
            <>
              <div className="flex items-center gap-3 bg-gradient-to-br from-[#FFC107] to-[#FFB300] px-5 py-4 text-[#2A3F77]">
                <button
                  type="button"
                  aria-label="Volver al menú de contacto"
                  onClick={() => setView("main")}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[1.3rem] leading-none text-[#2A3F77] transition hover:bg-[#2A3F77]/10"
                >
                  ‹
                </button>

                <div className="min-w-0">
                  <h3 className="mb-1 text-[15px] font-bold text-[#2A3F77]">
                    Chat
                  </h3>

                  <p className="text-xs font-normal text-[#2A3F77]">
                    Elige tu canal preferido
                  </p>
                </div>
              </div>

              <div className="p-2">
                <button
                  type="button"
                  onClick={handleWebChat}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3.5 text-left transition hover:bg-[#2A3F77]/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2A3F77] to-[#1A2847]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 17.5H9L12 20.5L15 17.5H18.5C20.157 17.5 21.5 16.157 21.5 14.5V6.5C21.5 4.84315 20.157 3.5 18.5 3.5H5.5C3.84315 3.5 2.5 4.84315 2.5 6.5V14.5C2.5 16.157 3.84315 17.5 5.5 17.5Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 9H16.5"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.5 12.5H13.5"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <span className="flex-1">
                    <span className="mb-0.5 block text-sm font-semibold text-[#2A3F77]">
                      Chat
                    </span>

                    <span className="block text-[11px] font-normal text-[#2A3F77]/60">
                      Respuestas inmediatas
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleChat}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3.5 text-left transition hover:bg-[#2A3F77]/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2 18.5L3.5 19.5L4.45 16.75C3.55 15.37 3.05 13.73 3.05 12C3.05 7.06 7.06 3.05 12 3.05C16.94 3.05 20.95 7.06 20.95 12C20.95 16.94 16.94 20.95 12 20.95C9.86 20.95 7.9 20.2 6.36 18.94L6.2 18.5Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.2 8.7C9.38 8.35 9.52 8.35 9.78 8.35H10.22C10.39 8.35 10.58 8.41 10.68 8.64L11.25 10C11.34 10.22 11.3 10.38 11.14 10.56L10.78 10.96C11.24 11.8 11.9 12.45 12.85 12.96L13.3 12.55C13.47 12.4 13.63 12.36 13.84 12.45L15.18 13.02C15.41 13.12 15.5 13.28 15.5 13.5V13.9C15.5 14.35 15.13 14.9 14.47 14.9C12.05 14.9 9.1 12.52 9.1 9.68C9.1 9.3 9.1 8.91 9.2 8.7Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>

                  <span className="flex-1">
                    <span className="mb-0.5 block text-sm font-semibold text-[#2A3F77]">
                      WhatsApp
                    </span>

                    <span className="block text-[11px] font-normal text-[#2A3F77]/60">
                      Chatea con nosotros
                    </span>
                  </span>
                </button>
              </div>
            </>
          )}

          {view === "call" && (
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

      <GeneralContactModal
        title="Te contactamos para ayudarte"
        subtitle="a invertir y construir patrimonio en Colombia"
        source="floating_contact_agendar_llamada"
        serviceInterest="Agendar llamada"
        showHelpField={false}
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
