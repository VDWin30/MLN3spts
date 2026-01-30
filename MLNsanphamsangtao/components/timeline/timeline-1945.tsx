'use client';

import React, { useState } from 'react';
import { Calendar, Play, Image as ImageIcon, X, ChevronRight, ChevronLeft, Book, Film, ArrowRight, ZoomIn, Download, Share2, Bookmark } from 'lucide-react';

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
    content: `Ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa. Văn kiện này không chỉ khẳng định quyền tự do, độc lập của dân tộc Việt Nam mà còn thể hiện tư tưởng nhất quán của Người: độc lập dân tộc phải gắn liền với con đường tiến lên chủ nghĩa xã hội.`,
    media: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ho-chi-minh-doc-tuyen-ngon.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình'
      }
    ]
  },
];

// --- 2. COMPONENT CHÍNH ---
const Timeline1945 = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showAllMedia, setShowAllMedia] = useState<boolean>(false);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Minimalist Design */}
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
          
          {/* Progress Indicator */}
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
          
          {/* Left Column - Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Event Navigation - Minimal */}
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

              {/* Media Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Tư liệu liên quan</h3>
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    Xem tất cả
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeEvent.media.map((media, idx) => (
                    <div 
                      key={idx}
                      className="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-red-300 transition-colors cursor-pointer"
                      onClick={() => setSelectedMedia(media)}
                    >
                      <div className="aspect-video relative bg-gray-100">
                        {media.type === 'image' ? (
                          <>
                            <img 
                              src={media.src}
                              alt={media.caption}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:via-black/10 group-hover:to-black/20 transition-all duration-300" />
                          </>
                        ) : (
                          <>
                            <img 
                              src={`https://img.youtube.com/vi/${media.src}/maxresdefault.jpg`}
                              alt={media.caption}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-black/0 flex items-center justify-center">
                              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                                <Play className="w-6 h-6 text-gray-900" />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
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
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
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

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-gray-900">{DATA_1945.length}</div>
                <div className="text-sm text-gray-600 mt-1">Sự kiện</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-gray-900">{allMedia.length}</div>
                <div className="text-sm text-gray-600 mt-1">Tư liệu</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setActiveTab(activeTab === 'timeline' ? 'gallery' : 'timeline')}
                className="w-full flex items-center justify-between p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Film className="w-5 h-5" />
                  <span>Xem thư viện tư liệu</span>
                </div>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="w-full flex items-center justify-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 transition-colors text-gray-700">
                <Bookmark className="w-5 h-5" />
                <span>Lưu để đọc sau</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="mt-12 animate-in fade-in duration-300">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Thư viện tư liệu</h2>
                  <p className="text-gray-600">Bộ sưu tập hình ảnh và video lịch sử</p>
                </div>
                <button
                  onClick={() => setActiveTab('timeline')}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Quay lại dòng thời gian
                </button>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex gap-2 mb-8">
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg">
                  Tất cả ({allMedia.length})
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                  Ảnh ({allMedia.filter(m => m.type === 'image').length})
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                  Video ({allMedia.filter(m => m.type === 'video').length})
                </button>
              </div>
            </div>

            {/* Media Grid - Modern Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {(showAllMedia ? allMedia : featuredMedia).map((media, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedMedia(media)}
                >
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
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
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white">
                            <Play className="w-6 h-6 text-gray-900" />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <ZoomIn className="w-4 h-4" />
                          <span className="text-sm font-medium">Xem chi tiết</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        media.type === 'image' 
                          ? 'bg-red-600 text-white' 
                          : 'bg-blue-600 text-white'
                      }`}>
                        {media.type === 'image' ? 'ẢNH' : 'VIDEO'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-2">{media.eventDate}</div>
                    <h4 className="font-medium text-gray-900 line-clamp-2 mb-2">
                      {media.caption}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {media.eventTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {allMedia.length > 8 && !showAllMedia && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAllMedia(true)}
                  className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-3"
                >
                  <span>Xem thêm {allMedia.length - 8} tư liệu</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Media Modal - Modern Design */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => {
            setSelectedMedia(null);
            setIsPlaying(false);
          }}
        >
          <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
            <button className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
                setIsPlaying(false);
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div 
            className="relative w-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="max-h-[70vh] overflow-auto">
                  <img 
                    src={selectedMedia.src}
                    alt={selectedMedia.caption}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{selectedMedia.caption}</h3>
                      <p className="text-gray-600">Tư liệu lịch sử Việt Nam</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-black rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedMedia.src}?autoplay=1&rel=0&modestbranding=1`}
                    title={selectedMedia.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-6 bg-gray-900 border-t border-gray-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{selectedMedia.caption}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                          VIDEO TƯ LIỆU
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline1945;
