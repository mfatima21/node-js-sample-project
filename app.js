
const express= require('express');
const app= express();
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//middleware i:e everytime when we hit request the body parser will run
app.use(bodyParser.json());
//importing Routes
const postsroute= require('./routes/posts');
//middlewear
app.use('/posts', postsroute)
//ROUTES
app.get('/', (req, res) => {
    res.send('its working and we are on posts');
});
//connection to database
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, () => 
    console.log('Connection to the Datatbase is successful!')
  );

  app.listen(3000); 