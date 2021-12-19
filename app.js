require('dotenv').config()

const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(expresslayouts)

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/productos'))
app.use('/', require('./routes/contacto'))

app.use((req, res, next) => {
    res.status(404).send('Not found')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`http://localhost:${port}`))