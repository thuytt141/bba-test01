# Lesson 04
## 1. Object

### Cách khai báo object
Cú pháp:

{} hoặc new Object ()

Ví dụ: let obj = { a : 1}

### Truy xuất 
.key hoặc ["key]

Ví dụ: obj.a hoặc obj["a]
### Thêm sửa
obj.key = value

Ví dụ obj.b = 2
### Xoá
delete obj.key

Ví dụ: delete obj.a
### Lồng nhau
value là object

Ví dụ: obj.x.y.z

## 2. Array
### Khai báo
Cú pháp:  []

Ví dụ: let arr = [1, 2, 3]
### Truy xuất
Cú pháp: arr[index]

Ví dụ: arr[0] → 1

### Đếm phần tử
Cú pháp: arr.length
### Thêm cuối
Cú pháp: arr.push(value)

Ví dụ: arr.push(4)

### Xoá cuối
Cú pháp: arr.pop()

## 3. Function
### Khai báo: Tạo hàm, chưa chạy
Cú pháp: function tenHam ()
{ ... }

### Gọi hàm: chạy code bên trong
Cú pháp: tenHam ()

### Tham số: Truyền vào data
Cú pháp: function tenHam (a, b) { ... }

### Trả kết quả: gửi kết quả về nơi gọi
Cú pháp: return giaTriTraVe

## 4. Phạm vi của biến
- Block scope (Khối): Biến được khai báo trong cặp ngoặc nhọn
    - var: không bị giới hạn bởi cặp ngoặc nhọn
    - let/const: bị giới hạn bởi cặp ngoặc ngon, ra ngoài bị undefined

- Function scope (hàm): biến được khai báo trong 1 hàm
    - Cả let/var/const ra ngoài hàm đều bị undefined

- Toàn cục (global): biến được khai báo ở một dòng code tự do, không nằm trong khối hay hàm

## 5. JavaScript- break và continue
- break dùng để thoát khỏi vòng lặp

- continue dùng để bổ qua phần còn lại của vòng lặp và chuyển sang lần lặp tiếp theo

## Câu điều kiện nâng cao

- if...else: Thực thi code khác nhau cho trường hợp true và false
- if...else...if: Kiểm tra nhiều điều kiện thưo thứ tự
- Ternary operator (toán tử điều kiện): Cách viết ngắn gọn cho if..else
- for...in Loop: dùng để duyệt qua các thuộc tính của một object
- forEach Method: Method của Array để thực thi một function cho mỗi phần tử, không thể dùng break hoặc continue




