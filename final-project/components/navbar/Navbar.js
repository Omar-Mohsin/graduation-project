'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  background-color: #1a1a1a;
  border: 1px solid #434343;
`;

const NavbarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;

  img {
    height: 2rem;
    margin-right: 0.5rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    white-space: nowrap;
  }
`;

const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  font-size: 1rem;
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ light }) => (light ? '#434343' : '#f5f5f5')};
    color: white;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: opacity 0.3s, transform 0.3s;

  @media (min-width: 768px) {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavItem = styled.li`
  margin-top: 10px;
  margin-bottom: 1rem;
  display: block;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: ${({ light }) => (light ? 'white' : '#333')};
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ light }) => (light ? '#434343' : '#f5f5f5')};
    color: ${({ light }) => (light ? 'white' : '#007bff')};
  }
`;

// Updated component for the item with space-between alignment
const LeftItem = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: transform 0.3s;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  justify-content: space-between; /* Added justify-content */
  display: flex; /* Added display: flex */
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper light>
      <NavbarContainer>
        <LogoLink href="/" light>
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" />
          <span>jollychic</span>
        </LogoLink>
        <MenuButton light onClick={toggleMenu}>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </MenuButton>
        <NavMenu isOpen={isOpen}>
          <ul>
            <NavItem>
              <NavLink href="/About" light>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Team" light>
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Orders" light>
                Orders
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Cart" light>
                Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/SignIn" light>
                Login
              </NavLink>
            </NavItem>
          </ul>
        </NavMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
