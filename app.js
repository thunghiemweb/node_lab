// Lab 2.3: Cách thức hoạt động của Middleware
// Ở middleware thứ 2 trả về một đoạn code HTML với nội dung: Hello from Express.js

const http = require('http');

const express = require('express');

const app = express();

// next là 1 hàm di
app.use((req, res, next) => {
    console.log("In the Middleware");
    next();// cho phép request được tiếp tục đến Middleware tiếp theo
});

app.use((req, res, next) => {
    console.log("In another Middleware");
    res.send('<h1>Hello form Express.js!</h1>');

});

const server = http.createServer(app);

server.listen(3000);
