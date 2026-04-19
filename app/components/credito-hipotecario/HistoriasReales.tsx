"use client";
 
const testimonios = [
  {
    tag: "Crédito hipotecario",
    color: "#FFC107",
    bgTag: "#FEF3C7",
    quote:
      '"Nunca pensé que podría comprar en Colombia desde el exterior. Con Colraices todo fue remoto, claro y rápido. Hoy tengo mi apartamento en Medellín."',
    name: "Laura P.",
    info: "Residente en Nueva York · Davivienda",
    initials: "LP",
  },
  {
    tag: "Crédito hipotecario",
    color: "#0F2D5C",
    bgTag: "rgba(15, 45, 92, 0.08)",
    quote:
      '"Me explicaron paso a paso qué necesitaba. El proceso fue 100% remoto. En 2 meses ya estaba firmando. Increíble."',
    name: "Juan M.",
    info: "Residente en Madrid · Davivienda",
    initials: "JM",
  },
  {
    tag: "Libre inversión",
    color: "#DC2626",
    bgTag: "#FEF2F2",
    quote:
      '"Tenía un apartamento en Bogotá y lo capitalicé para invertir en otro proyecto. El proceso fue claro y sin sorpresas."',
    name: "Carlos M.",
    info: "Residente en Miami · Banco Unión",
    initials: "CM",
  },
];
 
export default function HistoriasRealesSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#FBF8F3",
        padding: "88px 48px 50px",
        boxSizing: "border-box",
        fontFamily: "'Montserrat', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
 
        {/* ── HEADER ── */}
        <div style={{ marginBottom: "48px" }}>
          <span
            style={{
              display: "block",
              fontStyle: "italic",
              fontSize: "20px",
              lineHeight: "30px",
              color: "#0A0A0A",
              letterSpacing: "0px",
            }}
          >
            Historias reales
          </span>
          <span
            style={{
              display: "block",
              fontWeight: 600,
              fontSize: "35.6px",
              lineHeight: "43px",
              color: "#0F2D5C",
              letterSpacing: "0px",
            }}
          >
            Colombianos que ya compraron desde el exterior.
          </span>
        </div>
 
        {/* ── CARDS ── */}
        <div style={{ display: "flex", gap: "20px" }}>
          {testimonios.map((item, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 348px",
                height: "332.09px",
                backgroundColor: "#FBF8F3",
                borderRadius: "16px 0 16px 0",
                border: "0.8px solid rgba(15, 45, 92, 0.1)",
                position: "relative",
                overflow: "hidden",
                boxSizing: "border-box",
                transition:
                  "transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 14px 30px rgba(15, 45, 92, 0.12)";
                el.style.borderColor = "rgba(26, 79, 158, 0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "rgba(15, 45, 92, 0.1)";
              }}
            >
 
              {/* ── WATERMARK ── */}
              <span
                style={{
                  position: "absolute",
                  top: "12.8px",
                  left: "20.8px",
                  width: "55.38px",
                  height: "72px",
                  fontSize: "72px",
                  lineHeight: "72px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: item.color,
                  opacity: 0.12,
                  pointerEvents: "none",
                  userSelect: "none",
                  zIndex: 0,
                }}
              >
                \“
              </span>
 
              {/* ── BADGE ── */}
              <div
                style={{
                  position: "absolute",
                  top: "31.2px",
                  left: "28px",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 10px",
                  borderRadius: "100px",
                  backgroundColor: item.bgTag,
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontSize: "10.4px",
                    fontWeight: 700,
                    lineHeight: "15.6px",
                    letterSpacing: "0.83px",
                    textTransform: "uppercase" as const,
                    color: item.color,
                  }}
                >
                  {item.tag}
                </span>
              </div>
 
              {/* ── STARS ── */}
              <span
                style={{
                  position: "absolute",
                  top: "67px",
                  left: "28.8px",
                  width: "290.4px",
                  height: "20.4px",
                  fontSize: "13.6px",
                  lineHeight: "20.4px",
                  letterSpacing: "2px",
                  color: "#FFC107",
                  zIndex: 1,
                }}
              >
                ★★★★★
              </span>
 
              {/* ── QUOTE ── */}
              <p
                style={{
                  position: "absolute",
                  top: "103.2px",
                  left: "28.8px",
                  width: "290.4px",
                  fontSize: "14.4px",
                  lineHeight: "25.2px",
                  fontStyle: "italic",
                  color: "#1E293B",
                  letterSpacing: "0px",
                  margin: 0,
                  zIndex: 1,
                }}
              >
                {item.quote}
              </p>
 
              {/* ── FOOTER ── */}
              <div
                style={{
                  position: "absolute",
                  top: "249.2px",
                  left: "28.8px",
                  width: "290.4px",
                  height: "54.09px",
                  borderTop: "0.8px solid rgba(15, 45, 92, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "#1A4F9E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#FFFFFF" }}>
                    {item.initials}
                  </span>
                </div>
 
                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "21px",
                      color: "#0F2D5C",
                      letterSpacing: "0px",
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontSize: "11.52px",
                      lineHeight: "17.3px",
                      color: "#94A3B8",
                      letterSpacing: "0px",
                      margin: 0,
                      opacity: 0.5,
                    }}
                  >
                    {item.info}
                  </p>
                </div>
              </div>
 
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}