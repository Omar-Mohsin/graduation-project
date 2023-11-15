"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
function Navbar() {
  const user = useSelector(SelectUser);
  return (
    <NavbarContainer>
      <Link href="/">
        <Logo>Your Logo</Logo>
      </Link>
      <NavLinks>
        <Link href="/Team">
          <NavLink>Team</NavLink>
        </Link>

        <Link href="/About">
          <NavLink>About</NavLink>
        </Link>
        <Link href="/Orders">
          <NavLink>Orders</NavLink>
        </Link>
        <Link href="/Cart">
          <NavLink>Cart</NavLink>
        </Link>

        {user ? (
          
            <NavLink>signout</NavLink>
     
        ) : (
          <Link href="/SignIn">
            <NavLink>Sign In</NavLink>
          </Link>
        )}
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 70px;
  top: 0;
  width: 100%;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease-in-out;
  font-size: 18px;
  &:hover::before {
    left: 0;
    width: 100%;
    background-color: white;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: transparent;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
`;
