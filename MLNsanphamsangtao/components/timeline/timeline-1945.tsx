'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon } from 'lucide-react';

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

const DATA_1945: TimelineEvent[] = [
  {
    date: '1945',
    title: 'Khái Niệm "Quá Độ Gián Tiếp" Trong Tư Tưởng Hồ Chí Minh',
    content: `Trong lý luận của chủ nghĩa Mác – Lênin và được Hồ Chí Minh vận dụng sáng tạo vào điều kiện Việt Nam, quá độ gián tiếp lên chủ nghĩa xã hội là con đường phát triển từ một nước thuộc địa, nông nghiệp lạc hậu, bỏ qua việc thiết lập chế độ tư bản chủ nghĩa hoàn chỉnh để tiến lên chủ nghĩa xã hội.

"Bỏ qua chế độ tư bản chủ nghĩa" không có nghĩa là phủ nhận hoàn toàn những yếu tố tiến bộ của văn minh tư bản, mà là không xây dựng một nhà nước tư sản và không để quan hệ sản xuất tư bản chủ nghĩa giữ vai trò thống trị trong xã hội. Thay vào đó, dưới sự lãnh đạo của Đảng Cộng sản, đất nước tiến hành cách mạng dân tộc dân chủ nhân dân, từng bước xây dựng nền tảng chính trị, kinh tế và xã hội để phát triển lên chủ nghĩa xã hội.`,
    images: [
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ho_Chi_Minh_reading_declaration_of_independence_of_Vietnam_02.09.1945.jpg/800px-Ho_Chi_Minh_reading_declaration_of_independence_of_Vietnam_02.09.1945.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập' 
      },
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg/1280px-H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh năm 1946' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'o7lwWGfYyAg', 
        caption: 'Toàn cảnh Lễ Tuyên ngôn Độc lập 2/9/1945' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://soundcloud.com/user-665366008/tien-quan-ca?si=530e6cd9bd8c49719ff192268bba1269&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', 
        caption: 'Tiến Quân Ca (Quốc Ca)', 
        author: 'Văn Cao' 
      }
    ]
  },
  {
    date: '02/09/1945',
    title: 'Tuyên Ngôn Độc Lập Và Xác Lập Con Đường Phát Triển Của Dân Tộc',
    content: `Ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa. Văn kiện này không chỉ khẳng định quyền tự do, độc lập của dân tộc Việt Nam mà còn thể hiện tư tưởng nhất quán của Người: độc lập dân tộc phải gắn liền với con đường tiến lên chủ nghĩa xã hội.

Ngay sau khi giành chính quyền, Hồ Chí Minh xác định nhiệm vụ trung tâm là củng cố chính quyền cách mạng, bảo vệ thành quả cách mạng và xây dựng nền tảng cho một xã hội mới. Theo tư tưởng của Người, Việt Nam lựa chọn con đường quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa – phù hợp với đặc điểm là một nước thuộc địa, nông nghiệp lạc hậu.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ho-chi-minh-doc-tuyen-ngon.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ba-dinh-1945.jpg', 
        caption: 'Quảng trường Ba Đình ngày 2/9/1945' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'dQw4w9WgXcQ', 
        caption: 'Toàn cảnh Lễ Tuyên ngôn Độc lập 2/9/1945' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/VEP9VglCDq6T', 
        caption: 'Ba Đình Nắng', 
        author: 'Bùi Công Kỳ' 
      }
    ]
  },
  {
    date: 'Cuối 1945',
    title: 'Giải Quyết "Giặc Đói" Và "Giặc Dốt"',
    content: `Sau khi độc lập, đất nước rơi vào tình trạng khủng hoảng nghiêm trọng. Nạn đói năm 1945 đã làm hơn 2 triệu người chết ở miền Bắc. Trước tình hình đó, Chính phủ phát động phong trào "nhường cơm sẻ áo", kêu gọi mỗi người dân nhịn ăn một bữa để cứu đói đồng bào. Đồng thời, phong trào tăng gia sản xuất được triển khai rộng khắp.

Về giáo dục, ngày 8/9/1945, Chủ tịch Hồ Chí Minh ký sắc lệnh thành lập Nha Bình dân học vụ nhằm xóa nạn mù chữ. Hàng triệu người dân đã tham gia học chữ trong những năm đầu của chính quyền cách mạng. Điều này thể hiện quan điểm của Hồ Chí Minh: xây dựng xã hội mới phải bắt đầu từ nâng cao dân trí, phát huy vai trò làm chủ của nhân dân.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2020-09/nan-doi-1945.jpg', 
        caption: 'Nạn đói năm 1945' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2020/09/07/upload_1597/binh-dan-hoc-vu.jpg', 
        caption: 'Lớp học bình dân học vụ' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'eF5g9hDq8Rc', 
        caption: 'Chống giặc đói, giặc dốt những năm đầu độc lập' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://example.com/muoi-chin-thang-tam.mp3', 
        caption: 'Mười Chín Tháng Tám', 
        author: 'Xuân Oanh' 
      }
    ]
  },
  {
    date: '1946',
    title: 'Tổng Tuyển Cử Và Hiến Pháp Đầu Tiên',
    content: `Ngày 6/1/1946, cuộc Tổng tuyển cử đầu tiên được tổ chức với hơn 90% cử tri đi bầu. Quốc hội khóa I ra đời, đánh dấu bước trưởng thành của Nhà nước dân chủ nhân dân. Cuối năm 1946, Hiến pháp 1946 được thông qua – bản Hiến pháp đầu tiên trong lịch sử Việt Nam.

Hiến pháp 1946 khẳng định các quyền tự do dân chủ cơ bản của nhân dân và nguyên tắc quyền lực thuộc về nhân dân. Đây là bước cụ thể hóa tư tưởng Hồ Chí Minh về một nhà nước của dân, do dân và vì dân – nền tảng chính trị cho quá trình quá độ lên CNXH sau này.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/01/06/tong-tuyen-cu-1946.jpg', 
        caption: 'Cử tri đi bầu trong tổng tuyển cử đầu tiên 6/1/1946' 
      },
      { 
        type: 'image', 
        src: 'https://media.baodautu.vn/Images/chicuong/2021/11/09/hien-phap-1946.jpg', 
        caption: 'Hiến pháp 1946' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'fG6h3iEq9Sd', 
        caption: 'Tổng tuyển cử 1946 - Mốc son của nền dân chủ' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://example.com/ba-dinh-nang.mp3', 
        caption: 'Ba Đình Nắng', 
        author: 'Bùi Công Kỳ' 
      }
    ]
  },
  {
    date: '19/12/1946',
    title: 'Toàn Quốc Kháng Chiến',
    content: `Trước dã tâm xâm lược trở lại của thực dân Pháp, ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến với tinh thần: "Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."

Cuộc kháng chiến chống Pháp bước vào giai đoạn toàn diện, lâu dài. Hồ Chí Minh xác định phương châm kháng chiến là "toàn dân, toàn diện, trường kỳ, tự lực cánh sinh". Đây cũng là giai đoạn thể hiện rõ đặc điểm của thời kỳ quá độ: vừa chiến đấu bảo vệ độc lập, vừa xây dựng nền tảng kinh tế – xã hội mới.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-12/hanoi-1946.jpg', 
        caption: 'Chiến sĩ tự vệ chiến đấu tại Hà Nội đêm 19/12/1946' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2021/12/19/upload_1889/loi-keu-goi-toan-quoc-khang-chien.jpg', 
        caption: 'Lời kêu gọi Toàn quốc kháng chiến' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'gH7j4iFr0Te', 
        caption: '60 ngày đêm chiến đấu bảo vệ Thủ đô Hà Nội' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Z2bB5dEmHc8j', 
        caption: 'Du Kích Sông Thao', 
        author: 'Đỗ Nhuận' 
      }
    ]
  },
  {
    date: '1947–1950',
    title: 'Xây Dựng Căn Cứ Địa Và Kinh Tế Kháng Chiến',
    content: `Sau chiến thắng Việt Bắc thu – đông 1947, căn cứ địa Việt Bắc được củng cố vững chắc. Nhà nước tổ chức sản xuất tại các vùng tự do, phát triển nông nghiệp, thủ công nghiệp và công nghiệp quốc phòng phục vụ kháng chiến. Các xưởng quân giới được xây dựng, cung cấp vũ khí cho bộ đội.

Đặc điểm kinh tế thời kỳ này là sự tồn tại nhiều thành phần: kinh tế nhà nước, kinh tế cá thể của nông dân và một bộ phận kinh tế tư nhân. Theo tư tưởng Hồ Chí Minh, đây là biểu hiện tất yếu của thời kỳ quá độ, khi chưa thể ngay lập tức xây dựng quan hệ sản xuất xã hội chủ nghĩa hoàn chỉnh.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2022-10/xuong-quan-gioi-viet-bac.jpg', 
        caption: 'Xưởng quân giới tại Việt Bắc' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2022/03/15/upload_1656/kinh-te-khang-chien.jpg', 
        caption: 'Sản xuất nông nghiệp tại vùng tự do' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'hI8k5gGs1Uf', 
        caption: 'Kinh tế kháng chiến - Vừa sản xuất vừa chiến đấu' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/A3cC6eFnId9k', 
        caption: 'Bài Ca Xây Dựng', 
        author: 'Hoàng Vân' 
      }
    ]
  },
  {
    date: '1950',
    title: 'Bước Ngoặt Của Kháng Chiến',
    content: `Năm 1950 đánh dấu bước phát triển quan trọng. Việt Nam chính thức thiết lập quan hệ ngoại giao với Trung Quốc và Liên Xô, mở rộng quan hệ quốc tế với các nước xã hội chủ nghĩa. Tháng 9–10/1950, Chiến dịch Biên giới giành thắng lợi lớn, mở thông đường liên lạc quốc tế và phá thế bao vây của địch.

Thắng lợi này củng cố niềm tin của nhân dân, nâng cao vị thế quốc tế của Việt Nam và tạo điều kiện thuận lợi để tiếp tục xây dựng lực lượng cả về quân sự và kinh tế.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-09/chien-dich-bien-gioi-1950.jpg', 
        caption: 'Chiến dịch Biên giới 1950' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/01/30/upload_1789/quan-he-ngoai-giao-1950.jpg', 
        caption: 'Việt Nam thiết lập quan hệ ngoại giao với các nước XHCN' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'iJ9l6hHs2Vg', 
        caption: 'Chiến dịch Biên giới 1950 - Mở ra cục diện mới' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/B4dD7fGoJe0l', 
        caption: 'Chiến Thắng Biên Giới', 
        author: 'Văn Cao' 
      }
    ]
  },
  {
    date: '04/12/1953',
    title: 'Luật Cải Cách Ruộng Đất',
    content: `Ngày 4/12/1953, Quốc hội thông qua Luật Cải cách ruộng đất. Mục tiêu là xóa bỏ quan hệ sản xuất phong kiến ở nông thôn, thực hiện khẩu hiệu "người cày có ruộng". Chính sách này tịch thu ruộng đất của địa chủ phản động chia cho nông dân nghèo.

Cải cách ruộng đất không chỉ có ý nghĩa kinh tế mà còn mang ý nghĩa chính trị sâu sắc: củng cố khối liên minh công – nông, tăng cường hậu phương kháng chiến và chuẩn bị điều kiện cho sự phát triển tiếp theo của cách mạng.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-12/cai-cach-ruong-dat-1953.jpg', 
        caption: 'Nông dân nhận ruộng trong cải cách ruộng đất' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/12/04/upload_1923/luat-cai-cach-ruong-dat.jpg', 
        caption: 'Luật Cải cách ruộng đất được Quốc hội thông qua' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'jK0m7iIt3Wh', 
        caption: 'Cải cách ruộng đất 1953 - Bước ngoặt ở nông thôn Việt Nam' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/C5eE8gHpKf1m', 
        caption: 'Bài Ca Nông Dân', 
        author: 'Trần Kiết Tường' 
      }
    ]
  },
  {
    date: 'Tổng Kết 1945–1953',
    title: 'Tổng Kết Giai Đoạn 1945–1953',
    content: `Từ năm 1945 đến 1953, Việt Nam đã vượt qua muôn vàn thử thách để bảo vệ nền độc lập non trẻ. Đồng thời, dưới sự lãnh đạo của Đảng và tư tưởng Hồ Chí Minh, đất nước từng bước xây dựng nhà nước dân chủ nhân dân, phát triển kinh tế kháng chiến và cải tạo xã hội cũ.

Giai đoạn này tuy chưa trực tiếp xây dựng chủ nghĩa xã hội, nhưng đã đặt nền móng chính trị, kinh tế và xã hội quan trọng cho con đường quá độ lên CNXH ở Việt Nam trong những năm sau đó.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/12/31/tong-ket-1945-1953.jpg', 
        caption: 'Việt Nam 1945-1953: Từ độc lập đến kháng chiến thắng lợi' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/12/31/upload_1987/nen-mong-qua-do.jpg', 
        caption: 'Nền móng cho con đường quá độ lên CNXH' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'kL1n8jJu4Xi', 
        caption: 'Việt Nam 1945-1953: Hành trình xây dựng nền móng' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/E7gG0iJrMh3o', 
        caption: 'Việt Nam Quê Hương Tôi', 
        author: 'Đỗ Nhuận' 
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1945() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1945.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_1945.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/20 to-amber-900/20 p-8 border border-amber-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-amber-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-amber-700 tracking-tighter">
                1945 - 1953
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Khởi Đầu Con Đường Quá Độ Gián Tiếp Lên Chủ Nghĩa Xã Hội
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
            count={DATA_1945.length}
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
            {DATA_1945.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-amber-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg border-4 border-white">
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-amber-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
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
          ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg' 
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
