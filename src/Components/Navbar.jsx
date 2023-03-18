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
              Fitur{" "}
              <span className="bg-red-500 text-white text-sm font-semibold mx-1 px-2 py-0.5 rounded-md">
                Baru
              </span>
            </a>
            <div
              className={
                isFiturExpanded
                  ? "navigation-links expanded"
                  : "navigation-links"
              }
            >
              <ul className="lg:left-72">
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Pricechart</title>
                        <path
                          d="M1.5.637c.46 0 .833.373.833.834v13.333l.006.097c.048.415.4.736.828.736H16.5l.097.006a.833.833 0 01-.097 1.66H3.167L3.02 17.3a2.5 2.5 0 01-2.353-2.496V1.47l.005-.098A.833.833 0 011.5.637zm15 1.667c.427 0 .78.322.828.736l.005.097v4.167a.833.833 0 01-1.66.097l-.006-.097-.001-2.027-5.216 6.25c-.478.573-1.393.273-1.468-.439l-.005-.095v-1.68L4.64 14.504a.833.833 0 01-1.09.167l-.084-.062a.833.833 0 01-.168-1.09l.062-.084 5.81-6.954c.48-.573 1.393-.273 1.469.439l.005.095v1.678l3.94-4.724h-2.25a.833.833 0 01-.828-.736l-.006-.097c0-.427.322-.78.736-.827l.097-.006H16.5z"
                          fill="#171717"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Harga Cryptocurrency</h3>
                      <p>Pantau Harga Bitcoin dan aset crypto lainnya</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 19 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Safebox</title>
                        <g fill="#171717" fill-rule="evenodd">
                          <path d="M15.5.75a2.75 2.75 0 0 1 2.75 2.75v11a2.75 2.75 0 0 1-2.75 2.75h-.464l-.001.033a1 1 0 0 1-.993.884h-.75a1 1 0 0 1-.997-.916l-4.592-.001-.001.033a1 1 0 0 1-.994.884h-.75a1 1 0 0 1-.996-.916L4.5 17.25a2.75 2.75 0 0 1-2.75-2.75v-.458a.917.917 0 0 1-.917-.917v-.917c0-.506.41-.916.917-.916V6.708a.917.917 0 0 1-.917-.916v-.917c0-.506.41-.917.917-.917V3.5A2.75 2.75 0 0 1 4.5.75h11Zm0 1.833h-11a.917.917 0 0 0-.91.81l-.007.107v.458c.507 0 .917.41.917.917v.917c0 .506-.41.916-.917.916v4.584c.507 0 .917.41.917.916v.917c0 .506-.41.917-.917.917v.458c0 .47.354.858.81.91l.107.007h11c.47 0 .858-.354.91-.81l.007-.107v-11a.917.917 0 0 0-.81-.91l-.107-.007Z"></path>
                          <path d="M10 4.417a4.583 4.583 0 1 1 0 9.166 4.583 4.583 0 0 1 0-9.166Zm0 1.833a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z"></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h3>
                        Earn{" "}
                        <span className="bg-red-500 text-white text-sm font-semibold mx-1 px-2 py-0.5 rounded-md">
                          Baru
                        </span>
                      </h3>
                      <p>Simpan aset crypto, dapatkan bunga tiap jam</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Pricetag</title>
                        <g fill="none" fill-rule="evenodd">
                          <path fill="#FFF" d="M-492-193H948v964H-492z"></path>
                          <path
                            d="M14.393.708l1.05.002 1.182.011.964.023.474.02.509.03.202.02.167.02.132.022c.096.019.155.04.178.063.026.026.049.099.067.219l.021.166.017.21.014.256.013.468.005.368-.001.777-.02 1.303-.033 1.24-.075 2.189-.031.817c-.017.419-.191.815-.487 1.112l-8.735 8.735c-.651.65-1.707.65-2.358 0l-6.481-6.482a1.667 1.667 0 010-2.357l8.716-8.717A1.667 1.667 0 0111.04.735l2.198-.022 1.155-.005zm.853 1.668h-1.219l-1.612.01-1.353.016-8.717 8.717L8.827 17.6l8.735-8.735.046-1.2.07-2.104.028-1.182.015-1.226v-.542l-.003-.194-.512-.017-.755-.014-1.205-.01zm-.663 1.345a1.667 1.667 0 110 3.333 1.667 1.667 0 010-3.333z"
                            fill="#171717"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h3>Biaya Transaksi</h3>
                      <p>
                        Lihat biaya trading, tarik Rupiah, dan kirim aset crypto
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 21"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Support</title>
                        <path
                          d="M10 .97c4.145 0 7.517 3.28 7.517 7.312v.049h.05c1.266 0 2.306.96 2.39 2.17l.005.16v3.395c0 1.15-.86 2.107-1.987 2.296-.336 1.518-1.727 2.66-3.388 2.66l-1.385.002a2.551 2.551 0 01-.65 1.126 2.836 2.836 0 01-2.017.83c-1.545 0-2.803-1.211-2.803-2.7 0-1.49 1.246-2.702 2.777-2.702 1.267 0 2.338.829 2.67 1.958h1.408c.796 0 1.481-.47 1.778-1.14h-.683a.754.754 0 01-.764-.744V9.075c0-.411.342-.744.764-.744h.306v-.05c0-3.138-2.566-5.704-5.764-5.82L10 2.459c-3.302 0-5.988 2.612-5.988 5.824v.049h.306c.387 0 .707.28.758.643l.006.1v6.568c0 .41-.342.744-.764.744H2.433c-1.321 0-2.395-1.045-2.395-2.33v-3.395c0-1.285 1.074-2.33 2.395-2.33h.05v-.05c0-3.95 3.239-7.179 7.27-7.307zm.51 16.085c-.689 0-1.249.545-1.249 1.214 0 .658.584 1.214 1.274 1.214.348 0 .68-.135.912-.37.215-.22.326-.508.312-.81v-.034c0-.67-.56-1.214-1.25-1.214zM3.554 9.818H2.433c-.486 0-.867.37-.867.843v3.395c0 .473.38.843.867.843h1.12v-5.08zm14.013 0h-1.12v5.08h1.12c.486 0 .867-.37.867-.842v-3.395c0-.473-.38-.843-.867-.843z"
                          fill="#171717"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3>OTC</h3>
                      <p>
                        Layanan personal dengan harga khusus untuk transaksi
                        dengan jumlah besar
                      </p>
                    </div>
                  </a>
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
              <ul className="lg:right-72">
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Pintulogo</title>
                        <defs>
                          <linearGradient
                            x1="14.626%"
                            y1="0%"
                            x2="85.374%"
                            y2="100%"
                            id="prefix____a"
                          >
                            <stop stop-color="#11998E" offset="0%"></stop>
                            <stop stop-color="#1BD851" offset="71.466%"></stop>
                            <stop stop-color="#C5DE1C" offset="100%"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          d="M11.88 0c2.628.003 4.757 2.17 4.76 4.841V18h-3.108V4.842c-.001-.93-.741-1.683-1.653-1.684H6.261c-.912 0-1.652.754-1.652 1.683V18H1.5V4.841C1.503 2.17 3.632.003 6.261 0z"
                          transform="translate(-1 .97)"
                          fill="url(#prefix____a)"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Tentang</h3>
                      <p>Jelajahi dunia crypto bersama Pintu</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 21"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Idea</title>
                        <path
                          d="M8 .97a7.5 7.5 0 015.161 12.942l-.137.269-.252.5-.114.232-.205.43-.174.381c-.053.12-.101.231-.144.335-.167.406-.383.749-.648 1.03l-.002 3.048c0 .46-.373.834-.833.834H5.357a.833.833 0 01-.833-.834L4.522 17a4.116 4.116 0 01-.434-.747l-.094-.22c-.133-.33-.325-.731-.574-1.204l-.268-.498a36 36 0 00-.15-.266A7.5 7.5 0 018 .97zm1.818 16.683H6.19v1.65h3.628v-1.65zM8 2.637a5.833 5.833 0 00-4.058 10.024l.172.16.206.185.135.24c.438.777.77 1.428 1.002 1.964l.082.196c.083.205.168.371.254.504l.042.06h4.414l.074-.079c.077-.091.146-.2.21-.33l.061-.138.156-.363.186-.408.217-.454.247-.5.409-.8.205-.195A5.833 5.833 0 008 2.637zm2.508 6.705c.577 0 .979.572.784 1.115l-.796 2.243-.111.326a6.483 6.483 0 00-.29 1.402.833.833 0 01-1.657-.171 8.131 8.131 0 01.368-1.764l.518-1.484H6.677l.508 1.481c.177.519.31 1.096.402 1.734a.833.833 0 11-1.65.237 7.97 7.97 0 00-.33-1.433l-.887-2.58a.834.834 0 01.689-1.1l.099-.006h5z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Pintu Academy</h3>
                      <p>
                        Kumpulan artikel untuk bantu kamu memahami crypto dengan
                        lebih gampang
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 18 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Bubble</title>
                        <path
                          d="M9 .804a8.333 8.333 0 016.727 13.253l1.12 4.785-5.122-1.827A8.333 8.333 0 119 .804zM9 2.47a6.667 6.667 0 101.88 13.065l.3-.096.553-.192 2.794.997-.597-2.555.453-.618A6.667 6.667 0 009 2.47z"
                          fill="#171717"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3>FAQ</h3>
                      <p>
                        Informasi seputar crypto dan cara menggunakan aplikasi
                        Pintu
                      </p>
                    </div>
                  </a>
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
              <ul className="lg:right-36">
                <li>
                  <a href="#">
                    <div>
                      <h3>Telegram</h3>
                      <p>@pintuindonesia</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <h3>Twitter</h3>
                      <p>@pintuID</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <h3>Instagram</h3>
                      <p>@pintu_id</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <h3>Youtube</h3>
                      <p>Pintu - Aplikasi Jual Beli Cryptocurrency</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <h3>Facebook</h3>
                      <p>pintucrypto</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <h3>Discord</h3>
                      <p>pintuindonesia</p>
                    </div>
                  </a>
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
              <ul className="-right-9">
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#0B0A0A"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/Product/Blog</title>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18 3C19.5977 3 20.9037 4.24892 20.9949 5.82373L21 6V18L20.9949 18.1763C20.907 19.6928 19.6928 20.907 18.1763 20.9949L18 21H6C4.40232 21 3.09634 19.7511 3.00509 18.1763L3 18V6L3.00509 5.82373C3.09296 4.30725 4.30725 3.09296 5.82373 3.00509L6 3H18ZM6 4.99685L5.101 5.001L6 5L5.88338 5.00673C5.46255 5.05561 5.12142 5.36575 5.02641 5.77071L5.00673 5.88338L5 6V18C5 18.5128 5.38604 18.9355 5.88338 18.9933L6 19H18L18.1166 18.9933C18.614 18.9355 19 18.5128 19 18V6L18.9933 5.88338C18.94 5.4243 18.5757 5.06005 18.1166 5.00673L18 5H6V4.99685ZM14 15C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H8C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15H14ZM16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H16ZM16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H8C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7H16Z"
                          fill="#0B0A0A"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Pintu Blog</h3>
                      <p>
                        Kumpulan artikel crypto, keuangan, dan informasi terbaru
                        terkait Pintu.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/Product/News</title>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19 2C20.6569 2 22 3.34315 22 5V19L21.9949 19.1763C21.907 20.6928 20.6928 21.907 19.1763 21.9949L19 22H5C3.34315 22 2 20.6569 2 19V15C2 13.4023 3.24892 12.0963 4.82373 12.0051L5 12H6V5L6.00509 4.82373C6.09296 3.30725 7.30725 2.09296 8.82373 2.00509L9 2H19ZM4.999 13.997L4.155 14H5L4.88338 14.0067C4.46255 14.0556 4.12142 14.3657 4.02641 14.7707L4.00673 14.8834L4 15V19L4.00673 19.1166C4.06005 19.5757 4.4243 19.94 4.88338 19.9933L5 20H4.101L5 20.0032V20L5.11662 19.9933C5.53745 19.9444 5.87858 19.6343 5.97359 19.2293L5.99327 19.1166L6 19V14H5L4.999 13.997ZM9 3.99685L8.155 4H9L8.88338 4.00673C8.46255 4.05561 8.12142 4.36575 8.02641 4.77071L8.00673 4.88338L8 5V19L7.99491 19.1763C7.97826 19.4635 7.9212 19.7399 7.82933 19.9999L19 20L19.1166 19.9933C19.5757 19.94 19.94 19.5757 19.9933 19.1166L20 19V5L19.9933 4.88338C19.94 4.4243 19.5757 4.06005 19.1166 4.00673L19 4H9V3.99685ZM14.3333 10C14.8856 10 15.3333 10.4477 15.3333 11C15.3333 11.5523 14.8856 12 14.3333 12H11C10.4477 12 10 11.5523 10 11C10 10.4477 10.4477 10 11 10H14.3333ZM17 6C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H11C10.4477 8 10 7.55228 10 7C10 6.44772 10.4477 6 11 6H17Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Pintu News</h3>
                      <p>
                        Temukan update berita terkini tentang crypto,
                        blockchain, hingga NFT!
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/Product/PressKit</title>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19 5H5L5 16.15L8.40093 12.5877C8.94605 12.0323 9.83958 12.028 10.39 12.5782L11.1989 13.3869L16.0101 8.57574C16.5568 8.029 17.4432 8.029 17.99 8.57574L19 9.58579V5ZM19 12.4142L17 10.4142L12.6133 14.801L16.8134 19H19V12.4142ZM5 19V19.01L5.0096 19H13.9846L9.40422 14.4208L5.0096 19H5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                          fill="#0B0A0A"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Pintu Press Kit</h3>
                      <p>
                        Temukan logo resmi, foto, dan kumpulan press release
                        Pintu untuk materi promosi di sini.
                      </p>
                    </div>
                  </a>
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
              <ul className="right-20">
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Briefcase</title>
                        <g
                          transform="translate(1 1)"
                          stroke="#000"
                          stroke-width="2"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect y="3.6" width="18" height="12.6" rx="2"></rect>
                          <path d="M12.6 16.2V1.8A1.8 1.8 0 0010.8 0H7.2a1.8 1.8 0 00-1.8 1.8v14.4"></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h3>
                        Karier{" "}
                        <span className="bg-blue-600 text-white text-sm font-semibold mx-1 px-2 py-1 rounded-md">
                          We're Hiring!
                        </span>
                      </h3>
                      <p>Temukan pekerjaan impianmu di sini.</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div id="logo-items">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 21 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Icons/GUI/Code</title>
                        <g
                          stroke="#000"
                          stroke-width="2"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M14 13l6-6-6-6M7 13L1 7l6-6"></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h3>
                        Karier Engineering{" "}
                        <span className="bg-blue-600 text-white text-sm font-semibold mx-1 px-2 py-1 rounded-md">
                          We're Hiring!
                        </span>
                      </h3>
                      <p>
                        Bergabung dengan tim engineering kami menciptakan
                        platform blockchain yang canggih.
                      </p>
                    </div>
                  </a>
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
