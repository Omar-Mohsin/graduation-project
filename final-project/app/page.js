"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/products/productsSlice";
import { SelectAllProducts } from "@/redux/products/productsSlice";
import { addToCart } from "@/redux/cart/cartSlice";
import styled from "styled-components";
import { Footer } from "@/components";

const Page = () => {
  const products = useSelector(SelectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  const addButtonHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>
              <img src={product.image_url} alt={product.name} />
            </ProductImage>

            {product.stocks === 0 ? (
              <div className="bg-red-500 text-white text-xs font-bold rounded-xl px-2 py-1 absolute top-0 right-0">
                Out of Stock
              </div>
            ) : (
              <ProductPrice>{product.stocks}</ProductPrice>
            )}

            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
            <div className="mt-4 flex justify-between items-center">
              {product.stocks ===0? (
                <AddToCartButton  onClick={() => {}}>
                  add to cart
                </AddToCartButton>
              ) : (
                <AddToCartButton
                  onClick={() => {
                    addButtonHandler(product);
                  }}
                >
                  Add to Cart
                </AddToCartButton>
              )}

              <MoreInfoButton>More Info</MoreInfoButton>
            </div>
          </ProductCard>
        ))}
      </div>
      <Footer />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
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

const ProductPrice = styled.p`
  color: #666;
  font-size: 1.25rem;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
  }
`;

const AddToCartButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const MoreInfoButton = styled(Button)`
  background-color: #f3f4f6;
  color: #333;
`;
