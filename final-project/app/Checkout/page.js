"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { SelectAllCart } from "@/redux/cart/cartSlice";
function Page() {

  const user = useSelector(SelectUser);
  const cart  = useSelector(SelectAllCart);

  
  return (
    <PageContainer>
      {true ? (
        <>
          <CheckoutForm >
            <FormGroup>
              <FormLabel>First Name:</FormLabel>
              <FormInput
                type="text"
                name="firstName"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Last Name:</FormLabel>
              <FormInput
                type="text"
                name="lastName"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Street Name:</FormLabel>
              <FormInput
                type="text"
                name="streetName"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>City:</FormLabel>
              <FormInput
                type="text"
                name="city"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Postal Code:</FormLabel>
              <FormInput
                type="text"
                name="postalCode"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Building Number:</FormLabel>
              <FormInput
                type="text"
                name="buildingNumber"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Phone Number:</FormLabel>
              <FormInput
                type="text"
                name="phoneNumber"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Additional Delivery Information:</FormLabel>
              <FormTextarea
                name="additionalDeliveryInfo"
              />
            </FormGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
           
          </CheckoutForm>
        </>
      ) : (
        <>
          <p>You are not athorize to this page <Link href={'/SignIn'} style={{color : 'blue', cursor : 'pointer'}}>  please sign in</Link></p>
            
          
        </>
      )}
    </PageContainer>
  );
}

export default Page;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4; 
  height :   100vh;  
`;

const CheckoutForm = styled.form`
  width: 50%;
  padding: 20px;
  border: 1px solid #ddd; /* Lighten the border color */
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
  color: #333; /* Darken the label color */
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
