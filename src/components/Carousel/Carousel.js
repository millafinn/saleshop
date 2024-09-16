import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

const Carousel = ({ imagens }) => {
  const [index, setIndex] = useState(0);

  // Função para avançar a imagem
  const nextImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  }, [imagens.length]);

  // Função para retroceder a imagem
  const prevImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  }, [imagens.length]);

  // Configura o intervalo para a troca automática de imagens
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Troca a imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [nextImage]); // Inclui nextImage nas dependências

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
        &#9664;
      </button>
      <img src={imagens[index]} alt={`Imagem ${index + 1}`} className="carousel-image" />
      <button className="carousel-button next" onClick={nextImage}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
