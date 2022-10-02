// Lab 2.1: Cài đặt Express.js
// Cài đặt và sử dụng thành công Express.js

const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);
