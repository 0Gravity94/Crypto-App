import React, { useState } from "react";
import "../Styles/navbar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNavItemExpanded, setIsNavItemExpanded] = useState(false);

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
      <button
        className="hamburger"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <RxHamburgerMenu />
      </button>
      <div
        className={isExpanded ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                setIsNavItemExpanded(!isNavItemExpanded);
              }}
            >
              Fitur
            </a>
            <div
              className={
                isNavItemExpanded
                  ? "navigation-links expanded"
                  : "navigation-links"
              }
            >
              <ul>
                <li>
                  <a href="#">Harga Cryptocurrency</a>
                </li>
                <li>
                  <a href="#">Earn</a>
                </li>
                <li>
                  <a href="#">Biaya Transaksi</a>
                </li>
                <li>
                  <a href="#">OTC</a>
                </li>
              </ul>
            </div>
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
