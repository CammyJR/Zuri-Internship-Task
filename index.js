const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
require('dotenv').config();//allows us to use the environmental variables in .env
const {PORT}= process.env;

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/home.html'));
});

router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname+'about.html'));
});

router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname+'/contact.html'));
});

//adding the router
app.use('/',router);

//create a PORT
const port = process.env.PORT||PORT;

//Listening to the port
app.listen(port,()=>console.log('Server is up and running...'));
