'use client'
import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

function Footer() {
  return (
    <FooterContainer>
    <FooterContent>
      <FooterSection>
        <h3>About Us</h3>
        <ul>
          <li><Link href={'/About'}>Our Story</Link></li>
          <li><Link href={'/Team'}>Team</Link></li>
        </ul>
      </FooterSection>

      <FooterSection>
        <h3>Customer Service</h3>
        <ul>
          <li><Link href={'/'}>Contact Us</Link></li>
          <li><Link href={'/'}>Shipping Information</Link></li>
        </ul>
      </FooterSection>

      <FooterSection>
        <h3>Connect With Us</h3>
        <SocialIcons>
          <StyledIcon><FacebookIcon /></StyledIcon>
          <StyledIcon><TwitterIcon /></StyledIcon>
          <StyledIcon><InstagramIcon /></StyledIcon>
        </SocialIcons>
      </FooterSection>
    </FooterContent>
  </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 30px;
  background-color: #1a1a1a;
  color: #fff;
  padding: 50px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
    border-bottom: 2px solid #fff; /* Add a border below the heading */
    padding-bottom: 10px;
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
  margin-top: 20px;

  a {
    font-size: 24px;
    color: #ccc;
    margin-right: 10px;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s ease-in-out;

    &:hover {
      color: #fff;
      transform: translateY(-5px);
    }
  }
`;

const StyledIcon = styled.div`
  /* Style for the social media icons (Facebook, Twitter, Instagram) */
  color: #ccc;
  font-size: 32px;
  margin-right: 15px;

  &:hover {
    color: #fff;
    transform: scale(1.2);
  }
`;