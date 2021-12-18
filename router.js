const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/productos', (req, res) => {
    res.render('productos/index')
})

router.get('/productos/:id', (req, res) => {
    res.render('productos/show', { id: req.params.id })
})

module.exports = router