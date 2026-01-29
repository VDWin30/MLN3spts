'use client';

import { useState } from 'react';
import { Timeline1945 } from '@/components/timeline/timeline-1945';
import { Timeline1954 } from '@/components/timeline/timeline-1954';
import { Timeline1975 } from '@/components/timeline/timeline-1975';
import { Timeline1986 } from '@/components/timeline/timeline-1986';
import { Timeline1991 } from '@/components/timeline/timeline-1991';
import { Timeline2011 } from '@/components/timeline/timeline-2011';
import { ChevronRight, BookOpen, History } from 'lucide-react';

// Thêm ảnh nền đại diện cho từng mốc (Bạn thay link ảnh thật vào nhé)
const TIMELINE_YEARS = [
  { 
    year: 1945, 
    label: '1945', 
    title: 'Việt Nam Độc Lập',
    desc: 'Khai sinh nước VNDCCH',
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg/800px-H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg'
  },
  { 
    year: 1954, 
    label: '1954', 
    title: 'Miền Bắc Quá Độ',
    desc: 'Chiến thắng Điện Biên Phủ',
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Castries_de_h%C3%A2m.jpg'
  },
  { 
    year: 1975, 
    label: '1975', 
    title: 'Thống Nhất Đất Nước',
    desc: 'Giải phóng miền Nam',
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tank_390_crashing_through_the_gates_of_the_Independence_Palace.jpg/1024px-Tank_390_crashing_through_the_gates_of_the_Independence_Palace.jpg'
  },
  { 
    year: 1986, 
    label: '1986', 
    title: 'Đổi Mới',
    desc: 'Kỷ nguyên hội nhập',
    bgImage: 'https://cafefcdn.com/2019/3/13/photo-1-15524456570391282216597.jpg'
  },
  { 
    year: 1991, 
    label: '1991', 
    title: 'Đại Hội VII',
    desc: 'Cương lĩnh xây dựng đất nước',
    bgImage: 'https://dangcongsan.vn/DATA/0/2015/12/28/Dangcongsan/dhoi_7_vn_s_b_w-16_01_35_812.jpg'
  },
  { 
    year: 2011, 
    label: '2011 - Nay', 
    title: 'Phát Triển',
    desc: 'Công nghiệp hóa, hiện đại hóa',
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Landmark_81_view_from_Saigon_Bridge_2020.jpg'
  },
];

export default function Home() {
  // Mặc định chọn năm đầu tiên luôn để trang đỡ trống
  const [activeYear, setActiveYear] = useState<number>(1945);

  const renderTimelineContent = () => {
    switch (activeYear) {
      case 1945: return <Timeline1945 />;
      case 1954: return <Timeline1954 />;
      case 1975: return <Timeline1975 />;
      case 1986: return <Timeline1986 />;
      case 1991: return <Timeline1991 />;
      case 2011: return <Timeline2011 />;
      default: return null;
    }
  };

  const currentInfo = TIMELINE_YEARS.find(i => i.year === activeYear) || TIMELINE_YEARS[0];

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] overflow-hidden flex flex-col lg:flex-row font-sans selection:bg-red-900 selection:text-white">
      
      {/* --- CỘT TRÁI: ĐIỀU HƯỚNG & HÌNH ẢNH (Sticky) --- */}
      <aside className="lg:w-[40%] h-[50vh] lg:h-screen sticky top-0 flex flex-col relative z-10 border-r border-[#d4cfc5]">
        
        {/* Lớp nền ảnh (Background Image Layer) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#2c2c2c]">
          {/* Ảnh nền mờ thay đổi theo năm */}
          <div 
            key={activeYear} // Key thay đổi để kích hoạt animation
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out opacity-40 mix-blend-overlay grayscale"
            style={{ backgroundImage: `url('${currentInfo.bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a2a2a]/50 to-[#1a1a1a]/90" />
          
          {/* Texture giấy cũ phủ lên */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")'}}></div>
        </div>

        {/* Nội dung bên trái */}
        <div className="relative z-10 p-8 lg:p-12 flex flex-col h-full justify-between text-[#fdfbf7]">
          
          {/* Header nhỏ */}
          <div className="flex items-center gap-2 opacity-80">
            <History className="w-5 h-5 text-red-500" />
            <span className="uppercase tracking-widest text-sm font-bold">Lịch sử Việt Nam</span>
          </div>

          {/* Tiêu đề lớn của năm đang chọn */}
          <div className="mt-8 lg:mt-0 animate-in slide-in-from-left duration-700">
            <h1 className="text-7xl lg:text-9xl font-black font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-none">
              {currentInfo.year}
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold mt-2 text-red-500 font-serif">
              {currentInfo.title}
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-gray-300 max-w-md italic border-l-2 border-red-500 pl-4">
              "{currentInfo.desc}"
            </p>
          </div>

          {/* Danh sách năm (Navigation) */}
          <div className="mt-8 hidden lg:block">
            <div className="text-sm font-semibold uppercase opacity-50 mb-4">Dòng thời gian</div>
            <div className="flex flex-wrap gap-2">
              {TIMELINE_YEARS.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeYear === item.year
                      ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-900/50 scale-105'
                      : 'bg-transparent border-white/20 text-white/60 hover:bg-white/10 hover:border-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* --- CỘT PHẢI: NỘI DUNG CHI TIẾT (Scrollable) --- */}
      <div className="lg:w-[60%] relative h-auto lg:h-screen lg:overflow-y-auto scroll-smooth bg-[#fdfbf7]">
        
        {/* Menu ngang cho Mobile (Chỉ hiện khi màn hình nhỏ) */}
        <div className="lg:hidden sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur border-b border-[#d4cfc5] p-4 overflow-x-auto">
           <div className="flex gap-2 min-w-max">
              {TIMELINE_YEARS.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`px-3 py-1.5 text-sm rounded-full border whitespace-nowrap ${
                    activeYear === item.year
                      ? 'bg-red-800 text-white border-red-800'
                      : 'border-gray-300 text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
           </div>
        </div>

        {/* Khu vực nội dung chính */}
        <div className="p-6 lg:p-16 min-h-screen">
          <div className="max-w-3xl mx-auto">
            
            {/* Breadcrumb / Label */}
            <div className="flex items-center gap-2 mb-8 text-red-800 font-bold border-b border-red-800/20 pb-4">
              <BookOpen className="w-5 h-5" />
              <span>Nội dung chi tiết</span>
              <ChevronRight className="w-4 h-4" />
              <span>Giai đoạn {activeYear}</span>
            </div>

            {/* Render Component Content cũ của bạn ở đây */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#e5e0d8]">
               {/* Component timeline con sẽ hiển thị ở đây */}
               <div className="animate-in fade-in zoom-in duration-500">
                  {renderTimelineContent()}
               </div>
            </div>

            {/* Footer nhỏ bên phải */}
            <div className="mt-12 text-center lg:text-left text-gray-400 text-sm">
              <p>© 2024 Hành Trình Lịch Sử Đảng Cộng Sản Việt Nam</p>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
