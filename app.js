// Lab 2.7: Sử dụng Express Router
// Cài đặt Express Router và chuyển các xử lý ở app.js về các file Router tương ứng.

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require("./routes/shop")

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);



