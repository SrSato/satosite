const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

const httpsOptions = {
    key: fs.readFileSync('ca/privkey.pem'),
    cert: fs.readFileSync('ca/cert.pem')
};

const app=require('./app');

http.createServer(app).listen(8888,function(){
  console.log("Http Server up and listening at ...")
});
https.createServer(httpsOptions, app).listen(4433,function(){
  console.log("Https Server up and listening at ...")
});
