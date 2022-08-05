const express=require('express');
const router=express.Router();
const CastController = require("../controllers/cast.controller")

router.post('/', CastController.post);
router.get('/', CastController.get);

module.exports = router;
