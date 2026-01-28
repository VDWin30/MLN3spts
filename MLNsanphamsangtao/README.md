# Website Timeline Lịch Sử - Chủ Nghĩa Xã Hội Việt Nam

Đây là một website giáo dục về lịch sử Chủ nghĩa xã hội ở Việt Nam với **timeline dọc tương tác** hiển thị 6 mốc quan trọng: 1945, 1954, 1975, 1986, 1991, 2011.

## 🎨 Tính Năng

✅ **Timeline dọc đẹp mắt** - Hiển thị các năm theo chiều dọc với điểm kết nối  
✅ **Responsive Design** - Hoạt động tốt trên desktop, tablet, mobile  
✅ **Hỗ trợ Multimedia** - Hình ảnh, video YouTube, bài hát MP3  
✅ **Dễ chỉnh sửa** - Mỗi năm có file riêng, comment chi tiết  
✅ **Navigation tích hợp** - Tab ngang (mobile) + timeline dọc (desktop)  

## 📁 Cấu Trúc File

```
/components/timeline/
├── timeline-1945.tsx     ← Cách Mạng Tháng Tám
├── timeline-1954.tsx     ← Điện Biên Phủ
├── timeline-1975.tsx     ← Thống Nhất Đất Nước
├── timeline-1986.tsx     ← Đổi Mới
├── timeline-1991.tsx     ← Đại Hội VII Đảng
└── timeline-2011.tsx     ← Đại Hội XI Đảng

/public/
├── /images/              ← Hình ảnh cho mỗi năm
└── /audio/               ← Bài hát MP3

/app/
├── page.tsx              ← Trang chính (điều khiển timeline)
├── layout.tsx            ← Cấu trúc HTML
└── globals.css           ← Màu sắc & CSS toàn site

QUICKSTART.md             ← Hướng dẫn bắt đầu nhanh
HUONG_DAN.md              ← Hướng dẫn chi tiết (rất chi tiết!)
README.md                 ← File này
```

## 🚀 Bắt Đầu Nhanh Chóng

### 1️⃣ Chọn Năm Cần Sửa
Mở file timeline tương ứng trong `/components/timeline/`

### 2️⃣ Tìm Phần Cần Chỉnh Sửa
Dùng **Ctrl+F** để tìm:
- `[EDIT TITLE]` → Tiêu đề
- `[EDIT CONTENT]` → Nội dung
- `[EDIT IMAGE]` → Hình ảnh
- `[EDIT VIDEO]` → Video YouTube
- `[EDIT MUSIC]` → Bài hát
- `[EDIT EVENTS]` → Sự kiện

### 3️⃣ Chỉnh Sửa & Lưu
```
1. Thay đổi nội dung
2. Bấm Ctrl+S để lưu
3. Reload website (Ctrl+R)
```

**Xem chi tiết:** Mở `QUICKSTART.md` hoặc `HUONG_DAN.md`

## 💡 Ví Dụ - Thêm Video YouTube

1. Mở file `timeline-1945.tsx`
2. Tìm `[EDIT VIDEO]`
3. Lấy Video ID từ YouTube (ví dụ: `abc123`)
4. Thay vào: `src="https://www.youtube.com/embed/abc123"`
5. Lưu file & reload

## 🎯 Ví Dụ - Thêm Hình Ảnh

**Cách 1 - URL từ internet:**
```tsx
src="https://example.com/image.jpg"
```

**Cách 2 - Upload lên server:**
1. Upload ảnh vào `/public/images/`
2. Thay: `src="/images/ten-file.jpg"`

## 🎵 Ví Dụ - Thêm Bài Hát

```tsx
<source src="/audio/ten-bai-hat.mp3" type="audio/mpeg" />
```

1. Upload MP3 vào `/public/audio/`
2. Thay đường dẫn trong `src`

## 🎨 Tùy Chỉnh Thiết Kế

### Thay Đổi Màu Sắc
- Mở `/app/globals.css`
- Tìm section `:root { ... }`
- Thay đổi các giá trị màu

### Thay Đổi Font
- Mở `/app/layout.tsx`
- Thay đổi import font từ `next/font/google`

## ❓ Câu Hỏi Thường Gặp

**Q: Website không thay đổi sau khi chỉnh sửa?**
- Lưu file (Ctrl+S)
- Reload website (Ctrl+R)
- Xóa cache browser nếu cần

**Q: Video YouTube không hiển thị?**
- Kiểm tra VIDEO_ID có đúng không
- Video phải ở chế độ public

**Q: Hình ảnh không tải?**
- Kiểm tra đường dẫn ảnh
- Đảm bảo ảnh được upload vào `/public/images/`

**Q: Muốn thêm năm mới (2024)?**
- Tạo file `timeline-2024.tsx` mới
- Sao chép nội dung từ file cũ
- Import vào `/app/page.tsx`
- Thêm vào mảng `TIMELINE_YEARS`

**Q: Làm sao tìm Video ID từ YouTube?**
```
URL: https://www.youtube.com/watch?v=abc123xyz
Video ID: abc123xyz (phần sau v=)

Hoặc: https://youtu.be/abc123xyz
Video ID: abc123xyz (phần sau /)
```

## 🎓 Các File Hướng Dẫn

| File | Nội Dung |
|---|---|
| **QUICKSTART.md** | 🏃 Bắt đầu nhanh - 3 bước đơn giản |
| **HUONG_DAN.md** | 📖 Hướng dẫn chi tiết - Mọi chi tiết |
| **README.md** | 📋 File này - Tổng quan |

## 📚 Cách Sử Dụng File Hướng Dẫn

1. **Lần đầu tiên?** → Đọc `QUICKSTART.md` (5 phút)
2. **Cần hướng dẫn chi tiết?** → Đọc `HUONG_DAN.md` (chi tiết mọi việc)
3. **Cần tổng quan?** → Đọc `README.md` (file này)

## 🔧 Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** Built-in CSS

## 📸 Giao Diện

### Desktop
- Timeline dọc ở bên trái
- Nội dung bên phải
- Smooth animations

### Mobile
- Tab ngang để chọn năm
- Nội dung full width
- Responsive design

## 💾 Quy Trình Chỉnh Sửa

```
1. Tìm file timeline cần sửa
2. Tìm [EDIT ...] cần thay đổi
3. Chỉnh sửa nội dung
4. Lưu file (Ctrl+S)
5. Reload website (Ctrl+R)
```

## 🎯 Checklist Chỉnh Sửa

- [ ] Tiêu đề đã cập nhật?
- [ ] Nội dung chính có đúng?
- [ ] Hình ảnh tải được không?
- [ ] Video YouTube hoạt động?
- [ ] Bài hát phát được không?
- [ ] Danh sách sự kiện đầy đủ?
- [ ] Đã reload website để xem thay đổi?

## 🚀 Deploy (Công Bố)

Khi đã hoàn thành:

1. **Vercel (Khuyến nghị):**
   - Kết nối GitHub repo
   - Deploy ngay tự động

2. **GitHub:**
   - Commit & push code
   - Tạo GitHub Pages

3. **Hosting khác:**
   - Build: `npm run build`
   - Deploy folder `.next`

## 📝 Notes

- Mỗi file timeline là **độc lập** - sửa file nào không ảnh hưởng file khác
- Comment trong code **rất chi tiết** - giúp bạn hiểu từng phần
- Sử dụng `Ctrl+F` để tìm nhanh `[EDIT ...]`
- Luôn lưu file trước khi reload

## 💬 Cần Giúp?

1. Kiểm tra lại hướng dẫn trong `HUONG_DAN.md`
2. Kiểm tra xem file có được lưu không
3. Thử reload website lại
4. Xóa cache browser nếu cần

---

**Chúc bạn thành công! 🎉**

Website này được tạo để giáo dục và dễ bảo trì. Mỗi năm có file riêng, comment chi tiết, và hướng dẫn rõ ràng để bạn có thể tùy chỉnh theo ý muốn!
