import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './Categorias.css';

const Categorias = ({ img, title, data, customStyle }) => {
  return (
    <div className="container categoriasLista-wrapper">
      <h2 >{title}</h2>
      <div className="categoriaLista-contenido">
        <div className={`categoriaLista-img ${customStyle}`}>
          <img src={img} alt={title} loading="lazy" />
        </div>
        <div className="categoriaLista-links">
          {data.productos.map(({ slug, producto, path }) => (
            <Link key={slug} to={path}>
              <p className="productoLista">{producto}</p>
            </Link>
          ))}
          <button className="btn btn_lista-productos">
              <Link to="/">
                Volver
                <span className="arrow">
                  <RiArrowDropRightLine />
                </span>
              </Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
