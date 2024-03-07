"use client";
import React from "react";
import NavSelectComponent from "./NavSelectComponent";

const TopbarComponent = () => {
  return (
    <div className="topbar float-right">
      {/* <div className="toggle">
        <ion-icon name="menu-outline"></ion-icon>
      </div> */}
      {/* <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <ion-icon name="search-sharp"></ion-icon>
        </label>
      </div> */}
      <div>
        <NavSelectComponent items={["Home", "Chat", "Logout"]} />
      </div>
    </div>
  );
};

export default TopbarComponent;
