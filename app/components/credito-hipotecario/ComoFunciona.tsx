'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

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

type ActiveState = [boolean, boolean, boolean];

const INACTIVE_STATE: ActiveState = [false, false, false];

const isMouseNearElement = (element: HTMLDivElement | null, e: MouseEvent) => {
  if (!element) return false;

  const { left, top, width, height } = element.getBoundingClientRect();

  return (
    Math.hypot(
      e.clientX - (left + width / 2),
      e.clientY - (top + height / 2)
    ) < PROXIMITY_THRESHOLD
  );
};

const css = `
  .cf-section {
    padding: 87.99px 0;
  }

  .cf-wrapper {
    width: min(1200px, calc(100vw - 96px));
    box-sizing: border-box;
  }

  .cf-header {
    width: min(1104px, 100%);
    margin: 0 auto;
    text-align: center;
  }

  .cf-eyebrow {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #0A0A0A;
    margin: 0;
  }

  .cf-title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 36.8px;
    line-height: 44.2px;
    color: #0F2D5C;
    margin: 0 0 8px;
    letter-spacing: -0.02em;
  }

  .cf-description {
    width: 900px;
    max-width: 100%;
    margin: 0 auto;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 15.2px;
    line-height: 25.8px;
    color: #475569;
  }

  .cf-steps {
    width: min(1104px, 100%);
    margin: 48px auto 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 55.99px auto;
    column-gap: 32px;
    row-gap: 20px;
    position: relative;
  }

  .cf-line {
    position: absolute;
    top: 27.99px;
    left: 20.77%;
    right: 20.77%;
    height: 1.99px;
    z-index: 0;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      rgba(15, 45, 92, 0.1) 0%,
      rgba(255, 193, 7, 1) 50%,
      rgba(15, 45, 92, 0.1) 100%
    );
    pointer-events: none;
  }

  .cf-circle {
    grid-row: 1;
    width: 55.99px;
    height: 55.99px;
    border-radius: 27.99px;
    background-color: #FFFFFF;
    border: 1px solid rgba(15, 45, 92, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 20.8px;
    color: #0F2D5C;
    z-index: 2;
    box-sizing: border-box;
    transition:
      background-color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      color 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .cf-circle.c1 {
    grid-column: 1;
    justify-self: start;
  }

  .cf-circle.c2 {
    grid-column: 2;
    justify-self: start;
  }

  .cf-circle.c3 {
    grid-column: 3;
    justify-self: start;
  }

  .cf-circle.inverted {
    background-color: #0F2D5C;
    border-color: #0F2D5C;
    color: #FFFFFF;
  }

  .cf-card {
    grid-row: 2;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    z-index: 1;
  }

  .cf-card.card1 {
    grid-column: 1;
  }

  .cf-card.card2 {
    grid-column: 2;
  }

  .cf-card.card3 {
    grid-column: 3;
  }

  .cf-card-title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20.77px;
    color: #0F2D5C;
    margin: 0 0 8px;
  }

  .cf-card-text {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 13.12px;
    line-height: 21px;
    color: #475569;
    margin: 0;
  }

  @media (max-width: 1200px) {
    .cf-section {
      padding: 87.99px 32px;
    }

    .cf-wrapper {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .cf-section {
      padding: 64px 24px;
    }

    .cf-wrapper {
      width: 100%;
    }

    .cf-title {
      font-size: 32px;
      line-height: 38px;
    }

    .cf-steps {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 42px;
    }

    .cf-line {
      display: none;
    }

    .cf-circle {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      flex-shrink: 0;
      align-self: flex-start;
    }

    .cf-circle.c1 {
      order: 1;
    }

    .cf-circle.c2 {
      order: 3;
    }

    .cf-circle.c3 {
      order: 5;
    }

    .cf-card {
      width: auto;
      padding-right: 0;
      padding-left: 20px;
      padding-bottom: 32px;
      margin-left: 21px;
      border-left: 2px solid #FFC107;
    }

    .cf-card.card1 {
      order: 2;
      margin-top: 12px;
    }

    .cf-card.card2 {
      order: 4;
      margin-top: 12px;
    }

    .cf-card.card3 {
      order: 6;
      margin-top: 12px;
      border-left-color: transparent;
      padding-bottom: 0;
    }
  }

  @media (max-width: 400px) {
    .cf-section {
      padding: 48px 16px;
    }

    .cf-title {
      font-size: 29px;
      line-height: 35px;
    }
  }
`;

export default function ComoFunciona() {
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<ActiveState>(INACTIVE_STATE);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setActive([
      isMouseNearElement(circle1Ref.current, e),
      isMouseNearElement(circle2Ref.current, e),
      isMouseNearElement(circle3Ref.current, e),
    ]);
  }, []);

  const onMouseLeave = useCallback(() => {
    setActive(INACTIVE_STATE);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseMove, onMouseLeave]);

  return (
    <section className="cf-section w-full flex justify-center bg-[#FBF8F3]">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="cf-wrapper">
        <div className="cf-header">
          <p className="cf-eyebrow">
            Cómo funciona
          </p>

          <h2 className="cf-title">
            Tres pasos. Todo remoto.
          </h2>

          <p className="cf-description">
            Desde la evaluación inicial hasta la radicación ante el banco, te acompañamos en cada paso del proceso.
            <br />
            Todo se gestiona de forma remota, sin viajes ni trámites presenciales.
          </p>
        </div>

        <div className="cf-steps">
          <div className="cf-line" />

          <div
            ref={circle1Ref}
            className={`cf-circle ${CIRCLE_POSITIONS[0]}${active[0] ? ' inverted' : ''}`}
          >
            1
          </div>

          <div
            ref={circle2Ref}
            className={`cf-circle ${CIRCLE_POSITIONS[1]}${active[1] ? ' inverted' : ''}`}
          >
            2
          </div>

          <div
            ref={circle3Ref}
            className={`cf-circle ${CIRCLE_POSITIONS[2]}${active[2] ? ' inverted' : ''}`}
          >
            3
          </div>

          {STEPS.map((step, i) => (
            <div key={step.title} className={`cf-card card${i + 1}`}>
              <h3 className="cf-card-title">
                {step.title}
              </h3>

              <p className="cf-card-text">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}