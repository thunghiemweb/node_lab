// Lab 2.2: Cài đặt Middleware
// Đăng ký 2 middleware và in ra console log ở mỗi middleware, gọi hàm next để cả 2 dòng console log đều được in ra.

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

});

const server = http.createServer(app);

server.listen(3000);
