Lab 4.7: Thêm ID sản phẩm vào đường dẫn
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738854#overview

Lab 4.8: Trích xuất các thông số động
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738862#overview

Lab 4.9: Tải dữ liệu chi tiết sản phẩm
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738868#overview

#Lab 4.10: Hiển thị trang: Chi tiết Sản phẩm
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738876#overview

Lab 4.11: Truyền dữ liệu với POST Requests
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738882#overview

Lab 4.12: Thêm model giỏ hàng
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738896#overview


Lab 4.13: Sử dụng tham số truy vấn
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738900#overview

Lab 4.14: Điền trước Dữ liệu vào Trang Chỉnh sửa Sản phẩm
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738904#overview

Lab 4.15: Liên kết đến Trang chỉnh sửa
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738906#overview

Lab 4.16: Chỉnh sửa dữ liệu sản phẩm
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738910#overview

Lab 4.17: Thêm chức năng xóa sản phẩm
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738912#overview

Lab 4.18: Xóa các mục trong giỏ hàng
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738914#overview

Lab 4.19: Hiển thị các mặt hàng trong giỏ hàng trên trang Giỏ hàng
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738916#overview

Lab 4.20: Xóa các mục trong Giỏ hàng
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738918#overview

Lab 4.21: Sửa lỗi Xóa sản phẩm
https://funix.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738920#overview



1. Khởi tạo
npm init 

2. Add configurations

3. đã cài nodemon ở chế độ global npm install -g nodemon

4. Thêm vào launch.json / configurations
"restart":true,
"runtimeExecutable": "nodemon",
"console": "integratedTerminal"

5. sửa package.json / scripts
"start":"nodemon app.js",

6. Cài đặt ExpressJS
npm install --save express


7. cài đặt 
npm install --save body-parser

8. Cài đặt các trình tạo mẫu
npm install --save ejs pug express-handlebars







chạy file bằng câu lệnh node first-app.js

- Hãy commit code lên git và đảm bảo rằng bạn sẽ không xoá repositories cho đến khi kết thúc môn học. Các bài lab, assigment sẽ nộp bài bằng link git.
- Để tránh tạo quá nhiều repositories không cần thiết, bạn hãy xem video dưới đây và tạo mỗi bài lab, bài ASM một Branch:
- https://youtu.be/-Q-9HMvhdz4 (hoặc xem ở dưới)
- Lưu ý: hãy để repository của bạn là public cho đến khi review lab xong.
- Đặt tên bài lab ở Github theo quy định sau: LAB+number hoặc ASM+number. Ví dụ: LAB01, ASM1


# chạy file
node first-app.js


# Khởi tạo
git init
git remote add origin https://github.com/thunghiemweb/node_lab.git

# Tạo branch
git checkout - b lab1.1

# up lên
git push--set - upstream origin lab1.1
hoặc
git push origin lab1.1

# up commit mới
git add.
git commit - m 'ghi chú'
git push


# chuyển branch
git checkout ten_branch_can_den


