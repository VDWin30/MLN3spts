# 🎨 Hướng Dẫn Tùy Chỉnh Toàn Bộ Website

Tài liệu này hướng dẫn cách thay đổi giao diện chung của website.

---

## 1️⃣ THAY ĐỔI MÀU SẮC

### Vị Trí File
```
/app/globals.css
```

### Những Màu Chính

Tìm section `:root {` và thay đổi:

```css
:root {
  /* Nền chính */
  --background: oklch(0.98 0.002 60);        ← Màu nền trắng/kem

  /* Chữ chính */
  --foreground: oklch(0.15 0.01 240);        ← Màu chữ đen/tối

  /* Card background */
  --card: oklch(1 0 0);                      ← Màu nền card (trắng)

  /* Màu chính (brand color) */
  --primary: oklch(0.25 0.25 30);            ← Màu nâu đỏ chính

  /* Màu phụ */
  --secondary: oklch(0.92 0.05 45);          ← Màu vàng nhạt

  /* Màu mờ */
  --muted: oklch(0.88 0.03 240);             ← Màu xám nhạt

  /* Màu highlight */
  --accent: oklch(0.55 0.2 30);              ← Màu đỏ nhấn
}
```

### Cách Thay Đổi Màu

**Ví dụ 1: Thay đổi màu chính thành xanh dương**
```css
/* TRƯỚC */
--primary: oklch(0.25 0.25 30);

/* SAU - Xanh dương */
--primary: oklch(0.25 0.25 240);
```

**Ví dụ 2: Thay đổi màu nền thành kem/vàng**
```css
/* TRƯỚC */
--background: oklch(0.98 0.002 60);

/* SAU - Kem vàng */
--background: oklch(0.98 0.05 60);
```

### Tham Số Màu (OKLCH)

Màu OKLCH có 3 tham số:
- **Số 1 (0.98):** Độ sáng (0 = tối, 1 = sáng)
- **Số 2 (0.002):** Độ bão hòa (0 = xám, 1 = rực rỡ)
- **Số 3 (60):** Hue/sắc thái (0-360 độ)

```
Hue tham khảo:
0° = Đỏ
30° = Cam/Nâu
60° = Vàng
120° = Xanh lá
180° = Xanh lơ
240° = Xanh dương
270° = Tím
```

---

## 2️⃣ THAY ĐỔI FONT CHỮ

### Vị Trí File
```
/app/layout.tsx
```

### Cách Thay Đổi Font

**BƯỚC 1: Import font mới**

Mở file `/app/layout.tsx` và tìm:
```tsx
import { Geist, Geist_Mono } from 'next/font/google'

const _geistSans = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
```

**BƯỚC 2: Thay đổi font**

Ví dụ: Thay bằng font Playfair Display + Inter

```tsx
// TRƯỚC:
import { Geist, Geist_Mono } from 'next/font/google'
const _geistSans = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

// SAU:
import { Playfair_Display, Inter } from 'next/font/google'
const _geistSans = Playfair_Display({ subsets: ['latin'] })
const _geistMono = Inter({ subsets: ['latin'] })
```

**BƯỚC 3: Cập nhật globals.css**

Tìm section `@theme inline {` trong `/app/globals.css`:

```css
@theme inline {
  /* TRƯỚC */
  --font-sans: 'Geist', 'Geist Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';

  /* SAU */
  --font-sans: 'Playfair Display', serif;
  --font-mono: 'Inter', sans-serif;
}
```

**BƯỚC 4: Lưu & reload**

---

## 3️⃣ THAY ĐỔI KÍCH THƯỚC CHỮ

### Tìm Và Thay Đổi

Các class Tailwind dùng để điều chỉnh kích thước:

```css
text-sm        /* Chữ nhỏ */
text-base      /* Chữ bình thường */
text-lg        /* Chữ lớn */
text-xl        /* Chữ rất lớn */
text-2xl       /* Chữ siêu to */
text-3xl       /* Chữ cực to */
```

**Ví dụ: Thay đổi tiêu đề từ `text-2xl` thành `text-3xl`**

```tsx
/* TRƯỚC */
<h3 className="text-2xl font-bold text-primary mb-4">
  1945: Cách Mạng Tháng Tám
</h3>

/* SAU */
<h3 className="text-3xl font-bold text-primary mb-4">
  1945: Cách Mạng Tháng Tám
</h3>
```

---

## 4️⃣ THAY ĐỔI KHOẢNG CÁCH (Spacing)

### Các Class Phổ Biến

```
m-4    = Margin (khoảng cách ngoài) 4
p-4    = Padding (khoảng cách trong) 4
gap-4  = Khoảng cách giữa items 4

Thang đo:
1 = 4px
2 = 8px
3 = 12px
4 = 16px
6 = 24px
8 = 32px
```

**Ví dụ: Tăng khoảng cách giữa các section**

```tsx
/* TRƯỚC */
<div className="space-y-8">

/* SAU - Tăng khoảng cách */
<div className="space-y-12">
```

---

## 5️⃣ THAY ĐỔI BORDER & ROUNDED

### Góc Bo Tròn

```
rounded-none   = Góc vuông
rounded-sm     = Góc bo tròn nhỏ
rounded-md     = Góc bo tròn vừa
rounded-lg     = Góc bo tròn lớn
rounded-full   = Hình tròn
```

**Ví dụ:**
```tsx
/* TRƯỚC */
className="rounded-lg"

/* SAU */
className="rounded-xl"
```

### Viền (Border)

```
border         = Viền mỏng 1px
border-2       = Viền 2px
border-4       = Viền 4px
```

---

## 6️⃣ THAY ĐỔI SHADOW (Bóng)

```
shadow-none    = Không bóng
shadow-sm      = Bóng nhỏ
shadow         = Bóng bình thường
shadow-md      = Bóng vừa
shadow-lg      = Bóng lớn
shadow-xl      = Bóng rất lớn
```

**Ví dụ:**
```tsx
/* TRƯỚC */
<div className="shadow-lg">

/* SAU */
<div className="shadow-2xl">
```

---

## 7️⃣ THAY ĐỔI TỔNG ĐỀ (Layout)

### Chiều Rộng Tối Đa (Max Width)

```
max-w-sm       = 384px
max-w-md       = 448px
max-w-lg       = 512px
max-w-2xl      = 672px
max-w-4xl      = 896px
max-w-6xl      = 1152px
max-w-7xl      = 1280px
```

**Trong trang chính (/app/page.tsx):**
```tsx
/* TRƯỚC */
<div className="max-w-6xl mx-auto">

/* SAU - Rộng hơn */
<div className="max-w-7xl mx-auto">
```

---

## 8️⃣ THAY ĐỔI RESPONSIVE (Điều Chỉnh Cho Màn Hình Khác Nhau)

### Breakpoints

```
sm   = 640px (tablet nhỏ)
md   = 768px (tablet)
lg   = 1024px (desktop nhỏ)
xl   = 1280px (desktop)
2xl  = 1536px (desktop lớn)
```

**Ví dụ: Ẩn timeline dọc trên mobile, hiển thị trên desktop**

```tsx
/* Đã có sẵn */
<div className="hidden md:flex">
  {/* Timeline dọc - chỉ hiển thị trên md trở lên */}
</div>
```

---

## 9️⃣ THAY ĐỔI ANIMATION

### Tailwind Animations

```
animate-bounce  = Bật nhảy
animate-pulse   = Nhấp nháy
animate-spin    = Xoay
```

**Ví dụ: Thêm animation vào nội dung**

```tsx
/* Trước */
<div className="animate-in fade-in duration-300">

/* Sau */
<div className="animate-in fade-in duration-500">
```

---

## 🔟 THAY ĐỔI HOVER EFFECTS

### Ví Dụ

```tsx
/* Nút bình thường */
<button className="px-4 py-2 rounded-md">Click</button>

/* Với hover effect */
<button className="px-4 py-2 rounded-md hover:bg-primary/90 hover:shadow-lg transition-all">
  Click
</button>
```

---

## 🎯 VÍ DỤ: THAY ĐỔI TOÀN BỘ THEME

**Muốn đổi từ theme nâu đỏ sang xanh dương lạnh?**

### BƯỚC 1: Mở `/app/globals.css`

### BƯỚC 2: Thay đổi các màu

```css
:root {
  /* Thay nâu/đỏ sang xanh dương */
  --primary: oklch(0.25 0.25 240);        /* Xanh dương */
  --accent: oklch(0.55 0.2 200);          /* Xanh lơ */
  --secondary: oklch(0.92 0.05 200);      /* Xanh nhạt */
}
```

### BƯỚC 3: Lưu & reload

✓ Toàn bộ website đổi theme!

---

## 🎨 ĐỔI THEME HOÀN TOÀN

Ví dụ: Theme tối (Dark Mode)

```css
:root {
  --background: oklch(0.15 0.01 240);     /* Nền tối */
  --foreground: oklch(0.98 0 0);          /* Chữ sáng */
  --card: oklch(0.25 0.02 240);           /* Card tối */
  --primary: oklch(0.55 0.25 45);         /* Vàng */
}
```

---

## 💡 MẸO HỮUÍCH

1. **Thay đổi 1 chút trước:**
   - Không nên thay đổi quá nhiều cùng lúc
   - Thay 1 thứ → lưu → reload → xem

2. **Dùng Dev Tools:**
   - F12 → Inspect → Thay CSS để test trước

3. **Backup trước:**
   - Sao chép `/app/globals.css` trước khi thay đổi

4. **Color Picker Online:**
   - Dùng [oklch.space](https://oklch.space) để chọn màu

---

## 📚 Tham Khảo

- **Tailwind CSS:** https://tailwindcss.com/
- **OKLCH Colors:** https://oklch.space/
- **Google Fonts:** https://fonts.google.com/

---

Chúc bạn tùy chỉnh thành công! 🎉
