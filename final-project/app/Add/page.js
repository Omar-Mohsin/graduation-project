'use client'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

function page() {

    const [item, setItem] = useState({
        name: "",
        description: "",
        price: "",
        stocks: "",
      });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


      const handleSubmit = async () => {
        console.log("Form data:", item);
    
        const formData = new FormData();
        formData.append("name", item.name);
        formData.append("description", item.description);
        formData.append("price", item.price);
        formData.append("stocks", item.stocks);
    
        fetch("http://localhost:8080/api/addItem", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.success) {
                    console.log("successful!");
                    // Handle success as needed
                } else {
                    console.error("failed:", responseData.error);
                }
            });
    };
    
  return (
    <CheckoutForm>
    <FormGroup>
      <FormLabel>name</FormLabel>
      <FormInput
        type="text"
        name="name"
        onChange={handleChange}
        required
      />
    </FormGroup>
    <FormGroup>
      <FormLabel>description</FormLabel>
      <FormInput
        type="text"
        name="description"
        onChange={handleChange}
        required
      />
    </FormGroup>
    <FormGroup>
      <FormLabel>price</FormLabel>
      <FormInput
        type="text"
        name="price"
        onChange={handleChange}
        required
      />
    </FormGroup>
    <FormGroup>
      <FormLabel>stocks</FormLabel>
      <FormInput
        type="text"
        name="stocks"
        onChange={handleChange}
        required
      />
    
    </FormGroup>

  
    
    
    <SubmitButton onClick={handleSubmit}  >Submit</SubmitButton>
  </CheckoutForm>
  )
}

export default page



const CheckoutForm = styled.div`
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
