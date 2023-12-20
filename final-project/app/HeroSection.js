import React  , {useState}from "react";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import watermelon from "../assert/watermelon.jpeg"; 
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { SelectUser } from "@/redux/auth/authSlice";
import { useSelector } from "react-redux";
function HeroSection() {
  const user = useSelector(SelectUser);
  return (
    <header className="bg-white p-8 " style={{ height: "100vh" }}>
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-4xl !leading-tight text-3xl"
          >
            Welcome to my watermelon Store!
          </Typography>
          <div className="flex gap-4" style={{ marginTop: 40 }}>
            <Link href="/Products">
              <StyledButton color="blue" size="lg" className="goToProducts">
                Go To Products
              </StyledButton>
            </Link>
            {
              user?(
                    <></>
              ):(

                <Link href="/LogIn">
                <StyledButton color="gray" size="lg" className="login">
                  Log in
                </StyledButton>
              </Link>

              )
            }
         
          </div>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          ></Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={watermelon}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default HeroSection;

const StyledButton = styled(Button)`

font-weight: bold;
height: 50px;
&.goToProducts {
    width: 130px;
    background-color: black;
  }

  &.login {
    color: black;
    width: 130px;

    background-color: white;
  }
`;
