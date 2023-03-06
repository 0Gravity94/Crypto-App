import React from "react";
import "../Styles/navbar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Navbar() {
  return (
    // <nav className="navbar">
    //   <span id="navbar-toggle">
    //     <RxHamburgerMenu />
    //   </span>
    //   <a href="#" id="logo">
    //     PINTU
    //   </a>
    //   <ul className="main-nav" id="nav-menu">
    //     <li>
    //       <a href="#" id="nav-links">
    //         Fitur
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" id="nav-links">
    //         PTU
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" id="nav-links">
    //         Edukasi
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" id="nav-links">
    //         Ikuti Kami
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" id="nav-links">
    //         Blog & News
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" id="nav-links">
    //         Karier
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
    <nav className="navigation">
      <a href="#" className="logo">
        PINTU
      </a>
      <button className="hamburger">
        <RxHamburgerMenu />
      </button>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="#">Fitur</a>
          </li>
          <li>
            <a href="#">PTU</a>
          </li>
          <li>
            <a href="#">Edukasi</a>
          </li>
          <li>
            <a href="#">Ikuti Kami</a>
          </li>
          <li>
            <a href="#">Blog & News</a>
          </li>
          <li>
            <a href="#">Karier</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
