//import mongoose
const mongoose = require("mongoose");

// //create a schema for the expected data structure
const MessageSchema = new mongoose.Schema({
  userName: String,
  userMessage: String,
  currentRoom: String,
  date: Date,
});

module.exports = MessageSchema;
