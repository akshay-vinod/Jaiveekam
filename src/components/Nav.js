import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <a href="#">
              <h3>Jaiveekam</h3>
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
              <a href="#">Buy/Sell</a>
            </li>
            <li>
              <a href="#">Careers</a>
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
