import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    make: {type: String, required: true},
    model:{type: String, required: true},
    year:{type: Number, required: true},
    fuel:{type: String, required: true},
    id:{type:Number, requiered: true}
});

let Car = mongoose.model('Cars', carSchema);

export {Car}