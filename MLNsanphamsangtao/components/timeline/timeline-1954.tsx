'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar } from 'lucide-react';

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
       // Chỉ lấy ID video (phần sau v=)
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
       { type: 'image', src: 'https://thainguyen.dcs.vn/uploads/hoat-dong-cua-cac-dang-bo/2024_06/image-20240604134132-2.png', caption: 'Khu công nghiệp Gang thép Thái Nguyên - Những người đầu tiên góp phần xây nên Khu Gang thép đầu tiên của đất nước' }
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

  // Helper: Gom tất cả media lại
  const allVideos = DATA_1954.flatMap(event => event.videos.map(v => ({ ...v, eventDate: event.date })));
  const allMusic = DATA_1954.flatMap(event => event.music.map(m => ({ ...m, eventDate: event.date })));

  return (
    <div className="space-y-6">
      
      {/* --- HEADER NĂM & TAB NAVIGATION --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-4">
        <div>
          <h2 className="text-4xl font-black text-primary tracking-tight">1954 - 1965</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Miền Bắc bắt đầu quá độ lên chủ nghĩa xã hội        
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-muted/50 rounded-lg self-start md:self-auto">
          <TabBtn 
            isActive={activeTab === 'info'} 
            onClick={() => setActiveTab('info')} 
            label="Thông tin" 
            icon={<FileText className="w-4 h-4" />} 
          />
          <TabBtn 
            isActive={activeTab === 'video'} 
            onClick={() => setActiveTab('video')} 
            label="Video" 
            icon={<Film className="w-4 h-4" />} 
          />
          <TabBtn 
            isActive={activeTab === 'music'} 
            onClick={() => setActiveTab('music')} 
            label="Âm nhạc" 
            icon={<Music className="w-4 h-4" />} 
          />
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="min-h-[400px] animate-in fade-in slide-in-from-bottom-2 duration-500">
        
        {/* 1. TAB THÔNG TIN */}
        {activeTab === 'info' && (
          <div className="space-y-8 pl-2">
            {DATA_1954.map((event, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-primary/20 last:border-0 pb-10 last:pb-0">
                {/* Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                {/* Date Badge */}
                <div className="mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary">
                      <Calendar className="w-3 h-3" /> {event.date}
                    </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                {/* QUAN TRỌNG: Thêm whitespace-pre-line để hiển thị xuống dòng */}
                <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                    {event.content}
                </p>

                {/* Image Gallery */}
                {event.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {event.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="group relative rounded-xl overflow-hidden border bg-muted aspect-[4/3]">
                        <img 
                          src={img.src} 
                          alt={img.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-xs backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform">
                          {img.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 2. TAB VIDEO */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {allVideos.length > 0 ? allVideos.map((vid, idx) => (
              <div key={idx} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-black relative">
                  <iframe
                    width="100%" height="100%"
                    src={`https://www.youtube.com/embed/${vid.src}`}
                    title={vid.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-foreground line-clamp-1">{vid.caption}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Sự kiện: {vid.eventDate}</p>
                </div>
              </div>
            )) : (
              <EmptyState message="Chưa có video tư liệu nào cho giai đoạn này." />
            )}
          </div>
        )}

        {/* 3. TAB BÀI HÁT */}
        {activeTab === 'music' && (
          <div className="space-y-3">
             {allMusic.length > 0 ? allMusic.map((song, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-accent/5 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                  <Music className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground truncate">{song.caption}</h4>
                  <p className="text-sm text-muted-foreground">Sáng tác: {song.author} • {song.eventDate}</p>
                </div>

                <div className="w-full max-w-[200px] md:max-w-[300px]">
                  <audio controls className="w-full h-8">
                    <source src={song.src} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            )) : (
              <EmptyState message="Chưa có bài hát nào cho giai đoạn này." />
            )}
          </div>
        )}

      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function TabBtn({ isActive, onClick, label, icon }: { isActive: boolean, onClick: () => void, label: string, icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
        isActive 
          ? 'bg-background text-primary shadow-sm ring-1 ring-border' 
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground bg-muted/20 rounded-xl border border-dashed">
      <div className="w-12 h-12 mb-3 opacity-20">
        <FileText className="w-full h-full" />
      </div>
      <p>{message}</p>
    </div>
  );
}
