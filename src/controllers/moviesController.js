const {validationResult} = require('express-validator');
const createResponseError = require("../helpers/createResponseError");
const {getAllMovies,getOneMovie,createMovie} = require("../services/moviesServices");

module.exports = {
  list: async (req, res) => {
    try {
      
      const movies = await getAllMovies();

      return res.status(200).json({
        ok: true,
        data: movies,
        meta: {
          status: 200,
          total: movies.length,
          url: "/api/movies",
        },
      });
    } catch (error) {
      return createResponseError(res, error);
      
    }
  },
  detail: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      const movie = await getOneMovie(id);

  
      return res.status(200).json({
        ok: true,
        data: movie,
        meta: {
          status: 200,
          total: 1,
          url: `/api/movie/${id}`,
        },
      });
    } catch (error) {
      return createResponseError(res, error);
    }
  },
  store: async (req, res) => {
    try {

      const errors = validationResult(req);

      if(!errors.isEmpty()) throw {
        status : 400,
        message : errors.mapped()
      }

      const newMovie = await createMovie(req.body);

      return res.status(200).json({
        ok: true,
        data: newMovie,
        meta: {
          status: 200,
          total: 1,
          url: `/api/movies/${newMovie.id}`,
        },
      });
    } catch (error) {
      return createResponseError(res, error);
    }
  },
  update: async (req, res) => {
 
  },
  destroy: async (req, res) => {
  
  },
};