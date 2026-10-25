# Shadowrocket AdBlock

Module Shadowrocket chặn quảng cáo YouTube và các mạng quảng cáo, theo dõi phổ biến (Google Ads, Facebook Audience Network, Unity Ads, Firebase Analytics).

- Chỉ dùng rule có sẵn của Shadowrocket, **không chạy script bên ngoài**.
- **Không** mở khóa gói trả phí của app nào.
- Chỉ giải mã HTTPS (MITM) cho các tên miền YouTube cần lọc quảng cáo.

## Link cài

```
https://raw.githubusercontent.com/DragonZux/shadowrocket-adblock/main/adblock.sgmodule
```

## Cách cài

1. Mở **Shadowrocket → Config (Cấu hình) → Modules → dấu +**, dán link ở trên rồi lưu.
2. Bật module vừa thêm.
3. Bật giải mã HTTPS:
   - Vào **Config → HTTPS Decryption**, bật lên và chọn **Generate New CA Certificate**, rồi **Install Certificate**.
   - Vào **Cài đặt iOS → Đã tải về hồ sơ** để cài chứng chỉ.
   - Vào **Cài đặt → Cài đặt chung → Giới thiệu → Cài đặt tin cậy chứng nhận**, bật tin cậy cho chứng chỉ của Shadowrocket.
4. Kết nối Shadowrocket, sau đó tắt hẳn app YouTube rồi mở lại.

## Cập nhật

Vào **Config → Modules**, kéo xuống để tải lại bản mới nhất.

## Module làm gì

| Phần | Tác dụng |
|---|---|
| `[Rule]` | Chặn QUIC của YouTube và chặn tên miền quảng cáo, theo dõi |
| `[Url Rewrite]` | Chặn link quảng cáo YouTube và lấy luồng video không chèn quảng cáo |
| `[Map Local]` | Trả về rỗng cho yêu cầu tải quảng cáo trước video |
| `[MITM]` | Danh sách tên miền được giải mã: `*.googlevideo.com`, `www.youtube.com`, `s.youtube.com` |

## Lưu ý

- YouTube hay thay đổi cách chèn quảng cáo, nên có lúc quảng cáo vẫn lọt qua. Khi đó hãy tải lại module để lấy bản mới.
- Module chạy theo tên miền nên dùng được ở mọi nước có thể cài Shadowrocket và truy cập YouTube.
- Nếu app nào bị lỗi sau khi bật module, tắt module đi để kiểm tra rồi báo lại ở mục [Issues](https://github.com/DragonZux/shadowrocket-adblock/issues).
