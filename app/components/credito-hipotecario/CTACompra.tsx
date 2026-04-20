"use client";

export default function CTACompra() {
  return (
    <section
      className="w-full flex justify-center bg-[#091D3E] pt-[80px] md:pt-[100px] pb-[60px]"
    >
      <div className="w-full max-w-[1180px] px-[20px] md:px-0 flex flex-col items-center text-center">
        
        {/* CONTENEDOR INTERNO */}
        <div className="w-full max-w-[540px] flex flex-col items-center">
          
          {/* TITULO */}
          <h2 className="text-white font-semibold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px]">
            Empieza hoy.{" "}
            <span className="text-[#FFC107] italic">
              Compra mañana.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mt-[16px] md:mt-[20px] text-[14px] md:text-[15.2px] leading-[22px] md:leading-[25.8px] text-white/50">
            El primer paso es saber si calificas. Llena el formulario. En 3–5 días te decimos si estás listo para comprar.
          </p>

          {/* BOTONES */}
          <div className="w-full flex flex-col sm:flex-row justify-center gap-[12px] mt-[24px] md:mt-[30px]">
            
            {/* BOTON PRINCIPAL */}
            <button
              className="w-full sm:w-[253.76px] h-[49.2px] rounded-full bg-[#FFC107] text-white font-semibold text-[14.4px] leading-[21.6px] hover:brightness-110 transition"
            >
              Verificar viabilidad — gratis
            </button>

            {/* BOTON SECUNDARIO */}
            <button
              className="w-full sm:w-[181.98px] h-[49.2px] rounded-full border text-white font-semibold text-[14.4px] leading-[21.6px] border-white/30 hover:bg-white/10 transition"
            >
              ¿Cómo funciona?
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}