import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn lg:hidden"></label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">PINTU</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li tabIndex="0" className="pr-10">
            <a>Fitur</a>
            <ul className="p-2">
              <li>
                <a>Harga Cryptocurrency</a>
              </li>
              <li>
                <a>Earn</a>
              </li>
              <li>
                <a>Biaya Transaksi</a>
              </li>
              <li>
                <a>OTC</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0" className="px-10">
            <a>PTU</a>
          </li>
          <li tabIndex="0" className="px-10">
            <a>Edukasi</a>
            <ul className="p-2">
              <li>
                <a>Tentang</a>
              </li>
              <li>
                <a>Pintu Academy</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0" className="px-10">
            <a>Ikuti Kami</a>
            <ul className="p-2">
              <li>
                <a>Telegram</a>
              </li>
              <li>
                <a>Twitter</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>Youtube</a>
              </li>
              <li>
                <a>Facebook</a>
              </li>
              <li>
                <a>Discord</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0" className="px-10">
            <a>Blog & News</a>
            <ul className="p-2">
              <li>
                <a>Pintu Blog</a>
              </li>
              <li>
                <a>Pintu News</a>
              </li>
              <li>
                <a>Pintu Press Kit</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0" className="px-10">
            <a>Karir</a>
            <ul className="p-2">
              <li>
                <a>Karier</a>
              </li>
              <li>
                <a>Karier Engineering</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
