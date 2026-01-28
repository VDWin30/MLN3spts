# 📖 Hướng Dẫn Chi Tiết - Website Timeline Lịch Sử Chủ Nghĩa Xã Hội Việt Nam

> Tài liệu này sẽ giúp bạn hiểu rõ cách chỉnh sửa từng mốc timeline một cách dễ dàng và chi tiết nhất.

## 📋 Cấu Trúc Thư Mục & Giải Thích

```
PROJECT_ROOT/
│
├── /components/timeline/          ← THƯ MỤC CHỨA CÁC TIMELINE
│   ├── timeline-1945.tsx           ← NĂM 1945: Cách Mạng Tháng Tám
│   ├── timeline-1954.tsx           ← NĂM 1954: Điện Biên Phủ
│   ├── timeline-1975.tsx           ← NĂM 1975: Thống Nhất Đất Nước
│   ├── timeline-1986.tsx           ← NĂM 1986: Đổi Mới
│   ├── timeline-1991.tsx           ← NĂM 1991: Đại Hội VII Đảng
│   └── timeline-2011.tsx           ← NĂM 2011: Đại Hội XI Đảng
│
├── /public/images/                ← THỰC MỤC CHỨA HÌNH ẢNH
│   ├── 1945-canh-mang.jpg         (Hình ảnh cho năm 1945)
│   ├── 1954-dien-bien-phu.jpg     (Hình ảnh cho năm 1954)
│   ├── 1975-thong-nhat.jpg        (Hình ảnh cho năm 1975)
│   ├── 1986-doi-moi.jpg           (Hình ảnh cho năm 1986)
│   ├── 1991-dai-hoi-vii.jpg       (Hình ảnh cho năm 1991)
│   └── 2011-dai-hoi-xi.jpg        (Hình ảnh cho năm 2011)
│
├── /public/audio/                 ← THỰC MỤC CHỨA BÀI HÁT/ÂM THANH
│   ├── 1945-bai-hat.mp3           (Bài hát cho năm 1945)
│   ├── 1954-bai-hat.mp3           (Bài hát cho năm 1954)
│   └── ... (tiếp tục cho các năm khác)
│
├── /app/
│   ├── page.tsx                   ← TRANG CHỈ HUY CHÍNH (quản lý tab năm)
│   ├── layout.tsx                 ← Cấu trúc HTML chính
│   └── globals.css                ← Màu sắc & CSS toàn bộ site
│
└── HUONG_DAN.md                   ← TỆP HƯỚNG DẪN NÀY

```

**GIẢI THÍCH:**
- Mỗi năm (1945, 1954, 1975, 1986, 1991, 2011) có **1 file riêng biệt**
- Điều này giúp bạn chỉnh sửa từng năm một cách độc lập mà không ảnh hưởng đến các năm khác
- File `/app/page.tsx` là "trung tâm điều khiển" - nó gọi các file timeline và hiển thị chúng

## 🔧 HƯỚNG DẪN CHI TIẾT: Cách Chỉnh Sửa Mỗi Mốc Timeline

### **📌 BƯỚC 1: Tìm File Cần Chỉnh Sửa**

1. Mở thư mục `/components/timeline/`
2. Tìm file tương ứng với năm bạn muốn chỉnh sửa
   - Ví dụ: muốn chỉnh sửa năm 1945 → mở file `timeline-1945.tsx`
3. Mở file bằng code editor (VS Code, Sublime, v.v.)

---

### **📝 BƯỚC 2: Cấu Trúc Chung Của Mỗi File Timeline**

Mỗi file timeline (ví dụ: `timeline-1945.tsx`) đều có cấu trúc giống nhau với các phần:

```tsx
export function Timeline1945() {
  return (
    <div className="space-y-8">
      
      {/* ============ PHẦN 1: TIÊU ĐỀ ============ */}
      <h3 className="text-2xl font-bold text-primary mb-4">
        1945: Cách Mạng Tháng Tám
      </h3>

      {/* ============ PHẦN 2: NỘI DUNG CHÍNH ============ */}
      <p className="text-base leading-relaxed text-foreground mb-4">
        Năm 1945 là năm định mệnh...
      </p>

      {/* ============ PHẦN 3: HÌNH ẢNH ============ */}
      <img src="/images/1945-canh-mang.jpg" alt="..." />

      {/* ============ PHẦN 4: VIDEO ============ */}
      <iframe src="https://www.youtube.com/embed/VIDEO_ID" />

      {/* ============ PHẦN 5: BÀI HÁT ============ */}
      <audio controls><source src="/audio/bai-hat.mp3" /></audio>

      {/* ============ PHẦN 6: SỰ KIỆN ============ */}
      <ul><li>Sự kiện 1</li></ul>

    </div>
  );
}
```

---

### **PHẦN 1️⃣ - TIÊU ĐỀ (Heading)**

**Vị trí:** Dòng đầu tiên trong hàm

**Mã hiện tại:**
```tsx
<h3 className="text-2xl font-bold text-primary mb-4">
  1945: Cách Mạng Tháng Tám
</h3>
```

**Cách chỉnh sửa:**
- Thay text `1945: Cách Mạng Tháng Tám` bằng tiêu đề của bạn
- Ví dụ: `1945: Ngày độc lập Việt Nam`

**Giải thích class CSS:**
- `text-2xl` → Kích thước chữ lớn (extra large)
- `font-bold` → Chữ đậm (bold)
- `text-primary` → Màu chữ chính (nâu đỏ)
- `mb-4` → Khoảng cách dưới (margin bottom)

---

### **PHẦN 2️⃣ - NỘI DUNG CHÍNH (Paragraphs)**

**Vị trí:** Sau tiêu đề, phần text mô tả

**Mã hiện tại:**
```tsx
<p className="text-base leading-relaxed text-foreground mb-4">
  Năm 1945 là năm định mệnh của lịch sử Việt Nam. Với Cách Mạng Tháng Tám...
</p>
```

**Cách chỉnh sửa:**
- Thay toàn bộ text bên trong `<p>...</p>`
- Có thể thêm nhiều đoạn `<p>` nếu muốn viết nhiều text

**Ví dụ thêm nhiều đoạn:**
```tsx
<p className="text-base leading-relaxed text-foreground mb-4">
  Đoạn 1: Nội dung đầu tiên của bạn...
</p>

<p className="text-base leading-relaxed text-foreground mb-4">
  Đoạn 2: Nội dung tiếp theo của bạn...
</p>

<p className="text-base leading-relaxed text-foreground mb-4">
  Đoạn 3: Nội dung cuối cùng của bạn...
</p>
```

**Giải thích class CSS:**
- `text-base` → Kích thước chữ bình thường
- `leading-relaxed` → Khoảng cách dòng thoải mái (dễ đọc)
- `text-foreground` → Màu chữ thông thường (đen)
- `mb-4` → Khoảng cách dưới

---

### **PHẦN 3️⃣ - HÌNH ẢNH (Image)**

**Vị trí:** Sau nội dung chính

**Mã hiện tại:**
```tsx
<div className="mb-6 bg-muted rounded-lg overflow-hidden h-64">
  <img 
    src="/images/1945-canh-mang.jpg" 
    alt="Cách Mạng Tháng Tám 1945"
    className="w-full h-full object-cover"
    onError={(e) => {
      e.currentTarget.src = "data:image/svg+xml,%3Csvg..."
    }}
  />
</div>
```

**Cách chỉnh sửa - CÁCH 1: Dùng hình từ internet**
1. Tìm hình ảnh trên Google Images
2. Sao chép URL ảnh (nhấp chuột phải → Copy image link)
3. Thay `/images/1945-canh-mang.jpg` bằng URL đó
   ```tsx
   src="https://example.com/path/to/image.jpg"
   ```

**Cách chỉnh sửa - CÁCH 2: Upload hình lên máy chủ**
1. Chuẩn bị file ảnh (JPG, PNG, WebP)
2. Upload file vào thư mục `/public/images/`
3. Thay đường dẫn:
   ```tsx
   src="/images/tên-file-của-tôi.jpg"
   ```

**Cách chỉnh sửa - Thay đổi Alt Text:**
- Alt text là mô tả hình ảnh (dùng cho SEO & accessibility)
- Thay `Cách Mạng Tháng Tám 1945` bằng mô tả của hình ảnh bạn

**Giải thích class CSS:**
- `mb-6` → Khoảng cách dưới
- `bg-muted` → Nền màu xám nhạt
- `rounded-lg` → Góc bo tròn
- `h-64` → Chiều cao ảnh (256px)
- `w-full h-full object-cover` → Ảnh full chiều cao/rộng

---

### **PHẦN 4️⃣ - VIDEO TƯ LIỆU (YouTube Video)**

**Vị trí:** Sau hình ảnh

**Mã hiện tại:**
```tsx
<div className="mb-6">
  <h4 className="font-semibold text-lg mb-3 text-primary">Phim Tư Liệu:</h4>
  <div className="bg-muted rounded-lg overflow-hidden aspect-video">
    <iframe 
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/VIDEO_ID" 
      title="Phim tư liệu 1945"
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  </div>
  <p className="text-sm text-muted-foreground mt-2">
    *Thay VIDEO_ID bằng ID của YouTube video
  </p>
</div>
```

**Cách chỉnh sửa - BƯỚC 1: Lấy Video ID từ YouTube**

Ví dụ URL YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- **Video ID** = `dQw4w9WgXcQ` (phần sau `v=`)

Hoặc nếu là shortened link: `https://youtu.be/dQw4w9WgXcQ`
- **Video ID** = `dQw4w9WgXcQ` (phần sau `/`)

**Cách chỉnh sửa - BƯỚC 2: Thay vào iframe src**
```tsx
// TRƯỚC:
src="https://www.youtube.com/embed/VIDEO_ID"

// SAU (ví dụ với video ID là dQw4w9WgXcQ):
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
```

**Cách chỉnh sửa - Thay đổi tiêu đề video:**
```tsx
// Thay "Phim Tư Liệu:" bằng tiêu đề của bạn
<h4 className="font-semibold text-lg mb-3 text-primary">
  Tài Liệu Lịch Sử Năm 1945
</h4>
```

**Cách chỉnh sửa - Thay đổi ghi chú:**
```tsx
// Thay text ghi chú dưới video
<p className="text-sm text-muted-foreground mt-2">
  Nguồn: Tài liệu từ VTV, năm 1945
</p>
```

---

### **PHẦN 5️⃣ - BÀI HÁT (Audio Player)**

**Vị trí:** Sau video

**Mã hiện tại:**
```tsx
<div className="mb-4">
  <h4 className="font-semibold text-lg mb-3 text-primary">Bài Hát Tiêu Biểu:</h4>
  <div className="bg-muted rounded-lg p-3">
    <audio 
      controls 
      className="w-full"
    >
      <source src="/audio/tien-quan-ca.mp3" type="audio/mpeg" />
    </audio>
  </div>
  <p className="text-sm text-muted-foreground mt-2">
    Tiến Quân Ca
  </p>
</div>
```

**Cách chỉnh sửa - CÁCH 1: Upload file MP3 lên máy chủ**
1. Chuẩn bị file nhạc MP3
2. Upload vào thư mục `/public/audio/`
3. Thay đường dẫn:
   ```tsx
   <source src="/audio/tên-file-của-tôi.mp3" type="audio/mpeg" />
   ```

**Cách chỉnh sửa - CÁCH 2: Dùng URL trực tiếp từ internet**
1. Tìm link MP3 từ các trang nhạc online
2. Thay vào src:
   ```tsx
   <source src="https://example.com/path/to/song.mp3" type="audio/mpeg" />
   ```

**Cách chỉnh sửa - Thay đổi tên bài hát:**
```tsx
// Thay "Tiến Quân Ca" bằng tên bài hát của bạn
<p className="text-sm text-muted-foreground mt-2">
  Tên Bài Hát Của Tôi - Tác giả
</p>
```

**Lưu ý quan trọng:**
- Tag `controls` làm hiển thị nút play/pause
- `type="audio/mpeg"` để báo định dạng là MP3
- Browser sẽ tự hỗ trợ phát nhạc

---

### **PHẦN 6️⃣ - SỰ KIỆN CHÍNH (Event List)**

**Vị trí:** Phần cuối cùng

**Mã hiện tại:**
```tsx
<div className="mt-6 pt-6 border-t border-border">
  <h4 className="font-semibold text-lg mb-3 text-primary">Sự Kiện Chính:</h4>
  <ul className="text-sm space-y-2 text-foreground">
    <li>• 19/8: Cách Mạng Tháng Tám bắt đầu</li>
    <li>• 2/9: Lễ tuyên bố độc lập ở Hà Nội</li>
    <li>• Hồ Chí Minh trở thành Chủ tịch đầu tiên</li>
  </ul>
</div>
```

**Cách chỉnh sửa - Thêm sự kiện mới:**
```tsx
// Thêm <li> mới vào danh sách
<ul className="text-sm space-y-2 text-foreground">
  <li>• Sự kiện cũ 1</li>
  <li>• Sự kiện cũ 2</li>
  <li>• SỰ KIỆN MỚI CỦA TÔI</li>  {/* ← Thêm dòng này */}
</ul>
```

**Cách chỉnh sửa - Xóa sự kiện:**
- Chỉ cần xóa toàn bộ dòng `<li>...</li>` đó

**Cách chỉnh sửa - Thay đổi tiêu đề:**
```tsx
// Thay "Sự Kiện Chính:" bằng tiêu đề khác
<h4 className="font-semibold text-lg mb-3 text-primary">
  Những Mốc Lịch Sử Quan Trọng
</h4>
```

**Giải thích class CSS:**
- `space-y-2` → Khoảng cách giữa các item
- `text-sm` → Chữ nhỏ
- `border-t border-border` → Đường kẻ ngang phía trên

---

## 📝 VÍ DỤ THỰC HÀNH: Chỉnh Sửa Hoàn Chỉnh Năm 1945

Dưới đây là ví dụ **từng bước** cách chỉnh sửa file `timeline-1945.tsx`:

### **BƯỚC 1: Mở file `timeline-1945.tsx`**
- Dùng code editor mở file `/components/timeline/timeline-1945.tsx`

### **BƯỚC 2: Tìm tiêu đề và thay đổi**
```tsx
// ✗ TRƯỚC - Tiêu đề cũ:
<h3 className="text-2xl font-bold text-primary mb-4">
  1945: Cách Mạng Tháng Tám
</h3>

// ✓ SAU - Tiêu đề mới:
<h3 className="text-2xl font-bold text-primary mb-4">
  1945: Cách Mạng Tháng Tám - Ngày Độc Lập Của Việt Nam
</h3>
```

### **BƯỚC 3: Cập nhật nội dung chính**
```tsx
// ✗ TRƯỚC - Nội dung cũ:
<p className="text-base leading-relaxed text-foreground mb-4">
  Năm 1945 là năm định mệnh của lịch sử Việt Nam...
</p>

// ✓ SAU - Thêm nội dung mới:
<p className="text-base leading-relaxed text-foreground mb-4">
  Năm 1945 là năm định mệnh của lịch sử Việt Nam. Cách Mạng 
  Tháng Tám diễn ra dưới sự lãnh đạo của Đảng Cộng sản Việt Nam...
</p>

<p className="text-base leading-relaxed text-foreground mb-4">
  Trên toàn đất nước, người dân Việt Nam từ phía Bắc vào phía Nam 
  đã đứng lên đấu tranh, tước chính quyền từ tay thực dân Pháp...
</p>
```

### **BƯỚC 4: Thay hình ảnh**
```tsx
// ✗ TRƯỚC:
<img 
  src="/images/1945-canh-mang.jpg" 
  alt="Cách Mạng Tháng Tám 1945"
/>

// ✓ SAU (dùng URL từ internet):
<img 
  src="https://upload.wikimedia.org/wikipedia/commons/image.jpg" 
  alt="Người dân Hà Nội ăn mừng ngày độc lập 1945"
/>
```

### **BƯỚC 5: Thay video YouTube**
```tsx
// ✗ TRƯỚC:
<iframe src="https://www.youtube.com/embed/VIDEO_ID" />

// ✓ SAU (lấy video ID từ YouTube):
// Nếu URL YouTube là: https://www.youtube.com/watch?v=abc123xyz
// Video ID là: abc123xyz
<iframe src="https://www.youtube.com/embed/abc123xyz" />
```

### **BƯỚC 6: Thay bài hát**
```tsx
// ✗ TRƯỚC:
<source src="/audio/tien-quan-ca.mp3" type="audio/mpeg" />

// ✓ SAU (nếu upload file lên server):
<source src="/audio/1945-tien-quan-ca.mp3" type="audio/mpeg" />

// Hoặc dùng URL từ internet:
<source src="https://example.com/audio/song.mp3" type="audio/mpeg" />
```

### **BƯỚC 7: Cập nhật danh sách sự kiện**
```tsx
// ✗ TRƯỚC:
<ul className="text-sm space-y-2 text-foreground">
  <li>• 19/8: Cách Mạng Tháng Tám bắt đầu</li>
  <li>• 2/9: Lễ tuyên bố độc lập ở Hà Nội</li>
</ul>

// ✓ SAU (thêm/xóa sự kiện):
<ul className="text-sm space-y-2 text-foreground">
  <li>• 19/8: Cách Mạng Tháng Tám bắt đầu toàn quốc</li>
  <li>• 25/8: Lãnh đạo Nhật đầu hàng Đồng minh</li>
  <li>• 28/8: Hội nghị toàn quốc của Việt Minh</li>
  <li>• 2/9: Lễ tuyên bố độc lập ở Ba Đình, Hà Nội</li>
  <li>• Hồ Chí Minh trở thành Chủ tịch đầu tiên của nước Việt Nam DCS</li>
</ul>
```

### **BƯỚC 8: Lưu file**
- Bấm `Ctrl+S` (hoặc `Cmd+S` trên Mac)
- Hoặc dùng menu File → Save

✅ **Xong! Tất cả thay đổi sẽ hiển thị ngay trên website.**

---

## 🎨 CHÚ THÍCH VỀ TAILWIND CSS CLASSES

Những class này được dùng trong code - bạn không cần thay đổi chúng, chỉ cần biết chúng làm gì:

### **Class Về Màu Sắc:**
- `text-primary` → Chữ màu nâu đỏ chính
- `text-foreground` → Chữ màu đen/tối
- `text-muted-foreground` → Chữ màu xám nhạt
- `bg-muted` → Nền xám nhạt
- `bg-primary` → Nền màu nâu đỏ
- `border-border` → Viền màu xám

### **Class Về Kích Thước:**
- `text-sm` → Chữ nhỏ
- `text-base` → Chữ bình thường
- `text-lg` → Chữ lớn
- `text-xl`, `text-2xl` → Chữ rất lớn

### **Class Về Khoảng Cách:**
- `mb-4` → Khoảng cách dưới (margin bottom)
- `mt-4` → Khoảng cách trên (margin top)
- `p-4` → Padding (khoảng cách bên trong)
- `space-y-2` → Khoảng cách giữa các phần tử dọc

### **Class Về Kiểu Dáng:**
- `font-bold` → Chữ đậm
- `font-semibold` → Chữ bán đậm
- `rounded-lg` → Góc bo tròn
- `shadow-lg` → Bóng đổ lớn

---

## 🔗 HƯỚNG DẪN: Lấy Video ID từ YouTube

### **Cách 1: Từ URL bình thường**
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                              ↑ Video ID là phần này
```
→ Video ID = `dQw4w9WgXcQ`

### **Cách 2: Từ URL rút gọn**
```
https://youtu.be/dQw4w9WgXcQ
          ↑ Video ID là phần này
```
→ Video ID = `dQw4w9WgXcQ`

### **Cách 3: Từ nút Share trên YouTube**
1. Mở video YouTube
2. Bấm nút **Share** (chia sẻ)
3. Bấm **Copy** → URL được sao chép
4. URL sẽ có dạng `https://youtu.be/VIDEO_ID`
5. Lấy phần VIDEO_ID

---

## ❓ CÂU HỎI THƯỜNG GẶP & CÁCH GIẢI QUYẾT

### **Q1: Chỉnh sửa xong nhưng website không thay đổi gì?**
**A:** 
- Đảm bảo bạn lưu file (Ctrl+S)
- Tải lại trang web (Ctrl+R hoặc F5)
- Xóa cache browser nếu vẫn không thấy

### **Q2: Video YouTube không hiển thị?**
**A:**
- Kiểm tra VIDEO_ID có đúng không
- Video phải ở chế độ **public** (không phải private)
- Kiểm tra link có dạng: `https://www.youtube.com/embed/VIDEO_ID`

### **Q3: Hình ảnh không tải?**
**A:**
- Kiểm tra đường dẫn ảnh có đúng không
- Nếu upload vào `/public/images/`, đường dẫn phải là `/images/ten-file.jpg`
- Nếu dùng URL từ internet, đảm bảo URL đó truy cập được

### **Q4: Âm thanh không phát?**
**A:**
- Kiểm tra đường dẫn MP3 có đúng không
- Browser cần hỗ trợ định dạng MP3
- Thử phát trực tiếp bằng cách nhập URL vào tab mới

### **Q5: Muốn thêm năm mới (ví dụ 2024)?**
**A:**
- Tạo file `timeline-2024.tsx` giống các file khác
- Thêm import và case trong `/app/page.tsx`
- Thêm dữ liệu vào mảng `TIMELINE_YEARS`

### **Q6: Làm sao thay đổi màu sắc toàn website?**
**A:**
- Mở file `/app/globals.css`
- Tìm section `:root {`
- Thay đổi các giá trị màu (ví dụ: `--primary: oklch(...)`)
- Lưu file và reload

### **Q7: Muốn thêm nhiều hình ảnh/video trong 1 năm?**
**A:**
- Chỉ cần thêm nhiều thẻ `<img>` hoặc `<iframe>` vào file
- Chúng sẽ tự hiển thị theo thứ tự từ trên xuống dưới

---

## 💡 MẸO & KINH NGHIỆM

**✓ Tách các nội dung thành nhiều đoạn `<p>` nhỏ**
- Dễ đọc hơn
- Dễ chỉnh sửa sau này

**✓ Luôn viết alt text cho hình ảnh**
- Tốt cho SEO
- Giúp người dùng với trình đọc màn hình

**✓ Kiểm tra lại trước khi công bố**
- Xem lại trên nhiều thiết bị (desktop, tablet, mobile)
- Kiểm tra video/âm thanh có phát được không

**✓ Backup file trước khi chỉnh sửa lớn**
- Sao chép file trước khi làm thay đổi lớn
- Như vậy có thể quay lại phiên bản cũ nếu cần

**✓ Sử dụng Ctrl+Z để undo**
- Nếu chỉnh sửa nhầm, nhấn Ctrl+Z (hoặc Cmd+Z) để hoàn tác

**✓ Dùng Ctrl+F để tìm kiếm**
- Dùng để tìm từ khóa nhanh trong file
- Ví dụ: Ctrl+F → "VIDEO_ID" → tìm nơi cần thay đổi

---

## 📞 LIÊN HỆ & HỖ TRỢ

Nếu gặp sự cố không thể giải quyết:
- Kiểm tra lại từng bước theo hướng dẫn
- Đảm bảo cú pháp (dấu ngoặc, dấu nháy) không sai
- Thử clear cache & reload lại

**Chúc bạn thành công! 🎉**
