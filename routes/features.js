const express = require('express')
const router = express.Router()

class Features{
    constructor(colour, weight){
        this.colour = colour
        this.weight = weight
    }
}
module.exports = router