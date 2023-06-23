const database = require(('../data/db.json'))
// console.log("database", database) 

const retrieveProducts = () => {
   const products = database.products
   return products
//    console.log("products", products)
}

module.exports = {
    retrieveProducts
}

// retrieveProducts()

