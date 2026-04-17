export default function ComoFunciona() {
  return (
    <section className="w-full flex justify-center bg-[#FBF8F3]">
      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="w-[1180px]"
        style={{
          paddingTop: "88px",
          paddingBottom: "88px",
          paddingLeft: "48px",
          paddingRight: "48px",
        }}
      >
        {/* HEADER */}
        <div className="w-[1084px] h-auto">

          {/* Cómo funciona */}
          <p
            className="text-left"
            style={{
              fontFamily: "Montserrat",
              fontStyle: "italic",
              fontSize: "20px",
              lineHeight: "30px",
              color: "#0A0A0A",
              marginBottom: "10px",
            }}
          >
            Cómo funciona
          </p>

          {/* TITULO */}
          <h2
            className="text-left"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "35.86px",
              lineHeight: "43px",
              color: "#0F2D5C",
              marginBottom: "10px",
            }}
          >
            Tres pasos. Todo remoto.
          </h2>

          {/* DESCRIPCIÓN */}
          <p
            className="text-left "
            style={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: "15.2px",
              lineHeight: "25.8px",
              color: "#475569",
            }}
          >
            Desde la evaluación inicial hasta la radicación ante el banco, te acompañamos en cada paso del proceso.
            <br />
            Todo se gestiona de forma remota, sin viajes ni trámites presenciales.
          </p>
        </div>

        {/* ESPACIO */}
        <div style={{ height: "136px" }} />

        {/* CARDS */}
        <div className="w-[1084px] flex justify-between">

          {/* CARD 1 */}
          <div className="w-[361.33px]">

            {/* CIRCULO */}
            <div
              className="flex items-center justify-center"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "28px",
                backgroundColor: "#FFFFFF",
                border: "1.6px solid rgba(15,45,92,0.1)",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "19.2px",
                  lineHeight: "28.8px",
                  color: "#0F2D5C",
                }}
              >
                1
              </span>
            </div>

            {/* TITULO */}
            <h3
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20.8px",
                color: "#0F2D5C",
                marginBottom: "8px",
              }}
            >
              Viabilidad
            </h3>

            {/* TEXTO */}
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "13.12px",
                lineHeight: "21px",
                color: "#475569",
                width: "341.33px",
                textAlign: "justify",
                textJustify: "inter-word",      
              }}
            >
              Entendemos tu situación financiera y tu objetivo de compra. Analizamos tu perfil y en 3–5 días te damos un concepto de viabilidad y el monto aproximado de crédito al que podrías acceder.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-[361.33px]">

            <div
              className="flex items-center justify-center"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "28px",
                backgroundColor: "#FFFFFF",
                border: "1.6px solid rgba(15,45,92,0.1)",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "19.2px",
                  lineHeight: "28.8px",
                  color: "#0F2D5C",
                }}
              >
                2
              </span>
            </div>

            <h3
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20.8px",
                color: "#0F2D5C",
                marginBottom: "8px",
              }}
            >
              Pre-aprobado
            </h3>

            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "13.12px",
                lineHeight: "21px",
                color: "#475569",
                width: "341.33px",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              Te acompañamos en la recopilación de documentos y realizamos un análisis más profundo de tu perfil. Con esta información gestionamos tu pre-aprobado con la entidad financiera.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-[361.33px]">

            <div
              className="flex items-center justify-center"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "28px",
                backgroundColor: "#FFFFFF",
                border: "1.6px solid rgba(15,45,92,0.1)",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "19.2px",
                  lineHeight: "28.8px",
                  color: "#0F2D5C",
                }}
              >
                3
              </span>
            </div>

            <h3
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20.8px",
                color: "#0F2D5C",
                marginBottom: "8px",
              }}
            >
              Radicación
            </h3>

            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "13.12px",
                lineHeight: "21px",
                color: "#475569",
                width: "341.33px",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              Cuando tu perfil y el inmueble están alineados, organizamos el expediente y radicamos la solicitud ante el banco. Te acompañamos hasta recibir la decisión final y continuar con la firma y el desembolso.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}