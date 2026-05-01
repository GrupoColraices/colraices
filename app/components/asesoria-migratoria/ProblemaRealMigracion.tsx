"use client";

const problemasMigratorios = [
  {
    icono: "🗺️",
    titulo: "No sabes por dónde empezar",
    descripcion:
      "Los procesos migratorios tienen múltiples caminos. Sin orientación clara, es fácil tomar el equivocado desde el inicio.",
  },
  {
    icono: "📄",
    titulo: "No conoces los requisitos reales",
    descripcion:
      "Cada país tiene reglas y criterios distintos. Un error en la interpretación puede afectar todo el proceso.",
  },
  {
    icono: "⚠️",
    titulo: "Riesgo de caer en manos equivocadas",
    descripcion:
      "El mercado migratorio no siempre es transparente. Elegir mal puede significar perder tiempo y dinero.",
  },
  {
    icono: "📁",
    titulo: "No sabes qué documentos necesitas",
    descripcion:
      "Los documentos cambian según la visa y el perfil del solicitante. Un error documental puede retrasar o bloquear la solicitud.",
  },
  {
    icono: "💰",
    titulo: "Sin claridad sobre los costos",
    descripcion:
      "Muchos procesos comienzan sin entender las tasas, servicios y ajustes necesarios. Esto termina generando gastos inesperados.",
  },
  {
    icono: "↩️",
    titulo: "No sabes qué pasa si te rechazan",
    descripcion:
      "Un rechazo no siempre es el final. Pero sin orientación, es difícil saber qué camino tomar después.",
  },
];

export default function ProblemaRealMigracion() {
  return (
    <section className="w-full bg-[#FDF6EE] pt-[100px] pb-[120px] px-[155px]">
      <style>{`
        .migration-card {
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }
        .migration-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #FFC107;
          border-radius: 0 0 20px 20px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .migration-card:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .migration-card:hover {
          box-shadow: 0 12px 32px rgba(15, 45, 92, 0.13);
          transform: translateY(-3px);
        }
      `}</style>

      <div className="max-w-[1064px] mx-auto flex flex-col items-center">
        {/* Encabezado */}
        <div className="w-full h-auto flex flex-col items-center text-center">
          {/* Subtítulo */}
          <div className="flex items-center justify-center mb-[24px]">
            <div className="w-[24px] h-[2px] bg-[#FFC107] mr-[10px]" />
            <span
              className="uppercase text-[#FFC107] font-semibold tracking-[1.74px]"
              style={{
                fontSize: "16px",
                lineHeight: "16.3px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Por qué existe este servicio
            </span>
          </div>

          {/* Título */}
          <h2
            className="text-center font-semibold mb-[22px]"
            style={{
              fontSize: "41.6px",
              lineHeight: "49.9px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <span className="text-[#0F2D5C]">Migrar sin guía </span>
            <span className="text-[#FFC107] italic">tiene un costo real</span>
          </h2>

          {/* Descripción */}
          <p
            className="max-w-[800px] text-[#475569] font-normal"
            style={{
              fontSize: "16.8px",
              lineHeight: "28.9px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            El proceso migratorio está lleno de decisiones importantes. Sin
            orientación clara, es fácil perder tiempo, dinero o incluso cerrar
            oportunidades
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-3 gap-[20px] mt-[48px] w-full">
          {problemasMigratorios.map((item, index) => (
            <div
              key={index}
              className="migration-card bg-white border border-[#0F2D5C1A] rounded-[20px] w-[341px] h-[238px] px-[29px] pt-[29px]"
            >
              {/* Icono */}
              <div
                className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center
                           bg-gradient-to-b from-[#FFC107] to-[#F0B429]
                           text-[20.8px] mb-[16px]"
              >
                {item.icono}
              </div>

              {/* Título */}
              <h3
                className="text-[#0F2D5C] font-semibold mb-[14px]"
                style={{
                  fontSize: "15.2px",
                  lineHeight: "22.8px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {item.titulo}
              </h3>

              {/* Descripción */}
              <p
                className="text-[#475569] font-normal"
                style={{
                  fontSize: "13.28px",
                  lineHeight: "21.9px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}