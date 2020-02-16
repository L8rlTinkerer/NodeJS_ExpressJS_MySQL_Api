const http = require('http');
const app = require('./app'); 

// set the port to use:
const port = process.env.PORT || 3000;

// create the server using http package:
const server = http.createServer(app); 

// start thre server and make it listen on port:
server.listen(port);

