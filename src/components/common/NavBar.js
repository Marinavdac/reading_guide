import { NavLink } from 'react-router-dom';
import { StyledNavBar } from './style';


const NavBar = () => {
    return (
      <>
      <StyledNavBar>
        <NavLink exact to="/">
          Home{" "}
        </NavLink>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/books"> Books </NavLink>
        <NavLink to="/links"> Links </NavLink>
        </StyledNavBar>
      </>
    );
  };
  
  export { NavBar };
  