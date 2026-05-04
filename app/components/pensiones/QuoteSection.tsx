export default function QuoteSection() {
  return (
    <section className="w-full bg-[#0F2D5C] py-[80px] px-5 overflow-hidden">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        
        {/* QUOTE MARK */}
        <div
          className="
            text-[80px]
            leading-[56px]
            font-normal
            text-[rgba(201,144,12,0.20)]
            mb-[34px]

            md:text-[70px]
            sm:text-[58px]
            text-[48px]
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          "
        </div>

        {/* QUOTE TEXT */}
        <p
          className="
            max-w-[999px]
            mx-auto
            text-white
            italic
            font-normal
            text-[28px]
            leading-[42px]
            tracking-[0px]

            lg:text-[28px]
            md:text-[24px]
            sm:text-[19px]
            text-[17px]

            px-2
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Tu pensión colombiana no se fue contigo. Solo perdiste la información.
          Colraices te la devuelve — con un diagnóstico claro, un plan concreto y
          alguien de tu lado si el Estado no cumple.
        </p>

        {/* SOURCE */}
        <div
          className="
            mt-[22px]
            uppercase
            font-normal
            text-[11.52px]
            leading-[17.3px]
            tracking-[1.61px]
            text-white/35

            sm:text-[10px]
            text-[9px]
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          PROPÓSITO · PENSIONES · COLRAICES
        </div>
      </div>
    </section>
  );
}