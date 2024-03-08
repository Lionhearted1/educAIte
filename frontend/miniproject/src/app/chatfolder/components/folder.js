"use client";
import styles from "./style.css";
import React, { useState } from "react";
import Card1Component from "./Card1Component";

const Folder = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [fileName, setFileName] = useState("");
    const [folders, setFolders] = useState([
      {
        id: 1,
        name: "Folder 1",
        username: "",
        link: null,
      },
      {
        id: 2,
        name: "Folder 2",
        username: "",
        link: null,
      },
    ]);
  
    const handleAddFolder = () => {
      setShowOverlay(true);
    };
  
    const handleSave = () => {
      setFolders((prevFolders) => [
        ...prevFolders,
        {
          id: folders.length + 1,
          name: fileName,
        },
      ]);
      console.log(folders);
      setShowOverlay(false);
    };
  
    return (
      <div>
        <center>
          <div
            className="bg-white w-[90vw] h-[80vh]  rounded-lg border-2 mt-[05%]
                       border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-20 py-12 overflow-y-auto"
          >
            {/* <div
              className="bg-yellow-400 h-16 absolute w-16 rounded-full border-0 top-8 left-[50%]  -rotate-12  border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] over"
            ></div> */}
            <center>
              <h1 className="text-2xl font-bold mb-4 ">Chat Folders</h1>
            </center>
            <div className="grid grid-cols-3 gap-20 h-full">
              {folders.map((folder) => (
                <Card1Component key={folder.id} folder={folder} />
              ))}
            </div>
            
            {showOverlay && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white w-[40vw] h-[40vh] p-4 rounded">
                  <center>
                    <h2 className="mb-2 text-4xl font-extrabold font-mono mt-5">
                      Add Folder
                    </h2>
                  </center>
                  <div className="mx-20 mb-20 mt-12">
                    <center>
                      <input
                        type="text"
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                        className="mb-2 mx-4 p-2 border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150"
                        placeholder="Enter file name"
                      />
                      <button
                        className="bg-purple-500 border-2 mt-5 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:bg-purple-200 text-white py-2 hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 px-4 rounded-lg"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            )}
          </div>
          <center>
              <button
                className="bg-yellow-500 hover:bg-yellow-200 text-black border-black border-2 py-2 px-4 rounded-full hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 mt-4 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                onClick={handleAddFolder}
              >
                Add Folder
              </button>
            </center>
        </center>
      </div>
    );
  };

export default Folder;
