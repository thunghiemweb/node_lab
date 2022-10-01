// Lab 1.6: Đọc body của request
// Đọc nội dung body của request Khi có POST method được gửi tới http://localhost:3000/message , sau đó ghi nội dung đó vào file message.txt

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

        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });


        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFileSync('message.txt', message);

        });

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