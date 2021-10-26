import { NavBar } from "./index";
import { StyledPageLayout } from "./style";

const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <StyledPageLayout>{children}</StyledPageLayout>
    </>
  );
};

export { PageLayout };
