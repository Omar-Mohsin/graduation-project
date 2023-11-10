"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SelectAllCart,
  addToCart,
  removeFromCart,
} from "@/redux/cart/cartSlice";
import styled from "styled-components";

function Page() {
  const cart = useSelector(SelectAllCart);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); 

  const filteredCart = cart.filter(
    (item, index) => cart.indexOf(item) === index
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const toggleCurrency = () => {
    setSelectedCurrency((prevCurrency) =>
      prevCurrency === "JD" ? "USD" : "JD"
    );
  };
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
    return total.toFixed(2);
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
    <CartContainer >
      {cart.length > 0 ? (
        <div className="cart-items">
          <SwitchHolder>
            <ToggleCurrencySwitch>
              <ToggleCurrencyInput
                type="checkbox"
                checked={selectedCurrency === "USD"}
                onChange={toggleCurrency}
              />
              <ToggleCurrencySlider checked={selectedCurrency === "USD"} />
            </ToggleCurrencySwitch>
          </SwitchHolder>
          {filteredCart.map((product) => (
            <Product key={product.id} isLoaded={isLoaded}>
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
                  <button onClick={() => handleDecreaseQuantity(product)}>
                    -
                  </button>
                  <input
                    type="text"
                    value={cart.filter((item) => item.id === product.id).length}
                    readOnly
                  />
                  <button onClick={() => handleIncreaseQuantity(product)}>
                    +
                  </button>
                </ProductQuantity>
                <RemoveProductButton
                  onClick={() => handleDecreaseQuantity(product)}
                >
                  Remove
                </RemoveProductButton>
                <TotalPrice>${totalPrice(product)}</TotalPrice>
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
  background-color: #f4f4f4;
  padding: 20px;

`;

const ToggleCurrencySwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 70px; /* increased width */
  height: 38px; /* increased height */
  margin-left: auto; /* Move the switch to the right */
`;
const SwitchHolder = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ToggleCurrencySlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3498db;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  transition: background-color 0.4s;
  font-size: 0.7rem;

  &:before {
    content: "${({ checked }) => (checked ? "USD" : "JD")}";
    position: absolute;
    height: 30px;
    width: 30px;
    left: ${({ checked }) => (checked ? "38px" : "4px")};
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: bold;
    color: ${({ checked }) => (checked ? "#2ecc71" : "#333")};
  }
`;
const ToggleCurrencyInput = styled.input`
  display: none;

  &:checked + ${ToggleCurrencySlider} {
    background-color: #2ecc71;
  }

  &:checked + ${ToggleCurrencySlider}:before {
    transform: translateX(1px);
  }
`;
const Product = styled.div`
  width: 100%;
  border: 1px solid #eee;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.005);
  }

  transform: translateX(${({ isLoaded }) => (isLoaded ? '0' : '-100%')});
  transition: transform 0.5s ease-in-out;

  &.loaded {
    transform: translateX(0);
  }
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
  flex: 1.5;
  padding: 20px;
`;

const ProductTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 12px;
`;

const ProductPrice = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #e44d26;
  margin-right: 20px;
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
  background-color: red;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 15px;
  margin-right: 30px;

  &:hover {
    background-color: #c0392b;
  }
`;

const TotalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-left: auto;
  margin-right: 20px;
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #666;
  padding: 20px;
  margin: auto; 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; 
`;

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  &:hover {
    background-color: #45a049;
  }
`;
