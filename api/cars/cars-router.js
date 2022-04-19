// DO YOUR MAGIC

const express = require('express'); 
const Cars = require('./cars-model'); 
const { checkCarId, 
    checkCarPayload, 
    checkVinNumberUnique, 
    checkVinNumberValid} = require('./cars-middleware')

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

router.get('/:id' ,checkCarId ,async (req, res, next) => {
    try{
        res.json(req.car)
    }
    catch(err){
        next(err)
    }
})

router.post('/' , async (req, res, next) => {
    res.json('hello im posting')
})


module.exports = router 