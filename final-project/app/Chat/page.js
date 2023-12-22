'use client';
import React from "react";
import ActionProvider from "@/chatbotfiles/ActionProvider";
import MessageParser from "@/chatbotfiles/MessageParser";
import config from "@/chatbotfiles/config";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import styled from "styled-components";

function Page() {
  return (
    <Container>
      <div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </Container>
  );
}

export default React.memo(Page);

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;

`