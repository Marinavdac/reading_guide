import styled from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  li {
    list-style: none;
  }

  svg {
    height: 30px;
    width: 2500px;
  }

  a {
    text-align: bottom;
    font-size: 20px;
    border: 1px solid #fff;
    border-radius: 50%50%;
    color: black;
    display: inline-flex;
    justify-content: space-around;
    padding: 25px;
    margin-left: 0;
    height: 80px;
    width: 84px;
    text-decoration: none;
  }
`;

export { StyledNavBar };
