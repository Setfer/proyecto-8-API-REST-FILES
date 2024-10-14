const { uploadMovies } = require('../../middlewares/file')
const {
  getMovies,
  getMovieById,
  postMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/movie')

const movieRoutes = require('express').Router()

movieRoutes.get('/', getMovies)
movieRoutes.get('/:id', getMovieById)
movieRoutes.post('/',uploadMovies.single("img"), postMovie)
movieRoutes.put('/:id', updateMovie)
movieRoutes.delete('/:id', deleteMovie)

module.exports = movieRoutes
