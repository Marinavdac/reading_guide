import { StyledFooter } from "./style";
import SocialIcons from "./SocialIcons";
import logo from "../imgs/favicon.svg";
import { Container } from "./Container";

const Footer = function () {
  return (
    <>
      <Container footer>
        <StyledFooter>
          <a>
            <img src={logo} alt="" />
          </a>
          <ul>
            <li>
              <h3>
                For reading books and reading about reading books can be loads
                of fun
              </h3>
            </li>
          </ul>
          <SocialIcons />
        </StyledFooter>
      </Container>
    </>
  );
};

export { Footer };
