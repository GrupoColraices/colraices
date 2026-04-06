"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  {

    tag: "EL DESTINO",
    title: "Crédito hipotecario o libre inversión",
    desc: "Compras o capitalizas en Colombia",
    color: "bg-[#FFC107]",
  },
  
  {

    tag: "SI HAY BLOQUEOS",
    title: "Buena Data",
    desc: "Resuelve reportes negativos y deudas",
    color: "bg-[#EF4444]",
  },
  {

    tag: "DIAGNÓSTICO",
    title: "Brújula Financiera",
    desc: "Entiendes tu situación financiera",
    color: "bg-[#3B82F6]",
  },
  {

    tag: "DIAGNÓSTICO | VIABILIDAD CREDITICIA",
    title: "Brújula Crediticia",
    desc: "Entiendes tu situación ante los bancos",
    color: "bg-[#3B82F6]",
  },
  {

    tag: "SI TIENES EFECTIVO",
    title: "Monetización",
    desc: "Traes tu dinero a Colombia",
    color: "bg-[#10B981]",
  },
];

export default function FinanzasHero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-[700px] md:h-[660.7px] bg-white overflow-hidden">

      {/* CÍRCULOS */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <div className="absolute top-[80px] left-[120px] w-[260px] h-[260px] bg-[#0F2D5C]/5 rounded-full animate-float-1" />
        <div className="absolute bottom-[140px] left-[60px] w-[220px] h-[220px] bg-[#0F2D5C]/5 rounded-full animate-float-2" />
        <div className="absolute top-[120px] right-[160px] w-[260px] h-[260px] bg-[#0F2D5C]/5 rounded-full animate-float-3" />
      </div>

      {/* CONTENEDOR */}
      <div className="
        relative z-10 
        w-full max-w-[1416px] mx-auto 
        
        pt-[60px] md:pt-[96px] 
        
        px-[20px] 
        sm:px-[40px] 
        md:px-[100px] 
        lg:px-[156px]
      ">

        <div className="
          w-full 
          flex 
          flex-col 
          lg:flex-row 
          gap-[40px]
        ">

          {/* IZQUIERDA */}
          <div className="w-full max-w-[620px]">

            <div className={`flex items-center gap-[8px] mb-[16px] transition-all duration-700 ease-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}>
              <div className="w-[24px] h-[2px] bg-[#FFC107]" />
              <p className="text-[#2A3F77] text-[14px] md:text-[16px] leading-[24px]">
                Soluciones financieras para colombianos en el exterior
              </p>
            </div>

            <h1 className={`
              text-[#2A3F77] 
              text-[28px] 
              sm:text-[36px] 
              md:text-[48px] 
              
              leading-[36px] 
              sm:leading-[44px] 
              md:leading-[55.2px] 
              
              font-medium 
              transition-all duration-700 ease-out delay-100 
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}
            `}>
              Tu dinero ya está en el exterior.{" "}
              <span className="text-[#FFC107] italic">
                Ahora ponlo a trabajar en Colombia.
              </span>
            </h1>

            <p className={`mt-[16px] md:mt-[20px] text-[#2A3F77] text-[14px] md:text-[16.8px] leading-[24px] md:leading-[29.4px] font-light transition-all duration-700 ease-out delay-200 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
              Desde ordenar tu historial hasta traer tu dinero a Colombia,
              te acompañamos en cada paso para que tomes decisiones financieras inteligentes.
            </p>

            <div className={`mt-[24px] md:mt-[35px] transition-all duration-700 ease-out delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
              <Link
                href="/finanzas"
                className="
                  flex items-center justify-center 
                  w-full sm:w-[229px] 
                  h-[44px] md:h-[47.56px] 
                  
                  rounded-full 
                  bg-[#FFC107] 
                  text-[#2A3F77] 
                  
                  text-[13px] md:text-[14.4px] 
                  font-semibold 
                  
                  transition-all duration-200 ease-out 
                  hover:-translate-y-[2px] 
                  hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]
                "
              >
                ¿Por dónde empiezo? →
              </Link>
            </div>

          </div>

          {/* DERECHA */}
          <div className="
            w-full 
            max-w-[420px] 
            
            relative 
            
            grid 
            grid-cols-1 
            gap-[12px] 
            
            lg:block
          ">
            .
            {items.map((item, index) => (
              <div
                key={item.title}
                className="
                  relative
                  w-full 
                  lg:absolute 
                  
                  h-auto 
                  lg:h-[84.94px] 
                  
                  flex items-start gap-[13.98px] 
                  
                  pl-[15.99px] pt-[15.99px] 
                  
                  bg-white/60 backdrop-blur-[10px] 
                  
                  rounded-tl-[16px] 
                  rounded-br-[16px] 
                  rounded-tr-none 
                  rounded-bl-none

                  overflow-hidden
                  
                  transition-all duration-300 ease-out 
                  
                  hover:bg-white/90
                  hover:-translate-y-[2px]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                "
                style={{
                  top: `${index * 94.94}px`,
                }}
              >
                {/* LÍNEA */}
                <div className={`absolute left-0 top-0 w-[3px] h-full ${item.color}`} />

                {/* TEXTO */}
                <div>
                  <p className="
                    text-[#2A3F77] 
                    text-[9.92px] 
                    font-bold 
                    uppercase 
                    tracking-[0.99px] 
                    leading-[14.9px]
                  ">
                    {item.tag}
                  </p>

                  <p className="
                    text-[#2A3F77] 
                    text-[14.08px] 
                    font-semibold 
                    leading-[20px] 
                    mt-[2px]
                  ">
                    {item.title}
                  </p>

                  <p className="
                    text-[#2A3F77]/80 
                    text-[12px] 
                    leading-[18px] 
                    mt-[2px]
                  ">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
            .
          </div>

        </div>

      </div> 

      {/* WAVE */}
      <div className="absolute bottom-0 left-0 w-full z-[2]">
        <Image
          src="/texture-top.png"
          alt="wave"
          width={2400}
          height={150}
          priority
          className="block w-full translate-y-[1px]"
        />
      </div>

    </section>
  );
}