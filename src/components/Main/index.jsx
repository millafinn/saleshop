import React, { useRef } from 'react';
import MercadoLivreProducts from '../APIComponent/MercadoLivreAPI';
import './style.css';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {
    const produtosRef = useRef(null);

    const scrollToProdutos = () => {
        produtosRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const imagens = [
        '/images/imagem_carousel1.webp',
        '/images/imagem_carousel2.webp',
        '/images/imagem_carousel3.webp',
        '/images/imagem_carousel4.webp',
        '/images/imagem_carousel5.webp',
    ];

    return (
        <div className="App">
            <Header onProdutosClick={scrollToProdutos} />
            <main className="main">
                <section id="ofertas" className="ofertas">
                    <Carousel imagens={imagens} />
                    <div ref={produtosRef} className='produtos-main'>
                        <MercadoLivreProducts />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Main;
