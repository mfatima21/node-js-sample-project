const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

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
        userId: user._id,
        role: user.role
      }
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
//Validate Token
const validateToken =  (req, res)=> {
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
    if(verified){
      return res.send("Successfully Verified");
    }else{
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }
}

module.exports = {
  login,
  validateToken
}