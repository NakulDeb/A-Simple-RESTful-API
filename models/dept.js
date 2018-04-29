const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeptSchema = new Schema({
    year:{
        type:String,
        requirec:[true,'Name field is Required']
    },
    day:{
        type:String,
        requirec:[true,'Name field is Required']
    },
    period:{
        type:String,
    },
    subject:{
        type:String,
        requirec:[true,'Name field is Required']
    },
    
    constructor_name_code:{
        type:String,
        requirec:[true,'Name field is Required']
    },
    
    time:{
        type:String,
        requirec:[true,'Name field is Required']
    },

    room_no:{
        type:String,
        requirec:[true,'Name field is Required']
    }
    
});


const Dept = mongoose.model('dept',DeptSchema);
module.exports = Dept;