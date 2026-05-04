"use client";

export default function CTASectionMonetizacion() {
  return (
    <section className="w-full bg-[#091D3E] flex justify-center items-center px-[48px] pt-[100px] pb-[60px]">
      <div className="w-full max-w-[620px] flex flex-col items-center text-center">

        {/* TÍTULO */}
        <h2 className="text-[36px] leading-[1.18] font-bold text-white tracking-tight">
          Tu dinero merece{" "}
          <span className="text-[#F5B400] italic font-bold">
            llegar
            <br />
            bien
          </span>{" "}
          a Colombia.
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="mt-[14px] text-[14.5px] leading-[1.72] text-white/50 max-w-[420px]">
          Monetización te da seguridad, mejor tasa y tranquilidad — todo en un
          solo proceso gestionado por expertos.
        </p>

        {/* BOTÓN */}
        <button className="mt-[28px] px-[28px] py-[10px] text-[14px] font-semibold text-white border border-white/40 rounded-full bg-transparent hover:bg-white/[0.08] hover:border-white/80 transition-all duration-300">
          Agendar consulta gratuita
        </button>

        {/* TEXTO INFERIOR */}
        <p className="mt-[16px] text-[11.5px] leading-[1.6] text-white/28">
          Monto mínimo: USD $10.000 · Sin monto máximo
        </p>

      </div>
    </section>
  );
}