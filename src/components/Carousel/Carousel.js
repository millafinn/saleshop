import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

const Carousel = ({ imagens }) => {
  const [index, setIndex] = useState(0);

  // Função para avançar a imagem
  const nextImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  }, [imagens.length]);

  // Configura o intervalo para a troca automática de imagens
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Troca a imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [nextImage]); // Inclui nextImage nas dependências

  return (
    <div className="carousel">
      <img src={imagens[index]} alt={`Imagem ${index + 1}`} className="carousel-image" />

      <div className="carousel-indicators">
        {imagens.map((_, i) => (
          <span
            key={i}
            className={`indicator ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
