import React from 'react';
import './Nosotros.css';

const Nosotros = () => {

  const compromiso = 'https://lh3.googleusercontent.com/d/1Mhzm69xPA7RWGRmXmHBz_nK_DjZLGAjm'
  const trayectoria = 'https://lh3.googleusercontent.com/d/1nYZOP_Ws6Xf74kPAz3ghBnutH1-jM_ll'
  const calidad = 'https://lh3.googleusercontent.com/d/14Dl_jT_0-_06OzpKUdNlWn027x-N4eST'

  return (
    <section className="container">
      <div className="header-nosotros">
        <div className="header-blur">
          <h2>Nuestra Historia</h2>
          <p>
            Ivens Oftalmología S.p.A. fue fundada en el año 2015 por nuestra
            Gerente General Ursula Ivens y nuestro Gerente Comercial César
            Irrazabal, con la convicción de generar una ventaja competitiva en
            el rubro oftalmológico nacional. Gracias a su vasta experiencia y
            conocimiento en esta área, los fundadores decidieron enfocarse en la
            comercialización de equipos oftalmológicos de última generación,
            representando marcas de reconocido prestigio a nivel mundial.
          </p>
          <br />
          <p>
            Desde el inicio de nuestra empresa hemos mantenido un compromiso
            constante con la calidad y el servicio al cliente. Cada uno de los
            miembros de nuestro equipo está altamente capacitado para brindar la
            mejor atención a nuestros clientes. Además, contamos con un Servicio
            Técnico especializado que brinda soporte en todo el país. Trabajamos
            incansablemente para superar las expectativas de nuestros clientes y
            para consolidarnos como líderes en el mercado oftalmológico
            nacional.
          </p>
        </div>
      </div>
      <div className="main-nosotros">
        <h2>¿Por qué elegirnos?</h2>
        <div className="caracteristicas-nosotros">
          <div className="caracteristica-nosotros">
            <img id="compromiso" src={compromiso} alt="saludo de manos" loading="lazy" />
            <h3>Compromiso</h3>
            <p>
              Ofrecemos soporte y soluciones durante la venta y post venta para
              mejorar la experiencia de nuestros clientes.
            </p>
          </div>
          <div className="linea-vertical-nosotros"></div>
          <div className="caracteristica-nosotros">
            <img src={trayectoria} alt="imagen de trayectoria" loading="lazy" />
            <h3 className="headline-small">Trayectoria y Experiencia</h3>
            <p>
              Más de 1.000 clientes nos prefieren. Entrenamos constantemente a
              nuestra fuerza de ventas en Fábrica para brindar un servicio
              integral en la capacitación de equipos.
            </p>
          </div>
          <div className="linea-vertical-nosotros"></div>
          <div className="caracteristica-nosotros">
            <img src={calidad} alt="medalla" loading="lazy" />
            <h3>Calidad</h3>
            <p>
              Proporcionamos equipos de alta gama, así como un Servicio Técnico
              calificado y certificado en nuestras fábricas representadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
