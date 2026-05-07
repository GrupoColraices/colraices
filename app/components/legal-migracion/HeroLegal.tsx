"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LEGAL_SERVICES = [
  {
    icon: "🛂",
    text: "Asesoría migratoria y visas",
    href: "/legal-migracion/asesoria-migratoria",
  },
  {
    icon: "🏢",
    text: "Asesoría en emprendimiento",
    href: "/legal-migracion/constitucion-empresas",
  },
  {
    icon: "⚖️",
    text: "Pensiones",
    href: "/legal-migracion/pensiones",
  },
  {
    icon: "💼",
    text: "Representación legal",
    href: "/legal-migracion/representacion-legal",
  },
  {
    icon: "📄",
    text: "Servicios fiscales",
    href: "/legal-migracion/servicios-fiscales",
  },
] as const;

const WHATSAPP_URL =
  "https://wa.me/573165119987?text=Hola%2C%20quiero%20hablar%20con%20un%20asesor.";

export default function HeroLegal() {
  return (
    <section
      className={`${montserrat.className} relative flex min-h-[653px] w-full items-start justify-center overflow-hidden`}
      style={{ backgroundColor: "#0B1F3F" }}
    >
      {/* 🔳 GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🔵 LUZ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 25%, rgba(26,79,158,0.15) 0%, transparent 60%)",
        }}
      />

      {/* 🟡 GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 92% 92%, rgba(201,144,12,0.08) 0%, transparent 40%)",
        }}
      />

      {/* 🎯 NOISE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      />

      {/* CONTENIDO */}
      <div className="relative mt-[72px] flex w-full max-w-[1108px] flex-col gap-10 px-5 pb-14 sm:px-8 md:mt-[96px] md:px-12 lg:mt-[120px] lg:flex-row lg:gap-[48px] lg:px-0 xl:gap-[72px]">
        {/* LEFT */}
        <div className="relative w-full max-w-[520px]">
          <h1 className="text-[34px] leading-[1.08] font-bold text-white sm:text-[42px] lg:text-[59.76px] lg:leading-[65.7px]">
            Tu puente legal
            <span className="block italic text-[#FFC107]">para Colombia</span>
          </h1>

          <div className="mt-[20px] h-[3px] w-[72px] rounded-[2px] bg-[#FFC107]" />

          <div className="mt-[24px] w-full text-[15.5px] leading-[25px] sm:text-[16.5px] lg:text-[17.28px] lg:leading-[28px]">
            <p className="font-normal text-white/70">
              Trámites migratorios, constitución de empresas,
              <br />
              pensiones y representación legal. Todo desde el exterior,
              <br />
              <span className="font-medium text-white">
                con profesionales que hablan tu idioma.
              </span>
            </p>
          </div>

          {/* 🔥 BOTONES */}
          <div className="mt-[30px] flex min-h-[51px] flex-col gap-[12px] sm:flex-row sm:gap-[14px]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[51px] items-center justify-center rounded-full bg-[#FFC107] px-[28px] font-semibold text-[#091D3E] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_10px_30px_rgba(255,193,7,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3F] active:translate-y-[0px] active:shadow-[0_4px_10px_rgba(255,193,7,0.25)]"
              aria-label="Hablar con un asesor por WhatsApp"
            >
              Hablar con un asesor
            </a>

            <Link
              href="#servicios"
              className="inline-flex h-[51px] items-center justify-center rounded-full border border-white/25 px-[28px] text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3F]"
              aria-label="Ver la sección de servicios"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="h-auto w-full max-w-[420px] rounded-tl-[16px] rounded-br-[16px] p-6 sm:p-7 lg:h-[453.36px] lg:p-[32.8px]"
          style={{
            background: `
              radial-gradient(circle at 0% 0%, rgba(201,144,12,0.28) 0%, rgba(201,144,12,0.08) 35%, transparent 65%),
              linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)
            `,
            border: "0.8px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <p className="text-[9.92px] tracking-[1.39px] text-white/40 uppercase">
            Servicios disponibles
          </p>

          <h2 className="mt-[10px] text-[22.4px] leading-[26.9px] font-semibold text-white">
            Soluciones legales completas
          </h2>

          <div className="mt-[20px] flex flex-col gap-[12px]">
            {LEGAL_SERVICES.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="group relative flex min-h-[54.4px] w-full items-center gap-[12px] overflow-hidden rounded-[12px] px-[14px] py-[9px] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3F]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.8px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="relative z-10 text-[19.2px] leading-[28.8px] text-black"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>

                <span className="relative z-10 text-[13.12px] text-white/65 transition-colors duration-300 group-hover:text-[#FFC107]">
                  {item.text}
                </span>

                {/* overlay hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[12px] opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
