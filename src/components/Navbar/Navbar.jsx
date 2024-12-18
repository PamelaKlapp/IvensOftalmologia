import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navlinks } from '../../data';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import SearchBar from '../SearchBar/SearchBar';
import MenuNav from '../MenuNav/MenuNav';
import HamburgerNav from '../HamburgeNav/HamburgerNav';

import './Navbar.css';

const Navbar = () => {
  const Logo = 'https://lh3.googleusercontent.com/d/1B1ze4P82Rj4lCwJjJXttzQHb0d57F3kW'

  const [openDropMenu, setOpenDropMenu] = useState(false);
  const [openHamburguer, setOpenHamburguer] = useState(false);

  const openProducts = () => {
    setOpenDropMenu(true);
  };
  const closeProducts = () => {
    setOpenDropMenu(false);
  };
  const handleClick = () => {
    setOpenDropMenu(false);
  };
  const handleToggleHamburger = () => {
    setOpenHamburguer((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setOpenHamburguer(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        <div className=" nav__container">
          <Link to="/" className="logo">
            <img className="logo__bg-screen" src={Logo} alt="Ivns Logo" loading="lazy" />
            {/* <img className='logo__sm-screen' src={LogoSmall} alt="Ivns Logo" /> */}
          </Link>

          <ul className="nav__links">
            {navlinks.map(({ name, path, icon }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    activeclassname="active"
                    onMouseEnter={
                      name === 'Productos' ? openProducts : undefined
                    }
                    onClick={handleClick}
                  >
                    {name}
                    <span
                      onMouseEnter={
                        name === 'Productos' ? openProducts : undefined
                      }
                      onClick={handleClick}
                    >
                      {icon}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="nav__search">
            <SearchBar />
          </div>

          <button
            className="nav__toggle-btn"
            onClick={handleToggleHamburger}
            
          >
            {openHamburguer ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </button>
          {openHamburguer && (
            <HamburgerNav handleClose={() => setOpenHamburguer(false)} isVisible={openHamburguer} />
          )}
        </div>
      </nav>
      <div
        className={`menu_drop${openDropMenu ? 'active' : ''}`}
        onMouseLeave={closeProducts}
      >
        <MenuNav />
      </div>
    </>
  );
};

export default Navbar;
