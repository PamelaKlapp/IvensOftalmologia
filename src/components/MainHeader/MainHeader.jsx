

import './MainHeader.css';

const MainHeader = () => {
 
  const ARClaser =
  '/assets/img/MarcasRep/4. ARC LASER.png';


  const Laser_FOX =
  '/assets/img/header/FOX III 810.png';


  

  return (
    <header>
      <div className="container">
        <div className="header__container">
          <div className="header__left">
            <div className="row_header_left">
              <div className="imagen_pentacam">
                <img src={Laser_FOX} alt="Logo Oculus" loading="lazy" />
              </div>
              <div className="texto_pentacam">
                <div className="oculus_logo">
                  <img src={ARClaser} alt="Logo Oculus" loading="lazy" />
                </div>
                <div className="imagen_pentacam_mobil">
                <img src={Laser_FOX} alt="Logo Oculus" loading="lazy" />
              </div>
                <h1>Láser FOX III 810nm</h1>
                <div className="plus_img">
  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="0" x2="15" y2="30" stroke="#fcae00" strokeWidth="4"/>
    <line x1="0" y1="15" x2="30" y2="15" stroke="#fcae00" strokeWidth="4"/>
  </svg>
</div>
                <h1>
                  6 Sondas para Glaucoma
                </h1>
                
                <div className='cta_header'>$5.500.000 + IVA</div>
                <p className="promo-availability">
                  Pago hasta en 10 cuotas
                </p>
                
              </div>
            </div>
          </div>

          <div className="header__right"></div>
        </div>
      </div>

      
    </header>
  );
};

export default MainHeader;
