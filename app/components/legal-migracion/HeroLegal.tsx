"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroLegal() {
  return (
    <section
      className={`${montserrat.className} relative w-full h-[653px] flex items-start justify-center overflow-hidden`}
      style={{
        backgroundColor: "#0B1F3F", // ✅ base uniforme REAL
      }}
    >
      {/* 🔳 GRID EXACTO */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🔵 LUZ AZUL (MUY SUTIL) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 25%, rgba(26,79,158,0.15) 0%, transparent 60%)",
        }}
      />

      

      {/* 🟡 GLOW AMARILLO PRECISO */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 92% 92%, rgba(201,144,12,0.08) 0%, transparent 40%)",
        }}
      />

      {/* 🎯 NOISE (TEXTURA PRO Figma) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
            backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
            opacity: 0.03,
            mixBlendMode: "overlay",
        }}

      />

      {/* CONTENIDO */}
      <div className="relative w-[1108px] h-[453.36px] mt-[120px] flex gap-[72px]">
        
        {/* ================= LEFT ================= */}
        <div className="w-[520px] h-[356.35px] relative">
          
          <div>
            <h1 className="text-[59.76px] leading-[65.7px] font-bold text-white">
              Tu puente legal
            </h1>

            <h1 className="text-[59.76px] leading-[65.7px] font-bold italic text-[#FFC107]">
              para Colombia
            </h1>
          </div>

          <div className="w-[72px] h-[3px] bg-[#FFC107] rounded-[2px] mt-[20px]" />

          <div className="w-[520px] mt-[24px] text-[17.28px] leading-[30.2px]">
            <p className="text-white/70 font-normal">
              Trámites migratorios, constitución de empresas, pensiones y
              representación legal.
            </p>
            <p className="text-white font-medium">
              Todo desde el exterior, con profesionales que hablan tu idioma.
            </p>
          </div>

          <div className="flex gap-[14px] mt-[30px] h-[51px]">
            <button className="px-[28px] h-full rounded-full bg-[#FFC107] text-[#091D3E] font-semibold">
              Hablar con un asesor
            </button>

            <button className="px-[28px] h-full rounded-full border border-white/25 text-white">
              Ver servicios
            </button>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div
          className="w-[420px] h-[453.36px] rounded-tl-[16px] rounded-br-[16px] p-[32.8px] backdrop-blur-md"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "0.8px solid rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-[9.92px] tracking-[1.39px] text-white/40 uppercase">
            Servicios disponibles
          </p>

          <h2 className="text-[22.4px] leading-[26.9px] font-semibold text-white mt-[10px]">
            Soluciones legales completas
          </h2>

          <div className="mt-[20px] flex flex-col gap-[12px]">
            {[
              { icon: "🛂", text: "Asesoría migratoria y visas" },
              { icon: "🏢", text: "Asesoría en emprendimiento" },
              { icon: "⚖️", text: "Pensiones" },
              { icon: "💼", text: "Representación legal" },
              { icon: "📄", text: "Servicios fiscales" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-full h-[54.4px] rounded-[12px] flex items-center gap-[12px] px-[14px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.8px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-[19.2px] leading-[28.8px] text-black">
                  {item.icon}
                </span>

                <span className="text-[13.12px] text-white/65">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}