const express = require('express')
const router = express.Router()

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('Registrando...')
})

module.exports = router