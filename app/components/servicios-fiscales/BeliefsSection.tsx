"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const beliefsData = [
  {
    myth: '"Vivo afuera, no tengo que declarar en Colombia."',
    reality: (
      <>
        La obligación de declarar depende de tu{" "}
        <strong className="font-semibold text-[#0F2D5C]">
          residencia fiscal
        </strong>
        , no de dónde vives. Y eso lo determina la DIAN con criterios que muchos
        colombianos afuera cumplen sin saberlo.
      </>
    ),
  },
  {
    myth: '"Declarar es pagar impuestos. Mejor no moverlo."',
    reality: (
      <>
        Declarar y pagar son cosas distintas. Puedes estar obligado a declarar y
        no tener nada que pagar.{" "}
        <strong className="font-semibold text-[#0F2D5C]">
          Pero no declarar cuando sí estás obligado sí genera sanciones reales.
        </strong>
      </>
    ),
  },
  {
    myth: '"Eso es solo para los ricos. Yo no tengo tanto."',
    reality: (
      <>
        Los umbrales no son tan altos como se cree.{" "}
        <strong className="font-semibold text-[#0F2D5C]">
          Tener un inmueble en Colombia puede ser suficiente
        </strong>{" "}
        para generar la obligación de declarar, sin importar cuánto ganes afuera.
      </>
    ),
  },
  {
    myth: '"El predial lo está pagando el familiar que vive ahí',
    reality: (
      <>
        El predial es una obligación del{" "}
        <strong className="font-semibold text-[#0F2D5C]">
          propietario
        </strong>
        , no del ocupante. Si la propiedad está a tu nombre, sigue siendo tu
        responsabilidad aunque vivas fuera.
      </>
    ),
  },
  {
    myth: '"Si no declaro, nadie se va a dar cuenta desde aquí."',
    reality: (
      <>
        La DIAN cruza información con bancos, notarías y registros públicos en
        Colombia.{" "}
        <strong className="font-semibold text-[#0F2D5C]">
          Cada vez más con sistemas internacionales de intercambio tributario.
        </strong>
      </>
    ),
  },
];

function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="hidden xl:flex absolute -right-[48px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#0F2D5C]/10 shadow-md items-center justify-center text-[#0F2D5C] text-2xl"
      aria-label="Siguiente"
    >
      ›
    </button>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="hidden xl:flex absolute -left-[48px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#0F2D5C]/10 shadow-md items-center justify-center text-[#0F2D5C] text-2xl"
      aria-label="Anterior"
    >
      ‹
    </button>
  );
}

export default function BeliefsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
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
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-[#0F2D5C]/20 mt-8" />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-[88px] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-[1180px] mx-auto mb-8 sm:mb-10 px-5 sm:px-8 xl:px-[52px]">
        <p className="text-[11.2px] font-semibold uppercase tracking-[1.57px] leading-[16.8px] text-[#FFC107] mb-[12px]">
          Por qué la mayoría no actúa
        </p>

        <h2 className="text-[26px] sm:text-[32px] lg:text-[35.86px] leading-[1.2] font-semibold text-[#0F2D5C] mb-[12px]">
          Las creencias que{" "}
          <span className="italic text-[#1A4F9E]">cuestan caro</span>
        </h2>

        <p className="text-[15.2px] leading-[26.6px] text-[#475569] max-w-[580px]">
          No es falta de voluntad. Es que nadie les dijo la verdad a tiempo.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-[1038px] mx-auto px-5 sm:px-8 xl:px-0">
        <Slider {...settings}>
          {beliefsData.map((item, index) => (
            <div key={index} className="px-2 sm:px-[10px]">
              <div className="w-full border border-[#0F2D5C]/10 rounded-[20px] overflow-hidden bg-white">

                {/* TOP */}
                <div className="w-full bg-[#FBF8F3] border-b border-[#0F2D5C]/6 px-[22px] pt-[22px] pb-[22px]">
                  <div className="inline-flex items-center gap-[5px] h-[22px] rounded-full px-[12px] border border-[#DC2626]/15 bg-[#DC2626]/8 mb-[14px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#B91C1C]" />
                    <span className="text-[9.6px] font-bold uppercase tracking-[1.06px] text-[#B91C1C]">
                      Lo que se cree
                    </span>
                  </div>

                  <p className="text-[13.6px] italic leading-[21.8px] text-[#475569] w-full">
                    {item.myth}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="w-full bg-white px-[22px] pt-[18px] pb-[22px]">
                  <div className="inline-flex items-center gap-[5px] h-[22px] rounded-full px-[12px] border border-[#059669]/20 bg-[#FEF3C7] mb-[14px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#E6AC00]" />
                    <span className="text-[9.6px] font-bold uppercase tracking-[1.06px] text-[#E6AC00]">
                      La realidad
                    </span>
                  </div>

                  <p className="text-[13.28px] leading-[21.9px] text-[#1E293B] w-full">
                    {item.reality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-list {
          padding: 0 !important;
          margin: 0 !important;
          overflow: hidden !important;
        }

        .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }

        .slick-slide {
          height: auto !important;
        }

        .slick-slide > div {
          height: 100%;
        }

        .slick-slide > div > div {
          height: 100%;
        }

        .custom-dots li.slick-active div {
          background: #0f2d5c !important;
        }

        .slick-dots li {
          margin: 0 4px;
        }
      `}</style>
    </section>
  );
}