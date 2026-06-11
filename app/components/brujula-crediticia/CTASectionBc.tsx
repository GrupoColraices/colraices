"use client";

import { OFFICIAL_WHATSAPP_URL } from "@/app/lib/officialUrls";

export default function CTASectionBc() {
  return (
    <section className="w-full bg-[#091D3E] flex justify-center">
      <div className="w-full max-w-[1180px] px-4 md:px-8 lg:px-[48px] pt-[80px] md:pt-[100px] pb-[50px] md:pb-[60px] flex justify-center">

        <div className="w-full max-w-[720px] flex flex-col items-center text-center">

          {/* TITULO */}
          <h2 className="text-[26px] md:text-[32px] lg:text-[38px] leading-[1.15] font-semibold text-white md:whitespace-nowrap">
            No corras hacia un crédito.{" "}
            <span className="text-[#FFD54F] italic">
              Llega bien preparado.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mt-[14px] text-[14px] md:text-[15.2px] leading-[24px] md:leading-[25.6px] text-white/70">
            La Brújula Crediticia no acelera decisiones — las prepara bien. En 3 días hábiles sabes si puedes comprar y qué necesitas para hacerlo.
          </p>

          {/* BOTÓN */}
          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[28px] px-[28px] py-[10px] text-[14.4px] font-semibold text-[#091D3E] bg-white rounded-full hover:bg-[#FFD54F] transition-all duration-300"
          >
            Hablar con un asesor
          </a>

          {/* TEXTO INFERIOR */}
          <p className="mt-[18px] text-[12px] text-white/40">
            🔒 Pago seguro · USD o EUR según tu país · Sin tarifas ocultas
          </p>

        </div>
      </div>
    </section>
  );
}