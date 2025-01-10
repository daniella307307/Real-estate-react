const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.URI;
const connectToDb= async()=>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to database')
    }catch(e){
        console.error('Error connecting to database:',e.message)
        process.exit(1);
    }
}

module.exports = connectToDb;