"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { SelectUser, removeUser } from "@/redux/auth/authSlice";
import Image from "next/image";
import Logo1 from "../../assert/watermelon.png";
function Navbar() {
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeUser());
  };
  return (
    <NavbarContainer>
      <Link href="/">
        <Logo>
          <Image src={Logo1} width={60} height={60} alt="watermelon logo" />
        </Logo>
      </Link>
      <NavLinks>
        <Link href="/Team">
          <NavLink>Team</NavLink>
        </Link>

        <Link href="/About">
          <NavLink>About</NavLink>
        </Link>
        <Link href="/Chat">
          <NavLink>Chat</NavLink>
        </Link>
        <Link href="/Products">
          <NavLink>Products</NavLink>
        </Link>
        <Link href="/Statistics">
          <NavLink>Statistics</NavLink>
        </Link>

        <Link href="/Questions">
          <NavLink>Questions</NavLink>
        </Link>

        {user ? (
          <>
            <Link href="/Orders">
              <NavLink>Orders</NavLink>
            </Link>
            <Link href="/Fav">
              <NavLink>Fav</NavLink>
            </Link>
          </>
        ) : (
          <></>
        )}

        <Link href="/Cart">
          <NavLink>Cart</NavLink>
        </Link>

        {user ? (
          <Link href="/">
            <NavLink>
              <button onClick={handleLogOut}>Log Out </button>
            </NavLink>
          </Link>
        ) : (
          <Link href="/LogIn">
            <NavLink>Log In</NavLink>
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
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: #fff;
    transform: translateY(-5px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.p`
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
