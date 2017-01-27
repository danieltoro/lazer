'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect('mongodb://dtoro:123456@ds033259.mlab.com:33259/lazer', (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexion a la base de datos exitosa')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en localhost:${config.port}`)
  })
})
