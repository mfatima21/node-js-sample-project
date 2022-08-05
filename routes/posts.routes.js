const express=require('express');
const router=express.Router();
const MovieController = require("../controllers/movie.controller")

router.post('/', MovieController.post);
router.get('/', MovieController.get);

module.exports = router;
