import { useState, useEffect } from 'react';
import EvoLentes from '../../assets/LentesEvo/EVO ICL LOGO.png';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { lentesEvo } from '../../data';
import './LentesEVO.css';

const LentesEVO = () => {
  const [groupSize, setGroupSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const totalGroups = Math.ceil(lentesEvo.length / groupSize);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalGroups) % totalGroups);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalGroups);
  };

  const renderGroups = () => {
    const groups = [];
    for (let i = 0; i < lentesEvo.length; i += groupSize) {
      const group = lentesEvo.slice(i, i + groupSize);
      groups.push(
        <div key={i} className="group-lentesEVO">
          {group.map(({ id, name, img, descr }) => (
            <div className="item-lenteEVO" key={id}>
              <img src={img} alt={name} loading="lazy" />
              <h3>{name}</h3>
              <p>{descr}</p>
            </div>
          ))}
        </div>
      );
    }
    return groups;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setGroupSize(4);
      } else if (window.innerWidth <= 1024 && window.innerWidth > 600) {
        setGroupSize(2);
      } else {
        setGroupSize(1);
      }
    };

    window.addEventListener('resize', handleResize);
    // Limpia el listener en el desmontaje del componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="lentesEvo" className="container">
      <div className="container__main">
        <div className="left-side">
          <div className="img-lentesEvo">
            <img src={EvoLentes} alt="logo evolentes" loading="lazy" />
          </div>
          <iframe src="https://drive.google.com/file/d/1WLh3mZRRYXT5QFzzYcnKA4XqMkr6I5W-/preview" width="510" height="287" allow="autoplay"></iframe>
        </div>
        <div className="right-side">
          <h2>¿Qué son las Lentes EVO ICL?</h2>
          <br />
          <p>
            Las EVO ICL son lentes de Collamer® implantables que se colocan en
            la cámara posterior del ojo, detrás del iris, sin alterar la
            estructura ocular. Esta técnica se utiliza para corregir problemas
            de visión, como la miopía, la hipermetropía y el astigmatismo.
            <br />
            <br />
            Esta intervención es completamente reversible y ofrece múltiples
            beneficios a las personas que padecen estas afecciones visuales.
          </p>
          <br />
          <br />
          <button className="btn btn__lentes-evo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://la.discovericl.com/?_ga=2.184452577.692870880.1678817454-1731143526.1678817454"
            >
              Más Información
            </a>
          </button>
        </div>
      </div>
      <div className="linea-evo linea-horizontal"></div>

      <div className="container container-lentesEVO-mitad">
        <h2>Beneficios de las Lentes EVO ICL </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '1920px',
          }}
        >
          <button className="btn-arrows btn-prev" onClick={handlePrevPage}>
            <SlArrowLeft />
          </button>
          {renderGroups()[currentPage]}
          <button className="btn-arrows btn-next" onClick={handleNextPage}>
            <SlArrowRight />
          </button>
        </div>
      </div>
      <div className=" parte-gris">
        <div className="parte-gris-izquierda">
          <h2>El 99,4%</h2>
          <p>de los pacientes se volvería a operar</p>
        </div>
        <div className="linea-vertical"></div>

        <div className="parte-gris-derecha">
          <h2>+ 2.000.000</h2>
          <p>de procedimientos realizados en el mundo</p>
        </div>
      </div>
      <div className="last-wrapper">
        <h2>Encuentra a tu médico</h2>
        <p>
          ¿Deseas hablar con un médico certificado en EVO ICL?
          <br />
          Encuentra un profesional cercano que pueda atender tus inquietudes y
          responder a tus preguntas.
        </p>

        <button className="btn btn-busca">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://la.doctors.discovericl.com/"
          >
            Busca a tu médico
          </a>
        </button>

        <form
        target="_blank"
        rel="noopener noreferrer"
          className="btn-webpay"
          name="rec20108_btn1"
          method="post"
          action="https://www.webpay.cl/backpub/external/form-pay"
        >
          <input type="hidden" name="idFormulario" value="27436" />
          <input type="hidden" name="monto" value="10" />
          <input
            type="image"
            alt="webpay"
            title="Imagen"
            name="button1"
            src="https://www.webpay.cl/assets/img/boton_webpaycl.svg"
            value="Boton 1"
          />
        </form>
      </div>
    </section>
  );
};

export default LentesEVO;
