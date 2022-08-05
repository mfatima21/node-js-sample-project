const Movie = require("./models/movie.model")
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

//Search
app.get("/movies1", async (req,res)=>{
  console.log(req.query);
  //console.log(Movie);
  const query = await Movie.find(
    {
      "$or":[
        {title:{$regex:req.query.title}},
        //{cast:{"$in":["req.query.cast"]}}
      ]
    }
  );
  res.send(query);
})

//routes
app.use('/', index)

app.listen(3000, () => {
  console.log("server is up and running");
});