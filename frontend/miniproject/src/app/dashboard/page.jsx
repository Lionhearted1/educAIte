"use client";
import React, { useState } from "react";
import HeroSectionComponent from "./components/HeroSectionComponent";
import TopBarComponent from "./components/TopBarComponent";
import FolderSection from "./components/FolderSection";
import "./dashboard2style.css";

function page() {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Folder 1',username: "" },
    { id: 2, name: 'Folder 2',username: "" },
    { id: 3, name: 'Folder 3',username: "" },
    { id: 4, name: 'Folder 4',username: "" },
    { id: 5, name: 'Folder 5',username: "" },
    { id: 6, name: 'Folder 6',username: "" },
    { id: 7, name: 'Folder 7',username: "" },
  ]);
  const addFolder = () => {
    const newFolder = { id: folders.length + 1, name: `Folder ${folders.length + 1}` };
    setFolders([newFolder, ...folders]); // Prepend the new folder to the existing list
  };
  return (
    // <div className=" bg-gradient-container ">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col h-screen">
          <TopBarComponent />

          <div className="flex flex-col flex-grow">
            <HeroSectionComponent />

            <div className="flex justify-evenly flex-wrap mb-5">
              <FolderSection folders={folders} addFolder={addFolder} />
            </div>
          </div>
        </div>
       </div>
    // </div>
  );
}

export default page;
