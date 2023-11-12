"use client";
import React, { useState } from "react";
import styled from "styled-components";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // TODO: Send login request to server

    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <SignInContainer>
      <SignInForm onSubmit={handleSubmit}>
        <SignInTitle>Sign In</SignInTitle>

        <SignInLabel>Email</SignInLabel>
        <SignInInput
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <SignInLabel>Password</SignInLabel>
        <SignInInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error && <SignInError>{error}</SignInError>}

        <SignInButton type="submit">Sign In</SignInButton>
      </SignInForm>
    </SignInContainer>
  );
}

export default SignIn;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white; /* Match the background color of your navbar */
  color: white;
`;

const SignInForm = styled.form`
  width: 500px;
  padding: 40px;
  border: 2px solid #000;
  background: black;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const SignInTitle = styled.h1`
  color: white; 
  font-size: 36px;
  margin-bottom: 20px;
`;

const SignInLabel = styled.label`
  display: block;
  margin-bottom: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: white;
`;

const SignInInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 25px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
  }
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ccc;
  }
`;

const SignInError = styled.span`
  color: #d63031;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-top: 20px;
  display: block;
`;
