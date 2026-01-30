'use client';

import React, { useState } from 'react';
import { Calendar, Play, Image as ImageIcon, X, ChevronRight, ChevronLeft, Book, Film, ArrowRight, ZoomIn, Download, Share2, Bookmark, Grid, List, Maximize2, Volume2 } from 'lucide-react';

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
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ho-chi-minh-doc-tuyen-ngon.jpg', 
        caption: 'Quảng trường Ba Đình ngày 2/9/1945'
      },
      { 
        type: 'video', 
        src: 'dNC5TgBHQ6c', 
        caption: 'Phóng sự về ngày Độc lập'
      }
    ]
  },
  // ... (các sự kiện khác giữ nguyên)
];

// --- COMPONENT CHÍNH VỚI BỐ CỤC MỚI ---
const Timeline1945 = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState<boolean>(false);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [mediaViewMode, setMediaViewMode] = useState<'grid' | 'list' | 'featured'>('featured');
  const [activeMediaType, setActiveMediaType] = useState<'all' | 'image' | 'video'>('all');

  const allMedia = DATA_1945.flatMap(event => 
    event.media.map(m => ({ 
      ...m, 
      eventDate: event.date, 
      eventTitle: event.title 
    }))
  );

  const activeEvent = DATA_1945[activeEventIndex];
  const eventMedia = activeEvent.media;
  
  // Phân loại media của sự kiện hiện tại
  const eventImages = eventMedia.filter(m => m.type === 'image');
  const eventVideos = eventMedia.filter(m => m.type === 'video');
  
  // Lọc media theo loại
  const filteredMedia = activeMediaType === 'all' 
    ? eventMedia 
    : eventMedia.filter(m => m.type === activeMediaType);

  const handleNextEvent = () => {
    setActiveEventIndex((prev) => (prev + 1) % DATA_1945.length);
  };

  const handlePrevEvent = () => {
    setActiveEventIndex((prev) => (prev - 1 + DATA_1945.length) % DATA_1945.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (giữ nguyên) */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">LỊCH SỬ VIỆT NAM</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
                <span className="font-bold">1945 - 1953</span>
                <br />
                <span className="text-gray-600">Khởi đầu con đường quá độ</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl">
                Xây dựng nền móng cho chủ nghĩa xã hội tại Việt Nam
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{DATA_1945.length} sự kiện</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <Film className="w-4 h-4" />
                  <span>{allMedia.length} tư liệu</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-px w-full bg-gray-200 mb-2">
            <div 
              className="h-px bg-red-600 transition-all duration-500"
              style={{ width: `${((activeEventIndex + 1) / DATA_1945.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Sự kiện {activeEventIndex + 1}</span>
            <span>của {DATA_1945.length}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Content & Media */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Event Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevEvent}
                className="group flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-red-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Sự kiện trước</span>
              </button>
              
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">HIỆN TẠI</div>
                <div className="text-2xl font-bold">{activeEvent.date}</div>
              </div>
              
              <button
                onClick={handleNextEvent}
                className="group flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-red-600 transition-colors"
              >
                <span className="hidden sm:inline">Sự kiện tiếp</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Event Content */}
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {activeEventIndex + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{activeEvent.title}</h2>
                </div>
                
                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6">
                    {activeEvent.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Media Section - BỐ CỤC MỚI */}
              <div className="mt-12">
                {/* Media Header with Stats and Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Tư liệu sự kiện</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <ImageIcon className="w-4 h-4 text-red-600" />
                          <span>{eventImages.length} ảnh</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4 text-blue-600" />
                          <span>{eventVideos.length} video</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Media Controls */}
                  <div className="flex items-center gap-2">
                    {/* Filter Buttons */}
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setActiveMediaType('all')}
                        className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                          activeMediaType === 'all' 
                            ? 'bg-white text-gray-900 shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Tất cả
                      </button>
                      <button
                        onClick={() => setActiveMediaType('image')}
                        className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                          activeMediaType === 'image' 
                            ? 'bg-white text-red-600 shadow-sm' 
                            : 'text-gray-600 hover:text-red-600'
                        }`}
                      >
                        Ảnh
                      </button>
                      <button
                        onClick={() => setActiveMediaType('video')}
                        className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                          activeMediaType === 'video' 
                            ? 'bg-white text-blue-600 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        Video
                      </button>
                    </div>
                    
                    {/* View Mode Toggle */}
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setMediaViewMode('featured')}
                        className={`p-1.5 rounded-md ${
                          mediaViewMode === 'featured' 
                            ? 'bg-white text-gray-900' 
                            : 'text-gray-600'
                        }`}
                        title="Chế độ nổi bật"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setMediaViewMode('grid')}
                        className={`p-1.5 rounded-md ${
                          mediaViewMode === 'grid' 
                            ? 'bg-white text-gray-900' 
                            : 'text-gray-600'
                        }`}
                        title="Chế độ lưới"
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setMediaViewMode('list')}
                        className={`p-1.5 rounded-md ${
                          mediaViewMode === 'list' 
                            ? 'bg-white text-gray-900' 
                            : 'text-gray-600'
                        }`}
                        title="Chế độ danh sách"
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Media Display Area */}
                {filteredMedia.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
                    <Film className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Không có tư liệu nào cho loại này</p>
                  </div>
                ) : (
                  <>
                    {/* FEATURED VIEW (Mặc định) */}
                    {mediaViewMode === 'featured' && (
                      <div className="space-y-6">
                        {/* Video nổi bật (nếu có) */}
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
                                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                                  <Play className="w-8 h-8 text-gray-900" />
                                </div>
                              </button>
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <div className="flex items-center gap-2 mb-2">
                                  <Play className="w-4 h-4 text-white" />
                                  <span className="text-white text-sm font-medium">VIDEO NỔI BẬT</span>
                                </div>
                                <h4 className="text-white font-bold text-lg">{eventVideos[0].caption}</h4>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Grid ảnh (2-4 ảnh đầu tiên) */}
                        {eventImages.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <ImageIcon className="w-5 h-5 text-red-600" />
                              Hình ảnh tư liệu
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                              {eventImages.slice(0, 4).map((image, idx) => (
                                <div 
                                  key={idx}
                                  className="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-red-300 transition-all hover:shadow-lg cursor-pointer"
                                  onClick={() => setSelectedMedia(image)}
                                >
                                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                    <img 
                                      src={image.src}
                                      alt={image.caption}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/10 group-hover:via-black/5 group-hover:to-black/0 transition-all duration-300" />
                                  </div>
                                  <div className="p-3">
                                    <p className="text-sm font-medium line-clamp-2">{image.caption}</p>
                                  </div>
                                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                                      <ZoomIn className="w-4 h-4 text-gray-900" />
                                    </div>
                                  </div>
                                </div>
                              ))}
                              
                              {/* Thêm nút xem thêm nếu có nhiều hơn 4 ảnh */}
                              {eventImages.length > 4 && (
                                <button
                                  onClick={() => setActiveMediaType('image')}
                                  className="aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-red-300 transition-colors flex flex-col items-center justify-center text-gray-600 hover:text-red-600"
                                >
                                  <div className="text-2xl font-bold mb-2">+{eventImages.length - 4}</div>
                                  <span className="text-sm">Xem thêm ảnh</span>
                                </button>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Danh sách video còn lại */}
                        {eventVideos.length > 1 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Play className="w-5 h-5 text-blue-600" />
                              Video khác
                            </h4>
                            <div className="space-y-3">
                              {eventVideos.slice(1).map((video, idx) => (
                                <div 
                                  key={idx}
                                  className="group flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer"
                                  onClick={() => setSelectedMedia(video)}
                                >
                                  <div className="relative flex-shrink-0">
                                    <div className="w-24 h-16 rounded-md overflow-hidden bg-gray-900">
                                      <img 
                                        src={`https://img.youtube.com/vi/${video.src}/mqdefault.jpg`}
                                        alt={video.caption}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white">
                                        <Play className="w-4 h-4 text-gray-900" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 line-clamp-2">{video.caption}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">VIDEO</span>
                                      <span className="text-xs text-gray-500">Tư liệu lịch sử</span>
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredMedia.map((media, idx) => (
                          <div 
                            key={idx}
                            className="group relative rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                            onClick={() => setSelectedMedia(media)}
                          >
                            <div className="aspect-video bg-gray-100 relative overflow-hidden">
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
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white">
                                      <Play className="w-5 h-5 text-gray-900" />
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className={`flex items-center gap-1 text-xs ${
                                  media.type === 'image' ? 'text-red-600' : 'text-blue-600'
                                }`}>
                                  {media.type === 'image' ? (
                                    <>
                                      <ImageIcon className="w-3 h-3" />
                                      <span>ẢNH</span>
                                    </>
                                  ) : (
                                    <>
                                      <Play className="w-3 h-3" />
                                      <span>VIDEO</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm font-medium line-clamp-2">{media.caption}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* LIST VIEW */}
                    {mediaViewMode === 'list' && (
                      <div className="space-y-3">
                        {filteredMedia.map((media, idx) => (
                          <div 
                            key={idx}
                            className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all cursor-pointer"
                            onClick={() => setSelectedMedia(media)}
                          >
                            <div className="relative flex-shrink-0">
                              <div className="w-20 h-14 rounded-md overflow-hidden bg-gray-100">
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
                                  <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                                    <Play className="w-3 h-3 text-gray-900" />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-1">
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  media.type === 'image' 
                                    ? 'bg-red-100 text-red-700' 
                                    : 'bg-blue-100 text-blue-700'
                                }`}>
                                  {media.type === 'image' ? 'ẢNH' : 'VIDEO'}
                                </span>
                                <span className="text-xs text-gray-500">Tư liệu {activeEvent.date}</span>
                              </div>
                              <p className="font-medium text-gray-900 line-clamp-1">{media.caption}</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <ZoomIn className="w-5 h-5 text-gray-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar (giữ nguyên) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Timeline Events List */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Book className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold">Dòng thời gian</h3>
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
                        <p className="text-sm text-gray-600 line-clamp-2">{event.title}</p>
                      </div>
                      {activeEventIndex === idx && (
                        <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Media Stats */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
              <h4 className="font-semibold text-gray-900 mb-4">Thống kê tư liệu</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{eventImages.length}</div>
                      <div className="text-sm text-gray-600">Hình ảnh</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{eventVideos.length}</div>
                    <div className="text-sm text-gray-600">Video</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500"
                    style={{ 
                      width: `${(eventMedia.length / Math.max(...DATA_1945.map(e => e.media.length))) * 100}%` 
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  Sự kiện này có {eventMedia.length} tư liệu, nhiều nhất trong dòng thời gian
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal xem media (giữ nguyên) */}
        {selectedMedia && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedMedia(null)}
          >
            {/* ... (modal code giữ nguyên) ... */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline1945;
