
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true, //if someone type white space will be trimed
        minlength:3 
    },
    },{
        timestamps: true,
    });
    const User = mongoose.model('User', userSchema);

    module.exports = User;