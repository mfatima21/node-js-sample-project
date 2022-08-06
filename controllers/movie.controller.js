const  {logger} = require("../config/logger.config");
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
    logger.info(response);
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
  let query_filter = [];
  let query_params = req.query;
  try {
    query_filter = query_params.title ? query_filter.concat({ title: { "$regex": req.query.title }}) : query_filter;
    query_filter = query_params.cast ? query_filter.concat({ cast: { "$in": req.query.cast }}) : query_filter;
    query_filter = query_params.genre ? query_filter.concat({ title: { $regex: req.query.genre }}) : query_filter;
    const query  =  query_filter.length ? {"$or": query_filter} : {}
    const data = await Movie.find(query);
    res.send(data);
  } catch (err) {
    res.json({ message: err});
  }
}

module.exports = {
  post,
  get
}