let getAllContact = ((req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
});

let createContact = ((req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
});

let getContact = ((req,response)=>{
    response.send(`<h1>Hey Here Iam </h1>`);
});

let updateContact = ((req,response)=>{
    response.send(`<h1>Updated Sucessfully!!!!</h1>`);
});

let deleteContact = ((req,response)=>{
    response.send(`<h1>Delete Sucessfully!!!</h1>`);
});

module.exports = {getAllContact,getContact,createContact,updateContact,deleteContact};