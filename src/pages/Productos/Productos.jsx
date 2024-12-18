import React, { useState } from 'react';
import Slider from 'react-slick';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Productos.css';
import parse from 'html-react-parser';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-arrow-next" onClick={onClick}>
      <SlArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
};

const Productos = ({ data, title }) => {
  // Configuración del Slider para productos sin flechas
  const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Sin flechas para el producto
  };

  // Configuración del Slider para el modal con flechas
  const modalSliderSettings = {
    ...productSliderSettings,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openModal = (images) => {
    setSelectedImages(Array.isArray(images) ? images : [images]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

  return (
    <div className="container contenedor-grande">
      <div className="title-wrapper">
        <div className="space-title"></div>
        <h2 className="products-title">{title}</h2>
      </div>
      <div className="products-wrapper">
        {data.map(({ id, modelo, fabrica, descripcion, imagen, catalogo }) => (
          <div key={id} className="product-wrapper">
            <div className="product-img" onClick={() => openModal(imagen)}>
              {Array.isArray(imagen) ? (
                <Slider {...productSliderSettings}>
                  {imagen.map((img, index) => (
                    <img
                      key={`${id}-${index}`}
                      src={img}
                      alt={`${modelo} - ${index + 1}`}
                      loading="lazy"
                    />
                  ))}
                </Slider>
              ) : (
                <img src={imagen} alt={modelo} loading="lazy" />
              )}
            </div>
            <div className="product-info">
              <div className="product-main-info">
                <div className="modelo">{modelo}</div>
                <div className="fabrica">{fabrica}</div>
              </div>
              <div className="product-desc">{parse(descripcion)}</div>
              <a href={catalogo} target="_blank" rel="noreferrer">
                <button className="btn">Catálogo</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Slider {...modalSliderSettings}>
              {selectedImages.map((img, index) => (
                <div key={index} className="modal-slide">
                  <img src={img} alt={`Imagen ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;
