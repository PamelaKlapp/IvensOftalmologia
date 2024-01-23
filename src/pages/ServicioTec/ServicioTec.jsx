import React from 'react';
import CHAT from '../../assets/ServTec/charla.png';
import Whatsapp from '../../assets/ServTec/Icono WhatsApp (Página Servicio Técnico).png';
import TeamViewer from '../../assets/ServTec/teamviewer.png';
import FormServTec from '../../components/FormServTec/FormServTec';
import './ServicioTec.css';

const ServicioTec = () => {
  return (
    <section className="container">
      <div className="serTec__container">
        <div className="header-servicioTec">
          <div className="bg-texto">
            <h2>Servicio Técnico para nuestras Marcas Representadas</h2>
            <p>
              Ofrecemos un Servicio Técnico altamente especializado y capacitado
              en Fábrica para equipos oftalmológicos de nuestras marcas
              representadas a nivel nacional. Nuestros servicios incluyen
              mantención, reparación y suministro de repuestos originales para
              garantizar el correcto funcionamiento de los equipos y prolongar
              su vida útil.
            </p>
          </div>
        </div>

        <div className="container serv-main-wrapper">
          <h2>Formulario de Contacto</h2>
          <div className="serv__main">
            <div className="serv__contacto">
              <div className="serv__contacto-icono">
                <img src={CHAT} alt="imagen de chat" loading="lazy" />
              </div>
              <div className="serv__contacto-what">
                <h3>Contacto:</h3>
                <div className="serv__contacto-what--info">
                  <img src={Whatsapp} alt="logo whatsapp" loading="lazy" />
                  <span>+569 47848791</span>
                </div>
              </div>
              <div className="serv__contacto-horario">
                <h3>Horarios de Atención: </h3>
                <p>Lunes a Jueves: 9:00 – 18:00 Hrs.</p>
                <p>Viernes 9:00 – 17:00 Hrs.</p>
              </div>
            </div>

            <FormServTec />
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
      </div>
    </section>
  );
};

export default ServicioTec;
