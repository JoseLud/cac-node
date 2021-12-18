const productos = [
    {id: 1, name: 'Producto N° 1'},
    {id: 2, name: 'Producto N° 2'},
    {id: 3, name: 'Producto N° 3'},
    {id: 4, name: 'Producto N° 4'}
]

const all = () => {
    return productos
}

const find = (id) => {
    return productos.find(producto => producto.id == id)
}

module.exports = {
    all,
    find
}

