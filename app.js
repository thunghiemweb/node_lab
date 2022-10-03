// Lab 2.5: Phân tích cú pháp Requests đến
// Ở trang http://localhost:3000/add-product trả về một trang HTML với nội dung là 1 form dùng để post sản phẩm (bao gồm thông tin về title) tới http://localhost:3000/product.
// Tạo middleware ứng với http://localhost:3000/product nhận post request đến và log ra console req.body


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

app.use('/product', (req, res, next) => {
    console.log('>>' + req.body);
    res.redirect('/');
})


app.use('/', (req, res, next) => {
    console.log("In another Middleware");
    res.send('<h1>Hello form Exress.js</h1>');

});


const server = http.createServer(app);

server.listen(3000);



