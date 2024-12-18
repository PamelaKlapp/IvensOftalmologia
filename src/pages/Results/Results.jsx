import React, { useState } from 'react';
import Slider from 'react-slick';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSearchContext } from '../../components/SearchResults/SearchResults';
import './Results.css';

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

const Results = () => {
  const { searchResults } = useSearchContext();

  const resultsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Sin flechas para los resultados
  };

  const modalSliderSettings = {
    ...resultsSliderSettings,
    arrows: true, // Solo flechas en el modal
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
    <section className="result-wrapper container">
      <div className="result-content">
        <h2>Resultados de la búsqueda:</h2>
        <ul className="results-list">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div key={item.id} className="result-item">
                <div className="product-wrapper">
                  <div
                    className="product-img"
                    onClick={() => openModal(item.imagen)}
                  >
                    {Array.isArray(item.imagen) ? (
                      <Slider {...resultsSliderSettings}>
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
                      <img
                        src={item.imagen}
                        alt={item.modelo}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="product-info">
                    <div className="product-main-info">
                      <div className="modelo">{item.modelo}</div>
                      <div className="fabrica">{item.fabrica}</div>
                    </div>
                    <p
                      className="product-desc"
                      dangerouslySetInnerHTML={{
                        __html: item.descripcion,
                      }}
                    ></p>
                    <button className="btn">
                      <a
                        href={item.catalogo}
                        target="_blank"
                        rel="noreferrer"
                      >
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

      {/* Modal - Fuera del map */}
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
    </section>
  );
};

export default Results;
