"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const MOMENTS = [
  {
    id: 1,
    icon: "🔍",
    label: "Momento 1",
    title: "Estoy explorando",
    color: "#5B8FD4",
    desc: "Quiero invertir en Colombia pero todavía estoy entendiendo mis opciones, mis posibilidades reales y dónde quiero comprar.",
    items: [
      { icon: "🧮", title: "¿Cuánto me prestan?", desc: "Conoce tu capacidad de crédito", cta: "Calcular ahora →" },
      { icon: "🏙️", title: "Proyectos en Bogotá, Medellín y más", desc: "32 proyectos activos en el Tour", cta: "Ver proyectos →" },
      { icon: "🧭", title: "Haz tu Brújula Financiera", desc: "Conoce tu estado financiero y toma decisiones con un plan claro.", cta: "Obtener ahora →" },
    ],
  },
  {
    id: 2,
    icon: "🏠",
    label: "Momento 2",
    title: "Estoy decidiendo",
    color: "#2A3F77",
    desc: "Ya sé que quiero comprar. Estoy comparando proyectos, evaluando opciones de crédito y buscando al equipo que me acompañe.",
    items: [
      { icon: "🏦", title: "Brújula Crediticia", desc: "Conoce tu viabilidad de crédito desde el exterior", cta: "Verificar mi perfil →" },
      { icon: "📊", title: "Comparar proyectos", desc: "Guardados: 3 proyectos en tu lista", cta: "Ver mi comparación →" },
      { icon: "🤝", title: "Hablar con un asesor", desc: "Colraices te asigna un asesor según tu perfil", cta: "Agendar sesión →" },
      { icon: "🔑", title: "Llave inmobiliaria", desc: "Buscamos el inmueble exacto que necesitas", cta: "Solicitar búsqueda →" },
    ],
  },
  {
    id: 3,
    icon: "🔑",
    label: "Momento 3",
    title: "Ya compré",
    color: "#4ABBA0",
    desc: "Tengo mi inmueble. Ahora necesito que funcione: arriendo, remodelación, mantenimiento, protección.",
    items: [
      { icon: "🔑", title: "Gestión de arrendamiento", desc: "Aliados avalados para que tu apartamento rente desde hoy", cta: "Contactar un asesor →" },
      { icon: "🔨", title: "Remodelación y acabados", desc: "Empresas curadas por Colraices para adecuar tu inmueble", cta: "Contactar un asesor →" },
      { icon: "🛡️", title: "Protege tu inversión", desc: "Seguro de arriendo, incendio y terremoto para tu inmueble", cta: "Contactar un asesor →" },
      { icon: "📋", title: "Representación legal", desc: "Gestiona trámites en Colombia sin estar presente", cta: "Más información →" },
    ],
  },
];

export default function HeroTour() {
  const [active, setActive] = useState(1);
  const current = MOMENTS.find((m) => m.id === active)!;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      document.querySelectorAll(".ph-atmos").forEach((el) => {
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="tour-vivienda platform-hero relative isolate w-full flex justify-center bg-transparent overflow-hidden">

      {/* 🔥 BACKGROUND EXACTO FIGMA */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block">

        {/* IZQUIERDA — DORADO GRANDE */}
        <div className="absolute bottom-[-260px] left-[-200px] w-[480px] h-[480px] bg-[#C9900C]/16 rounded-full" />

        {/* IZQUIERDA — GRIS GRANDE */}
        <div className="absolute top-[30px] left-[140px] w-[340px] h-[340px] bg-[#0F2D5C]/12 rounded-full" />

        {/* IZQUIERDA — GRIS MEDIO (encima del grande) */}
        <div className="absolute top-[140px] left-[260px] w-[260px] h-[260px] bg-[#0F2D5C]/10 rounded-full" />

        {/* DERECHA — DORADO GRANDE (más afuera) */}
        <div className="absolute top-[-180px] right-[-300px] w-[560px] h-[560px] bg-[#C9900C]/12 rounded-full" />

        {/* DERECHA — DORADO PEQUEÑO (alineado con texto) */}
        <div className="absolute top-[40px] right-[260px] w-[170px] h-[170px] bg-[#C9900C]/18 rounded-full" />

        {/* DERECHA — DORADO MEDIO ABAJO */}
        <div className="absolute bottom-[-140px] right-[120px] w-[280px] h-[280px] bg-[#C9900C]/12 rounded-full" />

      </div>

      <div className="ph-atmos" />

      <div className="ph-inner relative w-[1180px] px-[36px] pt-[56px]">

        <div className="w-[1108px] mx-auto text-center">

          <div className="flex justify-center items-center gap-6">
            <div className="w-[136px] h-[100px] relative">
              <Image src="/tour-vivienda.png" alt="" fill className="object-contain" />
            </div>

            <h1 className="text-[47.81px] font-black leading-[50.2px]">
              <span className="text-[#0F2D5C]">Empieza donde tú </span>
              <span className="text-[#FF6B35] italic">estás.</span>
            </h1>
          </div>

          <p className="mt-[32px] text-[18px] italic font-extrabold text-[#2A3F77A6]">
            Todo lo que ves aquí cambia según tu momento. Elige el que más se acerca a donde estás hoy.
          </p>
        </div>

        <div className="mt-[56px] w-[1108px] mx-auto relative">

          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#2A3F771A]" />

          <div
            className="absolute bottom-0 h-[1.5px] transition-all duration-500"
            style={{
              width: `${100 / 3}%`,
              left: `${(active - 1) * (100 / 3)}%`,
              background: current.color,
            }}
          />

          <div className="flex">
            {MOMENTS.map((m) => (
              <div
                key={m.id}
                onClick={() => setActive(m.id)}
                className="relative w-1/3 px-[32px] py-[28px] cursor-pointer"
              >
                <div className="text-[22px]">{m.icon}</div>

                {active === m.id && (
                  <div className="absolute top-[12px] right-[12px] w-[6px] h-[6px] rounded-full" style={{ background: m.color }} />
                )}

                <p className="mt-[16px] text-[10px] font-bold uppercase tracking-[2px]" style={{ color: m.color }}>
                  {m.label}
                </p>

                <h3 className="mt-[8px] text-[18px] font-bold text-[#0F2D5C]">
                  {m.title}
                </h3>

                <p className="mt-[12px] text-[14px] text-[#2A3F77A6]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[1108px] mx-auto flex bg-transparent divide-x divide-[#0F2D5C14]">
          {current.items.map((item, i) => (
            <div key={i} className="flex-1 px-[28px] py-[22px] flex flex-col justify-between hover:bg-[#F7F9FC] cursor-pointer">
              <div>
                <div className="text-[20px]">{item.icon}</div>

                <h4 className="mt-[16px] text-[13px] font-semibold text-[#0F2D5C]">
                  {item.title}
                </h4>

                <p className="mt-[8px] text-[12px] text-[#475569]">
                  {item.desc}
                </p>
              </div>

              <p className="text-[12px] font-semibold mt-[16px]">
                {item.cta}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}