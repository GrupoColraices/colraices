"use client";

import React from "react";

const tributos = [
  {
    icon: "📋",
    eyebrow: "SITUACIÓN SIMPLE",
    title: "Declaración de\nRenta en Colombia",
    intro:
      "Tienes una o dos fuentes de ingreso, no tienes activos muy complejos, y quieres ponerte al día con la DIAN sin complicaciones.",
    bullets: [
      "Revisamos tu historial tributario y lo que hay pendiente",
      "Elaboramos la declaración y tú la revisas antes de firmar",
      "La presentamos ante la DIAN por ti, sin que tengas que ir a ningún lado",
      "Te entregamos el acuse de recibo y un resumen claro del resultado",
    ],
  },
  {
    icon: "🌐",
    eyebrow: "VIDA FISCAL EN DOS PAÍSES",
    title: "Renta con ingresos\nen dos países",
    intro:
      "Tienes ingresos tanto en Colombia como en el exterior, varios activos, o necesitas que alguien analice si tu situación fiscal en ambos países está bien manejada.",
    bullets: [
      "Analizamos si hay un convenio entre Colombia y tu país para evitar tributar dos veces",
      "Elaboramos la declaración con el tratamiento correcto de tus rentas del exterior",
      "Te explicamos el resultado y qué hacer distinto el año que viene para reducir tu carga",
      "Ordenamos tu estructura fiscal para evitar errores costosos",
    ],
  },
  {
    icon: "🏠",
    eyebrow: "INMUEBLES EN COLOMBIA",
    title: "Impuesto Predial\nal día",
    intro:
      "Tienes una o más propiedades en Colombia y no sabes con certeza si el predial está pagado, si hay años atrasados, o cuánto debes hoy.",
    bullets: [
      "Verificamos el estado exacto de cada inmueble tuyo",
      "Identificamos años pendientes y cuánto hay acumulado con intereses",
      "Te decimos exactamente cuánto pagar y cómo hacerlo desde donde estés",
      "Te avisamos antes de que venzan los descuentos por pronto pago",
    ],
  },
];

export default function TributosSection() {
  return (
    <section className="w-full bg-[#FBF8F3] py-12 sm:py-16 lg:py-[72px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 xl:px-[52px]">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-[#FFC107] text-[11.2px] font-semibold leading-[16.8px] tracking-[1.57px] uppercase mb-2">
            — QUÉ RESOLVEMOS
          </p>

          <h2 className="text-[#0F2D5C] text-[26px] sm:text-[32px] lg:text-[35.86px] font-semibold leading-[1.2] tracking-[-0.4px] mb-2">
            Los tres tributos que más{" "}
            <span className="text-[#1A4F9E] italic">se descuidan</span>
          </h2>

          <p className="text-[#475569] text-[15.2px] leading-[26px] max-w-[580px] mt-2">
            El servicio cubre exactamente lo que el diagnóstico detecte para tu
            caso. Sin módulos que no necesitas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {tributos.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#0F2D5C]/10 rounded-[32px] overflow-hidden shadow-[0_2px_6px_rgba(15,45,92,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,45,92,0.14),8px_18px_28px_rgba(15,45,92,0.08)] cursor-default flex flex-col"
            >
              {/* Card top */}
              <div
                className="px-7 pt-[22px] pb-[18px]"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(31,119,255,0.18), transparent 30%), linear-gradient(135deg, #0F2D5C 0%, #12386F 55%, #0D4C7D 100%)",
                }}
              >
                <div className="text-2xl mb-3 leading-none">{item.icon}</div>
                <p className="text-white/35 text-[9.92px] font-semibold leading-[14.9px] tracking-[1.09px] uppercase mb-2">
                  {item.eyebrow}
                </p>
                <h3 className="text-white text-[16.8px] font-semibold leading-[21.8px] m-0">
                  {item.title.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              {/* Card body */}
              <div className="px-7 pt-4 pb-[18px] flex flex-col flex-1">
                <h4 className="text-[#0F2D5C] text-[13.12px] font-semibold leading-[19.7px] mb-2">
                  Para ti si...
                </h4>
                <p className="text-[#475569] text-[13.12px] leading-[20px] mb-3">
                  {item.intro}
                </p>
                <ul className="flex flex-col gap-[6px] p-0 m-0 list-none">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="relative pl-[14px] text-[#475569] text-[12.8px] leading-[18px]"
                    >
                      <span className="absolute left-0 top-[6px] w-1 h-1 rounded-full bg-[#FFC107]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <div className="w-full bg-white border border-[#0F2D5C]/10 rounded-[32px] flex flex-col sm:flex-row items-start gap-4 p-6 sm:p-8 shadow-[0_2px_6px_rgba(15,45,92,0.03)]">
          <div className="text-[28px] leading-none pt-1 shrink-0">🗓️</div>
          <div className="flex-1">
            <p className="text-[#FFC107] text-[10.4px] font-semibold leading-[15.6px] tracking-[1.25px] uppercase mb-2">
              TAMBIÉN RESOLVEMOS
            </p>
            <h3 className="text-[#0F2D5C] text-[16.8px] font-semibold m-0 mb-2">
              Años anteriores pendientes
            </h3>
            <p className="text-[#475569] text-[13.28px] leading-[21.5px] m-0">
              Si llevas varios años sin declarar, no hace falta entrar en
              pánico. El diagnóstico identifica exactamente cuántos años tienes
              pendientes, cuánto está acumulado en sanciones, y cuál es la forma
              más ordenada de regularizarlo. Se cotiza por año adicional — solo
              pagas lo que te corresponde.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}