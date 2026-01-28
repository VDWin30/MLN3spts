'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar } from 'lucide-react'; // Icon từ thư viện lucide-react (thường có sẵn trong Next.js modern stack)

// --- 1. CẤU TRÚC DỮ LIỆU (Dễ dàng thay link tại đây) ---
interface MediaItem {
  type: 'image' | 'video' | 'audio';
  src: string;      // Link ảnh/video/nhạc
  thumbnail?: string; // Dùng cho video nếu cần
  caption: string;  // Tên bài hát / Tên video / Chú thích ảnh
  author?: string;  // Tác giả (cho nhạc)
}

interface TimelineEvent {
  date: string;
  title: string;
  content: string;
  images: MediaItem[];
  videos: MediaItem[];
  music: MediaItem[];
}

const DATA_1945: TimelineEvent[] = [
  {
    date: '19/08/1945',
    title: 'Cách Mạng Tháng Tám Thành Công',
    content: 'Cuộc tổng khởi nghĩa giành chính quyền ở Hà Nội. Hàng vạn nhân dân ngoại thành và các tỉnh lân cận kéo về Nhà hát Lớn mít tinh, sau đó chiếm các cơ quan đầu não của chính quyền tay sai.',
    images: [
      { type: 'image', src: '/images/1945-mit-tinh.jpg', caption: 'Mít tinh tại Nhà hát lớn' },
      { type: 'image', src: '/images/1945-chiem-phu.jpg', caption: 'Đánh chiếm Phủ Khâm Sai' },
    ],
    videos: [
      { type: 'video', src: 'dQw4w9WgXcQ', caption: 'Phim tư liệu: Hà Nội vùng đứng lên' } // Thay ID Youtube vào đây
    ],
    music: [
      { type: 'audio', src: 'https://example.com/muoi-chin-thang-tam.mp3', caption: 'Mười Chín Tháng Tám', author: 'Xuân Oanh' }
    ]
  },
  {
    date: '02/09/1945',
    title: 'Quốc Khánh Nước Việt Nam Dân Chủ Cộng Hòa',
    content: 'Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.',
    images: [
      { type: 'image', src: '/images/bac-ho-doc-tuyen-ngon.jpg', caption: 'Bác Hồ đọc Tuyên ngôn Độc lập' }
    ],
    videos: [
      { type: 'video', src: 'dQw4w9WgXcQ', caption: 'Toàn cảnh Lễ Tuyên ngôn Độc lập' }
    ],
    music: [
      { type: 'audio', src: 'https://nhac.vn/bai-hat/tien-quan-ca-various-artists-so0lo8d', caption: 'Tiến Quân Ca (Quốc Ca)', author: 'Văn Cao' },
      { type: 'audio', src: 'https://example.com/ba-dinh-nang.mp3', caption: 'Ba Đình Nắng', author: 'Bùi Công Kỳ' }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1945() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');

  // Helper để lấy tất cả video/nhạc từ các sự kiện gộp lại
  const allVideos = DATA_1945.flatMap(event => event.videos.map(v => ({ ...v, eventDate: event.date })));
  const allMusic = DATA_1945.flatMap(event => event.music.map(m => ({ ...m, eventDate: event.date })));

  return (
    <div className="space-y-6">
      
      {/* --- HEADER NĂM & TAB NAVIGATION --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-4">
        <div>
          <h2 className="text-4xl font-black text-primary tracking-tight">1945</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Cách Mạng Tháng Tám - Thành Lập Việt Nam Dân Chủ Cộng Hòa
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-muted/50 rounded-lg self-start md:self-auto">
          <TabBtn 
            isActive={activeTab === 'info'} 
            onClick={() => setActiveTab('info')} 
            label="Thông tin & Ảnh" 
            icon={<FileText className="w-4 h-4" />} 
          />
          <TabBtn 
            isActive={activeTab === 'video'} 
            onClick={() => setActiveTab('video')} 
            label="Video Tư Liệu" 
            icon={<Film className="w-4 h-4" />} 
          />
          <TabBtn 
            isActive={activeTab === 'music'} 
            onClick={() => setActiveTab('music')} 
            label="Bài Hát" 
            icon={<Music className="w-4 h-4" />} 
          />
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="min-h-[400px] animate-in fade-in slide-in-from-bottom-2 duration-500">
        
        {/* 1. TAB THÔNG TIN (Timeline & Ảnh) */}
        {activeTab === 'info' && (
          <div className="space-y-8 pl-2">
            {DATA_1945.map((event, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-primary/20 last:border-0 pb-8 last:pb-0">
                {/* Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                {/* Date Badge */}
                <div className="mb-2">
                   <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary">
                     <Calendar className="w-3 h-3" /> {event.date}
                   </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{event.content}</p>

                {/* Image Gallery cho sự kiện này */}
                {event.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {event.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="group relative rounded-xl overflow-hidden border bg-muted aspect-[4/3]">
                        <img 
                          src={img.src} 
                          alt={img.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/600x400?text=No+Image"; // Fallback image
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-xs backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform">
                          {img.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 2. TAB VIDEO (Gallery Video) */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {allVideos.length > 0 ? allVideos.map((vid, idx) => (
              <div key={idx} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-black relative">
                  <iframe
                    width="100%" height="100%"
                    src={`https://www.youtube.com/embed/${vid.src}`}
                    title={vid.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-foreground line-clamp-1" title={vid.caption}>{vid.caption}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Sự kiện: {vid.eventDate}</p>
                </div>
              </div>
            )) : (
              <EmptyState message="Chưa có video tư liệu nào cho năm này." />
            )}
          </div>
        )}

        {/* 3. TAB BÀI HÁT (Playlist) */}
        {activeTab === 'music' && (
          <div className="space-y-3">
             {allMusic.length > 0 ? allMusic.map((song, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-accent/5 transition-colors group">
                {/* Music Icon / Thumbnail */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                  <Music className="w-6 h-6" />
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground truncate">{song.caption}</h4>
                  <p className="text-sm text-muted-foreground">Sáng tác: {song.author} • Sự kiện: {song.eventDate}</p>
                </div>

                {/* Player */}
                <div className="w-full max-w-[200px] md:max-w-[300px]">
                  <audio controls className="w-full h-8">
                    <source src={song.src} type="audio/mpeg" />
                    Browser không hỗ trợ.
                  </audio>
                </div>
              </div>
            )) : (
              <EmptyState message="Chưa có bài hát nào cho năm này." />
            )}
          </div>
        )}

      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

// Nút chuyển Tab
function TabBtn({ isActive, onClick, label, icon }: { isActive: boolean, onClick: () => void, label: string, icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
        isActive 
          ? 'bg-background text-primary shadow-sm ring-1 ring-border' 
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

// Hiển thị khi không có dữ liệu
function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground bg-muted/20 rounded-xl border border-dashed">
      <div className="w-12 h-12 mb-3 opacity-20">
        <FileText className="w-full h-full" />
      </div>
      <p>{message}</p>
    </div>
  );
}
