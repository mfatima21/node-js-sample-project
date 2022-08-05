const User = require("../models/user.model")

/**
 * @function post
 * @param req
 * @param res
 */
const post = async (req, res) => {
  const userData = req.body;
  try {
    const response = await User.create(userData)
    return res.json(response);
  } catch (err) {
    res.json({ message: err});
  }
  return res;
}

/**
 * @function get
 * @param req
 * @param res
 */
 const get = async (req, res) => {
  try {
    const response = await User.find({});
    return res.json(response);
  } catch (err) {
    res.json({ message: err});
  }
  return res;
}

module.exports = {
  post,
  get
}