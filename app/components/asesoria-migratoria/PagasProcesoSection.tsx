"use client";

export default function PagasProcesoSection() {
  return (
    <section className="w-full bg-[#091D3E] pt-[70px] sm:pt-[85px] lg:pt-[100px] pb-[80px] sm:pb-[100px] lg:pb-[120px] px-4 sm:px-8 md:px-12 lg:px-[108px]">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-[40px] sm:gap-[46px] lg:gap-[52px]">
        
        {/* HEADER */}
        <div className="w-full flex flex-col gap-[18px] sm:gap-[20px] lg:gap-[22px]">
          
          {/* Label */}
          <div className="flex items-center gap-[10px]">
            <div className="w-[18px] h-[2px] bg-gradient-to-r from-[#FFC107] to-[#F0B429]" />
            <span
              className="uppercase text-white"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "10.88px",
                fontWeight: 600,
                lineHeight: "16.3px",
                letterSpacing: "1.74px",
              }}
            >
              Inversión
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-white max-w-full"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(30px, 5vw, 41.6px)",
              fontWeight: 600,
              lineHeight: "1.2",
            }}
          >
            Pagas junto con{" "}
            <span className="text-[#F0B429] italic">el proceso</span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[40px]">
          
          {/* LEFT MAIN CARD */}
          <div
            className="w-full lg:w-[512px] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border relative"
            style={{
              background: "rgba(255,193,7,0.10)",
              borderColor: "rgba(255,193,7,0.30)",
            }}
          >
            {/* Badge */}
            <div className="absolute top-[16px] right-[16px]">
              <div className="bg-[#FFC107] rounded-full px-[14px] sm:px-[16px] lg:px-[18px] py-[5px]">
                <span
                  className="text-white uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    lineHeight: "14px",
                  }}
                >
                  Pago en dos momentos
                </span>
              </div>
            </div>

            <div className="px-5 sm:px-8 lg:px-[41px] pt-8 sm:pt-10 lg:pt-[41px] pb-8 sm:pb-10 lg:pb-[41px]">
              
              {/* Subtitle */}
              <p
                className="uppercase text-white/40 mb-[24px] sm:mb-[26px] lg:mb-[28px]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "10.88px",
                  fontWeight: 400,
                  lineHeight: "16.3px",
                  letterSpacing: "1.52px",
                }}
              >
                Asesoría Completa
              </p>

              {/* Price */}
              <h3
                className="text-[#FFC107] mb-[12px]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(30px, 5vw, 35.2px)",
                  fontWeight: 700,
                  lineHeight: "1",
                }}
              >
                US$500
              </h3>

              {/* Description */}
              <p
                className="text-white/45 mb-[32px] sm:mb-[36px] lg:mb-[40px]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12.8px",
                  fontWeight: 400,
                  lineHeight: "19.2px",
                }}
              >
                El precio no varía según país ni complejidad del perfil
              </p>

              {/* TIMELINE */}
              <div className="relative flex flex-col">
                
                {/* Vertical line */}
                <div className="absolute left-[18px] top-[20px] bottom-[20px] w-[1.5px] bg-gradient-to-b from-[#FFC107] to-[#F0B429]" />

                {/* STEP 1 */}
                <div className="flex gap-[14px] sm:gap-[16px] mb-[30px] sm:mb-[36px] relative z-10">
                  <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-r from-[#FFC107] to-[#F0B429] flex items-center justify-center shrink-0">
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "11.52px",
                        fontWeight: 700,
                      }}
                    >
                      1
                    </span>
                  </div>

                  <div className="flex flex-col gap-[3px] pt-[2px]">
                    <p
                      className="text-white/40"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "11.52px",
                        fontWeight: 400,
                        lineHeight: "17.23px",
                      }}
                    >
                      Al contratar el servicio
                    </p>

                    <h4
                      className="text-white"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "16.8px",
                        fontWeight: 700,
                        lineHeight: "25.2px",
                      }}
                    >
                      US$300
                    </h4>

                    <p
                      className="text-white/50"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "17.4px",
                      }}
                    >
                      Cubre el diagnóstico de perfil, la hoja de ruta
                      personalizada y la sesión de orientación.
                    </p>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="flex gap-[14px] sm:gap-[16px] relative z-10">
                  <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-r from-[#FFC107] to-[#F0B429] flex items-center justify-center shrink-0">
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "11.52px",
                        fontWeight: 700,
                      }}
                    >
                      2
                    </span>
                  </div>

                  <div className="flex flex-col gap-[3px] pt-[2px]">
                    <p
                      className="text-white/40"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "11.52px",
                        fontWeight: 400,
                        lineHeight: "17.23px",
                      }}
                    >
                      Al recibir la resolución
                    </p>

                    <h4
                      className="text-white"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "16.8px",
                        fontWeight: 700,
                        lineHeight: "25.2px",
                      }}
                    >
                      US$200
                    </h4>

                    <p
                      className="text-white/50"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "17.4px",
                      }}
                    >
                      Cuando recibes la respuesta a tu solicitud migratoria.
                      Colraices estuvo contigo hasta el final.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[512px] flex flex-col gap-[16px]">
            
            {/* CARD 1 */}
            <div
              className="rounded-[20px] border px-5 sm:px-6 lg:px-[25px] py-5 sm:py-6 lg:py-[25px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(240,180,41,0.25)",
              }}
            >
              <h4
                className="text-[#F0B429] mb-[16px]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14.08px",
                  fontWeight: 600,
                  lineHeight: "21.1px",
                }}
              >
                Sin letra pequeña
              </h4>

              <p
                className="text-white/50"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12.8px",
                  fontWeight: 400,
                  lineHeight: "21.1px",
                }}
              >
                El precio es el mismo sin importar el país de destino ni la
                complejidad de tu perfil migratorio. Lo que incluye la hoja de
                ruta —tasas consulares y traducciones oficiales— son costos que
                asumes tú directamente, y Colraices te los informa con precisión
                desde el inicio.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="rounded-[20px] border px-5 sm:px-6 lg:px-[25px] py-5 sm:py-6 lg:py-[25px]"
              style={{
                background: "rgba(255,193,7,0.10)",
                borderColor: "rgba(255,193,7,0.25)",
              }}
            >
              <h4
                className="text-[#FFC107] mb-[12px]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14.08px",
                  fontWeight: 600,
                  lineHeight: "21.1px",
                }}
              >
                Asesoría de Retoma
              </h4>

              <p
                className="text-white/50 mb-[16px]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12.8px",
                  fontWeight: 400,
                  lineHeight: "21.1px",
                }}
              >
                Para procesos estancados. Revisión del estado actual,
                identificación de bloqueos y plan de acción concreto.
              </p>

              <div className="flex flex-wrap items-end gap-[8px]">
                <span
                  className="text-[#FFC107]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(28px, 4vw, 35.2px)",
                    fontWeight: 700,
                    lineHeight: "1",
                  }}
                >
                  US$100
                </span>

                <span
                  className="text-white/40"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  - pago único
                </span>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="rounded-[20px] border px-5 sm:px-6 lg:px-[25px] py-5 sm:py-6 lg:py-[25px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <h4
                className="text-white mb-[12px]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14.08px",
                  fontWeight: 700,
                  lineHeight: "21.1px",
                }}
              >
                El compromiso que nos distingue
              </h4>

              <p
                className="text-white/50"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12.8px",
                  fontWeight: 400,
                  lineHeight: "21.1px",
                }}
              >
                Migrar es una decisión que cambia tu vida, y por eso merece
                hacerse con información, criterio y el acompañamiento correcto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}