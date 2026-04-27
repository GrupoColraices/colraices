"use client";

import { useEffect, useRef, useState } from "react";

// ✅ Animación limpia (no rompe layout)
function Reveal({ children, delay = 0 }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(10px)",
        transition: `all 0.45s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ClaridadTotalSection() {
  return (
    <section className="w-full flex justify-center px-4 md:px-8 py-[88px] bg-white">
      <div className="w-full max-w-[1084px]">

        {/* HEADER */}
        <div className="text-center">
          <Reveal>
            <p className="text-[20px] leading-[24px] text-[#0A0A0A]">
              Claridad total
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-[24px] text-[28px] md:text-[35.86px] leading-[43px] font-semibold text-[#0F2D5C]">
              Lo que sí obtienes. Y lo que no prometemos.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-[16px] text-[15.2px] leading-[25.8px] text-[#475569]">
              Creemos que la confianza se construye con honestidad desde el principio.
            </p>
          </Reveal>
        </div>

        {/* CARDS */}
        <div className="mt-[56px] grid grid-cols-1 md:grid-cols-2 gap-[32px]">

          {/* VERDE */}
          <Reveal delay={200}>
            <div className="h-full rounded-[20px] border border-[#059669]/15 bg-[#ECFDF5] p-[32px]">

              {/* HEADER CARD */}
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-[10px] bg-[#059669]/15">
                  <span className="text-[18px]">✅</span>
                </div>
                <p className="text-[16.8px] font-semibold text-[#059669] leading-[25.2px]">
                  Esto sí garantizamos
                </p>
              </div>

              {/* LISTA */}
              <div className="mt-[28px] flex flex-col gap-[12px]">

                {[
                  "Un análisis técnico y profesional de tu perfil financiero y crediticio",
                  "Un diagnóstico honesto del punto exacto en el que te encuentras hoy",
                  "Un informe claro y personalizado — no un reporte genérico",
                  "Un plan de acción con pasos priorizados y tiempos realistas",
                  "Una sesión de asesoría para que no quede nada sin entender",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-[10px]">
                    <div className="w-[18px] h-[18px] mt-[2px] flex items-center justify-center rounded-full bg-[#059669]/15 shrink-0">
                      <span className="text-[10px] text-[#059669]">✓</span>
                    </div>
                    <p className="text-[14px] leading-[21.7px] text-[#1E293B]">
                      {text}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </Reveal>

          {/* ROJA */}
          <Reveal delay={260}>
            <div className="h-full rounded-[20px] border border-[#DC2626]/15 bg-[#FEF2F2] p-[32px]">

              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-[10px] bg-[#DC2626]/10">
                  <span className="text-[18px]">⚠️</span>
                </div>
                <p className="text-[16.8px] font-semibold text-[#DC2626] leading-[25.2px]">
                  Esto no incluye
                </p>
              </div>

              <div className="mt-[28px] flex flex-col gap-[12px]">

                {[
                  "Gestión directa de créditos — eso es Brújula Crediticia o Crédito",
                  "Intermediación con bancos ni trámites ante entidades financieras",
                  "Resolución de reportes negativos — eso es Buena Data",
                  "Ejecución directa de las acciones recomendadas en el plan",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-[10px]">
                    <div className="w-[18px] h-[18px] mt-[2px] flex items-center justify-center rounded-full bg-[#DC2626]/10 shrink-0">
                      <span className="text-[10px] text-[#DC2626]">•</span>
                    </div>
                    <p className="text-[14px] leading-[21.7px] text-[#475569]">
                      {text}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </Reveal>

        </div>

        {/* BLOQUE AMARILLO */}
        <Reveal delay={320}>
          <div className="mt-[32px] rounded-[12px] bg-[#FEF3C7] px-[20px] py-[18px] flex gap-[12px] items-start">
            <span className="text-[18px] mt-[2px]">💡</span>

            <p className="text-[14px] leading-[22.4px] text-[#1E293B]">
              <span className="font-semibold">La Brújula Financiera </span>
              <span className="font-bold">orienta y transfiere conocimiento.</span>{" "}
              Si después del diagnóstico necesitas que Colraices ejecute las acciones por ti,
              puedes avanzar a <span className="font-semibold">Buena Data</span> (para resolver reportes)
              o a <span className="font-semibold">Brújula Crediticia</span> (para prepararte para un crédito).
              Tu asesor te explica cuál es el camino correcto.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}