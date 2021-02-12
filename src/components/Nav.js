import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <header>
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
