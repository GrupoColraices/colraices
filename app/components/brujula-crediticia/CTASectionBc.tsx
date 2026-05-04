"use client";

export default function CTASectionBc() {
  return (
    <section className="w-full bg-[#091D3E] flex justify-center">
      <div className="w-full max-w-[1180px] px-[48px] pt-[100px] pb-[60px] flex justify-center">

        <div className="w-full max-w-[720px] flex flex-col items-center text-center">

          {/* TITULO */}
          <h2 className="text-[38px] leading-[43.7px] font-semibold text-white whitespace-nowrap">
            No corras hacia un crédito.{" "}
            <span className="text-[#FFD54F] italic font-semibold">
              Llega bien preparado.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mt-[14px] text-[15.2px] leading-[25.6px] text-white/46">
            La Brújula Creditici    a no acelera decisiones — las prepara bien. En 3 días hábiles sabes si puedes comprar y qué necesitas para hacerlo.
          </p>

          {/* BOTÓN */}
          <button className="mt-[28px] px-[28px] py-[10px] text-[14.4px] leading-[21.6px] font-semibold text-white border border-white/40 rounded-full hover:bg-white/[0.08] hover:border-white hover:text-white transition-all duration-300">
            Hablar con un asesor
          </button>

          {/* TEXTO INFERIOR */}
          <p className="mt-[18px] text-[12px] leading-[18px] text-white/26">
            🔒 Pago seguro · USD o EUR según tu país · Sin tarifas ocultas
          </p>

        </div>
      </div>
    </section>
  );
}