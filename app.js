// Lab 1.7: Sử dụng Hệ thống Mô-đun Node
// Thực hiện export 2 thuộc tính là handler và someText trong cùng một module, chỉnh sửa code tương ứng ở nơi import và sử dụng module.


const routes = require('./routes')

const http = require('http');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);