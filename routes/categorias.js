const express = require('express')
const router = express.Router()

router.get('/categorias', (req, res) => {
    const categorias = [{ id: 1, nombre: 'Categoria 1'}]

    res.send(categorias)
})

module.exports = router