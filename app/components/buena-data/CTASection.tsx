"use client";

export default function CTASection() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "451.26px",
        backgroundColor: "#091D3E",
        paddingTop: "100px",
        paddingLeft: "48px",
        paddingRight: "48px",
        paddingBottom: "0px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1084px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Bloque título */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "41.83px",
              lineHeight: "48.1px",
              letterSpacing: "0px",
              color: "#FFFFFF",
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              textAlign: "center",
            }}
          >
            Tu futuro financiero en
          </p>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "41.83px",
              lineHeight: "48.1px",
              letterSpacing: "0px",
              color: "#FFC107",
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              textAlign: "center",
            }}
          >
            Colombia empieza ahora.
          </p>
        </div>

        {/* Subtítulo */}
        <p
          style={{
            marginTop: "12px",
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            width: "100%",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "15.2px",
            lineHeight: "25.8px",
            letterSpacing: "0px",
            color: "rgba(255, 255, 255, 0.46)",
            textAlign: "center",
          }}
        >
          Buena Data convierte los bloqueos financieros en un nuevo punto de partida. Colraices se hace cargo
        </p>

        {/* Botón */}
        <div
          style={{
            marginTop: "36px",
            width: "100%",
            height: "49.2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.10)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.60)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.30)";
            }}
            style={{
              width: "247.95px",
              height: "49.2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100px",
              border: "0.8px solid rgba(255, 255, 255, 0.30)",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "14.4px",
              lineHeight: "21.6px",
              letterSpacing: "0px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
              transition: "background 0.25s ease, border-color 0.25s ease",
            }}
          >
            Agendar consulta gratuita
          </button>
        </div>

        {/* Fine print */}
        <p
          style={{
            marginTop: "14px",
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            width: "100%",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            letterSpacing: "0px",
            color: "rgba(255, 255, 255, 0.26)",
            textAlign: "center",
          }}
        >
          Sin costos ocultos · Acompañamiento completo
        </p>
      </div>
    </div>
  );
}