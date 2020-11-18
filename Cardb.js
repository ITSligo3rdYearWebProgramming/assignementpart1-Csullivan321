import mongoose from 'mongoose';
import express from 'express';
import readallCar from './routes/car'
//import car from '../Assignment 1/models/mycarmodel';

import Car from "./models/mycarmodel"

const app = express();

const port = 3000
import bodyParser from 'body-parser'

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// commits

mongoose.connect('mongodb://localhost:27017/CarDatabase', {
    "useNewUrlParser": true,
    "useUnifiedTopology": true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected')
});

app.use('/',readallCar)
//var multer = require('./routes/car');
//var upolad = multer({dest: './car'})


app.get('/', (req, res ) => 
res.send('Hello world, Christopher is using Express this has changed'));



app.listen(port, () => console.log(`Example app listening on 
  : ${port}!`))




