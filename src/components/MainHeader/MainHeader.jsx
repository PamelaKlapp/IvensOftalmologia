import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './MainHeader.css';

const MainHeader = () => {
  const EVO = {
    small:
      'https://lh3.googleusercontent.com/d/1LFcg8k_6mXcsXhPNAdp9_bIu9YoHJy5V?w=300',
    medium:
      'https://lh3.googleusercontent.com/d/1LFcg8k_6mXcsXhPNAdp9_bIu9YoHJy5V?w=600',
    large:
      'https://lh3.googleusercontent.com/d/1LFcg8k_6mXcsXhPNAdp9_bIu9YoHJy5V?w=1200',
  };
  const LogoEVO = {
    small:
      'https://lh3.googleusercontent.com/d/1XeGNbOjIUmEE2mdvc1E5Xxti1xJzdGn2?w=300',
    medium:
      'https://lh3.googleusercontent.com/d/1XeGNbOjIUmEE2mdvc1E5Xxti1xJzdGn2?w=600',
    large:
      'https://lh3.googleusercontent.com/d/1XeGNbOjIUmEE2mdvc1E5Xxti1xJzdGn2?w=1200',
  };

  return (
    <header>
      <div className="container">
        <div className="header__container">
          <div className="header__left">
            <h2>
              Más de 3.000.000 de Lentes EVO ICL <br></br>
              <span>implantadas en el mundo.</span>
            </h2>
            <div className="evo__logo">
              <img
                src={EVO.large}
                srcSet={`${EVO.small} 300w, ${EVO.medium} 600w, ${EVO.large} 1200w`}
                sizes="(max-width: 600px) 300px, (max-width: 1024px) 600px, 1200px"
                alt="Lentes EVO ICL"
                loading="lazy"
              />
            </div>
            <div className="evo__logo2">
              <img
                src={LogoEVO.large}
                srcSet={`${LogoEVO.small} 300w, ${LogoEVO.medium} 600w, ${LogoEVO.large} 1200w`}
                sizes="(max-width: 600px) 300px, (max-width: 1024px) 600px, 1200px"
                alt="Lentes EVO ICL"
                loading="lazy"
              />
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

          <div className="header__right"></div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
