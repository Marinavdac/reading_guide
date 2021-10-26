import React from "react";
import { Link } from "react-router-dom";
import { StyledFlex } from "components/common";

const NotFound = () => {
  return (
    <>
      <StyledFlex>
        <h1>404: Not Found </h1>
        <img
          src="https://media2.giphy.com/media/9J7tdYltWyXIY/giphy.gif?cid=790b7611211e9a657d235aa25ecf32a9dc061b929e91f64e&rid=giphy.gif&ct=g"
          alt="not found"
        />

        <Link to="/">Home</Link>
      </StyledFlex>
    </>
  );
};

export default NotFound;
