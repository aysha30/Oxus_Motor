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

router.get('/company/:company/:num', async(req, res) => {
    try{
        var cars = new Car()
        const num = req.params.num
        if(num == 1){
            cars = await Car.find({'company': req.params.company}).sort({_id:-1})
            // cars = await Car.find({'model': req.params.company}).sort({_id:-1})
        }
        else if(num == 2)
            cars = await Car.find({'company': req.params.company}).sort({price: 1})
        else
            cars = await Car.find({'company': req.params.company}).sort({price: -1})
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
        const num = req.params.num
        var cars = new Car()
        if(num == 1)
            cars = await Car.find({'body_style': req.params.body_style}).sort({_id:-1})
        else if(num == 2)
            cars = await Car.find({'body_style': req.params.body_style}).sort({price: 1})
        else
            cars = await Car.find({'body_style': req.params.body_style}).sort({price: -1})
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



router.get('/advance-search/:company/:model/:trim/:year/:lprice/:hprice/:lmileage/:hmileage/:ldate/:hdate/:num_cylinders/:cylinders/:condition/:ext_color/:int_color/:ext_type/:num', async(req, res) => {
    try{
        const company = req.params.company
        const model = req.params.model
        const trim = req.params.trim
        const year = req.params.year
        const num_cylinders = req.params.num_cylinders
        const cylinders = req.params.cylinders
        const condition = req.params.condition
        const lprice = req.params.lprice
        const hprice = req.params.hprice
        const lmileage = req.params.lmileage
        const hmileage = req.params.hmileage
        var ldate = req.params.ldate
        var hdate = req.params.hdate
        const ext_color = req.params.ext_color
        const int_color = req.params.int_color
        const ext_type = req.params.ext_type
        const num = req.params.num
        const cur_date = new Date()
        ldate = cur_date - ldate*86400000
        hdate = cur_date - hdate*86400000
        var car = new Car()
        if(num == 1)
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'price': {$gte: lprice, $lte: hprice}}, {'mileage': {$gte: lmileage, $lte: hmileage}}, {'date': {$gte: hdate, $lte: ldate}}, {'num_cylinders': num_cylinders}, {'cylinders': cylinders}, {'condition': condition}, {'ext_color': ext_color}, {'int_color': int_color}, {'ext_type': ext_type}]}).sort({_id:-1})
        else if(num == 2)
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'price': {$gte: lprice, $lte: hprice}}, {'mileage': {$gte: lmileage, $lte: hmileage}}, {'date': {$gte: hdate, $lte: ldate}}, {'num_cylinders': num_cylinders}, {'cylinders': cylinders}, {'condition': condition}, {'ext_color': ext_color}, {'int_color': int_color}, {'ext_type': ext_type}]}).sort({price: 1})
        else
            car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'price': {$gte: lprice, $lte: hprice}}, {'mileage': {$gte: lmileage, $lte: hmileage}}, {'date': {$gte: hdate, $lte: ldate}}, {'num_cylinders': num_cylinders}, {'cylinders': cylinders}, {'condition': condition}, {'ext_color': ext_color}, {'int_color': int_color}, {'ext_type': ext_type}]}).sort({price: -1})
            // console.log(Car.find({'company': company}));
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

// router.get('/advance-search/basic/:company/:model/:trim/:year/:lprice/:hprice/:lmileage/:hmileage/:num_cylinders/:cylinders/:condition/:num', async(req, res) => {
//     try{
//         const company = req.params.company
//         const model = req.params.model
//         const trim = req.params.trim
//         const year = req.params.year
//         const num_cylinders = req.params.num_cylinders
//         const cylinders = req.params.cylinders
//         const condition = req.params.condition
//         const lprice = req.params.lprice
//         const hprice = req.params.hprice
//         const lmileage = req.params.lmileage
//         const hmileage = req.params.hmileage
//         const num = req.params.num
//         var car = new Car()
//         if(num == 1)
//             car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'price': {$gte: lprice, $lte: hprice}}, {'mileage': {$gte: lmileage, $lte: hmileage}}, {'num_cylinders': num_cylinders}, {'cylinders': cylinders}, {'condition': condition}]}).sort({_id:-1})
//         else if(num == 2)
//             car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'price': {$gte: lprice, $lte: hprice}}, {'mileage': {$gte: lmileage, $lte: hmileage}}, {'num_cylinders': num_cylinders}, {'cylinders': cylinders}, {'condition': condition}]}).sort({price: 1})
//         else
//             car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'price': {$gte: lprice, $lte: hprice}}, {'mileage': {$gte: lmileage, $lte: hmileage}}, {'num_cylinders': num_cylinders}, {'cylinders': cylinders}, {'condition': condition}]}).sort({price: -1})
//         res.json({
//             "data": car,
//             "message": "List of all cars based on user search request",
//             "status": true,
//             "code": 200
//         })
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })
// router.get('/advance-search/custom/:company/:model/:trim/:year/:ext_color/:int_color/:ext_type/:num', async(req, res) => {
//     try{
//         const company = req.params.company
//         const model = req.params.model
//         const trim = req.params.trim
//         const year = req.params.year
//         const ext_color = req.params.ext_color
//         const int_color = req.params.int_color
//         const ext_type = req.params.ext_type
//         const num = req.params.num
//         var car = new Car()
//         if(num == 1)
//             car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'ext_color': ext_color}, {'int_color': int_color}, {'ext_type': ext_type}]}).sort({_id:-1})
//         else if(num == 2)
//             car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'ext_color': ext_color}, {'int_color': int_color}, {'ext_type': ext_type}]}).sort({price: 1})
//         else
//             car = await Car.find({$and:[{'company': company}, {'model': model}, {'trim': trim}, {'year': year}, {'ext_color': ext_color}, {'int_color': int_color}, {'ext_type': ext_type}]}).sort({price: -1})
//         res.json({
//             "data": car,
//             "message": "List of all cars based on user search request",
//             "status": true,
//             "code": 200
//         })
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })

module.exports = router
