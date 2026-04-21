"use client";
 
const testimonios = [
  {
    tag: "Crédito hipotecario",
    color: "#FFC107",
    bgTag: "#FEF3C7",
    quote:
      '"Nunca pensé que podría comprar en Colombia desde el exterior. Con Colraices todo fue remoto, claro y rápido. Hoy tengo mi apartamento en Medellín."',
    name: "Laura P.",
    info: "Residente en Nueva York · Davivienda",
    initials: "LP",
  },
  {
    tag: "Crédito hipotecario",
    color: "#0F2D5C",
    bgTag: "rgba(15, 45, 92, 0.08)",
    quote:
      '"Me explicaron paso a paso qué necesitaba. El proceso fue 100% remoto. En 2 meses ya estaba firmando. Increíble."',
    name: "Juan M.",
    info: "Residente en Madrid · Davivienda",
    initials: "JM",
  },
  {
    tag: "Libre inversión",
    color: "#DC2626",
    bgTag: "#FEF2F2",
    quote:
      '"Tenía un apartamento en Bogotá y lo capitalicé para invertir en otro proyecto. El proceso fue claro y sin sorpresas."',
    name: "Carlos M.",
    info: "Residente en Miami · Banco Unión",
    initials: "CM",
  },
];
 
export default function HistoriasRealesSection() {
  return (
    <>
      <style>{`
        .hr-section {
          width: 100%;
          background-color: #FBF8F3;
          padding: 88px 48px 56px;
          box-sizing: border-box;
          font-family: 'Montserrat', system-ui, sans-serif;
        }
 
        .hr-inner {
          max-width: 1180px;
          margin: 0 auto;
        }
 
        /* ── HEADER ── */
        .hr-header {
          margin-bottom: 48px;
        }
 
        .hr-subtitle {
          display: block;
          font-style: italic;
          font-size: 20px;
          line-height: 30px;
          color: #0A0A0A;
        }
 
        .hr-title {
          display: block;
          font-weight: 600;
          font-size: 35.6px;
          line-height: 43px;
          color: #0F2D5C;
        }
 
        /* ── GRID (auto-fit: 3 cols → 2 cols → 1 col) ── */
        .hr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
 
        /* ── CARD: flexbox column, sin absolute para contenido ── */
        .hr-card {
          display: flex;
          flex-direction: column;
          background-color: #FBF8F3;
          border-radius: 16px 0 16px 0;
          border: 0.8px solid rgba(15, 45, 92, 0.1);
          overflow: hidden;
          box-sizing: border-box;
          transition: transform 300ms ease-out,
                      box-shadow 300ms ease-out,
                      border-color 300ms ease-out;
        }
 
        .hr-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(15, 45, 92, 0.12);
          border-color: rgba(26, 79, 158, 0.25);
        }
 
        /* ── TOP: watermark + badge + stars ── */
        .hr-card-top {
          position: relative;
          padding: 28px 28px 0;
        }
 
        .hr-watermark {
          position: absolute;
          top: 8px;
          left: 16px;
          font-size: 72px;
          line-height: 72px;
          font-weight: 700;
          font-style: italic;
          opacity: 0.12;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
 
        .hr-badge {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 100px;
          margin-bottom: 12px;
        }
 
        .hr-badge span {
          font-size: 10.4px;
          font-weight: 700;
          line-height: 15.6px;
          letter-spacing: 0.83px;
          text-transform: uppercase;
        }
 
        .hr-stars {
          position: relative;
          z-index: 1;
          display: block;
          font-size: 13.6px;
          line-height: 20px;
          letter-spacing: 2px;
          color: #FFC107;
        }
 
        /* ── QUOTE: flex: 1 para empujar el footer siempre al fondo ── */
        .hr-quote {
          flex: 1;
          padding: 16px 28px 24px;
          font-size: 14.4px;
          line-height: 25.2px;
          font-style: italic;
          color: #1E293B;
          margin: 0;
        }
 
        /* ── FOOTER ── */
        .hr-footer {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px 28px;
          border-top: 0.8px solid rgba(15, 45, 92, 0.1);
        }
 
        .hr-avatar {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 50%;
          background-color: #1A4F9E;
          display: flex;
          align-items: center;
          justify-content: center;
        }
 
        .hr-avatar span {
          font-size: 12px;
          font-weight: 600;
          color: #FFFFFF;
        }
 
        .hr-author-name {
          font-size: 14px;
          font-weight: 600;
          line-height: 21px;
          color: #0F2D5C;
          margin: 0;
        }
 
        .hr-author-info {
          font-size: 11.52px;
          line-height: 17.3px;
          color: #94A3B8;
          opacity: 0.7;
          margin: 0;
        }
 
        /* ════════════════════
           TABLET  768px – 1023px → 2 columnas
        ════════════════════ */
        @media (max-width: 1023px) {
          .hr-section {
            padding: 64px 32px 44px;
          }
          .hr-subtitle {
            font-size: 17px;
          }
          .hr-title {
            font-size: 28px;
            line-height: 36px;
          }
          .hr-header {
            margin-bottom: 36px;
          }
          .hr-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hr-quote {
            font-size: 13.5px;
            line-height: 23px;
          }
        }
 
        /* ════════════════════
           MOBILE  < 640px → 1 columna
        ════════════════════ */
        @media (max-width: 639px) {
          .hr-section {
            padding: 48px 20px 36px;
          }
          .hr-header {
            margin-bottom: 28px;
          }
          .hr-subtitle {
            font-size: 15px;
            line-height: 24px;
          }
          .hr-title {
            font-size: 22px;
            line-height: 30px;
          }
          .hr-grid {
            grid-template-columns: 1fr;
          }
          .hr-quote {
            font-size: 13.5px;
            line-height: 23px;
          }
        }
 
        /* ════════════════════
           SMALL MOBILE < 380px (iPhone SE)
        ════════════════════ */
        @media (max-width: 379px) {
          .hr-section {
            padding: 40px 16px 28px;
          }
          .hr-title {
            font-size: 19px;
            line-height: 27px;
          }
          .hr-card-top {
            padding: 24px 20px 0;
          }
          .hr-quote {
            font-size: 12.5px;
            line-height: 21px;
            padding: 14px 20px 20px;
          }
          .hr-footer {
            padding: 12px 20px;
          }
          .hr-badge span {
            font-size: 9px;
          }
        }
      `}</style>
 
      <section className="hr-section">
        <div className="hr-inner">
 
          {/* ── HEADER ── */}
          <div className="hr-header">
            <span className="hr-subtitle">Historias reales</span>
            <span className="hr-title">
              Colombianos que ya compraron desde el exterior.
            </span>
          </div>
 
          {/* ── CARDS ── */}
          <div className="hr-grid">
            {testimonios.map((item, i) => (
              <div key={i} className="hr-card">
 
                <div className="hr-card-top">
                  <span className="hr-watermark" style={{ color: item.color }}>
                    &ldquo;
                  </span>
                  <div className="hr-badge" style={{ backgroundColor: item.bgTag }}>
                    <span style={{ color: item.color }}>{item.tag}</span>
                  </div>
                  <span className="hr-stars">★★★★★</span>
                </div>
 
                <p className="hr-quote">{item.quote}</p>
 
                <div className="hr-footer">
                  <div className="hr-avatar">
                    <span>{item.initials}</span>
                  </div>
                  <div>
                    <p className="hr-author-name">{item.name}</p>
                    <p className="hr-author-info">{item.info}</p>
                  </div>
                </div>
 
              </div>
            ))}
          </div>
 
        </div>
      </section>
    </>
  );
}