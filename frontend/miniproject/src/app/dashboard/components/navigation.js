import React from "react";
import "./components.css";
import Image from 'next/image';
import upload from './images/upload.png';
function Navigation() {
  return (
  
      <div className="navigation">
      <ul>
        <li>
          <a>
           
            <span className="title">EducAite</span>
          </a>
        </li>
        <li>
          <a>
           
            <span class="title">Home</span>
          </a>
        </li>
        <li>
          <a>
           
           <span class="title">Upload</span>
          </a>
        </li>
        <li>
          <a>
            
            <span class="title">Chat</span>
          </a>
        </li>
        <li>
          <a>
           
            <span class="title">Help</span>
          </a>
        </li>
        <li>
          <a>
            
            <span class="title">Settings</span>
          </a>
        </li>
        <li>
          <a>
           
            <span class="title">Password</span>
          </a>
        </li>
        <li>
          <a>
            
            <span class="title">Sign Out</span>
          </a>
        </li>
        {/* Add other navigation items */}
      </ul>
    </div>
    
  );
}

export default Navigation;
