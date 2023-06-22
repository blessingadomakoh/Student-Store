// YOUR CODE HERE
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./data/db.json')

let productData = [...db.products]
console.log(productData)
app.use(cors())

app.get('/store', (req, res) => {
    res.status(200)
    res.send(productData)
})

app.get('/store/:')

module.exports = app
