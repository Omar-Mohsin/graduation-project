"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import { SelectAllFavorites } from "@/redux/Fav/favSlice";
import { fetchfavorites } from "@/redux/Fav/favSlice";
import Link from "next/link";
import styled from "styled-components";

function Page() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(SelectUser);
  const favorites = useSelector(SelectAllFavorites);

  useEffect(() => {
    dispatch(fetchfavorites());
  }, []);

  const removeFaviorite = async (id) => {
    try {
      const response = await fetch(`/api/removeFavorite/${id}`, {
        // change the api url
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to remove favorite");
      }
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } catch (error) {
      console.error("Error removing favorite:", error.message);
    }
  };
  return (
    <Container>
      {user ? ( // change to    {user ? (
        <>
          {favorites.length === 0 ? ( //favorites.length === 0
              <div className="flex flex-col justify-center items-center h-screen w-full">
              <h1 className="text-3xl font-bold">No Favorites</h1>
              <Link href="/Products">
                <p style={{ color: 'blue', marginTop: '10px', cursor: 'pointer' }}>
                  Please add some
                </p>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites?.map((item) => (
                <ProductCard key={item.id}>
                  <ProductImage>
                    <img src={item.image} alt="product image" />
                  </ProductImage>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.price}</ProductPrice>
                  <RemoveFromFavButton onClick={removeFaviorite}>
                    Remove to fav
                  </RemoveFromFavButton>
                </ProductCard>
              ))}
              {showSuccessMessage && (
                <SuccessMessage>Item removed successfully!</SuccessMessage>
              )}
            </div>
          )}
        </>
      ) : (
        <UnauthorizedContainer>
          <UnauthorizedMessage>
            <p>
              You are not authorized to this page{" "}
              <Link
                href={"/LogIn"}
                style={{ color: "blue", cursor: "pointer" }}
              >
                please sign in
              </Link>
            </p>
          </UnauthorizedMessage>
        </UnauthorizedContainer>
      )}
    </Container>
  );
}

export default Page;

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-top: 10px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  transform-style: preserve-3d;
  backface-visibility: hidden;
`;
const ProductImage = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 150%;
  overflow: hidden;
  border-radius: 0.375rem;

  img {
    object-fit: cover;
    width: "100%";
    height: "100%";
    padding: 50px;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  color: #666;
  font-size: 1.25rem;
  margin-top: 0.5rem;
`;
const RemoveFromFavButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 99px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  font-weight: 600;
  background-color: red;
  color: #fff;

  &:hover {
    transform: scale(1.1);
  }
`;

const SuccessMessage = styled.div`
  background-color: red;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  z-index: 999;
`;

const UnauthorizedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const UnauthorizedMessage = styled.div`
  text-align: center;
`;
