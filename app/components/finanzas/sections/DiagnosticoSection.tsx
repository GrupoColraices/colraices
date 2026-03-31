"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const cards = [
  {
    icon: "⚠️",
    label: "SITUACIÓN A",
    text: "Tengo reportes negativos o deudas pendientes en Colombia",
    tag: "Buena Data →",
    href: "/buena-data",
    color: "#DC2626",
    bg: "#FEF2F2",
    line: "#DC2626",
  },
  {
    icon: "🔍",
    label: "SITUACIÓN B",
    text: "No sé cómo está mi situación financiera en Colombia",
    tag: "Brújula Financiera →",
    href: "/brujula-financiera",
    color: "#2A3F77",
    bg: "#F1F5F9",
    line: "#2A3F77",
  },
  {
    icon: "🏠",
    label: "SITUACIÓN C",
    text: "Quiero comprar vivienda en Colombia pero no sé si califico para crédito",
    tag: "Brújula Crediticia →",
    href: "/brujula-crediticia",
    color: "#FFC107",
    bg: "#FEF3C7",
    line: "#FFC107",
  },
  {
    icon: "🏢",
    label: "SITUACIÓN D",
    text: "Envío remesas a Colombia y quiero convertir ese dinero en mi patrimonio",
    tag: "Crédito →",
    href: "/credito",
    color: "#2A3F77",
    bg: "transparent",
    line: "#2A3F77",
  },
  {
    icon: "💸",
    label: "SITUACIÓN E",
    text: "Tengo más de USD $10.000 que quiero traer a Colombia de forma segura",
    tag: "Monetización →",
    href: "/monetizacion",
    color: "#059669",
    bg: "#ECFDF5",
    line: "#059669",
  },
  {
    icon: "🤷",
    label: "NO SÉ CUÁL ME TOCA",
    text: "No tengo claro por dónde empezar",
    tag: "Hablar con asesor — sin costo →",
    href: "#",
    color: "#475569",
    bg: "transparent",
    line: "#475569",
  },
];

export default function DiagnosticoSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setActiveIndex(i);
      i++;

      if (i >= cards.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="
      w-full 
      bg-[#2A3F77] 
      
      pt-[60px] md:pt-[80px] lg:pt-[100px] 
      pb-[60px] md:pb-[80px] 
      
      -mt-[60px] md:-mt-[95px]
    ">
      <div className="
        w-full 
        max-w-[1200px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[40px] 
        md:px-[80px]
      ">

        {/* HEADER */}
        <div className="max-w-[1104px] mx-auto text-center">
          <p className="text-white text-[14px] md:text-[16px] mb-[8px]">
            ¿Por dónde empiezo?
          </p>

          <h2 className="text-white text-[24px] sm:text-[28px] md:text-[36.8px] leading-[1.2] italic">
            Cuéntanos en qué momento estás.
          </h2>

          <h2 className="text-white text-[24px] sm:text-[28px] md:text-[36.8px] leading-[1.2] font-bold mt-[4px]">
            Te decimos qué necesitas.
          </h2>
        </div>

        {/* GRID */}
        <div className="
          max-w-[1104px] 
          mx-auto 
          
          mt-[32px] md:mt-[48px] 
          
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          
          gap-[12px] md:gap-[14px]
        ">

          {cards.map((card, index) => {
            const visible = index <= activeIndex;

            return (
              <Link
                key={index}
                href={card.href}
                className={`
                  group relative overflow-hidden
                  
                  w-full 
                  h-auto 
                  md:h-[193.59px]
                  
                  bg-white
                  rounded-[16px_0_16px_0]
                  border border-[#0F2D5C]/10

                  transition-all duration-[500ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[50px]"
                  }

                  hover:-translate-y-[4px]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                `}
              >

                {/* LÍNEA */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
                  <div
                    className="
                      h-full origin-left scale-x-0
                      transition-all duration-[350ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-x-100
                    "
                    style={{ backgroundColor: card.line }}
                  />
                </div>

                {/* CONTENIDO */}
                <div
                  className={`
                    p-[18px] md:p-[23px]
                    transition-all duration-[600ms]
                    delay-[180ms]

                    ${visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[20px]"
                    }
                  `}
                >

                  <div className="text-[18px] md:text-[20px]">{card.icon}</div>

                  <p
                    className="mt-[16px] md:mt-[20px] text-[9px] md:text-[9.92px] font-bold tracking-[0.08em] uppercase"
                    style={{ color: card.color }}
                  >
                    {card.label}
                  </p>

                  <p className="mt-[6px] text-[13px] md:text-[14px] leading-[20px] md:leading-[21px] text-[#1E293B]">
                    {card.text}
                  </p>

                  <span
                    className="mt-[12px] md:mt-[14px] inline-block text-[11px] md:text-[11.52px] font-bold px-[10px] md:px-[12px] py-[5px] md:py-[6px] rounded-full"
                    style={{
                      color: card.color,
                      background:
                        card.bg === "transparent" ? "transparent" : card.bg,
                    }}
                  >
                    {card.tag}
                  </span>

                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}