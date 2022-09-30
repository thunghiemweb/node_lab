//Lab 1.2: Tạo Node Server
//Tạo một node server, khi truy cập vào http://localhost:3000 thì log ra console toàn bộ thuộc tính của request đến.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3003);


