import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MercadoLivreProducts from '../APIComponent/MercadoLivreAPI';
import './style.css';
import './searchbar.css';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Main as StyledMain} from '../global-styles';



const Main = () => {
    const imagens = [
        '/images/3980812.jpg',
        '/images/5645311.jpg',
        '/images/mias1.jpg',
    ];

    const [categories, setCategories] = useState([]); 
    const [category, setCategory] = useState('MLB1051'); 
    const [limit, setLimit] = useState(8); 
    const [searchCategory, setSearchCategory] = useState('MLB1051'); // categoria inicial
    const [searchLimit, setSearchLimit] = useState(8); // limite inicial

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');
                setCategories(response.data); // Armazenar as categorias obtidas
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleSearch = () => {
        setCategory(searchCategory); // Atualizar a categoria com o valor selecionado
        setLimit(searchLimit); // Atualizar o limite com o valor digitado
    };

    return (
        <div className="App">
            <Header />
            <StyledMain>
                <section id="ofertas" className="ofertas">
                    <Carousel imagens={imagens} />

                    <div className='search-bar'>
                        {/* Dropdown para selecionar categorias */}
                        <select
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                        >
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>

                        <input className='search-bar-btn'
                            type="number"
                            placeholder="Digite o limite de itens"
                            value={searchLimit}
                            onChange={(e) => setSearchLimit(e.target.value)}
                        />
                        <button onClick={handleSearch}>Buscar</button>
                    </div>

                    <div className='produtos-main'>
                        <MercadoLivreProducts category={category} limit={limit} />
                    </div>
                </section>
            </StyledMain>
            <Footer />
        </div>
    );
};

export default Main;
