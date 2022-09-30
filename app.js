// Lab 1.3: Gửi Response
// Hiển thị một trang HTML có một thẻ H1 với nội dung "Hello from my Node.js server!" khi truy cập vào http://localhost:3000 


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);


