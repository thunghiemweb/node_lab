// Lab 2.6: Giới hạn việc thực thi Middleware đối với Post Requests
// Thay đổi middleware ứng với http://localhost:3000/product để chỉ nhận post request

const http = require('http');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

// Chạy nếu nhập đường dẫn http://localhost:3000/add-product
app.use('/add-product', (req, res, next) => {
    console.log("In another Middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add</button></form>');

});


app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use('/', (req, res, next) => {
    console.log("In another Middleware");
    res.send('<h1>Hello form Exress.js</h1>');

});


const server = http.createServer(app);

server.listen(3000);



