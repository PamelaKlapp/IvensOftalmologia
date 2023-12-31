import React from 'react';
import './Categorias.css';

const Categorias = ({ img, title, data, customStyle }) => {
  return (
    <div className="container categoriasLista-wrapper">
      <h2>{title}</h2>
      <div className="categoriaLista-contenido">
        <div className={`categoriaLista-img ${customStyle}`}>
          <img src={img} alt="" />
        </div>
        <div className="categoriaLista-links">
          {data.productos.map(({ slug, producto, path }) => (
            <a key={slug} href={path}>
              <p className="productoLista">{producto}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorias;
