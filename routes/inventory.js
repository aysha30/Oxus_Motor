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

router.get('/name/:name/:num', async(req, res) => {
    try{
        const cars = new Car()
        if(num == 1)
            cars = await Car.find({'name': req.params.name}).sort({_id:-1}).limit(2)
        else if(num == 2)
            cars = await Car.find({'name': req.params.name}).sort({price: 1}).limit(2)
        else
            cars = await Car.find({'name': req.params.name}).sort({price: -1}).limit(2)
        res.json({
            "data": cars,
            "message": "List of all " + req.params.name + " cars.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/body_style/:body_style/:num', async(req, res) => {
    try{
        const cars = new Car()
        if(num == 1)
            cars = await Car.find({'body_style': req.params.body_style}).sort({_id:-1}).limit(2)
        else if(num == 2)
            cars = await Car.find({'body_style': req.params.body_style}).sort({price: 1}).limit(2)
        else
            cars = await Car.find({'body_style': req.params.body_style}).sort({price: -1}).limit(2)
        res.json({
            "data": cars,
            "message": "List of all cars with " + req.params.body_style + " body style.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/advance-search/basic/:company/:model/:trim/:year/:num_cyliners/:cylinders/:condition', async(req, res) => {
    try{
        const company = req.params.company
        const model = req.params.model
        const trim = req.params.trim
        const year = req.params.year
        const num_cyliners = req.params.num_cyliners
        const cylinders = req.params.cylinders
        const condition = req.params.condition
        const car = new Car()
        if(num == 1)
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'num_cyliners': num_cyliners}, {'cylinders': cylinders}, {'condition': condition}]}).sort({_id:-1}).limit(2)
        else if(num == 2)
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'num_cyliners': num_cyliners}, {'cylinders': cylinders}, {'condition': condition}]}).sort({price: 1}).limit(2)
        else
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'num_cyliners': num_cyliners}, {'cylinders': cylinders}, {'condition': condition}]}).sort({price: -1}).limit(2)
        res.json({
            "data": car,
            "message": "List of all cars based on user search request",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/advance-search/custom/:company/:model/:trim/:year/:ext_color/:int_color', async(req, res) => {
    try{
        const company = req.params.company
        const model = req.params.model
        const trim = req.params.trim
        const year = req.params.year
        const ext_color = req.params.ext_color
        const int_color = req.params.int_color
        const car = new Car()
        if(num == 1)
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'ext_color': ext_color}, {'int_color': int_color}]}).sort({_id:-1}).limit(2)
        else if(num == 2)
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'ext_color': ext_color}, {'int_color': int_color}]}).sort({price: 1}).limit(2)
        else
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'ext_color': ext_color}, {'int_color': int_color}]}).sort({price: -1}).limit(2)
        res.json({
            "data": car,
            "message": "List of all cars based on user search request",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router
