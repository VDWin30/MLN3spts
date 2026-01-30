'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon, Book, Scale, Shield, Users, Target, Globe } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 2011 ---
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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/T3uV9wXeZy0a', 
        caption: 'Đường Đến Ngày Vinh Quang', 
        author: 'Bức Tường' 
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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/U4vX0xYfAz1b', 
        caption: 'Tự Hào Đảng Cộng Sản Việt Nam', 
        author: 'Trọng Loan' 
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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/V5wY1yZgBx2c', 
        caption: 'Việt Nam Ơi', 
        author: 'Minh Beta' 
      }
    ]
  },
  {
    date: '2021 – Nay',
    title: 'Hoàn Thiện Nhà Nước Pháp Quyền XHCN Gắn Với Tầm Nhìn Phát Triển Dài Hạn',
    content: `Từ năm 2021 đến nay, Việt Nam bước vào giai đoạn hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa theo hướng hiện đại, gắn với Chiến lược phát triển kinh tế – xã hội giai đoạn 2021–2030 và tầm nhìn phát triển đất nước đến năm 2045. Đây là giai đoạn thể hiện rõ sự chuyển dịch từ yêu cầu phát triển kinh tế đơn thuần sang yêu cầu phát triển toàn diện, bền vững trên nền tảng thể chế chính trị và pháp luật ngày càng hoàn thiện.

Theo quan điểm của Chủ nghĩa xã hội khoa học, đây là bước phát triển tất yếu của thời kỳ quá độ lên chủ nghĩa xã hội, khi nhiệm vụ trung tâm của Nhà nước không chỉ dừng lại ở việc thúc đẩy tăng trưởng kinh tế mà còn tập trung vào hoàn thiện thể chế, phát huy dân chủ xã hội chủ nghĩa, đồng thời bảo đảm và bảo vệ quyền con người, quyền công dân. Trong bối cảnh đó, Nhà nước pháp quyền xã hội chủ nghĩa được xác định là công cụ quan trọng để tổ chức, quản lý và định hướng sự phát triển xã hội theo đúng mục tiêu xã hội chủ nghĩa.

Trọng tâm của giai đoạn này được thể hiện thông qua việc xây dựng Nhà nước pháp quyền xã hội chủ nghĩa hoạt động ngày càng hiệu lực, hiệu quả; tiếp tục hoàn thiện hệ thống pháp luật theo hướng đồng bộ, thống nhất và khả thi; phát huy vai trò giám sát của Nhân dân và các tổ chức chính trị – xã hội trong quản lý nhà nước; đồng thời gắn việc thực thi pháp quyền với quá trình chuyển đổi số và hội nhập quốc tế sâu rộng. Những định hướng này tạo nền tảng chính trị – pháp lý vững chắc, góp phần đưa Việt Nam phát triển ổn định và tiến từng bước vững chắc trên con đường đi lên chủ nghĩa xã hội.`,
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
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/X7yA3aBiDz4e', 
        caption: 'Việt Nam Tôi Yêu', 
        author: 'Nguyễn Đức Cường' 
      }
    ]
  },
  {
    date: 'Tổng kết',
    title: 'Kết Luận Chung',
    content: `Từ năm 2011 đến nay, quá trình hoàn thiện thể chế xã hội chủ nghĩa ở Việt Nam là sự tiếp nối và phát triển của con đường quá độ gián tiếp lên chủ nghĩa xã hội, phù hợp với lý luận Chủ nghĩa xã hội khoa học và điều kiện thực tiễn của đất nước. Qua từng giai đoạn, Nhà nước pháp quyền xã hội chủ nghĩa ngày càng được hoàn thiện, góp phần bảo đảm ổn định chính trị, phát triển kinh tế và nâng cao đời sống Nhân dân.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/12/31/tong-ket-2011-2023.jpg', 
        caption: 'Việt Nam 2011-2023: Hành trình hoàn thiện thể chế XHCN' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/12/31/upload_1987/nen-tang-phap-ly-vung-chac.jpg', 
        caption: 'Nền tảng pháp lý vững chắc cho phát triển đất nước' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'cE1g0dDq7Tg', 
        caption: 'Việt Nam - Hành trình phát triển thần kỳ' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Z9cC5dDkFb6g', 
        caption: 'Một Thời Để Nhớ', 
        author: 'Trần Tiến' 
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline2011() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_2011.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_2011.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-900/20 to-teal-900/20 p-8 border border-teal-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-700 to-teal-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-teal-700 tracking-tighter">
                2011 - Nay
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Hoàn Thiện Thể Chế Xã Hội Chủ Nghĩa & Xây Dựng Nhà Nước Pháp Quyền
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
            label="Thông Tin Chiến Lược" 
            icon={<FileText className="w-5 h-5" />} 
            count={DATA_2011.length}
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
            label="Bài Hát Hiện Đại" 
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
            {DATA_2011.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-600 via-teal-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-800 text-sm font-bold border border-cyan-200">
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
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-cyan-600" />
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-600 text-white text-xs flex items-center justify-center font-bold">
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
              className="absolute -top-12 right-0 text-white hover:text-cyan-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
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
          ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg' 
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
