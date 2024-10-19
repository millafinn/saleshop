import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const produtos = [
    { id: 1, nome: 'Produto 1', descricao: 'Descrição do produto 1.', preco: 'R$99.49', imagem: '/images/3980812.jpg' },
    { id: 2, nome: 'Produto 2', descricao: 'Descrição do produto 2.', preco: 'R$10.49', imagem: '/images/5645311.jpg' },
    { id: 3, nome: 'Produto 3', descricao: 'Descrição do produto 3.', preco: 'R$50.49', imagem: '/images/mias1.jpg' },
    { id: 4, nome: 'Produto 4', descricao: 'Descrição do produto 4.', preco: 'R$29.49', imagem: '/images/3980812.jpg' },
    { id: 5, nome: 'Produto 5', descricao: 'Descrição do produto 5.', preco: 'R$9.49', imagem: '/images/5645311.jpg' },
    { id: 6, nome: 'Produto 6', descricao: 'Descrição do produto 6.', preco: 'R$59.74', imagem: '/images/mias1.jpg' },
    { id: 7, nome: 'Produto 7', descricao: 'Descrição do produto 7.', preco: 'R$7.00', imagem: '/images/3980812.jpg' },
];

const Details = () => {
    const { id } = useParams(); // Pegar o ID da URL
    const produto = produtos.find(prod => prod.id === parseInt(id)); // Buscar o produto pelo ID

    if (!produto) {
        return <div>Produto não encontrado.</div>; // Mensagem caso o produto não seja encontrado
    }

    return (
        <div className="App">
            <Header />
            <main className="main">
                <div className="product-details">
                    <div className="product-image">
                        <img src={produto.imagem} alt={produto.nome} />
                    </div>
                    <div className="product-info">
                        <h2>{produto.nome}</h2>
                        <p className="product-price">{produto.preco}</p>
                        <p className="product-description">{produto.descricao}</p>
                        <button className="buy-button">Comprar</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Details;
