"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[520px] md:h-[600px] flex items-center overflow-hidden">

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-no-repeat bg-[center_30%] bg-[length:140%] sm:bg-[length:120%] md:bg-[length:100%]"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* CONTENEDOR */}
      <div className="
        relative 
        w-full 
        max-w-[1416px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[40px] 
        md:px-[80px] 
        lg:px-[156px]
      ">

        <div className="
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          justify-between 
          gap-[40px]
        ">

          {/* TEXTO */}
          <div className="max-w-[620px] text-center lg:text-left">

            {/* EYEBROW */}
            <div className="flex items-center justify-center lg:justify-start gap-[8px] mt-[3.5px] mb-4">
              <div className="w-6 h-[1px] bg-[#FFC107]" />

              <p className="
                text-[#FFC107] 
                text-[16px] 
                leading-[24px] 
                font-medium 
                italic 
                max-w-[475px]
              ">
                Para colombianos que construyen futuro desde afuera
              </p>
            </div>

            {/* TITULO */}
            <h1 className="
              text-white 
              text-[26px] 
              sm:text-[30px] 
              md:text-[35.2px] 
              leading-[34px] 
              sm:leading-[38px] 
              md:leading-[38.7px] 
              mb-4 md:mb-6
            ">

              <span className="block font-normal">
                Ese dinero que mandas a casa
              </span>

              <span className="block font-light">
                puede hacer mucho más que
              </span>

              <span className="block text-[#FFC107] font-bold italic">
                llegar a fin de mes.
              </span>

            </h1>

            {/* DESCRIPCIÓN */}
            <p className="
              text-white/52 
              text-[16.8px] 
              leading-[29.4px] 
              font-light 
              mb-6 md:mb-8
            ">
              Te ayudamos a convertir tus remesas en una casa, en un negocio, en algo que dure.
              Con acompañamiento real, desde donde estás.
            </p>

            {/* BOTONES */}
            <div className="
              flex 
              flex-col 
              sm:flex-row 
              items-center 
              justify-center 
              lg:justify-start 
              gap-4 sm:gap-6
            ">

              <Link
                href="/contacto"
                className="
                  bg-[#FFC107] text-[#2A3F77] 
                  w-full sm:w-[209px] 
                  h-[44px] md:h-[48px] 
                  flex items-center justify-center 
                  rounded-full 
                  text-[14.4px] 
                  font-semibold 
                  transition hover:opacity-90
                "
              >
                Quiero saber cómo →
              </Link>

              <Link
                href="/servicios"
                className="
                  border border-white text-white 
                  w-full sm:w-auto 
                  px-6 
                  h-[42px] md:h-[44px] 
                  flex items-center justify-center 
                  rounded-full 
                  text-[14.4px] 
                  font-semibold 
                  transition hover:bg-white hover:text-[#0B1F3A]
                "
              >
                Conoce el ecosistema
              </Link>

            </div>

          </div>

          {/* CARD DERECHA */}
          <div className="
            relative 
            w-full 
            max-w-[420px] 
            h-auto 
            lg:h-[401px] 
            p-5 md:p-7 
            
            rounded-tl-[40px] 
            rounded-tr-none 
            rounded-bl-none 
            rounded-br-[40px] 
            
            bg-white
            border border-white/40
            shadow-[0_25px_80px_rgba(0,0,0,0.25)] 
            overflow-visible
          ">

            {/* LUCES */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,243,199,0.9),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,79,158,0.25),transparent_60%)] pointer-events-none" />

            {/* CONTENIDO */}
            <div className="relative z-10">

              {/* TAG */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F7] border border-[#CBD5E1] mb-4 md:mb-5">
                <div className="w-2 h-2 bg-[#FFC107] rounded-full"></div>
                <span className="text-[11.52px] font-semibold text-[#0F2D5C] tracking-wide">
                  ECOSISTEMA COLRAICES
                </span>
              </div>

              {/* TITULO */}
              <h3 className="text-[44.8px] font-bold text-[#0F2D5C] leading-none">
                23 años
              </h3>

              {/* TEXTO */}
              <p className="text-[#1A4F9E] text-[12.8px] font-normal mt-2 mb-5 md:mb-6">
                acompañando la diáspora colombiana
              </p>

              {/* LISTA */}
              <div className="space-y-3">

                {[
                  { text: "Financiación en Colombia", icon: "💰" },
                  { text: "Tu propiedad en Colombia", icon: "🏠" },
                  { text: "Trámites sin enredos", icon: "⚖️" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center justify-between px-4 py-[12px] md:py-[14px] rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white transition"
                  >
                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-white shadow-sm">
                        {item.icon}
                      </div>

                      <span className="text-[13.6px] font-medium text-[#0F2D5C]">
                        {item.text}
                      </span>

                    </div>

                    <span className="text-[#2A3F77]">›</span>
                  </div>
                ))}

              </div>

            </div>

            {/* BADGE */}
            <div className="
              absolute 
              -left-[10px] 
              md:-left-[32px] 
              -bottom-[20px] 
              z-20 
              
              w-[180px] md:w-[219px] 
              h-[48px] md:h-[52px] 
              
              bg-white 
              rounded-tl-[16px] 
              rounded-br-[16px]
              
              px-3 md:px-4 
              flex items-center gap-3 
              
              shadow-[0_8px_25px_rgba(0,0,0,0.12)]
            ">

              <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md bg-[#FFF6D6]">
                🏠
              </div>

              <div className="text-[11px] md:text-[12px] leading-tight">
                <p className="text-[#94A3B8]">Negocios concretados</p>
                <p className="font-semibold text-[#0B1F3A]">
                  +11.000 en Colombia
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}