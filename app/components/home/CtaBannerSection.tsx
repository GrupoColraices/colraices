"use client";

import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-[#0F2D5C]">

      {/* CONTENEDOR */}
      <div className="
        w-full 
        max-w-[1416.15px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[60px] 
        md:px-[100px] 
        lg:px-[156.07px] 
        
        pt-[50px] 
        md:pt-[65px] 
        lg:pt-[79.99px] 
        
        pb-[50px] 
        md:pb-[65px] 
        lg:pb-[79.99px]
      ">

        <div className="w-full max-w-[1104px] mx-auto text-center">

          {/* TITULO */}
          <h2 className="
            text-white 
            text-[26px] 
            sm:text-[32px] 
            md:text-[36px] 
            lg:text-[40px] 
            
            font-semibold 
            leading-[36px] 
            sm:leading-[44px] 
            md:leading-[48px] 
            lg:leading-[54px]
          ">
            ¿Listo para que tu remesa haga más?
          </h2>

          {/* SUBTEXTO */}
          <p className="
            text-white/70 
            text-[14px] 
            sm:text-[15px] 
            md:text-[16px] 
            
            leading-[22px] 
            md:leading-[24px] 
            
            mt-[10px] md:mt-[12px]
          ">
            Empieza con una conversación. Sin compromisos, sin letra pequeña, sin enredos.
          </p>

          {/* BOTONES */}
          <div className="
            flex 
            flex-col 
            sm:flex-row 
            
            justify-center 
            items-center 
            
            gap-[10px] 
            md:gap-[12px] 
            
            mt-[24px] 
            md:mt-[32px]
          ">

            {/* BOTÓN PRINCIPAL */}
            <Link
              href="/contacto"
              className="
              h-[44px] 
              sm:h-[48px] 
              lg:h-[50.11px] 
              
              px-[18px] 
              sm:px-[22px] 
              lg:px-[26px] 
              
              flex items-center justify-center gap-[8px]
              rounded-full bg-[#FFC107] text-[#2A3F77] 
              
              text-[13px] 
              md:text-[14px] 
              font-semibold
              
              shadow-[0_8px_20px_rgba(255,193,7,0.35)]
              transition-all duration-300
              hover:scale-[1.04]
              hover:shadow-[0_12px_30px_rgba(255,193,7,0.45)]
              "
            >
              Habla con un asesor →
            </Link>

            {/* BOTÓN SECUNDARIO */}
            <Link
              href="/servicios"
              className="
              h-[44px] 
              sm:h-[48px] 
              lg:h-[50.11px] 
              
              px-[18px] 
              sm:px-[22px] 
              lg:px-[26px] 
              
              flex items-center justify-center gap-[8px]
              rounded-full border border-white/30 text-white 
              
              text-[13px] 
              md:text-[14px] 
              font-medium
              
              transition-all duration-300
              hover:bg-white hover:text-[#0F2D5C] hover:border-white
              "
            >
              Explora los servicios
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}