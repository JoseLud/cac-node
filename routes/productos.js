const express = require('express')
const router = express.Router()

const { body } = require('express-validator')

const controller = require('../controller')

router.get('/', (req, res) => {
    res.render('index')
})

// UPDATE
router.get('/productos/:id/edit', controller.edit)
router.put('/productos/update', controller.update) 

// CREATE
router.get('/productos/create', controller.create)
router.post('/productos/store', [
    body('nombre', 'El nombre es obligatorio').notEmpty()
], controller.store)

// READ
router.get('/productos', controller.index)
router.get('/productos/:id', controller.show)



module.exports = router