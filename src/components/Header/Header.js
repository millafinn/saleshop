import React, { useState } from 'react';
import './HeaderStyle.css';
import { useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

const Header = ({ onProdutosClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    navigate(`/`);
  };

  const handleLoginClick = () => {
    navigate(`/login`);
  };

  const handleRegisterClick = () => {
    navigate(`/register`);
  };

  const handleContatoClick = () => {
    navigate(`/contact`);
  };

  return (
    <nav className="navbar">
      <img src="/images/logo_sem_fundo.png" alt="Logo" className="logo" />
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className="li-menu" onClick={handleHomeClick}>
            <HomeRoundedIcon className="menu-icon" /> Home
          </li>
          <li className="li-menu" onClick={onProdutosClick}>
            <StoreRoundedIcon className="menu-icon" /> Produtos
          </li>
          <li className="li-menu">
            <GroupRoundedIcon className="menu-icon" /> Fan Clube
          </li>
          <li className="li-menu" onClick={handleContatoClick}>
            <MailRoundedIcon className="menu-icon" /> Contato
          </li>
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="register-btn" onClick={handleRegisterClick}>Registre-se</button>
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
