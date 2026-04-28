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
    <section className="relative w-full overflow-hidden bg-white pb-0 py-[60px] md:py-[80px] xl:min-h-[660px]">
      
      {/* CÍRCULOS */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
        <div className="animate-float-1 absolute top-[40px] left-[180px] h-[280px] w-[280px] rounded-full bg-[#0F2D5C]/5" />
        <div className="animate-float-2 absolute bottom-[60px] left-[40px] h-[300px] w-[300px] rounded-full bg-[#0F2D5C]/5" />
        <div className="animate-float-3 absolute top-[180px] right-[140px] h-[280px] w-[280px] rounded-full bg-[#0F2D5C]/5" />
      </div>

      {/* CONTENEDOR */}
      <div className="relative z-10 mx-auto w-full max-w-[1416px] px-[20px] sm:px-[40px] md:px-[80px] lg:px-[120px] xl:px-[156px]">
        
        <div className="flex flex-col gap-[50px] xl:flex-row xl:items-center xl:justify-between">
          
          {/* IZQUIERDA */}
          <div className="w-full max-w-[600px]">
            
            <div
              className={`mb-[16px] flex items-center gap-[8px] transition-all duration-700 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
              }`}
            >
              <div className="h-[2px] w-[24px] bg-[#FFC107]" />
              <p className="text-[14px] md:text-[16px] text-[#2A3F77]">
                Soluciones financieras para colombianos en el exterior
              </p>
            </div>

            <h1
              className={`text-[26px] sm:text-[30px] md:text-[34px] xl:text-[31.2px] font-semibold text-[#2A3F77] transition-all duration-700 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
              }`}
            >
              Tu dinero ya está en el exterior.{" "}
              <span className="italic text-[#FFC107]">
                Ahora ponlo a trabajar en Colombia.
              </span>
            </h1>

            <p
              className={`mt-[20px] text-[14px] md:text-[15.2px] leading-[24px] md:leading-[26px] text-[#2A3F77] transition-all duration-700 delay-200 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
              }`}
            >
              Obtén tu crédito en Colombia para vivienda o libre inversión, y si necesitas ordenar tu
              perfil, prepárate, o solucionar reportes negativos te acompañamos.
            </p>

            <div
              className={`mt-[30px] transition-all duration-700 delay-300 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
              }`}
            >
              <Link
                href="/finanzas"
                className="flex h-[48px] w-full max-w-[230px] items-center justify-center rounded-full bg-[#FFC107] text-[13px] font-medium text-[#2A3F77] hover:-translate-y-[2px] hover:shadow-lg transition"
              >
                ¿Por dónde empiezo? →
              </Link>
            </div>

          </div>

          {/* DERECHA */}
          <div className="relative w-full max-w-[360px] mx-auto xl:mx-0">
            
            <div className="flex flex-col gap-[12px] xl:hidden">
              {items.map((item) => (
                <Card key={item.title} item={item} />
              ))}
            </div>

            <div className="hidden xl:block relative h-[384px]">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className="absolute w-full"
                  style={{ top: `${index * 95}px` }}
                >
                  <Card item={item} />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* WAVE SIN LÍNEA */}
      <div className="absolute bottom-[-1px] left-0 w-full leading-none">
        <Image
          src="/texture-top.png"
          alt="wave"
          width={2400}
          height={150}
          priority
          className="w-full block"
        />
      </div>

    </section>
  );
}

/* CARD */
function Card({ item }: any) {
  return (
    <div className="relative flex items-center gap-[14px] rounded-tl-[16px] rounded-br-[16px] bg-white/70 backdrop-blur-md p-[16px] hover:shadow-lg transition">
      
      <div className={`absolute top-0 left-0 h-full w-[3px] ${item.color}`} />

      <div className="text-[18px]">{item.icon}</div>

      <div>
        <p className="text-[10px] font-bold uppercase text-[#2A3F77]">
          {item.tag}
        </p>

        <p className="text-[14px] font-semibold text-[#2A3F77]">
          {item.title}
        </p>

        <p className="text-[12px] text-[#2A3F77]/80">
          {item.desc}
        </p>
      </div>
    </div>
  );
}