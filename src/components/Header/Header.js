import React, { useState } from 'react';
import './HeaderStyle.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src="/images/logo_sale.png" alt="Logo" className="logo" />
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className="li-menu"><a href="#ofertas">Ofertas</a></li>
          <li className="li-menu"><a href="#precos">Preços</a></li>
          <li className="li-menu"><a href="#fan-club">Fan Clube</a></li>
          <li className="li-menu"><a href="#contato">Contato</a></li>
          <li className="li-menu"><button className="login-btn">Login</button></li>
          <li className="li-menu"><button className="register-btn">Registre-se</button></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Header;
