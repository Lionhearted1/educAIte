"use client";
import React from "react";
import NavSelectComponent from "./NavSelectComponent";

const TopbarComponent = () => {
  return (
    <div className="topbar float-right">
      <div>
        <NavSelectComponent items={["Home", "Chat", "Logout"]} />
      </div>
    </div>
  );
};

export default TopbarComponent;
