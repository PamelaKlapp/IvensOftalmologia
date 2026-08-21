import React, { useState } from 'react';
// import { RiArrowDropRightLine } from 'react-icons/ri';
import video  from '../MainHeader/Pentacam_Cornea_OCT_Video.mp4'
import './MainHeader.css';

const MainHeader = () => {
  // const Oculus =
  // '/assets/img/header/Logo Oculus horizontal (negro).png';
  const ARClaser =
  '/assets/img/MarcasRep/4. ARC LASER.png';

  // const Pentacam_Product =
  // '/assets/img/header/Imagen_Pentacam_Cornea_OCT.png';

  const Laser_FOX =
  '/assets/img/header/FOX III 810.png';

  // const plus =
  // '/assets/img/header/Signo Más.png';
 
    const [isModalOpen, setIsModalOpen] = useState(false);
  

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

      {/* Video en modal */}
      {isModalOpen && (
        <div className="video-modal" onClick={() => setIsModalOpen(false)}>
          <div className="video-container_header" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>X</button>
            <video controls autoPlay>
              <source src={video} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
