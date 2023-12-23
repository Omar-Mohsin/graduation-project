"use client";
import React from "react";

import HeroSection from "./HeroSection";
import Contact from "./Contact";
import { Footer } from "@/components";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";  
const Page = () => {
  const user = useSelector(SelectUser); 
  console.log(user);
  return (
    <Fragment>  
     <HeroSection/>
     <Contact/>
     <Footer/>

    </Fragment>
  );
};

export default React.memo(Page);
