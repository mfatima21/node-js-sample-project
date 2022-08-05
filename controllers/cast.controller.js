const Cast = require("../models/cast.model")

/**
 * @function post
 * @param req
 * @param res
 */
const post = async (req, res) => {
  const castData = req.body;
  try {
    const response = await Cast.create(castData)
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
    const response = await Cast.find({});
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