import { useState, useEffect } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { marcasRep, marcasRepMedium, marcasRepSmall } from '../../data';
import './MarcasRep.css';

const MarcasRep = () => {
  const [index, setIndex] = useState(0);
  const screenSize = useScreenSize();
  const { id, name, img } = getMarcasData(screenSize)[index];

  const prevMarcas = () => {
    setIndex(
      (prev) =>
        (prev - 1 + getMarcasData(screenSize).length) %
        getMarcasData(screenSize).length
    );
  };

  const nextMarcas = () => {
    setIndex((prev) => (prev + 1) % getMarcasData(screenSize).length);
  };

  return (
    <section id="marcas_rep" className="container">
      <h2>Nuestras Marcas Representadas</h2>
      <p>
        En Chile, nuestra empresa representa marcas reconocidas a nivel mundial,
        teniendo los mejores resultados clínicos del área y la mayor trayectoria
        en el campo de la oftalmología.
      </p>
      <div className="marcas-container">
        <div className="arrow-btns">
          <button
            className="btn-marcas-arrows btn-prev-marcas"
            onClick={prevMarcas}
          >
            <SlArrowLeft />
          </button>
          <button
            className="btn-marcas-arrows btn-next-marcas"
            onClick={nextMarcas}
          >
            <SlArrowRight />
          </button>
        </div>
        <div className="main__rep-container">
          <img src={img} alt={`${id} ${name}`} />
        </div>
      </div>
    </section>
  );
};

export default MarcasRep;

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

const getScreenSize = () => {
  const width = window.innerWidth;
  if (width < 600) {
    return 'small';
  } else if (width < 1024) {
    return 'medium';
  } else {
    return 'large';
  }
};

const getMarcasData = (screenSize) => {
  switch (screenSize) {
    case 'small':
      return marcasRepSmall;
    case 'medium':
      return marcasRepMedium;
    default:
      return marcasRep;
  }
};
