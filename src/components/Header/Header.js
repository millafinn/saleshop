import React, { useState } from 'react';
import './HeaderStyle.css'; 

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="App">
            <header className="header">
                <img src='/images/logo_sale.png' alt="Logo" className="logo" />
                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776;
                </button>
                <nav className={isMenuOpen ? 'nav-open' : ''}>
                    <ul>
                        <li className='li-menu'><a href="#ofertas">Ofertas</a></li>
                        <li className='li-menu'><a href="#precos">Preços</a></li>
                        <li className='li-menu'><a href="#fan-club">Fan Clube</a></li>
                        <li className='li-menu'><a href="#contato">Contato</a></li>
                        <li className='li-menu'><button className="login-btn">Login</button></li>
                        <li className='li-menu'><button className="register-btn">Registre-se</button></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
