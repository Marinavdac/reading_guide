import { NavLink } from "react-router-dom";
import { StyledNavBar } from "./style";
import { FaSearch } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <NavLink to="/">
          <BsBookmarkStarFill />
        </NavLink>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/books"> Books </NavLink>
        <NavLink to="/links"> Links </NavLink>
        <NavLink to="/">
          <FaSearch />
        </NavLink>
      </StyledNavBar>
    </>
  );
};

export { NavBar };
