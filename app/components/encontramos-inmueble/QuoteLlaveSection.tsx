export default function QuoteLlaveSection() {
  return (
    <section className="relative flex h-[387px] w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#0F2D5C_0%,#1A4F9E_100%)] px-4 font-['Montserrat',system-ui,sans-serif]">
      {/* Brillo suave del fondo */}
      <div className="pointer-events-none absolute right-[-120px] top-[-130px] h-[430px] w-[430px] rounded-full bg-white/10 blur-[95px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
        {/* Comillas */}
        <div className="mb-[28px] h-[52px] text-[64px] font-normal leading-[52px] text-[#F0B429]/30">
          &quot;
        </div>

        {/* Frase principal */}
        <p className="mx-auto max-w-[624px] text-center text-[23px] font-normal italic leading-[1.5] text-white sm:text-[26px] sm:leading-[39px] md:text-[28px] md:leading-[42px]">
          El colombiano que vive fuera puede invertir
          <br className="hidden sm:block" />
          en Colombia sin desgastarse buscando.
          <br className="hidden sm:block" />
          Nosotros encontramos la llave.
        </p>

        {/* Fuente */}
        <div className="mt-[24px] text-center text-[11px] font-normal uppercase leading-[18px] tracking-[0.14em] text-[#F0B429] sm:text-[12px] sm:tracking-[1.68px]">
          Propósito · Llave Inmobiliaria · Colraices
        </div>
      </div>
    </section>
  );
}