"use client";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { useSelector  , useDispatch} from "react-redux";
import { addUser } from "@/redux/auth/authSlice";
import { SelectUser } from "@/redux/auth/authSlice";
import { nanoid } from "@reduxjs/toolkit";
function page() {
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      username,
      password,
    };

    console.log("Form data:", data); 

    fetch("http://localhost:8000/api/login/", { // change the url
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          console.log( "response data ", responseData);
          console.log("Registration successful!");
          dispatch(addUser(responseData));
          window.location.href = "/";
        } else {
          // Registration failed
          console.error("Registration failed:", responseData.error);
        }
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      {!user ? (
        <LoginContainer>
          <LoginForm>
            <LoginTitle>Log In</LoginTitle>

            <LoginLabel>Username</LoginLabel>
            <LoginInput
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />

            <LoginLabel>Password</LoginLabel>
            <LoginInput
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <LoginButton onClick={handleSubmit}>Sign In</LoginButton>

            <SignUpLink href="/SignUp">
              Don't have an account? Sign Up
            </SignUpLink>
          </LoginForm>
        </LoginContainer>
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
}

export default page;
const Section = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  height: 100vh;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white;
  color: white;
`;

const LoginForm = styled.div`
  width: 500px;
  padding: 40px;
  border: 2px solid #000;
  background: black;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const LoginTitle = styled.h1`
  color: white;
  font-size: 36px;
  margin-bottom: 20px;
`;

const LoginLabel = styled.label`
  display: block;
  margin-bottom: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: white;
`;

const LoginInput = styled.input`
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

const LoginButton = styled.button`
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
