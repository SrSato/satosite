const srvConfig = require('./config/serverConfig');
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

const httpsOptions = {
    key: fs.readFileSync('ca/privkey.pem'),
    cert: fs.readFileSync('ca/cert.pem')
};

const app=require('./app');

http.createServer(app).listen(srvConfig.HTTP_PORT,function(){
  console.log(`Http Server up and listening at port ${srvConfig.HTTP_PORT}`)
});
https.createServer(httpsOptions, app).listen(srvConfig.HTTPS_PORT,function(){
  console.log(`Https Server up and listening at port ${srvConfig.HTTPS_PORT}`)
});
