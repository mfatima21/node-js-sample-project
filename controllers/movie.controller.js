import Movie from "../models/movie.model"
import { Request, Response } from "express";
import { successResponse, failureResponse } from "../helpers/responseMessage.helper"


const NOTFOUND = 0;
const TIME_RANGES = ["daily", "weekly", "monthly", "custom"]

class MovieController {
  /**
   * @function getAll
   * @param req
   * @param res
   */
   async post(req, res) {
    const movieData = req.body;
    const response = await Movie.create(movieData)
    return res;
   }
}
