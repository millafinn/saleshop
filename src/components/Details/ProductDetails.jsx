import React from 'react';
import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  min-height: 500px;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    padding: 40px;
    max-width: 1400px;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media (min-width: 1024px) {
      max-width: 300px;
    }
  }

  @media (min-width: 600px) {
    width: 45%;
    margin-right: 40px;
  }
`;

export const ProductInfo = styled.div`
  text-align: center;
  margin-top: 20px;

  @media (min-width: 600px) {
    flex: 1;
    text-align: left;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;

  @media (min-width: 600px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  color: #e60000;
  margin: 10px 0;
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  margin: 20px 0;
  color: #666;

  @media (min-width: 600px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const BuyButton = styled.button`
  padding: 15px 30px;
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #005bb5;
    transform: translateY(-3px);
  }

  @media (min-width: 600px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;


const ProductDetails = ({ produto }) => {
    return (
        <ProductDetailsContainer>
            <ProductImage>
                <img src={produto.pictures && produto.pictures[0]?.url} alt={produto.title} />
            </ProductImage>
            <ProductInfo>
                <ProductTitle>{produto.title}</ProductTitle>
                <ProductPrice>R${produto.price}</ProductPrice>
                <ProductDescription>{produto.description}</ProductDescription>
                <BuyButton>
                    <a href={produto.permalink} target="_blank" rel="noopener noreferrer">Seguir link</a>
                </BuyButton>
            </ProductInfo>
        </ProductDetailsContainer>
    );
};

export default ProductDetails;
