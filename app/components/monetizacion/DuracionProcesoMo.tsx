"use client";

import { useEffect, useRef } from "react";

export default function DuracionProcesoMo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute("data-delay") || "0";
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0) translateX(0)";
            }, Number(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const baseStyle: React.CSSProperties = {
    opacity: 0,
    transition: "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)",
  };

  const fromBottom: React.CSSProperties = { ...baseStyle, transform: "translateY(28px)" };
  const fromRight: React.CSSProperties  = { ...baseStyle, transform: "translateX(32px)" };

  const rows: [string, string, boolean][] = [
    ["Consulta y cotización", "1 día hábil", false],
    ["Validación de documentos", "1 día hábil", false],
    ["Transferencia internacional (depende del banco emisor)", "1–3 días hábiles", false],
    ["Cambio de divisa y legalización", "1 día hábil", false],
    ["Entrega en destino final en Colombia", "Máx. 1 día hábil", true],
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 sm:px-8 md:px-12 pt-12 sm:pt-16 md:pt-[88px] pb-12 sm:pb-16 md:pb-24"
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-8 md:gap-12">

        {/* Encabezado */}
        <div className="w-full flex flex-col items-center gap-2">
          <p
            data-animate
            data-delay="0"
            style={fromBottom}
            className="text-[16px] sm:text-[18px] md:text-[20px] leading-6 font-normal text-[#0A0A0A] text-center w-full"
          >
            Duración del proceso
          </p>

          <div className="w-full text-left">
            <h2
              data-animate
              data-delay="100"
              style={fromBottom}
              className="text-[#0F2D5C] font-bold text-[24px] sm:text-[28px] md:text-[35.86px] leading-tight md:leading-[43px] tracking-[-1px]"
            >
              Máximo 5 días hábiles
            </h2>
            <p
              data-animate
              data-delay="180"
              style={fromBottom}
              className="text-[#0F2D5C] italic font-normal text-[20px] sm:text-[24px] md:text-[35.86px] leading-tight md:leading-[43px] tracking-[-1px]"
            >
              desde que recibes la confirmación de tasa bloqueada.
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">

          {/* Tabla izquierda */}
          <div className="w-full lg:w-[518px] flex flex-col">
            {rows.map((item, idx) => (
              <div
                key={idx}
                data-animate
                data-delay={280 + idx * 80}
                style={fromBottom}
                className="w-full flex justify-between items-start pt-[14px] pb-[14px] border-b border-[#0F2D5C]/10 gap-4"
              >
                <span className="text-[13px] sm:text-[14px] leading-[21px] text-[#475569] font-normal">
                  {item[0]}
                </span>
                <span className={`text-[13px] sm:text-[14px] leading-[21px] tracking-[1.04px] font-semibold text-right whitespace-nowrap ${item[2] ? "text-[#FFC107]" : "text-[#0F2D5C]"}`}>
                  {item[1]}
                </span>
              </div>
            ))}

            {/* Caja azul */}
            <div
              data-animate
              data-delay="700"
              style={fromBottom}
              className="mt-6 md:mt-12 w-full bg-[#0F2D5C] rounded-2xl px-5 sm:px-6 py-5 sm:py-6"
            >
              <p className="text-[10px] sm:text-[10.4px] leading-[15.6px] tracking-[1.04px] uppercase font-bold text-white/40 mb-[10px]">
                CONDICIONANTES DEL TIEMPO
              </p>
              <p className="text-[13px] sm:text-[14px] leading-[21px] sm:leading-[23.1px] text-white/65">
                El tiempo total depende del{" "}
                <span className="font-bold text-white">banco emisor</span> en el
                exterior y de la{" "}
                <span className="font-bold text-white">validez de los documentos</span>{" "}
                presentados. Colraices coordina todo lo que está en su alcance
                para cumplir el plazo máximo de 5 días hábiles desde la
                recepción de fondos.
              </p>
            </div>
          </div>

          {/* Caja derecha amarilla */}
          <div
            data-animate
            data-delay="350"
            style={fromRight}
            className="w-full lg:flex-1 h-fit rounded-2xl bg-[#FEF3C7] border border-[#C9900C]/20 px-5 sm:px-[24.8px] py-5 sm:py-[24.8px]"
          >
            <h3 className="text-[15px] sm:text-[16px] leading-6 font-semibold text-[#0F2D5C] mb-3 sm:mb-4">
              ¿Por qué puede tardar más?
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-[21px] sm:leading-[23.1px] font-semibold text-[#475569] mb-4 sm:mb-6">
              Hay factores externos que pueden alargar el proceso. Estos son los más comunes:
            </p>
            <ul className="flex flex-col gap-3 text-[12.5px] sm:text-[13.12px] leading-[19px] text-[#1E293B]">
              {[
                "El banco emisor retiene la transferencia para revisión de cumplimiento (compliance).",
                "Documentación incompleta o con inconsistencias.",
                "Fines de semana, festivos o paros bancarios en Colombia.",
                "Montos muy altos que requieren validaciones adicionales del Banco de la República.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-[3px] shrink-0">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}