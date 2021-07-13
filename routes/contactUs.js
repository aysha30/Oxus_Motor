const express = require('express')
const router = express.Router()
const Form = require('../models/contactUs')

router.post('/', async(req, res) =>{
    let info = req.body
    const form = new Form(info)
    try{
        await form.save()
        res.json({
            "data": form,
            "message": "Form Saved",
            "status": true,
            "code": 200
        })
        
    }catch(err){
        res.send(err)
    }
});

module.exports = router
