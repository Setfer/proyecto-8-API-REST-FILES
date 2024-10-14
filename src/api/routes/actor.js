

const { uploadActors } = require('../../middlewares/file')
const {
  getActors,
  postActor,
  updateActor,
  deleteActor
} = require('../controllers/actor')

const actorRoutes = require('express').Router()

actorRoutes.get('/', getActors)
actorRoutes.post('/', uploadActors.single("img"), postActor)
actorRoutes.put('/:id', updateActor)
actorRoutes.delete('/:id', deleteActor)

module.exports = actorRoutes
