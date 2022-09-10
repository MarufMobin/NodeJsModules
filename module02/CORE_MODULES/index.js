// const name = require('./other');
//Local Module
const { add, name } = require('./other');

let ans = add( 4, 4 )
console.log(name);
console.log(ans);

// const http =    require('http');
// // Usign Core Module for Create Server
// const server = http.createServer( function( req, res ){
//     console.log(`Server is Running`);
// });
// server.listen(5000);

const http = require('http'); // 1 - Import Node.js core module


// Third Party Node Modules are here 
const _ = require('underscore');
const stooges = [{name :'Maruf', age : 22}, {name:'jabbar', age : 21}, {name: 'munna', age: 20}];
const res = _.pluck( stooges, 'name');
console.log(res)


const server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
    console.log('Node.js web server at port 5000 is running..')

});

server.listen(5000); //3 - listen for any incoming requests


