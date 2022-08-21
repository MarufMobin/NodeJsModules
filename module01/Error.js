// 7 Types of Native Errors in JavaScript You Should Know. Understand the common types of native errors in JavaScript. ...

// RangeError. This is thrown when a number is outside an allowable range of values. ...
// ReferenceError. ...
// SyntaxError. ...
// TypeError. ...
// URIError. ...
// EvalError. ...
// InternalError.
// User Define Error 


//Import Error Handler Code in another File  Default Exports
// const errorHandler = require("./errorHandler.js");

// Named Exports 
const { two ,errorHandler } = require("./errorHandler.js"); // => Common js Module import 
two();

// import something from " somethig " => ES6 Module 
/* 
    jodi package.json file a 
    "type": "module",
    hoi tile amra
    
    import something from " something " -> use krte parbo 
*/

async function getData(){
    try{    

        // undefined.find();
        
        const emailError = new Error("Email Already Exites");
        throw emailError;       

    }catch ( error ){
        // console.log(error);
        errorHandler(error);
    }
}
getData();

//Global Error Handler       
// function errorHandler( error ){
//     // console.log(error);
//     const { name , massage , stack } = error;
//     // console.log( name );
//     // console.log(massage);
//     // console.log(stack);

//     // logger.error( {
//     //     name,
//     //     massage,
//     //     stack,
//     //     route,
//     // });

//     // console.log("Internal Server Error ! ");
//     console.log(name, massage );
// }

console.log("Done !");