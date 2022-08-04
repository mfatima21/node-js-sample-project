const Movie = require("../models/movie.model")

/**
 * @function post
 * @param req
 * @param res
 */
const post = async (req, res) => {
  const movieData = req.body;
  try {
    const response = await Movie.create(movieData)
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
    const response = await Movie.find({});
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