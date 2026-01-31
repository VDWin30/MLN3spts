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

const DATA_1991: TimelineEvent[] = [
  {
    date: '06/1991',
    title: 'Đại Hội VII - Cương Lĩnh Xây Dựng Đất Nước Trong Thời Kỳ Quá Độ',
    content: `Đại hội đại biểu toàn quốc lần thứ VII của Đảng (24-27/6/1991) đã thông qua "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội" - văn kiện lịch sử quan trọng có ý nghĩa chiến lược.

**Những điểm mới quan trọng của Cương lĩnh 1991:**
• Khẳng định tiếp tục con đường Đổi Mới toàn diện và đồng bộ
• Giữ vững định hướng Xã hội chủ nghĩa
• Lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng
• Xây dựng nền kinh tế nhiều thành phần, vận hành theo cơ chế thị trường
• Thực hiện dân giàu, nước mạnh, xã hội công bằng, văn minh

Cương lĩnh 1991 là kim chỉ nam cho sự phát triển của đất nước trong nhiều thập kỷ tiếp theo.`,
    images: [
      { 
        type: 'image', 
        src: 'https://dangcongsan.vn/DATA/0/2018/12/28/Dangcongsan/vhoai%20_3_16_22_800.jpg', 
        caption: 'Đại hội Đảng toàn quốc lần thứ VII (1991)' 
      },
      { 
        type: 'image', 
        src: 'https://media.baodautu.vn/Images/chicuong/2021/06/27/cuong-linh-1991-1.jpg', 
        caption: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH' 
      },
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Do_Muoi_1991.jpg/800px-Do_Muoi_1991.jpg', 
        caption: 'Tổng Bí thư Đỗ Mười tại Đại hội VII' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'i7S9l4eBQ3Y', 
        caption: 'Phim tài liệu: Dấu ấn Đại hội VII và Cương lĩnh 1991' 
      },
      { 
        type: 'video', 
        src: 'vY8x5cP7qRk', 
        caption: 'Cương lĩnh 1991 - Định hướng phát triển đất nước' 
      }
    ]
  },
  {
    date: '1991 - 1992',
    title: 'Đa Phương Hóa, Đa Dạng Hóa Quan Hệ Quốc Tế',
    content: `Thực hiện đường lối đối ngoại "Việt Nam muốn là bạn, là đối tác tin cậy của các nước", giai đoạn 1991-1992 đánh dấu bước đột phá trong quan hệ quốc tế:

**Bình thường hóa quan hệ với Trung Quốc (11/1991):**
• Hội nghị cấp cao Việt - Trung tại Bắc Kinh
• Khôi phục quan hệ hữu nghị truyền thống
• Mở ra hợp tác kinh tế, thương mại mới

**Cải thiện quan hệ với ASEAN:**
• Tham gia Hiệp ước Thân thiện và Hợp tác (TAC)
• Chuẩn bị gia nhập ASEAN (chính thức năm 1995)
• Tăng cường hợp tác khu vực

**Phá thế bao vây cấm vận:**
• Từng bước bình thường hóa với các nước phương Tây
• Thu hút đầu tư nước ngoài
• Mở rộng thị trường xuất khẩu

**Thành lập Cộng đồng Pháp ngữ (1991):**
• Việt Nam trở thành thành viên chính thức
• Tăng cường hợp tác văn hóa, giáo dục`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/11/05/viet-trung.jpg', 
        caption: 'Lãnh đạo Việt Nam và Trung Quốc tại hội nghị thượng đỉnh 1991' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/07/28/upload_1501/asean.jpg', 
        caption: 'Việt Nam hướng tới gia nhập ASEAN' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-11/viet_nam_trung_quoc_1.jpg', 
        caption: 'Bình thường hóa quan hệ Việt - Trung năm 1991' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'wX9y5zPqR2v', 
        caption: 'Việt Nam mở cửa hội nhập quốc tế những năm 1990' 
      }
    ]
  },
  {
    date: '1993 - 1995',
    title: 'Cải Cách Thể Chế Kinh Tế & Hội Nhập Sâu Rộng',
    content: `Sau Cương lĩnh 1991, Việt Nam tiếp tục đẩy mạnh cải cách thể chế kinh tế và hội nhập quốc tế sâu rộng:

**Cải cách thể chế kinh tế:**
• Hiến pháp 1992: Khẳng định nền kinh tế nhiều thành phần
• Luật Doanh nghiệp tư nhân (1990) và Luật Công ty (1990)
• Cải cách hệ thống ngân hàng, thành lập Ngân hàng Nhà nước
• Phát triển thị trường chứng khoán

**Thu hút đầu tư nước ngoài:**
• Luật Đầu tư nước ngoài sửa đổi (1992)
• Thành lập các khu công nghiệp, khu chế xuất
• Dòng vốn FDI tăng mạnh, đặc biệt từ Đài Loan, Hàn Quốc, Nhật Bản

**Hội nhập quốc tế:**
• Gia nhập ASEAN (28/7/1995)
• Bình thường hóa quan hệ với Hoa Kỳ (11/7/1995)
• Ký kết Hiệp định khung với EU (1995)
• Tham gia Diễn đàn hợp tác kinh tế châu Á - Thái Bình Dương (APEC)

**Kinh tế tăng trưởng ấn tượng:**
• GDP tăng trưởng trung bình 8-9%/năm
• Xuất khẩu tăng mạnh, đặc biệt dầu thô, gạo, hàng dệt may
• Lạm phát được kiểm soát, từ 3 chữ số xuống còn 2 chữ số`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2020/07/28/asean-1995.jpg', 
        caption: 'Việt Nam gia nhập ASEAN ngày 28/7/1995' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/07/11/upload_1280/my-vietnam-1995.jpg', 
        caption: 'Bình thường hóa quan hệ Việt Nam - Hoa Kỳ (1995)' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2020-07/kinh-te-viet-nam-nhung-nam-90.jpg', 
        caption: 'Kinh tế Việt Nam tăng trưởng mạnh những năm 1990' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'xY8z6qPsR3w', 
        caption: 'Việt Nam gia nhập ASEAN - Bước ngoặt lịch sử' 
      },
      { 
        type: 'video', 
        src: 'z9a7rQtS4t5', 
        caption: 'Bình thường hóa quan hệ Việt - Mỹ 1995' 
      }
    ]
  }
];

// --- COMPONENT CHÍNH - Giao diện giống Timeline1945, 1954, 1975, 1986 với màu chủ đạo tím/hồng ---
export function Timeline1991() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState<boolean>(false);

  // Gom tất cả media thành một mảng
  const allMedia = DATA_1991.flatMap(event => 
    [...event.images, ...event.videos].map(m => ({ 
      ...m, 
      eventDate: event.date, 
      eventTitle: event.title 
    }))
  );

  const featuredMedia = allMedia.slice(0, 8);

  // Hàm kiểm tra nội dung ngắn (giống các timeline khác)
  const isShortContent = (content: string) => {
    const wordCount = content.split(/\s+/).length;
    return wordCount < 150; // Nếu ít hơn 150 từ coi là ngắn
  };

  return (
    <div className="space-y-8">
      {/* Header - Màu tím/hồng */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 p-8 border border-pink-200/30 shadow-lg">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-700 to-pink-600 flex items-center justify-center shadow-xl">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 tracking-tighter">
                  1991 - 1995
                </h2>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  Cương Lĩnh 1991 & Hội Nhập Quốc Tế Sâu Rộng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Màu tím/hồng */}
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
            activeTab === 'timeline' 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
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
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <Film className="w-5 h-5" />
          <span>Thư viện tư liệu</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="min-h-[600px] animate-in fade-in duration-700">
        
        {/* TAB DÒNG THỜI GIAN - Layout giống các timeline khác */}
        {activeTab === 'timeline' && (
          <div className="space-y-12">
            {DATA_1991.map((event, idx) => {
              const contentIsShort = isShortContent(event.content);
              const allEventMedia = [...event.images, ...event.videos];
              
              return (
                <div key={idx} className="relative group">
                  {/* Timeline line and dot - Màu tím/hồng */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-300 to-transparent hidden md:block"></div>
                  <div className="absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 border-4 border-white shadow-lg hidden md:block"></div>
                  
                  {/* Content Card */}
                  <div className="ml-0 md:ml-12 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                    {/* Date Header - Màu tím/hồng */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-md">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="inline-block px-4 py-2 bg-white rounded-full text-purple-700 font-bold border border-purple-200">
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
                                  <ImageIcon className="w-5 h-5 text-purple-600" />
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
                                              e.currentTarget.src = "https://placehold.co/600x400/9333ea/ffffff?text=Tư+Liệu+Lịch+Sử";
                                            }}
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </>
                                      ) : (
                                        <div className="relative w-full h-full">
                                          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 flex items-center justify-center">
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
                                          media.type === 'image' ? 'bg-purple-500' : 'bg-pink-500'
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
                                  <ImageIcon className="w-5 h-5 text-purple-600" />
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
                                          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 flex items-center justify-center">
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
                                          media.type === 'image' ? 'bg-purple-500' : 'bg-pink-500'
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

        {/* TAB THƯ VIỆN TƯ LIỆU - Giống các timeline khác */}
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
                            e.currentTarget.src = "https://placehold.co/600x400/9333ea/ffffff?text=Ảnh+Tư+Liệu";
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
                          <div className="w-12 h-12 rounded-full bg-purple-600/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-purple-700 transition-colors">
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
                          media.type === 'image' ? 'bg-purple-500' : 'bg-pink-500'
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
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
            className="absolute top-6 right-6 text-white hover:text-purple-300 transition-colors p-3 bg-black/50 rounded-full z-10 hover:bg-black/70"
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
                        e.currentTarget.src = "https://placehold.co/800x600/9333ea/ffffff?text=Không+thể+tải+ảnh";
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
                    selectedMedia.type === 'image' ? 'bg-purple-500' : 'bg-pink-500'
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
        <p className="mt-1">© 1991-2024 - Kỷ niệm Cương lĩnh 1991 và Hội nhập quốc tế</p>
      </div>
    </div>
  );
}
