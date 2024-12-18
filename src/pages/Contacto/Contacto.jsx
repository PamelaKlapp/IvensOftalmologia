import React from 'react';
import FormContacto from '../../components/FormServTec/FormContacto';
import './Contacto.css';

const Test = () => {
  const ImgSobre =
    'https://lh3.googleusercontent.com/d/1jhCA5Gms3VDt4IVanBw_FvzcuR2QFVFn';
  const Facebook =
    'https://lh3.googleusercontent.com/d/1GOpgZKKKDJBbb2dM3FS1xrDxgIAGEWhH';
  const Instagram =
    'https://lh3.googleusercontent.com/d/1Ahh-B531zbW01fFjNWm1bL4iym8DpUuD';
  const Linkedin =
    'https://lh3.googleusercontent.com/d/18IXhqS1qMgyDxIWYTSXf5M3u38vCv1uI';

  return (
    <section className="container">
      
        <div className="header-informations contacto_bg">
          <div className='big-space'></div>
          <div className="content-information">
            <h2>Formulario de Contacto</h2>
            <p>
              En Ivens Oftalmología estamos aquí para asistirte en todo lo que
              necesites. Si tienes alguna consulta o solicitud, no dudes en
              escribirnos y te responderemos a la brevedad.
            </p>
          </div>
        </div>
      
      <div className="contacto-main">
          <div className="contenido-contacto-main">
            <div className="primera-columna-contenido">
              <div className="img-wrapper-column-contanto">
                <img src={ImgSobre} alt="imagen de sobre" loading="lazy" />
              </div>
              <div className="informacion-atencion">
                <h3>Horarios de Atención</h3>
                <p>Lunes a Jueves: 9:00 - 18:00 Hrs.</p>
                <p>Viernes: 9:00 - 17:00 Hrs.</p>
              </div>
              <div className="SocialMedia">
                <div>
                  <h3>Otros canales de contacto:</h3>
                </div>
                <div className="redes-sociales-contacto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/oftalmologiaivens/"
                  >
                    <img src={Instagram} alt="logo instagram" loading="lazy" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href=" https://www.facebook.com/ivensoftalmologia"
                  >
                    <img src={Facebook} alt="logo facebook" loading="lazy" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/ivensoftalmologiaspa/mycompany/?viewAsMember=true"
                  >
                    <img src={Linkedin} alt="logo linkedin" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
            <div className='segunda-columna-contenido'>
            <h2>¿Cómo podemos ayudarte?</h2>
            <FormContacto />
            </div>
          </div>
        </div>
      
    </section>


    
  );
};

export default Test;
