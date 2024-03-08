const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  unique_id: { type: String, required: true },
  sender:{type : String},
  text: { type: String, required: true },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
