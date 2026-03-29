"use client";

import Link from "next/link";

export default function CreditSection() {
  return (
    <section className="relative w-full bg-[#2A3F77] overflow-hidden pt-[120px] pb-[110px]">

      {/* ✅ FONDO BLANCO PARA EVITAR AZUL DETRÁS */}
      <div className="absolute top-0 left-0 w-full h-[88px] bg-white z-[5]" />

      {/* SHAPE SUPERIOR */}
      <img
        src="/Mini_Fondo.png"
        alt=""
        className="absolute top-0 left-0 w-full h-[88px] object-cover z-10 pointer-events-none"
      />

      {/* CONTENEDOR */}
      <div className="relative w-full max-w-[1416px] mx-auto px-6 md:px-[156px] grid md:grid-cols-2 gap-[80px] items-center">

        {/* IZQUIERDA */}
        <div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#FFC107]" />
            <p className="text-[#FFC107] text-[13px] tracking-[1px] font-medium uppercase">
              Crédito hipotecario y libre inversión
            </p>
          </div>

          <h2 className="text-white text-[42px] leading-[1.15] mb-6">

            <span className="font-semibold">
              ¿Tienes ingresos en el exterior?
            </span>

            <br />

            <span className="font-light">
              Tienes capacidad de compra en Colombia.
            </span>

            <br />

            <span className="font-semibold italic text-[#FFC107]">
              {["Solo", "necesitas", "quien", "te", "lo", "haga", "posible."].map((word, i) => (
                <span
                  key={i}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {word}{i < 6 ? " " : ""}
                </span>
              ))}
            </span>

          </h2>

          <p className="text-white/70 text-[15px] leading-[26px] max-w-[620px] mb-8">
            Accede a crédito para comprar vivienda o para libre inversión con garantía hipotecaria, estés donde estés. Te acompañamos desde la consulta hasta la firma.
          </p>

          <div className="flex flex-wrap gap-3">

            <Link
              href="/credito"
              className="px-5 py-[10px] rounded-full text-[13px] text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              Crédito de vivienda
            </Link>

            <span className="px-5 py-[10px] rounded-full text-[13px] text-white border border-white/20 bg-white/5 backdrop-blur-sm">
              Libre inversión
            </span>

            <span className="px-5 py-[10px] rounded-full text-[13px] bg-[#FFC107] text-[#2A3F77] font-medium">
              Contacto
            </span>

          </div>

        </div>

        {/* CARD DERECHA */}
        <div className="w-full max-w-[420px] ml-auto">

          <div className="
            bg-[#F8FAFC]
            p-7
            rounded-tl-[16px] rounded-tr-none rounded-bl-none rounded-br-[16px]
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          ">

            <div className="flex items-center justify-between mb-5">
              <p className="text-[#0B1F3A] text-[14px] font-semibold">
                Viabilidad de crédito
              </p>

              <span className="text-[11px] px-3 py-[3px] rounded-full bg-[#FEF3C7] text-[#D97706] font-semibold">
                GRATIS
              </span>
            </div>

            <p className="text-[#94A3B8] text-[11px] tracking-wide mb-1 uppercase">
              Monto estimado
            </p>

            <p className="text-[34px] font-bold text-[#0B1F3A] tracking-tight">
              $___.____
            </p>

            <p className="text-[#94A3B8] text-[12px] mb-5">
              COP — Pesos colombianos
            </p>

            <div className="w-full h-[1px] bg-[#E2E8F0] mb-5" />

            <div className="space-y-4 text-[13px]">

              <div className="flex justify-between">
                <span className="text-[#64748B]">Plazo</span>
                <span className="text-[#0B1F3A] font-medium">__ años</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#64748B]">Tasa de interés</span>
                <span className="text-[#0B1F3A] font-medium">__ %</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#64748B]">Cuota mensual aprox.</span>
                <span className="text-[#0B1F3A] font-medium">$___</span>
              </div>

            </div>

            <Link
              href="/credito"
              className="block mt-7 text-center bg-[#16325C] text-white py-[14px] rounded-full text-[14px] font-medium hover:opacity-90 transition"
            >
              Verificar mi viabilidad →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}