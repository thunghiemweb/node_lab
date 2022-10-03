Lab 2.14: Cung cấp tệp tĩnh
Dẫn link tương đối các file css bằng cách đưa vào folder public/css.





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


