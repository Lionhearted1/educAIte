"use client";
// Importing necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import HeroSectionComponent from './components/HeroSectionComponent';
import TopBarComponent from './components/TopBarComponent';
import FolderSection from './components/FolderSection';
import './dashboard2style.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Link from "next/link";


// Function component
function Page() {
  // State for storing fetched folders
  const [folders, setFolders] = useState([]);
  const username = Cookies.get('user_name');
  console.log(username)
  
  const router=useRouter();
  useEffect(()=>{
    if(username=="" || username==null){
      //login 
      router.push("/login")
    }
  },[router])

  useEffect(() => {
    // Define the API endpoint for fetching folders
    const apiUrl = `http://127.0.0.1:3000/folders/get_all`;

    // Fetch folders using Axios 
    const fetchFolders = async () => {
      try {
        const user_name = username; // Replace this with your actual user_name
        const response = await axios.get(apiUrl, { params: { user_name } });
        const response_folders= response.data.folders;
        setFolders(response_folders)
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching folders:', error);
      }
    };

    // Call the fetchFolders function when the component mounts
    fetchFolders();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // JSX structure
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col h-screen">
        <TopBarComponent />

        <div className="flex flex-col flex-grow">
          <HeroSectionComponent />

          {
          //Folder Check
          folders.length==0 && 
          <div className='mt-10 w-full'><h2>Please Create a Folder to Start Studying</h2>
          <Link href={"/chatfolder"}>
          <button
          className="bg-purple-500 border-2 mt-5 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:bg-purple-200 text-white py-2 hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150 px-4 rounded-lg "
        >
          Create Folder
        </button>
        </Link>
        </div>
          
          }

          <div className="flex justify-evenly flex-wrap mb-5">
            <FolderSection folders={folders} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the component
export default Page;
