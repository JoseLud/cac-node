const express = require('express')
const router = express.Router()

router.get('/contacto', (req, res) => {
    res.render('contacto')
})

router.post('/contacto', (req, res) => {
    // console.log(req.body.nombre)
    console.log(req.body)
    res.send('Recibi el formulario ' + req.body.nombre)
})

module.exports = router