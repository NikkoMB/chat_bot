'use strict'

const express = require('express'); 
const bodyParser = require('body-parser'); 
const request = require('request');

const app = express(); 

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send('Hi I am a chatbot');
});

//Facebook

app.get('/webhook/', function(req,res){
    if(req.query['hub.verify_token'] === 'marx'){
        res.send(req.query['hub,challenge']);
    }
    res.send('huh?'); 
})
























app.listen(app.get('port'), function(){
    console.log('You have entered the chat!')
});