'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SelectAllCart, addToCart, removeFromCart } from '@/redux/cart/cartSlice';
import styled from 'styled-components';
const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Product = styled.div`
  width: 100%; /* Set a maximum width for responsiveness */
  border: 1px solid #eee;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ShoppingCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProductImage = styled.div`
  flex: 1;
  img {
    max-width: 100px;
    height: auto;
    border-radius: 5px;
  }
`;

const ProductDetails = styled.div`
  flex: 2;
  padding: 0 20px;
`;

const ProductTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ff5722;
`;
const ProductQuantity = styled.div`
display: flex;
align-items: center;

button {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px; /* Change this to make buttons square */
  padding: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #ff5722;
    color: #fff;
  }
}

input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  width: 40px;
  text-align: center;
  font-weight: 600;
}
`;

const RemoveProductButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;

function Page() {
  const cart = useSelector(SelectAllCart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (productId) => {
    dispatch(addToCart(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleRemoveItemFromCart = (productId) => {
    // Implement your logic for removing an item from the cart
  };

  return (
    <CartContainer>
      {cart.map((product) => (
        <Product key={product.id}>
          <ShoppingCart>
            <ProductImage>
              <img src={product.image} alt={product.title} />
            </ProductImage>
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductDetails>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductQuantity>
              <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
              <input
                type="text"
                value={cart.filter((item) => item.id === product.id).length}
                readOnly
              />
              <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
            </ProductQuantity>
            <RemoveProductButton
              onClick={() => handleRemoveItemFromCart(product.id)}
            >
              Remove
            </RemoveProductButton>
          </ShoppingCart>
        </Product>
      ))}
    </CartContainer>
  );
}

export default Page;
