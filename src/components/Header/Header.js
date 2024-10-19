import React, { useState } from 'react';
import './HeaderStyle.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    navigate(`/`);
  };

  return (
    <nav className="navbar">
      <img src="/images/logo_sale.png" alt="Logo" className="logo" />
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className="li-menu" onClick={handleHomeClick}>Home</li>
          <li className="li-menu">Preços</li>
          <li className="li-menu">Fan Clube</li>
          <li className="li-menu">Contato</li>
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
