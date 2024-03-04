import React from 'react';
import "./dashboard.css";

const TopbarComponent = () => {
  return (
    <div className="topbar">
      <div className="toggle">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <ion-icon name="search-sharp"></ion-icon>
        </label>
      </div>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=943&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User" />
      </div>
    </div>
  );
};

export default TopbarComponent;
