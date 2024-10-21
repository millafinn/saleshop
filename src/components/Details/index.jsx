import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductDetails from './ProductDetails';
import { Main } from '../global-styles';

const Details = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/items/${id}`)
            .then(response => {
                setProduto(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar produto:', error);
            });
    }, [id]);

    if (!produto) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div className="App">
            <Header />
                <Main>
                    <ProductDetails produto={produto} />
                </Main>
            <Footer />
        </div>
    );
};

export default Details;
