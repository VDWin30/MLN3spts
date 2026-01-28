'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 1954 ---
interface MediaItem {
  type: 'image' | 'video' | 'audio';
  src: string;
  thumbnail?: string;
  caption: string;
  author?: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  content: string;
  images: MediaItem[];
  videos: MediaItem[];
  music: MediaItem[];
}

const DATA_1954: TimelineEvent[] = [
  {
    date: '07/05/1954',
    title: 'Chiến Thắng Điện Biên Phủ "Lừng lẫy năm châu, chấn động địa cầu"',
    content: 'Sau 56 ngày đêm khoét núi, ngủ hầm, mưa dầm, cơm vắt, quân và dân ta dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp đã tiêu diệt hoàn toàn tập đoàn cứ điểm Điện Biên Phủ, bắt sống tướng De Castries.',
    images: [
      { type: 'image', src: '/images/1954-co-chien-thang.jpg', caption: 'Lá cờ Quyết chiến Quyết thắng tung bay trên hầm De Castries' },
      { type: 'image', src: '/images/1954-keo-phao.jpg', caption: 'Bộ đội ta kéo pháo vào trận địa' },
    ],
    videos: [
      { type: 'video', src: 'dQw4w9WgXcQ', caption: 'Phim tư liệu: Chiến thắng Điện Biên Phủ' }
    ],
    music: [
      { type: 'audio', src: 'https://example.com/giai-phong-dien-bien.mp3', caption: 'Giải Phóng Điện Biên', author: 'Đỗ Nhuận' },
      { type: 'audio', src: 'https://example.com/ho-keo-phao.mp3', caption: 'Hò Kéo Pháo', author: 'Hoàng Vân' }
    ]
  },
  {
    date: '21/07/1954',
    title: 'Ký Kết Hiệp Định Genève',
    content: 'Hiệp định Genève về chấm dứt chiến tranh, lập lại hòa bình ở Đông Dương được ký kết. Các nước tham gia hội nghị cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.',
    images: [
      { type: 'image', src: '/images/1954-geneve.jpg', caption: 'Quang cảnh hội nghị Genève 1954' }
    ],
    videos: [
      { type: 'video', src: 'dQw4w9WgXcQ', caption: 'Lễ ký kết Hiệp định Genève' }
    ],
    music: [] // Không có nhạc thì để mảng rỗng
  },
  {
    date: '10/10/1954',
    title: 'Giải Phóng Thủ Đô',
    content: 'Các đơn vị Quân đội Nhân dân Việt Nam tiến vào tiếp quản Hà Nội từ tay quân đội Pháp. Hàng vạn người dân Hà Nội đổ ra đường chào đón đoàn quân chiến thắng trở về.',
    images: [
      { type: 'image', src: '/images/1954-giai-phong-thu-do.jpg', caption: 'Đoàn quân tiến về Hà Nội' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: 'https://example.com/tien-ve-ha-noi.mp3', caption: 'Tiến Về Hà Nội', author: 'Văn Cao' }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1954() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');

  // Helper: Gom tất cả media lại
  const allVideos = DATA_1954.flatMap(event => event.videos.map(v => ({ ...v, eventDate: event.date })));
  const allMusic = DATA_1954.flatMap(event => event.music.map(m => ({ ...m, eventDate: event.date })));

  return (
    <div className="space-y-6">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-4">
        <div>
          <h2 className="text-4xl font-black text-primary tracking-tight">1954</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Chiến Thắng Điện Biên Phủ - Hiệp Định Genève
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-muted/50 rounded-lg self-start md:self-auto">
          <TabBtn 
            isActive={activeTab === 'info'} 
            onClick={() => setActiveTab('info')} 
            label="Thông tin" 
            icon={<FileText className="w-4 h-4" />} 
          />
          <TabBtn 
            isActive={activeTab === 'video'} 
            onClick={() => setActiveTab('video')} 
            label="Video" 
            icon={<Film className="w-4 h-4" />} 
          />
          <TabBtn 
            isActive={activeTab === 'music'} 
            onClick={() => setActiveTab('music')} 
            label="Âm nhạc" 
            icon={<Music className="w-4 h-4" />} 
          />
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="min-h-[400px] animate-in fade-in slide-in-from-bottom-2 duration-500">
        
        {/* 1. TAB THÔNG TIN */}
        {activeTab === 'info' && (
          <div className="space-y-8 pl-2">
            {DATA_1954.map((event, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-primary/20 last:border-0 pb-10 last:pb-0">
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

                {/* Image Gallery */}
                {event.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {event.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="group relative rounded-xl overflow-hidden border bg-muted aspect-[4/3]">
                        <img 
                          src={img.src} 
                          alt={img.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
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

        {/* 2. TAB VIDEO */}
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
                  <h4 className="font-bold text-foreground line-clamp-1">{vid.caption}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Sự kiện: {vid.eventDate}</p>
                </div>
              </div>
            )) : (
              <EmptyState message="Chưa có video tư liệu nào cho giai đoạn này." />
            )}
          </div>
        )}

        {/* 3. TAB BÀI HÁT */}
        {activeTab === 'music' && (
          <div className="space-y-3">
             {allMusic.length > 0 ? allMusic.map((song, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-accent/5 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                  <Music className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground truncate">{song.caption}</h4>
                  <p className="text-sm text-muted-foreground">Sáng tác: {song.author} • {song.eventDate}</p>
                </div>

                <div className="w-full max-w-[200px] md:max-w-[300px]">
                  <audio controls className="w-full h-8">
                    <source src={song.src} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            )) : (
              <EmptyState message="Chưa có bài hát nào cho giai đoạn này." />
            )}
          </div>
        )}

      </div>
    </div>
  );
}

// --- SUB COMPONENTS (Copy để component chạy độc lập) ---

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
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

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
