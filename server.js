const express = require('express');
const dotenv = require('dotenv').config();
let port = process.env.PORT || 5000
const app = express();

app.listen(port,()=>{
    console.log(`Server Started in port 8080!!!`);
});

app.use();

app.get('about',(req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
})``

app.get('home',(req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
})

app.get('product:Id',(req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
})