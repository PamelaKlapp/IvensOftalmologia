import React from 'react';
import ImgSobre from '../../assets/Contacto/Icono Correo.png';
import Facebook from '../../assets/Contacto/Facebook Gris.png';
import Instagram from '../../assets/Contacto/Instagram Gris.png';
import Linkedin from '../../assets/Contacto/Linkedin Gris.png';
import './Contacto.css';
import FormContacto from '../../components/FormServTec/FormContacto';

const Contacto = () => {
  return (
    <div className="container">
      <div className="header-container">
        <div className="bg-texto">
          <h2>Formulario de Contacto</h2>
          <p>
            En Ivens Oftalmología SpA estamos aquí para asistirte en todo lo que
            necesites. Por favor, proporciona tus datos para cualquier consulta
            o solicitud, y nos pondremos en contacto contigo lo más pronto
            posible.
          </p>
        </div>
      </div>

      <div className="contacto-main">
        <h2>¿Cómo podemos ayudarte?</h2>
        <div className="contenido-contacto-main">
          <div className="primera-columna-contenido">
            <div className="img-wrapper-column-contanto">
              <img src={ImgSobre} alt="" />
            </div>
            <div className="informacion-atencion">
              <h3>Horarios de Atención</h3>
              <p>Lunes a Jueves: 9:00 - 18:00 Hrs.</p>
              <p>Viernes: 9:00 - 17:00 Hrs.</p>
            </div>
            <div className="SocialMedia">
              <div>
                <h3>Síguenos</h3>
              </div>
              <div className="redes-sociales-contacto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/oftalmologiaivens/"
                >
                  <img src={Instagram} alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=" https://www.facebook.com/ivensoftalmologia"
                >
                  <img src={Facebook} alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/ivensoftalmologiaspa/mycompany/?viewAsMember=true"
                >
                  <img src={Linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
          <FormContacto />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
