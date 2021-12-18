require('dotenv').config()

const express = require('express')
const router = require('./router')
const app = express()

app.use(express.static(__dirname + '/public'))

app.use('/', require('./router'))

app.use((req, res, next) => {
    res.status(404).send('Not found')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`http://localhost:${port}`))