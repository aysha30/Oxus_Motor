const express = require('express')
const router = express.Router()
const Car = require('../models/car')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})


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

router.get('/:pick_loc/:drop_loc/:pick_dateTime/:people/:car_type', async(req, res) => {
    const pick_loc = req.params.pick_loc
    const drop_loc = req.params.drop_loc
    const pick_dateTime = req.params.pick_dateTime
    const people = req.params.people
    const car_type = req.params.car_type
    try{
        const cars = await Car.find({$and:[{'pick_loc': pick_loc}, {'drop_loc': drop_loc}, {'pick_dateTime': pick_dateTime}, {"max_seat":{$gte:people}}, {'car_type': car_type}]})
        res.json({
            "data": cars,
            "message": "Search Results based on User Request",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
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

router.post('/', upload.single('images'), async(req,res, next) => {
    console.log(req.file)
    const car = new Car({
        name: req.body.name,
        price: req.body.price
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