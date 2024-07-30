const handler = require('express-async-handler')

let getAllContact = handler(async(req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
});

let createContact = handler(async(req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
});

let getContact = handler(async(req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
});

let updateContact = handler(async(req,response)=>{
    response.send(`<h1>Updated Sucessfully!!!!</h1>`);
});

let deleteContact = handler(async(req,response)=>{
    response.send(`<h1>Delete Sucessfully!!!</h1>`);
});

module.exports = {getAllContact,getContact,createContact,updateContact,deleteContact};