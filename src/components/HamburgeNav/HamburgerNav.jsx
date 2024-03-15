import React from 'react';
import { NavLink } from 'react-router-dom';
import './HamburgerNav.css';

const HamburgerNav = ({ handleClose, isVisible }) => {
  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <div className={`hamb-menu-container${isVisible ? ' visible' : ''}`}>
      <ul className='hamb-menu-content'>
        <li>
          <NavLink to='/' onClick={handleLinkClick}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to='/productos' onClick={handleLinkClick}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to='/lentes-evo-icl' onClick={handleLinkClick}>
            Lentes EVO ICL
          </NavLink>
        </li>
        <li>
          <NavLink to='/servicio-tecnico' onClick={handleLinkClick}>
            Servicio Técnico
          </NavLink>
        </li>
        <li>
          <NavLink to='/contacto' onClick={handleLinkClick}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerNav;
