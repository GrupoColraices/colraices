"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Service = {
  text: string;
  icon: string;
  href?: string;
};

const SERVICES: readonly Service[] = [
  { text: "Financiación en Colombia", icon: "💰", href: "/finanzas" },
  { text: "Tu propiedad en Colombia", icon: "🏠", href: "/inmuebles" },
  { text: "Servicios legales y migratorios", icon: "⚖️", href: "/legal-migracion" },
];

const SECTION_CLASS =
  "relative flex items-center overflow-hidden min-h-[520px] md:min-h-[600px]";

const BACKGROUND_CLASS =
  "absolute inset-0 bg-no-repeat bg-[center_30%] bg-[length:140%] sm:bg-[length:120%] md:bg-[length:100%]";

export default function HeroSection() {
  return (
    <section className={SECTION_CLASS}>
      <BackgroundImage />

      <div
        className="
        relative 
        w-full 
        max-w-[1200px] 
        mx-auto 
        px-4 sm:px-6 lg:px-8
      "
      >
        <div
          className="
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          justify-between 
          gap-10
          py-12 md:py-16
        "
        >
          <HeroText />
          <EcosystemCard services={SERVICES} />
        </div>
      </div>
    </section>
  );
}

function BackgroundImage() {
  return (
    <div
      className={BACKGROUND_CLASS}
      style={{ backgroundImage: "url('/hero-bg.png')" }}
      aria-hidden="true"
    />
  );
}

function HeroText() {
  return (
    <div className="w-full max-w-[620px] text-center lg:text-left">
      <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
        <div className="h-[1px] w-6 bg-[#FFC107]" />
        <p className="text-[#FFC107] text-sm sm:text-base italic">
          Para colombianos que construyen futuro desde afuera
        </p>
      </div>

      <h1
        className="
        text-white 
        text-[24px] 
        sm:text-[28px] 
        md:text-[34px] 
        lg:text-[36px] 
        leading-tight
        mb-4 md:mb-6
      "
      >
        <span className="block font-normal">Ese dinero que mandas a casa</span>
        <span className="block font-light">puede hacer mucho más que</span>
        <span className="block text-[#FFC107] font-bold italic">llegar a fin de mes.</span>
      </h1>

      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 md:mb-8 max-w-[520px] mx-auto lg:mx-0">
        Te ayudamos a convertir tus remesas en una casa, en un negocio, en algo que dure. Con
        acompañamiento real, desde donde estás.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
        <Link
          href="/#units-section"
          className="
            w-full sm:w-auto
            px-6
            h-[44px] md:h-[48px]
            flex items-center justify-center 
            rounded-full 
            bg-[#FFC107] text-[#2A3F77]
            text-sm font-semibold 
            transition hover:opacity-90
          "
        >
          Quiero saber más →
        </Link>

        <Link
          href="/servicios"
          className="
            w-full sm:w-auto
            px-6 
            h-[42px] md:h-[44px]
            flex items-center justify-center 
            rounded-full 
            border border-white text-white
            text-sm font-semibold
            transition hover:bg-white hover:text-[#0B1F3A]
          "
        >
          Conoce el ecosistema
        </Link>
      </div>
    </div>
  );
}

function EcosystemCard({ services }: { services: readonly Service[] }) {
  return (
    <div className="relative w-full max-w-[420px] pb-7">
      <div
        className="
        relative
        w-full
        p-5 sm:p-6 md:p-7
        rounded-tl-[16px]
        rounded-br-[16px]
        bg-white/95
        border border-white/40
        shadow-[0_25px_80px_rgba(0,0,0,0.25)]
      "
      >
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2A3F77]/15 bg-[#2A3F77]/10 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-[#FFC107]" />
            <span className="text-xs font-semibold text-[#0F2D5C]">
              ECOSISTEMA COLRAICES
            </span>
          </div>

          <h3 className="text-4xl font-bold text-[#0F2D5C]">23 años</h3>

          <p className="mt-1 mb-6 text-xs text-[#1A4F9E]">
            acompañando la diáspora colombiana
          </p>

          <ul className="flex flex-col gap-3">
            {services.map((item) => (
              <ServiceRow key={item.text} item={item} />
            ))}
          </ul>
        </div>

        <AnimatedBadge />
      </div>
    </div>
  );
}

function ServiceRow({ item }: { item: Service }) {
  return (
    <li>
      <Link
        href={item.href || "#"}
        className="
        flex items-center justify-between
        px-4 py-3
        rounded-md
        bg-[#2A3F77]/10
        border border-[#2A3F77]/20
        hover:bg-white/60
        transition
      "
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[#2A3F77]/10">
            {item.icon}
          </div>
          <span className="text-sm font-medium text-[#0F2D5C]">{item.text}</span>
        </div>
        <span>›</span>
      </Link>
    </li>
  );
}

function AnimatedBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.2 }}
      className="
        absolute
        -bottom-5
        left-1/2 -translate-x-1/2
        lg:left-[-32px] lg:translate-x-0
        w-[220px] h-[52px]
        bg-white
        rounded-tl-[16px]
        rounded-br-[16px]
        flex items-center gap-3 px-3
        shadow
      "
    >
      <div className="w-8 h-8 flex items-center justify-center bg-[#FEF3C7] rounded-md">
        🏠
      </div>

      <div className="text-xs leading-tight">
        <p className="text-gray-400">Negocios concretados</p>
        <p className="font-semibold text-[#0F2D5C]">+11.000 en Colombia</p>
      </div>
    </motion.div>
  );
}