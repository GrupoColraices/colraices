"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    },
  },
};

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  tags: string[];
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: "💰",
    title: "Finanzas inteligentes",
    description:
      "Accede a crédito para tu vivienda en Colombia o libre inversión. Si tienes reportes o dudas, te ayudamos a solucionarlo y a prepararte paso a paso.",
    tags: ["Buena Data", "Brújula Financiera", "Brújula Crediticia", "Monetización", "Crédito"],
  },
  {
    icon: "🏠",
    title: "Tu propiedad en Colombia",
    description:
      "Te ayudamos a encontrar tu propiedad en Colombia o analizamos la que quieres comprar. Para que tomes la decisión con respaldo.",
    tags: ["Brújula Inmobiliaria", "Llave inmobiliaria"],
  },
  {
    icon: "⚖️",
    title: "Servicios legales y migratorios",
    description:
      "Desde migrar ordenadamente hasta emprender en Colombia. Asesoría legal con gente que habla tu idioma.",
    tags: [
      "Asesoría migratoria",
      "Emprendimiento",
      "Pensiones",
      "Representación legal",
      "Servicios fiscales",
    ],
  },
];

export default function UnitsSection() {
  return (
    <section
      id="units-section"
      className="w-full scroll-mt-24 bg-[#FFFFFF] pt-[60px] pb-[80px] md:pt-[80px] md:pb-[120px]"
    >
      <div
        className="
        w-full 
        max-w-[1416px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[40px] 
        md:px-[100px] 
        lg:px-[156px]
      "
      >
        {/* HEADER */}
        <div className="mx-auto mb-[40px] max-w-[1000px] text-center md:mb-[60px]">
          <p className="mb-2 text-[16px] font-bold italic text-[#FFC107] md:text-[20px]">
            Nuestros servicios
          </p>

          <h2
            className="
            text-[#0F2D5C] 
            text-[24px] 
            sm:text-[28px] 
            md:text-[34px] 
            lg:text-[40px] 
            
            font-semibold 
            leading-[1.2] 
            md:leading-[1.15] 
            
            mb-3 md:mb-4
          "
          >
            Todo lo que necesitas, en un solo ecosistema.
          </h2>

          <p className="mx-auto max-w-[980px] text-[14px] leading-[22px] text-[#475569] md:text-[15px] md:leading-[24px]">
            No tienes que buscar en cinco lugares distintos ni explicarle tu historia a desconocidos
            cada vez. Aquí está todo.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            
            gap-4 
            md:gap-6
          "
        >
          {SERVICE_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              className="
              relative group bg-white border border-[#E2E8F0] 
              
              p-5 md:p-7 
              
              rounded-tl-[16px] rounded-br-[16px]
              flex flex-col justify-between overflow-hidden
              
              transition-all duration-500
              hover:-translate-y-[6px]
              hover:scale-[1.01]
              hover:shadow-[0_25px_60px_rgba(15,45,92,0.16)]
              hover:border-[#0F2D5C]/20
              "
            >
              {/* BARRA */}
              <div className="absolute top-0 left-0 h-[3px] w-full overflow-hidden">
                <div
                  className="h-full w-full bg-[#FFC107]
                  translate-x-[-100%] group-hover:translate-x-0
                  transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>

              <div>
                {/* ICONO */}
                <div
                  className="
                  mb-4 flex h-10 w-10 items-center justify-center rounded-lg
                  bg-[#F1F5F9]
                  transition-all duration-500
                  group-hover:-translate-y-[2px]
                  group-hover:bg-[#FFF6D6]
                  group-hover:shadow-[0_10px_25px_rgba(255,193,7,0.35)]
                  md:mb-5 md:h-12 md:w-12
                "
                  aria-hidden="true"
                >
                  {card.icon}
                </div>

                <h3 className="mb-2 text-[16px] font-semibold text-[#0F2D5C] md:text-[18px]">
                  {card.title}
                </h3>

                <p className="mb-4 text-[13px] leading-[20px] text-[#475569] md:mb-5 md:text-[14px] md:leading-[22px]">
                  {card.description}
                </p>

                {/* TAGS */}
                <div className="mb-5 flex flex-wrap gap-2 md:mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                      text-[11px] md:text-[12px] 
                      px-3 py-[5px] md:py-[6px] 
                      rounded-full 
                      border border-[#1A4F9E]/[0.12] 
                      text-[#1A4F9E] 
                      bg-[#1A4F9E]/[0.06]
                      
                      transition-all duration-300
                      hover:bg-[#1A4F9E]
                      hover:text-white
                      hover:border-[#1A4F9E]
                      hover:shadow-[0_6px_18px_rgba(26,79,158,0.35)]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/"
                className="group/cta flex items-center gap-1 text-[13px] font-medium text-[#1A4F9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4F9E]/40 focus-visible:ring-offset-2 md:text-[14px]"
              >
                Ver servicios
                <span className="inline-block transition-all duration-300 group-hover/cta:translate-x-[6px]">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}