"use client";

import Link from "next/link";

const cities = ["Bogotá", "Medellín", "Cartagena", "Cali", "y más ciudades"];

export default function TourSection() {
  return (
    <section className="w-full bg-[#F8F6F2] py-[60px] md:py-[80px] lg:py-[100px]">

      <div className="
        w-full 
        max-w-[1416px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[40px] 
        md:px-[80px] 
        lg:px-[120px] 
        
        grid 
        grid-cols-1 
        md:grid-cols-2 
        
        gap-[40px] 
        md:gap-[80px] 
        
        items-center
      ">

        {/* IZQUIERDA */}
        <div className="w-full max-w-[520px] mx-auto md:mx-0 text-center md:text-left">

          <p className="text-[#FFC107] text-[16px] md:text-[18px] italic font-bold mb-3 md:mb-4">
            Evento estrella del ecosistema
          </p>

          <h2 className="
            text-[#2A3F77] 
            text-[28px] 
            sm:text-[34px] 
            md:text-[42px] 
            leading-[1.2] 
            md:leading-[1.15] 
            mb-4 md:mb-6
          ">

            <span className="font-bold italic text-[#0F2D5C]">
              El tour de la Vivienda
            </span>

            <br />

            <span className="
              font-normal 
              not-italic 
              text-[#0F2D5C] 
              text-[24px] 
              sm:text-[28px] 
              md:text-[36px]
              leading-[1.2]
            ">
              llega a tu país
            </span>

          </h2>

          <p className="text-[#475569] text-[15px] md:text-[15.2px] leading-[26px] md:leading-[26.6px] mb-6 md:mb-8 max-w-[460px] mx-auto md:mx-0">
            Conoce proyectos, entiende cómo comprar y conecta con quienes te acompañan en todo el proceso.
          </p>

          <Link
            href="/tour"
            className="
              inline-flex items-center justify-center 
              h-[44px] md:h-[48px] 
              px-5 md:px-6 
              
              rounded-full 
              border-2 border-[#2A3F77] 
              text-[#2A3F77] 
              
              font-semibold 
              text-[13px] md:text-[14.4px] 
              
              hover:bg-[#2A3F77]/5 transition
            "
          >
            Conocer más
          </Link>

          <div className="
            flex flex-wrap items-center justify-center md:justify-start 
            gap-x-4 gap-y-2 
            mt-6 md:mt-8 
            text-[12.48px] leading-[18.7px] font-medium
          ">

            {cities.map((city, i) => (
              <div key={i} className="flex items-center gap-2">

                <div className="w-[6px] h-[6px] rounded-full bg-[#FFC107]" />

                <span className={i === cities.length - 1 ? "italic text-[#94A3B8]" : "text-[#475569]"}>
                  {city}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* DERECHA (MAPA) */}
        <div className="w-full max-w-[520px] mx-auto md:ml-auto flex justify-center md:justify-end">

          <img
            src="/mapa.png"
            alt="Mapa Tour de la Vivienda"
            className="
              w-full 
              max-w-[502px]
              h-auto 
              object-contain
            "
          />

        </div>

      </div>

    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-white text-[18px] md:text-[20px] font-bold mb-1">{value}</p>
      <p className="text-white/50 text-[10px] md:text-[11px]">{label}</p>
    </div>
  );
}