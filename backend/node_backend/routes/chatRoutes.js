const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const Chat = require('../models/chatschema');

// Route for handling chat interactions
router.post('/chat', async (req, res) => {
  try {

    const { user_name, unique_id, input_text } = req.body;
    output_type="chat"

    // Simulate sending the data to an external service (replace 'external_service' with the actual service)
    const externalService = `${process.env.MISTRAL_URL}/chat/`;
    const response = await axios.post(externalService, {
      user_name: user_name,
      unique_id: unique_id,
      input: input_text,
      output_type: output_type,
    });


    // Check the response from the external service
    if (response.status === 200) {
      // Save the user's data to the database
      console.log(response.data)
      const userChatEntry = new Chat({
        user_name:user_name,
        unique_id:unique_id,
        sender:"user",
        text: input_text,
      });

      await userChatEntry.save();

      // Save the server's output to the database
      const serverChatEntry = new Chat({
        user_name:user_name,
        unique_id:unique_id,
        sender:"bot",
        text: response.data.output.answer, // Assuming response.data is a string or an array of strings
      });

      await serverChatEntry.save();

      return res.status(200).json({ message: 'Chat data processed and stored successfully', unique_id });
    } else {
      // Handle other status codes as needed
      return res.status(response.status).json({ message: 'External service interaction failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for getting chat messages based on user_name and unique_id
router.get('/get_chats', async (req, res) => {
    try {
      const { user_name, unique_id } = req.query;
  
      // Validate input parameters
      if (!user_name || !unique_id) {
        return res.status(400).json({ message: 'Invalid parameters' });
      }
  
      // Retrieve chat messages from the database based on user_name and unique_id
      const chats = await Chat.find({ user_name, unique_id });
  
      return res.status(200).json({ message: 'Chat messages retrieved successfully', chats });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  module.exports = router;

module.exports = router;
