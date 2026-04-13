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
    icon: "🏠",
  },
  {
    tag: "SI HAY BLOQUEOS",
    title: "Buena Data",
    desc: "Resuelve reportes negativos y deudas",
    color: "bg-[#EF4444]",
    icon: "🔧",
  },
  {
    tag: "DIAGNÓSTICO",
    title: "Brújula Financiera",
    desc: "Entiendes tu situación financiera",
    color: "bg-[#3B82F6]",
    icon: "🧭",
  },
  {
    tag: "DIAGNÓSTICO | VIABILIDAD CREDITICIA",
    title: "Brújula Crediticia",
    desc: "Entiendes tu situación ante los bancos",
    color: "bg-[#3B82F6]",
    icon: "🧭",
  },
  {
    tag: "SI TIENES EFECTIVO",
    title: "Monetización",
    desc: "Traes tu dinero a Colombia",
    color: "bg-[#10B981]",
    icon: "💱",
  },
];

export default function FinanzasHero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-[700px] overflow-hidden bg-white md:min-h-[660.7px]">
      {/* CÍRCULOS */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <div className="animate-float-1 absolute top-[40px] left-[180px] h-[280px] w-[280px] rounded-full bg-[#0F2D5C]/5" />
        <div className="animate-float-2 absolute bottom-[60px] left-[40px] h-[300px] w-[300px] rounded-full bg-[#0F2D5C]/5" />
        <div className="animate-float-3 absolute top-[180px] right-[140px] h-[280px] w-[280px] rounded-full bg-[#0F2D5C]/5" />
      </div>

      {/* CONTENEDOR */}
      <div className="relative z-10 mx-auto w-full max-w-[1416px] px-[20px] pt-[60px] sm:px-[40px] md:px-[100px] md:pt-[96px] lg:px-[156px]">
        <div className="flex w-full flex-col gap-[40px] xl:relative xl:h-[384px] xl:gap-0">
          {/* IZQUIERDA */}
          <div className="w-full max-w-[600px] xl:absolute xl:top-[77.8px] xl:left-0 xl:h-[309.4px] xl:w-[600px]">
            <div
              className={`mb-[16px] flex items-center gap-[8px] transition-all duration-700 ease-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
            >
              <div className="h-[2px] w-[24px] bg-[#FFC107]" />
              <p className="max-w-[464px] text-[16px] leading-[24px] font-normal text-[#2A3F77]">
                Soluciones financieras para colombianos en el exterior
              </p>
            </div>

            <h1
              className={`text-[31.2px] leading-[37.4px] font-semibold text-[#2A3F77] transition-all duration-700 ease-out delay-100 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}
            >
              Tu dinero ya está en el exterior.{" "}
              <span className="font-semibold italic text-[#FFC107]">
                Ahora ponlo a trabajar en Colombia.
              </span>
            </h1>

            <p
              className={`mt-[20px] text-[15.2px] leading-[26.6px] font-normal text-[#2A3F77] transition-all duration-700 ease-out delay-200 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}
            >
              Obtén tu crédito en Colombia para vivienda o libre inversión, y si necesitas ordenar tu
              perfil, prepárate, o solucionar reportes negativos te acompañamos.
            </p>

            <div
              className={`mt-[35px] transition-all duration-700 ease-out delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}
            >
              <Link
                href="/finanzas"
                className="flex h-[47.56px] w-full max-w-[229px] items-center justify-center rounded-full bg-[#FFC107] text-[12.48px] leading-[18.7px] font-medium text-[#2A3F77] transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                ¿Por dónde empiezo? →
              </Link>
            </div>
            
          </div>

          {/* DERECHA */}
          <div className="relative mx-auto grid w-full max-w-[360px] grid-cols-1 gap-[12px] xl:absolute xl:top-0 xl:right-0 xl:min-h-[384px] xl:w-[360px] xl:mx-0">
            {items.map((item, index) => (
              <div
                key={item.title}
                className="relative flex h-auto w-full items-center gap-[14px] overflow-hidden rounded-tl-[16px] rounded-br-[16px] bg-white/60 pt-[15.99px] pl-[20px] backdrop-blur-[10px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-white/90 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] xl:absolute xl:h-[84.94px]"
                style={{ top: `${index * 94.94}px` }}
              >

                {/* LÍNEA */}
                <div className={`absolute top-0 left-0 h-full w-[3px] ${item.color}`} />

                {/* STICKER (EMOJI CENTRADO) */}
                <div className="flex min-w-[26px] items-center justify-center text-[18px] leading-none">
                  {item.icon}
                </div>

                {/* TEXTO (SUBIDO) */}
                <div className="mt-[-2px]">
                  <p className="text-[9.92px] leading-[14.9px] font-bold tracking-[0.99px] text-[#2A3F77] uppercase">
                    {item.tag}
                  </p>

                  <p className="mt-[2px] text-[14.08px] leading-[20px] font-semibold text-[#2A3F77]">
                    {item.title}
                  </p>

                  <p className="mt-[2px] text-[12px] leading-[18px] text-[#2A3F77]/80">{item.desc}</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* WAVE */}
      <div className="absolute bottom-0 left-0 z-[2] w-full">
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