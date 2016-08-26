var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Congrats you did it!\n');
}).listen(process.env.PORT, process.env.IP);