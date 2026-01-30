'use client';

import React, { useState } from 'react';
import { FileText, Film, Calendar, Play, Image as ImageIcon, Video, X, ChevronRight, ChevronLeft, Grid, List } from 'lucide-react';

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
  }
];

// --- COMPONENT CHÍNH VỚI BỐ CỤC CUỘN CHUỘT ---
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
        
        {/* TAB DÒNG THỜI GIAN - BỐ CỤC CUỘN CHUỘT */}
        {activeTab === 'timeline' && (
          <div className="space-y-12">
            {DATA_1945.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line and dot */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-amber-300 to-transparent hidden md:block"></div>
                <div className="absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-red-600 to-amber-500 border-4 border-white shadow-lg hidden md:block"></div>
                
                {/* Content Card */}
                <div className="ml-0 md:ml-12 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* Date Header */}
                  <div className="bg-gradient-to-r from-red-50 to-amber-50 p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
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
                      
                      {/* Media Stats */}
                      <div className="hidden md:block text-right">
                        <div className="text-sm text-gray-600 mb-2">Tư liệu sự kiện</div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <ImageIcon className="w-4 h-4 text-red-600" />
                            <span className="font-bold">{event.media.filter(m => m.type === 'image').length}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4 text-amber-600" />
                            <span className="font-bold">{event.media.filter(m => m.type === 'video').length}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content and Media - BỐ CỤC MỚI */}
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Text Content - Chiếm 70% */}
                      <div className="lg:w-7/12">
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

                      {/* Media Gallery - Chiếm 30% với bố cục mới */}
                      {event.media.length > 0 && (
                        <div className="lg:w-5/12">
                          <div className="sticky top-6 space-y-6">
                            {/* Media Header */}
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <Film className="w-5 h-5 text-red-600" />
                                Tư liệu sự kiện
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full font-medium">
                                  {event.media.length} tư liệu
                                </span>
                              </div>
                            </div>

                            {/* Phân loại và hiển thị media */}
                            {event.media.length === 1 ? (
                              // Nếu chỉ có 1 media item
                              <div className="space-y-4">
                                <div 
                                  className="group relative rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                                  onClick={() => setSelectedMedia(event.media[0])}
                                >
                                  <div className="aspect-video overflow-hidden bg-gray-100">
                                    {event.media[0].type === 'image' ? (
                                      <img 
                                        src={event.media[0].src} 
                                        alt={event.media[0].caption}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      />
                                    ) : (
                                      <div className="relative w-full h-full">
                                        <img 
                                          src={`https://img.youtube.com/vi/${event.media[0].src}/hqdefault.jpg`}
                                          alt={event.media[0].caption}
                                          className="w-full h-full object-cover opacity-60"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-amber-900/50 flex items-center justify-center">
                                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <Play className="w-8 h-8 text-white" />
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <div className={`w-3 h-3 rounded-full ${event.media[0].type === 'image' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
                                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        {event.media[0].type === 'image' ? 'Ảnh tư liệu' : 'Video tư liệu'}
                                      </span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800 line-clamp-2">{event.media[0].caption}</p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              // Nếu có nhiều media items
                              <div className="space-y-6">
                                {/* Video đầu tiên (nếu có) */}
                                {event.media.filter(m => m.type === 'video').length > 0 && (
                                  <div className="space-y-3">
                                    <h5 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                      <Video className="w-4 h-4 text-amber-600" />
                                      Video tư liệu
                                    </h5>
                                    {event.media.filter(m => m.type === 'video').map((video, vIdx) => (
                                      <div 
                                        key={`video-${vIdx}`}
                                        className="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-amber-300 transition-all duration-300 cursor-pointer bg-gradient-to-r from-amber-50/50 to-white"
                                        onClick={() => setSelectedMedia(video)}
                                      >
                                        <div className="flex">
                                          <div className="w-24 h-16 flex-shrink-0 relative overflow-hidden">
                                            <img 
                                              src={`https://img.youtube.com/vi/${video.src}/mqdefault.jpg`}
                                              alt={video.caption}
                                              className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                              <Play className="w-6 h-6 text-white" />
                                            </div>
                                          </div>
                                          <div className="flex-1 p-3">
                                            <div className="flex items-center gap-2 mb-1">
                                              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                              <span className="text-xs font-semibold text-amber-700">VIDEO</span>
                                            </div>
                                            <p className="text-sm font-medium text-gray-800 line-clamp-2">{video.caption}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Ảnh (nếu có) */}
                                {event.media.filter(m => m.type === 'image').length > 0 && (
                                  <div className="space-y-3">
                                    <h5 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                      <ImageIcon className="w-4 h-4 text-red-600" />
                                      Ảnh tư liệu
                                    </h5>
                                    <div className="grid grid-cols-2 gap-3">
                                      {event.media.filter(m => m.type === 'image').map((image, iIdx) => (
                                        <div 
                                          key={`image-${iIdx}`}
                                          className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-300 cursor-pointer"
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
                                          <div className="absolute top-1.5 right-1.5">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                                              <ImageIcon className="w-3 h-3 text-red-600" />
                                            </div>
                                          </div>
                                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-xs text-white font-medium line-clamp-1">{image.caption}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* View All Button (nếu có nhiều media) */}
                            {event.media.length > 3 && (
                              <div className="pt-4 border-t border-gray-100">
                                <button
                                  onClick={() => {
                                    setActiveTab('gallery');
                                    setShowAllMedia(true);
                                  }}
                                  className="w-full text-center py-2 text-sm text-red-600 hover:text-red-800 font-medium hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  Xem tất cả {event.media.length} tư liệu
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
