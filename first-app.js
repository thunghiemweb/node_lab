console.log('hello from Node.js');


// Tạo ra file hello.txt trong file có nội dung 'hello from Node.js'
// file có đường dẫn cùng với file first-app.js

const fs = require('fs');
const { url } = require('inspector');
fs.writeFileSync('hello.txt', 'hello from Node.js');


// chạy file bằng câu lệnh node first-app.js

// Hãy commit code lên git và đảm bảo rằng bạn sẽ không xoá repositories cho đến khi kết thúc môn học. Các bài lab, assigment sẽ nộp bài bằng link git.
// Để tránh tạo quá nhiều repositories không cần thiết, bạn hãy xem video dưới đây và tạo mỗi bài lab, bài ASM một Branch:
// https://youtu.be/-Q-9HMvhdz4 (hoặc xem ở dưới)
// Lưu ý: hãy để repository của bạn là public cho đến khi review lab xong.
// Đặt tên bài lab ở Github theo quy định sau: LAB+number hoặc ASM+number. Ví dụ: LAB01, ASM1

// Khởi tạo
git init
git remote add origin https://github.com/thunghiemweb/node_lab.git

// Tạo branch
git checkout - b lab1
git push--set - upstream origin lab1

// up commit mới
git add.
git commit - m 'ghi chú'
git push


// chuyển branch
 git checkout branch1


