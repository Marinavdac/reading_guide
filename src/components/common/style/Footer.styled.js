import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
  width: 100%;
  
display: flex;
display: inline-flex;
align-items: center;
justify-content: space-around;

li {
    list-style: none;
}

a {
    color: white;
    display:flex;
    align-items: right;
    justify-content: right;
    margin-right: 5px;
    height: 30px;
    width: 30px;
}

p {
  text-align: right;
}

img {
  margin-left: 1px;
}
`;
