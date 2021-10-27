import styled from "styled-components";
import { Footer } from "./Footer";
import { NavBar } from "./index";

export const StyledPageLayout = styled.div`
background-color: white;
height: 100vh;
`;


const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <StyledPageLayout>{children}</StyledPageLayout>
      <Footer />
    </>
  );
};

export { PageLayout };
