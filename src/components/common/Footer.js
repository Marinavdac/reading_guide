import { StyledFlex, StyledFooter } from './index';
import SocialIcons from "./SocialIcons";

const Footer = function() {
  return (
    <StyledFooter>
      <StyledFlex>
        <img src='/src/components/imgs/favicon.svg' alt ='' />

        <div>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente cum pariatur quo tempore voluptatibus!</li>
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
          <SocialIcons />
        </div>
        <p>&copy; 2021 PriMa. All Rights reserved</p>
    
      </StyledFlex>
    </StyledFooter>
  );
}

export { Footer }