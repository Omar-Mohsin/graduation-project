'use client'
import React from 'react';
import styled from 'styled-components';

function AboutPage() {
 return (
    <AboutContainer>
      <AboutText>
        <h1>Welcome to WaterMelon 🍉</h1>
        <p>
          Discover a world of endless possibilities with 🍉. We are
          passionate about providing you with a curated selection of premium
          products, ranging from the latest fashion trends to cutting-edge
          electronics and exquisite home goods.
        </p>
        <p>
          At 🍉, we believe in the power of seamless shopping
          experiences. Our user-friendly platform is designed to make your
          online journey delightful, ensuring you find what you need with ease.
        </p>
        <p>
          Join us in redefining the art of online shopping. Embrace style,
          embrace innovation, and let 🍉 be your go-to destination for
          all your desires.
        </p>
      </AboutText>

    </AboutContainer>
 );
}

export default AboutPage;

const AboutContainer = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 margin: 50px;
 background-color: #f9f9f9;
 padding: 50px;
 border-radius: 10px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.section`
 max-width: 600px;

 h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
 }

 p {
    font-size: 1.2rem;
    line-height: 1.5;
    `