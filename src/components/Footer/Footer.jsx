import React from 'react';
import { Link } from 'react-router-dom';
import Instagram from '../../assets/Footer/Instagram.png';
import Linkedin from '../../assets/Footer/Linkedin.png';
import Facebook from '../../assets/Footer/Facebook.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="info__empresa">
          <h3>Empresa</h3>
          <Link to="/nosotros">
            <h4>Sobre Nosotros</h4>
          </Link>
          <br />
        </div>

        <div className="servicio__cliente">
          <h3>Servicio al Cliente</h3>
          <h4>Mesa Central: 2-32759700</h4>
          <h4>Ventas: 9-82594143</h4>
          <h4>Lentes EVO ICL: 9-945591147</h4>
          <br />
          <Link to="/contacto">
            <h3>¡Escríbenos Aquí!</h3>
          </Link>
        </div>

        <div className="oficina_info">
          <h3>Oficina</h3>
          <h4>
            Dirección: Isabel La Católica 4394 Of.501, Las Condes, Santiago,
            Chile
          </h4>
          <br />
          <h3>Horario de Atención:</h3>
          <h4>Lunes a Jueves de 09:00 a 18:00 hrs.</h4>
          <h4>Viernes de 09:00 a 17:00 hrs.</h4>
        </div>

        <div className="social__media">
          <h3 className="pais">¡Síguenos!</h3>
          <ul>
            <li id="instagram" className="cta">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/oftalmologiaivens/"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li id="facebook" className="cta">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=" https://www.facebook.com/ivensoftalmologia"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li id="linkedin" className="cta">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/ivensoftalmologiaspa/mycompany/?viewAsMember=true"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </li>
          </ul>
          <h4 className="pais">País | Chile</h4>
        </div>
      </div>
      <div>
        <p className="copyRight">
          &copy; 2023 Ivens Oftalmología SpA | Diseño y desarrollo por Pamela
          Klapp.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
