'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon } from 'lucide-react';

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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/N7mP3qVdYr8x', 
        caption: 'Niềm Tin Dâng Đảng', 
        author: 'Trọng Loan' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/O8nQ4rWeZs9y', 
        caption: 'Đảng Đã Cho Ta Một Mùa Xuân', 
        author: 'Phạm Tuyên' 
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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/P9oR5sXfAt0z', 
        caption: 'Khát Vọng Mùa Xuân', 
        author: 'Mozart (Lời Việt)' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Q0pS6tYgBu1a', 
        caption: 'Hòa Bình Cho Ngày Mai', 
        author: 'Nhiều nghệ sĩ' 
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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/R1qT7uZhCv2b', 
        caption: 'Bài Ca Hợp Tác', 
        author: 'Trần Long Ẩn' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/S2rU8vAiDw3c', 
        caption: 'Tự Hào Việt Nam', 
        author: 'Văn Ký' 
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1991() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1991.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_1991.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 border border-pink-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-pink-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-700 tracking-tighter">
                1991 - 1995
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Cương Lĩnh 1991 & Hội Nhập Quốc Tế
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
            count={DATA_1991.length}
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
            {DATA_1991.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-800 text-sm font-bold border border-purple-200">
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
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-purple-600" />
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center font-bold">
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
              className="absolute -top-12 right-0 text-white hover:text-purple-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
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
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
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
