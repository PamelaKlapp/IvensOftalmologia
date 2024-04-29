import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './MainHeader.css';

const MainHeader = () => {
  const EVO = 'https://lh3.googleusercontent.com/d/121JbVtXcgso0Yxj31sLgT_ZGjeEbrmwE'
  const Banner = 'https://lh3.googleusercontent.com/d/1mcqEfoje6ynMn613fUT9Zmu28yJB9sX9'
  const LogoEVO = 'https://lh3.googleusercontent.com/d/1XeGNbOjIUmEE2mdvc1E5Xxti1xJzdGn2'

  return (
    <header>
      <div className="container">
        <div className="header__container">
          <div className="header__left">
            <h2>
              Más de 3.000.000 de Lentes EVO ICL{' '}
              <span>implantadas en el mundo.</span>
            </h2>
            <div className="evo__logo">
              <img src={EVO} alt="Lentes EVO ICL" loading="lazy" />
            </div>
            <div className="evo__logo2">
              <img src={LogoEVO} alt="Lentes EVO ICL" loading="lazy" />
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
            <img src={Banner} alt="imagen de cara" loading="lazy"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
