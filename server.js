const http = require('http');
const url = require('url');
const path = url.parse(request.url).pathmane;
require('dotenv').config();//allows us to use the environmental variables in .env
const {PORT}= process.env;

//creating a server
const server = http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-Type':'text/plain'});
    //res.end('Server is up and running...');
});

//create a PORT
const port = process.env.PORT||PORT;

//Listening
server.listen(port,'127.0.0.1',()=>console.log('Server is up and running...'))
