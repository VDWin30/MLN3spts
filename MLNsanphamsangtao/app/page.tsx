'use client';

import { useState } from 'react';
import { Timeline1945 } from '@/components/timeline/timeline-1945';
import { Timeline1954 } from '@/components/timeline/timeline-1954';
import { Timeline1975 } from '@/components/timeline/timeline-1975';
import { Timeline1986 } from '@/components/timeline/timeline-1986';
import { Timeline1991 } from '@/components/timeline/timeline-1991';
import { Timeline2011 } from '@/components/timeline/timeline-2011';
import { ChevronRight, Star, Quote, History } from 'lucide-react';

// Dữ liệu timeline: Đã cập nhật link ảnh 1945 chuẩn HTTPS
const TIMELINE_YEARS = [
  { 
    year: 1945, 
    label: '1945', 
    title: 'ĐỘC LẬP', 
    sub: 'Khai sinh nước VNDCCH',
    // Link ảnh Bác Hồ 1946 chuẩn từ Wikimedia (HTTPS)
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg/1280px-H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg'
  },
  { 
    year: 1954, 
    label: '1954', 
    title: 'ĐIỆN BIÊN', 
    sub: 'Lừng lẫy năm châu',
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Castries_de_h%C3%A2m.jpg'
  },
  { 
    year: 1975, 
    label: '1975', 
    title: 'THỐNG NHẤT', 
    sub: 'Non sông thu về một mối',
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tank_390_crashing_through_the_gates_of_the_Independence_Palace.jpg/1024px-Tank_390_crashing_through_the_gates_of_the_Independence_Palace.jpg'
  },
  { 
    year: 1986, 
    label: '1986', 
    title: 'ĐỔI MỚI', 
    sub: 'Kỷ nguyên hội nhập',
    bgImage: 'https://cafefcdn.com/2019/3/13/photo-1-15524456570391282216597.jpg'
  },
  { 
    year: 1991, 
    label: '1991', 
    title: 'CƯƠNG LĨNH', 
    sub: 'Xây dựng đất nước',
    bgImage: 'https://dangcongsan.vn/DATA/0/2015/12/28/Dangcongsan/dhoi_7_vn_s_b_w-16_01_35_812.jpg'
  },
  { 
    year: 2011, 
    label: '2011', 
    title: 'PHÁT TRIỂN', 
    sub: 'Công nghiệp hóa',
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Landmark_81_view_from_Saigon_Bridge_2020.jpg'
  },
];

export default function Home() {
  const [activeYear, setActiveYear] = useState<number>(1945);
  // Lấy thông tin năm hiện tại để dùng ảnh nền cho cả 2 bên
  const currentInfo = TIMELINE_YEARS.find(i => i.year === activeYear) || TIMELINE_YEARS[0];

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

  return (
    <main className="h-screen w-full bg-[#f4f1ea] text-[#1a1a1a] overflow-hidden flex flex-col lg:flex-row font-sans selection:bg-red-900 selection:text-white">
      
      {/* =========================================
          CỘT TRÁI: HERO / TRÌNH DIỄN (45%)
          ========================================= */}
      <section className="relative w-full lg:w-[45%] h-[40vh] lg:h-full flex flex-col justify-between shrink-0 shadow-[10px_0_30px_rgba(0,0,0,0.2)] z-20 bg-black">
        
        {/* --- Background Image Layer (Bên trái - Rõ nét) --- */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           {/* Ảnh nền: Đã xóa mix-blend-overlay để ảnh hiện rõ trên nền đen */}
           <div 
             key={activeYear}
             className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-105 opacity-50"
             style={{ backgroundImage: `url('${currentInfo.bgImage}')` }} 
           />
           
           {/* Các lớp phủ gradient để text nổi bật */}
           <div className="absolute inset-0 bg-black/20" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
           
           {/* Texture hạt nhiễu */}
           <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}}></div>
        </div>

        {/* --- Nội dung bên trái --- */}
        <div className="relative z-10 p-6 lg:p-12 h-full flex flex-col justify-between">
          
          <div className="flex items-center gap-3 text-white/80 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
            <span className="uppercase tracking-[0.25em] text-xs font-bold font-sans opacity-70">
              Lịch sử hào hùng
            </span>
          </div>

          <div className="space-y-2 mt-4 lg:mt-0 animate-in slide-in-from-left-8 duration-700 fade-in fill-mode-both">
            <h1 className="text-gold-gradient text-[5rem] lg:text-[9rem] leading-none font-black font-serif tracking-tighter">
              {currentInfo.year}
            </h1>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-wide drop-shadow-2xl font-sans">
              {currentInfo.title}
            </h2>

            <div className="mt-6 flex gap-4 max-w-md">
               <div className="w-1 bg-red-600 shrink-0 h-full min-h-[40px] shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
               <p className="text-base lg:text-xl text-gray-200 font-serif italic leading-relaxed opacity-90">
                 "{currentInfo.sub}"
               </p>
            </div>
          </div>

          <div className="w-full mt-6 lg:mt-0 hidden lg:block">
            <p className="text-[10px] uppercase text-white/30 mb-3 tracking-widest font-bold">Chọn giai đoạn lịch sử</p>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide mask-image-linear-to-r">
              {TIMELINE_YEARS.map((item) => {
                const isActive = activeYear === item.year;
                return (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className={`group relative flex-shrink-0 px-5 py-3 rounded transition-all duration-300 border backdrop-blur-sm ${
                      isActive
                        ? 'bg-red-900/80 border-red-500/50 text-white shadow-xl translate-y-[-2px]'
                        : 'bg-white/5 hover:bg-white/10 text-white/50 hover:text-white border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className={`text-lg font-bold font-serif block ${isActive ? 'scale-110 origin-left' : ''} transition-transform`}>
                        {item.label}
                    </span>
                    {isActive && (
                       <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-red-600 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CỘT PHẢI: NỘI DUNG CHI TIẾT (55%)
          ========================================= */}
      <section className="flex-1 h-full relative overflow-hidden bg-[#f4f1ea]">
         
         {/* --- Background Image Layer (Bên phải - Mờ ảo) --- */}
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div 
                key={activeYear} 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-20 blur-[2px] grayscale sepia-[0.3]"
                style={{ backgroundImage: `url('${currentInfo.bgImage}')` }} 
            />
            {/* Lớp phủ trắng mờ */}
            <div className="absolute inset-0 bg-[#f4f1ea]/80 mix-blend-lighten" />
         </div>

         {/* Texture giấy cũ */}
         <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
              style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}}></div>

        {/* Mobile Navigation */}
        <div className="lg:hidden relative z-20 p-4 bg-[#f4f1ea]/90 backdrop-blur border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-2">
            {TIMELINE_YEARS.map((item) => (
                <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${
                    activeYear === item.year
                    ? 'bg-red-800 text-white border-red-800'
                    : 'bg-transparent text-gray-600 border-gray-300'
                }`}
                >
                {item.label}
                </button>
            ))}
            </div>
        </div>

         {/* Nội dung chính */}
         <div className="h-full overflow-y-auto p-6 lg:p-16 custom-scrollbar pb-32 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-red-900/60 font-semibold mb-8 text-xs uppercase tracking-wider">
                    <History className="w-4 h-4" />
                    <span>Nội dung chi tiết</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-red-800 border-b border-red-800">Giai đoạn {activeYear}</span>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
                    <div className="bg-white/40 backdrop-blur-[2px] p-1 rounded-3xl border border-stone-200 shadow-sm">
                        <div className="bg-white/70 rounded-[1.3rem] p-6 lg:p-8">
                            {renderTimelineContent()}
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center opacity-50 mix-blend-multiply">
                    <Quote className="w-8 h-8 mx-auto text-red-900/30 mb-2" />
                    <p className="font-serif italic text-red-900/60">
                        "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam"
                    </p>
                </div>
            </div>
         </div>
         
         <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-900/5 to-transparent rounded-tl-[100px] pointer-events-none z-0" />
      </section>

    </main>
  );
}
