import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Importar Axios
import './style.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Details = () => {
    const { id } = useParams(); // Pegar o ID da URL
    const [produto, setProduto] = useState(null); // Estado para armazenar o produto

    // Função para buscar o produto específico da Fake Store API
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduto(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar produto:', error);
            });
    }, [id]);

    if (!produto) {
        return <div>Produto não encontrado.</div>; // Mensagem enquanto o produto está sendo carregado
    }

    return (
        <div className="App">
            <Header />
            <main className="main">
                <div className="product-details">
                    <div className="product-image">
                        <img src={produto.image} alt={produto.title} />
                    </div>
                    <div className="product-info">
                        <h2>{produto.title}</h2>
                        <p className="product-price">R${produto.price}</p>
                        <p className="product-description">{produto.description}</p>
                        <button className="buy-button">Seguir link</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Details;
