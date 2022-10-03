// Lab 2.9: Phân luồng đường dẫn
// cài đặt sao cho Route admin.js sẽ được nối thêm thành http://localhost:3000/admin/.... thay vì http://localhost:3000/....

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require("./routes/shop");

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);



