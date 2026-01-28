# 🚀 QUICKSTART - Bắt Đầu Nhanh Chóng

## 3 Bước Đơn Giản Để Sửa Website

### **BƯỚC 1️⃣: Chọn Năm Cần Chỉnh Sửa**

Mở thư mục `/components/timeline/` và chọn file tương ứng:

- Năm 1945? → Mở `timeline-1945.tsx`
- Năm 1954? → Mở `timeline-1954.tsx`
- Năm 1975? → Mở `timeline-1975.tsx`
- Năm 1986? → Mở `timeline-1986.tsx`
- Năm 1991? → Mở `timeline-1991.tsx`
- Năm 2011? → Mở `timeline-2011.tsx`

### **BƯỚC 2️⃣: Tìm Phần Cần Chỉnh Sửa**

Mỗi file có comment rõ ràng. Hãy dùng **Ctrl+F** để tìm:

| Cần chỉnh sửa gì? | Tìm cái này |
|---|---|
| **Tiêu đề** | `[EDIT TITLE]` |
| **Nội dung text** | `[EDIT CONTENT]` |
| **Hình ảnh** | `[EDIT IMAGE]` |
| **Video YouTube** | `[EDIT VIDEO]` |
| **Bài hát** | `[EDIT MUSIC]` |
| **Sự kiện** | `[EDIT EVENTS]` |

### **BƯỚC 3️⃣: Thay Đổi & Lưu**

1. Sửa text/link theo hướng dẫn
2. Bấm `Ctrl+S` để lưu
3. Reload website để xem thay đổi

---

## 🎯 Ví Dụ Nhanh - Đổi Tiêu Đề Năm 1945

**TÌM:** `[EDIT TITLE]` trong file `timeline-1945.tsx`

**TRƯỚC:**
```tsx
<h3>1945: Cách Mạng Tháng Tám</h3>
```

**SAU:**
```tsx
<h3>1945: Ngày Độc Lập Của Việt Nam</h3>
```

**LƯU & RELOAD** ✓

---

## 🎯 Ví Dụ Nhanh - Thêm Video YouTube

**TÌM:** `[EDIT VIDEO]` trong file tương ứng

**LẤY VIDEO ID:**
- URL YouTube: `https://www.youtube.com/watch?v=abc123xyz`
- Video ID: `abc123xyz`

**THAY ĐỔI:**
```tsx
// TRƯỚC:
src="https://www.youtube.com/embed/VIDEO_ID"

// SAU:
src="https://www.youtube.com/embed/abc123xyz"
```

**LƯU & RELOAD** ✓

---

## 🎯 Ví Dụ Nhanh - Thêm Hình Ảnh

**TÌM:** `[EDIT IMAGE]` trong file tương ứng

**CÁCH 1 - Dùng URL từ internet:**
```tsx
src="https://example.com/image.jpg"
```

**CÁCH 2 - Upload vào /public/images/:**
1. Upload file ảnh vào `/public/images/`
2. Thay: `src="/images/ten-file.jpg"`

---

## 🎯 Ví Dụ Nhanh - Thêm Bài Hát

**TÌM:** `[EDIT MUSIC]` trong file tương ứng

**CÁCH 1 - Upload MP3 vào /public/audio/:**
```tsx
<source src="/audio/ten-bai-hat.mp3" type="audio/mpeg" />
```

**CÁCH 2 - Dùng URL từ internet:**
```tsx
<source src="https://example.com/song.mp3" type="audio/mpeg" />
```

---

## 🎯 Ví Dụ Nhanh - Thêm Sự Kiện

**TÌM:** `[EDIT EVENTS]` trong file tương ứng

**THÊM SỰ KIỆN MỚI:**
```tsx
<ul>
  <li>• Sự kiện cũ 1</li>
  <li>• Sự kiện cũ 2</li>
  <li>• ⭐ SỰ KIỆN MỚI CỦA TÔI</li>  ← Thêm dòng này
</ul>
```

---

## 💾 Quy Trình Chỉnh Sửa

```
Mở file → Tìm [EDIT ...] → Thay đổi → Ctrl+S lưu → Reload website
```

---

## ❓ Gặp Vấn Đề?

| Vấn đề | Giải pháp |
|---|---|
| Website không thay đổi | Lưu file (Ctrl+S) + Reload (Ctrl+R) |
| Video không hiển thị | Kiểm tra VIDEO_ID có đúng |
| Hình không tải | Kiểm tra đường dẫn ảnh có đúng |
| Nhạc không phát | Kiểm tra đường dẫn MP3 có đúng |

---

## 📖 Tài Liệu Chi Tiết

Cần hướng dẫn chi tiết hơn? Mở file **`HUONG_DAN.md`** ✓
