'use client';

import React, { useState } from 'react';
import { FileText, Film, Calendar, Play, Image as ImageIcon, Video, X, ChevronRight, ChevronLeft } from 'lucide-react';

// --- CẤU TRÚC DỮ LIỆU (đã xóa audio) ---
interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  content: string;
  images: MediaItem[];
  videos: MediaItem[];
}

const DATA_1975: TimelineEvent[] = [
  {
    date: '04-08/03/1975',
    title: 'Chiến dịch Tây Nguyên - Trận then chốt Buôn Ma Thuột',
    content: `04/03: Quân Giải phóng bắt đầu tiến công khu vực Tây Nguyên.
10/03: Mở màn trận then chốt Buôn Ma Thuột.
14/03: Giải phóng hoàn toàn Buôn Ma Thuột.

Chiến dịch Tây Nguyên là đòn tiến công chiến lược đầu tiên, tạo bước ngoặt quan trọng, đánh bại Quân đoàn 2 của chính quyền Sài Gòn, mở ra cục diện mới cho toàn chiến trường.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_08/bmt1_icwo.jpg', 
        caption: 'Bộ đội tiến vào giải phóng Buôn Ma Thuột' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_10/buon_ma_thuot_1975_2_qkoy.jpg', 
        caption: 'Trận đánh tại Buôn Ma Thuột' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: '6Xwqg7YpD7E', 
        caption: 'Chiến dịch Tây Nguyên 1975' 
      }
    ]
  },
  {
    date: '19-25/03/1975',
    title: 'Giải phóng Quảng Trị, Thừa Thiên Huế',
    content: `19/03: Giải phóng thị xã Quảng Trị.
21/03: Cô Lô - Ái Tử hoàn toàn giải phóng.
24/03: Các hướng tiến công vào Huế.
25/03: Tập đoàn phòng ngự Huế bị chia cắt.
26/03: Giải phóng hoàn toàn thành phố Huế.

Huế - cố đô của dân tộc được giải phóng, đánh dấu sự sụp đổ của hệ thống phòng thủ từ xa của đối phương.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_26/hue_giaiphong_ykqu.jpg', 
        caption: 'Cờ giải phóng tung bay trên Kỳ Đài Huế' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_26/hue_1975_1_vquh.jpg', 
        caption: 'Nhân dân Huế đón chào bộ đội' 
      }
    ],
    videos: []
  },
  {
    date: '28-29/03/1975',
    title: 'Giải phóng Đà Nẵng',
    content: `28/03: Các cánh quân tiến vào Đà Nẵng.
29/03: 10h30 - Giải phóng hoàn toàn Đà Nẵng.

Đà Nẵng - thành phố lớn thứ hai miền Nam, trung tâm quân sự quan trọng bị giải phóng chỉ sau 2 ngày tiến công. Sự sụp đổ của Đà Nẵng khiến toàn bộ hệ thống phòng thủ của đối phương ở miền Trung tan rã.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_29/danang_oyag.jpg', 
        caption: 'Bộ đội tiến vào Đà Nẵng' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_29/danang_1975_2_yapm.jpg', 
        caption: 'Nhân dân Đà Nẵng chào đón giải phóng' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'mce2FvKZ-PI', 
        caption: 'Giải phóng Đà Nẵng 1975' 
      }
    ]
  },
  {
    date: '09/04/1975',
    title: 'Chiến dịch Xuân Lộc bắt đầu',
    content: `09/04: Mở màn Chiến dịch Xuân Lộc - cửa ngõ phía Đông Sài Gòn.
21/04: Sau 12 ngày chiến đấu, Xuân Lộc hoàn toàn giải phóng.

Xuân Lộc là trận then chốt cuối cùng trên đường tiến vào Sài Gòn. Việc giải phóng Xuân Lộc đã chọc thủng tuyến phòng thủ vòng ngoài của Sài Gòn.`,
    images: [
      { 
        type: 'image', 
        src: 'https://baotanglichsu.vn/uploads/news/2021_04/xuan-loc-1975-1.jpg', 
        caption: 'Trận Xuân Lộc - cửa ngõ Sài Gòn' 
      }
    ],
    videos: []
  },
  {
    date: '21/04/1975',
    title: 'Tổng thống Nguyễn Văn Thiệu từ chức',
    content: `Trước thất bại quân sự liên tiếp, Tổng thống Nguyễn Văn Thiệu tuyên bố từ chức trong bài diễn văn dài trên đài truyền hình Sài Gòn.

Ông giao quyền lại cho Phó tổng thống Trần Văn Hương. Sự kiện này cho thấy sự khủng hoảng sâu sắc của chính quyền Sài Gòn.`,
    images: [
      { 
        type: 'image', 
        src: 'https://baotanglichsu.vn/uploads/news/2020_04/nguyen-van-thieu-tu-chuc-ngay-21-4-1975-1.jpg', 
        caption: 'Nguyễn Văn Thiệu từ chức ngày 21/4/1975' 
      }
    ],
    videos: []
  },
  {
    date: '26-28/04/1975',
    title: 'Chiến dịch Hồ Chí Minh - Tổng tiến công',
    content: `26/04: 5 cánh quân của Chiến dịch Hồ Chí Minh bắt đầu tổng tiến công.
27/04: Đánh chiếm các căn cứ quân sự quan trọng quanh Sài Gòn.
28/04: Bao vây và siết chặt vòng vây quanh Sài Gòn.

Đây là chiến dịch quyết định cuối cùng nhằm giải phóng hoàn toàn miền Nam.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_04_26/chiendichhcm_1975_1_ypfy.jpg', 
        caption: 'Bộ đội hành quân trong Chiến dịch Hồ Chí Minh' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'c4IRIvwmGL8', 
        caption: 'Chiến dịch Hồ Chí Minh' 
      }
    ]
  },
  {
    date: '30/04/1975',
    title: 'GIẢI PHÓNG HOÀN TOÀN MIỀN NAM',
    content: `10h45: Xe tăng 843 (390) húc đổ cổng chính Dinh Độc Lập.
11h30: Xe tăng 843 tiến vào sân Dinh Độc Lập.
Quân Giải phóng chiếm Dinh, bắt toàn bộ nội các chính quyền Sài Gòn.

Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện.

11h30 cùng ngày: Lá cờ Mặt trận Dân tộc Giải phóng tung bay trên nóc Dinh Độc Lập, đánh dấu miền Nam hoàn toàn giải phóng, đất nước thống nhất.`,
    images: [
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tank_390_crashing_through_the_gates_of_the_Independence_Palace.jpg/1024px-Tank_390_crashing_through_the_gates_of_the_Independence_Palace.jpg', 
        caption: 'Xe tăng 390 húc đổ cổng Dinh Độc Lập' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2024-04/30.4.1975.jpg', 
        caption: 'Cờ giải phóng trên nóc Dinh Độc Lập' 
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
        src: 'mce2FvKZ-PI', 
        caption: 'Toàn cảnh ngày 30/4/1975' 
      }
    ]
  },
  {
    date: '01/05/1975',
    title: 'Toàn miền Nam được giải phóng',
    content: `Sau khi Sài Gòn giải phóng, các tỉnh còn lại ở miền Nam lần lượt được giải phóng:

- Cần Thơ: 30/4
- Vĩnh Long: 30/4
- Cà Mau: 01/5
- Các tỉnh Đồng bằng sông Cửu Long: 01-02/5

Đến ngày 02/5/1975, toàn bộ lãnh thổ miền Nam Việt Nam hoàn toàn giải phóng.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_05_01/giaiphong_mien_nam_1_oxpv.jpg', 
        caption: 'Lễ chào cờ đầu tiên sau giải phóng' 
      }
    ],
    videos: []
  }
];

// --- COMPONENT CHÍNH - Giao diện giống Timeline1945 và 1954 với màu chủ đạo đỏ-vàng ---
export function Timeline1975() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState<boolean>(false);

  // Gom tất cả media thành một mảng
  const allMedia = DATA_1975.flatMap(event => 
    [...event.images, ...event.videos].map(m => ({ 
      ...m, 
      eventDate: event.date, 
      eventTitle: event.title 
    }))
  );

  const featuredMedia = allMedia.slice(0, 8);

  // Hàm kiểm tra nội dung ngắn (giống 1945 và 1954)
  const isShortContent = (content: string) => {
    const wordCount = content.split(/\s+/).length;
    return wordCount < 150; // Nếu ít hơn 150 từ coi là ngắn
  };

  return (
    <div className="space-y-8">
      {/* Header - Màu đỏ-vàng */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/20 via-yellow-900/20 to-red-900/20 p-8 border border-yellow-200/30 shadow-lg">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-700 to-yellow-600 flex items-center justify-center shadow-xl">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-yellow-700 to-red-800 tracking-tighter">
                  1975
                </h2>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  Đại Thắng Mùa Xuân - Giải Phóng Miền Nam, Thống Nhất Đất Nước
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Màu đỏ-vàng */}
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
            activeTab === 'timeline' 
              ? 'bg-gradient-to-r from-red-600 to-yellow-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span>Dòng thời gian</span>
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
            activeTab === 'gallery' 
              ? 'bg-gradient-to-r from-red-600 to-yellow-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <Film className="w-5 h-5" />
          <span>Thư viện tư liệu</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="min-h-[600px] animate-in fade-in duration-700">
        
        {/* TAB DÒNG THỜI GIAN - Layout giống 1945 và 1954 */}
        {activeTab === 'timeline' && (
          <div className="space-y-12">
            {DATA_1975.map((event, idx) => {
              const contentIsShort = isShortContent(event.content);
              const allEventMedia = [...event.images, ...event.videos];
              
              return (
                <div key={idx} className="relative group">
                  {/* Timeline line and dot - Màu đỏ-vàng */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-yellow-300 to-transparent hidden md:block"></div>
                  <div className="absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 border-4 border-white shadow-lg hidden md:block"></div>
                  
                  {/* Content Card */}
                  <div className="ml-0 md:ml-12 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                    {/* Date Header - Màu đỏ-vàng */}
                    <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center shadow-md">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="inline-block px-4 py-2 bg-white rounded-full text-red-700 font-bold border border-red-200">
                            {event.date}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 mt-3 leading-tight">{event.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content and Media - Layout grid ngang khi nội dung ngắn */}
                    <div className="p-6">
                      {allEventMedia.length > 0 ? (
                        <div className={`${contentIsShort ? 'grid grid-cols-1 lg:grid-cols-3 gap-8' : 'space-y-8'}`}>
                          {/* Text Content */}
                          <div className={`${contentIsShort ? 'lg:col-span-2' : 'w-full'}`}>
                            <div className="prose prose-lg max-w-none">
                              <div className="text-gray-700 leading-relaxed space-y-4">
                                {event.content.split('\n\n').map((paragraph, pIdx) => (
                                  <p key={pIdx} className="text-lg">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Media Gallery - Grid ngang hoặc dọc tùy vào độ dài nội dung */}
                          {contentIsShort ? (
                            // Grid ngang khi nội dung ngắn
                            <div className="lg:col-span-1 space-y-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                                  <ImageIcon className="w-5 h-5 text-red-600" />
                                  <span>Tư liệu ({allEventMedia.length})</span>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                {allEventMedia.slice(0, 3).map((media, mediaIdx) => (
                                  <div 
                                    key={mediaIdx} 
                                    className="group relative rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    onClick={() => setSelectedMedia(media)}
                                  >
                                    <div className="aspect-video overflow-hidden bg-gray-100">
                                      {media.type === 'image' ? (
                                        <>
                                          <img 
                                            src={media.src} 
                                            alt={media.caption}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                            onError={(e) => {
                                              e.currentTarget.src = "https://placehold.co/600x400/dc2626/ffffff?text=Tư+Liệu+Lịch+Sử";
                                            }}
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </>
                                      ) : (
                                        <div className="relative w-full h-full">
                                          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-yellow-900/50 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                              <Play className="w-8 h-8 text-white" />
                                            </div>
                                          </div>
                                          <img 
                                            src={`https://img.youtube.com/vi/${media.src}/hqdefault.jpg`}
                                            alt={media.caption}
                                            className="w-full h-full object-cover opacity-60"
                                          />
                                        </div>
                                      )}
                                    </div>
                                    <div className="p-4">
                                      <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-3 h-3 rounded-full ${
                                          media.type === 'image' ? 'bg-red-500' : 'bg-yellow-500'
                                        }`}></div>
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                          {media.type === 'image' ? 'Ảnh' : 'Video'}
                                        </span>
                                      </div>
                                      <p className="text-sm font-medium text-gray-800 line-clamp-2">{media.caption}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            // Grid dọc phía dưới khi nội dung dài
                            <div className="w-full pt-8 border-t border-gray-100">
                              <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                                  <ImageIcon className="w-5 h-5 text-red-600" />
                                  <span>Tư liệu liên quan ({allEventMedia.length})</span>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {allEventMedia.map((media, mediaIdx) => (
                                  <div 
                                    key={mediaIdx} 
                                    className="group relative rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    onClick={() => setSelectedMedia(media)}
                                  >
                                    <div className="aspect-video overflow-hidden bg-gray-100">
                                      {media.type === 'image' ? (
                                        <>
                                          <img 
                                            src={media.src} 
                                            alt={media.caption}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </>
                                      ) : (
                                        <div className="relative w-full h-full">
                                          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-yellow-900/50 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                              <Play className="w-8 h-8 text-white" />
                                            </div>
                                          </div>
                                          <img 
                                            src={`https://img.youtube.com/vi/${media.src}/hqdefault.jpg`}
                                            alt={media.caption}
                                            className="w-full h-full object-cover opacity-60"
                                          />
                                        </div>
                                      )}
                                    </div>
                                    <div className="p-4">
                                      <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-3 h-3 rounded-full ${
                                          media.type === 'image' ? 'bg-red-500' : 'bg-yellow-500'
                                        }`}></div>
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                          {media.type === 'image' ? 'Ảnh' : 'Video'}
                                        </span>
                                      </div>
                                      <p className="text-sm font-medium text-gray-800 line-clamp-2">{media.caption}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        // Không có media
                        <div className="prose prose-lg max-w-none">
                          <div className="text-gray-700 leading-relaxed space-y-4">
                            {event.content.split('\n\n').map((paragraph, pIdx) => (
                              <p key={pIdx} className="text-lg">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB THƯ VIỆN TƯ LIỆU - Giống Timeline 1945 và 1954 */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            {/* Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(showAllMedia ? allMedia : featuredMedia).map((media, idx) => (
                <div 
                  key={idx} 
                  className="group relative rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedMedia(media)}
                >
                  {/* Media Preview */}
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    {media.type === 'image' ? (
                      <>
                        <img 
                          src={media.src} 
                          alt={media.caption}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/600x400/dc2626/ffffff?text=Ảnh+Tư+Liệu";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    ) : (
                      <div className="relative w-full h-full">
                        <img 
                          src={`https://img.youtube.com/vi/${media.src}/hqdefault.jpg`}
                          alt={media.caption}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4">
                          <div className="w-12 h-12 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-700 transition-colors">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Media Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          media.type === 'image' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {media.type === 'image' ? 'Ảnh' : 'Video'}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {media.eventDate}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 line-clamp-2 mb-2" title={media.caption}>
                      {media.caption}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2" title={media.eventTitle}>
                      {media.eventTitle}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <div className="text-sm font-medium mb-1">Xem chi tiết</div>
                      <div className="text-xs opacity-90">Nhấn để mở rộng</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {allMedia.length > 8 && !showAllMedia && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setShowAllMedia(true)}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Xem tất cả {allMedia.length} tư liệu
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Media Modal - Đã cập nhật với design mới */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia(null);
            }}
            className="absolute top-6 right-6 text-white hover:text-red-300 transition-colors p-3 bg-black/50 rounded-full z-10 hover:bg-black/70"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full max-w-6xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Container chính với max-height cố định */}
            <div className="w-full bg-gray-900 rounded-2xl overflow-hidden max-h-[90vh] flex flex-col">
              {/* Nội dung video/ảnh - luôn visible */}
              <div className="flex-1 min-h-0">
                {selectedMedia.type === 'image' ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={selectedMedia.src} 
                      alt={selectedMedia.caption}
                      className="w-auto h-auto max-w-full max-h-[70vh] object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/800x600/dc2626/ffffff?text=Không+thể+tải+ảnh";
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedMedia.src}?autoplay=1&rel=0`}
                      title={selectedMedia.caption}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                )}
              </div>
              
              {/* Thông tin caption - có thể scroll nếu dài */}
              <div className="p-6 bg-gray-800 border-t border-gray-700">
                <div className="flex items-start gap-4">
                  <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                    selectedMedia.type === 'image' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
                        {selectedMedia.type === 'image' ? 'Ảnh tư liệu' : 'Video tư liệu'}
                      </span>
                      <span className="text-xs text-gray-400">
                        {selectedMedia.type === 'video' ? 'Nhấn phát để xem' : 'Nhấn để phóng to'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{selectedMedia.caption}</h3>
                    
                    {/* Hiển thị thêm các video khác nếu có */}
                    {selectedMedia.type === 'video' && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-300 mb-2">Video khác</p>
                        <div className="text-lg font-semibold text-white">
                          ĐẠI HỘI ĐẢNG LẦN THỨ III
                          <span className="block text-sm text-gray-300 mt-1">Video tư liệu lịch sử</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons nếu có nhiều media */}
            {allMedia.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = allMedia.findIndex(m => 
                      m.src === selectedMedia.src && m.type === selectedMedia.type
                    );
                    const prevIndex = (currentIndex - 1 + allMedia.length) % allMedia.length;
                    setSelectedMedia(allMedia[prevIndex]);
                  }}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <div className="text-white text-sm">
                  {allMedia.findIndex(m => 
                    m.src === selectedMedia.src && m.type === selectedMedia.type
                  ) + 1} / {allMedia.length}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = allMedia.findIndex(m => 
                      m.src === selectedMedia.src && m.type === selectedMedia.type
                    );
                    const nextIndex = (currentIndex + 1) % allMedia.length;
                    setSelectedMedia(allMedia[nextIndex]);
                  }}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
        <p>Nguồn tư liệu: Bảo tàng Lịch sử Quân sự Việt Nam, Thông tấn xã Việt Nam</p>
        <p className="mt-1">© 1975-2024 - Kỷ niệm 49 năm Ngày Giải phóng miền Nam, thống nhất đất nước</p>
      </div>
    </div>
  );
}
