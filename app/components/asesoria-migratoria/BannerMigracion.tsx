"use client";

export default function BannerMigracion() {
  return (
    <section className="w-full bg-[#F5BC00] py-[24px] px-4 overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <p
          className="
            whitespace-nowrap
            text-center
            font-montserrat
            text-[#2A3F77]
            text-[18.4px]
            leading-[25.8px]
            tracking-[0px]
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