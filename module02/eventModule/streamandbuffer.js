const fs = require('fs')

const readStream = fs.createReadStream('./data.txt')

readStream.on('data', (chank) =>{
    console.log('.........................');
    console.log(chank)
})

readStream.on('open', ()=>{
    console.log('stream Open')
})

setTimeout(()=>{
    readStream.pause();
    console.log('Streaming is pause now ')
}, 10)

setTimeout(()=>{
    readStream.resume();
    console.log('Streaming is resume now ');
}, 800 )