'use client';

import React, { useState } from 'react';
import { FileText, Film, Calendar, Play, Image as ImageIcon, Video, X, ChevronRight, ExternalLink } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU ---
interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  content: string;
  media: MediaItem[];
}

const DATA_1945: TimelineEvent[] = [
  {
    date: '1945',
    title: 'Khái Niệm "Quá Độ Gián Tiếp" Trong Tư Tưởng Hồ Chí Minh',
    content: `Trong lý luận của chủ nghĩa Mác – Lênin và được Hồ Chí Minh vận dụng sáng tạo vào điều kiện Việt Nam, quá độ gián tiếp lên chủ nghĩa xã hội là con đường phát triển từ một nước thuộc địa, nông nghiệp lạc hậu, bỏ qua việc thiết lập chế độ tư bản chủ nghĩa hoàn chỉnh để tiến lên chủ nghĩa xã hội.

"Bỏ qua chế độ tư bản chủ nghĩa" không có nghĩa là phủ nhận hoàn toàn những yếu tố tiến bộ của văn minh tư bản, mà là không xây dựng một nhà nước tư sản và không để quan hệ sản xuất tư bản chủ nghĩa giữ vai trò thống trị trong xã hội. Thay vào đó, dưới sự lãnh đạo của Đảng Cộng sản, đất nước tiến hành cách mạng dân tộc dân chủ nhân dân, từng bước xây dựng nền tảng chính trị, kinh tế và xã hội để phát triển lên chủ nghĩa xã hội.`,
    media: [
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ho_Chi_Minh_reading_declaration_of_independence_of_Vietnam_02.09.1945.jpg/800px-Ho_Chi_Minh_reading_declaration_of_independence_of_Vietnam_02.09.1945.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập'
      },
      { 
        type: 'video', 
        src: 'o7lwWGfYyAg', 
        caption: 'Toàn cảnh Lễ Tuyên ngôn Độc lập 2/9/1945'
      }
    ]
  },
  {
    date: '02/09/1945',
    title: 'Tuyên Ngôn Độc Lập Và Xác Lập Con Đường Phát Triển Của Dân Tộc',
    content: `Ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa. Văn kiện này không chỉ khẳng định quyền tự do, độc lập của dân tộc Việt Nam mà còn thể hiện tư tưởng nhất quán của Người: độc lập dân tộc phải gắn liền với con đường tiến lên chủ nghĩa xã hội.

Ngay sau khi giành chính quyền, Hồ Chí Minh xác định nhiệm vụ trung tâm là củng cố chính quyền cách mạng, bảo vệ thành quả cách mạng và xây dựng nền tảng cho một xã hội mới. Theo tư tưởng của Người, Việt Nam lựa chọn con đường quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa – phù hợp với đặc điểm là một nước thuộc địa, nông nghiệp lạc hậu.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ho-chi-minh-doc-tuyen-ngon.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình'
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ba-dinh-1945.jpg', 
        caption: 'Quảng trường Ba Đình ngày 2/9/1945'
      },
      { 
        type: 'video', 
        src: 'dQw4w9WgXcQ', 
        caption: 'Toàn cảnh Lễ Tuyên ngôn Độc lập 2/9/1945'
      }
    ]
  },
  {
    date: 'Cuối 1945',
    title: 'Giải Quyết "Giặc Đói" Và "Giặc Dốt"',
    content: `Sau khi độc lập, đất nước rơi vào tình trạng khủng hoảng nghiêm trọng. Nạn đói năm 1945 đã làm hơn 2 triệu người chết ở miền Bắc. Trước tình hình đó, Chính phủ phát động phong trào "nhường cơm sẻ áo", kêu gọi mỗi người dân nhịn ăn một bữa để cứu đói đồng bào. Đồng thời, phong trào tăng gia sản xuất được triển khai rộng khắp.

Về giáo dục, ngày 8/9/1945, Chủ tịch Hồ Chí Minh ký sắc lệnh thành lập Nha Bình dân học vụ nhằm xóa nạn mù chữ. Hàng triệu người dân đã tham gia học chữ trong những năm đầu của chính quyền cách mạng. Điều này thể hiện quan điểm của Hồ Chí Minh: xây dựng xã hội mới phải bắt đầu từ nâng cao dân trí, phát huy vai trò làm chủ của nhân dân.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2020-09/nan-doi-1945.jpg', 
        caption: 'Nạn đói năm 1945'
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2020/09/07/upload_1597/binh-dan-hoc-vu.jpg', 
        caption: 'Lớp học bình dân học vụ'
      },
      { 
        type: 'video', 
        src: 'eF5g9hDq8Rc', 
        caption: 'Chống giặc đói, giặc dốt những năm đầu độc lập'
      }
    ]
  },
  {
    date: '1946',
    title: 'Tổng Tuyển Cử Và Hiến Pháp Đầu Tiên',
    content: `Ngày 6/1/1946, cuộc Tổng tuyển cử đầu tiên được tổ chức với hơn 90% cử tri đi bầu. Quốc hội khóa I ra đời, đánh dấu bước trưởng thành của Nhà nước dân chủ nhân dân. Cuối năm 1946, Hiến pháp 1946 được thông qua – bản Hiến pháp đầu tiên trong lịch sử Việt Nam.

Hiến pháp 1946 khẳng định các quyền tự do dân chủ cơ bản của nhân dân và nguyên tắc quyền lực thuộc về nhân dân. Đây là bước cụ thể hóa tư tưởng Hồ Chí Minh về một nhà nước của dân, do dân và vì dân – nền tảng chính trị cho quá trình quá độ lên CNXH sau này.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/01/06/tong-tuyen-cu-1946.jpg', 
        caption: 'Cử tri đi bầu trong tổng tuyển cử đầu tiên 6/1/1946'
      },
      { 
        type: 'image', 
        src: 'https://media.baodautu.vn/Images/chicuong/2021/11/09/hien-phap-1946.jpg', 
        caption: 'Hiến pháp 1946'
      },
      { 
        type: 'video', 
        src: 'fG6h3iEq9Sd', 
        caption: 'Tổng tuyển cử 1946 - Mốc son của nền dân chủ'
      }
    ]
  },
  {
    date: '19/12/1946',
    title: 'Toàn Quốc Kháng Chiến',
    content: `Trước dã tâm xâm lược trở lại của thực dân Pháp, ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến với tinh thần: "Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."

Cuộc kháng chiến chống Pháp bước vào giai đoạn toàn diện, lâu dài. Hồ Chí Minh xác định phương châm kháng chiến là "toàn dân, toàn diện, trường kỳ, tự lực cánh sinh". Đây cũng là giai đoạn thể hiện rõ đặc điểm của thời kỳ quá độ: vừa chiến đấu bảo vệ độc lập, vừa xây dựng nền tảng kinh tế – xã hội mới.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-12/hanoi-1946.jpg', 
        caption: 'Chiến sĩ tự vệ chiến đấu tại Hà Nội đêm 19/12/1946'
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2021/12/19/upload_1889/loi-keu-goi-toan-quoc-khang-chien.jpg', 
        caption: 'Lời kêu gọi Toàn quốc kháng chiến'
      },
      { 
        type: 'video', 
        src: 'gH7j4iFr0Te', 
        caption: '60 ngày đêm chiến đấu bảo vệ Thủ đô Hà Nội'
      }
    ]
  },
  {
    date: '1947–1950',
    title: 'Xây Dựng Căn Cứ Địa Và Kinh Tế Kháng Chiến',
    content: `Sau chiến thắng Việt Bắc thu – đông 1947, căn cứ địa Việt Bắc được củng cố vững chắc. Nhà nước tổ chức sản xuất tại các vùng tự do, phát triển nông nghiệp, thủ công nghiệp và công nghiệp quốc phòng phục vụ kháng chiến. Các xưởng quân giới được xây dựng, cung cấp vũ khí cho bộ đội.

Đặc điểm kinh tế thời kỳ này là sự tồn tại nhiều thành phần: kinh tế nhà nước, kinh tế cá thể của nông dân và một bộ phận kinh tế tư nhân. Theo tư tưởng Hồ Chí Minh, đây là biểu hiện tất yếu của thời kỳ quá độ, khi chưa thể ngay lập tức xây dựng quan hệ sản xuất xã hội chủ nghĩa hoàn chỉnh.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2022-10/xuong-quan-gioi-viet-bac.jpg', 
        caption: 'Xưởng quân giới tại Việt Bắc'
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2022/03/15/upload_1656/kinh-te-khang-chien.jpg', 
        caption: 'Sản xuất nông nghiệp tại vùng tự do'
      },
      { 
        type: 'video', 
        src: 'hI8k5gGs1Uf', 
        caption: 'Kinh tế kháng chiến - Vừa sản xuất vừa chiến đấu'
      }
    ]
  },
  {
    date: '1950',
    title: 'Bước Ngoặt Của Kháng Chiến',
    content: `Năm 1950 đánh dấu bước phát triển quan trọng. Việt Nam chính thức thiết lập quan hệ ngoại giao với Trung Quốc và Liên Xô, mở rộng quan hệ quốc tế với các nước xã hội chủ nghĩa. Tháng 9–10/1950, Chiến dịch Biên giới giành thắng lợi lớn, mở thông đường liên lạc quốc tế và phá thế bao vây của địch.

Thắng lợi này củng cố niềm tin của nhân dân, nâng cao vị thế quốc tế của Việt Nam và tạo điều kiện thuận lợi để tiếp tục xây dựng lực lượng cả về quân sự và kinh tế.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-09/chien-dich-bien-gioi-1950.jpg', 
        caption: 'Chiến dịch Biên giới 1950'
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/01/30/upload_1789/quan-he-ngoai-giao-1950.jpg', 
        caption: 'Việt Nam thiết lập quan hệ ngoại giao với các nước XHCN'
      },
      { 
        type: 'video', 
        src: 'iJ9l6hHs2Vg', 
        caption: 'Chiến dịch Biên giới 1950 - Mở ra cục diện mới'
      }
    ]
  },
  {
    date: '04/12/1953',
    title: 'Luật Cải Cách Ruộng Đất',
    content: `Ngày 4/12/1953, Quốc hội thông qua Luật Cải cách ruộng đất. Mục tiêu là xóa bỏ quan hệ sản xuất phong kiến ở nông thôn, thực hiện khẩu hiệu "người cày có ruộng". Chính sách này tịch thu ruộng đất của địa chủ phản động chia cho nông dân nghèo.

Cải cách ruộng đất không chỉ có ý nghĩa kinh tế mà còn mang ý nghĩa chính trị sâu sắc: củng cố khối liên minh công – nông, tăng cường hậu phương kháng chiến và chuẩn bị điều kiện cho sự phát triển tiếp theo của cách mạng.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-12/cai-cach-ruong-dat-1953.jpg', 
        caption: 'Nông dân nhận ruộng trong cải cách ruộng đất'
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/12/04/upload_1923/luat-cai-cach-ruong-dat.jpg', 
        caption: 'Luật Cải cách ruộng đất được Quốc hội thông qua'
      },
      { 
        type: 'video', 
        src: 'jK0m7iIt3Wh', 
        caption: 'Cải cách ruộng đất 1953 - Bước ngoặt ở nông thôn Việt Nam'
      }
    ]
  },
  {
    date: 'Tổng Kết 1945–1953',
    title: 'Tổng Kết Giai Đoạn 1945–1953',
    content: `Từ năm 1945 đến 1953, Việt Nam đã vượt qua muôn vàn thử thách để bảo vệ nền độc lập non trẻ. Đồng thời, dưới sự lãnh đạo của Đảng và tư tưởng Hồ Chí Minh, đất nước từng bước xây dựng nhà nước dân chủ nhân dân, phát triển kinh tế kháng chiến và cải tạo xã hội cũ.

Giai đoạn này tuy chưa trực tiếp xây dựng chủ nghĩa xã hội, nhưng đã đặt nền móng chính trị, kinh tế và xã hội quan trọng cho con đường quá độ lên CNXH ở Việt Nam trong những năm sau đó.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/12/31/tong-ket-1945-1953.jpg', 
        caption: 'Việt Nam 1945-1953: Từ độc lập đến kháng chiến thắng lợi'
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/12/31/upload_1987/nen-mong-qua-do.jpg', 
        caption: 'Nền móng cho con đường quá độ lên CNXH'
      },
      { 
        type: 'video', 
        src: 'kL1n8jJu4Xi', 
        caption: 'Việt Nam 1945-1953: Hành trình xây dựng nền móng'
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
const Timeline1945 = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState<boolean>(false);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const allMedia = DATA_1945.flatMap(event => 
    event.media.map(m => ({ 
      ...m, 
      eventDate: event.date, 
      eventTitle: event.title 
    }))
  );

  const featuredMedia = allMedia.slice(0, 8);
  const activeEvent = DATA_1945[activeEventIndex];

  const handleNextEvent = () => {
    setActiveEventIndex((prev) => (prev + 1) % DATA_1945.length);
  };

  const handlePrevEvent = () => {
    setActiveEventIndex((prev) => (prev - 1 + DATA_1945.length) % DATA_1945.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-amber-700 tracking-tighter">
                1945 - 1953
              </h1>
              <p className="text-lg font-semibold text-gray-700 mt-2">
                Khởi Đầu Con Đường Quá Độ Gián Tiếp Lên Chủ Nghĩa Xã Hội
              </p>
            </div>
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mt-4"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
              activeTab === 'timeline' 
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Dòng thời gian</span>
            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
              activeTab === 'timeline' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
            }`}>
              {DATA_1945.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
              activeTab === 'gallery' 
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Film className="w-5 h-5" />
            <span>Thư viện tư liệu</span>
            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
              activeTab === 'gallery' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
            }`}>
              {allMedia.length}
            </span>
          </button>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px] animate-in fade-in duration-700">
          
          {/* TAB DÒNG THỜI GIAN */}
          {activeTab === 'timeline' && (
            <div className="space-y-8">
              {/* Event Navigation */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">Sự kiện:</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-red-50 to-amber-50 rounded-full text-red-700 font-bold">
                      {activeEventIndex + 1} / {DATA_1945.length}
                    </span>
                    <span className="text-lg font-bold text-gray-900">{activeEvent.date}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevEvent}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      Trước
                    </button>
                    <button
                      onClick={handleNextEvent}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      Tiếp theo
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Text Content */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-6 md:p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <span className="font-semibold text-gray-700">Nội dung lịch sử</span>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-red-50 to-amber-50 text-red-700 font-bold rounded-full border border-red-200">
                          {activeEvent.date}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        {activeEvent.title}
                      </h2>
                      
                      <div className="prose prose-lg max-w-none">
                        <div className="text-gray-800 leading-relaxed space-y-4">
                          {activeEvent.content.split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx} className="text-lg">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-red-50 rounded-xl">
                            <div className="text-2xl font-bold text-red-700">
                              {activeEvent.media.filter(m => m.type === 'image').length}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Ảnh tư liệu</div>
                          </div>
                          <div className="text-center p-4 bg-amber-50 rounded-xl">
                            <div className="text-2xl font-bold text-amber-700">
                              {activeEvent.media.filter(m => m.type === 'video').length}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Video tư liệu</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-xl">
                            <div className="text-2xl font-bold text-gray-700">
                              {activeEvent.date.split('-')[0]}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Năm lịch sử</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Media Gallery */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-6">
                    {/* Media Gallery Header */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                          <span className="font-semibold text-white">TƯ LIỆU LỊCH SỬ</span>
                        </div>
                        <span className="text-sm text-gray-300">
                          {activeEvent.media.length} tư liệu
                        </span>
                      </div>

                      {/* Media List */}
                      <div className="space-y-4">
                        {activeEvent.media.map((media, mediaIdx) => (
                          <div 
                            key={mediaIdx} 
                            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                            onClick={() => setSelectedMedia(media)}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                media.type === 'image' ? 'bg-red-500/20' : 'bg-amber-500/20'
                              }`}>
                                {media.type === 'image' ? (
                                  <ImageIcon className="w-5 h-5 text-red-300" />
                                ) : (
                                  <Play className="w-5 h-5 text-amber-300" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-xs font-bold uppercase ${
                                    media.type === 'image' ? 'text-red-300' : 'text-amber-300'
                                  }`}>
                                    {media.type === 'image' ? 'ẢNH TƯ LIỆU' : 'VIDEO TƯ LIỆU'}
                                  </span>
                                  {media.type === 'video' && (
                                    <span className="text-xs px-2 py-0.5 bg-white/20 rounded-full text-white">
                                      4K
                                    </span>
                                  )}
                                </div>
                                <p className="text-white font-medium text-sm line-clamp-2">
                                  {media.caption}
                                </p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white flex-shrink-0" />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 text-center">
                        <button
                          onClick={() => setActiveTab('gallery')}
                          className="text-sm text-gray-300 hover:text-white font-medium"
                        >
                          Xem tất cả tư liệu →
                        </button>
                      </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Danh sách sự kiện</h4>
                      <div className="space-y-2">
                        {DATA_1945.slice(0, 5).map((event, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveEventIndex(idx)}
                            className={`w-full text-left p-3 rounded-lg transition-all ${
                              activeEventIndex === idx
                                ? 'bg-gradient-to-r from-red-50 to-amber-50 border border-red-200'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`font-medium ${
                                activeEventIndex === idx ? 'text-red-700' : 'text-gray-700'
                              }`}>
                                {event.date}
                              </span>
                              {activeEventIndex === idx && (
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 truncate mt-1">{event.title}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB THƯ VIỆN TƯ LIỆU */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              {/* Media Stats */}
              <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-bold text-red-600">{allMedia.length}</div>
                    <div className="text-sm text-gray-600">Tổng số tư liệu</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-bold text-red-600">
                      {allMedia.filter(m => m.type === 'image').length}
                    </div>
                    <div className="text-sm text-gray-600">Ảnh tư liệu</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-bold text-amber-600">
                      {allMedia.filter(m => m.type === 'video').length}
                    </div>
                    <div className="text-sm text-gray-600">Video tư liệu</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-bold text-gray-700">{DATA_1945.length}</div>
                    <div className="text-sm text-gray-600">Sự kiện lịch sử</div>
                  </div>
                </div>
              </div>

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
                              e.currentTarget.src = "https://placehold.co/600x400/ef4444/ffffff?text=Ảnh+Tư+Liệu+Lịch+Sử";
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
                          <div className={`w-2 h-2 rounded-full ${media.type === 'image' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            {media.type === 'image' ? 'ẢNH TƯ LIỆU' : 'VIDEO TƯ LIỆU'}
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
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Xem tất cả {allMedia.length} tư liệu
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Media Modal */}
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
            className="absolute top-4 right-4 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <div className="flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.caption}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/800x600/ef4444/ffffff?text=Không+thể+tải+ảnh+tư+liệu";
                    }}
                  />
                </div>
                <div className="p-6 bg-gray-800 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-white font-semibold">ẢNH TƯ LIỆU LỊCH SỬ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.caption}</h3>
                  <p className="text-gray-300">Tư liệu lịch sử Việt Nam</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="relative aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedMedia.src}?autoplay=1&rel=0`}
                    title={selectedMedia.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-6 bg-gray-800 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-white font-semibold">VIDEO TƯ LIỆU LỊCH SỬ</span>
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">4K</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.caption}</h3>
                  <p className="text-gray-300">Tư liệu lịch sử Việt Nam</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// EXPORT ĐÚNG CÁCH

export default Timeline1945;
