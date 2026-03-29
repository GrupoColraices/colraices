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
        t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2, 
    },
  },
};

export default function UnitsSection() {
  return (
    <section id="servicios" className="w-full bg-[#FFFFFF] pt-[80px] pb-[120px]">

      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px]">

        {/* HEADER */}
        <div className="text-center max-w-[1000px] mx-auto mb-[60px]">
          <p className="text-[#FFC107] text-[20px] font-bold italic mb-2">
            Nuestros servicios
          </p>

          <h2 className="text-[#0F2D5C] text-[34px] md:text-[40px] font-semibold leading-[1.15] mb-4 whitespace-nowrap">
            Todo lo que necesitas, en un solo ecosistema.
          </h2>

          <p className="text-[#475569] text-[15px] leading-[24px] max-w-[720px] mx-auto">
            No tienes que buscar en cinco lugares distintos ni explicarle tu historia a desconocidos cada vez. Aquí está todo.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >

          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group bg-white border border-[#E2E8F0] p-7 
              rounded-tl-[16px] rounded-br-[16px]
              flex flex-col justify-between overflow-hidden
              transition-all duration-500
              hover:-translate-y-[6px]
              hover:scale-[1.01]
              hover:shadow-[0_25px_60px_rgba(15,45,92,0.16)]
              hover:border-[#0F2D5C]/20"
            >

              {/* 🟡 BARRA (WIPE REAL) */}
              <div className="absolute top-0 left-0 h-[3px] w-full overflow-hidden">
                <div className="h-full w-full bg-[#FFC107] 
                  translate-x-[-100%] group-hover:translate-x-0 
                  transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>

              <div>

                {/* ICONO */}
                <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-5
                  transition-all duration-500
                  group-hover:bg-[#FFF6D6]
                  group-hover:-translate-y-[2px]
                  group-hover:shadow-[0_10px_25px_rgba(255,193,7,0.35)]"
                >
                  {index === 0 ? "💰" : index === 1 ? "🏠" : "⚖️"}
                </div>

                <h3 className="text-[#0F2D5C] text-[18px] font-semibold mb-2">
                  {index === 0
                    ? "Finanzas inteligentes"
                    : index === 1
                    ? "Tu propiedad en Colombia"
                    : "Trámites"}
                </h3>

                <p className="text-[#475569] text-[14px] leading-[22px] mb-5">
                  {index === 0
                    ? "Ponemos orden en tu historial, tu crédito y tu capacidad de inversión. Para que el dinero que trabajaste tanto no se quede quieto."
                    : index === 1
                    ? "Encontramos el inmueble ideal para lo que tienes y lo que sueñas. Sin que tengas que viajar a resolver nada."
                    : "Desde migrar ordenadamente hasta emprender en Colombia. Asesoría legal con gente que habla tu idioma."}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(index === 0
                    ? ["Buena Data", "Brújula Financiera", "Brújula Crediticia", "Monetización", "Crédito"]
                    : index === 1
                    ? ["Brújula Inmobiliaria", "Llave inmobiliaria"]
                    : ["Asesoría migratoria", "Emprendimiento", "Pensiones", "Representación legal", "Servicios fiscales"]
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] px-3 py-[6px] rounded-full 
                      border border-[#1A4F9E]/[0.12] 
                      text-[#1A4F9E] 
                      bg-[#1A4F9E]/[0.06]
                      transition-all duration-300
                      hover:bg-[#1A4F9E]
                      hover:text-white
                      hover:border-[#1A4F9E]
                      hover:shadow-[0_6px_18px_rgba(26,79,158,0.35)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* CTA */}
              <Link
                href="/"
                className="text-[#1A4F9E] font-medium text-[14px] flex items-center gap-1 group/cta"
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