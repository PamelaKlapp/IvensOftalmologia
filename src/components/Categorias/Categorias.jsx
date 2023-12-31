import { Link } from 'react-router-dom';
import { categorias } from '../../data';
import './Categorias.css';

const Categorias = () => {
  return (
    <section className="container">
      <div className="categorias">
        <h2>Nuestras Categorías</h2>
        <ul className="categorias__links-container">
          {categorias.map(({ id, nombre, img, path }, index) => {
            const isOdd = index % 2 !== 0;
            const linkClassName = isOdd
              ? 'categoria__link even'
              : 'categoria__link';
            const iconClassName = isOdd
              ? 'categoria__link-icon even'
              : 'categoria__link-icon';

            return (
              <Link to={path} key={id}>
                <li className={linkClassName}>
                  <div className={iconClassName}>
                    <img className="categoria-icon" src={img} alt={nombre} />
                  </div>
                  <div className="categoria__link-text">
                    <h4>{nombre}</h4>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="linea"></div>
    </section>
  );
};

export default Categorias;
