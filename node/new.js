const http = require('http');
<<<<<<< HEAD
fs = require('setting');
=======
      setting   = require('./setting.js');
>>>>>>> 1bb9b98c6b3d0a9762e8966534b4fe7cfa258cf4

const server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }),
<<<<<<< HEAD
        res.write('helloworld!!'),
        res.end()
}).listen(setting.port);

console.log('server running : ' + setting.console + ":" + setting.port);
=======
    res.write('hello world!!'),
    res.end()
    }).listen(setting.port);
    
console.log('server running : ' + setting.console + ":" + setting.port);
>>>>>>> 1bb9b98c6b3d0a9762e8966534b4fe7cfa258cf4
