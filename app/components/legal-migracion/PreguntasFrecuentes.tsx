import React from 'react';

const preguntas = [
  '¿Puedo hacer trámites migratorios desde el exterior?',
  '¿Qué tipo de visa me conviene según mi caso?',
  '¿Cuánto tiempo toma constituir una empresa en Colombia?',
  '¿Necesito viajar a Colombia para firmar documentos?',
  '¿Qué incluye el servicio de representación legal?',
  '¿Cómo funciona el trámite de pensiones desde el exterior?',
];

const PreguntasFrecuentes: React.FC = () => {
  return (
    <section
      style={{
        width: '1180px',
        height: '818.53px',
        margin: '0 auto',
        backgroundColor: '#FBF8F3',
        padding: '100px 58px 0 58px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '1064px',
          height: '80.93px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div
          style={{
            width: '1064px',
            height: '16px',
            color: '#FFC107',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
            lineHeight: '16.3px',
            letterSpacing: '1.74px',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          PREGUNTAS FRECUENTES
        </div>

        <h2
          style={{
            width: '1064px',
            height: '43.01px',
            margin: 0,
            textAlign: 'center',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '35.86px',
            lineHeight: '43px',
            letterSpacing: 0,
            color: '#0F2D5C',
          }}
        >
          Resolvemos <span style={{ color: '#FFC107', fontStyle: 'italic' }}>tus dudas</span>
        </h2>
      </div>

      <div
        style={{
          width: '1064px',
          height: '497.6px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {preguntas.map((pregunta) => (
          <div
            key={pregunta}
            style={{
              width: '1064px',
              height: '69.6px',
              borderRadius: '20px',
              border: '0.8px solid rgba(15, 45, 92, 0.1)',
              backgroundColor: '#FFFFFF',
              padding: '0.8px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                margin: 0,
                marginLeft: '24px',
                maxWidth: 'calc(100% - 96px)',
                height: '21.27px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '15.2px',
                lineHeight: '21.3px',
                letterSpacing: 0,
                color: '#0F2D5C',
                textAlign: 'left',
                whiteSpace: 'nowrap',
              }}
            >
              {pregunta}
            </p>

            <button
              type="button"
              aria-label={`Expandir: ${pregunta}`}
              style={{
                marginRight: '24px',
                width: '28px',
                height: '28px',
                borderRadius: '14px',
                border: '0.8px solid rgba(15, 45, 92, 0.1)',
                backgroundColor: '#FBF8F3',
                color: '#0F2D5C',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '17.6px',
                lineHeight: '17.6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;