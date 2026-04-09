"use client";

export default function QuoteInmuebles() {
  return (
    <section
      className="w-full flex justify-center items-start"
      style={{
        height: "362px",
        paddingTop: "80px",
        background:
          "linear-gradient(180deg, #0F2D5C 0%, #1A4F9E 100%)",
      }}
    >
      {/* CONTENEDOR CENTRADO */}
      <div
        style={{
          width: "720px",
          height: "202px",
          position: "relative",
        }}
      >
        {/* COMILLAS */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "48px",
            width: "624px",
            height: "51.2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "64px",
            lineHeight: "51.2px",
            color: "#F0B429",
          }}
        >
          "
        </div>

        {/* TEXTO PRINCIPAL */}
        <div
          style={{
            position: "absolute",
            top: "59.2px",
            left: "48px",
            width: "624px",
            height: "100.8px",
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "24px",
            lineHeight: "33.6px",
            color: "#FFFFFF",
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

        {/* TEXTO INFERIOR */}
        <div
          style={{
            position: "absolute",
            top: "184px",
            left: "48px",
            width: "624px",
            height: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            letterSpacing: "1.68px",
            color: "#F0B429",
            textTransform: "uppercase",
          }}
        >
          PROPÓSITO · UNIDAD INMOBILIARIA · COLRAICES
        </div>
      </div>
    </section>
  );
}