const express = require('express')
const router = express.Router()
const Car = require('../models/car')

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

router.get('/name/:name', async(req, res) => {
    try{
        const cars = await Car.find({name: req.params.name})
        res.json({
            "data": cars,
            "message": "List of all " + req.body.name + " cars.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/body_style/:body_style', async(req, res) => {
    try{
        const cars = await Car.find({'body_style': req.params.body_style})
        res.json({
            "data": cars,
            "message": "List of all cars with " + req.body.body_style + " body style.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error: ' + err)
    }
})

module.exports = router
