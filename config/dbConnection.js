const mongoose = require('mongoose');

const connectiondb = async()=>{
    try{
       const connect = await mongoose.connect(process.env.CONNECTION_STRING);
       console.log("DataBase connected : "+connect.connection.name);
       console.log(connect)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectiondb;