export default function BrujulaQuoteSection() {
  return (
    <section className="relative isolate flex w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#0F2D5C_0%,#1A4F9E_100%)] px-5 font-['Montserrat',system-ui,sans-serif] min-[360px]:px-6 sm:px-8 lg:px-10">
      {/* Altura responsive */}
      <div className="flex min-h-[280px] w-full items-center justify-center py-12 sm:min-h-[300px] sm:py-14 md:min-h-[322px] md:py-0">
        {/* Fondo suave premium */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_36%,rgba(255,255,255,0.075),transparent_46%)]" />
          <div className="absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-white/5 blur-[105px] sm:h-[520px] sm:w-[520px] sm:blur-[115px]" />
          <div className="absolute bottom-[-220px] left-[-160px] h-[360px] w-[360px] rounded-full bg-[#F0B429]/[0.06] blur-[110px]" />
        </div>

        <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center text-center">
          {/* Comilla */}
          <div className="mb-7 h-[34px] text-[44px] font-normal leading-[34px] text-[#F0B429]/30 sm:mb-8 sm:h-[42px] sm:text-[54px] sm:leading-[42px] md:mb-[38px] md:h-[52px] md:text-[64px] md:leading-[51.2px]">
            &quot;
          </div>

          {/* Texto principal */}
          <p className="mx-auto max-w-[1056px] text-center text-[clamp(1.25rem,4.8vw,1.8rem)] font-normal italic leading-[1.48] tracking-[0px] text-white sm:leading-[1.46] md:leading-[41.8px]">
            Cuando el colombiano de afuera compra bien, la remesa se
            <br className="hidden md:block" />
            convierte en patrimonio. Eso es lo que hacemos.
          </p>

          {/* Fuente */}
          <div className="mt-2 max-w-full break-words text-center text-[10px] font-normal uppercase leading-[16px] tracking-[1.25px] text-[#F0B429] min-[380px]:tracking-[1.45px] sm:text-[11px] sm:leading-[18px] sm:tracking-[1.6px] md:mt-[4px] lg:text-[12.8px] lg:leading-[19.2px] lg:tracking-[1.79px]">
            PROPÓSITO · BRÚJULA INMOBILIARIA · COLRAICES
          </div>
        </div>
      </div>
    </section>
  );
}