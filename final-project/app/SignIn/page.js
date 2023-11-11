'use client'
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Create a keyframe animation for the page transition
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

// Styled components for the sign-in and sign-up pages
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: #f4f4f4; /* Set a light background color */
`;

const PageWrapper = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${({ isSignIn }) => (isSignIn ? slideIn : slideOut)} 0.5s ease-in-out;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 12px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #217dbb;
  }
`;

const SignUpLink = styled.span`
  margin-top: 10px;
  text-align: center;
  color: #555;

  &:hover {
    color: #3498db;
    cursor: pointer;
  }
`;

function SignInPage({ setIsSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Signing in...', { username, password });
  };

  return (
    <PageContainer>
      <PageWrapper isSignIn>
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Sign In</Button>
        </Form>
        <SignUpLink onClick={() => setIsSignIn(false)}>Don't have an account? Sign Up</SignUpLink>
      </PageWrapper>
    </PageContainer>
  );
}

function SignUpPage({ setIsSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Signing up...', { username, password });
  };

  return (
    <PageContainer>
      <PageWrapper>
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" placeholder="Confirm Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Sign Up</Button>
        </Form>
        <SignUpLink onClick={() => setIsSignIn(true)}>Already have an account? Sign In</SignUpLink>
      </PageWrapper>
    </PageContainer>
  );
}

function Page() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      {isSignIn ? (
        <SignInPage setIsSignIn={setIsSignIn} />
      ) : (
        <SignUpPage setIsSignIn={setIsSignIn} />
      )}
    </>
  );
}

export default Page;
