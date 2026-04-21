"use client";

import Image from "next/image";

const logos = [
  { src: "/davivienda.png", alt: "Davivienda", size: "max-h-[100px]" },
  { src: "/union.png", alt: "Banco Union", size: "max-h-[100px]" },
  { src: "/bolivar.png", alt: "Constructora Bolívar", size: "max-h-[35px]" },
  { src: "/colpatria.png", alt: "Colpatria", size: "max-h-[22px]" },
  { src: "/prodesa.png", alt: "Prodesa", size: "max-h-[48px]" },
  { src: "/camu.png", alt: "Camu", size: "max-h-[48px]" },
  { src: "/gomez.png", alt: "Gómez", size: "max-h-[55px]" },
];

export default function AliadosSection() {
  return (
    <section className="w-full bg-white border-t border-[#0F2D5C]/10">
      
      <div className="
        w-full 
        max-w-[1416px] 
        mx-auto 
        
        px-4 sm:px-6 md:px-12 lg:px-20 
        
        pt-[40px] md:pt-[65px] 
        pb-[40px] md:pb-[65px]
      ">
        
        <div className="w-full max-w-[1200px] mx-auto">

          {/* HEADER */}
          <div className="text-center mb-6 md:mb-10">
            <p className="
              text-[#FFC107] 
              text-[16px] sm:text-[18px] md:text-[20px] 
              font-bold italic leading-[30px]
            ">
              Aliados estratégicos
            </p>

            <p className="
              text-[#475569] 
              text-[14px] sm:text-[15px] md:text-[17px] 
              italic leading-[26px] mt-2
            ">
              Respaldo de las mejores constructoras y entidades financieras de Colombia
            </p>
          </div>

          {/* LOGOS */}
          <div className="
            flex flex-wrap justify-center items-center 
            gap-3 sm:gap-4 md:gap-6
          ">

            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="
                  group
                  
                  w-[100px] h-[50px]
                  sm:w-[120px] sm:h-[60px]
                  md:w-[140px] md:h-[70px]

                  flex items-center justify-center
                  
                  px-3 sm:px-4 md:px-5

                  bg-white
                  border border-[#0F2D5C]/10

                  rounded-tl-[16px] 
                  rounded-br-[16px]

                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_24px_rgba(15,45,92,0.15)]
                "
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className={`
                    object-contain
                    w-auto h-auto
                    
                    max-w-[70px]
                    sm:max-w-[90px]
                    md:max-w-[110px]

                    ${logo.size}

                    grayscale opacity-60
                    transition-all duration-300
                    group-hover:grayscale-0 group-hover:opacity-100
                  `}
                />
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}