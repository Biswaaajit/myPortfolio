import { NavLink } from "react-router-dom";

function Links({ children, to }) {
  return (
    <NavLink
      className="aboutLink h-fit rounded-md from-purple-600 to-purple-300 bg-clip-text px-2 py-2 text-[10vw] font-light uppercase tracking-tight transition-all hover:bg-gradient-to-r hover:font-semibold hover:tracking-wide hover:text-transparent md:text-7xl md:hover:px-20"
      to={to}
    >
      <p>{children}</p>
    </NavLink>
  );
}

export default Links;
