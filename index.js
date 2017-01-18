'use strict'

const mongoose = require('mongoose')
const app = require('./app');
const config = require('./config')

const express = require('express')
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  res.send('Hola mundo').end()
})



mongoose.connect(config.db, (err, res) => {
  if(err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexion a la base de datos exitosa')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en localhost:${config.port}`)
  })
})
