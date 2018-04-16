const http = require('http');
      fs   = require('fs');
      setting = fs.readFile('./setting.js','utf-8');

const server = http.createServer();
server.on('request', function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' }),
    res.write('helloworld!!'),
    res.end()
    }).listen();
console.log('server running : port 1234');