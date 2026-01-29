'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 1975 ---
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

const DATA_1975: TimelineEvent[] = [
  {
    date: '30/04/1975',
    title: 'Giải Phóng Miền Nam - Thống Nhất Đất Nước',
    content: `Vào lúc 11h30, xe tăng của Quân Giải phóng húc đổ cổng Dinh Độc Lập. Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện. Cờ Mặt trận Dân tộc Giải phóng tung bay, đánh dấu sự thắng lợi hoàn toàn của chiến dịch Hồ Chí Minh lịch sử.

Đây là thời khắc lịch sử trọng đại, kết thúc 30 năm chiến tranh, chấm dứt sự chia cắt đất nước, mở ra kỷ nguyên mới - kỷ nguyên độc lập, thống nhất và cả nước đi lên chủ nghĩa xã hội.`,
    images: [
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tank_390_crashing_through_the_gates_of_the_Independence_Palace.jpg/1024px-Tank_390_crashing_through_the_gates_of_the_Independence_Palace.jpg', 
        caption: 'Xe tăng 390 húc đổ cổng Dinh Độc Lập' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2024-04/30.4.1975.jpg', 
        caption: 'Cờ giải phóng tung bay trên nóc Dinh Độc Lập' 
      },
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Surrender_of_South_Vietnam.jpg/800px-Surrender_of_South_Vietnam.jpg', 
        caption: 'Tổng thống Dương Văn Minh tuyên bố đầu hàng' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'c4IRIvwmGL8', 
        caption: 'Phim tư liệu: Thời khắc lịch sử 30/4/1975' 
      },
      { 
        type: 'video', 
        src: 'mce2FvKZ-PI', 
        caption: 'Chiến dịch Hồ Chí Minh - Tổng tiến công và nổi dậy' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/GICiKLd9Z5nz', 
        caption: 'Như Có Bác Trong Ngày Đại Thắng', 
        author: 'Phạm Tuyên' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Gvy9A5L2eUqD', 
        caption: 'Đất Nước Trọn Niềm Vui', 
        author: 'Hoàng Hà' 
      }
    ]
  },
  {
    date: '02/07/1976',
    title: 'Non Sông Thu Về Một Mối',
    content: `Kỳ họp thứ nhất Quốc hội nước Việt Nam thống nhất (khoá VI) quyết định:
• Tên nước: Cộng hòa Xã hội chủ nghĩa Việt Nam
• Quốc kỳ: Cờ đỏ sao vàng
• Quốc ca: Tiến Quân Ca
• Thủ đô: Hà Nội
• Đổi tên Sài Gòn - Gia Định thành Thành phố Hồ Chí Minh

Sự kiện này đánh dấu sự thống nhất hoàn toàn về mặt nhà nước, tạo nền tảng pháp lý vững chắc cho việc xây dựng đất nước sau chiến tranh.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2024/07/02/2-7-1976-quoc-hoi-khoa-vii.jpg', 
        caption: 'Kỳ họp Quốc hội thống nhất đất nước' 
      },
      { 
        type: 'image', 
        src: 'https://baoquocte.vn/stores/news_dataimages/linhanh/042024/15/16/hoi-nghi-hiep-thuong-thong-nhat-to-quoc-30-11-1975.jpg', 
        caption: 'Hội nghị Hiệp thương thống nhất Tổ quốc (11/1975)' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'LQUXuQ6Zd9w', 
        caption: 'Tư liệu: Quốc hội khóa VI - Thống nhất đất nước' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Vlq4TUsXbQ7h', 
        caption: 'Mùa Xuân Trên Thành Phố Hồ Chí Minh', 
        author: 'Xuân Hồng' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/xYbzKrFvLcHj', 
        caption: 'Bài Ca Thống Nhất', 
        author: 'Võ Văn Di' 
      }
    ]
  },
  {
    date: '1976 - 1986',
    title: 'Khắc Phục Hậu Quả Chiến Tranh & Bước Đầu Xây Dựng Đất Nước',
    content: `Sau ngày thống nhất, cả nước phải đối mặt với những thách thức lớn:
1. Khắc phục hậu quả chiến tranh: Hàng triệu người thương vong, cơ sở hạ tầng bị tàn phá nặng nề, kinh tế kiệt quệ.
2. Thống nhất thể chế: Từ hai chế độ chính trị - kinh tế khác biệt thành một thể thống nhất.
3. Tái thiết đất nước: Xây dựng cơ sở vật chất, phát triển kinh tế, ổn định đời sống nhân dân.

Các nhiệm vụ trọng tâm:
• Tổ chức bầu cử Quốc hội thống nhất (1976)
• Thực hiện các chương trình khôi phục kinh tế
• Xây dựng hệ thống giáo dục, y tế thống nhất
• Ổn định đời sống nhân dân cả nước`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2024/04/28/hau-qua-chien-tranh.jpg', 
        caption: 'Khắc phục hậu quả chiến tranh' 
      },
      { 
        type: 'image', 
        src: 'https://baotanglichsu.vn/uploads/news/2021_04/bau-cu-quoc-hoi-khoa-vi-25-4-1976-1.jpg', 
        caption: 'Bầu cử Quốc hội khóa VI (25/4/1976)' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'YbR2x1d7HPU', 
        caption: 'Việt Nam sau 1975: Khắc phục hậu quả chiến tranh' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Rf8Z9JcKpQ2v', 
        caption: 'Việt Nam Quê Hương Tôi', 
        author: 'Đỗ Nhuận' 
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1975() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1975.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_1975.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-8 border border-emerald-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-700 to-emerald-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-700 tracking-tighter">
                1975 - 1986
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Đại Thắng Mùa Xuân - Thống Nhất Đất Nước
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
            count={DATA_1975.length}
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
            label="Bài Hát Lịch Sử" 
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
            {DATA_1975.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 via-emerald-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-800 text-sm font-bold border border-green-200">
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
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-green-600" />
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-600 text-white text-xs flex items-center justify-center font-bold">
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
              className="absolute -top-12 right-0 text-white hover:text-green-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
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
          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
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
