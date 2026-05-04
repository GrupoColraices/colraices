"use client";

export default function FiscalConfusionSection() {
  const rows = [
    {
      leftTitle: "Residencia migratoria",
      leftText:
        "Estás en España con residencia legal. Llevas 5 años fuera. Tu visa está en regla.",
      center: "≠",
      rightTitle: "Residencia fiscal",
      rightText:
        "Si tu familia, tu inmueble o la mayoría de tu patrimonio está en Colombia, la DIAN puede considerarte residente fiscal colombiano.",
    },
    {
      leftTitle: "Lo que crees",
      leftText:
        '"Yo ya no tengo nada que ver con el fisco colombiano."',
      center: "≠",
      rightTitle: "Lo que puede pasar",
      rightText:
        "Años de declaraciones pendientes acumulando sanciones e intereses que en algún momento se vuelven concretos.",
    },
    {
      leftTitle: "El riesgo de ignorarlo",
      leftText:
        "La DIAN cruza datos con entidades financieras, notarías y registros públicos — y cada vez más con sistemas internacionales.",
      center: "→",
      rightTitle: "Lo que resuelve esto",
      rightText:
        "Un diagnóstico que confirma si tienes obligaciones activas — o que te da la tranquilidad documentada de que no las tienes.",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "#091D3E",
        display: "flex",
        justifyContent: "center",
        padding: "72px 0",
      }}
    >
      <div
        style={{
          width: "1180px",
          display: "flex",
          justifyContent: "space-between",
          gap: "48px",
          minHeight: "689px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: "514px",
            display: "flex",
            flexDirection: "column",
            paddingTop: "64px",
          }}
        >
          {/* Top label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "2px",
                background: "#FFC107",
              }}
            />
            <span
              style={{
                color: "#FFC107",
                fontSize: "11.2px",
                fontWeight: 600,
                lineHeight: "16.8px",
                letterSpacing: "1.57px",
                textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              La confusión más común
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "32px",
              lineHeight: "43px",
              fontWeight: 600,
              color: "#FFFFFF",
              margin: 0,
              marginBottom: "28px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Vivir afuera no es lo
            <br />
            mismo que salir del fisco
            <br />
            colombiano
          </h2>

          {/* Description */}
          <p
            style={{
              margin: 0,
              fontSize: "15.2px",
              lineHeight: "26.6px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "40px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            La DIAN no pregunta dónde vives. Pregunta si eres residente fiscal.
            Y ese cálculo depende de reglas que poco tienen que ver con tu
            pasaporte o tu visa.
          </p>

          {/* Bottom green box */}
          <div
            style={{
              width: "100%",
              borderRadius: "20px",
              padding: "20.8px 24.8px",
              background: "rgba(5,150,105,0.12)",
              border: "0.8px solid rgba(16,185,129,0.2)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14.08px",
                lineHeight: "23.9px",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <span
                style={{
                  color: "#FFC107",
                  fontWeight: 700,
                }}
              >
                Mientras seas residente fiscal en Colombia,
              </span>{" "}
              mantienes obligaciones tributarias, sin importar cuántos años
              lleves fuera o dónde trabajes. El diagnóstico gratuito te ayuda a
              resolver esta duda en minutos.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            width: "514px",
            display: "flex",
            flexDirection: "column",
            paddingTop: "16px",
          }}
        >
          {/* Subtitle */}
          <div
            style={{
              fontSize: "10.88px",
              fontWeight: 600,
              lineHeight: "16.3px",
              letterSpacing: "1.41px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "24px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Cómo lo ven el consulado y cómo lo ve la DIAN
          </div>

          {/* Full comparison structure */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "514px",
            }}
          >
            {rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "237px 40px 237px",
                  minHeight: "160px",
                }}
              >
                {/* Left */}
                <div
                  style={{
                    padding: "16.8px 20.8px",
                    background: "rgba(220,38,38,0.10)",
                    border: "1px solid rgba(220,38,38,0.15)",
                    borderTopLeftRadius: i === 0 ? "12px" : "0",
                    borderBottomLeftRadius: i === 2 ? "12px" : "0",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(220,38,38,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      marginBottom: "14px",
                      fontSize: "10.88px",
                      lineHeight: "17.4px",
                      fontWeight: 700,
                      letterSpacing: "1.09px",
                      textTransform: "uppercase",
                      color: "rgba(252,165,165,0.85)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {row.leftTitle}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "13.12px",
                      lineHeight: "21px",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {row.leftText}
                  </p>
                </div>

                {/* Center Box */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderTop:
                      i === 0 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {row.center}
                </div>

                {/* Right */}
                <div
                  style={{
                    padding: "16.8px 20.8px",
                    background: "rgba(5,150,105,0.10)",
                    border: "1px solid rgba(16,185,129,0.18)",
                    borderTopRightRadius: i === 0 ? "12px" : "0",
                    borderBottomRightRadius: i === 2 ? "12px" : "0",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(16,185,129,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      marginBottom: "14px",
                      fontSize: "10.88px",
                      lineHeight: "17.4px",
                      fontWeight: 700,
                      letterSpacing: "1.09px",
                      textTransform: "uppercase",
                      color: "#FFC107",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {row.rightTitle}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "13.12px",
                      lineHeight: "21px",
                      color:
                        i === 0
                          ? "rgba(255,255,255,0.65)"
                          : "rgba(255,255,255,0.55)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {row.rightText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}