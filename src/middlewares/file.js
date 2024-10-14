const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

// Configurar el almacenamiento para los actores
const storageActors = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Proyecto8ApiRestFiles/actors',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'jfif']
  }
})

const storageMovies = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Proyecto8ApiRestFiles/movies',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'jfif']
  }
})

const uploadActors = multer({ storage: storageActors })

const uploadMovies = multer({ storage: storageMovies })

module.exports = { uploadActors, uploadMovies }
