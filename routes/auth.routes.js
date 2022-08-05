const express=require('express');
const router=express.Router();                                          ///express. Router() function is used to create a new router object
const auth = require("../services/auth.service");

router.get('/', auth.login);

module.exports = router;
