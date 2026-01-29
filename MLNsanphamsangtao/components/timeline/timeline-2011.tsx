'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon, Globe, Rocket, TrendingUp } from 'lucide-react';

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
    date: '12-18/01/2011',
    title: 'Đại Hội XI - Tầm Nhìn Chiến Lược Phát Triển Đất Nước',
    content: `Đại hội đại biểu toàn quốc lần thứ XI của Đảng (12-18/1/2011) đã thông qua "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011)" - văn kiện chiến lược quan trọng cho giai đoạn mới.

**Những định hướng chiến lược quan trọng:**
• Mục tiêu đến năm 2020: Nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại
• Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa
• Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc
• Bảo đảm vững chắc quốc phòng, an ninh
• Chủ động và tích cực hội nhập quốc tế
• Xây dựng hệ thống chính trị vững mạnh

Đại hội XI đặt nền móng cho sự phát triển bứt phá của đất nước trong thập kỷ thứ hai của thế kỷ XXI.`,
    images: [
      { 
        type: 'image', 
        src: 'https://dangcongsan.vn/DATA/0/2016/01/12/Dangcongsan/dhoi%20xi%20_21_39_23_741.jpg', 
        caption: 'Khai mạc Đại hội Đảng toàn quốc lần thứ XI (12/1/2011)' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/01/12/dai-hoi-dang-xi.jpg', 
        caption: 'Các đại biểu tham dự Đại hội XI' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2021/01/12/upload_1599/dai-hoi-xi-1.jpg', 
        caption: 'Tổng Bí thư Nguyễn Phú Trọng phát biểu tại Đại hội XI' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'yA7d7gBq3Pc', 
        caption: 'Phim tài liệu: Dấu ấn Đại hội XI - Tầm nhìn mới' 
      },
      { 
        type: 'video', 
        src: 'zB8c9dCq4Qd', 
        caption: 'Toàn cảnh Đại hội Đảng lần thứ XI' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/T3uV9wXeZy0a', 
        caption: 'Đường Đến Ngày Vinh Quang', 
        author: 'Bức Tường' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/U4vX0xYfAz1b', 
        caption: 'Tự Hào Đảng Cộng Sản Việt Nam', 
        author: 'Trọng Loan' 
      }
    ]
  },
  {
    date: '2011 - 2015',
    title: 'Hội Nhập Sâu Rộng & Đột Phá Kinh Tế',
    content: `Giai đoạn 2011-2015 đánh dấu sự hội nhập sâu rộng của Việt Nam vào nền kinh tế toàn cầu:

**Hội nhập kinh tế quốc tế:**
• Tham gia đàm phán Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP)
• Ký kết Hiệp định Thương mại tự do với EU (EVFTA)
• Mở rộng hợp tác với các nước ASEAN và APEC
• Thu hút mạnh mẽ đầu tư nước ngoài

**Phát triển hạ tầng đột phá:**
• Cao tốc Bắc - Nam dần hình thành
• Các cây cầu lớn: Cầu Rồng (Đà Nẵng 2013), Cầu Nhật Tân (Hà Nội 2015)
• Mở rộng hệ thống sân bay quốc tế
• Phát triển các khu đô thị mới

**Công nghệ và số hóa:**
• Bùng nổ internet và điện thoại thông minh
• Sự phát triển của các tập đoàn công nghệ Việt Nam
• Khởi nghiệp đổi mới sáng tạo (startup) phát triển mạnh
• Chuyển đổi số trong các lĩnh vực kinh tế - xã hội`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2020/06/08/cau-rong-da-nang.jpg', 
        caption: 'Cầu Rồng Đà Nẵng - Biểu tượng phát triển đô thị' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2018/11/12/upload_1816/cpseaport_1.jpg', 
        caption: 'Cảng biển quốc tế - Cửa ngõ hội nhập' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2020-03/startup-vietnam.jpg', 
        caption: 'Cộng đồng startup Việt Nam phát triển mạnh mẽ' 
      },
      { 
        type: 'image', 
        src: 'https://media.baodautu.vn/Images/chicuong/2020/10/12/cao-toc-bac-nam.jpg', 
        caption: 'Hệ thống cao tốc Bắc - Nam dần hình thành' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'aC9d8eBq5Re', 
        caption: 'Việt Nam hội nhập: Hành trình 2011-2015' 
      },
      { 
        type: 'video', 
        src: 'bD0e9fCq6Sf', 
        caption: 'Startup Việt - Khát vọng vươn tầm thế giới' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/V5wY1yZgBx2c', 
        caption: 'Việt Nam Ơi', 
        author: 'Minh Beta' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/W6xZ2zAhCy3d', 
        caption: 'Khát Vọng Tuổi Trẻ', 
        author: 'Vũ Hoàng' 
      }
    ]
  },
  {
    date: '2016 - Nay',
    title: 'Khát Vọng Phồn Vinh & Định Vị Mới Trên Trường Quốc Tế',
    content: `Giai đoạn 2016 đến nay chứng kiến sự chuyển mình mạnh mẽ của Việt Nam:

**Thành tựu kinh tế - xã hội nổi bật:**
• Duy trì tốc độ tăng trưởng kinh tế cao (6-7%/năm)
• Quy mô GDP vượt mốc 400 tỷ USD
• Thu nhập bình quân đầu người tăng nhanh
• Xóa đói giảm nghèo đạt thành tựu ấn tượng
• Chỉ số HDI không ngừng cải thiện

**Hội nhập và vị thế quốc tế:**
• Chủ tịch ASEAN 2020 - Thể hiện vai trò dẫn dắt khu vực
• Ủy viên không thường trực Hội đồng Bảo an LHQ 2020-2021
• Tham gia sâu rộng vào chuỗi giá trị toàn cầu
• Đối tác chiến lược với nhiều cường quốc

**Công nghệ và đổi mới sáng tạo:**
• Cách mạng công nghiệp 4.0 được đẩy mạnh
• Phát triển hệ sinh thái số quốc gia
• Nhiều startup Việt đạt kỳ lục gọi vốn
• Công dân số, chính phủ số, kinh tế số phát triển

**Văn hóa và thể thao:**
• Đội tuyển bóng đá Việt Nam ghi dấu ấn mạnh mẽ
• Văn hóa Việt lan tỏa ra thế giới
• Du lịch phát triển thành ngành kinh tế mũi nhọn
• Di sản văn hóa được bảo tồn và phát huy

Việt Nam đang trên đà thực hiện khát vọng trở thành quốc gia phát triển, có thu nhập cao vào năm 2045.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/04/27/vietnam-economy-growth.jpg', 
        caption: 'Kinh tế Việt Nam tăng trưởng ấn tượng' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2020/11/15/upload_2363/asean-2020-vietnam.jpg', 
        caption: 'Việt Nam chủ tịch ASEAN 2020' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2019-06/vietnam-u23.jpg', 
        caption: 'Thành công của thể thao Việt Nam trên trường quốc tế' 
      },
      { 
        type: 'image', 
        src: 'https://media.baodautu.vn/Images/chicuong/2022/12/29/digital-vietnam.jpg', 
        caption: 'Chuyển đổi số - Động lực phát triển mới' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'cE1g0dDq7Tg', 
        caption: 'Việt Nam - Hành trình phát triển thần kỳ' 
      },
      { 
        type: 'video', 
        src: 'dF2h1eEq8Uh', 
        caption: 'Khát vọng Việt Nam 2045' 
      },
      { 
        type: 'video', 
        src: 'eG3i9fRq9Vi', 
        caption: 'Thể thao Việt Nam - Niềm tự hào dân tộc' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/X7yA3aBiDz4e', 
        caption: 'Việt Nam Tôi Yêu', 
        author: 'Nguyễn Đức Cường' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Y8zB4bCjEa5f', 
        caption: 'Hào Khí Việt Nam', 
        author: 'Đỗ Bảo' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Z9cC5dDkFb6g', 
        caption: 'Một Thời Để Nhớ', 
        author: 'Trần Tiến' 
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline2011() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_2011.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_2011.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-900/20 to-teal-900/20 p-8 border border-teal-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-700 to-teal-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-teal-700 tracking-tighter">
                2011 - Nay
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Phát Triển Bền Vững - Khát Vọng Hùng Cường
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
            label="Thông Tin Chiến Lược" 
            icon={<FileText className="w-5 h-5" />} 
            count={DATA_2011.length}
          />
          <TabBtn 
            isActive={activeTab === 'video'} 
            onClick={() => setActiveTab('video')} 
            label="Video Phát Triển" 
            icon={<Film className="w-5 h-5" />} 
            count={allVideos.length}
          />
          <TabBtn 
            isActive={activeTab === 'music'} 
            onClick={() => setActiveTab('music')} 
            label="Bài Hát Hiện Đại" 
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
            {DATA_2011.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-600 via-teal-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-800 text-sm font-bold border border-cyan-200">
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
                          <span className="font-semibold">Hình ảnh phát triển</span>
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
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-cyan-600" />
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-600 text-white text-xs flex items-center justify-center font-bold">
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
                        Thời kỳ: {song.eventDate}
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
              className="absolute -top-12 right-0 text-white hover:text-cyan-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
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
          ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg' 
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
