const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

// Set up Multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for file upload and external link interaction
router.post('/upload', upload.single('file_content'), async (req, res) => {
  try {
    // Check if a file is present in the request
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Extract user_name and unique_id from form fields
    const { user_name, unique_id } = req.body;

    // Simulate sending the file to an external link
    const externalLink = `${process.env.MISTRAL_URL}/file/`;
    // Create FormData
    const formData = new FormData();

    // Append fields to FormData
    formData.append('user_name', user_name);
    formData.append('unique_id', unique_id);
    formData.append('file_content', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      knownLength: req.file.size,
    });

    // Make the external link interaction using FormData
    const response = await axios.post(externalLink, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    // Check the response from the external link
    if (response.status === 200) {
      // Successful interaction with the external link
      console.log(response.data);
      return res.status(200).json({ message: response.data.message, unique_id });
    } else {
      // Handle other status codes as needed
      return res.status(response.status).json({ message: 'External link interaction failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
