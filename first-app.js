// Lab 1.1: Cài đặt Node.js và tạo ứng dụng Node.js đầu tiên
console.log('hello from Node.js');


// Tạo ra file hello.txt trong file có nội dung 'hello from Node.js'
// file có đường dẫn cùng với file first-app.js

const fs = require('fs');
fs.writeFileSync('hello.txt', 'hello from Node.js');

