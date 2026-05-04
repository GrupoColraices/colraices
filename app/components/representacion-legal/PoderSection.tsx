export default function PoderSection() {
  return (
    <section className="w-full border-t border-[#0F2D5C] bg-white">
      <div className="mx-auto box-border w-full max-w-[943px] px-[41px] pt-[70px] pb-[66px] max-md:px-6 max-md:pt-16 max-md:pb-14">
        {/* HEADER */}
        <div className="text-center">
          {/* EYEBROW */}
          <p className="m-0 mb-[9px] font-['Montserrat'] text-[14px] font-semibold uppercase leading-[17px] tracking-[2.2px] text-[#C9900C]">
            La figura que te protege
          </p>

          {/* TITLE */}
          <h2 className="m-0 mb-[15px] font-['Montserrat'] text-[30px] font-semibold leading-[35px] tracking-[-0.2px] text-[#0F2D5C] max-md:text-[28px] max-md:leading-[34px]">
            Poder especial.
            <br />
            <span className="italic font-semibold text-[#1A4F9E]">
              No poder general.
            </span>
          </h2>

          {/* TEXT 1 */}
          <p className="mx-auto mt-0 mb-[22px] max-w-[585px] font-['Montserrat'] text-[13px] font-normal leading-[20px] tracking-[-0.05px] text-[#475569]">
            Hay una diferencia fundamental entre los dos tipos de poder notarial.
            Y para ti, como cliente, esa diferencia lo es todo.
          </p>

          {/* TEXT 2 */}
          <p className="mx-auto m-0 max-w-[650px] font-['Montserrat'] text-[13px] font-normal leading-[21px] tracking-[-0.05px] text-[#475569]">
            El poder especial que Colraices usa{" "}
            <strong className="font-bold text-[#0F2D5C]">
              está limitado exactamente a un acto concreto
            </strong>{" "}
            — la firma de una escritura específica, en una notaría específica,
            por un valor específico. No más. Cuando ese acto se ejecuta, el
            poder vence automáticamente.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-[42px] grid grid-cols-1 gap-[26px] md:grid-cols-2">
          {/* CARD 1 */}
          <article className="box-border min-h-[178px] rounded-[10px] border border-[#E8ECF2] bg-white px-[24px] pt-[27px] pb-[24px] shadow-[0_10px_24px_rgba(15,23,42,0.035)]">
            <h3 className="m-0 mb-[13px] font-['Montserrat'] text-[10px] font-semibold uppercase leading-[13px] tracking-[2px] text-[#92650A]">
              Lo que eso significa para ti
            </h3>

            <p className="m-0 font-['Montserrat'] text-[13px] font-normal leading-[21px] tracking-[-0.05px] text-[#475569]">
              Nadie puede actuar más allá de lo que tú autorizaste. El apoderado
              no puede vender otra propiedad tuya, comprometerte en otro negocio
              ni hacer nada que no esté descrito en ese poder. Es la forma más
              segura de delegar una firma.
            </p>
          </article>

          {/* CARD 2 */}
          <article className="box-border min-h-[178px] rounded-[10px] border border-[#E8ECF2] bg-white px-[24px] pt-[27px] pb-[24px] shadow-[0_10px_24px_rgba(15,23,42,0.035)]">
            <h3 className="m-0 mb-[13px] font-['Montserrat'] text-[10px] font-semibold uppercase leading-[13px] tracking-[2px] text-[#92650A]">
              ¿Cómo otorgas el poder desde el exterior?
            </h3>

            <p className="m-0 font-['Montserrat'] text-[13px] font-normal leading-[21px] tracking-[-0.05px] text-[#475569]">
              Ante un notario o autoridad competente en tu país de residencia. El
              documento se apostilla para que tenga validez en Colombia.
              Colraices te guía paso a paso en ese proceso — y verifica que el
              poder esté bien hecho antes de proceder.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}