const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/productos', (req, res) => {
    res.send('Lista de productos')
})

router.get('/productos/:id', (req, res) => {
    res.send('Producto N° ' + req.params.id)
})

module.exports = router