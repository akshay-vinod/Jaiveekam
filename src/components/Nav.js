import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <header className={navbar ? "bb-color" : ""}>
        <nav className="nav-bar">
          <div className="logo">
            <a href="#">
              <p>Jaiveekam</p>
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink exact to="/" activeStyle={{ color: "#7dc580" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/aboutus" activeStyle={{ color: "#7dc580" }}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/people" activeStyle={{ color: "#7dc580" }}>
                People
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/blog" activeStyle={{ color: "#7dc580" }}>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Nav;
