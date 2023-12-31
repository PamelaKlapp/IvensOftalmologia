import React from 'react';
import { Link } from 'react-router-dom';
import { productlinks } from '../../data';
import './MenuNav.css';

const MenuNav = () => {
  return (
    <div className="nav__menu active">
      <div className="container nav__menu-container">
        {productlinks.map(({ id, categoria, productos }) => {
          return (
            <ul className="nav__menu-content">
              <h3 key={id}>{categoria}</h3>

              <li className="nav__menu-productos">
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
  );
};

export default MenuNav;
