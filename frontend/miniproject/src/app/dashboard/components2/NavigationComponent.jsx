import React from "react";
import "./dashboard.css";

const NavigationComponent = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a>
            <span className="icon">
              <ion-icon name="barbell-outline"></ion-icon>
            </span>
            <span className="title">EducAite</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon">
              <ion-icon name="home"></ion-icon>
            </span>
            <span class="title">Home</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon">
              <ion-icon name="people"></ion-icon>
            </span>
            <span class="title">Upload</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span class="title">Chat</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon">
              <ion-icon name="information-circle-outline"></ion-icon>
            </span>
            <span class="title">Help</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span class="title">Settings</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <span class="title">Password</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span class="title">Sign Out</span>
          </a>
        </li>
        {/* Add other navigation items */}
      </ul>
    </div>
  );
};

export default NavigationComponent;
