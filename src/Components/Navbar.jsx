import React, { useState } from "react";
import "../Styles/navbar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFiturExpanded, setIsFiturExpanded] = useState(false);
  const [isEdukasiExpanded, setIsEdukasiExpanded] = useState(false);
  const [isIkutiExpanded, setIsIkutiExpanded] = useState(false);
  const [isBlogExpanded, setIsBlogExpanded] = useState(false);
  const [isKarierExpanded, setIsKarierExpanded] = useState(false);

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
        <svg
          width="75"
          height="16"
          viewBox="0 0 75 16"
          fill="#0B0A0A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.9728 0H33.4497C31.2197 0 29.4104 1.8093 29.4104 4.03929V15.3366H31.7877V4.03929C31.7877 3.11359 32.524 2.37729 33.4497 2.37729H37.9728C38.8985 2.37729 39.6348 3.11359 39.6348 4.03929V15.3366H42.0121V4.03929C42.0121 1.8093 40.2029 0 37.9728 0Z"
            fill="url(#___SVG_ID__8__0___)"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.03929 0.37854H9.74047C11.9705 0.37854 13.7798 2.18783 13.7798 4.41783V6.79512C13.7798 9.02511 11.9705 10.8344 9.74047 10.8344H4.03929C3.11359 10.8344 2.37729 11.5707 2.37729 12.4963V15.3365H0V4.41783C0 2.18783 1.8093 0.37854 4.03929 0.37854ZM9.74047 8.45712C10.6662 8.45712 11.4025 7.72082 11.4025 6.79512V4.41783C11.4025 3.49213 10.6662 2.75583 9.74047 2.75583H4.03929C3.11359 2.75583 2.37729 3.49213 2.37729 4.41783V6.79512C2.37729 7.72082 3.11359 8.45712 4.03929 8.45712H9.74047ZM19.7754 0.37854H22.1527V15.3365H19.7754V0.37854ZM72.6222 11.2972V0.37854H74.9992V11.2972C74.9992 13.5272 73.1902 15.3365 70.9599 15.3365H67.6359C65.4059 15.3365 63.5967 13.5272 63.5967 11.2972V0.37854H65.9739V11.2972C65.9739 12.2229 66.7103 12.9592 67.6359 12.9592H70.9599C71.8856 12.9592 72.6222 12.2229 72.6222 11.2972ZM47.3984 0.37854V2.75583H50.0492C50.9538 2.77693 51.6691 3.51323 51.6691 4.41783V15.3365H54.0464V4.41783C54.0464 3.51323 54.7617 2.77693 55.6663 2.75583H58.3171V0.37854H47.3984Z"
            fill="#0B0A0A"
          ></path>
          <defs>
            <linearGradient
              id="___SVG_ID__8__0___"
              x1="30.9591"
              y1="5.32458"
              x2="43.1934"
              y2="12.3659"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0A68F4"></stop>
              <stop offset="1" stop-color="#3DFFB9"></stop>
            </linearGradient>
          </defs>
        </svg>
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
                setIsFiturExpanded(!isFiturExpanded);
              }}
            >
              Fitur
            </a>
            <div
              className={
                isFiturExpanded
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
            <a
              href="#"
              onClick={() => {
                setIsEdukasiExpanded(!isEdukasiExpanded);
              }}
            >
              Edukasi
            </a>
            <div
              className={
                isEdukasiExpanded
                  ? "navigation-links expanded"
                  : "navigation-links"
              }
            >
              <ul>
                <li>
                  <a href="#">Tentang</a>
                </li>
                <li>
                  <a href="#">Pintu Academy</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setIsIkutiExpanded(!isIkutiExpanded);
              }}
            >
              Ikuti Kami
            </a>
            <div
              className={
                isIkutiExpanded
                  ? "navigation-links expanded"
                  : "navigation-links"
              }
            >
              <ul>
                <li>
                  <a href="#">Telegram</a>
                </li>
                <li>
                  <a href="#">twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setIsBlogExpanded(!isBlogExpanded);
              }}
            >
              Blog & News
            </a>
            <div
              className={
                isBlogExpanded
                  ? "navigation-links expanded"
                  : "navigation-links"
              }
            >
              <ul>
                <li>
                  <a href="#">Pintu Blog</a>
                </li>
                <li>
                  <a href="#">Pintu News</a>
                </li>
                <li>
                  <a href="#">Pintu Press Kit</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setIsKarierExpanded(!isKarierExpanded);
              }}
            >
              Karier
            </a>
            <div
              className={
                isKarierExpanded
                  ? "navigation-links expanded"
                  : "navigation-links"
              }
            >
              <ul>
                <li>
                  <a href="#">Karier</a>
                </li>
                <li>
                  <a href="#">Karier Engineering</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
