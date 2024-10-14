const mongoose = require('mongoose')
const Movie = require('../models/movie')
const cloudinary= require("cloudinary").v2
const { deleteAllFiles } = require('./deleteFile')
const moviesData = require('../../data/moviesSeed')

const lanzarSemillaMovies = async () => {
  try {
    await deleteAllFiles("movies")
    await mongoose.connect(process.env.DB_URL)
    await Movie.collection.drop()
    for (const movie of moviesData) {
      const imgPath = movie.img
      console.log(imgPath)
     const upCloudinary = await cloudinary.uploader.upload(imgPath,{
      folder: "Proyecto8ApiRestFiles/movies"
     })
     console.log(upCloudinary.url)
      const newMovie = new Movie({
        nombre: movie.nombre,
        publicacion: movie.publicacion,
        img: upCloudinary.url
      })
      await newMovie.save()
    }
    mongoose.connection.close()
  } catch (error) {
    console.log(error)
  }
}

lanzarSemillaMovies()