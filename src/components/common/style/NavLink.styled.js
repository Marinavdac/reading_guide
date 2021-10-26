import { NavLink } from "react-router-dom";





const StyledNavlink = () => {
  return (
    <>
      <NavLink exact to="/">
        Home{" "}
      </NavLink>
      <NavLink to="/about"> About </NavLink>
      <NavLink to="/books"> Books </NavLink>
      <NavLink to="/links"> Links </NavLink>
    </>
  );
};

export { StyledNavlink };
