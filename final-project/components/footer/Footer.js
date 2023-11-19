'use client'
import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping Information</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Connect With Us</h3>
          <SocialIcons>
            <a href="#" target="_blank"><FacebookIcon /></a>
            <a href="#" target="_blank"><TwitterIcon /></a>
            <a href="#" target="_blank"><InstagramIcon /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
margin-top: 50px;
  background-color: #1a1a1a;
  color: #fff;
  padding: 30px 0;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 20px;

  h3 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #ccc;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  a {
    font-size: 24px;
    color: #ccc;
    margin-right: 10px;
    text-decoration: none;
    transition: color 0.3s;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;

    &:hover {
      color: #fff;
      transform: translateY(-5px);
    }
  }
`;
