const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const index= require('./routes/index.routes');

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
   if(err) console.log(err) 
   else console.log("mongdb is connected");
  }
);

// middleware
app.use(express.json());

//routes
app.use('/', index)

app.listen(3000, () => {
  console.log("server is up and running");
});