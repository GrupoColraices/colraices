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
 
// Distancia (px en pantalla) a la que el círculo empieza a invertir
const PROXIMITY_THRESHOLD = 90;
 
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
        const r = ref.current.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        return Math.hypot(e.clientX - cx, e.clientY - cy) < PROXIMITY_THRESHOLD;
      })
    );
  }, []);
 
  // También deactivar cuando el mouse sale de la ventana
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
      <style>{`
        /* ════ BASE — valores originales ════ */
        .cf-wrapper {
          width: 1180px;
          padding: 88px 48px;
          box-sizing: border-box;
        }
        .cf-header  { width: 1084px; }
        .cf-stepper {
          width: 1084px;
          position: relative;
          height: 56px;        /* altura del círculo */
          margin-bottom: 32px;
        }
        .cf-circle {
          position: absolute;
          top: 0;
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
          /* Transición suave para la inversión */
          transition:
            background-color 0.35s cubic-bezier(0.22,1,0.36,1),
            border-color     0.35s cubic-bezier(0.22,1,0.36,1),
            color            0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .cf-circle.c1 { left: 0; }
        .cf-circle.c2 { left: 50%; transform: translateX(-50%); }
        .cf-circle.c3 { right: 0; }
 
        /* Estado invertido (proximidad activada) */
        .cf-circle.inverted {
          background-color: #0F2D5C;
          border-color: #0F2D5C;
          color: #FFFFFF;
        }
 
        /* SVG de la línea spindle — detrás de los círculos */
        .cf-line-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: visible;
        }
 
        /* ── Cards ── */
        .cf-cards {
          width: 1084px;
          display: flex;
          justify-content: space-between;
        }
        .cf-card      { width: 361.33px; }
        .cf-card-text {
          width: 341.33px;
          text-align: justify;
          text-justify: inter-word;
        }
 
        /* ════ TABLET ≤ 1200px ════ */
        @media (max-width: 1200px) {
          .cf-wrapper  { width: 100%; }
          .cf-header   { width: 100%; }
          .cf-stepper  { width: 100%; }
          .cf-cards    { width: 100%; }
          .cf-card     { width: calc(33.333% - 16px); }
          .cf-card-text{ width: 100%; }
        }
 
        /* ════ MÓVIL ≤ 768px ════ */
        @media (max-width: 768px) {
          .cf-wrapper { padding: 64px 24px; }
 
          /* Stepper vertical */
          .cf-stepper {
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 0;
            margin-bottom: 0;
          }
          /* Ocultar SVG horizontal en móvil */
          .cf-line-svg { display: none; }
 
          /* Reposicionar círculos como bloque normal */
          .cf-circle {
            position: static;
            transform: none !important;
            margin-bottom: 12px;
          }
 
          /* Cards en columna con separador vertical */
          .cf-cards {
            flex-direction: column;
            gap: 0;
          }
          .cf-card {
            width: 100%;
            padding-bottom: 40px;
            /* Línea vertical izquierda */
            border-left: 2px solid #FFC107;
            padding-left: 20px;
            margin-left: 27px; /* alineado bajo el círculo */
          }
          .cf-card:last-child { border-left-color: transparent; }
          .cf-card-text { width: 100%; }
        }
 
        /* ════ MÓVIL PEQUEÑO ≤ 400px ════ */
        @media (max-width: 400px) {
          .cf-wrapper { padding: 48px 16px; }
        }
      `}</style>
 
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
 
        {/* ESPACIO */}
        <div style={{ height:'80px' }} />
 
        {/* STEPPER */}
        <div className="cf-stepper">
 
          {/*
            SVG de la línea spindle.
            viewBox = "0 0 1084 56" → mismas unidades que el contenedor base.
            preserveAspectRatio="none" → escala horizontalmente en pantallas pequeñas.
 
            Posiciones de los centros de los círculos dentro de 1084px:
              C1 = 28      (radio = 28)
              C2 = 542     (1084 / 2)
              C3 = 1056    (1084 - 28)
 
            La línea spindle:
              Start  = midpoint(C1,C2) = (28+542)/2  = 285
              End    = midpoint(C2,C3) = (542+1056)/2 = 799
              Center = C2 = 542
              centerY = 28 (mitad del viewBox)
              grosor máx ≈ 5px → curva ±2.5 sobre centerY
 
            Path (forma de lente/ojo):
              M 285,28          ← punta izquierda
              Q 542,25.5 799,28 ← arco superior (control en círculo 2)
              Q 542,30.5 285,28 ← arco inferior
              Z
          */}
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
 
          {/* CÍRCULO 1 */}
          <div ref={circleRefs[0]} className={`cf-circle c1${active[0] ? ' inverted' : ''}`}>
            1
          </div>
 
          {/* CÍRCULO 2 */}
          <div ref={circleRefs[1]} className={`cf-circle c2${active[1] ? ' inverted' : ''}`}>
            2
          </div>
 
          {/* CÍRCULO 3 */}
          <div ref={circleRefs[2]} className={`cf-circle c3${active[2] ? ' inverted' : ''}`}>
            3
          </div>
        </div>
 
        {/* CARDS */}
        <div className="cf-cards">
          {STEPS.map((step) => (
            <div key={step.title} className="cf-card">
              <h3 style={{ fontFamily:'Montserrat', fontWeight:600, fontSize:'16px', lineHeight:'20.8px', color:'#0F2D5C', marginBottom:'8px' }}>
                {step.title}
              </h3>
              <p className="cf-card-text" style={{ fontFamily:'Montserrat', fontWeight:400, fontSize:'13.12px', lineHeight:'21px', color:'#475569' }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}