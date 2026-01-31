'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { FileText, Film, Calendar, Play, Image as ImageIcon, Video, X, ChevronRight, ChevronLeft } from 'lucide-react';

// --- CẤU TRÚC DỮ LIỆU (giữ nguyên) ---
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
    media: []
  },
  {
    date: '02/09/1945',
    title: 'Tuyên Ngôn Độc Lập Và Xác Lập Con Đường Phát Triển Của Dân Tộc',
    content: `Ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa. Văn kiện này không chỉ khẳng định quyền tự do, độc lập của dân tộc Việt Nam mà còn thể hiện tư tưởng nhất quán của Người: độc lập dân tộc phải gắn liền với con đường tiến lên chủ nghĩa xã hội.

Ngay sau khi giành chính quyền, Hồ Chí Minh xác định nhiệm vụ trung tâm là củng cố chính quyền cách mạng, bảo vệ thành quả cách mạng và xây dựng nền tảng cho một xã hội mới. Theo tư tưởng của Người, Việt Nam lựa chọn con đường quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa – phù hợp với đặc điểm là một nước thuộc địa, nông nghiệp lạc hậu.`,
    media: [
      { 
        type: 'image', 
        src: 'https://tttctt.1cdn.vn/2025/08/30/anh-1(1).jpg', 
        caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình' 
      },
      { 
        type: 'video', 
        src: 'uJhb_5wr4yc', 
        caption: 'Lễ Tuyên ngôn Độc lập 2/9/1945' 
      }
    ]
  },
  {
    date: 'Cuối năm 1945',
    title: 'Giải quyết "giặc đói" và "giặc dốt"',
    content: `Sau khi độc lập, đất nước rơi vào tình trạng khủng hoảng nghiêm trọng. Nạn đói năm 1945 đã làm hơn 2 triệu người chết ở miền Bắc. Trước tình hình đó, Chính phủ phát động phong trào "nhường cơm sẻ áo", kêu gọi mỗi người dân nhịn ăn một bữa để cứu đói đồng bào. Đồng thời, phong trào tăng gia sản xuất được triển khai rộng khắp.

Về giáo dục, ngày 8/9/1945, Chủ tịch Hồ Chí Minh ký sắc lệnh thành lập Nha Bình dân học vụ nhằm xóa nạn mù chữ. Hàng triệu người dân đã tham gia học chữ trong những năm đầu của chính quyền cách mạng. Điều này thể hiện quan điểm của Hồ Chí Minh: xây dựng xã hội mới phải bắt đầu từ nâng cao dân trí, phát huy vai trò làm chủ của nhân dân.`,
    media: [
      { 
        type: 'image', 
        src: 'https://photo.znews.vn/w660/Uploaded/oplukaa/2018_05_23/12.jpg', 
        caption: 'Nạn đói năm 1945' 
      },
       { 
        type: 'image', 
        src: 'https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef1eea1c7bcc924892efcb6f50ccf84c0ab0e1de0dd09e20cd66e0e4ccee91220fb7ae13cda333b1a658a4aa09dbd85477/31-7000.jpg', 
        caption: 'Nạn dốt năm 1945' 
      }
    ]
  },
  {
    date: '1946',
    title: 'Tổng tuyển cử và Hiến pháp đầu tiên',
    content: `Ngày 6/1/1946, cuộc Tổng tuyển cử đầu tiên được tổ chức với hơn 90% cử tri đi bầu. Quốc hội khóa I ra đời, đánh dấu bước trưởng thành của Nhà nước dân chủ nhân dân. Cuối năm 1946, Hiến pháp 1946 được thông qua – bản Hiến pháp đầu tiên trong lịch sử Việt Nam.

Hiến pháp 1946 khẳng định các quyền tự do dân chủ cơ bản của nhân dân và nguyên tắc quyền lực thuộc về nhân dân. Đây là bước cụ thể hóa tư tưởng Hồ Chí Minh về một nhà nước của dân, do dân và vì dân – nền tảng chính trị cho quá trình quá độ lên CNXH sau này.`,
    media: [
       { 
        type: 'image', 
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5cMNXxXgCbnt7umcby639X3Xm7RDCdVaOg&s', 
        caption: 'Chủ tịch Hồ Chí Minh đến bầu cử tại nhà số 10, phố hàng vôi, Hà Nội' 
      },
       { 
        type: 'image', 
        src: 'https://cucphuong.ninhbinh.gov.vn/public/files/van%20hoa%20xa%20h%E1%BB%99i/tong%20tuyen%20cu%20(1).jpg', 
        caption: 'Tổng tuyển cử đầu tiên' 
      },
       { 
        type: 'image', 
        src: 'https://cand.com.vn/Files/Image/2015/12/18/thumb_660_quoc-hoi.cand%2018-12.cand.jpg', 
        caption: 'Quốc hội khóa I' 
      }
    ]
  },
  {
    date: '19/12/1946',
    title: 'Toàn quốc kháng chiến',
    content: `Trước dã tâm xâm lược trở lại của thực dân Pháp, ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến với tinh thần: "Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."

Cuộc kháng chiến chống Pháp bước vào giai đoạn toàn diện, lâu dài. Hồ Chí Minh xác định phương châm kháng chiến là "toàn dân, toàn diện, trường kỳ, tự lực cánh sinh". Đây cũng là giai đoạn thể hiện rõ đặc điểm của thời kỳ quá độ: vừa chiến đấu bảo vệ độc lập, vừa xây dựng nền tảng kinh tế – xã hội mới.`,
    media: [
      { 
        type: 'image', 
        src: 'https://mediaptq.mediatech.vn/upload/image/202112/medium/46337_00e0517b4348d18fa3c6b677f70a7422.png', 
        caption: 'Lời kêu gọi toàn quốc kháng chiến' 
      }
    ]
  },
  {
    date: '1947–1950',
    title: 'Xây dựng căn cứ địa và kinh tế kháng chiến',
    content: `Sau chiến thắng Việt Bắc thu – đông 1947, căn cứ địa Việt Bắc được củng cố vững chắc. Nhà nước tổ chức sản xuất tại các vùng tự do, phát triển nông nghiệp, thủ công nghiệp và công nghiệp quốc phòng phục vụ kháng chiến. Các xưởng quân giới được xây dựng, cung cấp vũ khí cho bộ đội.

Đặc điểm kinh tế thời kỳ này là sự tồn tại nhiều thành phần: kinh tế nhà nước, kinh tế cá thể của nông dân và một bộ phận kinh tế tư nhân. Theo tư tưởng Hồ Chí Minh, đây là biểu hiện tất yếu của thời kỳ quá độ, khi chưa thể ngay lập tức xây dựng quan hệ sản xuất xã hội chủ nghĩa hoàn chỉnh.`,
    media: []
  },
  {
    date: '1950',
    title: 'Bước ngoặt của kháng chiến',
    content: `Năm 1950 đánh dấu bước phát triển quan trọng. Việt Nam chính thức thiết lập quan hệ ngoại giao với Trung Quốc và Liên Xô, mở rộng quan hệ quốc tế với các nước xã hội chủ nghĩa. Tháng 9–10/1950, Chiến dịch Biên giới giành thắng lợi lớn, mở thông đường liên lạc quốc tế và phá thế bao vây của địch.

Thắng lợi này củng cố niềm tin của nhân dân, nâng cao vị thế quốc tế của Việt Nam và tạo điều kiện thuận lợi để tiếp tục xây dựng lực lượng cả về quân sự và kinh tế.`,
    media: []
  },
  {
    date: '1953',
    title: 'Luật Cải cách ruộng đất',
    content: `Ngày 4/12/1953, Quốc hội thông qua Luật Cải cách ruộng đất. Mục tiêu là xóa bỏ quan hệ sản xuất phong kiến ở nông thôn, thực hiện khẩu hiệu "người cày có ruộng". Chính sách này tịch thu ruộng đất của địa chủ phản động chia cho nông dân nghèo.

Cải cách ruộng đất không chỉ có ý nghĩa kinh tế mà còn mang ý nghĩa chính trị sâu sắc: củng cố khối liên minh công – nông, tăng cường hậu phương kháng chiến và chuẩn bị điều kiện cho sự phát triển tiếp theo của cách mạng.`,
    media: [
      { 
        type: 'video', 
        src: 'h6qEJkQwFPs', 
        caption: 'Ngày này năm xưa 4-12-1953: Luật Cải cách ruộng đất được thông qua' 
      }
    ]
  },
  {
    date: 'Tổng kết',
    title: 'Tổng kết giai đoạn 1945–1953',
    content: `Từ năm 1945 đến 1953, Việt Nam đã vượt qua muôn vàn thử thách để bảo vệ nền độc lập non trẻ. Đồng thời, dưới sự lãnh đạo của Đảng và tư tưởng Hồ Chí Minh, đất nước từng bước xây dựng nhà nước dân chủ nhân dân, phát triển kinh tế kháng chiến và cải tạo xã hội cũ.

Giai đoạn này tuy chưa trực tiếp xây dựng chủ nghĩa xã hội, nhưng đã đặt nền móng chính trị, kinh tế và xã hội quan trọng cho con đường quá độ lên CNXH ở Việt Nam trong những năm sau đó.`,
    media: []
  }
];

// --- COMPONENT CHÍNH - ĐÃ CẬP NHẬT VỚI MODAL VIDEO FIXED ---
export function Timeline1945() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState<boolean>(false);

  const allMedia = DATA_1945.flatMap(event => 
    event.media.map(m => ({ 
      ...m, 
      eventDate: event.date, 
      eventTitle: event.title 
    }))
  );

  const featuredMedia = allMedia.slice(0, 8);
 useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedMedia]);
  // Hàm kiểm tra nội dung ngắn
  const isShortContent = (content: string) => {
    const wordCount = content.split(/\s+/).length;
    return wordCount < 150; // Nếu ít hơn 150 từ coi là ngắn
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/20 via-amber-900/20 to-red-900/20 p-8 border border-amber-200/30 shadow-lg">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-700 to-amber-600 flex items-center justify-center shadow-xl">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-amber-700 to-red-800 tracking-tighter">
                  1945 - 1953
                </h2>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  Khởi Đầu Con Đường Quá Độ Gián Tiếp Lên Chủ Nghĩa Xã Hội
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-2">
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
        </button>
      </div>

      {/* Content Area */}
      <div className="min-h-[600px] animate-in fade-in duration-700">
        
        {/* TAB DÒNG THỜI GIAN - ĐÃ CẬP NHẬT VỚI GRID NGANG */}
        {activeTab === 'timeline' && (
          <div className="space-y-12">
            {DATA_1945.map((event, idx) => {
              const contentIsShort = isShortContent(event.content);
              
              return (
                <div key={idx} className="relative group">
                  {/* Timeline line and dot */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-amber-300 to-transparent hidden md:block"></div>
                  <div className="absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-red-600 to-amber-500 border-4 border-white shadow-lg hidden md:block"></div>
                  
                  {/* Content Card */}
                  <div className="ml-0 md:ml-12 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                    {/* Date Header */}
                    <div className="bg-gradient-to-r from-red-50 to-amber-50 p-6 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-md">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="inline-block px-4 py-2 bg-white rounded-full text-red-700 font-bold border border-red-200">
                            {event.date}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 mt-3 leading-tight">{event.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content and Media - CẬP NHẬT: Grid ngang khi nội dung ngắn */}
                    <div className="p-6">
                      {event.media.length > 0 ? (
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
                                  <ImageIcon className="w-5 h-5 text-red-600" />
                                  <span>Tư liệu ({event.media.length})</span>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                {event.media.map((media, mediaIdx) => (
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
                                              e.currentTarget.src = "https://placehold.co/600x400/ef4444/ffffff?text=Tư+Liệu+Lịch+Sử";
                                            }}
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </>
                                      ) : (
                                        <div className="relative w-full h-full">
                                          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-amber-900/50 flex items-center justify-center">
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
                                        <div className={`w-3 h-3 rounded-full ${media.type === 'image' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
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
                                  <ImageIcon className="w-5 h-5 text-red-600" />
                                  <span>Tư liệu liên quan ({event.media.length})</span>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {event.media.map((media, mediaIdx) => (
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
                                          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-amber-900/50 flex items-center justify-center">
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
                                        <div className={`w-3 h-3 rounded-full ${media.type === 'image' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
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

        {/* TAB THƯ VIỆN TƯ LIỆU */}
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
                            e.currentTarget.src = "https://placehold.co/600x400/ef4444/ffffff?text=Ảnh+Tư+Liệu";
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
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Xem tất cả {allMedia.length} tư liệu
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Media Modal - ĐÃ CẬP NHẬT: Sử dụng flex và overflow-y-auto để xử lý scroll */}
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
            className="absolute top-6 right-6 text-white hover:text-red-300 transition-colors p-3 bg-black/50 rounded-full z-10 hover:bg-black/70"
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
                        e.currentTarget.src = "https://placehold.co/800x600/ef4444/ffffff?text=Không+thể+tải+ảnh";
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
                    selectedMedia.type === 'image' ? 'bg-red-500' : 'bg-amber-500'
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
    </div>
  );
}
