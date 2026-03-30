"use client";

import Image from "next/image";
import Link from "next/link";

const items = [
  {
    color: "bg-[#FFC107]",
    tag: "EL DESTINO",
    title: "Crédito hipotecario o libre inversión",
    desc: "Compras o capitalizas en Colombia",
    icon: "🏠",
  },
  {
    color: "bg-[#EF4444]",
    tag: "SI HAY BLOQUEOS",
    title: "Buena Data",
    desc: "Resuelve reportes negativos y deudas",
    icon: "🛠️",
  },
  {
    color: "bg-[#3B82F6]",
    tag: "DIAGNÓSTICO",
    title: "Brújula Financiera",
    desc: "Entiendes tu situación financiera",
    icon: "🧭",
  },
  {
    color: "bg-[#3B82F6]",
    tag: "DIAGNÓSTICO | VIABILIDAD CREDITICIA",
    title: "Brújula Crediticia",
    desc: "Entiendes tu situación ante los bancos",
    icon: "📍",
  },
  {
    color: "bg-[#10B981]",
    tag: "SI TIENES EFECTIVO",
    title: "Monetización",
    desc: "Traes tu dinero a Colombia",
    icon: "💱",
  },
];

export default function FinanzasHero() {
  return (
    <section className="relative w-full h-[660.7px] overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,193,7,0.10),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(15,45,92,0.04),transparent_18%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_32%,rgba(15,45,92,0.04),transparent_16%)]" />
      </div>

      <div className="absolute top-[80px] left-[120px] w-[260px] h-[260px] rounded-full bg-[#0F2D5C]/5 blur-[2px]" />
      <div className="absolute bottom-[140px] left-[60px] w-[220px] h-[220px] rounded-full bg-[#0F2D5C]/5 blur-[2px]" />
      <div className="absolute top-[120px] right-[160px] w-[260px] h-[260px] rounded-full bg-[#0F2D5C]/5 blur-[2px]" />
      <div className="absolute bottom-[40px] right-[180px] w-[160px] h-[160px] rounded-full bg-[#0F2D5C]/5 blur-[2px]" />

      <div className="absolute top-[-75.23px] left-0 w-full">
        <Image
          src="/texture-top.png"
          alt="Texture top"
          width={1416}
          height={89}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="relative w-full max-w-[1416.15px] mx-auto px-[156.07px] pt-[96px]">
        <div className="mx-auto w-full max-w-[1104px] h-[464.72px] flex gap-[64px] items-start">
          <div className="mt-[44.59px] w-[620.03px] max-w-[620.03px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[24px] h-[2px] bg-[#FFC107]" />
              <p className="text-[#2A3F77] text-[16px] leading-[26px]">
                Soluciones financieras para colombianos en el exterior
              </p>
            </div>

            <h1 className="text-[#2A3F77] text-[52px] leading-[58px] font-semibold tracking-[-0.02em]">
              Tu dinero ya está en el exterior.{" "}
              <span className="text-[#FFC107] italic">
                Ahora ponlo a trabajar en Colombia.
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[#2A3F77]/70 text-[16px] leading-[26px]">
              Obtén tu crédito en Colombia para vivienda o libre inversión, y si necesitas ordenar tu perfil, prepárate, o solucionar reportes negativos te acompañamos.
            </p>

            <Link
              href="/finanzas"
              className="mt-8 inline-flex items-center justify-center h-[50px] px-[28px] rounded-full bg-[#FFC107] text-[#2A3F77] text-[14px] font-semibold shadow-[0_10px_25px_rgba(255,193,7,0.35)] transition-all hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(255,193,7,0.45)]"
            >
              ¿Por dónde empiezo? →
            </Link>
          </div>

          <div className="w-[240px] h-[465px] pt-0 flex flex-col justify-between">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className={`w-[3px] h-[48px] rounded-full ${item.color}`} />

                <div className="min-w-0">
                  <p className="text-[#94A3B8] text-[11px] font-semibold uppercase tracking-[0.08em]">
                    {item.tag}
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-[16px] leading-none mt-[2px] opacity-70">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[#2A3F77] text-[14px] font-semibold leading-[20px]">
                        {item.title}
                      </p>
                      <p className="text-[#2A3F77]/70 text-[13px] leading-[20px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <Image
          src="/hero-bg.png"
          alt="Wave bottom"
          width={1416}
          height={120}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}