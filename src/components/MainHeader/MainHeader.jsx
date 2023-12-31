import React from 'react';
import { Link } from 'react-router-dom';
import EVO from '../../assets/Banner/Evo.png';
import Banner from '../../assets/Banner/Banner.png';
import LogoEVO from '../../assets/LentesEvo/EVO ICL LOGO.png';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="header__container">
          <div className="header__left">
            <h2>
              Más de 2.000.000 de Lentes EVO ICL{' '}
              <span>implantadas en el mundo.</span>
            </h2>
            <div className="evo__logo">
              <img src={EVO} alt="Lentes EVO ICL" />
            </div>
            <div className="evo__logo2">
              <img src={LogoEVO} alt="Lentes EVO ICL" />
            </div>

            <button className="mainheader__btn btn">
              <Link to="/lentes-evo-icl">
                Más Información
                <span className="arrow">
                  <RiArrowDropRightLine />
                </span>
              </Link>
            </button>
          </div>

          <div className="header__right">
            <img src={Banner} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
