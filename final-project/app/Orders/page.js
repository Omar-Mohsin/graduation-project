'use client';
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useState, useEffect } from "react";

function Page() {
  const user = useSelector(SelectUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/orders/api/user-orders/${user.id}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setOrders(jsonData.orders || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user?.id]);

  return (
    <PageContainer>
      {user ? (
        <OrderContainer>
          {orders.length > 0 ? (
            orders.map((order) => (
              <OrderCard key={order.order_id}>
                <h1>Order ID: {order.order_id}</h1>
                <p>Total Price: ${order.total_price.toFixed(2)}</p>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>{item.name} - Quantity: {item.quantity}</li>
                  ))}
                </ul>
              </OrderCard>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </OrderContainer>
      ) : (
        <p>
          You are not authorized to access this page{" "}
          <Link href={"/LogIn"} style={{ color: "blue", cursor: "pointer" }}>
            please sign in
          </Link>
        </p>
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div`
margin-top:100px;
display:flex;
justify-content: center; /* Center the cards in the container */

`;

const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the cards in the container */
  gap: 20px;
  max-width: 800px;
`;

const OrderCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: left;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    margin-bottom: 12px;
    color: #666;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 6px;
    color: #888;
  }
`;

export default Page;
