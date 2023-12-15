"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/products/productsSlice";
import { SelectAllProducts } from "@/redux/products/productsSlice";
import { addToCart } from "@/redux/cart/cartSlice";
import styled from "styled-components";
import { Footer } from "@/components";
import Link from "next/link";
const Page = () => {
  const products = useSelector(SelectAllProducts);
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFavorites, setFavorites] = useState({});

  const handleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };
  useEffect(() => {
    const newFilteredProudcts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchField.toLowerCase());
    });

    setFilteredProducts(newFilteredProudcts);
  }, [products, searchField]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const searchHandler = (event) => {
    setSearchField(event.target.value);
  };

  const addButtonHandler = (product) => {
    dispatch(addToCart(product));
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <Container>
      <SearchContainer>
        <div>
          <input placeholder="Search..." onChange={searchHandler} />
        </div>
      </SearchContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>
              <img src={product.image} alt={product.name} />
            </ProductImage>

            {product.stocks === 0 ? (
              <ContainerStocksStatus>
                <StockStatus>Out of Stock</StockStatus>
              </ContainerStocksStatus>
            ) : (
              <NumberOfStocks>{product.stocks} stocks</NumberOfStocks>
            )}

            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
            <div>
              <button onClick={() => handleFavorite(product.id)}>
                {isFavorites[product.id] ? "❤️" : "🖤"}
              </button>
            </div>
            <div className="mt-4 flex justify-between items-center">
              {product.stocks === 0 ? (
                <NoStocksButton>Add to Cart</NoStocksButton>
              ) : (
                <AddToCartButton
                  onClick={() => {
                    addButtonHandler(product);
                  }}
                >
                  Add to Cart
                </AddToCartButton>
              )}
            </div>
          </ProductCard>
        ))}
        {showSuccessMessage && (
          <SuccessMessage>Item added successfully!</SuccessMessage>
        )}
      </div>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
`;
const SearchContainer = styled.div`
  margin: 2rem auto;
  text-align: center;

  input {
    width: 30%;
    padding: 0.5rem;
    box-sizing: border-box;
    border: 2px solid green;
    border-radius: 5px;
    text-align: center;
  }
`;
const ProductCard = styled.div`
  background: #fff;
  padding: 1rem;
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
const ProductImage = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 150%;
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

const NumberOfStocks = styled.h1`
  font-size: 1.2rem;
  color: green;
  margin-top: 0.5rem;
`;
const ProductPrice = styled.p`
  color: #666;
  font-size: 1.25rem;
  margin-top: 0.5rem;
`;

const ContainerStocksStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const StockStatus = styled.div`
  background-color: red;
  color: white;
  padding: 8px;
  border-radius: 10px;
  width: 200px;
  font-weight: bold;
`;

const NoStocksButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 99px;
  font-weight: 600;
  cursor: not-allowed;
  background-color: gray;
  color: #fff;
`;
const AddToCartButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 99px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  font-weight: 600;
  background-color: #007bff;
  color: #fff;

  &:hover {
    transform: scale(1.1);
  }
`;
const SuccessMessage = styled.div`
  background-color: #4caf50;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  z-index: 999;
`;
