const express=require('express');
const router=express.Router();
const movie= require('../models/movie.model');
router.get('/', (req, res) => {
    res.send('its working and we are on posts');
});
router.post('/',(req, res) =>{
     const post = new movie({
        title: req.body.title,
        cast: req.body.cast,
        genre: req.body.genre
     });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err});
    });
});


module.exports= router;