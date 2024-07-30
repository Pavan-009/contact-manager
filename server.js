const express = require('express');
const errorHandler = require('./MiddleWare/errorHandler');
const connectiondb = require('./config/dbConnection')
const dotenv = require('dotenv').config();
let port = process.env.PORT || 5000
const app = express();

app.use(express.json());

app.use(errorHandler);   
connectiondb();
app.listen(port,()=>{
    console.log(`Server Started in port ${port}!!!`);
});

app.use('/api/contacts',require('./Routes/ContactRoutes'));