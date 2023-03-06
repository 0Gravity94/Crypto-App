import React from "react";
import "../Styles/navbar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Navbar() {
  return (
    <nav className="navbar">
      <span id="navbar-toggle">
        <RxHamburgerMenu />
      </span>
      <a href="#" id="logo">
        PINTU
      </a>
      <ul className="main-nav" id="nav-menu">
        <li>
          <a href="#" id="nav-links">
            Fitur
          </a>
        </li>
        <li>
          <a href="#" id="nav-links">
            PTU
          </a>
        </li>
        <li>
          <a href="#" id="nav-links">
            Edukasi
          </a>
        </li>
        <li>
          <a href="#" id="nav-links">
            Ikuti Kami
          </a>
        </li>
        <li>
          <a href="#" id="nav-links">
            Blog & News
          </a>
        </li>
        <li>
          <a href="#" id="nav-links">
            Karier
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
