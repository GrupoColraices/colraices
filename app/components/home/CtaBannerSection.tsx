"use client";

import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-[#0F2D5C]">

      {/* CONTENEDOR */}
      <div
        className="
        w-full 
        max-w-[1200px] 
        mx-auto 
        
        px-4 sm:px-6 lg:px-8 
        
        py-12 sm:py-14 md:py-16 lg:py-20
      "
      >

        <div className="w-full max-w-[900px] mx-auto text-center">

          {/* TITULO */}
          <h2
            className="
            text-white 
            text-[24px] 
            sm:text-[30px] 
            md:text-[36px] 
            lg:text-[40px] 
            
            font-semibold 
            leading-tight
          "
          >
            ¿Listo para que tu remesa haga más?
          </h2>

          {/* SUBTEXTO */}
          <p
            className="
            text-white/70 
            text-[14px] 
            sm:text-[15px] 
            md:text-[16px] 
            
            leading-relaxed
            max-w-[640px]
            mx-auto
            
            mt-3 md:mt-4
          "
          >
            Empieza con una conversación. Sin compromisos, sin letra pequeña, sin enredos.
          </p>

          {/* BOTONES */}
          <div
            className="
            flex flex-col sm:flex-row 
            justify-center items-center 
            gap-3 md:gap-4 
            mt-6 md:mt-8
            w-full
          "
          >

            {/* BOTÓN PRINCIPAL */}
            <Link
              href="/contacto"
              className="
              w-full sm:w-auto
              px-5 sm:px-6 lg:px-7 
              py-3
              
              flex items-center justify-center gap-2
              rounded-full bg-[#FFC107] text-[#2A3F77] 
              
              text-[13px] md:text-[14px] 
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
              w-full sm:w-auto
              px-5 sm:px-6 lg:px-7 
              py-3
              
              flex items-center justify-center gap-2
              rounded-full border border-white/30 text-white 
              
              text-[13px] md:text-[14px] 
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