const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// báo cho express ta muốn biên dịch teamplate động với công cụ pug
app.set('view engine', 'pug');
app.set('views', 'views');





const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// cấp quyền truy cập folder public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
