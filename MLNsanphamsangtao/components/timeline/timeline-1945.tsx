'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
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

// --- COMPONENT CHÍNH VỚI TIMELINE HOÀN CHỈNH ---
export function Timeline1945() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState(false);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  
  const timelineRef = useRef<HTMLDivElement>(null);

  const allMedia = DATA_1945.flatMap(event =>
    event.media.map(m => ({
      ...m,
      eventDate: event.date,
      eventTitle: event.title,
    }))
  );

  const featuredMedia = allMedia.slice(0, 8);

  /* 🔒 FIX KHÓA SCROLL TUYỆT ĐỐI */
  useEffect(() => {
    if (selectedMedia) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [selectedMedia]);

  // Cuộn đến sự kiện hiện tại
  useEffect(() => {
    if (timelineRef.current && activeTab === 'timeline') {
      const activeElement = timelineRef.current.querySelector(`[data-index="${activeEventIndex}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeEventIndex, activeTab]);

  return (
    <div className="space-y-8">
      {/* ================= TAB ================= */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex-1 py-3 rounded-xl font-semibold ${
            activeTab === 'timeline'
              ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white'
              : 'bg-white border'
          }`}
        >
          Dòng thời gian
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`flex-1 py-3 rounded-xl font-semibold ${
            activeTab === 'gallery'
              ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white'
              : 'bg-white border'
          }`}
        >
          Thư viện
        </button>
      </div>

      {/* ================= TIMELINE HOÀN CHỈNH ================= */}
      {activeTab === 'timeline' && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* TIMELINE VERTICAL - BÊN TRÁI */}
          <div className="lg:w-1/4">
            <div className="sticky top-6 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">
                Dòng thời gian sự kiện
              </h3>
              
              <div className="space-y-4">
                {DATA_1945.map((event, index) => (
                  <div key={index} className="relative">
                    {/* Đường kẻ dọc */}
                    {index < DATA_1945.length - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-300"></div>
                    )}
                    
                    {/* Nút timeline */}
                    <button
                      onClick={() => setActiveEventIndex(index)}
                      className={`flex items-start w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        activeEventIndex === index
                          ? 'bg-gradient-to-r from-red-50 to-amber-50 border-l-4 border-red-600 shadow-md'
                          : 'hover:bg-gray-50 border-l-4 border-gray-300'
                      }`}
                    >
                      {/* Dấu chấm */}
                      <div className={`relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        activeEventIndex === index
                          ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white'
                          : 'bg-gray-300 text-gray-700'
                      }`}>
                        <div className={`w-3 h-3 rounded-full ${
                          activeEventIndex === index ? 'bg-white' : 'bg-gray-600'
                        }`}></div>
                      </div>
                      
                      {/* Nội dung */}
                      <div>
                        <div className="font-bold text-gray-900">{event.date}</div>
                        <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {event.title}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Thông tin tổng */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Tổng số sự kiện:</span>
                  <span className="font-bold">{DATA_1945.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                  <span>Tổng số media:</span>
                  <span className="font-bold">{allMedia.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* NỘI DUNG CHI TIẾT - BÊN PHẢI */}
          <div className="lg:w-3/4" ref={timelineRef}>
            <div data-index={activeEventIndex} className="bg-white rounded-2xl shadow p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {DATA_1945[activeEventIndex].date} – {DATA_1945[activeEventIndex].title}
                  </h3>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    Sự kiện {activeEventIndex + 1} / {DATA_1945.length}
                  </div>
                </div>
                
                {/* Nút điều hướng */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveEventIndex(prev => Math.max(0, prev - 1))}
                    disabled={activeEventIndex === 0}
                    className={`p-2 rounded-lg ${
                      activeEventIndex === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-red-50 text-red-600 hover:bg-red-100'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveEventIndex(prev => Math.min(DATA_1945.length - 1, prev + 1))}
                    disabled={activeEventIndex === DATA_1945.length - 1}
                    className={`p-2 rounded-lg ${
                      activeEventIndex === DATA_1945.length - 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-red-50 text-red-600 hover:bg-red-100'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Nội dung */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {DATA_1945[activeEventIndex].content.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-4">{p}</p>
                ))}
              </div>

              {/* Media */}
              {DATA_1945[activeEventIndex].media.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <ImageIcon className="w-5 h-5 mr-2" />
                    Hình ảnh & Video liên quan
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {DATA_1945[activeEventIndex].media.map((m, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedMedia(m)}
                        className="cursor-pointer rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-video bg-gray-100 relative group">
                          {m.type === 'image' ? (
                            <img
                              src={m.src}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              alt={m.caption}
                            />
                          ) : (
                            <>
                              <img
                                src={`https://img.youtube.com/vi/${m.src}/hqdefault.jpg`}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                alt={m.caption}
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Play className="w-8 h-8 text-white ml-1" />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            {m.type === 'image' ? (
                              <ImageIcon className="w-4 h-4 mr-2" />
                            ) : (
                              <Film className="w-4 h-4 mr-2" />
                            )}
                            {m.type === 'image' ? 'Hình ảnh' : 'Video'}
                          </div>
                          <div className="font-semibold text-gray-900">{m.caption}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= GALLERY ================= */}
      {activeTab === 'gallery' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">Thư viện hình ảnh và video</h3>
            <div className="text-sm text-gray-600">
              Tổng cộng: <span className="font-bold">{allMedia.length}</span> media
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {(showAllMedia ? allMedia : featuredMedia).map((m, i) => (
              <div
                key={i}
                onClick={() => setSelectedMedia(m)}
                className="cursor-pointer rounded-xl overflow-hidden border hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-100 relative">
                  {m.type === 'image' ? (
                    <img
                      src={m.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={m.caption}
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${m.src}/hqdefault.jpg`}
                        className="w-full h-full object-cover"
                        alt={m.caption}
                      />
                      <Play className="absolute inset-0 m-auto w-10 h-10 text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {m.type === 'image' ? 'Ảnh' : 'Video'}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">{m.eventDate}</div>
                  <div className="font-bold text-gray-900 line-clamp-2">{m.caption}</div>
                  <div className="text-sm text-gray-600 mt-1 line-clamp-1">{m.eventTitle}</div>
                </div>
              </div>
            ))}
          </div>
          
          {allMedia.length > featuredMedia.length && !showAllMedia && (
            <div className="text-center pt-4">
              <button
                onClick={() => setShowAllMedia(true)}
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Xem tất cả {allMedia.length} media
              </button>
            </div>
          )}
        </div>
      )}

      {/* ================= MODAL (FIXED) ================= */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/90"
            onClick={() => setSelectedMedia(null)}
          />

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* CONTENT CONTAINER */}
          <div className="relative z-10 w-full max-w-6xl max-h-[90vh] flex flex-col">
            {selectedMedia.type === 'image' ? (
              <div className="flex-1 overflow-hidden flex items-center justify-center">
                <img
                  src={selectedMedia.src}
                  className="max-h-full max-w-full object-contain"
                  alt={selectedMedia.caption}
                />
              </div>
            ) : (
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-t-xl"
                  src={`https://www.youtube.com/embed/${selectedMedia.src}?autoplay=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}

            {/* CAPTION */}
            <div className="bg-black text-white p-3 md:p-4 font-semibold text-sm md:text-base text-center rounded-b-xl">
              {selectedMedia.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
