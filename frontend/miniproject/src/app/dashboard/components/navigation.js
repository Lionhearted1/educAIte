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
           
            <span className="title">Home</span>
          </a>
        </li>
        <li>
          <a>
           
           <span className="title">Upload</span>
          </a>
        </li>
        <li>
          <a>
            
            <span className="title">Chat</span>
          </a>
        </li>
        <li>
          <a>
           
            <span className="title">Help</span>
          </a>
        </li>
        <li>
          <a>
            
            <span className="title">Settings</span>
          </a>
        </li>
        <li>
          <a>
           
            <span className="title">Password</span>
          </a>
        </li>
        <li>
          <a>
            
            <span className="title">Sign Out</span>
          </a>
        </li>
       
      </ul>
    </div>
    
  );
}

export default Navigation;
