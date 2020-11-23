import  {Car} from "./mycarmodel";

function readallCar (req, res, options = []){
    Car.find()
    .then((result)=>{
        console.log("Cars found")
    res.json(result)})
    .catch((error)=>
    res.status(500).json({error: 'An error'}))
    console.log("Finding cars")

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
        res.status(201).json({id: result._id, url: `/cars1/${result._id}`})
    })
    .catch((error)=> {
        res.status(412).json({status: 'fail', message: 'not created'})
    })
    console.log('Promising to save')
}

function deleteCar(req, res){
    const id = req.param.id;

    Car.findByIdAndDelete(id)
    .then((result) => {
        if(result){
            res.status(203).send({message: 'Car deleted'})
        }
        else{
            res.status(404).send({message: 'not found'})
        }
    })
    .catch((error) =>
    res.status(406).send({message: 'not acceptable'}));

    
}





export default {readallCar, readCar, addCar, deleteCar }