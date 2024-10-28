const http = require('http'); //import modulu http

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server dziala\n');
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('server dziala na porcie 3000 i  adresie http://127.0.0.1:3000/');
});