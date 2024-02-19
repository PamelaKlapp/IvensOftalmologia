import React, { useState } from 'react';
import CTAwhatsapp from '../../assets/CTA/Globos WhatsApp.png';
import CTAcorreo from '../../assets/CTA/Globo Correo.png';
import CTAcontacto from '../../assets/CTA/Globos_Contactenos_Morado.png';
import './CTA.css';

const CTA = () => {
  const [animacionActiva, setAnimacionActiva] = useState(false);

  const handleContactoClick = () => {
    setAnimacionActiva(!animacionActiva);
    // 3000 milisegundos (3 segundos) en este ejemplo
  };

  return (
    <div className="container">
      <div className="contenedores-cta">
        <a
          href="https://wa.me/56968446352"
          target="_blank"
          rel="noreferrer"
          className={`btn-whatsapp cta-texto ${
            animacionActiva ? 'animacion-whatsapp' : ''
          }`}
        >
          <p>WhatsApp</p>
          <img src={CTAwhatsapp} alt="botón de whatsapp" loading="lazy" />
        </a>

        <a
          href="mailto:cesar@ivensoftalmo.cl"
          className={`btn-correo cta-texto ${
            animacionActiva ? 'animacion-correo' : ''
          }`}
        >
          <p>Correo Electrónico</p>
          <img src={CTAcorreo} alt="botón de correo electrónico" loading="lazy" />
        </a>
        <div className="btn-contacto cta-texto">
          <p className="animacion-txt-contacto">Contáctenos</p>
          <img
            onClick={handleContactoClick}
            className="animacion-contacto"
            src={CTAcontacto}
            alt="botón de contacto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;