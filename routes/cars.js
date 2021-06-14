const express = require('express')
const router = express.Router()
const Car = require('../models/car')
const Features = require('./features')

router.get('/', async(req, res) => {
    try{
        const cars = await Car.find()
        res.json({
            "data": cars,
            "message": "List of all cars",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const car = await Car.findById(req.params.id)
        res.json({
            "data": car,
            "message": "Search Result by ID",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/',  async(req,res) => {
    const features = new Features(req.body.features.colour, req.body.features.weight)
    const car = new Car({
        name: req.body.name,
        price: req.body.price,
        images: req.body.images,
        description: req.body.description,
        basic_specs: req.body.basic_specs,
        features: features
    })
    try{
        const c1 =  await car.save()
        res.json({
            "data": c1,
            "message": "Car Saved",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send(err)
    }
})
module.exports = router