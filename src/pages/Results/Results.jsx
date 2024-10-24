import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSearchContext } from '../../components/SearchResults/SearchResults';
import './Results.css';

const Results = () => {
  const { searchResults } = useSearchContext();

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
    <section className="result-wrapper container">
      <div className="result-content">
        <h2>Resultados de la búsqueda:</h2>
        <ul className="results-list">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div key={item.id} className="result-item">
                <div className="product-wrapper">
                  <div className="product-img" onClick={() => openModal(item.imagen)}>
                    {Array.isArray(item.imagen) ? (
                      <Slider {...settings}>
                        {item.imagen.map((img, index) => (
                          <img
                            key={`${item.id}-${index}`}
                            src={img}
                            alt={`${item.modelo} - ${index + 1}`}
                            loading="lazy"
                          />
                        ))}
                      </Slider>
                    ) : (
                      // Si 'imagen' no es un array, renderizar una sola imagen
                      <img src={item.imagen} alt={item.modelo} loading="lazy" />
                    )}
                  </div>
                  <div className="product-info">
                    <div className="product-main-info">
                      <div className="modelo">{item.modelo}</div>
                      <div className="fabrica">{item.fabrica}</div>
                    </div>
                    <p className="product-desc">{item.descripcion}</p>
                    <button className="btn">
                      <a href={item.catalogo} target="_blank" rel="noreferrer">
                        Catálogo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No se encontraron resultados</p>
          )}
        </ul>
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
    </section>
  );
};

export default Results;
