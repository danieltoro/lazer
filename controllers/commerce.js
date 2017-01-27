'use strict'

const Commerce = require('../models/commerce')

function getCommerce (req, res) {
  let commerceId = req.params.commerceId

  Commerce.findById(commerceId, (err, commerce) => {
    if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
    if (!commerce) return res.status(404).send({ message: `El producto no existe` })

    res.status(200).send({ commerce })
  })
}

function getCommerces (req, res) {
  Commerce.find({}, (err, commerces) => {
    if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
    if (!commerces) return res.status(404).send({message: `No existen productos`})

    res.status(200).send({ commerces })
    console.log(commerces);
  })
}

function saveCommerces (req, res) {
  console.log('POST /api/commerce')
  console.log(req.body)

  let commerce = new Commerce()

  commerce.name = req.body.name
  commerce.photo = req.body.photo
  commerce.location = req.body.location
  commerce.category = req.body.category
  commerce.description = req.body.description

  commerce.save((err, commerceStored) => {
    if (err) res.status(500).send({ message: `Error al guardar datos: ${err}` })

    res.status(200).send({ commerce: commerceStored })
  })
}

function updateCommerce (req, res) {
  let commerceId = req.params.commerceId
  let update = req.body

  Commerce.findByIdAndUpdate(commerceId, update, (err, commerceUpdate) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

    res.status(200).send({product: commerceUpdate})
  })
}

function deleteCommerce (req, res) {
  let commerceId = req.params.commerceId

  Commerce.findById(commerceId, (err, commerce) => {
    if (err) res.status(500).send({message: `Error al borrar producto: ${err}`})

    commerce.remove(err => {
      res.status(200).send({message: `el producto ha sido eliminado`})
    })
  })
}

module.exports = {
  getCommerce,
  getCommerces,
  saveCommerces,
  updateCommerce,
  deleteCommerce
}
