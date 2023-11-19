"use client";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectUser, addUser } from "@/redux/auth/authSlice";
const page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfrimPassword] = useState("");

  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const data = {
      username,
      email,
      password,
      confirmPassword,
    };

    console.log("Form data:", data);

    fetch("http://localhost:8000/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          console.log("Registration successful!");
          window.location.href = "/";
          dispatch(addUser({ username, email, password }));
        } else {
          console.error("Registration failed:", responseData.error);
        }
      });
  };

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfrimPasswordChange = (event) => {
    setconfrimPassword(event.target.value);
  };

  return (
    <>
      {!user ? (
        <SignUpContainer>
          <SignUpForm>
            <SignUpTitle>Sign Up</SignUpTitle>
            <SignUpInput
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={handleUserChange}
              required
            />
            <SignUpInput
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <SignUpInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <SignUpInput
              type="password"
              placeholder="Confrim Password"
              value={confirmPassword}
              onChange={handleConfrimPasswordChange}
              required
            />
            <SignUpButton onClick={handleSubmit}>Sign Up</SignUpButton>

            <SignUpLink href="/LogIn">already have account Sign in</SignUpLink>
          </SignUpForm>
        </SignUpContainer>
      ) : (
        <Section>
          <p>
            You are already signed in{" "}
            <Link href={"/"} style={{ color: "blue" }}>
              go to Home Page
            </Link>
          </p>
        </Section>
      )}
    </>
  );
};

export default page;
const Section = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  height: 100vh;
`;
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white;
  color: white;
`;

const SignUpForm = styled.div`
  width: 500px;
  padding: 40px;
  border: 2px solid #000;
  background: black;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const SignUpTitle = styled.h1`
  color: white;
  font-size: 36px;
  margin-bottom: 20px;
`;

const SignUpInput = styled.input`
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

const SignUpButton = styled.button`
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

const SignInLink = styled.p`
  color: white;
  font-size: 14px;
  margin-top: 15px;

  a {
    color: #007bff;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #0056b3;
    }
  }
`;

const SignUpLink = styled(Link)`
  margin-top: 15px;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;
