const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// Route for handling quiz interactions
router.post('/quiz', async (req, res) => {
  try {
    const { user_name, unique_id, input_text } = req.body;
    output_type="quiz"

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
      // Successful interaction with the external service, retrieve and send back the results
      const quizResults = response.data.output;
      // console.log(quizResults);

      return res.status(200).json({ message: 'Quiz data processed successfully', quizResults });
    } else {
      // Handle other status codes as needed
      return res.status(response.status).json({ message: 'External quiz service interaction failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
