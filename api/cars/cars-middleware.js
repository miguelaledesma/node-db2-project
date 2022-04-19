const Cars = require('./cars-model'); 



const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const car = await Cars.getById(req.params.id)

    if(!car){
      res.status(404).json({ message: `car with id ${car}is not found` })
    } else {
      req.car = car 
      next()
    }

  }catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin, make, model, mileage} = req.body 
  if(!vin){
    return res.status(400).json({ message: `vin is missing` })
  } 
  if(!make){
    return res.status(400).json({ message: `make is missing` })
  }
  if(!model){
    return res.status(400).json({ message: `model is missing` })
  }
  if(!mileage){
    return res.status(400).json({ message: `mileage is missing` })
  }
  
  else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  next()
}



const checkVinNumberUnique = async (req, res, next) => {
  //DO YOUR MAGIC
  try{
    const existingVin = await Cars.getByVin(req.body.vin)
    if(!existingVin){
      next()
    }else{
      next({
        status: 400,
        message: `vin ${req.body.vin} already exists`
      })
    }
  }catch(err){
    next(err)
  }
}


module.exports = {
  checkCarId, 
  checkCarPayload, 
  checkVinNumberUnique, 
  checkVinNumberValid
}