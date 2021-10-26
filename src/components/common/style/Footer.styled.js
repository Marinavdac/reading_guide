import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
  padding: 2px;

  img {
    margin: 2px;
    align-self: bottom;
    size: 60px;
  }

  ul {
    list-style-type: none;
    padding: 5px;
  }

  ul li {
    margin-bottom: 20px;
    padding: 5px;
  }

  p {
    text-align: right;
  }

  @media (max-width: 764px) {
    text-align: center;

    ul {
      padding: 3px;
      display: flex;
      flex-direction: column;
      align-self: left;
    }

    p {
      text-align: center;
    }
  }
`;
