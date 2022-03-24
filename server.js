const express = require("express");

const port = process.env.PORT || 8000;
const app = express();

const Message = require('./Message.js')



app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
