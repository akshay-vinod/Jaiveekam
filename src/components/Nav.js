import React, { useState } from "react";
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us </a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Nav;
