"use client";

import React, { useState } from "react";

export default function HeroInmuebles() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="hero">
      
      {/* CAPA ANIMADA */}
      <div className="hero-overlay" />

      <div className="container">
        <div className="content">

          <div className="title">
            <h1 className="fade-up delay-1">Tu inversión en Colombia,</h1>

            <h2 className="fade-up delay-2">acompañada en cada paso</h2>

            <div className="underline fade-up delay-3" />
          </div>

          <p className="subtitle fade-up delay-4">
            Desde que decides invertir en propiedad raíz hasta que la llave está en tu mano,
            <br />
            <span>Colraices está contigo.</span> Sin importar en qué punto del proceso estés.
          </p>

          <div className="card fade-up delay-5">

            <p className="tag">CUÉNTANOS TU SITUACIÓN</p>

            <h3>¿Ya tienes un inmueble identificado o todavía estás buscando?</h3>

            <div className="options">

              <button
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(null)}
                className={`option left ${hovered === 1 ? "active" : ""}`}
              >
                <span className="icon">🔎</span>

                <div className="text">
                  <span className="title-op">Llave inmobiliaria</span>
                  <span className="desc">
                    Busco invertir en Colombia con asesoría para elegir y evaluar inmuebles.
                  </span>
                </div>

                <span className="arrow">→</span>
              </button>

              <button
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(null)}
                className={`option right ${hovered === 2 ? "active" : ""}`}
              >
                <span className="icon">🏠</span>

                <div className="text">
                  <span className="title-op">Brújula inmobiliaria</span>
                  <span className="desc">
                    Ya tengo opciones y necesito respaldo legal, negociación y cierre seguro.
                  </span>
                </div>

                <span className="arrow">→</span>
              </button>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 815.06px;
          background: #091d3e;
          position: relative;
          overflow: hidden;
        }

        /* GRID */
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* GLOW */
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 25% 20%, rgba(26, 79, 158, 0.22), transparent 70%),
            radial-gradient(circle at 75% 30%, rgba(201, 144, 12, 0.16), transparent 70%);
        }

        /* OVERLAY ANIMADO */
        .hero-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background: linear-gradient(180deg, rgba(26, 79, 158, 0.12) 0%, rgba(0, 0, 0, 0) 100%),
            linear-gradient(0deg, rgba(26, 79, 158, 0.12) 0%, rgba(0, 0, 0, 0) 100%);

          animation: glowMove 6s ease-in-out infinite;
        }

        @keyframes glowMove {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding-top: 120px;
        }

        .content {
          width: min(1000px, 100%);
          margin: 0 auto;
          text-align: center;
        }

        h1 {
          font-size: 59.76px;
          line-height: 65.7px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        h2 {
          font-size: 59.76px;
          line-height: 65.7px;
          font-weight: 700;
          font-style: italic;
          color: #f0b429;
          margin: 0;
        }

        .underline {
          width: 60px;
          height: 3px;
          background: #f0b429;
          margin: 16px auto 0;
        }

        .subtitle {
          width: min(814px, 100%);
          margin: 80px auto 0;
          font-size: 20px;
          line-height: 30px;
          color: rgba(255, 255, 255, 0.68);
        }

        .subtitle span {
          color: #ffffff;
          font-weight: 600;
        }

        .card {
          margin-top: 48px;
          width: min(720px, 100%);
          margin-inline: auto;
          padding: 36.8px 40.8px;
          border-radius: 32px;
          border: 0.8px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
        }

        .tag {
          font-size: 11.52px;
          letter-spacing: 1.61px;
          color: rgba(255, 255, 255, 0.4);
        }

        h3 {
          margin-top: 12px;
          font-size: 23.2px;
          line-height: 30.2px;
          font-weight: 600;
          color: white;
        }

        .options {
          margin-top: 28px;
          display: flex;
          gap: 16px;
        }

        .option {
          width: 311.2px;
          height: 129.4px;
          padding: 27.2px 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.35s ease;
          cursor: pointer;
        }

        .option.left {
          border-radius: 16px 0px 16px 0px;
        }

        .option.right {
          border-radius: 0px 16px 0px 16px;
        }

        .option.left.active,
        .option.left:hover {
          border: 1px solid #f0b429;
          background: linear-gradient(120deg, rgba(240, 180, 41, 0.18), rgba(255, 255, 255, 0.05));
          box-shadow: 0 10px 30px rgba(240, 180, 41, 0.12);
          transform: translateY(-4px);
        }

        .option.right.active,
        .option.right:hover {
          border: 1px solid #2f6fed;
          background: linear-gradient(120deg, rgba(47, 111, 237, 0.18), rgba(255, 255, 255, 0.05));
          box-shadow: 0 10px 30px rgba(47, 111, 237, 0.12);
          transform: translateY(-4px);
        }


        .option:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .icon {
          font-size: 25.6px;
          line-height: 38.4px;
          margin-top: 18px;
        }

        .text {
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: min(195.4px, 100%);
        }

        .title-op {
          font-size: 14.4px;
          line-height: 21.6px;
          font-weight: 600;
          color: #ffffff;
        }

        .desc {
          font-size: 12px;
          line-height: 16.8px;
          color: rgba(255, 255, 255, 0.5);
        }

        .arrow {
          margin-left: auto;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s;
          color: #f0b429;
        }

        .option.active .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s forwards;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }
        .delay-2 {
          animation-delay: 0.4s;
        }
        .delay-3 {
          animation-delay: 0.6s;
        }
        .delay-4 {
          animation-delay: 0.8s;
        }
        .delay-5 {
          animation-delay: 1s;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1199px) {
          h1,
          h2 {
            font-size: 48px;
            line-height: 1.12;
          }

          .subtitle {
            margin-top: 56px;
            font-size: 18px;
            line-height: 1.5;
          }
        }

        @media (max-width: 991px) {
          .hero {
            min-height: auto;
            padding-bottom: 96px;
          }

          .container {
            padding-top: 88px;
          }

          h1,
          h2 {
            font-size: 40px;
          }

          .card {
            padding: 28px 24px;
            border-radius: 24px;
          }

          .options {
            flex-direction: column;
          }

          .option {
            width: 100%;
            height: auto;
            min-height: 116px;
          }

          .text {
            width: 100%;
          }
        }

        @media (max-width: 767px) {
          .container {
            width: min(1180px, calc(100% - 28px));
            padding-top: 72px;
          }

          h1,
          h2 {
            font-size: 32px;
            line-height: 1.15;
          }

          .underline {
            margin-top: 14px;
          }

          .subtitle {
            margin-top: 36px;
            font-size: 16px;
            line-height: 1.5;
          }

          .subtitle br {
            display: none;
          }

          .card {
            margin-top: 32px;
            padding: 22px 16px;
            border-radius: 20px;
          }

          h3 {
            font-size: 20px;
            line-height: 1.35;
          }

          .option {
            padding: 18px 14px;
            gap: 10px;
          }

          .icon {
            font-size: 22px;
            line-height: 1;
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}