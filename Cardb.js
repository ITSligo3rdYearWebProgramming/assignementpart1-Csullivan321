import mongoose from 'mongoose';
import express from 'express';

const app = express();

const port = 3000

let cars = [];

mongoose.connect('mongodb://localhost:27017/CarDatabase', {
    "useNewUrlParser": true,
    "useUnifiedTopology": true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected')
});

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    fuel: String,
    
});

const car = mongoose.model('car', carSchema);

//add make to database
app.get('/addCar/:make', (req, res) => {
    
    const aCar = new car({make: req.params.make});

    aCar.save()
    .then((result) => res.send(`${req.params.make} was saved to the database`))
    .catch((err) =>
    console.err(err));

});

//add model to database
app.get('/addmodel/:model', (req, res) => {
    
    const amodel = new car({model: req.params.model});

    amodel.save()
    .then((result) => res.send(`${req.params.model} was saved to the database`))
    .catch((err) =>
    console.err(err));

});

// add year to the database
app.get('/addyear/:year', (req, res) => {
    
    const ayear = new car({year: req.params.year});

    ayear.save()
    .then((result) => res.send(`${req.params.year} was saved to the database`))
    .catch((err) =>
    console.err(err));

});

app.get('/addfuel/:fuel', (req, res) => {
    
    const afuel = new car({fuel: req.params.fuel});

    afuel.save()
    .then((result) => res.send(`${req.params.fuel} was saved to the database`))
    .catch((err) =>
    console.err(err));

});



app.get('/deleteCar/:make', (req, res) => {
    var type = req.params.make;

    cars.remove({
        make: type
    }, function(err){
        if(err){
            console.log(err)
        }
        else{
            res.send("Removed from the database");
        }
    });
})


app.listen(port, () => console.log(`Example app listening on 
  : ${port}!`))




