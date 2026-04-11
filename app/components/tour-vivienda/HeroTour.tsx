'use client';

import React from 'react';

const HeroTour: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FBF8F3',
        padding: '120px 24px 100px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* SUBTÍTULO */}
        <p
          style={{
            margin: 0,
            marginBottom: '16px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#FFC107',
          }}
        >
          TOUR DE LA VIVIENDA
        </p>

        {/* TÍTULO */}
        <h1
          style={{
            margin: 0,
            marginBottom: '24px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: '1.2',
            color: '#0F2D5C',
          }}
        >
          Empieza donde tú estás
        </h1>

        {/* DESCRIPCIÓN */}
        <p
          style={{
            margin: 0,
            fontFamily: 'Montserrat, system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '28px',
            color: 'rgb(71, 85, 105)',
            maxWidth: '620px',
            marginInline: 'auto',
          }}
        >
          Un espacio diseñado para acompañarte en cada etapa del proceso de compra de vivienda.
          Aprende, decide y avanza con confianza.
        </p>
      </div>
    </section>
  );
};

export default HeroTour;