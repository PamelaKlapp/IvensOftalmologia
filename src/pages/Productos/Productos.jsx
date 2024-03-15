import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Productos.css';

const Productos = ({ data, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="container contenedor-grande">
      <div className="title-wrapper">
        <div className="space-title"></div>
        <h2 className="products-title">{title}</h2>
      </div>
      <div className="products-wrapper">
        {data.map(({ id, modelo, fabrica, descripcion, imagen, catalogo }) => {
          return (
            <div key={id} className="product-wrapper">
              <div className="product-img">
                {Array.isArray(imagen) ? (
                  <Slider {...settings}>
                    {imagen.map((img, index) => (
                      <img
                        key={`${id}-${index}`}
                        src={img}
                        alt={`${modelo} - ${index + 1}`}loading="lazy"
                      />
                    ))}
                  </Slider>
                ) : (
                  // Si 'imagen' no es un array, renderizar una sola imagen
                  <img src={imagen} alt={modelo} loading="lazy" />
                )}
              </div>
              <div className="product-info">
                <div className="product-main-info">
                  <div className="modelo">{modelo}</div>
                  <div className="fabrica">{fabrica}</div>
                </div>
                <p className="product-desc">{descripcion}</p>
                <button className="btn">
                  <a href={catalogo} target="_blank" rel="noreferrer">
                    Catálogo
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
