'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

function Page() {
  const [signInData, setSignInData] = useState({ username: '', password: '' });
  const [signUpData, setSignUpData] = useState({ username: '', password: '' });

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data:', signInData);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', signUpData);
  };

  return (
    <PageContainer>
      <FormContainer>
        <Form>
          <h2>Sign In</h2>
          <form onSubmit={handleSignInSubmit}>
            <InputLabel>Username:</InputLabel>
            <Input
              type="text"
              value={signInData.username}
              onChange={(e) => setSignInData({ ...signInData, username: e.target.value })}
            />
            <InputLabel>Password:</InputLabel>
            <Input
              type="password"
              value={signInData.password}
              onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
            />
            <Button type="submit">Sign In</Button>
          </form>
        </Form>

        <div style={{ width: '20px' }}></div>

        <Form>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUpSubmit}>
            <InputLabel>Username:</InputLabel>
            <Input
              type="text"
              value={signUpData.username}
              onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })}
            />
            <InputLabel>Password:</InputLabel>
            <Input
              type="password"
              value={signUpData.password}
              onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </Form>
      </FormContainer>
    </PageContainer>
  );
}

export default Page;

const PageContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Form = styled.div`
  width: 300px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin-right:200px;
  &:hover {
    transform: scale(1.02);
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #333;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: 1px solid #3498db;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #217dbb;
  }
`;
