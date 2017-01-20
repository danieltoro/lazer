'use strict'

const express = require('express')

const commerceController = require('../controllers/commerce')

const api = express.Router()

api.get('/commerce', commerceController.getCommerces)
api.get('/commerce/:commerceId', commerceController.getCommerce)
api.post('/commerce', commerceController.saveCommerces)
api.put('/commerce/:commerceId', commerceController.updateCommerce)
api.delete('/commerce/:commerceId', commerceController.deleteCommerce)

module.exports = api
