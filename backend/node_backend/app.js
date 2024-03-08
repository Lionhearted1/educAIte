const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const fileRoutes = require('./routes/fileRoutes');
const quizRoutes = require('./routes/quizRoutes');
const folderRoutes = require('./routes/folderRoutes');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/educaite');

// Import and use the authentication routes
app.use('/auth', authRoutes);
// Import and use the chat route
app.use('/chat', chatRoutes);
// Import and use the file upload route
app.use('/files', fileRoutes);
// Import and use the quiz route
app.use('/quiz', quizRoutes);
// Import and use the get_chats route 

app.use('/folders', folderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
