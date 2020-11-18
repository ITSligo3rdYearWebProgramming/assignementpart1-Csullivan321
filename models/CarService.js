import {Car} from "./mycarmodel";

function readallCar (req, res, options = []){
    Car.find()
    .then((result)=>
    res.json(result))
    .catch((error)=>
    res.status(500).json({error: 'An error'}))

}
function readCar (req, res){
    const id = req.params.id;
    Car.findById(id)
    .then((result) =>
    res.json(result))
    .catch((error)=>
    res.status(404).json({error: 'not found'}))
}

function addCar (req, res){
    let carDoc = new Car(req.body);
    carDoc.save()
    .then((result) => {
        console.log('car saved');
        res.status(201).json({id: result._id, url: `/Cardb/${result._id}`})
    })
    .catch((error)=> {
        res.status(412).json({status: 'fail', message: 'not created'})
    })
}

export {readallCar, readCar, addCar}