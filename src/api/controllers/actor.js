const Actor = require('../models/actor')
const { deleteFile } = require('../utils/deleteFile')


const getActors = async (req, res, next) => {
  try {
    const allActors = await Actor.find()
    return res.status(200).json(allActors)
  } catch (error) {
    return res.status(400).json('Algo ha salido mal')
  }
}

const postActor = async (req, res, next) => {
  try {
    const newActor = new Actor(req.body)
    const existingActor = await Actor.findOne({ nombre: req.body.nombre });
    
    if (existingActor) {
      return res.status(409).json('El actor ya existe');
    }
    if (req.file) {
      newActor.img = req.file.path
    }
    const actorSaved = await newActor.save()

    res.status(201).json(actorSaved)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

const updateActor = async (req, res, next) => {
  try {
    const { id } = req.params
    const newActor = new Actor(req.body)
    newActor._id = id
    const up = await Actor.findByIdAndUpdate(id, newActor, { new: true })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

const deleteActor = async (req, res, next) => {
  try {
    const { id } = req.params
    const actorDeleted = await Actor.findByIdAndDelete(id)
    deleteFile(actorDeleted.img)

    return res.status(200).json(actorDeleted)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

module.exports = { getActors, postActor, updateActor, deleteActor }
