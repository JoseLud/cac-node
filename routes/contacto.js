const express = require('express')
const router = express.Router()

const { body, validationResult } = require('express-validator')

router.get('/contacto', (req, res) => {
    res.render('contacto', {values: {}})
})

router.post('/contacto', [
    body('nombre', 'El nombre tiene que tener 3 caracteres o mas').isLength(3)
], (req, res) => {
    const errors = validationResult(req) 
    // console.log(req.body.nombre)
    if (!errors.isEmpty()) {
        res.render('contacto', { values: req.body, errors: errors.array() })
    } else {
    res.send('Recibi el formulario ' + req.body.nombre)
    }
})

module.exports = router