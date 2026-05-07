import Link from "next/link";

const WHATSAPP_NUMBER = "573169013283";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero recibir más información sobre sus servicios."
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const buttonBaseClasses =
  "flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] transition-all duration-300 sm:w-auto sm:px-6 md:text-[14px] lg:px-7";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-[#0F2D5C]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-[900px] text-center">
          <h2 className="text-[24px] font-semibold leading-tight text-white sm:text-[30px] md:text-[36px] lg:text-[40px]">
            ¿Listo para que tu remesa haga más?
          </h2>

          <p className="mx-auto mt-3 max-w-[640px] text-[14px] leading-relaxed text-white/70 sm:text-[15px] md:mt-4 md:text-[16px]">
            Empieza con una conversación. Sin compromisos, sin letra pequeña, sin enredos.
          </p>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row md:mt-8 md:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hablar con un asesor por WhatsApp"
              className={`${buttonBaseClasses} bg-[#FFC107] font-semibold text-[#2A3F77] shadow-[0_8px_20px_rgba(255,193,7,0.35)] hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(255,193,7,0.45)]`}
            >
              <span>Habla con un asesor</span>
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#UnitsSection"
              className={`${buttonBaseClasses} border border-white/30 font-medium text-white hover:border-white hover:bg-white hover:text-[#0F2D5C]`}
            >
              Explora los servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}