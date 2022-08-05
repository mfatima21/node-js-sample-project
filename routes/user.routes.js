const express=require('express');
const router=express.Router();                                          ///express. Router() function is used to create a new router object
const UserController = require("../controllers/user.controller")

router.post('/', UserController.post);
router.get('/', UserController.get);

module.exports = router;
