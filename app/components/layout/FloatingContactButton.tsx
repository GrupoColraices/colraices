"use client";

import { useState } from "react";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+573000000000";
  };

  const handleChat = () => {
    window.open("https://wa.me/573000000000", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-[Montserrat]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[240px] overflow-hidden rounded-2xl border border-[#2A3F77]/10 bg-white shadow-[0_8px_32px_rgba(42,63,119,0.2)]">
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
        </div>
      )}

      <button
        type="button"
        aria-label={
          isOpen ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"
        }
        onClick={() => setIsOpen((prev) => !prev)}
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