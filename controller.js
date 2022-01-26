const { send } = require('express/lib/response')
const connection = require('./db')

const index = (req, res) => {
    connection.query('SELECT * FROM productos', (error, results) => {
        if (error) {
            throw error
        }
    
        res.render('productos/index', { productos: results })
    })
}

const show = (req, res) => {
    connection.query('SELECT id, nombre, descripcion FROM productos WHERE id = ?', [ req.params.id], (error, result) => {
        if (error) {
            throw error
        }

        if (result.length > 0){
             res.render('productos/show', { producto: result[0] })
        } else {
            res.send('No existe el producto')
        }
    }) 
}

const create = (req, res) => {
    res.render('productos/create')
}

const store = (req, res) => {
    // res.render('productos/create')
    console.log(req.body)
    res.send('Procesando')
}

module.exports = {
    index,
    show,
    create, 
    store
}










