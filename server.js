const express = require('express');
const errorHandler = require('./MiddleWare/errorHandler');
const dotenv = require('dotenv').config();
let port = process.env.PORT || 5000
const app = express();

app.use(express.json());

app.use(errorHandler);   

app.listen(port,()=>{
    console.log(`Server Started in port ${port}!!!`);
});

app.use('/api/contacts',require('./Routes/ContactRoutes'));