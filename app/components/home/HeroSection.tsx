"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/fondo.png')",
        }}
      />

      {/* OVERLAY (GRADIENTE REAL) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/85 to-[#0B1F3A]/70" />

      {/* CONTENIDO */}
      <div className="relative w-full max-w-[1416px] mx-auto px-6 lg:px-[156px]">

        <div className="flex items-center justify-between">

          {/* TEXTO */}
          <div className="max-w-[620px]">

          <p className="text-[#FFC107] text-[16px] mb-4 italic">
            — Para colombianos que construyen futuro desde afuera
          </p>

          <h1 className="text-white text-[38.7px] leading-[35.2px] mb-6">

            <span className="font-normal">
              Ese dinero que mandas a casa
            </span>

            <br />

            <span className="font-light">
              puede hacer mucho más que
            </span>

            <br />

            <span className="text-[#FFC107] font-bold italic">
              llegar a fin de mes.
            </span>

          </h1>

          <p className="text-white/70 text-[16px] font-light mb-8">
            Te ayudamos a convertir tus remesas en una casa, en un negocio, en algo que dure.
            Con acompañamiento real, desde donde estás.
          </p>

          <div className="flex items-center gap-4">

            <Link
              href="/contacto"
              className="bg-[#FFC107] text-[#0F2D5C] px-6 h-[44px] flex items-center rounded-full text-[14px] font-semibold"
            >
              Quiero saber cómo →
            </Link>

            <Link
              href="/servicios"
              className="border border-white text-white px-6 h-[44px] flex items-center rounded-full text-[14px]"
            >
              Conoce el ecosistema
            </Link>

          </div>
        </div>

          {/* CARD DERECHA */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[380px]">

            <span className="text-xs text-gray-400 font-semibold uppercase">
              ECOSISTEMA COLRAICES
            </span>

            <h3 className="text-[32px] font-bold mt-2 text-[#0B1F3A]">
              23 años
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              acompañando la diáspora colombiana
            </p>

            <div className="space-y-3">
              {[
                "Financiación en Colombia",
                "Tu propiedad en Colombia",
                "Servicios legales y migratorios",
              ].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 transition"
                >
                  <span className="text-sm">{item}</span>
                  <span>›</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}