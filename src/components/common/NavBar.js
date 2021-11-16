import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { StyledNavBar } from "./style";
import { FaSearch } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";

const NavMenu = styled(ReactRouterLink)`
font-weight: ${props => props.isActive ? 'bold' : 'normal'};
text-decoration: ${props => props.isActive ? 'underline dotted' : 'none'};
`; 


const NavBar = () => {
  
  const {pathname} = useLocation();

  return (
    <>
      <StyledNavBar>
        <NavMenu to="/">
          <BsBookmarkStarFill />
        </NavMenu>
        <NavMenu to="/" isActive={pathname === '/'}>
          Home
        </NavMenu>
        <NavMenu to="/about" isActive={pathname === '/about'}> About </NavMenu>
        <NavMenu to="/books" isActive={pathname === '/books'}> Books </NavMenu>
        <NavMenu to="/links" isActive={pathname === '/links'}> Links </NavMenu>
        <NavMenu to="/">
          <FaSearch />
        </NavMenu>
      </StyledNavBar>
    </>
  );
};

export { NavBar };
