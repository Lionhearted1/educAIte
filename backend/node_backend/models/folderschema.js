const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  folder_name: { type: String, required: true },
  unique_id: { type: String, required: true },
  user_name: { type: String, required: true }, // Directly include the username field
});

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;
