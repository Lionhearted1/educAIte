
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
export default function File() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleUpload = () => {
        // handlinging file goes here upload button onclick function 
        console.log('File uploaded:', selectedFile);
    };

    return (
        <center>
            <div className='relative top-[10vh]'>
                <input type="file" className='border-2 border-black p-1 h-10 rounded-lg bg-lavender mb-8 mt-5 w-64 
              shadow-[8px_8px_0px_rgba(0,0,0,1)]' onChange={handleFileChange} />
                {previewUrl && 
                    <Image src={previewUrl} alt="Preview" style={{height: '250px'}} />
                    }
                {selectedFile && <button className='border-2 border-black p-1 h-10 rounded-lg bg-lavender 
                mb-8 mt-5 w-64 shadow-[8px_8px_0px_rgba(0,0,0,1)]' onClick={handleUpload}>Upload</button>}
            </div>
        </center>
    );
}


  