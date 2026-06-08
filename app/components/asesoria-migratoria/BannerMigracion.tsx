"use client";

export default function BannerMigracion() {
  return (
    <section className="w-full bg-[#F5BC00] py-4 sm:py-5 md:py-6 px-4 sm:px-6 overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <p
          className="
            text-center
            font-montserrat
            text-[#2A3F77]
            text-[12px]
            sm:text-[14px]
            md:text-[16px]
            lg:text-[18.4px]
            leading-[1.4]
            tracking-[0px]
            max-w-full
          "
        >
          <span className="font-bold">
            No deberías migrar solo, a ciegas ni en manos equivocadas.
          </span>{" "}
          <span className="italic font-normal">
            Colraices te da una ruta para que te vayas bien.
          </span>
        </p>
      </div>
    </section>
  );
}