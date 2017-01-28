'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'app')))
app.use('/api', api)

module.exports = app
