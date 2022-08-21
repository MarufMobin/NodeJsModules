//Protek ta Node js file a akekta module name akta kre module name ar Object thake ar modhe bes kichu Property theke ( id , path , exports , filename, loaded , childrens , paths ) 

console.log(module);

module.exports.errorHandler = function errorHandler( error ){
    // console.log(error);
    const { name , massage , stack } = error;
    // console.log( name );
    // console.log(massage);
    // console.log(stack);

    // logger.error( {
    //     name,
    //     massage,
    //     stack,
    //     route,
    // });

    // console.log("Internal Server Error ! ");
    console.log(name, massage );
}

module.exports.two = function two(){
    console.log("Two ");
}

// module.exports  = errorHandler;
// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

//another Way to Exports Modules

// module.exports = {
//     errorHandler : errorHandler,
//     two : two,
// }

// ES6 way to Exports Modules
// module.exports = {
//     errorHandler,
//     two
// }

/* 
    Now Called Named Exports 
    module.exports.errorHandler = errorHandler;
    module.exports.two = two;

*/
console.log(module)
/* 
    const obj = {};
    obj property1 = "";
    obj property2 = "";

*/


/* 
    Uktow Module gulow Define kra ke bla hoi Common js module 
*/

/* 
    jodi package.json file a 
    "type": "module",
    hoi tile amra 

    export errorHandler 
            or
    export default two

*/