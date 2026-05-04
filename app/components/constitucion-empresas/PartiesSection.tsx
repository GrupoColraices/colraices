"use client";

const exteriorSituations = [
  "Ya intentó apoyar un emprendimiento familiar antes y fracasó. Esta vez quiere hacerlo con método.",
  "Tiene una idea de negocio —o su familiar la tiene— pero no sabe si es viable ni cómo formalizarla.",
  "Quiere emprender pensando en el retorno: tener algo funcionando cuando llegue a Colombia.",
  "Quiere visibilidad real sobre su inversión sin tener que microgestionar a su familiar.",
];

const colombiaSituations = [
  "No entiende costos, márgenes, flujo de caja ni manejo de clientes — y lo necesita.",
  "Quiere responder con resultados, pero tomar decisiones solo sin acompañamiento lo expone a errores graves.",
  "Nunca ha tramitado la constitución legal de una empresa ni conoce el régimen tributario que le aplica.",
  "Necesita herramientas prácticas para rendir cuentas con estructura a quien lo está respaldando.",
];

export default function PartiesSection() {
  return (
    <section className="w-full bg-[#FBF8F3] py-[64px] sm:py-[78px] lg:py-[88px] px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1180px] mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-[1380px] mx-auto mb-12 lg:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="w-7 h-[1.5px] bg-[#D4A017]" />
            <span className="uppercase tracking-[0.30em] text-[10px] sm:text-[11px] font-semibold text-[#D4A017]">
              Para quién es
            </span>
          </div>

          <h2 className="font-montserrat font-bold text-[#0F2D5C] text-[30px] sm:text-[54px] lg:text-[66px] leading-[1.08] tracking-[-0.04em]">
            Un servicio que trabaja{" "}
            <span className="text-[#E4A900] italic font-semibold">
              con dos personas
            </span>
          </h2>

          <p className="mt-5 text-[#5E6C84] text-[15px] sm:text-[18px] lg:text-[19px] leading-[1.7] font-medium max-w-[1380px] mx-auto">
            Asesoría de Emprendimiento reconoce una dinámica que ningún otro
            servicio del ecosistema atiende: el colombiano que financia desde
            afuera y el familiar que construye desde Colombia.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          {/* EXTERIOR */}
          <div className="bg-white rounded-[24px] overflow-hidden border border-[rgba(15,45,92,0.06)] shadow-[0_12px_34px_rgba(15,45,92,0.06)] hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(15,45,92,0.10)] transition-all duration-500 flex flex-col">
            <div className="relative min-h-[165px] bg-[linear-gradient(135deg,#0A2B63_0%,#0F2D5C_58%,#183F82_100%)] px-7 sm:px-8 pt-8 pb-7">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full border border-white/10 translate-x-7 -translate-y-2" />


              <div className="relative z-10">
                <div className="text-[32px] mb-4">🌍</div>

                <h3 className="font-montserrat font-bold text-white text-[25px] sm:text-[33px] leading-[1.14] tracking-[-0.03em] max-w-[95%]">
                  El colombiano en el exterior
                </h3>

                <p className="mt-2.5 text-white/78 text-[13px] sm:text-[14px] font-medium">
                  Quien impulsa · quien financia · quien sueña con volver
                </p>
              </div>
            </div>

            <div className="px-7 sm:px-8 py-6 flex-1">
              <p className="text-[#475569] text-[15px] sm:text-[17px] leading-[1.82] font-medium mb-7">
                Lleva años enviando remesas y quiere que ese dinero construya
                algo real y sostenible en Colombia.
              </p>

              <div className="space-y-4">
                {exteriorSituations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-[#667085] text-[13px] sm:text-[14px] leading-[1.75]"
                  >
                    <span className="w-[6px] h-[6px] rounded-full bg-[#0F2D5C] mt-[8px] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLOMBIA */}
          <div className="bg-white rounded-[24px] overflow-hidden border border-[rgba(15,45,92,0.06)] shadow-[0_12px_34px_rgba(15,45,92,0.06)] hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(15,45,92,0.10)] transition-all duration-500 flex flex-col">
            <div className="relative min-h-[165px] bg-[linear-gradient(135deg,#7A5900_0%,#B88600_48%,#E4A900_100%)] px-7 sm:px-8 pt-8 pb-7">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full border border-white/10 translate-x-7 -translate-y-2" />

              <div className="relative z-10">
                <div className="text-[32px] mb-4">🇨🇴</div>

                <h3 className="font-montserrat font-bold text-white text-[25px] sm:text-[33px] leading-[1.14] tracking-[-0.03em] max-w-[95%]">
                  El familiar en Colombia
                </h3>

                <p className="mt-2.5 text-white/82 text-[13px] sm:text-[14px] font-medium">
                  Quien ejecuta · quien opera · quien necesita formación
                </p>
              </div>
            </div>

            <div className="px-7 sm:px-8 py-6 flex-1">
              <p className="text-[#475569] text-[15px] sm:text-[17px] leading-[1.82] font-medium mb-7">
                Tiene energía y disposición para trabajar, pero nunca ha tenido
                un negocio formal y no sabe por dónde empezar.
              </p>

              <div className="space-y-4">
                {colombiaSituations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-[#667085] text-[13px] sm:text-[14px] leading-[1.75]"
                  >
                    <span className="w-[6px] h-[6px] rounded-full bg-[#E4A900] mt-[8px] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONNECTION BANNER */}
        <div className="mt-9 rounded-[22px] border border-[#ECD38A] bg-[#FFF9EC] px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-[0_4px_14px_rgba(15,45,92,0.04)]">
          <div className="w-[58px] h-[58px] rounded-full bg-white border border-[#EADDF8] flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-[26px]">🔗</span>
          </div>

          <p className="text-[#5E6C84] text-[13px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-medium">
            Colraices actúa como el{" "}
            <strong className="text-[#0F2D5C] font-bold">
              puente profesional entre ambas partes
            </strong>
            . Un asesor único que acompaña al que financia y al que ejecuta,
            manteniéndolos alineados durante los 14 meses que dura el proceso.
          </p>
        </div>
      </div>
    </section>
  );
}