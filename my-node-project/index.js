const http = require('http');
const fs = require('fs');
const e = require('cors');
const server = http.createServer((req,res) => {
        fs.readFile('index.html',(err,data) => {
            if(err) {
                res.statusCode = 500;
                res.end('Error');
            }else{
                res.setHeader('Content-Type','text/html');
                res.end(data);
            }
        })
}) 
server.listen(4000);