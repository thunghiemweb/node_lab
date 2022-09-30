// Lab 1.4:  Chuyển hướng request
// Hiển thị một trang HTML có một thẻ input và một button khi truy cập vào http://localhost:3000, bấm button thì chuyển qua http://localhost:3000/message. Khi truy cập http://localhost:3000/message thì hiển thị một trang HTML có một thẻ H1 với nội dung "Hello from my Node.js server!"

const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<title>Enter Message</title>')
        res.write('</head>')
        res.write('<body>')
        res.write('<form>')


        // form sẽ gửi dữ liệu đến địa chỉ trong action
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message">');
        res.write('<button type="submit"> send    </button>')

        res.write('</form>')

        res.write('</body>')
        res.write('</html>')
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