import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
  const [animacionActiva, setAnimacionActiva] = useState(false);

  const handleContactoClick = () => {
    setAnimacionActiva(!animacionActiva);
    // 3000 milisegundos (3 segundos) en este ejemplo
  };

  const CTAwhatsapp = "https://lh3.googleusercontent.com/d/1sa3CCQLZHAXsFiqgZQlf3BAw-6dP2pju"
  const CTAcorreo = "https://lh3.googleusercontent.com/d/1xjIiwX6T81mqvoSb9JG1uCO5Je43Nzzl"
  const CTAcontacto = "https://lh3.googleusercontent.com/d/1POJiKvNec6ZVHgYsD0ViitrzKOgSzWia"

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