const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:"String",
        required: true,
        trim:'true'
    },
    email:{
        type:"String",
        required:true,
        unique:true,
        match:[
             /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
             'Please fill a valid email address',
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: 6, 
      },
      role: {
        type: String,
        enum: ['tenant', 'realtor'], 
        default: 'tenant',
      },
      bio:{
        type: String,
        minlength: 10,
      },
      date: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('User', UserSchema);
