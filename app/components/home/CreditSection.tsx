"use client";

import Link from "next/link";

export default function CreditSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2A3F77] pb-[80px] pt-[80px] md:pb-[110px] md:pt-[120px]">
      <div className="absolute left-0 top-0 z-[5] h-[60px] w-full bg-white md:h-[88px]" />
      <img
        src="/texture-top.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 z-10 h-[60px] w-full object-cover md:h-[88px]"
      />


      <div className="pointer-events-none absolute left-[-300px] top-[60px] hidden h-[760px] w-[760px] rounded-full border border-white/10 lg:block" />
      <div className="pointer-events-none absolute left-[-250px] top-[110px] hidden h-[660px] w-[660px] rounded-full border border-white/10 lg:block" />
      <div className="pointer-events-none absolute left-[-200px] top-[160px] hidden h-[560px] w-[560px] rounded-full border border-white/10 lg:block" />
      <div className="pointer-events-none absolute left-[-150px] top-[210px] hidden h-[460px] w-[460px] rounded-full border border-white/10 lg:block" />

      <div className="relative z-20 mx-auto w-full max-w-[1180px] px-[20px] sm:px-[40px] md:px-[60px]">
        <div className="grid grid-cols-1 items-start gap-[40px] md:grid-cols-[1fr_359px] md:gap-[64px]">
          <div className="pt-[54px] md:pt-[58px]">
            <h2 className="mb-[28px] md:mb-[30px] text-left">
              <span className="block text-[26px] leading-[1.198] text-white sm:text-[30px] md:text-[31.2px] font-bold">
                ¿Tienes ingresos en el exterior?
              </span>
              <span className="block text-[26px] leading-[1.198] text-white sm:text-[30px] md:text-[28.29px] font-normal md:whitespace-nowrap">
                Puedes invertir y construir tu patrimonio en Colombia.
              </span>
              <span className="mt-[2px] block text-[24px] leading-[1.198] text-[#FFC107] sm:text-[28px] md:text-[29.12px] font-bold italic md:whitespace-nowrap">
                Solo necesitas conocer tu cupo de crédito.
              </span>
            </h2>

            <div className="mb-[28px] md:mb-[30px] max-w-[768.29px] text-[15.2px] leading-[26.6px] text-white/[0.55] font-normal space-y-[8px]">
              <p>Te ayudamos a calcular tu capacidad de financiamiento y validar si hoy tu crédito es viable.</p>
              <p>Crédito Hipotecario | Libre Inversión | Leasing</p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex h-[33.26px] items-center rounded-[100px] border border-white/[0.12] bg-[#FFC107] px-[16px] text-[14px] font-semibold leading-[21px] text-[#2A3F77] transition hover:bg-[#FFD54F]"
            >
              Contacto
            </Link>
          </div>

          <div className="mx-auto w-full max-w-[359px] md:ml-auto">
            <div className="h-auto min-h-[466.07px] rounded-tl-[16px] rounded-tr-none rounded-bl-none rounded-br-[16px] bg-gradient-to-b from-[#F8F9FA] to-white p-[28px] shadow-[0_20px_50px_rgba(10,10,10,0.15)]">
              <div className="mb-[20px] mx-auto flex h-[35.97px] w-fit items-center justify-center gap-[8px] rounded-[20px] bg-[#FFC107] px-[15.99px] py-[6px] text-[#2A3F77]">
                <span className="text-[16px] leading-[24px] text-[#0A0A0A]" aria-hidden>
                  💳
                </span>
                <span className="text-[12px] font-semibold leading-[19.5px]">Tu cupo de crédito 100% online</span>
              </div>

              <h3 className="mb-[28px] text-left text-[22px] font-normal leading-[28.6px] text-[#2A3F77]">
                Conoce cuánto te prestan
                <br />
                los bancos en <span className="text-[#FFC107]">Colombia</span>
              </h3>

              <div className="mb-[30px] flex w-full max-w-[304.03px] flex-col gap-[22px]">
                {[
                  ["🛡️", "Sin documentos"],
                  ["⚡", "Sin esperas"],
                  ["⭐", "Sin costo ni compromisos"],
                ].map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-[13.98px]">
                    <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[22px] bg-[#2A3F77] px-[8.27px] text-[20px]">
                      <span aria-hidden>{icon}</span>
                    </div>
                    <span className="text-[14px] leading-[26.47px] font-semibold text-[#2A3F77]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/credito"
                className="block h-[52.98px] w-full max-w-[304.03px] rounded-[12px] bg-[#2A3F77] py-[15px] text-center text-[14px] font-bold leading-[21px] text-white transition hover:opacity-90"
              >
                Obtén tu cupo de crédito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}