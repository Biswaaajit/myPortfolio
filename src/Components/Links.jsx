import { NavLink } from "react-router-dom";

function Links({ children, to }) {
  return (
    <NavLink
      className="relative h-fit overflow-y-hidden px-2 uppercase tracking-tight"
      to={to}
    >
      <p className="aboutLink from-purple-600 to-purple-300 text-6xl font-light tracking-tight text-slate-100 transition-none hover:bg-gradient-to-r hover:bg-clip-text hover:font-semibold hover:tracking-wide hover:text-transparent hover:transition-all md:text-7xl">
        {children}
      </p>
    </NavLink>
  );
}

export default Links;
