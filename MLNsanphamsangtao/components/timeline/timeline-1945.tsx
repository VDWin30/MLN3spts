'use client';

import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

// --- CẤU TRÚC DỮ LIỆU ---
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

// --- TRONG TIMELINE1945 COMPONENT ---
export function Timeline1945({ containerRef }: TimelineProps) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: '50%', left: '50%' });

  /* 🔒 TÍNH VỊ TRÍ MODAL DỰA TRÊN CLICK */
  const handleMediaClick = (m: MediaItem, event: React.MouseEvent) => {
    setSelectedMedia(m);
    
    // Tính toán vị trí modal để nó ở gần vị trí click
    const timelineRect = containerRef?.current?.getBoundingClientRect();
    const clickY = event.clientY;
    
    if (timelineRect) {
      // Modal sẽ ở 70% từ trên xuống của cột phải
      const modalTop = Math.min(
        Math.max(clickY - 200, timelineRect.top + 100), // Không quá cao
        timelineRect.bottom - 400 // Không quá thấp
      );
      
      const modalLeft = timelineRect.left + (timelineRect.width / 2);
      
      setModalPosition({
        top: `${modalTop}px`,
        left: `${modalLeft}px`
      });
    } else {
      // Fallback: trung tâm cột phải
      const windowWidth = window.innerWidth;
      const leftColumnWidth = windowWidth * 0.45;
      setModalPosition({
        top: '50%',
        left: `${leftColumnWidth + (windowWidth * 0.55 / 2)}px`
      });
    }
  };

  /* 🔒 FIX KHÓA SCROLL VÀ ESC KEY */
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedMedia) {
        setSelectedMedia(null);
      }
    };

    if (selectedMedia) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedMedia]);

  return (
    <>
      {/* ================= TIMELINE ĐƠN GIẢN ================= */}
      <div className="space-y-8 relative z-0">
        <div className="space-y-12">
          {DATA_1945.map((event, idx) => {
            const isShortContent = event.content.split(/\s+/).length < 150;

            return (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative z-0">
                {/* ... timeline content ... */}

                {/* Media */}
                {event.media.length > 0 && (
                  <div className="space-y-4">
                    {event.media.map((m, i) => (
                      <div
                        key={i}
                        onClick={(e) => handleMediaClick(m, e)} // ← THAY ĐỔI Ở ĐÂY
                        className="cursor-pointer rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-0"
                      >
                        {/* ... media content ... */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MODAL & OVERLAY ĐỒNG BỘ ================= */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[9999]">
          {/* OVERLAY CHE TOÀN BỘ MÀN HÌNH NHƯNG CỘT TRÁI TRONG SUỐT */}
          <div 
            className="absolute inset-0 grid grid-cols-[45%_55%] z-[9998]"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Cột trái: trong suốt, click được */}
            <div className="bg-transparent cursor-pointer" />
            
            {/* Cột phải: overlay đen */}
            <div className="bg-black/90 backdrop-blur-sm" />
          </div>

          {/* MODAL NẰM TRONG OVERLAY CỘT PHẢI */}
          <div 
            className="fixed z-[10000]"
            style={{
              top: modalPosition.top,
              left: modalPosition.left,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-full max-w-4xl max-h-[70vh] bg-black rounded-xl overflow-hidden shadow-2xl">
              
              {/* VIDEO */}
              {selectedMedia.type === 'video' ? (
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedMedia.src}?autoplay=1&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ) : 
              /* IMAGE */
              (
                <div className="w-full max-h-[60vh] min-h-[300px] flex items-center justify-center p-4">
                  <img
                    src={selectedMedia.src}
                    className="max-w-full max-h-full object-contain"
                    alt={selectedMedia.caption}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/800x600/333333/cccccc?text=Không+tải+được+ảnh';
                      target.className = 'max-w-full max-h-full object-contain opacity-60';
                    }}
                  />
                </div>
              )}

              {/* CAPTION */}
              <div className="bg-gradient-to-t from-black via-black/95 to-transparent px-4 py-6">
                <div className="text-white font-semibold text-lg text-center">
                  {selectedMedia.caption}
                </div>
                <div className="text-white/70 text-sm text-center mt-2">
                  {selectedMedia.type === 'image' ? 'Ảnh' : 'Video'} • Nhấn ESC để đóng
                </div>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 md:-top-16 md:right-0 z-20 bg-black/80 hover:bg-black text-white rounded-full p-3 transition-all shadow-xl"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
