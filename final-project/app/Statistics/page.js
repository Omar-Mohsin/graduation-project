"use client";
import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://watermelon1.pythonanywhere.com/api/statistics/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TitlePage>Top 3 Items</TitlePage>

      <Container>
        {data?.top_items.map((product) => (
          <ProductCard key={product.id}>
            <ImageContainer>
              <img src={product.image_url} alt={product.name} />
            </ImageContainer>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
            <QuantitySold>Quantity Sold: {product.quantity_sold}</QuantitySold>
          </ProductCard>
        ))}
      </Container>
    </>
  );
}

export default React.memo(Page);

const TitlePage = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1rem;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 1rem; 

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  transform-style: preserve-3d;
  backface-visibility: hidden;
  flex: 1;
  max-width: 300px; 
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 150px;
  overflow: hidden;
  border-radius: 0.375rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    padding: 50px;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  color: #666;
  font-size: 1.25rem;
  margin-top: 0.5rem;
`;

const QuantitySold = styled.div`
  color: green;
`;
