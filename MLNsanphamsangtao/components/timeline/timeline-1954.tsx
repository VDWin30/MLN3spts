'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon, ChevronRight } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU ---
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

const DATA_1954: TimelineEvent[] = [
  {
    date: '1954 - 1957',
    title: '1. Bối cảnh lịch sử và sự xác lập con đường quá độ',
    content: `Sau chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu", Hiệp định Giơnevơ năm 1954 về Đông Dương đã được ký kết, đánh dấu một bước ngoặt quyết định trong tiến trình cách mạng Việt Nam.

Với các điều khoản của hiệp định, nước Việt Nam tạm thời bị chia cắt thành hai miền qua vĩ tuyến 17, với hai chế độ chính trị khác nhau. Miền Bắc hoàn toàn được giải phóng, tạo điều kiện cho Đảng Lao động Việt Nam triển khai những bước đi đầu tiên của thời kỳ quá độ lên chủ nghĩa xã hội.`,
    images: [
      { type: 'image', src: 'https://file3.qdnd.vn/data/images/0/2024/05/08/upload_2072/dien%20bien%20phu%201954.jpg', caption: 'Bộ đội tiến về tiếp quản Thủ đô (10/10/1954)' },
      { type: 'image', src: 'https://www.nxbctqg.org.vn/img_data/images/HiepdinhGionevo.jpg', caption: 'Hiệp định Giơnevơ' }
    ],
    videos: [
      { type: 'video', src: 'rHB7aQG72po', caption: 'Phim tài liệu - Giải phóng Thủ đô 10/10/1954 [GLS số 16]' }
    ],
    music: [
      { type: 'audio', src: '/music/tien-ve-ha-noi.mp3', caption: 'Tiến Về Hà Nội', author: 'Văn Cao' }
    ]
  },
  {
    date: '10-10-1954',
    title: '1.1. Tiếp quản Thủ đô và củng cố chính quyền cách mạng',
    content: `Sự kiện ngày 10-10-1954, khi bộ đội Việt Nam tiến vào tiếp quản Thủ đô Hà Nội trong không khí hào hùng, đã mở đầu cho công cuộc xây dựng cuộc sống mới. Quá trình này hoàn tất khi toán lính Pháp cuối cùng rút khỏi đảo Cát Bà vào ngày 16-5-1955, đánh dấu việc miền Bắc sạch bóng quân xâm lược. Ngay sau đó, nhiệm vụ chính trị cấp thiết là củng cố chính quyền và ổn định đời sống nhân dân.

Về mặt tổ chức bộ máy, Nhà nước đã thực hiện những điều chỉnh lớn để phù hợp với yêu cầu quản lý kinh tế và xã hội trong thời kỳ mới. Tại kỳ họp thứ 5 Quốc hội khóa I (tháng 9-1955), hệ thống lãnh đạo cấp cao được kiện toàn với việc bầu Cụ Tôn Đức Thắng làm Trưởng ban Thường trực Quốc hội, ông Phạm Văn Đồng giữ chức Thủ tướng, và các ông Phan Kế Toại, Võ Nguyên Giáp giữ chức Phó Thủ tướng.`,
    images: [
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/vi/7/73/Tonducthang.jpg', caption: 'Tôn Đức Thắng' },
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg/500px-Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg', caption: 'Phạm Văn Đồng' },
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Phan_K%E1%BA%BF_To%E1%BA%A1i%2C_Souverains_et_notabilites_d%27Indochine_%28cropped%29.jpg/330px-Phan_K%E1%BA%BF_To%E1%BA%A1i%2C_Souverains_et_notabilites_d%27Indochine_%28cropped%29.jpg', caption: 'Ông Phan Kế Toại' },
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mr._Vo_Nguyen_Giap.jpg/500px-Mr._Vo_Nguyen_Giap.jpg', caption: 'Ông Võ Nguyên Giáp' }
    ],
    videos: [],
    music: []
  },
  {
    date: '7-1954',
    title: '1.2. Cải cách ruộng đất',
    content: `Nhiệm vụ trọng tâm và triệt để nhất trong giai đoạn 1954 – 1956 là hoàn thành cải cách ruộng đất để thực hiện mục tiêu "Người cày có ruộng", xóa bỏ tàn dư phong kiến đã tồn tại hàng thế kỷ.

Về mặt tổ chức bộ máy, Nhà nước đã thực hiện những điều chỉnh lớn để phù hợp với yêu cầu quản lý kinh tế và xã hội trong thời kỳ mới. Tại kỳ họp thứ 5 Quốc hội khóa I (tháng 9-1955), hệ thống lãnh đạo cấp cao được kiện toàn với việc bầu Cụ Tôn Đức Thắng làm Trưởng ban Thường trực Quốc hội, ông Phạm Văn Đồng giữ chức Thủ tướng, và các ông Phan Kế Toại, Võ Nguyên Giáp giữ chức Phó Thủ tướng.`,
    images: [
      { type: 'image', src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUqmKxDcoByDdzzd1_D_lA2yz1OJ9rp5BL06Q647LHwySqThyphenhyphenGial34r2wXl2_85AhTpczl4a0hp5J7OipMfd5YLrVB7ZOUJ_2_rYZ5rhVCFC4vX96HtfNqpBZUWan1yXpzeOi0Cj3EdTz/s1600/6f6r8z.jpg', caption: 'Chia ruộng' },
      { type: 'image', src: 'https://thinhvuongvietnam.com/Content/UploadFiles/EditorFiles/images/2023/Quy4/images1165016109122023112156.jpg', caption: 'Cắm thẻ nhận ruộng trong cải cách ruộng đất' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: '/music/bai-ca-lua.mp3', caption: 'Bài Ca Lúa', author: 'Dân ca' }
    ]
  },
  {
    date: '1955 – 1957',
    title: '1.3. Khôi phục kinh tế và ổn định xã hội',
    content: `Bên cạnh cải cách ruộng đất, Chính phủ đã ban hành "Tám chính sách khuyến khích sản xuất nông nghiệp" và triển khai các đợt phát động thi đua tiết kiệm để khôi phục các cơ sở hạ tầng bị tàn phá trong chiến tranh. Việc ban hành các chính sách về dân tộc (thành lập Khu tự trị Thái - Mèo năm 1955) và tôn giáo (bảo đảm tự do tín ngưỡng) đã góp phần tạo ra một môi trường chính trị ổn định, thu hút sự đóng góp của mọi tầng lớp nhân dân vào công cuộc kiến thiết.`,
    images: [
      { type: 'image', src: 'https://baotangsonla.vn/data/2/images/tin-tuc/z4351850391454_899a29d6fe8350dabee6e88e391b4acb.jpg', caption: 'Kỷ niệm 5 năm chiến thắng Điện Biên Phủ' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: '/music/bai-ca-lua.mp3', caption: 'Bài Ca Lúa', author: 'Dân ca' }
    ]
  },
  {
    date: '1958 - 1960',
    title: '2. Chuyển dịch sang mô hình xã hội chủ nghĩa và Kế hoạch 3 năm (1958 - 1960)',
    content: `Mục tiêu cốt lõi của giai đoạn này là đưa nông dân vào các hợp tác xã, cải tạo các thành phần kinh tế tư nhân và thiết lập sự thống trị của thành phần kinh tế quốc doanh.

2.1 Hợp tác hóa và Công tư hợp doanh
Việc xây dựng các hợp tác xã (HTX) được coi là con đường tất yếu để đưa nông nghiệp từ sản xuất nhỏ, lạc hậu lên sản xuất lớn xã hội chủ nghĩa. Tính đến năm 1960, phần lớn hộ nông dân ở miền Bắc đã tham gia vào các HTX nông nghiệp bậc thấp. Đồng thời, Nhà nước thực hiện cải tạo đối với thủ công nghiệp và công thương nghiệp tư bản tư doanh bằng hình thức công tư hợp doanh, đưa các nhà tư sản vào guồng máy sản xuất chung dưới sự quản lý của Nhà nước`,
    images: [
      { type: 'image', src: 'https://thinhvuongvietnam.com/Content/UploadFiles/Thumb/2023/Quy4/redsvn-ha-noi-sau-1954-12-9251-155626924527102023101530.jpg', caption: 'Phong trào hợp tác hóa nông nghiệp ở miền Bắc (1958-1960)' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: '/music/tinh-ca-tay-bac.mp3', caption: 'Tình Ca Tây Bắc', author: 'Bùi Đức Hạnh' }
    ]
  },
  {
    date: '1961 - 1965',
    title: '3. Đường lối chiến lược từ Đại hội III và Kế hoạch 5 năm lần thứ nhất (1961 – 1965)',
    content: `Tháng 9-1960, Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam đã họp tại Hà Nội, xác lập một chiến lược cách mạng song song: xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh giải phóng dân tộc ở miền Nam. Đại hội khẳng định miền Bắc là "hậu phương lớn", có vai trò quyết định nhất đối với sự nghiệp thống nhất đất nước.

3.1 Ưu tiên phát triển công nghiệp nặng và cơ sở hạ tầng
Kế hoạch 5 năm lần thứ nhất (1961 - 1965) đặt trọng tâm vào việc xây dựng nền tảng vật chất - kỹ thuật cho chủ nghĩa xã hội. 
Khu gang thép Thái Nguyên. Được thành lập theo Quyết định ngày 04-6-1959, đây là công trình trọng điểm nhằm thực hiện Nghị quyết Trung ương 14 khóa II, biểu tượng cho "ngọn lửa thép gang" của miền Bắc xã hội chủ nghĩa. Sự hình thành các khu công nghiệp lớn tại Hà Nội, Hải Phòng, Việt Trì và Thái Nguyên đã tạo ra một diện mạo mới cho nền kinh tế, cung cấp tư liệu sản xuất cho nông nghiệp và vật chất cho tiền tuyến.`,
    images: [
      { type: 'image', src: 'https://thainguyen.dcs.vn/uploads/hoat-dong-cua-cang-dang-bo/2024_06/image-20240604134132-2.png', caption: 'Khu công nghiệp Gang thép Thái Nguyên - Những người đầu tiên góp phần xây nên Khu Gang thép đầu tiên của đất nước' }
    ],
    videos: [
      { type: 'video', src: 'LabfX3in-UY', caption: 'ĐẠI HỘI ĐẢNG LẦN THỨ III' },
      { type: 'video', src: '80YzScAW3Cw', caption: 'Những người đầu tiên góp phần xây nên Khu Gang thép đầu tiên của đất nước' }
    ],
    music: [
      { type: 'audio', src: '/music/bai-ca-xay-dung.mp3', caption: 'Bài Ca Xây Dựng', author: 'Hoàng Vân' }
    ]
  },
  {
    date: '1961 - 1965',
    title: '3.2 Các phong trào thi đua biểu tượng',
    content: `Điểm đặc biệt của giai đoạn 1954 – 1965 là sự bùng nổ của các phong trào thi đua yêu nước, tạo nên sức mạnh tinh thần to lớn để bù đắp cho sự thiếu hụt về vật chất. 

Gió Đại Phong (Nông nghiệp): Xuất phát từ Hợp tác xã Đại Phong tại Quảng Bình dưới sự chỉ đạo của Đại tướng Nguyễn Chí Thanh. Với điều kiện đất chiêm trũng, nhiễm mặn thường xuyên, HTX Đại Phong đã vươn lên nhờ cải tiến quản lý và kỹ thuật, trở thành lá cờ đầu với mục tiêu tăng năng suất và số ngày công lao động. 

Sóng Duyên Hải (Công nghiệp): Bắt đầu từ Nhà máy Cơ khí Duyên Hải (Hải Phòng) vào năm 1960. Phong trào tập trung vào phát huy sáng kiến, phá vỡ các định mức lao động cũ để tăng năng suất từ 50% đến hơn 600%.

Cờ Ba Nhất (Quân đội): Khởi nguồn từ Trung đoàn Pháo binh 68 thuộc Sư đoàn 304, được tuyên dương với ba tiêu chí: " (Bắn giỏi nhất, nhiều người tham gia nhất, thành tích đều nhất)" trong huấn luyện và sẵn sàng chiến đấu.   

Tiếng Trống Bắc Lý (Giáo dục): Từ trường THCS Bắc Lý (Hà Nam), phong trào "Dạy thật tốt, học thật tốt" đã lan tỏa triết lý giáo dục gắn liền với lao động sản xuất và thực tiễn đời sống. 

Những phong trào này không chỉ là những điển hình tiên tiến mà còn là biểu tượng của sự đoàn kết Công-Nông-Binh dưới sự lãnh đạo của Đảng, được Chủ tịch Hồ Chí Minh biểu dương như những tấm gương sáng của thời đại.`,
    images: [
      { type: 'image', src: 'https://file3.qdnd.vn/data/images/0/2023/12/30/upload_1021/30.jpg?dpi=150&quality=100&w=870', caption: 'Đại tướng Nguyễn Chí Thanh cấy lúa cùng bà con xã viên Hợp tác xã Chiến Thắng (1-1962)' },
      { type: 'image', src: 'https://file3.qdnd.vn/data/images/0/2023/12/30/upload_1021/dai%20tuong%20nong%20dan%202.jpg?dpi=150&quality=100&w=870', caption: 'Đại tướng Nguyễn Chí Thanh thăm trại chăn nuôi bò sữa' },
      { type: 'image', src: 'https://media.vov.vn/sites/default/files/styles/large/public/2025-04/quan_va_dan_tp_hai_phong_chuan_bi_chien_dau_chong_cuoc_tap_kich_duong_khong_cua_de_quoc_my_cuoi_nam_1972_anh_tu_lieu.jpg', caption: 'Quân và dân TP Hải Phòng (Quê hương Sóng Duyên Hải)' },
      { type: 'image', src: 'https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785100c961dd66b3261bcca1b5c657b6240393be9827672d40f22c951d39e7aa076/kien_an.jpg', caption: 'Tiếng trống Bắc Lý - Thông điệp lịch sử' }
    ],
    videos: [
      { type: 'video', src: 'e25QJiVJq6c', caption: 'Gió Đại Phong: Động lực hùng mạnh thúc đẩy nông nghiệp Việt | Đảng với Dân' },
      { type: 'video', src: 'fgOchEORDgM', caption: 'Thông điệp lịch sử. Tiếng trống Bắc Lý - VNEWS' }
    ],
    music: [
      { type: 'audio', src: '/music/quang-binh-que-ta-oi.mp3', caption: 'Quảng Bình Quê Ta Ơi', author: 'Hoàng Vân' }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1954() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1954.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_1954.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-900/20 to-orange-900/20 p-8 border border-amber-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-700 to-orange-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-700 tracking-tighter">
                1954 - 1965
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Miền Bắc bắt đầu quá độ lên chủ nghĩa xã hội
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
            count={DATA_1954.length}
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
            {DATA_1954.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-orange-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-800 text-sm font-bold border border-amber-200">
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
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-amber-600" />
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">
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
              className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
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
          ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg' 
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
