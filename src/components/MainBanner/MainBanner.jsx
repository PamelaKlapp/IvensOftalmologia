import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { bannerMainHeader } from '../../data';
import './MainBanner.css';

const DisplayBanners = () => {
  const [responsiveImages, setResponsiveImages] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 600) {
        setResponsiveImages(
          bannerMainHeader.map((item) => ({ ...item, img: item.imgSmall }))
        );
      } else if (windowWidth <= 1024) {
        setResponsiveImages(
          bannerMainHeader.map((item) => ({ ...item, img: item.imgMedium }))
        );
      } else {
        setResponsiveImages(bannerMainHeader);
      }
    };

    // Agregar el event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamada inicial para establecer las imágenes basadas en el tamaño de la pantalla actual
    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El segundo parámetro asegura que este efecto se ejecute solo una vez al montar el componente

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    appendDots: (dots) => <ul className="custom-dots">{dots}</ul>,
  };

  return (
    <section className="container">
      <div className="main__banner">
        <Slider {...settings}>
          {responsiveImages.map(({ id, name, img, path }) => (
            <div
              className="main__banner-div"
              key={id}
              onClick={() => (window.location.href = path)}
            >
              <img className="img-banner" src={img} alt={name} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DisplayBanners;
