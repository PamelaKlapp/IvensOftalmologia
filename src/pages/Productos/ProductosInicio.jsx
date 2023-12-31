import React from 'react';
import { productlinks } from '../../data';
import { Link } from 'react-router-dom';
import './Productos.css';

const ProductosInicio = () => {
  return (
    <div className="container prod-inicio-wrapper">
      <div className="prod-content">
        <h2>Productos</h2>
        <div className="categorias-prd-inicio">
          {productlinks.map(({ id, categoria, productos }) => {
            return (
              <ul className="prod-inicio-categorias">
                <h3 key={id}>{categoria}</h3>

                <li className="prod-inicio-links">
                  {productos?.map(({ slug, producto, path }) => {
                    return (
                      <Link key={slug} to={path}>
                        <h4>{producto}</h4>
                      </Link>
                    );
                  })}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductosInicio;
