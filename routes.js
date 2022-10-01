
const fs = require('fs');


const requesHandler = (req, res) => {
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
            console.log("nội dung chunk: " + chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
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
}

// 4 cach xuat 

// module.exports=requesHandler;

// module.exports = {
//     handler: requesHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requesHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requesHandler;
exports.someText = 'Some hard coded text';
