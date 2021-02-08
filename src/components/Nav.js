import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="alignitems">
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
