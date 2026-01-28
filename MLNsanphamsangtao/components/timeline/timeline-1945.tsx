import React, { useState } from 'react';

// [GIỮ NGUYÊN INTERFACE VÀ DỮ LIỆU MILESTONES_1945 CỦA BẠN]
interface Milestone {
  date: string;
  title: string;
  description: string;
  images: Array<{ src: string; alt: string }>;
  videos: Array<{ id: string; title: string }>;
  music?: { name: string; artist: string; url: string };
}

const MILESTONES_1945: Milestone[] = [
  {
    date: '19/8/1945',
    title: 'Cách Mạng Tháng Tám Bắt Đầu',
    description: 'Cách Mạng Tháng Tám bùng nổ trên toàn quốc dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Nhân dân từ Bắc vào Nam đứng lên giành chính quyền từ tay thực dân Pháp và phát xít Nhật.',
    images: [{ src: '/images/1945-canh-mang.jpg', alt: 'Cách Mạng Tháng Tám 1945' }],
    videos: [{ id: 'dQw4w9WgXcQ', title: 'Phim tư liệu Cách Mạng Tháng Tám' }],
    music: { name: 'Tiến Quân Ca', artist: 'Văn Cao', url: 'https://example.com/tien-quan-ca.mp3' },
  },
  {
    date: '2/9/1945',
    title: 'Tuyên Bố Độc Lập',
    description: 'Tại Quảng Trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh chính thức tuyên bố độc lập của Việt Nam. Việt Nam Dân chủ Cộng hòa chính thức thành lập.',
    images: [{ src: '/images/1945-ba-dinh.jpg', alt: 'Lễ tuyên bố độc lập' }],
    videos: [{ id: 'dQw4w9WgXcQ', title: 'Lễ tuyên bố độc lập' }],
    music: { name: 'Quốc Ca Việt Nam', artist: 'Văn Cao', url: 'https://example.com/quoc-ca.mp3' },
  },
];

export function Timeline1945() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <div className="border-b border-border pb-6">
        <h2 className="text-4xl font-black text-primary uppercase tracking-tight">1945</h2>
        <p className="text-xl text-muted-foreground mt-2 font-medium">
          Cách Mạng Tháng Tám - Thành Lập Việt Nam Dân Chủ Cộng Hòa
        </p>
      </div>

      <div className="relative">
        {/* Đường line dọc xuyên suốt */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted" />

        <div className="space-y-12">
          {MILESTONES_1945.map((milestone, idx) => (
            <MilestoneItem key={idx} milestone={milestone} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Component con để quản lý trạng thái nút bấm cho từng mốc sự kiện
function MilestoneItem({ milestone }: { milestone: Milestone }) {
  // Trạng thái tab đang chọn: 'info' | 'media' | 'video' | 'music'
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="relative pl-12">
      {/* Nút chấm đỏ trên timeline */}
      <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 bg-primary rounded-full ring-4 ring-background" />

      <div className="mb-4">
        <span className="text-sm font-bold text-primary px-2 py-1 bg-primary/10 rounded">{milestone.date}</span>
        <h3 className="text-2xl font-bold mt-2">{milestone.title}</h3>
      </div>

      {/* HỆ THỐNG NÚT BẤM (TABS) */}
      <div className="flex flex-wrap gap-2 mb-6">
        <TabButton active={activeTab === 'info'} onClick={() => setActiveTab('info')} label="Thông tin" icon="📄" />
        <TabButton active={activeTab === 'media'} onClick={() => setActiveTab('media')} label="Hình ảnh" icon="🖼️" />
        <TabButton active={activeTab === 'video'} onClick={() => setActiveTab('video')} label="Video" icon="🎬" />
        {milestone.music && (
          <TabButton active={activeTab === 'music'} onClick={() => setActiveTab('music')} label="Nhạc" icon="🎵" />
        )}
      </div>

      {/* NỘI DUNG HIỂN THỊ THAY ĐỔI THEO TAB */}
      <div className="bg-card border rounded-xl p-5 shadow-sm min-h-[200px] transition-all">
        {activeTab === 'info' && (
          <p className="text-muted-foreground leading-relaxed animate-in fade-in duration-500">
            {milestone.description}
          </p>
        )}

        {activeTab === 'media' && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 animate-in zoom-in-95 duration-300">
            {milestone.images.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} className="rounded-lg object-cover w-full h-48 border" />
            ))}
          </div>
        )}

        {activeTab === 'video' && (
          <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-300">
            {milestone.videos.map((vid, i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden border">
                <iframe
                  width="100%" height="100%"
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'music' && milestone.music && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4 animate-in fade-in">
            <div className="text-center">
              <p className="font-bold text-lg">{milestone.music.name}</p>
              <p className="text-sm text-muted-foreground">Sáng tác: {milestone.music.artist}</p>
            </div>
            <audio controls className="w-full max-w-md">
              <source src={milestone.music.url} type="audio/mpeg" />
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}

// Component nút bấm bổ trợ
function TabButton({ active, onClick, label, icon }: { active: boolean; onClick: () => void; label: string; icon: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${
        active 
          ? 'bg-primary text-primary-foreground border-primary shadow-md' 
          : 'bg-background hover:bg-muted text-muted-foreground border-border'
      }`}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}
