"use client";

import { useState, useRef, useEffect } from "react";

export default function TrustStripSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const options = [
    "Comprar una casa en Colombia",
    "Ordenar mis finanzas y crédito",
    "Migrar a Colombia",
    "Emprender en Colombia",
    "Resolver un trámite legal",
  ];

  // cerrar al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-full bg-[#FEF3C7] border-t-[2.5px] border-[#FFC107]">

      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px] pt-[42px] pb-[28px]">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* TEXTO */}
          <div className="max-w-[460px]">
            <h2 className="text-[#0B1F3A] text-[26px] md:text-[28px] font-semibold mb-2 leading-[1.2]">
              ¿Qué necesitas hoy?
            </h2>

            <p className="text-[#0B1F3A]/70 text-[14px] leading-[22px]">
              Cuéntanos dónde estás y qué tienes en mente. <br />
              En dos clics te mostramos por dónde empezar.
            </p>
          </div>

          {/* INPUT + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6">

            {/* SELECT PRO */}
            <div ref={ref} className="relative w-full sm:w-[320px]">

              {/* INPUT */}
              <div
                onClick={() => setOpen(!open)}
                className="h-[48px] rounded-full border border-[#CBD5E1] bg-white flex items-center px-5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] cursor-pointer justify-between"
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full border border-[#94A3B8] flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-[#94A3B8] rounded-full"></div>
                  </div>

                  <span className={`text-[13px] ${selected ? "text-[#0B1F3A]" : "text-[#94A3B8]"}`}>
                    {selected || "¿Qué quieres lograr?"}
                  </span>
                </div>

                {/* flecha */}
                <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </div>

              {/* DROPDOWN */}
              {open && (
                <ul className="absolute top-[52px] left-0 w-full bg-white border border-[#CBD5E1] rounded-md overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-50">

                  {/* header activo */}
                  <li className="px-4 py-3 bg-[#1A4F9E] text-white text-[14px] font-medium">
                    ¿Qué quieres lograr?
                  </li>

                  {options.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                      className={`px-4 py-3 text-[14px] cursor-pointer transition-all duration-200
                        ${
                          selected === item
                            ? "bg-[#1A4F9E] text-white"
                            : "text-[#2A3F77] hover:bg-[#1A4F9E] hover:text-white"
                        }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* BOTÓN */}
            <button className="text-[#0B1F3A] font-semibold text-[14px] flex items-center gap-1 hover:gap-2 transition-all">
              Ver mi camino →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}