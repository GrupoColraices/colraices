'use client'

import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
export default function TrustStripSection() 
{
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);
 
  const routeMap: Record<string, string> = {
    "Quiero financiar mi vivienda en Colombia": "/finanzas/credito-hipotecario",
    "Quiero saber si hoy aplico para crédito": "/finanzas/credito-hipotecario",
    "Quiero entender mi situación financiera": "/finanzas/credito-hipotecario",
    "Tengo reportes en Colombia": "/finanzas/credito-hipotecario",
    "Quiero traer mi dinero a Colombia": "/finanzas/credito-hipotecario",
    "Quiero ver proyectos": "/finanzas/credito-hipotecario",
    "Quiero que busquen un inmueble por mí": "/finanzas/credito-hipotecario",
    "Quiero analizar un inmueble que ya encontré": "/finanzas/credito-hipotecario",
    "Quiero gestionar temas legales o migratorios": "/finanzas/credito-hipotecario",
  };
 
  const handleVerMiCamino = () => {
    if (!selected) return;
    const route = routeMap[selected];
    if (route) router.push(route);
  };
 
  const options = [
    "Quiero financiar mi vivienda en Colombia",
    "Quiero saber si hoy aplico para crédito",
    "Quiero entender mi situación financiera",
    "Tengo reportes en Colombia",
    "Quiero traer mi dinero a Colombia",
    "Quiero ver proyectos",
    "Quiero que busquen un inmueble por mí",
    "Quiero analizar un inmueble que ya encontré",
    "Quiero gestionar temas legales o migratorios",
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
          md:justify-center
          md:gap-[80px]
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
            <div ref={ref} className="relative w-full sm:w-[380px] md:w-[420px]">
 
              {/* INPUT */}
              <div
                onClick={() => setOpen(!open)}
                className="
                  h-[48px]
                  rounded-full 
                  border border-[#CBD5E1] 
                  bg-white 
                  flex items-center justify-between
                  px-5
                  shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] 
                  cursor-pointer
                  transition-all duration-200
                  hover:border-[#94A3B8]
                "
              >
                <span className={`text-[12px] md:text-[13px] truncate pr-2 ${selected ? "text-[#0B1F3A]" : "text-[#94A3B8]"}`}>
                  {selected || "¿Qué quieres lograr?"}
                </span>
 
                <span
                  className={`
                    flex items-center justify-center flex-shrink-0
                    transition-transform duration-300
                    ${open ? "rotate-180" : ""}
                  `}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="#0F2D5C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
 
              {/* DROPDOWN */}
              {open && (
                <ul className="absolute top-[50px] left-0 w-full bg-white border border-[#CBD5E1] rounded-[12px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.12)] z-50">
 
                  {/* Header */}
                  <li className="px-4 py-[7px] text-[#0F2D5C] text-[13px] md:text-[14px] font-medium border-b border-[#E2E8F0]">
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
                        px-4 py-[7px]
                        text-[13px] md:text-[14px] 
                        cursor-pointer 
                        whitespace-nowrap
                        transition-all duration-200
                        ${
                          selected === item
                            ? "bg-[#1A4F9E] text-white font-medium"
                            : "text-[#2A3F77] hover:bg-[#F1F5F9]"
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
            <button
              onClick={handleVerMiCamino}
              disabled={!selected}
              className={`
                font-semibold 
                text-[13px] md:text-[14px] 
                flex items-center justify-center 
                gap-1 hover:gap-2 
                transition-all whitespace-nowrap
                w-full sm:w-auto
                ${selected ? "text-[#0B1F3A] cursor-pointer" : "text-[#0B1F3A]/40 cursor-not-allowed"}
              `}
            >
              Ver mi camino →
            </button>
 
          </div>
 
        </div>
 
      </div>
 
    </section>
  );
}