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

router.get('/recent', async(req, res) => {
    try{
        const cars = await Car.find().sort({_id:-1}).limit(4)
        res.json({
            "data": cars,
            "message": "List of 4 recent cars",
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
    let info = req.body
    const car = new Car(info)
    car.date = new Date();
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
