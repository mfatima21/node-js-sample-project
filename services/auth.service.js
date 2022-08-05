const User = require("../models/user.model")

/**
 * @function post
 * @param req
 * @param res
 */
const login = async (req, res) => {
  const userData = req.body;
  try {
    const response = await User.find({ email: userData.email, password: userData.password });
    return res.json(response);
  } catch (err) {
    res.json({ message: err});
  }
  return res;
}

module.exports = {
  login
}