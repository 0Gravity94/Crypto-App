import React from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Navbar() {
  return (
    // <div className="navbar">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex="0" className="btn lg:hidden"></label>
    //       <ul
    //         tabIndex="0"
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li tabIndex="0" className="px-5">
    //           <a>Fitur</a>
    //           <ul className="p-2 w-96">
    //             <li>
    //               <a>Harga Cryptocurrency</a>
    //             </li>
    //             <li>
    //               <a>Earn</a>
    //             </li>
    //             <li>
    //               <a>Biaya Transaksi</a>
    //             </li>
    //             <li>
    //               <a>OTC</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li tabIndex="0" className="px-5">
    //           <a>PTU</a>
    //         </li>
    //         <li tabIndex="0" className="px-5">
    //           <a>Edukasi</a>
    //           <ul className="p-2 w-96">
    //             <li>
    //               <a>Tentang</a>
    //             </li>
    //             <li>
    //               <a>Pintu Academy</a>
    //             </li>
    //             <li>
    //               <a>FAQ</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li tabIndex="0" className="px-5">
    //           <a>Ikuti Kami</a>
    //           <ul className="p-2 w-96">
    //             <li>
    //               <a>Telegram</a>
    //             </li>
    //             <li>
    //               <a>Twitter</a>
    //             </li>
    //             <li>
    //               <a>Instagram</a>
    //             </li>
    //             <li>
    //               <a>Youtube</a>
    //             </li>
    //             <li>
    //               <a>Facebook</a>
    //             </li>
    //             <li>
    //               <a>Discord</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li tabIndex="0" className="px-5">
    //           <a>Blog & News</a>
    //           <ul className="p-2 w-96">
    //             <li>
    //               <a>Pintu Blog</a>
    //             </li>
    //             <li>
    //               <a>Pintu News</a>
    //             </li>
    //             <li>
    //               <a>Pintu Press Kit</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li tabIndex="0" className="px-5">
    //           <a>Karir</a>
    //           <ul className="p-2 w-96">
    //             <li>
    //               <a>Karier</a>
    //             </li>
    //             <li>
    //               <a>Karier Engineering</a>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost normal-case text-xl">PINTU</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal">
    // <li tabIndex="0" className="pr-10">
    //   <a>Fitur</a>
    //   <ul className="p-2 w-96">
    //     <li>
    //       <a>Harga Cryptocurrency</a>
    //     </li>
    //     <li>
    //       <a>Earn</a>
    //     </li>
    //     <li>
    //       <a>Biaya Transaksi</a>
    //     </li>
    //     <li>
    //       <a>OTC</a>
    //     </li>
    //   </ul>
    // </li>
    // <li tabIndex="0" className="px-10">
    //   <a>PTU</a>
    // </li>
    // <li tabIndex="0" className="px-10">
    //   <a>Edukasi</a>
    //   <ul className="p-2 w-96">
    //     <li>
    //       <a>Tentang</a>
    //     </li>
    //     <li>
    //       <a>Pintu Academy</a>
    //     </li>
    //     <li>
    //       <a>FAQ</a>
    //     </li>
    //   </ul>
    // </li>
    // <li tabIndex="0" className="px-10">
    //   <a>Ikuti Kami</a>
    //   <ul className="p-2 w-96">
    //     <li>
    //       <a>Telegram</a>
    //     </li>
    //     <li>
    //       <a>Twitter</a>
    //     </li>
    //     <li>
    //       <a>Instagram</a>
    //     </li>
    //     <li>
    //       <a>Youtube</a>
    //     </li>
    //     <li>
    //       <a>Facebook</a>
    //     </li>
    //     <li>
    //       <a>Discord</a>
    //     </li>
    //   </ul>
    // </li>
    // <li tabIndex="0" className="px-10">
    //   <a>Blog & News</a>
    //   <ul className="p-2 w-96">
    //     <li>
    //       <a>Pintu Blog</a>
    //     </li>
    //     <li>
    //       <a>Pintu News</a>
    //     </li>
    //     <li>
    //       <a>Pintu Press Kit</a>
    //     </li>
    //   </ul>
    // </li>
    // <li tabIndex="0" className="px-10">
    //   <a>Karir</a>
    //   <ul className="p-2 w-96">
    //     <li>
    //       <a>Karier</a>
    //     </li>
    //     <li>
    //       <a>Karier Engineering</a>
    //     </li>
    //   </ul>
    // </li>
    //     </ul>
    //   </div>
    // </div>
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <div className="flex items-center p-2">
            <h1>PINTU</h1>
            {/* Navbar lg */}
            <div className="hidden lg:flex ml-56">
              <ul className="menu menu-horizontal">
                <li tabIndex="0" className="pr-10">
                  <a>Fitur</a>
                  <ul className="p-2 w-96">
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
                  <ul className="p-2 w-96">
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
                  <ul className="p-2 w-96">
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
                  <ul className="p-2 w-96">
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
                  <ul className="p-2 w-96">
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
          {/* Navbar small */}
          <div className="lg:hidden">
            <input type="checkbox" className="checkbox" />
            <div id="hamburger-line">
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
