"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    category: "INMUEBLES",
    title:
      "Cómo comprar inmueble en Colombia viviendo en España (sin complicaciones)",
    date: "Febrero 2026",
    readTime: "8 min de lectura",
    icon: "🏙️",
    featured: true,
  },
  {
    category: "FINANZAS",
    title:
      "¿Tu remesa tiene historial crediticio? Esto deberías saber",
    date: "Enero 2026",
    readTime: "5 min",
    icon: "💳",
    featured: false,
  },
  {
    category: "MIGRACIÓN",
    title:
      "Migrar a Colombia siendo colombiano: lo que nadie te cuenta",
    date: "Enero 2026",
    readTime: "6 min",
    icon: "✈️",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ FIX TS
    },
  },
};

export default function BlogSection() {
  return (
    <section className="w-full bg-[#FBF8F3]">
      <div className="w-full max-w-[1416px] mx-auto px-[156.07px] pt-[96px] pb-[96px]">

        {/* HEADER */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-[#0F2D5C] text-[16px] mb-[8px]"
          >
            Aprende con nosotros
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-[#0F2D5C] text-[28px] font-medium leading-[34px]"
          >
            Todo lo que nadie te explica cuando vives afuera.
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Link
              href="/blog"
              className="inline-flex items-center mt-[6px] text-[#0F2D5C] font-semibold text-[14px] hover:text-[#1A4F9E] transition-all duration-300 hover:gap-2"
            >
              Ver todos los artículos →
            </Link>
          </motion.div>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="mt-[48px] grid grid-cols-1 lg:grid-cols-[472.88px_295.56px_295.56px] gap-[20px] justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="group bg-white border border-[#0F2D5C]/10 rounded-[16px] overflow-hidden flex flex-col shadow-[0_4px_12px_rgba(15,45,92,0.08)] hover:shadow-[0_18px_40px_rgba(15,45,92,0.18)]"
              style={{ height: "472.22px" }}
            >
              {/* IMAGE */}
              <div
                className={`relative flex items-center justify-center bg-[#DADADA] overflow-hidden ${
                  article.featured ? "h-[314px]" : "h-[165px]"
                }`}
              >
                <div className="text-black/20 text-[40px] transition-transform duration-500 group-hover:scale-110">
                  {article.icon}
                </div>

                {/* OVERLAY SUAVE */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5C]/10 to-transparent opacity-80 group-hover:opacity-100 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-flex w-fit rounded-full bg-[#1A4F9E]/7 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1A4F9E] mb-4">
                  {article.category}
                </span>

                <h3 className="text-[#0F2D5C] font-semibold text-[16px] leading-6 mb-4 transition-colors group-hover:text-[#1A4F9E]">
                  {article.title}
                </h3>

                <div className="mt-auto flex items-center gap-3 text-[#94A3B8] text-xs">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#94A3B8]" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}