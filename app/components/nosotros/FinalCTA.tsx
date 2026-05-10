"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const title =
  "Lo que haces desde el exterior puede convertirse en una inversión en Colombia.";

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const titleContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.045,
        delayChildren: 0.35,
      },
    },
  };

  const titleWord: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: premiumEase,
      },
    },
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-white py-[120px]"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 42 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: premiumEase }}
        className="mx-auto max-w-[1152px] px-4"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.965 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: smoothEase }}
          className="relative mx-auto h-[503px] max-w-[964px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#192440_0%,#233762_48%,#2A3F77_100%)] shadow-[0_30px_90px_rgba(25,36,64,0.22)] max-md:h-[560px]"
        >
          {/* luz suave superior */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.16, 0.28, 0.16],
                    scale: [1, 1.06, 1],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-[-190px] h-[340px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[90px]"
          />

          {/* círculo izquierdo */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : isButtonHovered
                  ? {
                      x: [0, 18, -4, 0],
                      y: [0, -14, 4, 0],
                      scale: [1, 1.08, 1.02, 1],
                    }
                  : {
                      x: [0, 8, 0],
                      y: [0, -8, 0],
                      scale: [1, 1.03, 1],
                    }
            }
            transition={{
              duration: isButtonHovered ? 4.8 : 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`pointer-events-none absolute left-[-60px] top-[-60px] h-[240px] w-[240px] rounded-full transition-colors duration-700 ${
              isButtonHovered ? "bg-[#FFC107]/[0.10]" : "bg-white/[0.03]"
            }`}
          />

          {/* círculo derecho */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : isButtonHovered
                  ? {
                      x: [0, -20, 6, 0],
                      y: [0, 14, -4, 0],
                      scale: [1, 1.08, 1.03, 1],
                    }
                  : {
                      x: [0, -10, 0],
                      y: [0, 8, 0],
                      scale: [1, 1.04, 1],
                    }
            }
            transition={{
              duration: isButtonHovered ? 5.2 : 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`pointer-events-none absolute bottom-[-80px] right-[-80px] h-[360px] w-[360px] rounded-full transition-colors duration-700 ${
              isButtonHovered ? "bg-white/[0.07]" : "bg-[#FFC107]/[0.06]"
            }`}
          />

          {/* tag */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -14, scale: 0.94 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.18,
              ease: premiumEase,
            }}
            className="absolute left-1/2 top-[84px] flex h-[29px] w-[175px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-[#FFC107]/[0.12]"
          >
            <span className="font-['Montserrat'] text-[11.52px] font-bold uppercase leading-[19.6px] tracking-[1.38px] text-[#FFC107]">
              Da el primer paso
            </span>
          </motion.div>

          {/* título */}
          <motion.h2
            variants={titleContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="absolute left-1/2 top-[157px] w-[931px] max-w-[calc(100%-64px)] -translate-x-1/2 text-center font-['Montserrat'] text-[38px] font-black leading-[53.7px] tracking-[0px] text-white max-md:top-[145px] max-md:text-[30px] max-md:leading-[42px]"
          >
            {title.split(" ").map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={titleWord}
                className="mr-[0.22em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* subtítulo */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18, filter: "blur(6px)" }
            }
            whileInView={
              reduceMotion
                ? undefined
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 1.05,
              ease: premiumEase,
            }}
            className="absolute left-1/2 top-[300px] w-[818px] max-w-[calc(100%-80px)] -translate-x-1/2 text-center font-['Montserrat'] text-[18px] font-medium leading-[28px] tracking-[0px] text-white/65 max-md:top-[330px]"
          >
            Empieza con una conversación. Te ayudamos a entender dónde estás y a
            cumplir tu meta
          </motion.p>

          {/* botón */}
          <motion.a
            href="https://wa.me/15136479405?text=Hola%2C%20Colraices%20%F0%9F%91%8B%0AVengo%20desde%20la%20p%C3%A1gina%20%E2%80%9CConoce%20el%20Ecosistema%E2%80%9D%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20colombianos%20en%20el%20exterior."
            target="_blank"
            rel="noopener noreferrer"
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -6,
                    scale: 1.035,
                    boxShadow: "0 18px 42px rgba(15,45,92,0.24)",
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: 1.22,
              ease: premiumEase,
            }}
            className="absolute left-1/2 top-[370px] flex h-[53px] w-[225px] -translate-x-1/2 items-center justify-center rounded-full bg-white font-['Montserrat'] text-[15.2px] font-bold leading-[25.8px] text-[#2A3F77] transition-colors duration-300 hover:bg-[#FBF8F3] max-md:top-[415px]"
          >
            Habla con un asesor
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}