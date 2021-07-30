import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="bg-blue-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 text-white hover:text-blue-300 text-4xl font-bold cursive tracking-widest"
          >
            SARY JAMIE
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-300"
            activeClassName="text-yellow-300 bg-blue-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-300"
            activeClassName="text-yellow-300 bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-300"
            activeClassName="text-yellow-300 bg-blue-700"
          >
            About Me
          </NavLink>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default NavBar;
