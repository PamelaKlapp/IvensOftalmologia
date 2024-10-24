import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Productos.css';
import { useState } from 'react';


const Productos = ({ data, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImages] = useState([]);
  const modalSliderSettings = {
    ...settings, // reutilizas o sobrescribes los settings existentes
    // Cualquier configuración específica para el modal aquí
  };

  const openModal = (images) => {
    setSelectedImages(Array.isArray(images) ? images : [images]);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
              <div className="product-img" onClick={() => openModal(imagen)}>
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
              {isModalOpen && (
  <div className="modal" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <Slider {...modalSliderSettings}>
        {selectedImage.map((img, index) => (
          <div key={index} className="modal-slide">
            <img src={img} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  </div>
)}
              <div className="product-info">
                <div className="product-main-info">
                  <div className="modelo">{modelo}</div>
                  <div className="fabrica">{fabrica}</div>
                </div>
                <p className="product-desc" dangerouslySetInnerHTML={{ __html: descripcion }}></p>
                  <a href={catalogo} target="_blank" rel="noreferrer">
                <button className="btn ">
                    Catálogo
                </button>
                  </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
