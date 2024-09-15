import logo from './logo_sale.png';
import React from 'react';
import './App.css';
import Carousel from './Carousel'; 


function App() {
  const imagens = [
    'https://via.placeholder.com/600x400?text=Imagem+1',
    'https://via.placeholder.com/600x400?text=Imagem+2',
    'https://via.placeholder.com/600x400?text=Imagem+3',
  ];
  

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#precos">Preços</a></li>
            <li><a href="#fan-club">Fan Clube</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><button className="login-btn">Login</button></li>
            <li><button className="register-btn">Registre-se</button></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section id="ofertas" className="ofertas">
          <h2>Ofertas do dia</h2>
          <Carousel imagens={imagens} /> {/* Integrando o Carousel */}
          <div className="card-grid">            
            <div className="card">
              <img src="url-da-imagem" alt="Produto" />
              <p>Produto 1</p>
              <span>$50</span>
            </div>
            <div className="card">
              <img src="url-da-imagem" alt="Produto" />
              <p>Produto 2</p>
              <span>$60</span>
            </div>
            <div className="card">
              <img src="url-da-imagem" alt="Produto" />
              <p>Produto 3</p>
              <span>$70</span>
            </div>
            {/* ... mais produtos */}
          </div>
        </section>

        <section id="detalhes-produto" className="detalhes-produto">
          <h2>Detalhes do produto</h2>
          <img src="url-da-imagem-produto" alt="Detalhes do Produto" />
          <p>Nome do produto</p>
          <p>Descrição detalhada do produto.</p>
          <p>Opiniões dos clientes</p>
          {/* Lista de opiniões */}
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Sale & Shop - Todos os direitos reservados.</p>
        {/* <div className="categorias">
          <h4>Categorias</h4>
          <ul>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
          </ul>
        </div> */}
      </footer>
    </div>
  );
}

export default App;

