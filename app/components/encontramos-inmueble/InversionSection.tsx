"use client";

import { motion, type Variants } from "framer-motion";

const payments = [
  {
    number: "1",
    moment: "Al activar el servicio",
    amount: "US$180",
    desc: "Confirmación de criterios, inicio de la búsqueda y asignación del equipo.",
  },
  {
    number: "2",
    moment: "Al firmar la promesa de compraventa",
    amount: "US$250",
    desc: "El inmueble fue encontrado, analizado y decidiste avanzar con la compra.",
  },
  {
    number: "3",
    moment: "Al escriturar el inmueble",
    amount: "US$170",
    desc: "Cierre exitoso de la operación. La llave está en tus manos.",
  },
];

const infoCards = [
  {
    title: "Sin letra pequeña",
    desc: "El precio está diseñado para que solo pagues en la medida en que el proceso genera valor real. Si en algún momento decides no avanzar, no hay pagos adicionales pendientes.",
    highlight: true,
  },
  {
    title: "Inmuebles analizados",
    desc: "El servicio no tiene límite de inmuebles evaluados. Colraices busca y filtra hasta encontrar la opción que realmente te conviene.",
    highlight: false,
  },
  {
    title: "Cubre los tres tipos de inmueble",
    desc: "El mismo servicio aplica para inmueble usado, nuevo o proyecto sobre planos. El precio es el mismo independientemente del tipo de inmueble.",
    highlight: false,
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const softReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.965,
    y: 28,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.08,
    },
  },
};

export default function InversionSection() {
  return (
    <section
      className="relative w-full overflow-hidden border-t-[3px] border-[#D99A00] bg-[#071F45]"
      style={{
        fontFamily: "Montserrat, var(--font-montserrat), system-ui, sans-serif",
      }}
    >
      {/* Glow premium fondo */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[18%] h-[320px] w-[320px] rounded-full bg-[#1A4F9E]/20 blur-[120px]"
        animate={{
          opacity: [0.2, 0.42, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#F0B429]/10 blur-[110px]"
        animate={{
          opacity: [0.15, 0.33, 0.15],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto min-h-[878px] w-full max-w-[1152px] px-12 pt-[112px] pb-20">
        {/* Header */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="mb-[20px] flex items-center justify-center gap-[10px] text-[12px] font-[700] uppercase tracking-[0.26em] text-[#F0B429]"
          >
            <motion.span
              className="h-[2px] w-[20px] rounded-full bg-[#F0B429]"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              style={{ transformOrigin: "right" }}
            />
            <span>Inversión</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[36px] font-[700] leading-[1.12] tracking-[-0.035em] text-white"
          >
            Pagas cuando{" "}
            <motion.em
              className="inline-block font-[700] italic text-[#F0B429]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.22, ease: "easeOut" }}
            >
              avanza el proceso
            </motion.em>
          </motion.h2>
        </motion.div>

        {/* Content */}
        <motion.div
          className="mt-[53px] grid grid-cols-1 gap-[40px] lg:grid-cols-[508px_508px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
        >
          {/* Main price card */}
          <motion.div
            variants={softReveal}
            whileHover={{
              y: -6,
              scale: 1.006,
              boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            className="group relative h-auto min-h-[542px] overflow-hidden rounded-[28px] border border-[#C9900C]/45 bg-[#13263D] px-[40px] pt-[39px] pb-[52px]"
          >
            {/* Brillo diagonal */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-[-45%] w-[38%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
              animate={{
                x: ["0%", "420%"],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatDelay: 2.8,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute right-[20px] top-[20px] rounded-full bg-[#D99A00] px-[15px] py-[6px] text-[10px] font-[800] uppercase tracking-[0.13em] text-[#071F45]"
              initial={{ opacity: 0, x: 14, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              Solo pagas cuando avanza
            </motion.div>

            <p className="text-[12px] font-[500] uppercase tracking-[0.28em] text-[#7D8BA3]">
              Total del servicio
            </p>

            <div className="mt-[13px] flex items-end">
              <motion.span
                className="mb-[8px] text-[32px] font-[800] leading-none tracking-[-0.04em] text-[#F0B429]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              >
                US$
              </motion.span>

              <motion.span
                className="text-[58px] font-[800] leading-[0.9] tracking-[-0.065em] text-white"
                initial={{ opacity: 0, y: 26, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.32, ease: "easeOut" }}
              >
                600
              </motion.span>
            </div>

            <p className="mt-[13px] text-[13px] font-[400] leading-[1.6] text-[#8B99AF]">
              En tres pagos ligados al avance real del proceso
            </p>

            {/* Timeline */}
            <div className="relative mt-[46px] pl-[52px]">
              <motion.div
                className="absolute left-[17px] top-[20px] h-[265px] w-[2px] origin-top bg-[#C9900C]/45"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, delay: 0.5, ease: "easeOut" }}
              />

              <div className="space-y-[36px]">
                {payments.map((payment, index) => (
                  <motion.div
                    key={payment.number}
                    className="relative"
                    initial={{ opacity: 0, x: -22, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.75,
                      delay: 0.58 + index * 0.15,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div
                      className="absolute left-[-52px] top-[-2px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#D99A00] text-[14px] font-[800] text-[#071F45]"
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.65 + index * 0.15,
                        ease: "easeOut",
                      }}
                    >
                      {payment.number}
                    </motion.div>

                    <div>
                      <p className="text-[12px] font-[400] leading-[1.35] text-[#7D8BA3]">
                        {payment.moment}
                      </p>

                      <h3 className="mt-[4px] text-[16px] font-[800] leading-[1.1] tracking-[-0.02em] text-white">
                        {payment.amount}
                      </h3>

                      <p className="mt-[7px] max-w-[345px] text-[12px] font-[400] leading-[1.45] text-[#8795AA]">
                        {payment.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right cards */}
          <motion.div className="flex flex-col gap-[16px]" variants={staggerContainer}>
            {infoCards.map((card) => (
              <motion.article
                key={card.title}
                variants={softReveal}
                whileHover={{
                  y: -5,
                  x: 2,
                  scale: 1.006,
                  transition: { duration: 0.32, ease: "easeOut" },
                }}
                className={`group relative overflow-hidden rounded-[20px] border px-[24px] py-[24px] ${
                  card.highlight
                    ? "border-[#C9900C]/45 bg-[#13263D]"
                    : "border-white/[0.07] bg-[#102B52]"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    card.highlight
                      ? "bg-[radial-gradient(circle_at_18%_18%,rgba(240,180,41,0.14),transparent_38%)]"
                      : "bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08),transparent_40%)]"
                  }`}
                />

                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[2px] bg-[#F0B429]/0 transition-colors duration-500 group-hover:bg-[#F0B429]/70"
                />

                <div className="relative">
                  <h3
                    className={`text-[16px] font-[800] leading-[1.25] tracking-[-0.02em] ${
                      card.highlight ? "text-[#F0B429]" : "text-white"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p className="mt-[13px] text-[13px] font-[400] leading-[1.65] text-[#8B99AF]">
                    {card.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}