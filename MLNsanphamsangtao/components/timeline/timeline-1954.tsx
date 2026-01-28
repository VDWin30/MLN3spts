'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 1954 ---
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
    date: '1954 - 1955',
    title: '1. Bối cảnh lịch sử và sự xác lập con đường quá độ',
    // Giữ nguyên văn đoạn 1
    content: 'Sau chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu", Hiệp định Giơnevơ năm 1954 về Đông Dương đã được ký kết, đánh dấu một bước ngoặt quyết định trong tiến trình cách mạng Việt Nam.\n\nVới các điều khoản của hiệp định, nước Việt Nam tạm thời bị chia cắt thành hai miền qua vĩ tuyến 17, với hai chế độ chính trị khác nhau. Miền Bắc hoàn toàn được giải phóng, tạo điều kiện cho Đảng Lao động Việt Nam triển khai những bước đi đầu tiên của thời kỳ quá độ lên chủ nghĩa xã hội.\n\nSự kiện ngày 10-10-1954, khi bộ đội Việt Nam tiến vào tiếp quản Thủ đô Hà Nội trong không khí hào hùng, đã mở đầu cho công cuộc xây dựng cuộc sống mới. Quá trình này hoàn tất khi toán lính Pháp cuối cùng rút khỏi đảo Cát Bà vào ngày 16-5-1955, đánh dấu việc miền Bắc sạch bóng quân xâm lược. Ngay sau đó, nhiệm vụ chính trị cấp thiết là củng cố chính quyền và ổn định đời sống nhân dân.\n\nVề mặt tổ chức bộ máy, Nhà nước đã thực hiện những điều chỉnh lớn để phù hợp với yêu cầu quản lý kinh tế và xã hội trong thời kỳ mới. Tại kỳ họp thứ 5 Quốc hội khóa I (tháng 9-1955), hệ thống lãnh đạo cấp cao được kiện toàn với việc bầu Cụ Tôn Đức Thắng làm Trưởng ban Thường trực Quốc hội, ông Phạm Văn Đồng giữ chức Thủ tướng, và các ông Phan Kế Toại, Võ Nguyên Giáp giữ chức Phó Thủ tướng.',
    images: [
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Hanoi_1954_liberation.jpg', caption: 'Bộ đội tiến về tiếp quản Thủ đô (10/10/1954)' },
      { type: 'image', src: 'https://file1.dangcongsan.vn/data/0/images/2021/08/20/upload/671/ton-duc-thang-1.jpg', caption: 'Chủ tịch Tôn Đức Thắng và Hồ Chủ tịch' }
    ],
    videos: [
       { type: 'video', src: 'J-6d7x8gXkY', caption: 'Phim tư liệu: Hà Nội ngày tiếp quản' }
    ],
    music: [
      { type: 'audio', src: '/music/tien-ve-ha-noi.mp3', caption: 'Tiến Về Hà Nội', author: 'Văn Cao' }
    ]
  },
  {
    date: '1954 - 1957',
    title: '1.2 Cải cách ruộng đất & 1.3 Khôi phục kinh tế',
    // Giữ nguyên văn đoạn 1.2 và 1.3
    content: 'Nhiệm vụ trọng tâm và triệt để nhất trong giai đoạn 1954 – 1956 là hoàn thành cải cách ruộng đất để thực hiện mục tiêu "Người cày có ruộng", xóa bỏ tàn dư phong kiến đã tồn tại hàng thế kỷ.\n\nBên cạnh cải cách ruộng đất, Chính phủ đã ban hành "Tám chính sách khuyến khích sản xuất nông nghiệp" và triển khai các đợt phát động thi đua tiết kiệm để khôi phục các cơ sở hạ tầng bị tàn phá trong chiến tranh. Việc ban hành các chính sách về dân tộc (thành lập Khu tự trị Thái - Mèo năm 1955) và tôn giáo (bảo đảm tự do tín ngưỡng) đã góp phần tạo ra một môi trường chính trị ổn định, thu hút sự đóng góp của mọi tầng lớp nhân dân vào công cuộc kiến thiết.',
    images: [
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cai_cach_ruong_dat.jpg/800px-Cai_cach_ruong_dat.jpg', caption: 'Nông dân được chia ruộng' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: '/music/bai-ca-lua.mp3', caption: 'Bài Ca Lúa', author: 'Dân ca' }
    ]
  },
  {
    date: '1958 - 1960',
    title: '2. Chuyển dịch sang mô hình XHCN (Kế hoạch 3 năm)',
    // Giữ nguyên văn đoạn 2 và 2.1
    content: 'Mục tiêu cốt lõi của giai đoạn này là đưa nông dân vào các hợp tác xã, cải tạo các thành phần kinh tế tư nhân và thiết lập sự thống trị của thành phần kinh tế quốc doanh.\n\nViệc xây dựng các hợp tác xã (HTX) được coi là con đường tất yếu để đưa nông nghiệp từ sản xuất nhỏ, lạc hậu lên sản xuất lớn xã hội chủ nghĩa. Tính đến năm 1960, phần lớn hộ nông dân ở miền Bắc đã tham gia vào các HTX nông nghiệp bậc thấp. Đồng thời, Nhà nước thực hiện cải tạo đối với thủ công nghiệp và công thương nghiệp tư bản tư doanh bằng hình thức công tư hợp doanh, đưa các nhà tư sản vào guồng máy sản xuất chung dưới sự quản lý của Nhà nước.',
    images: [
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Hop_tac_xa_nong_nghiep_1960.jpg', caption: 'Nông dân lao động trên cánh đồng Hợp tác xã' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: '/music/tinh-ca-tay-bac.mp3', caption: 'Tình Ca Tây Bắc', author: 'Bùi Đức Hạnh' }
    ]
  },
  {
    date: '1961 - 1965',
    title: '3. Đại hội III và Kế hoạch 5 năm lần thứ nhất',
    // Giữ nguyên văn đoạn 3 và 3.1
    content: 'Tháng 9-1960, Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam đã họp tại Hà Nội, xác lập một chiến lược cách mạng song song: xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh giải phóng dân tộc ở miền Nam. Đại hội khẳng định miền Bắc là "hậu phương lớn", có vai trò quyết định nhất đối với sự nghiệp thống nhất đất nước.\n\nKế hoạch 5 năm lần thứ nhất (1961 - 1965) đặt trọng tâm vào việc xây dựng nền tảng vật chất - kỹ thuật cho chủ nghĩa xã hội.\n\nKhu gang thép Thái Nguyên: Được thành lập theo Quyết định ngày 04-6-1959, đây là công trình trọng điểm nhằm thực hiện Nghị quyết Trung ương 14 khóa II, biểu tượng cho "ngọn lửa thép gang" của miền Bắc xã hội chủ nghĩa. Sự hình thành các khu công nghiệp lớn tại Hà Nội, Hải Phòng, Việt Trì và Thái Nguyên đã tạo ra một diện mạo mới cho nền kinh tế, cung cấp tư liệu sản xuất cho nông nghiệp và vật chất cho tiền tuyến.',
    images: [
       { type: 'image', src: 'https://thainguyentv.vn/upload/2019/12/12/gangthep.jpg', caption: 'Khu Gang thép Thái Nguyên' },
       { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/vi/6/60/Dai_hoi_Dang_III.jpg', caption: 'Đại hội Đại biểu toàn quốc lần thứ III' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: '/music/bai-ca-xay-dung.mp3', caption: 'Bài Ca Xây Dựng', author: 'Hoàng Vân' }
    ]
  },
  {
    date: '1961 - 1965',
    title: '3.2 Các phong trào thi đua biểu tượng',
    // Giữ nguyên văn đoạn 3.2
    content: 'Điểm đặc biệt của giai đoạn 1954 – 1965 là sự bùng nổ của các phong trào thi đua yêu nước, tạo nên sức mạnh tinh thần to lớn để bù đắp cho sự thiếu hụt về vật chất.\n\nGió Đại Phong (Nông nghiệp): Xuất phát từ Hợp tác xã Đại Phong tại Quảng Bình dưới sự chỉ đạo của Đại tướng Nguyễn Chí Thanh. Với điều kiện đất chiêm trũng, nhiễm mặn thường xuyên, HTX Đại Phong đã vươn lên nhờ cải tiến quản lý và kỹ thuật, trở thành lá cờ đầu với mục tiêu tăng năng suất và số ngày công lao động.\n\nSóng Duyên Hải (Công nghiệp): Bắt đầu từ Nhà máy Cơ khí Duyên Hải (Hải Phòng) vào năm 1960. Phong trào tập trung vào phát huy sáng kiến, phá vỡ các định mức lao động cũ để tăng năng suất từ 50% đến hơn 600%.\n\nCờ Ba Nhất (Quân đội): Khởi nguồn từ Trung đoàn Pháo binh 68 thuộc Sư đoàn 304, được tuyên dương với ba tiêu chí: "Bắn giỏi nhất, nhiều người tham gia nhất, thành tích đều nhất" trong huấn luyện và sẵn sàng chiến đấu.\n\nTiếng Trống Bắc Lý (Giáo dục): Từ trường THCS Bắc Lý (Hà Nam), phong trào "Dạy thật tốt, học thật tốt" đã lan tỏa triết lý giáo dục gắn liền với lao động sản xuất và thực tiễn đời sống.\n\nNhững phong trào này không chỉ là những điển hình tiên tiến mà còn là biểu tượng của sự đoàn kết Công-Nông-Binh dưới sự lãnh đạo của Đảng, được Chủ tịch Hồ Chí Minh biểu dương như những tấm gương sáng của thời đại.',
    images: [
      { type: 'image', src: 'https://baohanam.com.vn/Uploads/2020/11/20/22/bacly.jpg', caption: 'Tiếng trống Bắc Lý' },
      { type: 'image', src: 'https://image.bnews.vn/MediaUpload/Org/2020/05/18/nha-may-co-khi-duyen-hai.jpg', caption: 'Nhà máy cơ khí Duyên Hải' }
    ],
    videos: [],
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
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-4">
        <div>
          <h2 className="text-4xl font-black text-primary tracking-tight">1954</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Chiến Thắng Điện Biên Phủ - Hiệp Định Genève
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
                <p className="text-muted-foreground leading-relaxed mb-4">{event.content}</p>

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

// --- SUB COMPONENTS (Copy để component chạy độc lập) ---

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
