const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    img: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'actors'
  }
)

const Actor = mongoose.model('actors', actorSchema, 'actors')
module.exports = Actor
