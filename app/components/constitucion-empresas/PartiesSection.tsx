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
    <section className="w-full bg-[#FBF8F3] py-10 sm:py-12 lg:py-14 px-4 sm:px-5 overflow-hidden">
      <div className="max-w-[1060px] mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-[920px] mx-auto mb-8 lg:mb-10">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-[#D4A017]" />
            <span className="uppercase tracking-[0.26em] text-[9px] sm:text-[10px] font-semibold text-[#D4A017]">
              Para quién es
            </span>
          </div>

          <h2 className="font-montserrat font-bold text-[#0F2D5C] text-[30px] sm:text-[42px] lg:text-[50px] leading-[1.1] tracking-[-0.015em]">
            Un servicio que trabaja{" "}
            <span className="text-[#E4A900] italic font-semibold">
              con dos personas
            </span>
          </h2>

          <p className="mt-3.5 text-[#5E6C84] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.62] font-medium max-w-[860px] mx-auto">
            Asesoría de Emprendimiento reconoce una dinámica que ningún otro
            servicio del ecosistema atiende: el colombiano que financia desde
            afuera y el familiar que construye desde Colombia.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {/* EXTERIOR */}
          <div className="bg-white rounded-[22px] overflow-hidden border border-[rgba(15,45,92,0.06)] shadow-[0_8px_24px_rgba(15,45,92,0.06)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,45,92,0.09)] transition-all duration-300 flex flex-col">
            <div className="relative min-h-[124px] bg-[linear-gradient(135deg,#0A2B63_0%,#0F2D5C_58%,#183F82_100%)] px-5 sm:px-6 pt-5 pb-4">
              <div className="absolute top-0 right-0 w-[94px] h-[94px] rounded-full border border-white/10 translate-x-5 -translate-y-2" />

              <div className="relative z-10">
                <div className="text-[24px] mb-2.5">🌍</div>

                <h3 className="font-montserrat font-bold text-white text-[20px] sm:text-[26px] leading-[1.14] tracking-[-0.015em] max-w-[95%]">
                  El colombiano en el exterior
                </h3>

                <p className="mt-1.5 text-white/70 text-[12.5px] sm:text-[13px] font-medium">
                  Quien impulsa · quien financia · quien sueña con volver
                </p>
              </div>
            </div>

            <div className="px-5 sm:px-6 py-4.5 sm:py-5 flex-1">
              <p className="text-[#475569] text-[14.5px] sm:text-[15px] leading-[1.72] font-medium mb-5">
                Lleva años enviando remesas y quiere que ese dinero construya
                algo real y sostenible en Colombia.
              </p>

              <div className="space-y-3">
                {exteriorSituations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-[#667085] text-[12.5px] sm:text-[13px] leading-[1.65]"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-[#0F2D5C] mt-[8px] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLOMBIA */}
          <div className="bg-white rounded-[22px] overflow-hidden border border-[rgba(15,45,92,0.06)] shadow-[0_8px_24px_rgba(15,45,92,0.06)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,45,92,0.09)] transition-all duration-300 flex flex-col">
            <div className="relative min-h-[124px] bg-[linear-gradient(135deg,#7A5900_0%,#B88600_48%,#E4A900_100%)] px-5 sm:px-6 pt-5 pb-4">
              <div className="absolute top-0 right-0 w-[94px] h-[94px] rounded-full border border-white/10 translate-x-5 -translate-y-2" />

              <div className="relative z-10">
                <div className="text-[24px] mb-2.5">🇨🇴</div>

                <h3 className="font-montserrat font-bold text-white text-[20px] sm:text-[26px] leading-[1.14] tracking-[-0.015em] max-w-[95%]">
                  El familiar en Colombia
                </h3>

                <p className="mt-1.5 text-white/85 text-[12.5px] sm:text-[13px] font-medium">
                  Quien ejecuta · quien opera · quien necesita formación
                </p>
              </div>
            </div>

            <div className="px-5 sm:px-6 py-4.5 sm:py-5 flex-1">
              <p className="text-[#475569] text-[14.5px] sm:text-[15px] leading-[1.72] font-medium mb-5">
                Tiene energía y disposición para trabajar, pero nunca ha tenido
                un negocio formal y no sabe por dónde empezar.
              </p>

              <div className="space-y-3">
                {colombiaSituations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-[#667085] text-[12.5px] sm:text-[13px] leading-[1.65]"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-[#E4A900] mt-[8px] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONNECTION BANNER */}
        <div className="mt-6 rounded-[18px] border border-[#E9D79D] bg-[linear-gradient(90deg,rgba(15,45,92,0.06)_0%,rgba(255,193,7,0.06)_100%)] px-4 sm:px-6 py-4.5 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-none">
          <div className="w-[48px] h-[48px] rounded-full bg-[#F2EDF9] border border-[#E5DBF5] flex items-center justify-center flex-shrink-0">
            <span className="text-[20px] text-[#B8A8DA]">🔗</span>
          </div>

          <p className="text-[#1F335A] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.7] font-medium">
            Colraices actúa como el{" "}
            <strong className="text-[#0F2D5C] font-bold">
              puente profesional entre ambas partes
            </strong>
            . Un asesor único que acompaña al que financia y al que ejecuta,
            manteniéndolos alineados durante los 14 meses que dura el proceso.
            El negocio no fracasa por distancia — fracasa por falta de método y
            comunicación estructurada.
          </p>
        </div>
      </div>
    </section>
  );
}