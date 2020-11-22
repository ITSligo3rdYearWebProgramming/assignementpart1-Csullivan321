import mongoose from 'mongoose';
import express from 'express';
import car from "./routes/car";

const app = express();

const port = 3000
import bodyParser from 'body-parser'

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const cors = require('cors');
app.use(cors());

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

app.use('/cars',car)
//var multer = require('./routes/car');
//var upolad = multer({dest: './car'})


app.get('/', (req, res ) => 
res.send('Hello world, Christopher is using Express this has changed'));



app.listen(port, () => console.log(`Example app listening on 
  : ${port}!`))




