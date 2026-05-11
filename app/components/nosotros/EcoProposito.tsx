"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Item = {
  icon: ReactNode;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
    title: "Transformar la remesa en inversión.",
    text: "Para que ese dinero no se quede solo en gastos, sino que empiece a convertirse en patrimonio en tu país.",
  },
  {
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    title: "Convertir esa inversión en patrimonio.",
    text: "En una oportunidad para construir estabilidad, futuro y bienestar desde el esfuerzo que haces cada día afuera.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    title: "Acompañarte en el proceso.",
    text: "Con un ecosistema que entiende tu realidad, te orienta y te ayuda a avanzar con claridad y confianza.",
  },
];

const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EcoProposito() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 34,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: easePremium,
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -42,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: easePremium,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  };

  return (
    <motion.section
      id="proposito"
      className="relative overflow-hidden bg-white py-[88px] lg:py-[112px] [font-family:Montserrat,system-ui,sans-serif]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.32 }}
    >
      <div className="pointer-events-none absolute left-[-180px] top-[18%] h-[360px] w-[360px] rounded-full bg-[#2A3F77]/[0.04] blur-[80px]" />
      <div className="pointer-events-none absolute right-[-160px] top-[6%] h-[300px] w-[300px] rounded-full bg-[#FFC107]/[0.08] blur-[90px]" />

      <div className="mx-auto max-w-[1152px] px-6">
        <div className="mx-auto grid max-w-[964px] items-start gap-y-16 lg:grid-cols-[442px_442px] lg:gap-x-[80px]">
          {/* Visual izquierda */}
          <motion.div
            className="order-2 flex justify-center lg:order-1 lg:pt-[205px]"
            variants={fadeLeft}
          >
            <motion.div
              className="relative w-full max-w-[442px] pb-[48px]"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: { duration: 0.45, ease: easePremium },
                    }
              }
            >
              <motion.div
                className="group/card relative h-[355px] w-full overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#192440_0%,#2A3F77_100%)] px-[45px] pt-[45px] shadow-[0_18px_55px_rgba(42,63,119,0.16)]"
                initial={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: "0 18px 55px rgba(42,63,119,0.16)",
                      }
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: "0 28px 80px rgba(42,63,119,0.24)",
                      }
                }
                transition={{ duration: 0.45, ease: easePremium }}
              >
                {/* Círculo decorativo */}
                <motion.div
                  className="absolute right-[-60px] top-[-60px] h-[220px] w-[220px] rounded-full bg-white/[0.08] transition-colors duration-500 ease-out group-hover/card:bg-[#FFC107]/[0.08]"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.08, 1],
                          x: [0, -8, 0],
                          y: [0, 10, 0],
                        }
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div className="relative z-10" variants={stagger}>
                  <motion.div
                    variants={fadeUp}
                    className="text-[60.8px] font-black leading-[60.8px] tracking-[-0.02em] text-[#FFC107]"
                  >
                    +20
                  </motion.div>

                  <motion.p
                    variants={fadeUp}
                    className="mt-[14px] max-w-[353px] text-[14.4px] font-medium leading-[24.5px] text-white/65"
                  >
                    años acompañando a colombianos en el exterior
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="ml-[27px] mt-[32px] border-l-[3px] border-[#FFC107] pl-[20px]"
                  >
                    <p className="max-w-[331px] text-[16.8px] font-normal italic leading-[29.4px] text-white/85">
                      El dinero que envías no debería solo sostener el presente.
                      También puede construir futuro, patrimonio y que permanezca
                      en Colombia.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-[18px] right-[-20px] flex min-h-[66px] w-[206px] items-center rounded-[12px] bg-[#FFC107] px-[22px] py-[14px] text-[13.6px] font-extrabold leading-[17.7px] text-[#192440] shadow-[0_10px_30px_rgba(255,193,7,0.28)] max-sm:right-3"
                initial={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: 22,
                        scale: 0.94,
                      }
                }
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                }
                viewport={{ once: true }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  opacity: { duration: 0.7, delay: 0.65, ease: easePremium },
                  scale: { duration: 0.7, delay: 0.65, ease: easePremium },
                  y: {
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <span>
                  Remesa → Inversión →
                  <br />
                  Patrimonio
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Texto derecha */}
          <motion.div
            className="order-1 max-w-[442px] lg:order-2"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full bg-[#FFF6D8] px-[14px] py-[4px] text-[11.52px] font-bold uppercase leading-[19.6px] tracking-[1.38px] text-[#FFC107]"
            >
              Por qué existimos
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-[24px] text-[40px] font-extrabold leading-[1.16] tracking-[-0.02em] text-[#2A3F77] sm:text-[41.6px] sm:leading-[49.9px]"
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? undefined : { y: "100%" }}
                  whileInView={reduceMotion ? undefined : { y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: easePremium }}
                >
                  La remesa puede
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? undefined : { y: "100%" }}
                  whileInView={reduceMotion ? undefined : { y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.08,
                    ease: easePremium,
                  }}
                >
                  ser mucho más que
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? undefined : { y: "100%" }}
                  whileInView={reduceMotion ? undefined : { y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.16,
                    ease: easePremium,
                  }}
                >
                  un giro.
                </motion.span>
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-[48px] max-w-[442px] text-[16.8px] font-normal leading-[29.4px] text-[#6B7280]"
            >
              Cada mes, millones de colombianos en el exterior envían dinero a
              sus familias. Es un acto de amor, de responsabilidad y de conexión
              con Colombia.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-[24px] max-w-[442px] text-[16.8px] font-normal leading-[29.4px] text-[#6B7280]"
            >
              Pero muchas veces ese esfuerzo se queda resolviendo el presente,
              sin convertirse en algo que también construya futuro para quien lo
              envía.
            </motion.p>

            <motion.div className="mt-[48px] space-y-[28px]" variants={stagger}>
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group flex items-start gap-[16px]"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          x: 4,
                          transition: { duration: 0.3, ease: easePremium },
                        }
                  }
                >
                  <motion.div
                    className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#F1F4FA] transition-colors duration-300 group-hover:bg-[#E9EEF8]"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                            rotate: index === 1 ? -2 : 2,
                          }
                    }
                    transition={{ duration: 0.3, ease: easePremium }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2A3F77"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </motion.div>

                  <p className="max-w-[386px] text-[15.2px] font-normal leading-[25.1px] text-[#374151]">
                    <strong className="font-bold text-[#2A3F77]">
                      {item.title}
                    </strong>{" "}
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}