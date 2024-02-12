import React from 'react';
import { Link } from 'react-router-dom';
import './Categorias.css';

const Categorias = ({ img, title, data, customStyle }) => {
  return (
    <div className="container categoriasLista-wrapper">
      <h2>{title}</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Categorias;
