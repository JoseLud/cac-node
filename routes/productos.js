const express = require('express')
const router = express.Router()

const productos = require('../productos')

const controller = require('../controller')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/productos', controller.index)

router.get('/productos/:id', (req, res) => {
    res.render('productos/show', { producto: productos.find(req.params.id)
})
})

module.exports = router