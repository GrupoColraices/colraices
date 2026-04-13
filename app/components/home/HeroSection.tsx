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
  "relative flex min-h-[520px] items-center overflow-hidden md:h-[600px] md:min-h-0";
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
        max-w-[1416px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[40px] 
        md:px-[80px] 
        lg:px-[156px]
      "
      >
        <div
          className="
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          justify-between 
          gap-[40px]
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
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
      aria-hidden="true"
    />
  );
}

function HeroText() {
  return (
    <div className="max-w-[620px] text-center lg:text-left">
      <div className="mt-[3.5px] mb-4 flex items-center justify-center gap-[8px] lg:justify-start">
        <div className="h-[1px] w-6 bg-[#FFC107]" aria-hidden="true" />

        <p
          className="
          text-[#FFC107] 
          text-[16px] 
          leading-[24px] 
          font-medium 
          italic 
          max-w-[475px]
        "
        >
          Para colombianos que construyen futuro desde afuera
        </p>
      </div>

      <h1
        className="
        text-white 
        text-[26px] 
        sm:text-[30px] 
        md:text-[35.2px] 
        leading-[34px] 
        sm:leading-[38px] 
        md:leading-[38.7px] 
        mb-4 md:mb-6
        tracking-[-0.02em]
      "
      >
        <span className="block font-normal">Ese dinero que mandas a casa</span>
        <span className="block font-light">puede hacer mucho más que</span>
        <span className="block text-[#FFC107] font-bold italic">llegar a fin de mes.</span>
      </h1>

      <p
        className="
        text-white/70 
        text-[16.8px] 
        leading-[29.4px] 
        font-light 
        mb-6 md:mb-8
      "
      >
        Te ayudamos a convertir tus remesas en una casa, en un negocio, en algo que dure. Con
        acompañamiento real, desde donde estás.
      </p>

      <div
        className="
        flex 
        flex-col 
        sm:flex-row 
        items-center 
        justify-center 
        lg:justify-start 
        gap-4 sm:gap-6
      "
      >
        <Link
          href="/#units-section"
          aria-label="Ir a la sección de unidades"
          className="
            bg-[#FFC107] text-[#2A3F77] 
            w-full sm:w-[209px] 
            h-[44px] md:h-[48px] 
            flex items-center justify-center 
            rounded-full 
            text-[14.4px] 
            font-semibold 
            transition hover:opacity-90
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2D5C]
          "
        >
          Quiero saber más →
        </Link>

        <Link
          href="/servicios"
          aria-label="Ir a servicios para conocer el ecosistema"
          className="
            border border-white text-white 
            w-full sm:w-auto 
            px-6 
            h-[42px] md:h-[44px] 
            flex items-center justify-center 
            rounded-full 
            text-[14.4px] 
            font-semibold 
            transition hover:bg-white hover:text-[#0B1F3A]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2D5C]
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
    <div
      className="
      relative

      w-full
      max-w-[420px]

      h-auto
      lg:h-[401.34px]

      p-[20px]
      sm:p-[24px]
      md:p-[30px]
      lg:p-[35.99px]

      rounded-tl-[16px]
      rounded-tr-none
      rounded-bl-none
      rounded-br-[16px]

      bg-white/95
      border border-white/40
      shadow-[0_25px_80px_rgba(0,0,0,0.25)]
      overflow-visible
    "
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,243,199,0.9),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,79,158,0.25),transparent_60%)]" />

      <div className="relative z-10">
        <div className="mb-[20px] inline-flex items-center gap-[6px] rounded-full border border-[#2A3F77]/15 bg-[#2A3F77]/10 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-[#FFC107]" aria-hidden="true" />
          <span className="text-[11.52px] font-semibold tracking-wide text-[#0F2D5C]">
            ECOSISTEMA COLRAICES
          </span>
        </div>

        <h3 className="text-[44.8px] leading-none font-bold text-[#0F2D5C]">23 años</h3>

        <p className="mt-[4px] mb-[27.98px] text-[12.8px] font-normal text-[#1A4F9E]">
          acompañando la diáspora colombiana
        </p>

        <ul className="flex flex-col gap-[10px]">
          {services.map((item) => (
            <ServiceRow key={item.text} item={item} />
          ))}
        </ul>
      </div>

      <AnimatedBadge />
    </div>
  );
}

function ServiceRow({ item }: { item: Service }) {
  const rowClassName = `
        flex items-center justify-between
        h-[54.53px]
        px-[13.98px]

        rounded-[6px]
        bg-[#2A3F77]/[0.07]
        border border-[#2A3F77]/[0.12]

        hover:bg-white/60
        transition
      `;

  const content = (
    <>
      <div className="flex items-center gap-[11.99px]">
        <div
          className="
          w-[31.99px] h-[31.99px]
          flex items-center justify-center
          rounded-[8px]
          bg-[#2A3F77]/8
        "
          aria-hidden="true"
        >
          {item.icon}
        </div>

        <span className="text-[13.6px] font-medium text-[#0F2D5C]">{item.text}</span>
      </div>

      <span className="text-[#2A3F77]" aria-hidden="true">
        ›
      </span>
    </>
  );

  return (
    <li>
      {item.href ? (
        <Link
          href={item.href}
          className={`${rowClassName} group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4F9E]/50`}
          aria-label={`Ir a ${item.text}`}
        >
          {content}
        </Link>
      ) : (
        <div className={rowClassName}>{content}</div>
      )}
    </li>
  );
}

function AnimatedBadge() {
  const shouldReduceMotion = useReducedMotion();
  const finalState = { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={finalState}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 1.5,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className="
        absolute
        -left-[31.99px]
        -bottom-[20px]
        z-20

        max-[420px]:left-1/2
        max-[420px]:-translate-x-1/2

        w-[219px]
        h-[52px]

        bg-white
        rounded-tl-[16px]
        rounded-br-[16px]

        pl-[13.98px]
        flex items-center
        gap-[10px]

        shadow-[0_6px_18px_rgba(0,0,0,0.1)]
      "
    >
      <div
        className="flex h-[31.99px] w-[31.99px] items-center justify-center rounded-[8px] bg-[#FEF3C7]"
        aria-hidden="true"
      >
        🏠
      </div>

      <div className="flex w-[149.02px] flex-col justify-center leading-none">
        <p className="text-[10.88px] leading-[13.05px] font-medium text-[#94A3B8]">
          Negocios concretados
        </p>
        <p className="text-[13.6px] leading-[17.27px] font-semibold text-[#0F2D5C]">
          +11.000 en Colombia
        </p>
      </div>
    </motion.div>
  );
}