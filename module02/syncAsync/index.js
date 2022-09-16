const http = require('http');
const url = require('url');

const fs = require('fs');

const server = http.createServer(( req, res ) =>{
    if( req.url == '/' ){
        // fs.readFile('data.txt', (err, data) =>{
        //     if( err ){
        //         res.write('Failed to read data !!! ');
        //         res.end();
        //     }else{
        //         res.write(data)
        //         res.end();
        //     }
        // })

        //Syncronous Way 
        // const data = fs.readFileSync('data.txt')
        // res.write(data);
        // res.end()

        fs.writeFile('newFiledata.txt', 'Hello Node js !!! ', err =>{
            if( err ){
                res.write('Data Failed to write');
                res.end()
            }else{
                res.write('data written successfully')
                res.end()
            }
        })
    }
})
const PORT = 5000;
server.listen(PORT);
console.log(`Server is running at port ${PORT}`);