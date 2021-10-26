import { Flex, StyledFooter } from "./style";
import SocialIcons from "./SocialIcons";
import logo from "../imgs/favicon.svg";
import { Container } from "./Container";

const Footer = function () {
  return (
    <>
      <StyledFooter>
        <Container>
          <Flex>
            <ul>
              <li>
                <img src={logo} alt="" />
                Reading books and
              </li>
              <li>+55-123-456789</li>
              <li>email@example.com</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
            </Flex>
          <SocialIcons />

          <p>&copy; 2021 PriMa. All Rights reserved</p>
          
        </Container>
      </StyledFooter>
    </>
  );
};

export { Footer };
