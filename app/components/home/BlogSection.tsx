"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/app/lib/blogApi";

const fallbackArticles = [
  {
    id: "fallback-inmuebles",
    category: "Inmuebles",
    title: "Cómo comprar inmueble en Colombia viviendo en España (sin complicaciones)",
    date: "Febrero 2026",
    readTime: "8 min de lectura",
    icon: "🏙️",
    href: "/blog",
    imageUrl: null,
  },
  {
    id: "fallback-finanzas",
    category: "Finanzas",
    title: "¿Tu remesa tiene historial crediticio? Esto deberías saber",
    date: "Enero 2026",
    readTime: "5 min",
    icon: "💳",
    href: "/blog",
    imageUrl: null,
  },
  {
    id: "fallback-migracion",
    category: "Migración",
    title: "Migrar a Colombia siendo colombiano: lo que nadie te cuenta",
    date: "Enero 2026",
    readTime: "6 min",
    icon: "✈️",
    href: "/blog",
    imageUrl: null,
  },
];

type HomeBlogArticle = {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  icon: string;
  href: string;
  imageUrl: string | null;
};

type BlogSectionProps = {
  posts: BlogPost[];
  postsError?: string | null;
};

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
      duration: 0.6, // ✅ sin ease
    },
  },
};

function formatHomeBlogDate(date?: string | null): string {
  const value = date?.trim();

  if (!value) {
    return "Reciente";
  }

  const parsedDate = new Date(value.replace(/\.(\d{3})\d*Z$/, ".$1Z"));

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("es-CO", {
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

function mapPostToHomeArticle(post: BlogPost, index: number): HomeBlogArticle {
  const fallback = fallbackArticles[index % fallbackArticles.length];

  return {
    id: post.id,
    category: post.category || fallback.category,
    title: post.title,
    date: formatHomeBlogDate(post.createdAt),
    readTime: post.readTime || fallback.readTime,
    icon: fallback.icon,
    href: post.href,
    imageUrl: post.imageUrl,
  };
}

export default function BlogSection({ posts, postsError = null }: BlogSectionProps) {
  const articles = posts.length > 0
    ? posts.slice(0, 3).map(mapPostToHomeArticle)
    : [];

  return (
    <section className="w-full bg-[#FBF8F3]">
      <div
        className="
        w-full 
        max-w-[1416px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[60px] 
        md:px-[100px] 
        lg:px-[156px] 
        
        pt-[60px] 
        md:pt-[80px] 
        lg:pt-[96px] 
        
        pb-[60px] 
        md:pb-[80px] 
        lg:pb-[96px]
      "
      >
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
            className="text-[#0F2D5C] text-[14px] md:text-[16px] mb-[8px]"
          >
            Aprende con nosotros
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="
              text-[#0F2D5C] 
              text-[22px] 
              sm:text-[24px] 
              md:text-[28px] 
              font-medium 
              leading-[30px] 
              md:leading-[34px]
            "
          >
            Todo lo que nadie te explica cuando vives afuera.
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Link
              href="/blog"
              className="inline-flex items-center mt-[4px] text-[#0F2D5C] font-semibold text-[13px] md:text-[14px] hover:text-[#1A4F9E] transition-colors"
            >
              Ver todos los artículos →
            </Link>
          </motion.div>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="
            mt-[32px] 
            md:mt-[48px] 
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-[16px] 
            md:gap-[20px]
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {(articles.length > 0 ? articles : fallbackArticles).map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="
                bg-white 
                border border-[#0F2D5C]/10 
                rounded-[16px] 
                overflow-hidden 
                flex flex-col 
                shadow-[0_4px_12px_rgba(15,45,92,0.08)] 
                hover:shadow-[0_16px_32px_rgba(15,45,92,0.12)]
                min-h-[360px] sm:min-h-[380px] md:min-h-[420px]
              "
            >
              <Link href={article.href} className="flex h-full flex-col">
                <div
                  className="
                  relative flex items-center justify-center bg-[#DADADA] 
                  h-[200px] sm:h-[240px] md:h-[260px] lg:h-[240px]
                "
                >
                  {article.imageUrl ? (
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-black/20 text-[32px] md:text-[40px]">
                      {article.icon}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5C]/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-4 md:p-6">
                  <span className="mb-4 inline-flex w-fit rounded-full bg-[#1A4F9E]/7 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#1A4F9E] md:text-[11px]">
                    {article.category}
                  </span>

                  <h3 className="mb-4 line-clamp-3 text-[14px] font-semibold leading-5 text-[#0F2D5C] md:text-[16px] md:leading-6">
                    {article.title}
                  </h3>

                  <div className="mt-auto flex items-center gap-3 text-[11px] text-[#94A3B8] md:text-xs">
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {postsError && articles.length === 0 ? (
          <div className="mt-6 rounded-[12px] border border-[#F4C7C7] bg-[#FFF5F5] px-5 py-4 text-center text-[13px] text-[#8A1F1F]">
            {postsError}
          </div>
        ) : null}
      </div>
    </section>
  );
}
