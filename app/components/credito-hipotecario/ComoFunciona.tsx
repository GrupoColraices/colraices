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

const PROXIMITY_THRESHOLD = 90;

const css = `
  .cf-wrapper {
    width: 1180px;
    padding: 88px 48px;
    box-sizing: border-box;
  }
  .cf-header { width: 1084px; }

  /* ── Contenedor unificado (circles + cards) ── */
  .cf-steps {
    width: 1084px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 56px 32px auto;
    position: relative;
  }

  /* SVG spindle */
  .cf-line-svg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 56px;
    z-index: 0;
    pointer-events: none;
    overflow: visible;
  }

  /* Círculos — fila 1 del grid */
  .cf-circle {
    grid-row: 1;
    width: 56px;
    height: 56px;
    border-radius: 28px;
    background-color: #FFFFFF;
    border: 1.6px solid rgba(15,45,92,0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 19.2px;
    color: #0F2D5C;
    z-index: 1;
    cursor: default;
    transition:
      background-color 0.35s cubic-bezier(0.22,1,0.36,1),
      border-color     0.35s cubic-bezier(0.22,1,0.36,1),
      color            0.35s cubic-bezier(0.22,1,0.36,1);
  }
  .cf-circle.c1 { grid-column: 1; justify-self: start; }
  .cf-circle.c2 { grid-column: 2; justify-self: center; }
  .cf-circle.c3 { grid-column: 3; justify-self: end; }
  .cf-circle.inverted {
    background-color: #0F2D5C;
    border-color: #0F2D5C;
    color: #FFFFFF;
  }

  /* Cards — fila 3 del grid */
  .cf-card {
    grid-row: 3;
    box-sizing: border-box;
    padding-right: 20px;
  }
  .cf-card.card1 { grid-column: 1; }
  .cf-card.card2 { grid-column: 2; }
  .cf-card.card3 { grid-column: 3; padding-right: 0; }

  .cf-card-text {
    text-align: justify;
    text-justify: inter-word;
  }

  /* ════ TABLET ≤ 1200px ════ */
  @media (max-width: 1200px) {
    .cf-wrapper { width: 100%; }
    .cf-header  { width: 100%; }
    .cf-steps   { width: 100%; }
  }

  /* ════ MÓVIL ≤ 768px ════ */
  @media (max-width: 768px) {
    .cf-wrapper { padding: 64px 24px; box-sizing: border-box; }

    /* Pasar a flex columna e intercalar con order */
    .cf-steps {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    /* Ocultar SVG horizontal */
    .cf-line-svg { display: none; }

    /* Círculos como bloques normales */
    .cf-circle {
      align-self: flex-start;
      flex-shrink: 0;
      margin-bottom: 0;
    }
    .cf-circle.c1 { order: 1; }
    .cf-circle.c2 { order: 3; }
    .cf-circle.c3 { order: 5; }

    /* Cards intercaladas con los círculos */
    .cf-card {
      padding-right: 0;
      padding-left: 20px;
      padding-bottom: 32px;
      margin-left: 27px;
      border-left: 2px solid #FFC107;
      box-sizing: border-box;
      width: auto;
    }
    .cf-card.card1 { order: 2; margin-top: 12px; }
    .cf-card.card2 { order: 4; margin-top: 12px; }
    .cf-card.card3 { order: 6; margin-top: 12px; border-left-color: transparent; padding-bottom: 0; }
  }

  /* ════ MÓVIL PEQUEÑO ≤ 400px ════ */
  @media (max-width: 400px) {
    .cf-wrapper { padding: 48px 16px; }
  }
`;

export default function ComoFunciona() {
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const circleRefs = [ref0, ref1, ref2];

  const [active, setActive] = useState([false, false, false]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setActive(
      circleRefs.map((ref) => {
        if (!ref.current) return false;
        const r = ref.current.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        return Math.hypot(e.clientX - cx, e.clientY - cy) < PROXIMITY_THRESHOLD;
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
          <p style={{ fontFamily:'Montserrat', fontStyle:'italic', fontSize:'20px', lineHeight:'30px', color:'#0A0A0A', marginBottom:'10px' }}>
            Cómo funciona
          </p>
          <h2 style={{ fontFamily:'Montserrat', fontWeight:600, fontSize:'35.86px', lineHeight:'43px', color:'#0F2D5C', marginBottom:'10px' }}>
            Tres pasos. Todo remoto.
          </h2>
          <p style={{ fontFamily:'Montserrat', fontWeight:400, fontSize:'15.2px', lineHeight:'25.8px', color:'#475569' }}>
            Desde la evaluación inicial hasta la radicación ante el banco, te acompañamos en cada paso del proceso.
            <br />
            Todo se gestiona de forma remota, sin viajes ni trámites presenciales.
          </p>
        </div>

        <div style={{ height:'80px' }} />

        {/* STEPS: círculos + cards en un solo grid/flex */}
        <div className="cf-steps">

          {/* SVG spindle (solo visible en desktop) */}
          <svg
            className="cf-line-svg"
            viewBox="0 0 1084 56"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 285,28 Q 542,25.5 799,28 Q 542,30.5 285,28 Z"
              fill="#FFC107"
            />
          </svg>

          {/* Círculos */}
          <div ref={ref0} className={'cf-circle c1' + (active[0] ? ' inverted' : '')}>1</div>
          <div ref={ref1} className={'cf-circle c2' + (active[1] ? ' inverted' : '')}>2</div>
          <div ref={ref2} className={'cf-circle c3' + (active[2] ? ' inverted' : '')}>3</div>

          {/* Cards */}
          {STEPS.map((step, i) => (
            <div key={step.title} className={`cf-card card${i + 1}`}>
              <h3 style={{ fontFamily:'Montserrat', fontWeight:600, fontSize:'16px', lineHeight:'20.8px', color:'#0F2D5C', marginBottom:'8px' }}>
                {step.title}
              </h3>
              <p className="cf-card-text" style={{ fontFamily:'Montserrat', fontWeight:400, fontSize:'13.12px', lineHeight:'21px', color:'#475569', margin:0 }}>
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}