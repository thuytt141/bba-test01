# A/ Markdown
## 1. Định dạng markdown
**chữ in đậm** dùng 2 dấu ** 
__chữ in đậm__ dùng 2 dấu gạch dưới
# Tiêu đề H1 dùng 1 dấu #
## Tiêu đề H2 dùng 2 dấu #
### Tiêu đề H3 dùng 3 dấu #
#### Tiêu đề H4 dùng 4 dấu #
##### Tiêu đề H5 dùng 5 dấu #
###### Tiêu đề H6 dùng 6 dấu #
văn bản thông thường

## Danh sách không thứ tự
- Item 1
- Item 2
    - Sub-item 1
    - Sub-item 2
## 3. Link và image
### Image sẽ gồm dấu ! ở đầu và cuối mô tả dấu [] + (url)
![Bàn làm việc có máy tính, điện thoại, notebook](https://lite.demos.wpbeaverbuilder.com/wp-content/uploads/sites/28/bb-plugin/cache/headway-5QgIuuBxKwM-unsplash-768x768-2-landscape.jpg)

### Link [Mô tả]+ (link)
[Tài liệu bài tập](https://material.playwrightvn.com/)

## 4. Block quotes
> Đây là block quote
>> Nested block quote

## 5. Đường kẻ ngang
---
hoặc
***
hoặc
___

# B/ Các câu lệnh sử dụng với Git
- git init //khởi tạo repo local

- git add <file_name> //add file này từ vùng working directory vào staging để sẵn sàng commit

- git add . // add tất cả các file có thay đổi vào staging

- git commit - m "message" //commit file kèm theo message

# C/ Các vùng khi làm việc
a. Tạo 3 file: file1, file2, file3
Tại local: có 3 file

b. Chạy lệnh: git init
Tại working directory: có 3 file
Tại staging: trống
Tại repo: trống

c. Chạy lệnh: git commit -m”init project”
=> báo lỗi vì chưa chạy lệnh git add

d. Chạy lệnh: git add file1
=> add file 1 vào staging
working directory: file 2, file 3
repo: trống

e. Chạy lệnh: git commit -m”add file1”
working directory: file 2, file 3
staging: trống
repo: file 1

f. Chạy lệnh: git commit -m”add file”
=> báo lỗi
cuối cùng working directory: file 2, file 3
staging: trống
repo: file 1