'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SelectAllCart, addToCart, removeFromCart } from '@/redux/cart/cartSlice';
import styled from 'styled-components';

function Page() {
  const cart = useSelector(SelectAllCart);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const filteredCart = cart.filter(
    (item, index) => cart.indexOf(item) === index
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(removeFromCart(product.id));
  };


  const totalPrice = (product) => {
    const newArray = cart.filter((item) => item.id === product.id);
    const ArrayLength = newArray.length;
    const total = ArrayLength * product.price;
    return total;
  };

  const subtotal = Math.round(
    filteredCart.reduce((acc, product) => {
      return acc + totalPrice(product);
    }, 0)
  );

  const taxRate = 0.06;
  const tax = Math.round(subtotal * taxRate);
  const grandTotal = Math.round(subtotal + tax);




  return (
    <CartContainer className={isLoaded ? 'loaded' : ''}>
      {cart.length > 0 ? (
        <div className="cart-items">
          {filteredCart.map((product) => (
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
                  <button onClick={() => handleDecreaseQuantity(product)}>-</button>
                  <input
                    type="text"
                    value={cart.filter((item) => item.id === product.id).length}
                    readOnly
                  />
                  <button onClick={() => handleIncreaseQuantity(product)}>+</button>
                </ProductQuantity>
                <RemoveProductButton
                  onClick={() => handleDecreaseQuantity(product)}
                >
                  Remove
                </RemoveProductButton>
              </ShoppingCart>
            </Product>
          ))}
          <CheckoutButton>Checkout</CheckoutButton>

        </div>
      ) : (
        <EmptyCartMessage>Cart is empty</EmptyCartMessage>
      )}
    </CartContainer>
  );
}

export default Page;

const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  margin: 0 auto;


  .cart-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.5s, transform 0.5s;
  }

  &.loaded .cart-items {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Product = styled.div`
  width: 100%;
  border: 1px solid #eee;
  padding: 40px;
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
  width: 100%;
`;

const ProductImage = styled.div`
  flex: 1;
  img {
    max-width: 150px;
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
  margin-right: 15px;
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;

  button {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 8px;
    font-size: 1.2rem;
    cursor: pointer;
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
  margin-left: 15px;
  &:hover {
    background-color: #c0392b;
  }
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  padding: 20px;
`;

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  width : 250px;
  height : 90px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: auto; 
  &:hover {
    background-color: #45a049;
  }
`;
