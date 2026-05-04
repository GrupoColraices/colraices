'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const STEPS = [
  {
    title: 'Viabilidad',
    text: 'Entendemos tu situación financiera y tu objetivo de compra. Analizamos tu perfil y en 3–5 días te damos un concepto de viabilidad y el monto aproximado de crédito al que podrías acceder.',
  },
  {
    title: 'Pre-aprobado',
    text: 'Te acompañamos en la recopilación de documentos y realizamos un análisis más profundo de tu perfil. Con esta información gestionamos tu pre-aprobado con la entidad financiera.',
  },
  {
    title: 'Radicación',
    text: 'Cuando tu perfil y el inmueble están alineados, organizamos el expediente y radicamos la solicitud ante el banco. Te acompañamos hasta recibir la decisión final y continuar con la firma y el desembolso.',
  },
];

const CIRCLE_POSITIONS = ['c1', 'c2', 'c3'] as const;
const PROXIMITY_THRESHOLD = 90;

const css = `
  .cf-wrapper {
    width: 1180px;
    padding: 96px 48px 88px;
    box-sizing: border-box;
  }
  .cf-header {
    max-width: 980px;
    margin: 0 auto;
    text-align: center;
    transform: translateX(-8px);
  }
  .cf-steps {
    max-width: 1084px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 56px 52px auto;
    column-gap: 34px;
    position: relative;
  }
  .cf-line-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 56px;
    z-index: 0;
    pointer-events: none;
    overflow: visible;
  }
  .cf-circle {
    grid-row: 1;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #fff;
    border: 1.6px solid rgba(15,45,92,0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 19.2px;
    color: #0F2D5C;
    z-index: 2;
    transition: background-color 0.35s cubic-bezier(0.22,1,0.36,1),
                border-color     0.35s cubic-bezier(0.22,1,0.36,1),
                color            0.35s cubic-bezier(0.22,1,0.36,1);
  }
  .cf-circle.c1 { grid-column: 1; justify-self: start; }
  .cf-circle.c2 { grid-column: 2; justify-self: center; }
  .cf-circle.c3 { grid-column: 3; justify-self: end; }
  .cf-circle.inverted {
    background-color: #0F2D5C;
    border-color: #0F2D5C;
    color: #fff;
  }
  .cf-card {
    grid-row: 3;
    box-sizing: border-box;
    width: 100%;
  }
  .cf-card.card1 { grid-column: 1; padding-right: 28px; }
  .cf-card.card2 { grid-column: 2; padding-right: 24px; }
  .cf-card.card3 { grid-column: 3; }

  @media (max-width: 1200px) {
    .cf-wrapper { width: 100%; padding: 88px 32px; }
    .cf-header, .cf-steps { max-width: 100%; transform: none; }
    .cf-steps { column-gap: 28px; }
  }
  @media (max-width: 768px) {
    .cf-wrapper { padding: 64px 24px; }
    .cf-steps { display: flex; flex-direction: column; }
    .cf-line-svg { display: none; }
    .cf-circle { align-self: flex-start; flex-shrink: 0; }
    .cf-circle.c1 { order: 1; }
    .cf-circle.c2 { order: 3; }
    .cf-circle.c3 { order: 5; }
    .cf-card {
      padding-right: 0;
      padding-left: 20px;
      padding-bottom: 32px;
      margin-left: 27px;
      border-left: 2px solid #FFC107;
      width: auto;
    }
    .cf-card.card1 { order: 2; margin-top: 12px; }
    .cf-card.card2 { order: 4; margin-top: 12px; }
    .cf-card.card3 { order: 6; margin-top: 12px; border-left-color: transparent; padding-bottom: 0; }
  }
  @media (max-width: 400px) {
    .cf-wrapper { padding: 48px 16px; }
  }
`;

const TITLE_STYLE: React.CSSProperties = {
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '24px',
  color: '#0F2D5C',
  marginBottom: '14px',
};

const TEXT_STYLE: React.CSSProperties = {
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '15px',
  lineHeight: '30px',
  color: '#475569',
  margin: 0,
};

export default function ComoFunciona() {
  const circleRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [active, setActive] = useState([false, false, false]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setActive(
      circleRefs.map((ref) => {
        if (!ref.current) return false;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        return Math.hypot(e.clientX - (left + width / 2), e.clientY - (top + height / 2)) < PROXIMITY_THRESHOLD;
      })
    );
  }, []);

  const onMouseLeave = useCallback(() => setActive([false, false, false]), []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseMove, onMouseLeave]);

  return (
    <section className="w-full flex justify-center bg-[#FBF8F3]">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="cf-wrapper">

        {/* HEADER */}
        <div className="cf-header">
          <p style={{ fontFamily: 'Montserrat', fontStyle: 'italic', fontSize: '20px', lineHeight: '30px', color: '#0A0A0A', marginBottom: '8px' }}>
            Cómo funciona
          </p>
          <h2 style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '58px', lineHeight: '66px', color: '#0F2D5C', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Tres pasos. Todo remoto.
          </h2>
          <p style={{ fontFamily: 'Montserrat', fontSize: '17px', lineHeight: '31px', color: '#475569', margin: '0 auto', maxWidth: '920px' }}>
            Desde la evaluación inicial hasta la radicación ante el banco, te acompañamos en cada paso del proceso.
            <br />
            Todo se gestiona de forma remota, sin viajes ni trámites presenciales.
          </p>
        </div>

        <div style={{ height: '74px' }} />

        {/* STEPS */}
        <div className="cf-steps">

          {/* SVG líneas */}
          <svg className="cf-line-svg" viewBox="0 0 1084 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 28,28 L 1056,28" stroke="#DEDAD4" strokeWidth="1.2" fill="none" />
            <path
              d="M 28,28 C 200,27.6 380,27 542,27 C 704,27 884,27.6 1056,28 C 884,28.4 704,29 542,29 C 380,29 200,28.4 28,28 Z"
              fill="#FFC107"
              stroke="none"
            />
          </svg>

          {/* Círculos */}
          {circleRefs.map((ref, i) => (
            <div key={i} ref={ref} className={`cf-circle ${CIRCLE_POSITIONS[i]}${active[i] ? ' inverted' : ''}`}>
              {i + 1}
            </div>
          ))}

          {/* Cards */}
          {STEPS.map((step, i) => (
            <div key={step.title} className={`cf-card card${i + 1}`}>
              <h3 style={TITLE_STYLE}>{step.title}</h3>
              <p style={TEXT_STYLE}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}