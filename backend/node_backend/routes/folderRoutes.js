const express = require('express');
const router = express.Router();
const Folder = require('../models/folderschema');
require('dotenv').config();

// Route for creating a new folder
router.post('/create', async (req, res) => {
  try {
    const { folder_name, unique_id, user_name } = req.body;

    // Check if the folder with the provided unique_id already exists
    const existingFolder = await Folder.findOne({ unique_id });
    if (existingFolder) {
      return res.status(409).json({ message: 'Folder with the same unique_id already exists' });
    }

    // Create a new folder
    const newFolder = new Folder({
      folder_name:folder_name,
      unique_id:unique_id,
      user_name:user_name,
    });

    // Save the folder to the database
    await newFolder.save();

    res.status(200).json({ message: 'Folder created successfully', folder: newFolder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for getting all folders
router.get('/get_all', async (req, res) => {
  try {
    // Extract user_name from req.query
    const { user_name } = req.query;

    // Check if user_name is provided in the query parameters
    if (!user_name) {
      return res.status(400).json({ message: 'User_name is required in the query parameters' });
    }

    // Retrieve folders based on user_name from the database
    const folders = await Folder.find({ user_name });

    // Respond with a 200 OK status and the retrieved folders
    res.status(200).json({ message: 'Folders retrieved successfully', folders });
  } catch (error) {
    // Log any errors that occur during the process
    console.error(error);

    // Respond with a 500 Internal Server Error status if there's an error
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
