"use client";
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import {
  SelectAllCart,
  addToCart,
  removeFromCart,
  clearCart,
} from "@/redux/cart/cartSlice";
import axios from "axios";
import Link from "next/link";
import styled from "styled-components";

function page() {
  const cart = useSelector(SelectAllCart);
  const dispatch = useDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const user = useSelector(SelectUser);

  const filteredCart = useMemo(() => {
    const map = new Map(cart.map((pos) => [pos.id, pos]));
    return [...map.values()];
  }, [cart]);

  const exchangeRate = {
    USD: 1,
    JD: 0.709,
  };

  const currencySymbol = {
    USD: "$",
    JD: "JD",
  };

  const displayCurrency = (amount) => {
    const convertedAmount = amount * exchangeRate[selectedCurrency];
    const symbol = currencySymbol[selectedCurrency];
    return `${symbol}${convertedAmount.toFixed(2)}`;
  };

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
    const count = cart.filter((item) => item.id === product.id).length;
    return (count * product.price).toFixed(2);
  };

  const subtotal = filteredCart.reduce((acc, product) => {
    return acc + parseFloat(totalPrice(product));
  }, 0);

  const taxRate = 0.06;
  const tax = subtotal * taxRate;

  const grandTotal = subtotal + tax;

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <CartContainer>
      {cart.length > 0 ? (
        <div>
          <SwitchHolder>
          <ClearButton onClick={clearCartHandler}>clear cart</ClearButton>

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
            <Product key={product.id}>
              <ShoppingCart>
                <ProductImage>
                  <img src={product.image} alt={product.name} />
                </ProductImage>
                <ProductDetails>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                </ProductDetails>
                <ProductPrice>{displayCurrency(product.price)}</ProductPrice>
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
                <TotalPrice>{displayCurrency(totalPrice(product))}</TotalPrice>
              </ShoppingCart>
            </Product>
          ))}

          <SummaryContainer>
            <SummaryItem>
              <SummaryLabel>Subtotal:</SummaryLabel>
              <SummaryValue>{displayCurrency(subtotal)}</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Tax:</SummaryLabel>
              <SummaryValue>{displayCurrency(tax)}</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Grand Total:</SummaryLabel>
              <SummaryValue>{displayCurrency(grandTotal)}</SummaryValue>
            </SummaryItem>
          </SummaryContainer>

          <ButttonContainer>
            {user ? (
              <Link href={"/Checkout"}>
                <CheckoutButton type="submit">Checkout</CheckoutButton>
              </Link>
            ) : (
              <Link href={"/LogIn"}>
                <CheckoutButton type="submit">Checkout</CheckoutButton>
              </Link>
            )}
          </ButttonContainer>
        </div>
      ) : (
        <EmptyCartMessage>Cart is empty</EmptyCartMessage>
      )}
    </CartContainer>
  );
}

export default page;
const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  background-color: white;
  padding: 20px;
`;
const ClearButton = styled.button` 
background-color: red;
border-radius: 10px;
width: 100px;
color: white;
margin-left: 16px;

&:hover {
  background-color: #c0392b;
}
`;
const ToggleCurrencySwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 38px;
  margin-left: auto;
`;
const SwitchHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top : 20px;
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

  transition: transform 0.6s ease-in-out;

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
  margin-left: 20px;
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

const ButttonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  width: 400px;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const SummaryContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-top: 100px;
  max-width: 400px;
  margin-left: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const SummaryLabel = styled.span`
  font-size: 1.2rem;
  color: #555;
`;

const SummaryValue = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;
