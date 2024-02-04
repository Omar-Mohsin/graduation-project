"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "../../assert/watermelon.png";
import { useSelector, useDispatch } from "react-redux";
import { SelectUser, removeUser } from "@/redux/auth/authSlice";
import "./nav.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogOut = () => {
    dispatch(removeUser());
  };

  return (
    <nav className="bg-black flex justify-between items-center p-4 md:p-6 h-16">
      <Link href="/">
        <div className="logo-container hover:translate-y transition-transform duration-500">
          <Image src={Logo1} width={60} height={60} alt="watermelon logo" />
        </div>
      </Link>
      <div className="hidden md:flex gap-6">
        <NavLink href="/Products">Products</NavLink>
        <NavLink href="/Cart">Cart</NavLink>

        {user && (
          <>
            <NavLink href="/Orders">Orders</NavLink>
            <NavLink href="/Fav">Fav</NavLink>
          </>
        )}
        <NavLink href="/Chat">Chat</NavLink>
        <NavLink href="/Statistics">Statistics</NavLink>
        <NavLink href="/Questions">Questions</NavLink>
        <NavLink href="/Team">Team</NavLink>
        <NavLink href="/About">About</NavLink>

        {user ? (
          <button
            onClick={handleLogOut}
            className="text-white hover:text-gray-300"
          >
            Log Out
          </button>
        ) : (
          <NavLink href="/LogIn">Log In</NavLink>
        )}
      </div>
      <button className="md:hidden text-white" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "Close" : "Menu"}
      </button>
      {isMobileMenuOpen && (
  <div className="md:hidden flex flex-col bg-black text-white p-4 z-50 absolute items-center top-16 left-0 w-full shadow-lg">
    <Link href="/Products" className="menu-item text-xl mb-4">
      Products
    </Link>
    <Link href="/Cart" className="menu-item text-xl mb-4">
    Cart
    </Link>
    <Link href="/Chat" className="menu-item text-xl mb-4">
      Chat
    </Link>
    {user && (
     <>
    <Link href="/Fav" className="menu-item text-xl mb-4">
    Fav
    </Link>
    <Link href="/Orders" className="menu-item text-xl mb-4">
    Orders
    </Link>
    </>
    )}
    
    <Link href="/Statistics" className="menu-item text-xl  mb-4">
      Statistics
    </Link>
    <Link href="/Questions" className="menu-item text-xl mb-4">
      Questions
    </Link>
    <Link href="/Team" className="menu-item text-xl mb-4">
       Team
      </Link>
    <Link href="/About" className="menu-item text-xl mb-4">
      About
    </Link>
    {user ? (
     
      <Link href="/" onClick={handleLogOut} className="menu-item text-xl  ">
        Log Out
      </Link>
    
    ) : (
      <Link href="/LogIn" className="menu-item text-xl">
        Log In
      </Link>
    )}
  </div>
)}

    </nav>
  );
}

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-white hover:text-gray-300">
    {children}
  </Link>
);

export default Navbar;
