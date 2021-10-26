import { Container } from "components/common/Container";

import React from "react";
import styled from "styled-components";
import bkgImg from "../imgs/cover-lg.jpg";

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.75;
  z-index: 1;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Image src={bkgImg} alt="books-large" />
      </Container>
    </>
  );
};

export default Home;
