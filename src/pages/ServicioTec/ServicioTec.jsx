import React from 'react';
import FormServTec from '../../components/FormServTec/FormServTec';
import './ServicioTec.css';

const ServicioTec = () => {
  const CHAT =
    'https://lh3.googleusercontent.com/d/1jKHN6-N-hmbqu6sv3cdvlLotY-tVyTLL';
  const Whatsapp =
    'https://lh3.googleusercontent.com/d/1x5XxZ_xqyoQJndX4D1ZYuidEu9dqIHC8';
  const TeamViewer =
    'https://lh3.googleusercontent.com/d/1YLVHq9CHfwrbv4B9JYN41Pil2zQU-X74';

  return (
    <section className="container">
      
        <div className="header-informations serv_bg">
          <div className="big-space"></div>
          <div className="content-information">
            <h2>
              Servicio Técnico para nuestras <span>Marcas Representadas</span>
            </h2>
            <p>
              Ofrecemos un Servicio Técnico altamente especializado y capacitado
              en Fábrica para equipos oftalmológicos de nuestras marcas
              representadas a nivel nacional.
            </p>
          </div>
        </div>

        <div className="container serv-main-wrapper">
          <div className="serv__main row-1">
            <div></div>
            <div className="ser-form-title">
              <img src={CHAT} alt="ICONO" />
              <h2>Formulario de Contacto</h2>
            </div>
          </div>
          <div className="serv__main">
            <div className="serv__contacto">
              <div className="serv__ntrs-serv">
                <h3>Nuestros Servicios:</h3>
                <ul>
                  <li>• Mantención</li>
                  <li>• Reparación</li>
                  <li>• Repuestos</li>
                </ul>
              </div>
              <div className="serv__contacto-what">
                <h3>Contacto:</h3>
                <a
                  href="https://wa.me/56947848791"
                  target="_blank"
                  rel="noreferrer"
                  className="serv__contacto-what--info"
                >
                  <img src={Whatsapp} alt="logo whatsapp" loading="lazy" />
                  <span>+569 47848791</span>
                </a>
              </div>
              <div className="serv__contacto-horario">
                <h3>Horarios: </h3>
                <p>Lunes a Jueves: 9:00 – 18:00 Hrs.</p>
                <p>Viernes 9:00 – 17:00 Hrs.</p>
              </div>
            </div>
            <div className="ser_form">
              <FormServTec />
            </div>
          </div>
        </div>
        <section className="serv__teamViewer">
          <div className="ser__teamViewer-icon">
            <img src={TeamViewer} alt="logo teamviewer" loading="lazy" />
          </div>
          <p className="teamViewer">
            Descarga Team Viewer
            <a href="https://download.teamviewer.com/download/version_13x/TeamViewerQS.exe">
              {' '}
              aquí{' '}
            </a>
            para establecer una conexión remota
          </p>
        </section>
      
    </section>
  );
};

export default ServicioTec;
