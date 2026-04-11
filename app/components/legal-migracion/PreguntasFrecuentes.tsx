'use client';

import React, { useState, useRef, useEffect } from 'react';

type FaqItem = {
  pregunta: string;
  respuesta: string;
};

const preguntas: FaqItem[] = [
  {
    pregunta: '¿Puedo hacer trámites migratorios desde el exterior?',
    respuesta:
      'Sí. Muchos trámites se pueden gestionar completamente desde el exterior con poder notarial. En algunos casos se requiere presencia física puntual, pero coordinamos todo para minimizar viajes.',
  },
  {
    pregunta: '¿Qué tipo de visa me conviene según mi caso?',
    respuesta:
      'Depende de tu objetivo: trabajar, invertir, pensionarte o reunificarte con familia. En la consulta inicial analizamos tu perfil y te recomendamos la ruta migratoria más adecuada.',
  },
  {
    pregunta: '¿Cuánto tiempo toma constituir una empresa en Colombia?',
    respuesta:
      'El proceso completo (SAS, RUT, Cámara de Comercio y cuenta bancaria) toma entre 3 y 6 semanas, dependiendo de la agilidad de las entidades. Nosotros coordinamos todo el proceso.',
  },
  {
    pregunta: '¿Necesito viajar a Colombia para firmar documentos?',
    respuesta:
      'No siempre. Con poder notarial podemos actuar en tu nombre. Si el trámite requiere presencia física, te avisamos con anticipación y coordinamos fechas flexibles.',
  },
  {
    pregunta: '¿Qué incluye el servicio de representación legal?',
    respuesta:
      'Incluye poder notarial, gestión de trámites administrativos en tu nombre, presentación de documentos ante entidades públicas y privadas, y seguimiento hasta la resolución del caso.',
  },
  {
    pregunta: '¿Cómo funciona el trámite de pensiones desde el exterior?',
    respuesta:
      'Evaluamos tu caso, preparamos toda la documentación, radicamos la solicitud ante el fondo correspondiente y hacemos seguimiento hasta la aprobación. Todo se puede gestionar remotamente.',
  },
];

const PreguntasFrecuentes: React.FC = () => {
  const [abierta, setAbierta] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(818.53);

  const togglePregunta = (index: number) => {
    setAbierta((actual) => (actual === index ? null : index));
  };

  useEffect(() => {
    if (abierta === null) {
      setContainerHeight(818.53);
      return;
    }

    const el = contentRefs.current[abierta];
    if (el) {
      const extra = 50;
      const newHeight = 818.53 + el.scrollHeight + extra;

      setContainerHeight((prev) => Math.max(prev, newHeight));
    }
  }, [abierta]);

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1180px',
        height: `${containerHeight}px`,
        transition: 'height 0.4s ease',
        margin: '0 auto',
        backgroundColor: '#FBF8F3',
        padding: '100px 24px 0 24px', // responsive padding
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        boxSizing: 'border-box',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          width: '100%',
          maxWidth: '1064px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div
          style={{
            color: '#FFC107',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
            letterSpacing: '1.74px',
            textTransform: 'uppercase',
          }}
        >
          PREGUNTAS FRECUENTES
        </div>

        <h2
          style={{
            margin: 0,
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(26px, 4vw, 35.86px)', // responsive sin romper diseño
            color: '#0F2D5C',
          }}
        >
          Resolvemos <span style={{ color: '#FFC107', fontStyle: 'italic' }}>tus dudas</span>
        </h2>
      </div>

      {/* LISTA */}
      <div
        style={{
          width: '100%',
          maxWidth: '1064px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {preguntas.map((item, index) => {
          const isOpen = abierta === index;
          const isHover = hovered === index;
          const cardHighlighted = isHover;
          const buttonHighlighted = isOpen || isHover;

          return (
            <div
              key={item.pregunta}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: '100%',
                borderRadius: '20px',
                border: '0.8px solid rgba(15, 45, 92, 0.1)',
                backgroundColor: '#FFFFFF',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  minHeight: '69.6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 20px',
                  backgroundColor: cardHighlighted ? '#F3EDE3' : '#FFFFFF',
                  borderRadius: isOpen ? '20px 20px 0 0' : '20px',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '15.2px',
                    color: '#0F2D5C',
                    maxWidth: 'calc(100% - 50px)',
                  }}
                >
                  {item.pregunta}
                </p>

                <button
                  onClick={() => togglePregunta(index)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '14px',
                    border: buttonHighlighted
                      ? '0.8px solid #FFC107'
                      : '0.8px solid rgba(15, 45, 92, 0.1)',
                    backgroundColor: buttonHighlighted ? '#FFC107' : '#FBF8F3',
                    fontSize: '17.6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transform: buttonHighlighted ? 'scale(1.04)' : 'scale(1)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isOpen ? '−' : '+'}
                </button>
              </div>

              {/* CONTENIDO */}
              <div
                style={{
                  maxHeight: isOpen ? '300px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease, opacity 0.25s ease',
                }}
              >
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  style={{
                    padding: isOpen ? '0 20px 20px 20px' : '0 20px',
                    transition: 'padding 0.3s ease',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: 'Montserrat, system-ui, sans-serif',
                      fontSize: '14.08px',
                      lineHeight: '24.64px',
                      color: 'rgb(71, 85, 105)',
                    }}
                  >
                    {item.respuesta}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;