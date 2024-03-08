"use client";
// Importing necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import styles from './dashboard2style.css';
import HeroSectionComponent from './components/HeroSectionComponent';
import TopBarComponent from './components/TopBarComponent';
import FolderSection from './components/FolderSection';
import './dashboard2style.css';

// Function component
function Page() {
  // State for storing fetched folders
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    // Define the API endpoint for fetching folders
    const apiUrl = `http://127.0.0.1:3000/folders/get_all`;

    // Fetch folders using Axios
    const fetchFolders = async () => {
      try {
        const user_name = 'hello'; // Replace this with your actual user_name
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
