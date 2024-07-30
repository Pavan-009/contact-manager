const {constants} = require('../constants')
const errorHandler = (error,req,res)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            req.json({title : "Validation faild!!!",message : error.msg,stackTrace : err.stack});
            break;
        case constants.VALIDATION_ERROR:
            req.json({title : "Not Found!!!",message : error.msg,stackTrace : err.stack});
            break;
        case constants.UNAUTHORIZED:
            req.json({title : "Unauthorized!!!",message : error.msg,stackTrace : err.stack});
            break;
        case constants.FORBIDDEN:
            req.json({title : "Forbidden!!!",message : error.msg,stackTrace : err.stack});
            break;
        default:
            break;
    }
    
    
};

module.exports = errorHandler;

