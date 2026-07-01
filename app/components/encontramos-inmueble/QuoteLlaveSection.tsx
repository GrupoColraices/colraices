export default function QuoteLlaveSection() {
  return (
    <section className="relative flex min-h-[340px] w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#0F2D5C_0%,#1A4F9E_100%)] px-5 py-16 font-['Montserrat',system-ui,sans-serif] sm:min-h-[387px] sm:px-6 sm:py-20">
      {/* Brillo suave del fondo */}
      <div className="pointer-events-none absolute right-[-160px] top-[-150px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[90px] sm:right-[-120px] sm:top-[-130px] sm:h-[430px] sm:w-[430px] sm:blur-[95px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
        {/* Comillas */}
        <div className="mb-5 h-[44px] text-[56px] font-normal leading-[44px] text-[#F0B429]/30 sm:mb-7 sm:h-[52px] sm:text-[64px] sm:leading-[52px]">
          &quot;
        </div>

        {/* Frase principal */}
        <p className="mx-auto max-w-[624px] text-balance text-center text-[22px] font-normal italic leading-[1.45] text-white sm:text-[26px] sm:leading-[1.5] md:text-[28px] md:leading-[42px]">
          El colombiano que vive fuera puede invertir
          <br className="hidden sm:block" />
          en Colombia sin desgastarse buscando.
          <br className="hidden sm:block" />
          Nosotros encontramos la llave.
        </p>

        {/* Fuente */}
        <div className="mt-6 max-w-[320px] text-center text-[10px] font-normal uppercase leading-[18px] tracking-[0.14em] text-[#F0B429] sm:max-w-none sm:text-[12px] sm:tracking-[1.68px]">
          Propósito · Llave Inmobiliaria · Colraices
        </div>
      </div>
    </section>
  );
}