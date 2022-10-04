const path = require('path');
const express = require("express");

const rootDir = require('../util/path')

const router = express.Router();

const adminData = require('./admin')

router.get('/', (req, res, next) => {
    const procucts = adminData.products;
    res.render('shop', {
        prods: procucts,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: procucts.length > 0,
        activeShop: true,
        productCSS: true
    });
});


module.exports = router;