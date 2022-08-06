const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const express = require("express");
const permissions = require("../permissions.json");
router = express.Router();
dotenv.config();
console.log(permissions)
/**
 * @function post
 * @param req
 * @param res
 */
const login = async (req, res) => {
  const userData = req.body;
  try {
    const user = await User.find({ email: userData.email, password: userData.password });
    if(user.length > 0) {
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
      let data = {
        time: Date(),
        userId: user[0]["_id"],
        role: user[0]["role"]
      }
      console.log(data);
      console.log(user[0]["_id"]);
      console.log(user[0]["role"]);
      //res.send("Logged in!");
      const token = jwt.sign(data, jwtSecretKey);
      return res.json({message: "Logged in", accessToken: token});
    }
    else {
      return res.json({message: "Your Email Or Password is incorrect"});
    }
    
  } catch (err) {
    res.json({ message: err});
  }
}
//Verify Token                              middleware
const validateToken =  (req, res, next)=> {
  console.log(req.headers);
  //let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
 // console.log(tokenHeaderKey);
  console.log(jwtSecretKey);
  try {
    let token = req.headers.authorization;
    token = token.split(" ");
    console.log(token[1]);
    const verified = jwt.verify(token[1], jwtSecretKey);
    console.log("verified", verified);
    if(verified){
      req["user"]=verified;
      next();
    }else{
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }
}

//authorization
const authorization = (req, res, next)=> {
 req.user.JWT_SECRET_KEYrole = "user"
  if (req.user.role == "admin") {
    res.status(200)
      .send({
        message: "Congratulations! but there is no hidden content"
      });
  } else {
    res.status(403)
      .send({
        message: "Unauthorised access"
      });
  }
};


module.exports = {
  login,
  validateToken,
  authorization
}