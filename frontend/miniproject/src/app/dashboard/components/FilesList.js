import React from 'react';

const FilesList = () => {
    const files = ['dummy', 'text', 'book1', 'book2', 'book3'];

    return (
        <div className="bg-blue-200 p-4 rounded-xl">
            <ul className="file-list">
                {files.map((file, index) => (
                    <li key={index} className="rounded-3xl px-10 text-black p-4 file-item hover:bg-green-300">{file}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilesList;


