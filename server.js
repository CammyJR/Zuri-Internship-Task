const http = require('http');
const url = require('url');
const fs = require('fs');
require('dotenv').config();//allows us to use the environmental variables in .env
const {PORT} = process.env;

//creating a server
const server = http.createServer((req,res)=>
{
    //Function to call up Html Pages.
    function loadHtml(htmlPage)
    {
        fs.readFile(htmlPage,(err,data)=>
        {   
            if(err)
            {
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.write("404 Not Found");
                res.end();
            }
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                return res.end();
        });
    }

    //Obtaining the pathname in the URL
    let q = url.parse(req.url,true);
    let path = q.pathname;
    //console.log(q);
    //console.log(filename);

    //Switching between the different html pages
    switch(path)
    {
        case '/':
            loadHtml('home.html');
            break;
        case '/home.html':
            loadHtml('home.html');
            break;
        case '/contact.html':
            loadHtml('contact.html');
            break;
        case '/about.html':
            loadHtml('about.html');
            break;
        default: 
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.write("404 Not Found\nEnsure the URL is correct");
            res.end();
    }
      
});

//create a PORT and calling the hostname
const port = process.env.PORT||PORT;
// const hostname = process.env.HOSTNAME||HOSTNAME 
//Listening
server.listen(port,'127.0.0.1',()=>console.log('Server is up and running...'));