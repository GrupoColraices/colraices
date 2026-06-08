"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function QuoteFiscal() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0.01, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: {
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  const fadeOnly = reduceMotion
    ? {}
    : {
        initial: { opacity: 0.01 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.25 },
        transition: {
          duration: 0.6,
          delay: 0.15,
        },
      };

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#0F2D5C]
        px-5
        py-[54px]
        sm:px-6
        sm:py-[60px]
        md:py-[64px]
        lg:py-[70px]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[720px]
          flex-col
          items-center
          text-center
        "
      >
        <motion.div
          className="
            mb-[22px]
            text-[34px]
            font-bold
            leading-none
            text-[#0B5A75]
            sm:mb-[26px]
            sm:text-[38px]
            md:mb-[30px]
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
          {...fadeOnly}
        >
          &quot;
        </motion.div>

        <motion.p
          className="
            m-0
            w-full
            max-w-[570px]
            text-center
            text-[21px]
            font-normal
            italic
            leading-[1.45]
            text-white
            sm:text-[24px]
            sm:leading-[1.48]
            md:text-[26px]
            lg:text-[28px]
            lg:leading-[1.5]
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
          {...fadeUp}
        >
          La vida en el exterior ya tiene suficientes
          <br className="hidden md:block" />
          retos. Tu situación fiscal en Colombia no
          <br className="hidden md:block" />
          debería ser uno más.
        </motion.p>

        <motion.div
          className="
            mt-[18px]
            w-full
            max-w-[570px]
            break-words
            text-center
            text-[10px]
            font-normal
            uppercase
            leading-[17.3px]
            tracking-[1.1px]
            text-white/35
            sm:mt-[20px]
            sm:text-[11px]
            sm:tracking-[1.4px]
            md:mt-[22px]
            md:text-[11.52px]
            md:tracking-[1.61px]
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
          {...fadeOnly}
        >
          SERVICIOS FISCALES · COLRAICES
        </motion.div>
      </div>
    </section>
  );
}