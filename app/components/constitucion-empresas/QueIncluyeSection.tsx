"use client";

import Slider from "react-slick";

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

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#FFC107] text-[#C9900C] flex items-center justify-center hover:bg-[#FFC107] hover:text-white transition-all duration-300"
    >
      ←
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#FFC107] text-[#C9900C] flex items-center justify-center hover:bg-[#FFC107] hover:text-white transition-all duration-300"
    >
      →
    </button>
  );
}

export default function QueIncluyeSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    appendDots: (dots: any) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-[#D6D3D1] hover:bg-[#FFC107] transition-all duration-300"></div>
    ),
  };

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-4 h-[2px] bg-[#FFC107]"></div>
            <span className="text-[#C9900C] uppercase tracking-[0.22em] text-[11px] font-semibold">
              Qué incluye
            </span>
          </div>

          <h2 className="text-[#0F2D5C] text-[34px] md:text-[48px] leading-[1.12] font-bold tracking-[-0.02em] mb-5">
            Más que una asesoría: Un proceso completo
          </h2>

          <p className="text-[#475569] text-[18px] leading-[1.8] max-w-2xl">
            Todo lo que necesitas para pasar de idea a negocio real, sin tener
            que coordinar con múltiples proveedores.
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-2 md:px-8">
          <Slider {...settings}>
            {incluyeItems.map((item, index) => (
              <div key={index} className="px-3 pb-2">
                <div className="bg-[#FBF8F3] border border-[rgba(15,45,92,0.08)] rounded-[20px] p-7 h-[230px] flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FFC107] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.numero}
                    </div>

                    <div>
                      <h3 className="text-[#0F2D5C] text-[20px] leading-[1.35] font-bold mb-3">
                        {item.titulo}
                      </h3>

                      <p className="text-[#64748B] text-[15px] leading-[1.75]">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots li {
          width: auto;
          height: auto;
          margin: 0;
        }

        .slick-dots li.slick-active div {
          background: #ffc107 !important;
          width: 22px;
          border-radius: 999px;
        }

        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}