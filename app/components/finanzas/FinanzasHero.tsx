"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
  {
    color: "bg-[#FFC107]",
    tag: "EL DESTINO",
    title: "Crédito hipotecario o libre inversión",
    desc: "Compras o capitalizas en Colombia",
    
  },
  {
    color: "bg-[#EF4444]",
    tag: "SI HAY BLOQUEOS",
    title: "Buena Data",
    desc: "Resuelve reportes negativos y deudas",

  },
  {
    color: "bg-[#3B82F6]",
    tag: "DIAGNÓSTICO",
    title: "Brújula Financiera",
    desc: "Entiendes tu situación financiera",

  },
  {
    color: "bg-[#3B82F6]",
    tag: "DIAGNÓSTICO | VIABILIDAD CREDITICIA",
    title: "Brújula Crediticia",
    desc: "Entiendes tu situación ante los bancos",

  },
  {
    color: "bg-[#10B981]",
    tag: "SI TIENES EFECTIVO",
    title: "Monetización",
    desc: "Traes tu dinero a Colombia",

  },
];

export default function FinanzasHero() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);
  const wave = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🔥 contexto GSAP seguro (evita null y memory leaks)
    const ctx = gsap.context(() => {

      if (!blob1.current || !blob2.current || !blob3.current) return;

      gsap.to(blob1.current, {
        x: 60,
        y: 40,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2.current, {
        x: -50,
        y: 60,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob3.current, {
        x: 40,
        y: -50,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const handleScroll = () => {
        const y = window.scrollY;

        if (blob1.current)
          gsap.to(blob1.current, { y: y * 0.15, overwrite: true });

        if (blob2.current)
          gsap.to(blob2.current, { y: y * 0.1, overwrite: true });

        if (blob3.current)
          gsap.to(blob3.current, { y: y * 0.2, overwrite: true });

        if (wave.current)
          gsap.to(wave.current, { y: y * 0.4, overwrite: true });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-[660.7px] bg-white overflow-hidden">

      {/* 🎯 FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        <div
          ref={blob1}
          className="absolute top-[80px] left-[120px] w-[260px] h-[260px] bg-[#0F2D5C]/5 rounded-full"
        />

        <div
          ref={blob2}
          className="absolute bottom-[140px] left-[60px] w-[220px] h-[220px] bg-[#0F2D5C]/5 rounded-full"
        />

        <div
          ref={blob3}
          className="absolute top-[120px] right-[160px] w-[260px] h-[260px] bg-[#0F2D5C]/5 rounded-full"
        />

      </div>

      {/* 📦 CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 w-[1416.15px] mx-auto pt-[96px] px-[156.07px]">

        <div className="w-[1104px] h-[464.72px] flex gap-[64px]">

          {/* 🟡 IZQUIERDA */}
          <div className="mt-[44.59px] w-[620.03px]">

            <div className="flex items-center gap-[8px] mb-[16px]">
              <div className="w-[24px] h-[2px] bg-[#FFC107]" />
              <p className="text-[#2A3F77] text-[16px] leading-[24px] font-normal">
                Soluciones financieras para colombianos en el exterior
              </p>
            </div>

            <h1 className="text-[#2A3F77] text-[48px] leading-[55.2px] font-medium">
              Tu dinero ya está en el exterior.{" "}
              <span className="text-[#FFC107] italic">
                Ahora ponlo a trabajar en Colombia.
              </span>
            </h1>

            <p className="mt-[20px] text-[#2A3F77] text-[16.8px] leading-[29.4px] font-light">
              Desde ordenar tu historial hasta traer tu dinero a Colombia,
              te acompañamos en cada paso para que tomes decisiones financieras inteligentes.
            </p>

            <div className="mt-[35px]">
              <Link
                href="/finanzas"
                className="flex items-center justify-center
                  w-[229.82px] h-[47.56px]
                  rounded-full
                  bg-[#FFC107]
                  text-[#2A3F77]
                  text-[14.4px]
                  leading-[21.6px]
                  font-semibold
                "
              >
                ¿Por dónde empiezo? →
              </Link>
            </div>

          </div>

          {/* 🔵 DERECHA */}
          <div className="w-[240px] h-[465px] flex flex-col justify-between">

            {items.map((item) => (
              <div key={item.title} className="flex gap-[16px]">

                <div className={`w-[3px] h-[48px] ${item.color}`} />

                <div>
                  <p className="text-[#94A3B8] text-[11px] uppercase font-semibold">
                    {item.tag}
                  </p>

                  <p className="text-[#2A3F77] text-[14px] font-semibold leading-[20px]">
                    {item.title}
                  </p>

                  <p className="text-[#2A3F77]/70 text-[13px] leading-[20px]">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* 🌊 WAVE */}
      <div
        ref={wave}
        className="absolute bottom-0 left-0 w-full z-0"
      >
        <Image
          src="/texture-top.png"
          alt="wave"
          width={2400}
          height={150}
          priority
          className="w-full"
        />
      </div>

    </section>
  );
}