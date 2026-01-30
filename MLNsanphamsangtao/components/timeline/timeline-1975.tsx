'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon } from 'lucide-react';

// --- CẤU TRÚC DỮ LIỆU 1975 CHÍNH XÁC ---
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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/qdILymMBZ1p6', 
        caption: 'Bước Chân Trên Dãy Trường Sơn', 
        author: 'Vũ Trọng Hối' 
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
    videos: [
      { 
        type: 'video', 
        src: 'XVIDEO_ID_HUẾ', 
        caption: 'Giải phóng Huế 1975' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/wvJQ1NWAvAh5', 
        caption: 'Huế - Thành Phố Của Chúng Ta', 
        author: 'Trương Tuyết Mai' 
      }
    ]
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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/xxx', 
        caption: 'Đà Nẵng Ấn Tượng', 
        author: 'Minh Vy' 
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
    videos: [],
    music: []
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
    videos: [],
    music: []
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
    ],
    music: []
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
    videos: [],
    music: []
  },
  {
    date: '15/05/1975',
    title: 'Các đảo thuộc quần đảo Trường Sa được giải phóng',
    content: `Từ 14-29/4/1975: Hải quân nhân dân Việt Nam tiến hành giải phóng các đảo thuộc quần đảo Trường Sa.

15/05/1975: Chính thức tuyên bố giải phóng hoàn toàn các đảo:
- Song Tử Tây
- Sơn Ca
- Nam Yết
- Sinh Tồn
- Trường Sa Lớn
- An Bang

Khẳng định chủ quyền của Việt Nam tại quần đảo Trường Sa.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2024_04_30/truongsa_1975_1_kbxg.jpg', 
        caption: 'Cờ Việt Nam tung bay tại Trường Sa 1975' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '06/06/1975',
    title: 'Kỳ họp đầu tiên của Quốc hội khóa V',
    content: `Quốc hội khóa V (1975-1976) - Quốc hội của thời kỳ sau giải phóng miền Nam, có nhiệm vụ quan trọng:
- Ổn định tình hình sau chiến tranh
- Chuẩn bị cho thống nhất đất nước về mặt nhà nước
- Thông qua các chính sách khôi phục kinh tế

Đây là Quốc hội cuối cùng của nước Việt Nam Dân chủ Cộng hòa trước khi thống nhất.`,
    images: [
      { 
        type: 'image', 
        src: 'https://quochoi.vn/UploadFolder/ImagesFolder/6318.JPG', 
        caption: 'Kỳ họp Quốc hội khóa V năm 1975' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '22/09/1975',
    title: 'Thực hiện đổi tiền tại miền Nam',
    content: `Thực hiện chủ trương thống nhất tiền tệ trong cả nước:
- Phát hành đồng tiền mới của Ngân hàng Nhà nước Việt Nam
- Thu đổi đồng tiền cũ của chính quyền Sài Gòn
- Tỷ lệ đổi: 500 đồng tiền cũ = 1 đồng tiền mới

Biện pháp này nhằm:
- Ổn định tiền tệ sau giải phóng
- Thống nhất hệ thống tiền tệ trong cả nước
- Kiểm soát lạm phát
- Xóa bỏ tàn dư kinh tế cũ`,
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
    title: 'Hội nghị Hiệp thương chính trị thống nhất Tổ quốc',
    content: `Hội nghị giữa Đoàn đại biểu miền Bắc và Đoàn đại biểu miền Nam tại Dinh Độc Lập (Sài Gòn).

Thống nhất các vấn đề quan trọng:
1. Tổ chức Tổng tuyển cử bầu Quốc hội chung
2. Thống nhất tên nước, quốc kỳ, quốc ca
3. Xác định thủ đô là Hà Nội
4. Thành lập Ủy ban Dự thảo Hiến pháp

Quyết định: Tổ chức Tổng tuyển cử trong cả nước vào Quý II năm 1976.`,
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
        src: 'vb-WsyjoW50', 
        caption: 'Hội nghị Hiệp thương 1975' 
      }
    ],
    music: []
  },
  {
    date: '25/12/1975',
    title: 'Chiến dịch phản công biên giới Tây Nam',
    content: `Trước các hành động khiêu khích và xâm lấn biên giới của chế độ diệt chủng Pol Pot, Quân đội Nhân dân Việt Nam mở chiến dịch phản công bảo vệ biên giới Tây Nam.

Chiến dịch này nhằm:
- Bảo vệ chủ quyền lãnh thổ
- Bảo vệ tính mạng, tài sản của nhân dân vùng biên giới
- Đập tan các cuộc tấn công xâm lược

Đây là chiến dịch quân sự đầu tiên sau ngày giải phóng miền Nam.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/uploaded/gnnlexby/2023_12_25/bien_gioi_tay_nam_1975_1_qkjy.jpg', 
        caption: 'Bộ đội Việt Nam bảo vệ biên giới Tây Nam 1975' 
      }
    ],
    videos: [],
    music: []
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1975() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1975.flatMap(event => event.videos.filter(v => v.src && v.src !== 'XVIDEO_ID_HUẾ').map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  
  const allMusic = DATA_1975.flatMap(event => event.music.filter(m => m.src && !m.src.includes('xxx')).map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-800/20 to-yellow-600/20 p-8 border border-amber-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-600 tracking-tighter">
                NĂM 1975
              </h2>
              <p className="text-2xl font-bold text-red-800 mt-2">
                Đại Thắng Mùa Xuân - Giải Phóng Miền Nam
              </p>
              <p className="text-lg font-semibold text-gray-700 mt-1">
                Thống Nhất Đất Nước
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <StatCard number="14" label="Sự kiện lịch sử" />
            <StatCard number="11" label="Hình ảnh tư liệu" />
            <StatCard number="4" label="Video tư liệu" />
            <StatCard number="6" label="Bài hát lịch sử" />
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
                
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-red-600 border-2 border-white shadow-lg" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100 bg-gradient-to-r from-red-50 to-yellow-50 rounded-t-xl">
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-bold border border-red-200 shadow-sm">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">{event.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
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
                                    e.currentTarget.src = "https://placehold.co/600x400/ef4444/ffffff?text=Ảnh+Tư+Liệu&font=serif";
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
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-red-700 font-medium">
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
              <div key={idx} className="group bg-white/95 backdrop-blur-sm rounded-xl border border-gray-300 p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  {/* Album Art với số thứ tự */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-red-200">
                      <Music className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold shadow-sm">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 truncate text-lg">{song.caption}</h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      {song.author && (
                        <span className="text-sm text-gray-700 bg-red-50 px-2 py-1 rounded">
                          Sáng tác: {song.author}
                        </span>
                      )}
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        Sự kiện: {song.eventDate}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 truncate">
                      {song.eventTitle}
                    </div>
                  </div>

                  {/* Audio Player */}
                  {song.src && (
                    <div className="w-full max-w-xs">
                      <audio 
                        controls 
                        className="w-full h-10 rounded-lg [&::-webkit-media-controls-panel]:bg-red-50"
                      >
                        <source src={song.src} type="audio/mpeg" />
                        Trình duyệt không hỗ trợ phát audio.
                      </audio>
                    </div>
                  )}
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
              className="absolute -top-12 right-0 text-white hover:text-red-300 transition-colors px-4 py-2 bg-black/50 rounded-lg flex items-center gap-2"
            >
              <span className="text-xl">✕</span> Đóng
            </button>
            <img 
              src={selectedImage} 
              alt="Xem chi tiết" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
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

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
      <div className="text-2xl font-bold text-red-700">{number}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}
