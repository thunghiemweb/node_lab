// Lab 1.5: Chuyển hướng request 2
// Khi có POST method được gửi tới http://localhost:3000/message thì tạo ra file message.txt với nội dung "DUMMY", sau đó chuyển hướng về http://localhost:3000 với response có statusCode là 302

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head>')
        res.write('<title>Enter Message</title>')
        res.write('</head>')
        res.write('<body>')

        // form sẽ gửi dữ liệu đến địa chỉ trong action
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">send</button>')

        res.write('</form>')

        res.write('</body>')
        res.write('</html>')
        return res.end();
    }


    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head>')
    res.write('<title>My first page</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Hello from my Node.js Server!</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end();

})

server.listen(3000);