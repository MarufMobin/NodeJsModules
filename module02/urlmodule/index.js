const http = require('http');
const  url = require('url');

const server = http.createServer(( req, res )=>{
    const address_url = 'http://localhost:5000/contact?name=maruf&country=bangladesh';
    const parsed = url.parse(address_url, true);
    const  queryObj = parsed.query
    const  hostObj = parsed.host
    console.log("This is Query",queryObj);
    console.log("This is Host",hostObj);

    console.log(parsed);
})

console.log(url);
const PORT = 5000;
server.listen(PORT);
console.log(`Server is running at ${PORT}`);
