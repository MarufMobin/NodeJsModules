const events = require('events');
const eventEmitter = new events.EventEmitter();

// Creating an event handler
const kitcatDibo = () =>{
    console.log('Niye asho Kitkat ? ami daraye achi ');
}

// Assign the handler into an event 
eventEmitter.on('scream', kitcatDibo).kitcatDibo
eventEmitter.emit('scream');