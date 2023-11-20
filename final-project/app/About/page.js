"use client";
import React from "react";
import styled from "styled-components";

function AboutPage() {
  return (
    <AboutContainer>
      <AboutText>
        We are proud to be a business that is committed to social
        responsibility. We believe that it is important to use our business to
        make a positive impact on the world. That is why we are committed to
        donating a portion of our profits to support the Palestinian people.
        Palestine is a country that has been struggling for decades. The
        Palestinian people have been displaced from their homes, denied their
        basic rights, and subjected to violence and oppression. We believe that
        it is important to stand in solidarity with the Palestinian people and
        to help them build a better future. We are committed to using our
        business to make a difference in the lives of the Palestinian people. We
        donate a portion of our profits to support a variety of organizations
        that are working to help the Palestinian people. We also work to promote
        awareness of the plight of the Palestinian people and to encourage
        others to take action to support them. We believe that every business
        has a responsibility to use its resources to make a positive impact on
        the world. We are proud to be a business that is committed to helping
        the Palestinian people. How Your Purchases Help When you make a purchase
        from our website, you are not only buying a product, you are also making
        a contribution to the Palestinian people. We are grateful for your
        support. Here are some of the ways that your purchases help the
        Palestinian people: Your purchases provide financial support to
        organizations that are working to help the Palestinian people. Your
        purchases help to raise awareness of the plight of the Palestinian
        people. Your purchases encourage others to take action to support the
        Palestinian people. We thank you for your support of our business and
        our commitment to helping the Palestinian people. Together, we can make
        a difference.
      </AboutText>
    </AboutContainer>
  );
}

export default AboutPage;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
  background-color: #f9f9f9;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.section`
 max-width: 600px;
 font-size: 1.1rem;
`
