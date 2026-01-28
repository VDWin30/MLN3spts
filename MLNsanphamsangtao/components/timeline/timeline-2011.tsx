'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 2011 ---
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

const DATA_2011: TimelineEvent[] = [
  {
    date: '12/01/2011',
    title: 'Đại Hội XI - Tầm Nhìn Chiến Lược Mới',
    content: 'Đại hội XI đã thông qua "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011)". Đại hội xác định mục tiêu phấn đấu đến năm 2020 nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại.',
    images: [
      { type: 'image', src: '/images/2011-dai-hoi-xi.jpg', caption: 'Khai mạc Đại hội Đảng lần thứ XI' },
      { type: 'image', src: '/images/2011-cau-rong.jpg', caption: 'Sự phát triển hạ tầng (Cầu Rồng - Đà Nẵng khánh thành giai đoạn này)' },
    ],
    videos: [
      { type: 'video', src: 'dQw4w9WgXcQ', caption: 'Phim tài liệu: Dấu ấn nhiệm kỳ Đại hội XI' }
    ],
    music: [
      { type: 'audio', src: 'https://example.com/duong-den-ngay-vinh-quang.mp3', caption: 'Đường Đến Ngày Vinh Quang', author: 'Bức Tường' }
    ]
  },
  {
    date: '2011 - Nay',
    title: 'Hội Nhập Sâu Rộng & Khát Vọng Hùng Cường',
    content: 'Đây là giai đoạn Việt Nam hội nhập quốc tế mạnh mẽ (gia nhập WTO trước đó, tham gia các hiệp định FTA thế hệ mới). Kinh tế số bùng nổ, tinh thần khởi nghiệp (Start-up) lên cao. Thế hệ trẻ Việt Nam tràn đầy năng lượng, sáng tạo và khát vọng cống hiến.',
    images: [
      { type: 'image', src: '/images/2011-tuoi-tre.jpg', caption: 'Thanh niên Việt Nam trong thời đại 4.0' }
    ],
    videos: [
      { type: 'video', src: 'dQw4w9WgXcQ', caption: 'MV Việt Nam Ơi - Niềm tự hào dân tộc' }
    ],
    music: [
      { type: 'audio', src: 'https://example.com/viet-nam-oi.mp3', caption: 'Việt Nam Ơi', author: 'Minh Beta' },
      { type: 'audio', src: 'https://example.com/khat-vong-tuoi-tre.mp3', caption: 'Khát Vọng Tuổi Trẻ', author: 'Vũ Hoàng' }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline2011() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');

  // Helper: Gom tất cả media
  const allVideos = DATA_2011.flatMap(event => event.videos.map(v => ({ ...v, eventDate: event.date })));
  const allMusic = DATA_2011.flatMap(event => event.music.map(m => ({ ...m, eventDate: event.date })));

  return (
    <div className="space-y-6">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-4">
        <div>
          <h2 className="text-4xl font-black text-primary tracking-tight">2011 - Nay</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Phát Triển Bền Vững - Hội Nhập Toàn Cầu
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
            {DATA_2011.map((event, idx) => (
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
