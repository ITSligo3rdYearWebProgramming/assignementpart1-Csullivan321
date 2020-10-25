import mongoose from 'mongoose';
import express from 'express';

const app = express();

const port = 3000

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

app.get('/addCar/:make', (req, res) => {
    
    const aCar = new car({make: req.params.make, model: req.params.model, year: req.params.year, fuel: req.params.fuel});

    aCar.save()
    .then((result) => res.send(`${req.params.make } ${req.params.model} was saved to the database`))
    .catch((err) =>
    console.err(err));

});



