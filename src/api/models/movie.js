const mongoose = require('mongoose')

const moviejeSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    img: { type: String, required: true },
    publicacion: { type: Number, required: true },
    actores: [{ type: mongoose.Types.ObjectId, ref: 'actors', required: false }]
  },
  {
    //mostrar cuando se modifico
    timestamps: true,
    collection: 'movie'
  }
)

const Movie = mongoose.model('movie', moviejeSchema, 'movie')
module.exports = Movie
