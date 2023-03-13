import React from "react";

import "../Styles/topMenu.css";

function TopMenu() {
  return (
    <div id="outside-container">
      <div id="container">
        <div id="menu-items">
          <div id="title">Harga Crypto dalam Rupiah Hari Ini</div>
          <div id="search-bar">Search Bar</div>
        </div>
        <div id="menu-items">
          <h1>Top Movers (24 Jam)</h1>
        </div>
        <div id="menu-items">
          <div id="top-six">
            <div id="top-part">
              <h1>Logo</h1>
              <h1>Brand</h1>
            </div>
            <div id="middle-part">
              <h1>Price</h1>
            </div>
            <div id="bottom-part">
              <h1>Percentage</h1>
            </div>
          </div>
        </div>
        <div id="menu-items">
          <div id="filter">
            <div id="filter-items">
              <button>Logo & Option</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
