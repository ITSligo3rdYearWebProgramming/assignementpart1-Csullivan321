//import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

//const Schema = mongoose.Schema;

//const CarSchema = new Schema(
    //{
        //make: {type: String, require: true, index :{unique: true}},
        //model: {type: String, require: true},
       // year:{type: Number, require: true},
        //fuel:{type: String, require: true}
   // },

//{toJSON: {virtuals: true}})

//CarSchema.virtual('uri').get(function(){
    //return `/Cardb/${this.make}`;
//});

//CarSchema.plugin(uniqueValidator);

//let car = mongoose.model('Car', CarSchema)

//export { Car }