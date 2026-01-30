'use client';

import React, { useState } from 'react';
import { FileText, Film, Calendar, Play, Image as ImageIcon, Video, X } from 'lucide-react';

// --- CẤU TRÚC DỮ LIỆU (đã xóa audio) ---
interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  content: string;
  images: MediaItem[];
  videos: MediaItem[];
}

const DATA_2011: TimelineEvent[] = [
  {
    date: '2011 – 2013',
    title: 'Bối Cảnh Mới Và Yêu Cầu Đổi Mới Thể Chế',
    content: `Năm 2011 đánh dấu thời điểm Việt Nam bước sang một giai đoạn phát triển mới của thời kỳ quá độ lên chủ nghĩa xã hội. Sau hơn 25 năm đổi mới, đất nước đã đạt được nhiều thành tựu quan trọng về kinh tế – xã hội, thoát khỏi tình trạng kém phát triển, đồng thời hội nhập ngày càng sâu rộng vào nền kinh tế thế giới.

Trong bối cảnh đó, theo lý luận Chủ nghĩa xã hội khoa học, khi lực lượng sản xuất phát triển ở trình độ cao hơn và các quan hệ xã hội trở nên đa dạng, phức tạp, thì việc quản lý xã hội bằng pháp luật và hoàn thiện thể chế chính trị trở thành yêu cầu tất yếu. Thực tiễn đặt ra đòi hỏi Nhà nước không chỉ điều hành kinh tế mà còn phải bảo đảm dân chủ, công bằng xã hội và ổn định chính trị.

Giai đoạn 2011–2013 vì vậy được xem là giai đoạn định hình tư duy xây dựng Nhà nước pháp quyền xã hội chủ nghĩa, chuẩn bị cơ sở lý luận và thực tiễn cho những cải cách thể chế sâu rộng trong các giai đoạn tiếp theo.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/01/12/dai-hoi-dang-xi.jpg', 
        caption: 'Đại hội XI (2011) - Định hướng phát triển mới của đất nước' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2021/01/12/upload_1599/dai-hoi-xi-1.jpg', 
        caption: 'Tổng Bí thư Nguyễn Phú Trọng phát biểu tại Đại hội XI' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'yA7d7gBq3Pc', 
        caption: 'Phim tài liệu: Dấu ấn Đại hội XI - Tầm nhìn mới' 
      }
    ]
  },
  {
    date: '2013',
    title: 'Hiến Pháp 2013 – Nền Tảng Pháp Lý Của Nhà Nước Pháp Quyền XHCN',
    content: `Năm 2013, Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam được thông qua, đánh dấu một bước phát triển quan trọng trong quá trình hoàn thiện thể chế chính trị ở Việt Nam. Hiến pháp năm 2013 đã chính thức hiến định bản chất của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là Nhà nước của Nhân dân, do Nhân dân và vì Nhân dân, qua đó khẳng định rõ quyền lực nhà nước thuộc về Nhân dân và được thực hiện thông qua hệ thống pháp luật.

Theo quan điểm của Chủ nghĩa xã hội khoa học, Nhà nước trong thời kỳ quá độ lên chủ nghĩa xã hội không chỉ giữ vai trò là công cụ quản lý xã hội mà còn là nhân tố tổ chức, định hướng và thúc đẩy sự phát triển xã hội theo con đường xã hội chủ nghĩa. Hiến pháp năm 2013 đã cụ thể hóa vai trò đó bằng việc đề cao và bảo đảm quyền con người, quyền và nghĩa vụ cơ bản của công dân, đồng thời xác lập nguyên tắc quyền lực nhà nước là thống nhất nhưng có sự phân công, phối hợp và kiểm soát giữa các cơ quan trong bộ máy nhà nước. Bên cạnh đó, Hiến pháp cũng khẳng định vị trí trung tâm của pháp luật trong quản lý xã hội, góp phần xây dựng nền dân chủ xã hội chủ nghĩa ngày càng hoàn thiện.

Với những nội dung mang tính nền tảng đó, giai đoạn 2013–2016 được xem là giai đoạn đặt cơ sở pháp lý quan trọng cho việc xây dựng và vận hành Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam trong thời kỳ mới.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2013/11/28/hien-phap-2013.jpg', 
        caption: 'Hiến pháp 2013 - Nền tảng pháp lý của Nhà nước pháp quyền XHCN' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2013/11/28/upload_1456/quoc-hoi-thong-qua-hien-phap.jpg', 
        caption: 'Quốc hội thông qua Hiến pháp 2013' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'zB8c9dCq4Qd', 
        caption: 'Toàn cảnh Đại hội Đảng lần thứ XI' 
      }
    ]
  },
  {
    date: '2016 – 2020',
    title: 'Cải Cách Bộ Máy Nhà Nước Và Phòng, Chống Tham Nhũng',
    content: `Từ năm 2016, quá trình hoàn thiện thể chế xã hội chủ nghĩa được đẩy mạnh thông qua cải cách tổ chức bộ máy nhà nước và tăng cường phòng, chống tham nhũng. Đây là yêu cầu khách quan xuất phát từ thực tiễn phát triển kinh tế thị trường định hướng xã hội chủ nghĩa, nơi tồn tại nhiều thành phần kinh tế đan xen.

Theo lý luận CNXH khoa học, để bảo đảm bản chất xã hội chủ nghĩa, Nhà nước phải hoạt động liêm chính, hiệu lực và hiệu quả, đặt lợi ích của Nhân dân lên trên hết. Vì vậy, việc tinh gọn bộ máy, cải cách hành chính và đấu tranh chống tham nhũng không chỉ mang ý nghĩa quản lý mà còn mang ý nghĩa bảo vệ bản chất của chế độ xã hội chủ nghĩa.

Trong giai đoạn này, vai trò của Nhà nước pháp quyền XHCN được thể hiện rõ thông qua việc tăng cường kỷ cương pháp luật, củng cố niềm tin của Nhân dân và tạo môi trường ổn định cho phát triển kinh tế – xã hội.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2020/12/15/cai-cach-bo-may-nha-nuoc.jpg', 
        caption: 'Cải cách bộ máy nhà nước giai đoạn 2016-2020' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2020/12/15/upload_1890/phong-chong-tham-nhung.jpg', 
        caption: 'Đấu tranh phòng, chống tham nhũng' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'aC9d8eBq5Re', 
        caption: 'Việt Nam hội nhập: Hành trình 2011-2015' 
      }
    ]
  },
  {
    date: '2021 – Nay',
    title: 'Hoàn Thiện Nhà Nước Pháp Quyền XHCN Gắn Với Tầm Nhìn Phát Triển Dài Hạn',
    content: `Từ năm 2021 đến nay, Việt Nam bước vào giai đoạn hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa theo hướng hiện đại, gắn với Chiến lược phát triển kinh tế – xã hội giai đoạn 2021–2030 và tầm nhìn phát triển đất nước đến năm 2045. Đây là giai đoạn thể hiện rõ sự chuyển dịch từ yêu cầu phát triển kinh tế đơn thuần sang yêu cầu phát triển toàn diện, bền vững trên nền tảng thể chế chính trị và pháp luật ngày càng hoàn thiện.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/04/27/vietnam-economy-growth.jpg', 
        caption: 'Việt Nam 2045 - Tầm nhìn phát triển dài hạn' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2022/12/29/upload_1987/digital-vietnam.jpg', 
        caption: 'Chuyển đổi số và hội nhập quốc tế' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'dF2h1eEq8Uh', 
        caption: 'Khát vọng Việt Nam 2045' 
      }
    ]
  }
];

// --- COMPONENT CHÍNH với giao diện giống các timeline trước ---
export function Timeline2011() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState<boolean>(false);

  // Gom tất cả media thành một mảng
  const allMedia = DATA_2011.flatMap(event => 
    [...event.images, ...event.videos].map(m => ({ 
      ...m, 
      eventDate: event.date, 
      eventTitle: event.title 
    }))
  );

  const featuredMedia = allMedia.slice(0, 8);

  return (
    <div className="space-y-8">
      {/* Header - Giống các timeline trước */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-900/20 to-teal-900/20 p-8 border border-teal-200/30 shadow-lg">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-700 to-teal-600 flex items-center justify-center shadow-xl">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 via-teal-700 to-cyan-800 tracking-tighter">
                  2011 - Nay
                </h2>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  Hoàn Thiện Thể Chế Xã Hội Chủ Nghĩa & Xây Dựng Nhà Nước Pháp Quyền
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Giống các timeline trước */}
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
            activeTab === 'timeline' 
              ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg' 
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
              ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <Film className="w-5 h-5" />
          <span>Thư viện tư liệu</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="min-h-[600px] animate-in fade-in duration-700">
        
        {/* TAB DÒNG THỜI GIAN - Layout giống các timeline trước */}
        {activeTab === 'timeline' && (
          <div className="space-y-12">
            {DATA_2011.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line and dot */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-teal-300 to-transparent hidden md:block"></div>
                <div className="absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-600 to-teal-500 border-4 border-white shadow-lg hidden md:block"></div>
                
                {/* Content Card */}
                <div className="ml-0 md:ml-12 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* Date Header */}
                  <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center shadow-md">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-4 py-2 bg-white rounded-full text-cyan-700 font-bold border border-cyan-200">
                          {event.date}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-3 leading-tight">{event.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content and Media - Layout 2/3 - 1/3 */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Text Content - Chiếm 2/3 */}
                      <div className="lg:col-span-2">
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

                      {/* Media Gallery - Chiếm 1/3 */}
                      <div className="lg:col-span-1">
                        <div className="sticky top-6 space-y-4">
                          {/* Media Header đơn giản */}
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-2 text-gray-700 font-semibold">
                              <ImageIcon className="w-5 h-5 text-cyan-600" />
                              <span>Tư liệu</span>
                            </div>
                          </div>
                          
                          {/* Hiển thị ảnh */}
                          {event.images.length > 0 && (
                            <div className="space-y-4">
                              {event.images.slice(0, 3).map((media, mediaIdx) => (
                                <div 
                                  key={`image-${mediaIdx}`} 
                                  className="group relative rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                                  onClick={() => setSelectedMedia(media)}
                                >
                                  <div className="aspect-video overflow-hidden bg-gray-100">
                                    <img 
                                      src={media.src} 
                                      alt={media.caption}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      loading="lazy"
                                      onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/600x400/0891b2/ffffff?text=Tư+Liệu+Lịch+Sử";
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </div>
                                  <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        Ảnh
                                      </span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800 line-clamp-2">{media.caption}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Hiển thị video */}
                          {event.videos.length > 0 && (
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                              {event.videos.map((media, mediaIdx) => (
                                <div 
                                  key={`video-${mediaIdx}`} 
                                  className="group relative rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                                  onClick={() => setSelectedMedia(media)}
                                >
                                  <div className="aspect-video overflow-hidden bg-gray-100">
                                    <div className="relative w-full h-full">
                                      <img 
                                        src={`https://img.youtube.com/vi/${media.src}/hqdefault.jpg`}
                                        alt={media.caption}
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 to-teal-900/50 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                          <Play className="w-8 h-8 text-white" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        Video
                                      </span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800 line-clamp-2">{media.caption}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB THƯ VIỆN TƯ LIỆU - Giống các timeline trước */}
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
                            e.currentTarget.src = "https://placehold.co/600x400/0891b2/ffffff?text=Ảnh+Tư+Liệu";
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
                          <div className="w-12 h-12 rounded-full bg-cyan-600/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-700 transition-colors">
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
                        <div className={`w-2 h-2 rounded-full ${
                          media.type === 'image' ? 'bg-cyan-500' : 'bg-teal-500'
                        }`}></div>
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
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Xem tất cả {allMedia.length} tư liệu
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Media Modal - Giống các timeline trước */}
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
            className="absolute top-4 right-4 text-white hover:text-cyan-300 transition-colors p-2 bg-black/50 rounded-full z-10"
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
                      e.currentTarget.src = "https://placehold.co/800x600/0891b2/ffffff?text=Không+thể+tải+ảnh";
                    }}
                  />
                </div>
                <div className="p-6 bg-gray-800 border-t border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">{selectedMedia.caption}</h3>
                  <p className="text-gray-300 text-sm">Ảnh tư liệu lịch sử</p>
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
                  <h3 className="text-xl font-bold text-white mb-2">{selectedMedia.caption}</h3>
                  <p className="text-gray-300 text-sm">Video tư liệu lịch sử</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
        <p>Nguồn tư liệu: Bảo tàng Lịch sử Quân sự Việt Nam, Thông tấn xã Việt Nam</p>
        <p className="mt-1">© 2011-2024 - Hoàn thiện thể chế xã hội chủ nghĩa Việt Nam</p>
      </div>
    </div>
  );
}
