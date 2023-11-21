"use client";
import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { SelectAllProducts } from "@/redux/products/productsSlice";
import { useSelector } from "react-redux";

function Page() {
  const [data, setData] = useState(null);
  const products = useSelector(SelectAllProducts);
  const firstFiveProducts = products.slice(0, 3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(''); // Put your URL here
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]); 

  return (
    <>
     <TitlePage>Top  3 Items</TitlePage>

    <Container>
      {firstFiveProducts.map((product) => (
        <ProductCard key={product.id}>
          <ImageContainer>
            <img src={product.image}></img>
          </ImageContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.price}</ProductPrice>
          <QuantitySold>Quantity Sold: {product.quantity_sold}</QuantitySold>
        </ProductCard>
      ))}
      </Container>
    </>
  );
}

export default Page;


const TitlePage = styled.h1`

    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;
    
`

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  display: flex;

`;

const ProductCard = styled.div`
background: #fff;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 0.375rem;
transition: transform 0.3s, box-shadow 0.3s;

&:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

transform-style: preserve-3d;
backface-visibility: hidden;
  
`;

const ImageContainer = styled.div`
width: 50%;
height: 50%;
padding-bottom: 150px;
overflow: hidden;
border-radius: 0.375rem;

img {
  object-fit: cover;
  width: "100%";
  height: "100%";
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

const ProductDescription = styled.div``;

const ProductPrice = styled.p`
color: #666;
font-size: 1.25rem;
margin-top: 0.5rem;
`;
const QuantitySold = styled.div`

color : green;
`;




