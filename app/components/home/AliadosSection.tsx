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

export default function AliadosSection() 
{
  return (
    <section className="w-full bg-white border-t border-[#0F2D5C]/10">
      
      <div className="
        w-full 
        max-w-[1416.15px] 
        mx-auto 
        
        px-[20px] 
        sm:px-[40px] 
        md:px-[80px] 
        lg:px-[108.07px] 
        
        pt-[40px] 
        md:pt-[65.27px] 
        
        pb-[40px] 
        md:pb-[65.27px]
      ">
        
        <div className="
          w-full 
          max-w-[1200px] 
          mx-auto 
          
          px-[16px] 
          sm:px-[24px] 
          md:px-[48px]
        ">

          {/* HEADER */}
          <div className="text-center mb-[24px] md:mb-[40px]">
            <p className="
              text-[#FFC107] 
              text-[16px] 
              sm:text-[18px] 
              md:text-[20px] 
              font-bold italic leading-[30px]
            ">
              Aliados estratégicos
            </p>

            <p className="
              text-[#475569] 
              text-[14px] 
              sm:text-[15.5px] 
              md:text-[17.6px] 
              italic leading-[26.4px] mt-[8px]
            ">
              Respaldo de las mejores constructoras y entidades financieras de Colombia
            </p>
          </div>

          {/* LOGOS */}
          <div className="flex items-center justify-center gap-[8px] sm:gap-[12px] flex-wrap">

            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="
                  group
                  
                  w-[110px] h-[55px]
                  sm:w-[130px] sm:h-[62px]
                  md:w-[140px] md:h-[68px]

                  flex items-center justify-center
                  
                  px-[12px]
                  sm:px-[18px]
                  md:px-[24px]

                  bg-white
                  border border-[#0F2D5C]/10

                  rounded-tl-[16px] 
                  rounded-br-[16px] 
                  rounded-tr-none 
                  rounded-bl-none

                  transition-all duration-300 ease-out
                  hover:-translate-y-[4px]
                  hover:shadow-[0_10px_24px_rgba(15,45,92,0.15)]
                "
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`
                    w-auto h-auto
                    object-contain
                    
                    max-w-[80px]
                    sm:max-w-[95px]
                    md:max-w-[110px]
                    
                    ${logo.size}

                    grayscale opacity-60
                    transition-all duration-300 ease-out
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