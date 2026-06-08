"use client";

import { useEffect, useState } from "react";

const incluyeItems = [
  {
    numero: "1",
    titulo: "Análisis de viabilidad de mercado",
    descripcion:
      "Validación objetiva de demanda, competencia y márgenes antes de comprometer recursos.",
  },
  {
    numero: "2",
    titulo: "Modelo de negocio estructurado",
    descripcion:
      "Canvas completo: propuesta de valor, segmentos, canales, fuentes de ingreso y estructura de costos.",
  },
  {
    numero: "3",
    titulo: "Plan financiero de arranque",
    descripcion:
      "Proyección de inversión inicial, capital de trabajo, punto de equilibrio y flujo de caja estimado.",
  },
  {
    numero: "4",
    titulo: "Constitución legal completa",
    descripcion:
      "Registro en Cámara de Comercio, obtención de RUT, inscripción tributaria y asesoría de figura jurídica.",
  },
  {
    numero: "5",
    titulo: "Diseño operativo básico",
    descripcion:
      "Procesos mínimos de compra, producción, venta y cobro. El mapa de ruta para operar día a día.",
  },
  {
    numero: "6",
    titulo: "Formación y herramientas para el ejecutor",
    descripcion:
      "Capacitación en gestión básica del negocio, control de ventas y seguimiento de resultados.",
  },
  {
    numero: "7",
    titulo: "Herramientas de gestión",
    descripcion:
      "Plantillas listas para control financiero, seguimiento de ventas y reportes mensuales estandarizados.",
  },
  {
    numero: "8",
    titulo: "Sesiones de acompañamiento",
    descripcion:
      "16 sesiones distribuidas durante 14 meses: alta frecuencia al inicio, ajustando según el avance del negocio.",
  },
  {
    numero: "9",
    titulo: "Canal de consulta directa",
    descripcion:
      "Línea abierta con el asesor para dudas urgentes entre sesiones. Respuesta garantizada en 48 horas hábiles.",
  },
  {
    numero: "10",
    titulo: "Reportes trimestrales",
    descripcion:
      "Informe consolidado de situación para el colombiano en el exterior. Visibilidad real sin microgestionar.",
  },
];

export default function QueIncluyeSection() {
  const [pagina, setPagina] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const nextPage = () => {
    setPagina((prev) => (prev + 1) % incluyeItems.length);
  };

  const prevPage = () => {
    setPagina((prev) => (prev === 0 ? incluyeItems.length - 1 : prev - 1));
  };

  const visibleItems = Array.from({ length: cardsPerPage }, (_, i) => {
    return incluyeItems[(pagina + i) % incluyeItems.length];
  });

  return (
    <section className="w-full bg-white py-[96px] border-b-[3px] border-[#FFC107] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto mb-[42px] text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-4 h-[2px] bg-[#FFC107]" />
            <span className="uppercase text-[11px] tracking-[0.22em] font-semibold text-[#C9900C]">
              Qué incluye
            </span>
          </div>

          <h2 className="font-montserrat text-[#0F2D5C] text-[34px] md:text-[54px] font-bold leading-[1.08] tracking-[-0.03em] mb-5 whitespace-nowrap">
            Más que una asesoría: Un proceso completo
          </h2>

          <p className="text-[#475569] text-[18px] leading-[1.7] max-w-[1000px] mx-auto">
            Todo lo que necesitas para pasar de idea a negocio real, sin tener
            que coordinar con múltiples proveedores.
          </p>
        </div>

        <div className="relative w-full max-w-[1240px] mx-auto flex items-center justify-center">
          <button
            onClick={prevPage}
            className="hidden lg:flex absolute left-[8px] z-20 w-[38px] h-[38px] rounded-full border border-[#C9900C] items-center justify-center text-[#C9900C] text-lg hover:bg-[#FFC107] hover:text-white transition-all duration-300"
          >
            ←
          </button>

          <div className="w-full max-w-[1080px] overflow-hidden px-[48px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
              {visibleItems.map((item, index) => (
                <div
                  key={`${item.numero}-${index}`}
                  className="bg-[#FDF7EE] border border-[rgba(15,45,92,0.08)] rounded-[18px] h-[170px] px-5 py-5 flex gap-4"
                >
                  <div className="w-[28px] h-[28px] rounded-full bg-[#FFC107] flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0 mt-[2px]">
                    {item.numero}
                  </div>

                  <div>
                    <h3 className="text-[#0F2D5C] text-[14px] md:text-[15px] font-bold leading-[1.45] mb-2">
                      {item.titulo}
                    </h3>

                    <p className="text-[#64748B] text-[12.5px] md:text-[13px] leading-[1.55]">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextPage}
            className="hidden lg:flex absolute right-[8px] z-20 w-[38px] h-[38px] rounded-full border border-[#C9900C] items-center justify-center text-[#C9900C] text-lg hover:bg-[#FFC107] hover:text-white transition-all duration-300"
          >
            →
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {incluyeItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setPagina(index)}
              className={`h-[8px] rounded-full transition-all duration-300 ${
                pagina === index ? "w-[22px] bg-[#E0A800]" : "w-[8px] bg-[#D6D3D1]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}