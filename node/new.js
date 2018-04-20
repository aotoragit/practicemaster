const http = require('http');
      setting   = require('./setting.js');

const server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }),
    res.write('hello world!!'),
    res.end()
    }).listen(setting.port);
    
console.log('server running : ' + setting.console + ":" + setting.port);
