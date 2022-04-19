// DO YOUR MAGIC

const express = require('express'); 
const Cars = require('./cars-model'); 

const router = express.Router(); 




router.get('/' , async (req, res, next) => {
    try{
        const cars = await Cars.getAll()
        res.json(cars)
    }
    catch(err){
        next(err)
    }
})

router.get('/:id' , async (req, res, next) => {
    res.json('hello im getting ')
})

router.post('/' , async (req, res, next) => {
    res.json('hello im posting')
})


module.exports = router 