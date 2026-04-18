"use client";

export default function QuoteInmuebles() {
  return (
    <section
      className="w-full flex justify-center items-center px-4 sm:px-6"
      style={{
        minHeight: "362px",
        background: "linear-gradient(180deg, #0F2D5C 0%, #1A4F9E 100%)",
      }}
    >
      <div className="w-full max-w-[720px] text-center flex flex-col items-center">
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(48px, 6vw, 64px)",
            lineHeight: "1",
            color: "#F0B429",
            marginBottom: "8px",
          }}
        >
          "
        </div>

        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            lineHeight: "1.4",
            color: "#FFFFFF",
            maxWidth: "624px",
          }}
        >
          <span style={{ fontWeight: 700, fontStyle: "italic" }}>
            Colraices existe para transformar las remesas en
          </span>{" "}
          <span style={{ fontStyle: "italic" }}>
            patrimonio real. La unidad inmobiliaria es la
          </span>{" "}
          <span style={{ fontWeight: 700, fontStyle: "italic" }}>
            expresión más directa de ese propósito.
          </span>
        </div>

        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            lineHeight: "18px",
            letterSpacing: "1.68px",
            color: "#F0B429",
            textTransform: "uppercase",
            marginTop: "20px",
          }}
        >
          PROPÓSITO · UNIDAD INMOBILIARIA · COLRAICES
        </div>
      </div>
    </section>
  );
}