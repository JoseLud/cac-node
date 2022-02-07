const express = require('express')
const router = express.Router()

const { body } = require('express-validator')

const controller = require('../controller')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/productos/create', controller.create)

router.post('/productos/store', [
    body('nombre', 'El nombre es obligatorio').notEmpty()
], controller.store)

router.get('/productos', controller.index)
router.get('/productos/:id', controller.show)



module.exports = router