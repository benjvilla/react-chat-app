//import what will be required
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
//import our Schema
const MessageSchema = require('./Message.js')

//create the initial connection to the database
mongoose.connect("mongodb://localhost:27017/message", {useNewUrlParser: true}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded!')
  } else {
    console.log(`Error in DB connection: ${err}`)
  }
});
//initialize a database through connection constuctor and store in variable
const db = mongoose.connection;

//set up port 5000
const port = process.env.PORT || 5000;

//store the calling of express in a variable
const app = express();

//bring in error handling for our database connection
db.on("error", console.error.bind(console, "connection error"));

//middleware functions
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//create our model
const Message = mongoose.model("messages", MessageSchema);

//create our API route for the front end to access the MESSAGES in the database 
app.get("/allmessages", async (req, res) => {
  let allMessages = await Message.find({});
  res.json(allMessages)
})

//CREATE functionality for inserting a new MESSAGE into our collection
app.post('/create', async (req, res) => {
  //assign creation of new MESSAGE to variable
  const newMessage = new Message({
    userName: req.body.userName,
    userMessage: req.body.userMessage,
    currentRoom: req.body.currentRoom,
    date: Date()
  })
  //saving the new MESSAGE to the Model
  await newMessage.save();
  
  //redirect to home page
  res.redirect('http://localhost:3000');
  
});

//Delete functionality
app.post('/delete/:messageId', async (req, res) => {
  //grab document id received in params
  let messageId = req.params.messageId;
  await Message.deleteOne({ _id: messageId })
  res.redirect('http://localhost:3000')
})

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})