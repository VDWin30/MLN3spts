'use client';

import React, { useState } from 'react';
import { FileText, Film, Calendar, Play, Image as ImageIcon, Video, X, ChevronRight, ChevronLeft, Book, ZoomIn, Eye, Film as FilmIcon } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU (giữ nguyên) ---
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
  }
];

// --- 2. COMPONENT CHÍNH VỚI BỐ CỤC MỚI ---
export function Timeline1945() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState<boolean>(false);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [mediaViewMode, setMediaViewMode] = useState<'featured' | 'grid' | 'list'>('featured');

  const allMedia = DATA_1945.flatMap(event => 
    event.media.map(m => ({ 
      ...m, 
      eventDate: event.date, 
      eventTitle: event.title 
    }))
  );

  const activeEvent = DATA_1945[activeEventIndex];
  const eventMedia = activeEvent.media;
  const eventImages = eventMedia.filter(m => m.type === 'image');
  const eventVideos = eventMedia.filter(m => m.type === 'video');
  const featuredMedia = allMedia.slice(0, 8);

  const handleNextEvent = () => {
    setActiveEventIndex((prev) => (prev + 1) % DATA_1945.length);
  };

  const handlePrevEvent = () => {
    setActiveEventIndex((prev) => (prev - 1 + DATA_1945.length) % DATA_1945.length);
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
            <div className="flex gap-2">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{DATA_1945.length}</div>
                <div className="text-sm text-gray-600">Sự kiện lịch sử</div>
              </div>
              <div className="h-12 w-px bg-gray-300 mx-4"></div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{allMedia.length}</div>
                <div className="text-sm text-gray-600">Tư liệu đa phương tiện</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation với Event Navigation */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Tab Buttons */}
        <div className="flex space-x-2 flex-1">
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

        {/* Event Navigation (chỉ hiện trong tab timeline) */}
        {activeTab === 'timeline' && (
          <div className="flex items-center gap-4 bg-white rounded-xl p-2 border border-gray-200">
            <button
              onClick={handlePrevEvent}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Trước</span>
            </button>
            
            <div className="text-center px-4">
              <div className="text-sm text-gray-500 mb-1">Sự kiện</div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {activeEventIndex + 1}
                </div>
                <span className="font-bold text-gray-900">{activeEvent.date}</span>
              </div>
            </div>
            
            <button
              onClick={handleNextEvent}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <span className="hidden sm:inline text-sm font-medium">Tiếp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="min-h-[600px] animate-in fade-in duration-700">
        
        {/* TAB DÒNG THỜI GIAN - BỐ CỤC MỚI */}
        {activeTab === 'timeline' && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Event Header */}
            <div className="bg-gradient-to-r from-red-50 via-amber-50 to-red-50 p-6 md:p-8 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-red-200 mb-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium text-red-700">{activeEvent.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{activeEvent.title}</h2>
                  
                  {/* Media Stats */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-red-600" />
                      <span className="font-medium">{eventImages.length} ảnh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-amber-600" />
                      <span className="font-medium">{eventVideos.length} video</span>
                    </div>
                  </div>
                </div>
                
                {/* View Mode Toggle */}
                <div className="flex bg-white rounded-lg p-1 border border-gray-200">
                  <button
                    onClick={() => setMediaViewMode('featured')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      mediaViewMode === 'featured' 
                        ? 'bg-red-50 text-red-700' 
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                    title="Chế độ nổi bật"
                  >
                    <Eye className="w-4 h-4 inline mr-2" />
                    <span className="hidden sm:inline">Nổi bật</span>
                  </button>
                  <button
                    onClick={() => setMediaViewMode('grid')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      mediaViewMode === 'grid' 
                        ? 'bg-red-50 text-red-700' 
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                    title="Chế độ lưới"
                  >
                    <FilmIcon className="w-4 h-4 inline mr-2" />
                    <span className="hidden sm:inline">Lưới</span>
                  </button>
                  <button
                    onClick={() => setMediaViewMode('list')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      mediaViewMode === 'list' 
                        ? 'bg-red-50 text-red-700' 
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                    title="Chế độ danh sách"
                  >
                    <Book className="w-4 h-4 inline mr-2" />
                    <span className="hidden sm:inline">Danh sách</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              
              {/* Left Column - Text Content */}
              <div className="lg:col-span-2 p-6 md:p-8 border-r border-gray-200">
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {activeEvent.content.split('\n\n').map((paragraph, pIdx) => (
                      <div key={pIdx} className="relative">
                        <p className="text-lg pl-6 border-l-4 border-red-200 py-2">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline Events List (Sidebar on mobile) */}
                <div className="mt-12 lg:hidden">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Book className="w-5 h-5 text-gray-700" />
                      <h3 className="font-semibold">Các sự kiện khác</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {DATA_1945.map((event, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveEventIndex(idx)}
                          className={`w-full text-left p-4 rounded-lg transition-all ${
                            activeEventIndex === idx
                              ? 'bg-white border-2 border-red-200 shadow-sm'
                              : 'hover:bg-white/50'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <div className={`w-2 h-2 rounded-full ${
                                  activeEventIndex === idx ? 'bg-red-600' : 'bg-gray-300'
                                }`}></div>
                                <span className={`font-medium ${
                                  activeEventIndex === idx ? 'text-red-700' : 'text-gray-700'
                                }`}>
                                  {event.date}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 line-clamp-1">{event.title}</p>
                            </div>
                            {activeEventIndex === idx && (
                              <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Media Display */}
              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                        <FilmIcon className="w-5 h-5 text-red-600" />
                      </div>
                      Tư liệu sự kiện
                    </h3>

                    {/* FEATURED VIEW */}
                    {mediaViewMode === 'featured' && (
                      <div className="space-y-6">
                        {/* Featured Video (nếu có) */}
                        {eventVideos.length > 0 && (
                          <div className="bg-gray-900 rounded-xl overflow-hidden">
                            <div className="relative aspect-video">
                              <img 
                                src={`https://img.youtube.com/vi/${eventVideos[0].src}/maxresdefault.jpg`}
                                alt={eventVideos[0].caption}
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() => setSelectedMedia(eventVideos[0])}
                                className="absolute inset-0 flex items-center justify-center group"
                              >
                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                                  <Play className="w-8 h-8 text-gray-900" />
                                </div>
                              </button>
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Play className="w-4 h-4 text-white" />
                                  <span className="text-white text-sm font-medium">VIDEO NỔI BẬT</span>
                                </div>
                                <h4 className="text-white font-bold text-sm line-clamp-2">{eventVideos[0].caption}</h4>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Featured Images Grid */}
                        {eventImages.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <ImageIcon className="w-5 h-5 text-red-600" />
                              Hình ảnh tư liệu
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              {eventImages.slice(0, 4).map((image, idx) => (
                                <div 
                                  key={idx}
                                  className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-red-300 transition-all hover:shadow-md cursor-pointer"
                                  onClick={() => setSelectedMedia(image)}
                                >
                                  <div className="w-full h-full bg-gray-100 relative overflow-hidden">
                                    <img 
                                      src={image.src}
                                      alt={image.caption}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/10 group-hover:via-black/5 group-hover:to-black/0 transition-all duration-300" />
                                  </div>
                                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                                      <ZoomIn className="w-3 h-3 text-gray-900" />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-xs text-white bg-black/70 backdrop-blur-sm px-2 py-1 rounded line-clamp-1">
                                      {image.caption}
                                    </p>
                                  </div>
                                </div>
                              ))}
                              
                              {eventImages.length > 4 && (
                                <button
                                  onClick={() => setMediaViewMode('grid')}
                                  className="aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-red-300 transition-colors flex flex-col items-center justify-center text-gray-600 hover:text-red-600"
                                >
                                  <div className="text-2xl font-bold mb-1">+{eventImages.length - 4}</div>
                                  <span className="text-xs">Xem thêm ảnh</span>
                                </button>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Other Videos (nếu có nhiều video) */}
                        {eventVideos.length > 1 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Video className="w-5 h-5 text-amber-600" />
                              Video khác
                            </h4>
                            <div className="space-y-3">
                              {eventVideos.slice(1).map((video, idx) => (
                                <div 
                                  key={idx}
                                  className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50/30 transition-all cursor-pointer"
                                  onClick={() => setSelectedMedia(video)}
                                >
                                  <div className="relative flex-shrink-0">
                                    <div className="w-16 h-12 rounded-md overflow-hidden bg-gray-900">
                                      <img 
                                        src={`https://img.youtube.com/vi/${video.src}/mqdefault.jpg`}
                                        alt={video.caption}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white">
                                        <Play className="w-3 h-3 text-gray-900" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 text-sm line-clamp-2">{video.caption}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">VIDEO</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* GRID VIEW */}
                    {mediaViewMode === 'grid' && (
                      <div className="grid grid-cols-2 gap-3">
                        {eventMedia.map((media, idx) => (
                          <div 
                            key={idx}
                            className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all cursor-pointer"
                            onClick={() => setSelectedMedia(media)}
                          >
                            <div className="w-full h-full bg-gray-100 relative overflow-hidden">
                              {media.type === 'image' ? (
                                <img 
                                  src={media.src}
                                  alt={media.caption}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              ) : (
                                <>
                                  <img 
                                    src={`https://img.youtube.com/vi/${media.src}/hqdefault.jpg`}
                                    alt={media.caption}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white">
                                      <Play className="w-4 h-4 text-gray-900" />
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="absolute top-2 right-2">
                              <div className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                                media.type === 'image' 
                                  ? 'bg-red-600 text-white' 
                                  : 'bg-amber-600 text-white'
                              }`}>
                                {media.type === 'image' ? 'ẢNH' : 'VIDEO'}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* LIST VIEW */}
                    {mediaViewMode === 'list' && (
                      <div className="space-y-3">
                        {eventMedia.map((media, idx) => (
                          <div 
                            key={idx}
                            className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-all cursor-pointer"
                            onClick={() => setSelectedMedia(media)}
                          >
                            <div className="relative flex-shrink-0">
                              <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                                {media.type === 'image' ? (
                                  <img 
                                    src={media.src}
                                    alt={media.caption}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <img 
                                    src={`https://img.youtube.com/vi/${media.src}/mqdefault.jpg`}
                                    alt={media.caption}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              {media.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-4 h-4 bg-white/90 rounded-full flex items-center justify-center">
                                    <Play className="w-2 h-2 text-gray-900" />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  media.type === 'image' 
                                    ? 'bg-red-100 text-red-700' 
                                    : 'bg-amber-100 text-amber-700'
                                }`}>
                                  {media.type === 'image' ? 'ẢNH' : 'VIDEO'}
                                </span>
                              </div>
                              <p className="text-sm font-medium text-gray-900 line-clamp-2">{media.caption}</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <ZoomIn className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Timeline Events List (Desktop Sidebar) */}
                  <div className="hidden lg:block border-t border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Dòng thời gian</h4>
                    <div className="space-y-2">
                      {DATA_1945.map((event, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveEventIndex(idx)}
                          className={`w-full text-left p-3 rounded-lg transition-all text-sm ${
                            activeEventIndex === idx
                              ? 'bg-red-50 text-red-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{event.date}</span>
                            {activeEventIndex === idx && (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>
                          <p className="text-xs mt-1 line-clamp-1">{event.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB THƯ VIỆN TƯ LIỆU (giữ nguyên) */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            {/* Media Stats */}
            <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-3xl font-bold text-red-600">{allMedia.length}</div>
                  <div className="text-sm text-gray-600">Tổng số tư liệu</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-3xl font-bold text-red-600">
                    {allMedia.filter(m => m.type === 'image').length}
                  </div>
                  <div className="text-sm text-gray-600">Ảnh tư liệu</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-3xl font-bold text-amber-600">
                    {allMedia.filter(m => m.type === 'video').length}
                  </div>
                  <div className="text-sm text-gray-600">Video tư liệu</div>
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

      {/* Media Modal (giữ nguyên) */}
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
            className="absolute top-4 right-4 text-white hover:text-red-300 transition-colors p-2 bg-black/50 rounded-full z-10"
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
                      e.currentTarget.src = "https://placehold.co/800x600/ef4444/ffffff?text=Không+thể+tải+ảnh";
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
    </div>
  );
}
