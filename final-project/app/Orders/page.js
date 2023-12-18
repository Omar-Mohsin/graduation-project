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
        const response = await fetch(`https://watermelon1.pythonanywhere.com/orders/api/user-orders/${user.id}/`);
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

  console.log(orders);

  const sortedOrders = [...orders].sort((a, b) => b.order_id - a.order_id);

  return (
    <PageContainer>
    {user ? (
      <OrderContainer>
        {orders.length > 0 ? (
          sortedOrders.map((order) => (
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
          <LoadingMessage>Loading your orders...</LoadingMessage>
        )}
      </OrderContainer>
    ) : (
      <p>
        You are not authorized to access this page{" "}
        <StyledLink href={"/LogIn"}>please sign in</StyledLink>
      </p>
    )}
  </PageContainer>
  );
}
export default Page;

const PageContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
`;

const OrderCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: left;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

const LoadingMessage = styled.p`
  color: #3498db;
  font-size: 18px;
  margin: 20px;
`;

const StyledLink = styled(Link)`
  color: #3498db;
  text-decoration: underline;
  cursor: pointer;
`;
