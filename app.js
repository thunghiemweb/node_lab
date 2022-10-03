// Lab 2.8: Thêm trang xử lý lỗi 404
// Thêm middleware ở app.js và bắt những đường dẫn mà chưa được định nghĩa rồi trả về một trang với nội dung: "Page not found".

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require("./routes/shop");

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);



