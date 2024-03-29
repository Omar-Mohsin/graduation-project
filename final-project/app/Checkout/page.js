'use client';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import { clearCart } from "@/redux/cart/cartSlice";
import Link from "next/link";
import { SelectAllCart } from "@/redux/cart/cartSlice";

function Page() {
  const user = useSelector(SelectUser);
  const cart = useSelector(SelectAllCart);
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [cartSummary, setCartSummary] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [delivery_info, setDelivery_info] = useState({
    firstName: "",
    lastName: "",
    streetName: "",
    city: "",
    postalCode: "",
    buildingNumber: "",
    phoneNumber: "",
    additionalDeliveryInfo: "",
  });

  useEffect(() => {
    const calculateCartSummary = () => {
      const summary = cart.reduce((acc, item) => {
        const { id, name, price } = item;

        if (id !== "totalPrice") {
          if (!acc[id]) {
            acc[id] = {
              id: id,
              name: name,
              quantity: 1,
              price: price,
            };
          } else {
            acc[id].quantity += 1;
          }
        }

        return acc;
      }, {});

      const totalPrice = cart.reduce((total, item) => {
        if (item.id !== "totalPrice") {
          return total + item.price;
        }
        return total;
      }, 0);

      setTotalPrice(totalPrice);
      setCartSummary({ ...summary });
    };

    calculateCartSummary();
  }, [cart]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDelivery_info((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const data = {
      id: user.id,
      cartSummary,
      delivery_info,
    };

    console.log("Form data:", data);

    fetch("https://watermelon1.pythonanywhere.com/checkout/api/place_order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          console.log("successful!");
          dispatch(clearCart());
          window.location.href = "/";
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 2000);
        } else {
          console.error(" failed:", responseData.error);
        }
      });
  };

  return (
    <PageContainer>
      {user ? (
        <CheckoutForm>
          <FormGroup>
            <FormLabel>First Name:</FormLabel>
            <FormInput
              type="text"
              name="firstName"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Last Name:</FormLabel>
            <FormInput
              type="text"
              name="lastName"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Street Name:</FormLabel>
            <FormInput
              type="text"
              name="streetName"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>City:</FormLabel>
            <FormInput
              type="text"
              name="city"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Postal Code:</FormLabel>
            <FormInput
              type="text"
              name="postalCode"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Building Number:</FormLabel>
            <FormInput
              type="text"
              name="buildingNumber"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone Number:</FormLabel>
            <FormInput
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Additional Delivery Information:</FormLabel>
            <FormTextarea name="additionalDeliveryInfo" />
          </FormGroup>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </CheckoutForm>
      ) : (
        <p>
          You are not authorized for this page{" "}
          <Link href={"/LogIn"} style={{ color: "blue", cursor: "pointer" }}>
            please sign in
          </Link>
        </p>
      )}

      {showSuccessMessage && (
        <SuccessMessage>Item Ordered successfully!</SuccessMessage>
      )}
    </PageContainer>
  );
}

export default React.memo(Page);

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f4f4f4;
`;

const CheckoutForm = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
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
