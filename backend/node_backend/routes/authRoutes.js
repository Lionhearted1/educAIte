const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/userschema');

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { user_name, name, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ user_name });
    if (existingUser) {
      return res.status(409).json({ message: 'user_name already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      user_name:user_name,
      name:name,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    res.cookie('user_name', User.user_name, { httpOnly: true });
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { user_name, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ user_name });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ user_name: user.user_name, userId: user._id }, 'your_secret_key', {
      expiresIn: '1h',
    });
    res.cookie('user_name', user.user_name, { httpOnly: true });
    res.status(200).json({ token, expiresIn: 3600, userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/logout', (req, res) => {
  try {
    // Clear user-related cookies
    res.clearCookie('user_name');
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;



// Assuming 'token' is the key used to store the token
// localStorage.setItem('token', receivedToken);

// const token = localStorage.getItem('token');

// fetch('https://your-api-endpoint.com/some-resource', {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${token}`,
//   },
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));
