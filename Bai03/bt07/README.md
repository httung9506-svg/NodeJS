
# BÀI 7: XỬ LÝ THAM SỐ URL TRÊN WEB SERVER

**Sinh viên:** Huỳnh Thanh Tùng

## 1. Giới thiệu
Xây dựng Web Server bằng Node.js sử dụng module http
và đối tượng URL để xử lý tham số URL.

## 2. Các chức năng
- Tạo Web Server tại cổng 3001.
- Truy cập /hello?name=Minh hiển thị Xin chào Minh.
- Truy cập /sum?a=10&b=20 hiển thị Tổng = 30.
- Thông báo lỗi khi thiếu tham số.
- Thông báo lỗi khi giá trị không hợp lệ.

## 3. Các bước thực hiện

Bước 1: Tạo thư mục Bt07.

Bước 2: Tạo file bai07.js.

Bước 3: Sử dụng module http và đối tượng URL.

Bước 4: Tạo Web Server tại cổng 3001.

Bước 5: Xử lý các tham số URL.

Bước 6: Kiểm tra kết quả trên trình duyệt.

## 4. Lệnh thực hiện

Mở Terminal tại thư mục Bt07.

Chạy chương trình bằng lệnh:

node bai07.js

## 5. Kiểm tra kết quả

### Chức năng Hello
http://localhost:3001/hello?name=Minh

Kết quả: Xin chào Minh.

### Chức năng Sum
http://localhost:3001/sum?a=10&b=20

Kết quả: Tổng = 30.

### Kiểm tra lỗi
http://localhost:3001/hello

http://localhost:3001/sum?a=abc&b=20

## 6. Hình ảnh minh họa

### Ảnh chạy chương trình
<img width="353" height="45" alt="image" src="https://github.com/user-attachments/assets/b3cf949b-6ee2-4c32-8afb-66498dda6509" />


### Kết quả Hello
<img width="447" height="121" alt="image" src="https://github.com/user-attachments/assets/eef800fd-6628-45ac-827a-712964a0ee02" />


### Kết quả Sum
<img width="453" height="148" alt="image" src="https://github.com/user-attachments/assets/bcab0424-894b-4681-87e2-5d9679aaa5f6" />


### Kết quả kiểm tra lỗi
<img width="295" height="133" alt="image" src="https://github.com/user-attachments/assets/b40a980f-6adc-42ff-9868-b471d2c82b59" />


## 7. Kết luận
Chương trình chạy thành công, xử lý được tham số URL,
tính tổng hai số và kiểm tra dữ liệu không hợp lệ.
