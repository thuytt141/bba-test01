## Lesson 01
### Cấu hình Git
- Config username: git config --global user.name "tên bạn"
- Config email: git config --global user.email "email của bạn"
- Config branch default: git config --global init.defaultBranch main
### Kết nối với GitHub
- Tạo SSH Keys: 

    - ssh-keygen -t rsa -b 4096 -C "your_email"

 - Lấy nội dung ssh key:
    - cat ~ssh/id_rsa.pub
    - sau đó copy key này vào setting ssh trên git để thêm ssh key   

### Cài đặt Playwright
- Tạo 1 thư mục
- Mở thư mục bằng VS code
- Mở terminal lên chạy lệnh: npm init playwright@latest, rồi tiếp tục enter
