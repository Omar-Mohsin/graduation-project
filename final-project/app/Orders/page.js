'use client'
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useState , useEffect } from "react";
function page() {
  const user = useSelector(SelectUser);
  return(
    
    <PageContainer>
    
    { 

    user ? (

      <></>
    ) : (

      <>
      <p>You are not athorize to this page <Link href={'/SignIn'} style={{color : 'blue', cursor : 'pointer'}}>  please sign in</Link></p>

      </>
    )

  }
  </PageContainer>
  )
  ;
}

export default page;
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4; 
  height :   100vh;  
`;