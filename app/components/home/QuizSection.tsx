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
    <section className="w-full bg-[#FEF3C7] border-t-[2px] md:border-t-[2.5px] border-[#FFC107]">

      <div className="
        w-full 
        max-w-[1416px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[40px] 
        md:px-[100px] 
        lg:px-[156px] 
        
        pt-[30px] 
        md:pt-[42px] 
        
        pb-[20px] 
        md:pb-[28px]
      ">

        <div className="
          flex 
          flex-col 
          md:flex-row 
          md:items-center 
          md:justify-between 
          gap-6 md:gap-8
        ">

          {/* TEXTO */}
          <div className="max-w-[460px] text-center md:text-left">
            <h2 className="
              text-[#0B1F3A] 
              text-[22px] 
              sm:text-[24px] 
              md:text-[28px] 
              font-semibold 
              mb-2 
              leading-[1.2]
            ">
              ¿Qué necesitas hoy?
            </h2>

            <p className="text-[#0B1F3A]/70 text-[13px] md:text-[14px] leading-[20px] md:leading-[22px]">
              Cuéntanos dónde estás y qué tienes en mente. <br />
              En dos clics te mostramos por dónde empezar.
            </p>
          </div>

          {/* INPUT + CTA */}
          <div className="
            flex 
            flex-col 
            sm:flex-row 
            
            items-stretch 
            sm:items-center 
            
            gap-4 sm:gap-5 md:gap-6
            w-full md:w-auto
          ">

            {/* SELECT PRO */}
            <div ref={ref} className="relative w-full sm:w-[280px] md:w-[320px]">

              {/* INPUT */}
              <div
                onClick={() => setOpen(!open)}
                className="
                  h-[44px] md:h-[48px] 
                  rounded-full 
                  border border-[#CBD5E1] 
                  bg-white 
                  flex items-center 
                  px-4 md:px-5 
                  shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] 
                  cursor-pointer 
                  justify-between
                "
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full border border-[#94A3B8] flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-[#94A3B8] rounded-full"></div>
                  </div>

                  <span className={`text-[12px] md:text-[13px] ${selected ? "text-[#0B1F3A]" : "text-[#94A3B8]"}`}>
                    {selected || "¿Qué quieres lograr?"}
                  </span>
                </div>

                <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </div>

              {/* DROPDOWN */}
              {open && (
                <ul className="absolute top-[48px] md:top-[52px] left-0 w-full bg-white border border-[#CBD5E1] rounded-md overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-50">

                  <li className="px-4 py-3 bg-[#1A4F9E] text-white text-[13px] md:text-[14px] font-medium">
                    ¿Qué quieres lograr?
                  </li>

                  {options.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                      className={`
                        px-4 py-3 
                        text-[13px] md:text-[14px] 
                        cursor-pointer 
                        transition-all duration-200
                        ${
                          selected === item
                            ? "bg-[#1A4F9E] text-white"
                            : "text-[#2A3F77] hover:bg-[#1A4F9E] hover:text-white"
                        }
                      `}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* BOTÓN */}
            <button className="
              text-[#0B1F3A] 
              font-semibold 
              text-[13px] md:text-[14px] 
              
              flex items-center justify-center 
              gap-1 
              
              hover:gap-2 
              transition-all
              
              w-full sm:w-auto
            ">
              Ver mi camino →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}