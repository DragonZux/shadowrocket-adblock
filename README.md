# DragonZux All In One VIP ProMax (Shadowrocket)

Bộ cấu hình và Module toàn diện dành cho **Shadowrocket trên iOS**: Chặn sạch quảng cáo YouTube và mở khóa tính năng Premium / VIP của hơn 15 ứng dụng phổ biến nhất.

> [!TIP]
> Toàn bộ các script xử lý được lưu trữ trực tiếp trên repo này, đảm bảo hoạt động độc lập, tốc độ tải nhanh và không lo bị lỗi do link bên thứ ba biến mất.

---

## 🌟 Danh sách tính năng hỗ trợ

| Ứng dụng | Tính năng mở khóa / Tác dụng |
|---|---|
| **YouTube** | Chặn quảng cáo video & trang chủ, phát trong nền (Background), PiP, phụ đề/lời bài hát tiếng Việt |
| **Duolingo** | Mở khóa Super / Max, **Trái tim vô hạn (Unlimited Hearts)**, không quảng cáo |
| **Locket** | Mở khóa Locket Gold (quay video 15s/30s, tải ảnh/video HD, huy hiệu Gold) |
| **Spotify** | Mở khóa Premium (chuyển bài tự do, phát mọi bài từ tìm kiếm & thư viện đã thích) |
| **XMind** | Mở khóa bản quyền Pro / VIP trọn đời (vẽ sơ đồ tư duy không giới hạn) |
| **WPS Office** | Mở khóa Siêu hội viên (Super VIP), full tính năng chuyển đổi PDF, ghép file, nhận diện OCR |
| **CamScanner** | Mở khóa SVIP (quét HD, xuất PDF không watermark, nhận diện OCR không giới hạn) |
| **Scanner Pro** | Mở khóa Scanner Pro Plus (Readdle) |
| **SoundCloud** | Mở khóa SoundCloud Go+ (âm thanh chất lượng cao HQ, không quảng cáo âm thanh) |
| **PicsArt** | Mở khóa PicsArt Gold (công cụ chỉnh sửa nâng cao & AI) |
| **Wink** | Mở khóa Wink VIP+ / SVIP (gói cao cấp nhất: làm đẹp video, siêu độ nét AI 4K, xuất video không giới hạn) |
| **Kinemaster** | Mở khóa Kinemaster Premium (không watermark, xuất video HD) |
| **Truecaller** | Mở khóa Truecaller Gold (huy hiệu Gold, Gold Caller ID, xem ai vào trang cá nhân, chặn spam nâng cao) |
| **BeautyPlus** | Mở khóa tính năng VIP & tài sản trả phí |
| **Alight Motion** | Mở khóa bản quyền tài khoản Pro |
| **Sub-Store** | Tích hợp công cụ đồng bộ & quản lý proxy Sub-Store |

---

## 🚀 Cách cài đặt

Bạn có thể chọn **1 trong 2 cách** tùy nhu cầu:

### Cách 1: Cài đặt dạng Module (Khuyên dùng nếu bạn đã có cấu hình riêng)

1. Mở **Shadowrocket** → chọn mục **Cấu hình (Config)**.
2. Nhấn vào mục **Modules** (ở phía dưới).
3. Nhấn dấu **+** ở góc trên bên phải, dán đường link sau rồi lưu:
   ```
   https://raw.githubusercontent.com/DragonZux/shadowrocket-adblock/main/adblock.sgmodule
   ```
4. Bật Module vừa thêm.

---

### Cách 2: Cài đặt dạng File Cấu hình (Config trọn gói)

1. Mở **Shadowrocket** → mục **Cấu hình (Config)**.
2. Nhấn dấu **+** ở góc trên cùng, dán link sau:
   ```
   https://raw.githubusercontent.com/DragonZux/shadowrocket-adblock/main/10in1_Vip_ProMax.conf
   ```
3. Nhấn vào file cấu hình vừa tải về và chọn **Sử dụng cấu hình**.

---

## 🔐 Bắt buộc: Kích hoạt Giải mã HTTPS (MITM)

Để Shadowrocket lọc được quảng cáo và mở khóa app, bạn bắt buộc phải bật MITM:

1. Trong **Shadowrocket** → **Cấu hình (Config)** → Nhấn vào chữ **(i)** cạnh file cấu hình đang dùng.
2. Kéo xuống tìm mục **HTTPS Decryption (Giải mã HTTPS)** và bật lên.
3. Chọn **Tạo chứng chỉ mới (Generate New CA Certificate)** → chọn tiếp **Cài đặt chứng chỉ (Install Certificate)**.
4. Mở **Cài đặt của iPhone/iPad**:
   - Vào mục **Đã tải về hồ sơ (Profile Downloaded)** → nhấn **Cài đặt**.
   - Tiếp tục vào: **Cài đặt → Cài đặt chung → Giới thiệu → Cài đặt tin cậy chứng nhận** (General → About → Certificate Trust Settings).
   - Gạt **BẬT** tin cậy cho chứng chỉ của Shadowrocket.
5. Quay lại Shadowrocket, kết nối VPN rồi tắt hẳn các app cần dùng trong đa nhiệm và mở lại để tận hưởng!

---

## 🔄 Cập nhật

- Khi có bản cập nhật mới trên GitHub, trong Shadowrocket bạn chỉ cần vào mục **Modules** hoặc **Config**, vuốt xuống để làm mới tải bản mới nhất.

---

## 💡 Mẹo sử dụng một số App đặc thù

- **Locket Gold (Video 15s & 30s):**
  - **Quay trực tiếp trên ứng dụng:** Giữ nút chụp camera tối đa là **15 giây** (đây là giới hạn giao diện quay camera trực tiếp cố định của ứng dụng Locket đối với mọi tài khoản).
  - **Đăng video 30 giây:** Bấm vào **biểu tượng Thư viện ảnh (Camera Roll)** ở góc dưới bên trái màn hình camera Locket → Chọn video bạn đã quay sẵn bằng camera iPhone (độ dài tối đa 30 giây) để đăng lên Widget.
- **Wink VIP+ & Truecaller Gold:**
  - Sau khi cập nhật cấu hình/module trong Shadowrocket, hãy vuốt tắt hẳn app chạy ngầm (Force Close).
  - Mở lại app: Với Wink nếu chưa nhảy VIP+, vào mục **Tài khoản / Cài đặt** → nhấn **Khôi phục giao dịch mua (Restore Purchases)** là sẽ nhận trọn bộ **VIP+** vĩnh viễn.

---

## ⚠️ Lưu ý

- Đây là cấu hình phục vụ mục đích học tập, thử nghiệm và tối ưu hóa trải nghiệm mạng cá nhân.
- Nếu gặp lỗi trên ứng dụng bất kỳ, bạn có thể tắt tạm thời Module hoặc gửi phản hồi tại mục [Issues](https://github.com/DragonZux/shadowrocket-adblock/issues).
