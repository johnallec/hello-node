const http = require('http');
const httpModule = require('./modules/http-module');

const ipAddr='127.0.0.1';
const port = 8180;

http.createServer(httpModule.handleRequest).listen(port,ipAddr, () => {
    console.log('Started Node.js http server');
});
