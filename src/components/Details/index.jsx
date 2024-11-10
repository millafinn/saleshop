import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Details = () => {
    const { id } = useParams(); 
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
                const descriptionResponse = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
                setProduto({ ...response.data, description: descriptionResponse.data.plain_text });
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar produto:', error);
                setLoading(false);
            }
        };
        fetchProduto();
    }, [id]);

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    return (
        <div className="App">
            <Header />
            <main>
                <div className="product-details">
                    <div className="product-image">
                        <img src={produto.pictures && produto.pictures[0]?.url} alt={produto.title} />
                    </div>
                    <div className="product-info">
                        <h2>{produto.title}</h2>
                        <p className="product-price">R$ {produto.price.toFixed(2)}</p>
                        <p className="product-description">{produto.description || "Descrição não disponível."}</p>
                        <button className="buy-button">
                            <a href={produto.permalink} target="_blank" rel="noopener noreferrer">Seguir link</a>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Details;