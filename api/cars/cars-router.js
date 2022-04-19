// DO YOUR MAGIC

const express = require('express'); 

const router = express.Router(); 



router.get('/' , async (req, res, next) => {
    res.json('hello')
})

router.get('/:id' , async (req, res, next) => {
    res.json('hello im getting ')
})

router.post('/' , async (req, res, next) => {
    res.json('hello im posting')
})


module.exports = router 