"use client";
import './style.css';
import React, { useState } from 'react';
const Folder = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [fileName, setFileName] = useState('');
    const [folders, setFolders] = useState([{
        id: 1,
        name: 'Folder 1',
        link:null
    }, {
        id: 2,
        name: 'Folder 2',
        link:null
    }]);
     
    const Users = [];

    const handleAddFolder = () => {
        setShowOverlay(true);
    };

    const handleSave = () => {
        setFolders(prevFolders =>[...prevFolders, {
            id: folders.length + 1,
            name: fileName
        
        }]);
        console.log (folders);
        setShowOverlay(false);
    };

    return (
        <div className='bg-purple-400 w-[100vw] h-[100vh]'>
            <div className="p-4">
                <div>
                    <center>
                        <h1 className="text-2xl font-bold mb-4 mb-20">{Users.name} Chat Folders</h1>
                    </center>
                    <span className="space-y-2 grid grid-flow-col">
                        {folders.map((folder) => (
                            <span
                                key={folder.id}
                                className="flex flex-row items-center p-2 
                                rounded-md hover:bg-gray-200"
                            >
                                <span className="mr-2 emoji">{folder.name}</span>
                                
                            </span>
                        ))}
                    </span>
                </div>
            </div>
            <div className="p-4">
                <button
                    className="bg-yellow-500 hover:bg-yellow-200
                     text-white py-2 px-4 rounded-full float-right shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                    onClick={handleAddFolder}
                >
                    Add Folder
                </button>
            </div>
            {showOverlay && (
                <div className="fixed inset-0 bg-black bg-opacity-50 
                 flex items-center justify-center">
                    <div className="bg-white w-[40vw] h-[40vh] p-4 rounded">
                        <center>
                            <h2 className="mb-2 text-4xl font-extrabold font-mono mt-5">Add Folder</h2>
                        </center>
                        <div className='mx-20 mb-20 mt-12'>
                            <center>
                                <input
                                    type="text"
                                    value={fileName}
                                    onChange={(e) => setFileName(e.target.value)}
                                    className=" mb-2 p-1 border-2  border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]
                                    rounded-lg "
                                    placeholder="Enter file name"
                                />
                                <button
                                    className="bg-purple-500 border-2 mt-5
                                    
                                    border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]
                                     hover:bg-purple-200 text-white py-2 px-4 rounded-lg"
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
    );
};

export default Folder;