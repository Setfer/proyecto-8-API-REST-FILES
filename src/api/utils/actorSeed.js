const mongoose = require('mongoose')
const actoresData = require('../../data/actorSeed')
const Actor = require('../models/actor')
const cloudinary= require("cloudinary").v2
const { deleteAllFiles } = require('./deleteFile')

const lanzarSemilla = async () => {
  try {
    
    await deleteAllFiles("actors")
    await mongoose.connect(process.env.DB_URL)
    await Actor.collection.drop()
    for (const actor of actoresData) {
      const imgPath = actor.img
      console.log(imgPath)
     const upCloudinary = await cloudinary.uploader.upload(imgPath,{
      folder: "Proyecto8ApiRestFiles/actors"
     })
     console.log(upCloudinary.url)
      const newActor = new Actor({
        nombre: actor.nombre,
        edad: actor.edad,
        img: upCloudinary.url
      })
      await newActor.save()
    }
    mongoose.connection.close()
  } catch (error) {
    console.log(error)
  }
}

lanzarSemilla()