import http from 'http';
import datafile from './datafile'

var server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.setHeader("Content-type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.statusCode(200);
        res.end('You hit the AWS server');
    }
    else if(req.url == '/star-trek'){
        res.setHeader("Content-type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.statusCode(200);
        res.end(datafile);
    }
    else {
        res.end('Invalid url')
    }
});

server.listen(5000, function() {
    console.log('Server running on port 5000');
})