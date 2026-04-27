"use client";

import { motion } from "framer-motion";

export default function ParaQuienEsBc() {
  const cards = [
    {
      icon: "📋",
      title: "Ya decidiste invertir en Colombia",
      text: "Tienes la intención clara pero entiendes que tus condiciones financieras pueden necesitar preparación antes de ejecutar.",
    },
    {
      icon: "🔍",
      title: "Tienes hallazgos o dudas crediticias",
      text: "Durante una exploración o proceso anterior detectaste riesgos en tu historial y necesitas claridad antes de seguir.",
    },
    {
      icon: "📅",
      title: "No quieres comprar de inmediato",
      text: "Tu horizonte es el corto o mediano plazo. Prefieres construir el camino correcto antes de comprometer recursos.",
    },
    {
      icon: "🎓",
      title: "Valoras entender antes de ejecutar",
      text: "Das valor a la asesoría y el acompañamiento. Quieres tomar decisiones financieras con criterio, no por impulso.",
    },
    {
      icon: "📈",
      title: "Estás dispuesto a mejorar tu perfil",
      text: "Si el diagnóstico revela ajustes necesarios, estás abierto a hacer los cambios para llegar al crédito en mejores condiciones.",
    },
    {
      icon: "💡",
      title: "Quieres saber el cupo estimado",
      text: "No necesitas una carta bancaria todavía — pero sí quieres una estimación real de cuánto podrías pedir antes de definir el inmueble.",
    },
  ];

  return (
    <section className="w-full bg-[#FBF8F3] flex justify-center py-[80px]">
      <div className="w-full max-w-[1180px] px-[48px] flex flex-col items-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-full max-w-[1084px] text-center flex flex-col items-center"
        >
          <p className="text-[20px] leading-[24px] text-[#0A0A0A]">
            ¿Es para ti?
          </p>

          <h2 className="mt-[12px] text-[32px] leading-[43px] text-[#0F2D5C] italic font-semibold">
            La Brújula Crediticia está pensada para
          </h2>
          <h2 className="text-[32px] leading-[43px] text-[#0F2D5C] italic">
            quien planifica antes de actuar.
          </h2>

          <p className="mt-[16px] max-w-[700px] text-[15px] leading-[25.8px] text-[#475569]">
            No es para quien está buscando crédito urgente — es para quien quiere tomar la decisión correcta en el momento correcto.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="w-full max-w-[1084px] mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className={`
                group relative bg-white border border-[#0F2D5C1A] p-[24px] overflow-hidden
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:shadow-[0_12px_32px_rgba(15,45,92,0.12)]
                hover:-translate-y-[4px]
                hover:border-[#0F2D5C33]
                will-change-transform
                ${i % 2 === 0
                  ? "rounded-tl-[16px] rounded-br-[16px]"
                  : "rounded-tr-[16px] rounded-bl-[16px]"
                }
              `}
            >
              {/* ICONO */}
              <div className="text-[24px] mb-[12px] transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:scale-[1.01]">
                {card.icon}
              </div>

              {/* TITULO */}
              <h3 className="text-[15px] leading-[22.8px] font-semibold text-[#0F2D5C]">
                {card.title}
              </h3>

              {/* TEXTO */}
              <p className="mt-[8px] text-[13px] leading-[21px] text-[#475569]">
                {card.text}
              </p>

              {/* LINEA */}
              <span className="
                absolute bottom-0 left-0 h-[3px] w-full bg-[#FFC107]
                scale-x-0 origin-right
                transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                group-hover:scale-x-100 group-hover:origin-left
              "></span>
            </motion.div>
          ))}
        </motion.div>

        {/* BLOQUE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-[1084px] mt-[40px] bg-[#FEF3C7] rounded-[14px] px-[24px] py-[18px] flex items-start gap-[12px]"
        >
          <div className="text-[18px]">💡</div>

          <p className="text-[14px] leading-[23px] text-[#1E293B]">
            La Brújula Crediticia no acelera decisiones.{" "}
            <span className="font-bold">Las prepara bien.</span>{" "}
            Si lo que necesitas es resolver un bloqueo crediticio activo, el producto correcto es Buena Data. Si ya tienes el perfil listo y quieres radicar el crédito, el paso es Crédito hipotecario.
          </p>
        </motion.div>

      </div>
    </section>
  );
}