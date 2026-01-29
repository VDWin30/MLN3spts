'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 1986 ---
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

const DATA_1986: TimelineEvent[] = [
  {
    date: '15/12/1986',
    title: 'Đại Hội VI - Khởi Xướng Công Cuộc "Đổi Mới"',
    content: `Đại hội Đại biểu toàn quốc lần thứ VI của Đảng diễn ra tại Hà Nội với tinh thần "nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật". Đại hội đã đề ra đường lối Đổi mới toàn diện, bao gồm:

• Xóa bỏ cơ chế tập trung quan liêu bao cấp
• Chuyển sang nền kinh tế hàng hóa nhiều thành phần
• Thực hiện chính sách mở cửa, hội nhập kinh tế quốc tế
• Phát triển kinh tế tư nhân, khuyến khích đầu tư nước ngoài
• Cải cách hành chính, tăng cường pháp quyền

Đại hội VI đánh dấu bước ngoặt quan trọng, chuyển đất nước từ thời kỳ khó khăn sang thời kỳ phát triển và hội nhập.`,
    images: [
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a4/Nguyen_Van_Linh.png/800px-Nguyen_Van_Linh.png', 
        caption: 'Tổng Bí thư Nguyễn Văn Linh - Người khởi xướng Đổi Mới' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2024/12/12/bao-cap.jpg', 
        caption: 'Cảnh xếp hàng thời bao cấp trước Đổi Mới' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2024/12/13/upload_2594/z52140348666351f9799e83fe9eeab37889ff10818b695.jpg', 
        caption: 'Quang cảnh Đại hội Đảng lần thứ VI (1986)' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'ikKM8nB8v44', 
        caption: 'Phim tài liệu: Đêm trước Đổi Mới - Những năm 80' 
      },
      { 
        type: 'video', 
        src: 'HH5gF0g8OJ4', 
        caption: 'Đổi Mới 1986 - Bước ngoặt lịch sử của Việt Nam' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Y6nLq4gDcQ2v', 
        caption: 'Mùa Xuân Bên Cửa Sổ', 
        author: 'Xuân Hồng' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/X7pR9JkLvQ3w', 
        caption: 'Trị An Âm Vang Mùa Xuân', 
        author: 'Tôn Thất Lập' 
      }
    ]
  },
  {
    date: '1987',
    title: 'Những Việc Cần Làm Ngay & Khởi Động Đổi Mới',
    content: `Hưởng ứng tinh thần Đổi Mới, Tổng Bí thư Nguyễn Văn Linh với bút danh N.V.L đã khởi xướng loạt bài viết "Những việc cần làm ngay" trên báo Nhân Dân, tạo luồng gió mới về:

1. **Dân chủ hóa đời sống xã hội**: Khuyến khích người dân tham gia đóng góp ý kiến
2. **Chống tiêu cực, tham nhũng**: Làm trong sạch bộ máy nhà nước
3. **Cải cách kinh tế**: Thực hiện các chính sách mới ngay lập tức
4. **Mở cửa hội nhập**: Thu hút đầu tư nước ngoài

Những thay đổi quan trọng năm 1987:
• Luật Đầu tư nước ngoài được ban hành
• Xóa bỏ chế độ tem phiếu
• Thúc đẩy sản xuất nông nghiệp với khoán 10
• Phát triển kinh tế tư nhân`,
    images: [
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2024/12/13/upload_2596/z5214038415590945f3cfa7ae47e3725fd5420e7a7c4a8.jpg', 
        caption: 'Báo Nhân Dân đăng bài "Những việc cần làm ngay" của Tổng Bí thư Nguyễn Văn Linh' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-12/tem-phieu-thoi-bao-cap.jpg', 
        caption: 'Tem phiếu - biểu tượng của thời bao cấp' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'mzTqgW8Cq04', 
        caption: 'Ký ức thời bao cấp và bước ngoặt Đổi Mới' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Z8qM3nVbXp4r', 
        caption: 'Khát Vọng', 
        author: 'Phạm Minh Tuấn' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/K9wL2mNcVp5s', 
        caption: 'Bài Ca Người Lao Động', 
        author: 'Trần Tiến' 
      }
    ]
  },
  {
    date: '1988 - 1990',
    title: 'Những Thành Tựu Bước Đầu & Thách Thức',
    content: `Sau khi Đổi Mới được triển khai, Việt Nam đã đạt được những kết quả ban đầu quan trọng:

**Thành tựu:**
• Kinh tế bắt đầu tăng trưởng, GDP tăng trung bình 4-5%/năm
• Sản xuất nông nghiệp được cải thiện, đặc biệt là lúa gạo
• Xuất khẩu tăng, đặc biệt là dầu thô và nông sản
• Thu hút được đầu tư nước ngoài đầu tiên
• Đời sống nhân dân được cải thiện một bước

**Thách thức:**
• Lạm phát cao (lên đến 300-400% năm 1988)
• Hệ thống ngân hàng yếu kém
• Cơ sở hạ tầng lạc hậu
• Thiếu vốn đầu tư
• Bất bình đẳng xã hội gia tăng

Giai đoạn này đặt nền móng cho những cải cách sâu rộng hơn trong thập niên 1990.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2024/06/24/doimoi-kinhte.jpg', 
        caption: 'Kinh tế Việt Nam bắt đầu khởi sắc sau Đổi Mới' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2024/08/28/upload_1690/anh-1.jpg', 
        caption: 'Nông dân thu hoạch lúa - Thành tựu của khoán 10' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'yQ8T6sC7DcU', 
        caption: 'Việt Nam những năm đầu Đổi Mới (1986-1990)' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/L3mN9pVcXq6w', 
        caption: 'Đất Nước Lời Ru', 
        author: 'Văn Thành Nho' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/M4nP0qWdYr7x', 
        caption: 'Hát Về Anh', 
        author: 'Trịnh Công Sơn' 
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1986() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1986.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_1986.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-8 border border-indigo-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 tracking-tighter">
                1986 - 1990
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Đổi Mới - Bước Ngoặt Lịch Sử & Hội Nhập
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation cải tiến */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-1 shadow-sm">
        <div className="flex flex-wrap gap-1">
          <TabBtn 
            isActive={activeTab === 'info'} 
            onClick={() => setActiveTab('info')} 
            label="Thông Tin Lịch Sử" 
            icon={<FileText className="w-5 h-5" />} 
            count={DATA_1986.length}
          />
          <TabBtn 
            isActive={activeTab === 'video'} 
            onClick={() => setActiveTab('video')} 
            label="Video Tư Liệu" 
            icon={<Film className="w-5 h-5" />} 
            count={allVideos.length}
          />
          <TabBtn 
            isActive={activeTab === 'music'} 
            onClick={() => setActiveTab('music')} 
            label="Bài Hát Thời Kỳ" 
            icon={<Music className="w-5 h-5" />} 
            count={allMusic.length}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[500px] animate-in fade-in duration-700">
        
        {/* TAB THÔNG TIN */}
        {activeTab === 'info' && (
          <div className="space-y-10 pl-4 md:pl-6">
            {DATA_1986.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-bold border border-blue-200">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{event.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg whitespace-pre-line">
                      {event.content}
                    </p>

                    {/* Image Gallery */}
                    {event.images.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4 text-gray-600">
                          <ImageIcon className="w-5 h-5" />
                          <span className="font-semibold">Hình ảnh tư liệu</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {event.images.map((img, imgIdx) => (
                            <div 
                              key={imgIdx} 
                              className="group relative rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                              onClick={() => setSelectedImage(img.src)}
                            >
                              <div className="aspect-[16/10] overflow-hidden">
                                <img 
                                  src={img.src} 
                                  alt={img.caption}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                  onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="p-4 bg-gradient-to-b from-white to-gray-50">
                                <p className="text-sm font-medium text-gray-800 line-clamp-2">{img.caption}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB VIDEO */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allVideos.length > 0 ? allVideos.map((vid, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${vid.src}`}
                    title={vid.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 line-clamp-2 mb-1" title={vid.caption}>
                        {vid.caption}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="px-2 py-1 bg-gray-100 rounded-full">
                          {vid.eventDate}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500 truncate" title={vid.eventTitle}>
                          {vid.eventTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <EmptyState 
                message="Đang cập nhật video tư liệu cho giai đoạn này" 
                icon={<Film className="w-12 h-12" />}
              />
            )}
          </div>
        )}

        {/* TAB MUSIC */}
        {activeTab === 'music' && (
          <div className="space-y-4">
            {allMusic.length > 0 ? allMusic.map((song, idx) => (
              <div key={idx} className="group bg-white/90 backdrop-blur-sm rounded-xl border border-gray-300 p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  {/* Album Art */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 truncate">{song.caption}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-600">
                        Sáng tác: {song.author || "Không rõ"}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        Sự kiện: {song.eventDate}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 truncate">
                      {song.eventTitle}
                    </div>
                  </div>

                  {/* Audio Player */}
                  <div className="w-full max-w-xs">
                    <audio controls className="w-full h-10 rounded-full">
                      <source src={song.src} type="audio/mpeg" />
                      Trình duyệt không hỗ trợ phát audio.
                    </audio>
                  </div>
                </div>
              </div>
            )) : (
              <EmptyState 
                message="Đang cập nhật bài hát cho giai đoạn này" 
                icon={<Music className="w-12 h-12" />}
              />
            )}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
            >
              ✕ Đóng
            </button>
            <img 
              src={selectedImage} 
              alt="Xem chi tiết" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Component cải tiến
function TabBtn({ isActive, onClick, label, icon, count }: { 
  isActive: boolean; 
  onClick: () => void; 
  label: string; 
  icon: React.ReactNode;
  count?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 min-w-[200px] justify-center ${
        isActive 
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
          : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-gray-200'
      }`}
    >
      {icon}
      <span>{label}</span>
      {count !== undefined && (
        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
        }`}>
          {count}
        </span>
      )}
    </button>
  );
}

function EmptyState({ message, icon }: { message: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <div className="w-20 h-20 mb-6 text-gray-300">
        {icon}
      </div>
      <p className="text-lg font-medium">{message}</p>
      <p className="text-sm mt-2 text-gray-400">Vui lòng quay lại sau!</p>
    </div>
  );
}
