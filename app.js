'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

const commerceController = require('./controllers/commerce')

// const mainController = require('./controllers/main')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)
app.use('/api', api)



module.exports = app
