const Movie = require('../models/movie')
const { deleteFile } = require('../utils/deleteFile')


const getMovies = async (req, res, next) => {
  try {
    const allMovies = await Movie.find().populate('actores')
    return res.status(200).json(allMovies)
  } catch (error) {
    return res.status(400).json('Algo ha salido mal')
  }
}

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id).populate('actores')
    return res.status(200).json(movie)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldMovie = await Movie.findById(id)

    if (!oldMovie) {
      return res.status(404).json('Tienda no encontrado')
    }

    if (req.body.actores) {
      const oldActores = oldMovie.actores 
      const newActores = req.body.actores

      const oldActoresString = oldActores.map((actor) => actor.toString())
      const newActoresString = newActores.map((actor) => actor.toString())

      const actoresActualizados = [...new Set([...oldActoresString, ...newActoresString])]
      req.body.actores = actoresActualizados
    }
    const update = await Movie.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )

    return res.status(200).json(update)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

const postMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body)
    const existingMovie = await Movie.findOne({ nombre: req.body.nombre });
    
    if (existingMovie) {
      return res.status(409).json('la pelicula ya existe');
    }
    if (req.file) {
      newMovie.img = req.file.path
    }
    const movieSaved = await newMovie.save()
    return res.status(200).json(movieSaved)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params
    const movieDeleted = await Movie.findByIdAndDelete(id)
    deleteFile(movieDeleted.img)
    return res.status(200).json(movieDeleted)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

module.exports = {
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  postMovie
}
