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

const userSchema = new mongoose.Schema({
    name: String,
    dateofbirth: Date,
    address1: String,
    address2: String,
    phone:Number
    
});

const user = mongoose.model('user', userSchema);

//add user name to database
app.get('/addname/:name', (req, res) => {
    
    const aname = new user({name: req.params.name});

    aname.save()
    .then((result) => res.send(`${req.params.name} was saved to the database`))
    .catch((err) =>
    console.err(err));

});

//add user Date of Birth to database
app.get('/adddob/:dateofbirth', (req, res) => {
    
    const adob = new user({dateofbirth: req.params.dateofbirth});

    adob.save()
    .then((result) => res.send(`${req.params.dateofbirth} was saved to the database`))
    .catch((err) =>
    console.err(err));

});

// add address1 to the db
app.get('/addaddress1/:address1', (req, res) => {
    
    const aAddress1 = new user({address1: req.params.address1});

    aAddress1.save()
    .then((result) => res.send(`${req.params.address1} was saved to the database`))
    .catch((err) =>
    console.err(err));

});

// add address2 to db
app.get('/addaddress2/:address2', (req, res) => {
    
    const aAddress2 = new user({address2: req.params.address2});

    aAddress2.save()
    .then((result) => res.send(`${req.params.address2} was saved to the database`))
    .catch((err) =>
    console.err(err));

});

// add Phone number to the db
app.get('/addPhone/:phone', (req, res) => {
    
    const aphone = new user({phone: req.params.phone});

    aphone.save()
    .then((result) => res.send(`${req.params.phone} was saved to the database`))
    .catch((err) =>
    console.err(err));

});





app.listen(port, () => console.log(`Example app listening on 
  : ${port}!`))




