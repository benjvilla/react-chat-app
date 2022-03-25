//import mongoose
const mongoose = require("mongoose");

//connect to mongoDB and the server. the database being "message"
// mongoose.connect("mongodb://localhost:27017/message", {useNewUrlParser: true}, (err) => {
//     if (!err) {
//         console.log('MongoDB Connection Succeeded!')
//     } else {
//         console.log(`Error in DB connection: ${err}`)
//     }
// });
// //initialize a database through connection constuctor and store in variable
// const db = mongoose.connection;

// //bring in error handling for our database connection
// db.on("error", console.error.bind(console, "connection error"));

// //set up readline interface
// const readline = require("readline");
// const readlineInterface = readline.createInterface(
//   process.stdin,
//   process.stdout
// );
// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     readlineInterface.question(questionText, resolve);
//   });
// }

// //create a schema for the expected data structure
const MessageSchema = new mongoose.Schema({
  userName: String,
  userMessage: String,
  currentRoom: String,
  date: Date,
});

// //define a model
// const Message = mongoose.model("messages", messageSchema);

// //create function for user input
// //make a function to house our Create functionality
// async function create() {
//   console.log(`Create a new message!`);
//   //await the username and message from the form
//   let userName = await ask(`GIMME YOUR USERNAME FOOL`);
//   let userMessage = await ask("type yer mesage");
//   let currentRoom = "AAAAAAAAAA IM A ROOM AAA";
//   date = new Date();

//   //create a new Message object
//   const response = new Message({
//     userName: userName,
//     userMessage: userMessage,
//     currentRoom: currentRoom,
//     date: date,
//   });
//   await response.save();
//   console.log(`Praise the sun!!`)

//   let allMessages = await Message.find({});
//   console.log(allMessages);
// }

// create();
//export message and its components
module.exports = MessageSchema;
