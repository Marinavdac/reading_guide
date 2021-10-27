import { Container } from "components/common/Container";

import React from "react";
import styled, { keyframes } from "styled-components";
import bkgImg from "../imgs/cover-lg.jpg";

const MainBackground = styled.div`
  background-image: url(${bkgImg});
  height: 98vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
  filter: blur(2px);
`;


const TextArea = styled.h1`
  color: black;
  font-size: 75px;
  display: inline-block;
  position: absolute;
  top: 40%;
  left: 30%;
  

  &:hover {
    cursor: pointer;
    transform: scale(1.1); 
  }

`;

const Home = () => {
  return (
    <>
      <Container>
        <MainBackground alt="books-large" />

        <TextArea> Reading Guide </TextArea>
      </Container>
    </>
  );
};

export default Home;
