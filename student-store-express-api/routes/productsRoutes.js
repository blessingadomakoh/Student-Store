const express = require('express')
const router = express.Router() 
const productsinfo = require("../models/productsinfo.js")


router.get("/", (req, res) => {
    const products = productsinfo.retrieveProducts()
    res.json(products) //responding with products to frontend
})

module.exports = router