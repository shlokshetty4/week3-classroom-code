var express = require('express');
var router = express.Router();
const carData = require('../data/cars.json')

router.get('/', (req, res) => {
  console.log(req.query.id)
  if(!req.query.id){
    res.send({message: "Please send an id as a query parameter"});
    return;
  }

  let theCar = carData.find((el)=> el.id == req.query.id )

  if(!theCar){
    res.send({message: "There is no car with that id"});
    return;
  }

  res.send(theCar);
})

module.exports = router;
