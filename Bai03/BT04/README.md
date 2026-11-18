
# BÀI 4: THÊM VÀ HIỂN THỊ DỮ LIỆU MONGODB

**Sinh viên:** Huỳnh Thanh Tùng

**Môn học:** Module, File System và cơ sở dữ liệu

## 1. Giới thiệu

Xây dựng chương trình Node.js kết nối MongoDB,
thêm dữ liệu sinh viên và hiển thị danh sách sinh viên.

## 2. Yêu cầu

- Kết nối MongoDB đang chạy trên máy.
- Database: qlsinhvien.
- Collection: students.
- Thêm ít nhất 3 sinh viên bằng insertMany().
- Sử dụng find() để hiển thị danh sách sinh viên.
- Đóng kết nối sau khi hoàn thành.

## 3. Các bước thực hiện

### Bước 1: Cài đặt thư viện MongoDB

npm install mongodb

### Bước 2: Tạo file bai04.js

Sử dụng MongoClient để kết nối MongoDB.

### Bước 3: Thêm dữ liệu

Sử dụng insertMany() để thêm 3 sinh viên gồm:
masv, hoten, tuoi, diem.

### Bước 4: Hiển thị dữ liệu

Sử dụng find() để lấy danh sách sinh viên
và hiển thị trên Terminal.

### Bước 5: Đóng kết nối

Sử dụng client.close() để đóng kết nối MongoDB.

## 4. Lệnh chạy chương trình

Mở Terminal tại thư mục Bt04.

Chạy lệnh:

node bai04.js

## 5. Kết quả thực hiện

- Kết nối MongoDB thành công.
- Thêm thành công 3 sinh viên.
- Hiển thị danh sách sinh viên trên Terminal.
- Dữ liệu được lưu trong MongoDB.
- Đóng kết nối sau khi hoàn thành.

## 6. Hình ảnh minh họa

### Ảnh 2: Chạy chương trình trên Terminal

<img width="268" height="309" alt="image" src="https://github.com/user-attachments/assets/1cdf621e-18f5-4f15-b36b-03c19b8fddf7" />


### Ảnh 3: Dữ liệu trên MongoDB Compass

<img width="635" height="397" alt="image" src="https://github.com/user-attachments/assets/c1089e17-aa28-4366-ae2b-939c112e37b2" />


## 7. Kết luận

Chương trình đã thực hiện thành công việc kết nối
MongoDB, thêm và hiển thị danh sách sinh viên
theo đúng yêu cầu bài thực hành.
