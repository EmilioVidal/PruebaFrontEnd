import React from 'react';
import './navBar.css';

function NavBar() {
    return (
        <nav className="navbar">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Inicio</a></li>
            <li><a href="#about" className="nav-link">Acerca de</a></li>
            <li><a href="#contact" className="nav-link">Contacto</a></li>
          </ul>
        </nav>
      );
}

export default NavBar;