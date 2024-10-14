const mongoose = require('mongoose')

const dbUrl = process.env.DB_URL

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log('Conectado a la Base de Datos')
  } catch (error) {
    console.log('Error al conectarse')
  }
}

module.exports = { connectDB }
