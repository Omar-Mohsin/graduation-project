"use client";
import React from "react";

import HeroSection from "./HeroSection";
import Contact from "./Contact";
import { Footer } from "@/components";
import { Fragment } from "react";
const Page = () => {
  return (
    <Fragment>  
     <HeroSection/>
     <Contact/>
     <Footer/>

    </Fragment>
  );
};

export default React.memo(Page);
