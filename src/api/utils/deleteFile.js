const cloudinary = require('cloudinary').v2
const connectCloudinary = require('../../config/cloudinary')
require('dotenv').config()

const deleteFile = (url) => {
  // Divide el string por "/"
  const parts = url.split('/')

  // Toma la parte que necesitas
  const filePath = parts.slice(7).join('/').split('.')[0]
  console.log(filePath)
  cloudinary.uploader.destroy(filePath, () => {
    console.log('imagen eliminada')
  })
}

const deleteAllFiles =async (carpeta) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
    });
    const url = `Proyecto8ApiRestFiles/${carpeta}`
    const result = await cloudinary.api.delete_resources_by_prefix(url)
    console.log('todos los archivos eliminados',result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { deleteFile, deleteAllFiles }
//https://res.cloudinary.com/setfer/image/upload/v1727956527/Proyecto%208%20API%20REST%20FILES/xf5feq5h0opmcphywapz.jpg
