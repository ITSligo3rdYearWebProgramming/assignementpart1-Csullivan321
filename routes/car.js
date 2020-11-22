import express from 'express';

import db from '../models/CarService';
//module.exports = router;
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    db.readallCar(req, res);
})

router.get('/:id', (req,res) => {
    //let id = req.params.id;
    //const car = db.readCar;
    //res.json(car);
    db.readCar(req,res);
})

router.post('/', (req, res)=>{
    db.addCar(req,res);
})

router.delete('/:id', (req,res) =>{
   
    db.deleteCar(req,res)
})

export default router;