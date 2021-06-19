const express = require('express')
const router = express.Router()
const Car = require('../models/car')

router.get('/:company/:model/:trim/:year', async(req, res) => {
    try{
        const company = req.params.company
        const model = req.params.model
        const trim = req.params.trim
        const year = req.params.year
        const car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}]})
        res.json({
            "data": car,
            "message": "Search result based on user request",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/company/:company', async(req, res) => {
    try{
        const car = await Car.find({'company': req.params.company})
        res.json({
            "data": car,
            "message": "List of all " + req.params.company + " cars.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/sedan', async(req, res) => {
    try{
        const car = await Car.find({'body_style': 'Sedan'})
        res.json({
            "data": car,
            "message": "List of all sedan cars.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/SUV', async(req, res) => {
    try{
        const car = await Car.find({'body_style': 'SUV'})
        res.json({
            "data": car,
            "message": "List of all SUV cars.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/luxury', async(req, res) => {
    try{
        const car = await Car.find({'body_style': 'Luxury'})
        res.json({
            "data": car,
            "message": "List of all sedan cars.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/', async(req, res) => {
    try{
        const cars = await Car.find().sort({_id:-1}).limit(2)
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

module.exports = router
