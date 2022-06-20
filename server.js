const http = require('http');
//const url = require('url');
const fs = require('fs');
//const req = require('request');
require('dotenv').config();//allows us to use the environmental variables in .env
const {PORT} = process.env;


//creating a server
const server = http.createServer((req,res)=>
{
    //var q = url.parse(req.url,true);
    //var filename = "." + q.pathname;
    // console.log(q);
    // res.writeHead(200,{'Content-Type':'text/plain'});
    //res.end('Server is up and running...');
    fs.readFile('home.html',(err,data)=>
    {   
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.write("404 Not Found");
        }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
    });
    
});

//create a PORT
const port = process.env.PORT||PORT;

//Listening
server.listen(port,'127.0.0.1',()=>console.log('Server is up and running...'));
