const connection = require('./db')

const index = (req, res) => {
    connection.query('SELECT * FROM productos', (error, results) => {
        if (error) {
            throw error
        }
    
        res.render('productos/index', { productos: results })
    })
}

module.exports = {
    index
}










