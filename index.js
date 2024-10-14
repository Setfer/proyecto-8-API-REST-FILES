require('dotenv').config()

const express = require('express')

const { connectDB } = require('./src/config/db')
const actorRoutes = require('./src/api/routes/actor')
const movieRoutes = require('./src/api/routes/movies')
const connectCloudinary = require('./src/config/cloudinary')

connectDB()
connectCloudinary()

const app = express()
app.use(express.json())

app.use('/api/v1/actors', actorRoutes)
app.use('/api/v1/movies', movieRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('El servidor está funcionando en: http://localhost:3000')
})
