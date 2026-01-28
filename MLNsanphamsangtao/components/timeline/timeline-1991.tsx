'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 1991 ---
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

const DATA_1991: TimelineEvent[] = [
  {
    date: '06/1991',
    title: 'Đại Hội VII - Cương Lĩnh Xây Dựng Đất Nước',
    content: 'Đại hội đại biểu toàn quốc lần thứ VII của Đảng đã thông qua "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội". Đây là văn kiện lịch sử quan trọng, khẳng định tiếp tục con đường Đổi Mới, giữ vững định hướng Xã hội chủ nghĩa và tư tưởng Hồ Chí Minh.',
    images: [
      { type: 'image', src: '/images/1991-dai-hoi-vii.jpg', caption: 'Đại hội Đảng lần thứ VII (1991)' },
      { type: 'image', src: '/images/1991-cuong-linh.jpg', caption: 'Thông qua Cương lĩnh 1991' },
    ],
    videos: [
      { type: 'video', src: 'dQw4w9WgXcQ', caption: 'Phim tài liệu: Dấu ấn Đại hội VII' }
    ],
    music: [
      { type: 'audio', src: 'https://example.com/niem-tin-dang.mp3', caption: 'Niềm Tin Dâng Đảng', author: 'Trọng Loan' }
    ]
  },
  {
    date: '1991 - 1992',
    title: 'Đa Phương Hóa, Đa Dạng Hóa Quan Hệ',
    content: 'Thực hiện đường lối đối ngoại "Việt Nam muốn là bạn, là đối tác tin cậy của các nước", Việt Nam đã bình thường hóa quan hệ với Trung Quốc (11/1991), cải thiện quan hệ với các nước ASEAN và từng bước phá thế bao vây cấm vận.',
    images: [
      { type: 'image', src: '/images/1991-ngoai-giao.jpg', caption: 'Bình thường hóa quan hệ Việt - Trung' }
    ],
    videos: [
      { type: 'video', src: 'dQw4w9WgXcQ', caption: 'Việt Nam mở cửa hội nhập' }
    ],
    music: [
      { type: 'audio', src: 'https://example.com/khat-vong-mua-xuan.mp3', caption: 'Khát Vọng Mùa Xuân', author: 'Mozart (Lời Việt)' },
      { type: 'audio', src: 'https://example.com/hoa-binh-cho-ngay-mai.mp3', caption: 'Hòa Bình Cho Ngày Mai', author: 'Nhiều nghệ sĩ' }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1991() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');

  // Helper: Gom tất cả media
  const allVideos = DATA_1991.flatMap(event => event.videos.map(v => ({ ...v, eventDate: event.date })));
  const allMusic = DATA_1991.flatMap(event => event.music.map(m => ({ ...m, eventDate: event.date })));

  return (
    <div className="space-y-6">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-4">
        <div>
          <h2 className="text-4xl font-black text-primary tracking-tight">1991</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Cương Lĩnh 1991 - Đa Phương Hóa Quan Hệ
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
            {DATA_1991.map((event, idx) => (
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
              <EmptyState message="Chưa có video tư liệu nào." />
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
                  <p className="text-sm text-muted-foreground">Sáng tác: {song.author}</p>
                </div>

                <div className="w-full max-w-[200px] md:max-w-[300px]">
                  <audio controls className="w-full h-8">
                    <source src={song.src} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            )) : (
              <EmptyState message="Chưa có bài hát nào." />
            )}
          </div>
        )}

      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

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
