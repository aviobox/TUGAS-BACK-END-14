var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('Request : ' + req.url);
    if(req.url === '/home'|| req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname+'/home.html').pipe(res);
    } 
    else if (req.url === '/Chainsmokers'|| req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname+'/Chainsmokers.html').pipe(res);
    } 
    else {
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
});

server.listen(8000);
console.log('Server Aktif. Listening port 8000.');