'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 1975 HOÀN CHỈNH ---
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
    date: '10/03/1975',
    title: 'Chiến dịch Tây Nguyên - Mở màn đại thắng',
    content: `Cuộc tấn công vào Buôn Ma Thuột mở màn Chiến dịch Tây Nguyên, tạo bước ngoặt chiến lược. Việc chọn Tây Nguyên làm điểm đột phá cho thấy tư duy nhạy bén của Đảng trong việc đánh vào "yết hầu" của chế độ cũ. Chỉ sau 4 ngày, toàn bộ Tây Nguyên được giải phóng.

Sự tan rã của Quân đoàn 2 chính quyền Sài Gòn tại đây đã tạo ra hiệu ứng dây chuyền, buộc đối phương phải rút khỏi Kon Tum, Pleiku theo "lộ trình máu" tỉnh lộ 7. Đây là minh chứng rõ nét cho quy luật tích lũy về Lượng dẫn đến sự thay đổi về Chất sau hơn hai năm xây dựng hậu phương miền Bắc XHCN.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_08/bmt1_icwo.jpg', 
        caption: 'Bộ đội tiến vào giải phóng Buôn Ma Thuột' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_08/bmt2_znwm.jpg', 
        caption: 'Nhân dân chào đón bộ đội giải phóng' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'VIDEO_ID_TÂY_NGUYÊN', 
        caption: 'Chiến dịch Tây Nguyên - Bước ngoặt lịch sử' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/xxx', 
        caption: 'Bài Ca Tây Nguyên', 
        author: 'Nhạc sĩ' 
      }
    ]
  },
  {
    date: 'Tháng 3-4/1975',
    title: 'Cuộc tổng tiến công thần tốc - Huế, Đà Nẵng giải phóng',
    content: `Sau Tây Nguyên, quân ta tiếp tục tiến công giải phóng các thành phố lớn:
• 26/3: Giải phóng Huế - cố đô của dân tộc
• 29/3: Giải phóng Đà Nẵng - thành phố lớn thứ hai miền Nam

Miền Bắc lúc này vận hành như một thực thể thống nhất với tinh thần "Tất cả cho tiền tuyến". Người dân dù sống trong chế độ tem phiếu nhưng vẫn dồn toàn lực cho chiến trường. Ngược lại, miền Nam chìm trong hoảng loạn, các đô thị lớn rơi vào tình trạng bất an, giá cả leo thang, đồng tiền sụt giá.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_26/hue_giaiphong_ykqu.jpg', 
        caption: 'Cờ giải phóng tung bay trên Kỳ Đài Huế' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_03_29/danang_oyag.jpg', 
        caption: 'Bộ đội tiến vào Đà Nẵng' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'VIDEO_ID_HUẾ_ĐÀ_NẴNG', 
        caption: 'Giải phóng Huế - Đà Nẵng' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/xxx', 
        caption: 'Giải phóng Đà Nẵng', 
        author: 'Nhạc sĩ' 
      }
    ]
  },
  {
    date: '21/04/1975',
    title: 'Tổng thống Nguyễn Văn Thiệu từ chức',
    content: `Trước sức ép của cuộc tổng tiến công, Tổng thống Nguyễn Văn Thiệu từ chức, giao quyền cho Phó t�ng thống Trần Văn Hương. Sự kiện này không chỉ là thay đổi nhân sự mà đánh dấu sự sụp đổ về mặt tinh thần của toàn bộ Kiến trúc thượng tầng chế độ cũ.

Hệ thống hành chính vốn dựa vào viện trợ và cố vấn nước ngoài mất điểm tựa, các mệnh lệnh từ trung ương trở nên vô hiệu trước sức ép của 5 cánh quân giải phóng.`,
    images: [
      { 
        type: 'image', 
        src: 'https://baotanglichsu.vn/uploads/news/2020_04/nguyen-van-thieu-tu-chuc-ngay-21-4-1975-1.jpg', 
        caption: 'Tổng thống Nguyễn Văn Thiệu tuyên bố từ chức' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'VIDEO_ID_THIỆU_TỪ_CHỨC', 
        caption: 'Sự kiện Nguyễn Văn Thiệu từ chức' 
      }
    ],
    music: []
  },
  {
    date: '30/04/1975',
    title: 'Giải Phóng Miền Nam - Thống Nhất Đất Nước',
    content: `11h30 ngày 30/4/1975: Xe tăng 843 (thực tế là xe 390) húc đổ cổng Dinh Độc Lập. Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện.

Sự kiện này:
• Kết thúc 30 năm chiến tranh
• Chấm dứt sự chia cắt đất nước
• Mở ra kỷ nguyên mới: độc lập, thống nhất, cả nước đi lên CNXH

Ngay sau đó, các Ủy ban Quân quản được thành lập để thay thế bộ máy cũ, duy trì an ninh trật tự, ổn định đời sống nhân dân.`,
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
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'c4IRIvwmGL8', 
        caption: 'Phim tư liệu: Thời khắc lịch sử 30/4/1975' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/GICiKLd9Z5nz', 
        caption: 'Như Có Bác Trong Ngày Đại Thắng', 
        author: 'Phạm Tuyên' 
      }
    ]
  },
  {
    date: 'Tháng 5-8/1975',
    title: 'Tiếp quản và ổn định tình hình',
    content: `Giai đoạn thiết lập trật tự mới:
1. Ổn định đô thị: Duy trì hệ thống điện, nước, viễn thông
2. Bài trừ văn hóa cũ: Tịch thu sách báo, băng đĩa "đồi trụy"
3. Khắc phục khủng hoảng kinh tế: Cắt đứt viện trợ Mỹ, thực hiện phân phối bao cấp
4. Di chuyển dân cư: Đưa dân đi xây dựng vùng kinh tế mới

Đây là giai đoạn "cú sốc" văn hóa - kinh tế đầu tiên khi hai lối sống khác biệt sau 20 năm chia cắt bắt đầu va chạm.`,
    images: [
      { 
        type: 'image', 
        src: 'https://baotanglichsu.vn/uploads/news/2021_04/quan-quan-sai-gon-5-1975-1.jpg', 
        caption: 'Ủy ban Quân quản làm việc tại Sài Gòn' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '22/09/1975',
    title: 'Chiến dịch X1 - Đổi tiền và quốc hữu hóa',
    content: `Chiến dịch X1 đánh vào "lũy quỹ" của tư sản mại bản:
• Đổi tiền: 1 đồng mới = 500 đồng cũ
• Hạn mức đổi tiền mặt, số còn lại gửi ngân hàng
• Quốc hữu hóa ngân hàng, nhà máy, kho vận
• Tịch thu tài sản tư sản lớn

Biện pháp này nhằm:
• Triệt tiêu khả năng đầu cơ
• Kiểm soát tiền tệ
• Thiết lập kinh tế kế hoạch hóa
• Xóa bỏ quyền sở hữu tư nhân tư liệu sản xuất`,
    images: [
      { 
        type: 'image', 
        src: 'https://cdnimg.vietnamplus.vn/uploaded/fsmsr/2020_09_21/doitien_1975_1.jpg', 
        caption: 'Đồng tiền giải phóng sau đổi tiền 1975' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '15-21/11/1975',
    title: 'Hội nghị Hiệp thương thống nhất Tổ quốc',
    content: `Hội nghị tại Dinh Độc Lập giữa hai đoàn đại biểu:
• Miền Bắc: Ông Trường Chinh - Trưởng đoàn
• Miền Nam: Ông Phạm Hùng - Trưởng đoàn

Quyết định quan trọng:
• Tổ chức Tổng tuyển cử bầu Quốc hội chung
• Thống nhất tên nước, quốc kỳ, quốc ca
• Xác định thủ đô là Hà Nội
• Tiến thẳng lên CNXH không qua TBCN

Đây là bước chuẩn bị pháp lý cho sự ra đời nước CHXHCN Việt Nam.`,
    images: [
      { 
        type: 'image', 
        src: 'https://baoquocte.vn/stores/news_dataimages/linhanh/042024/15/16/hoi-nghi-hiep-thuong-thong-nhat-to-quoc-30-11-1975.jpg', 
        caption: 'Hội nghị Hiệp thương thống nhất Tổ quốc' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'LQUXuQ6Zd9w', 
        caption: 'Tư liệu Hội nghị Hiệp thương' 
      }
    ],
    music: []
  },
  {
    date: '02/07/1976',
    title: 'Non Sông Thu Về Một Mối',
    content: `Kỳ họp thứ nhất Quốc hội khóa VI quyết định:
• Tên nước: Cộng hòa Xã hội chủ nghĩa Việt Nam
• Quốc kỳ: Cờ đỏ sao vàng
• Quốc ca: Tiến Quân Ca
• Thủ đô: Hà Nội
• Đổi tên Sài Gòn - Gia Định thành TP.HCM

Đánh dấu sự thống nhất hoàn toàn về mặt nhà nước, tạo nền tảng pháp lý vững chắc cho xây dựng đất nước sau chiến tranh.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2024/07/02/2-7-1976-quoc-hoi-khoa-vii.jpg', 
        caption: 'Kỳ họp Quốc hội thống nhất đất nước' 
      }
    ],
    videos: [],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Vlq4TUsXbQ7h', 
        caption: 'Mùa Xuân Trên Thành Phố Hồ Chí Minh', 
        author: 'Xuân Hồng' 
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1975() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1975.flatMap(event => event.videos.filter(v => v.src).map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  
  const allMusic = DATA_1975.flatMap(event => event.music.filter(m => m.src).map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/20 to-yellow-900/20 p-8 border border-amber-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-yellow-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-700 tracking-tighter">
                1975 - Đại Thắng Mùa Xuân
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Từ Chiến dịch Tây Nguyên đến Thống nhất đất nước
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-1 shadow-sm">
        <div className="flex flex-wrap gap-1">
          <TabBtn 
            isActive={activeTab === 'info'} 
            onClick={() => setActiveTab('info')} 
            label="Sự Kiện Lịch Sử" 
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
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-yellow-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-800 text-sm font-bold border border-red-200">
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
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-red-600" />
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
                message="Đang cập nhật video tư liệu" 
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">
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
                message="Đang cập nhật bài hát lịch sử" 
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
              className="absolute -top-12 right-0 text-white hover:text-red-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
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

// Component Tab Button
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
          ? 'bg-gradient-to-r from-red-600 to-yellow-600 text-white shadow-lg' 
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
