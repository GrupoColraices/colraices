"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    category: "Inmuebles",
    title: "Cómo comprar inmueble en Colombia viviendo en España (sin complicaciones)",
    date: "Febrero 2026",
    readTime: "8 min de lectura",
    icon: "🏙️",
    featured: true,
  },
  {
    category: "Finanzas",
    title: "¿Tu remesa tiene historial crediticio? Esto deberías saber",
    date: "Enero 2026",
    readTime: "5 min",
    icon: "💳",
    featured: false,
  },
  {
    category: "Migración",
    title: "Migrar a Colombia siendo colombiano: lo que nadie te cuenta",
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
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      eease: "cubic-bezier(0.22, 1, 0.36, 1)"
    },
  },
};

export default function BlogSection() {
  return (
    <section className="w-full bg-[#FBF8F3]">
      <div className="w-full max-w-[1416px] mx-auto px-[156px] pt-[96px] pb-[96px]">

        {/* HEADER */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
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
              className="inline-flex items-center mt-[4px] text-[#0F2D5C] font-semibold text-[14px] hover:text-[#1A4F9E] transition-colors"
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
          viewport={{ once: true, amount: 0.25 }}
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="bg-white border border-[#0F2D5C]/10 rounded-[16px] overflow-hidden flex flex-col shadow-[0_4px_12px_rgba(15,45,92,0.08)] hover:shadow-[0_16px_32px_rgba(15,45,92,0.12)]"
              style={{ height: "472.22px" }}
            >
              {/* IMAGE */}
              <div
                className={`relative flex items-center justify-center bg-[#DADADA] ${
                  article.featured ? "h-[314px]" : "h-[165px]"
                }`}
              >
                <div className="text-black/20 text-[40px]">
                  {article.icon}
                </div>

                {/* overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5C]/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-flex w-fit rounded-full bg-[#1A4F9E]/7 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1A4F9E] mb-4">
                  {article.category}
                </span>

                <h3 className="text-[#0F2D5C] font-semibold text-[16px] leading-6 mb-4">
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