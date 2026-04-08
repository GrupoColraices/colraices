import React from 'react';

const questions = [
  '¿Tengo que viajar a Colombia para contratar alguno de estos servicios?',
  '¿Puedo contratar varios productos a la vez?',
  '¿Cómo funciona el pago?',
  '¿Qué pasa si no califico para crédito después de la Brújula Crediticia?',
  '¿Colraices es un banco o una entidad financiera?',
  '¿Cuánto tiempo toma cada servicio?',
];

export default function FaqSection() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FBF8F3',
        padding: '88px 96px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1180px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 612px) 320px',
          gap: '72px',
          alignItems: 'start',
        }}
      >
        <div style={{ width: '100%' }}>
          <div style={{ marginBottom: '52px' }}>
            <p
              style={{
                margin: 0,
                color: '#FFC107',
                fontSize: '20px',
                lineHeight: '30px',
                fontStyle: 'italic',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Preguntas frecuentes
            </p>
            <h2
              style={{
                margin: 0,
                color: '#0F2D5C',
                fontSize: '35.86px',
                lineHeight: '43px',
                fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Todo lo que necesitas saber.
            </h2>
          </div>

          <div>
            {questions.map((question) => (
              <button
                key={question}
                type="button"
                style={{
                  width: '100%',
                  minHeight: '62px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: 0,
                  borderBottom: '0.8px solid rgba(15, 45, 92, 0.1)',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  padding: '0 0 0 0',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    color: '#0F2D5C',
                    fontSize: '15.2px',
                    lineHeight: '21.3px',
                    fontWeight: 500,
                    fontFamily: 'Montserrat, sans-serif',
                    paddingRight: '12px',
                  }}
                >
                  {question}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: '26px',
                    height: '26px',
                    borderRadius: '13px',
                    border: '0.8px solid rgba(15, 45, 92, 0.1)',
                    color: '#0F2D5C',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13.6px',
                    lineHeight: '20.4px',
                    fontWeight: 400,
                    backgroundColor: '#FBF8F3',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  +
                </span>
              </button>
            ))}
          </div>
        </div>

        <aside
          style={{
            width: '320px',
            minHeight: '507.81px',
            borderRadius: '20px',
            border: '0.8px solid #E2E8F0',
            backgroundColor: '#FBF8F3',
            padding: '146.66px 28.8px 20px',
            boxSizing: 'border-box',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              margin: 0,
              color: '#0F2D5C',
              fontSize: '16px',
              lineHeight: '21.6px',
              fontWeight: 600,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Habla directamente
            <br />
            con un asesor
          </h3>
          <p
            style={{
              margin: '28px 0 18px',
              color: '#475569',
              fontSize: '13.12px',
              lineHeight: '21px',
              fontWeight: 400,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Te ayudamos a entender qué producto
            <br />
            necesitas y cómo empezar. 100%
            <br />
            remoto. Sin compromiso.
          </p>
          <button
            type="button"
            style={{
              width: '262.4px',
              height: '45px',
              borderRadius: '100px',
              border: 0,
              backgroundColor: '#0F2D5C',
              color: '#FFFFFF',
              fontSize: '14px',
              lineHeight: '21px',
              fontWeight: 600,
              fontFamily: 'Montserrat, sans-serif',
              boxShadow: '0 8px 16px rgba(15, 45, 92, 0.14)',
              cursor: 'pointer',
            }}
          >
            Agendar llamada
          </button>
          <p
            style={{
              margin: '20px 0 0',
              color: '#94A3B8',
              fontSize: '11.52px',
              lineHeight: '17.3px',
              fontWeight: 400,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Respuesta en menos de 24 horas
          </p>
        </aside>
      </div>
    </section>
  );
}