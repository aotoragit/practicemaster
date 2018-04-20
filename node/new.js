const http = require('http');
fs = require('setting');

const server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }),
        res.write('helloworld!!'),
        res.end()
}).listen(setting.port);

console.log('server running : ' + setting.console + ":" + setting.port);