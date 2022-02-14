const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')

const connection = require('../db')

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
            connection.query('SELECT * FROM usuarios WHERE email = ?', [req.body.email ], (error, results) => {

            })
    } else {
        res.send('Usuario y/o contraseña incorrectos')
    }
})

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', async(req, res) => {
    console.log(req.body)
    const hash = await bcryptjs.hash(req.body.password, 8)
    console.log(hash)

    connection.query('INSERT INTO usuarios SET ?', { email: req.body.email, password: hash}, (error) => {
        if (error) {
            throw error
        }
    })

    res.redirect('/')
})

module.exports = router