'use client';

import React, { useState } from 'react';
import { FileText, Film, Calendar, Play, Image as ImageIcon, Video, X, ChevronRight, ExternalLink, ChevronLeft, BookOpen, MapPin, Users, Flag } from 'lucide-react';

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
  // ... (giữ nguyên các sự kiện khác) ...
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-amber-50/20 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header với thiết kế mới */}
        <div className="mb-8 md:mb-12 relative">
          <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-red-600 to-amber-500 rounded-full"></div>
          
          <div className="ml-6">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-gradient-to-r from-red-100 to-amber-100 rounded-full border border-red-200">
              <Flag className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-700">MỐC LỊCH SỬ VIỆT NAM</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-700 to-amber-700 tracking-tight leading-tight">
              1945 - 1953
            </h1>
            
            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">
                  Khởi Đầu Con Đường Quá Độ Gián Tiếp
                </p>
                <p className="text-gray-600 mt-1">
                  Xây dựng nền móng cho chủ nghĩa xã hội tại Việt Nam
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-amber-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Tab Navigation - Thiết kế mới */}
        <div className="relative mb-8">
          <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-2xl p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
                activeTab === 'timeline' 
                  ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === 'timeline' ? 'bg-white/20' : 'bg-gray-100'}`}>
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold">Dòng thời gian</div>
                <div className="text-xs opacity-80 mt-1">{DATA_1945.length} sự kiện</div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
                activeTab === 'gallery' 
                  ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === 'gallery' ? 'bg-white/20' : 'bg-gray-100'}`}>
                <Film className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold">Thư viện tư liệu</div>
                <div className="text-xs opacity-80 mt-1">{allMedia.length} tư liệu</div>
              </div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px] animate-in fade-in duration-700">
          
          {/* TAB DÒNG THỜI GIAN - Thiết kế mới */}
          {activeTab === 'timeline' && (
            <div className="space-y-8">
              {/* Event Navigation - Thiết kế mới */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{activeEventIndex + 1}</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                        {DATA_1945.length}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">SỰ KIỆN LỊCH SỬ</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">{activeEvent.date}</span>
                        <span className="px-3 py-1 bg-gradient-to-r from-red-50 to-amber-50 text-red-700 font-bold rounded-full border border-red-200">
                          {activeEvent.title.split(' ').slice(0, 3).join(' ')}...
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevEvent}
                      className="px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-gray-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span className="hidden sm:inline">Trước</span>
                    </button>
                    <button
                      onClick={handleNextEvent}
                      className="px-5 py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-md"
                    >
                      <span className="hidden sm:inline">Tiếp theo</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Event Content - Thiết kế mới */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Text Content - Thiết kế mới */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Header card */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-white">{activeEvent.title}</h2>
                            <div className="flex items-center gap-2 mt-1">
                              <Calendar className="w-4 h-4 text-gray-300" />
                              <span className="text-gray-300">{activeEvent.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          <span className="text-white text-sm font-medium">LỊCH SỬ</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="prose prose-lg max-w-none">
                        <div className="text-gray-800 leading-relaxed space-y-6">
                          {activeEvent.content.split('\n\n').map((paragraph, pIdx) => (
                            <div key={pIdx} className="relative">
                              <div className="absolute -left-6 top-2 w-2 h-2 rounded-full bg-red-500"></div>
                              <p className="text-lg pl-4">
                                {paragraph}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats với thiết kế mới */}
                      <div className="mt-10 pt-8 border-t border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
                          <Users className="w-5 h-5 text-red-600" />
                          THÔNG TIN SỰ KIỆN
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
                            <div className="text-2xl font-bold text-red-700">
                              {activeEvent.media.filter(m => m.type === 'image').length}
                            </div>
                            <div className="text-sm text-red-600 mt-1 font-medium">Ảnh tư liệu</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
                            <div className="text-2xl font-bold text-amber-700">
                              {activeEvent.media.filter(m => m.type === 'video').length}
                            </div>
                            <div className="text-sm text-amber-600 mt-1 font-medium">Video tư liệu</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                            <div className="text-2xl font-bold text-gray-700">
                              {activeEvent.date.split('-')[0]}
                            </div>
                            <div className="text-sm text-gray-600 mt-1 font-medium">Năm lịch sử</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar với thiết kế mới */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Media Gallery */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center">
                            <Film className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white">TƯ LIỆU LỊCH SỬ</h3>
                            <p className="text-gray-300 text-sm">{activeEvent.media.length} tư liệu</p>
                          </div>
                        </div>
                      </div>

                      {/* Media List */}
                      <div className="space-y-3">
                        {activeEvent.media.map((media, mediaIdx) => (
                          <div 
                            key={mediaIdx} 
                            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-white/10"
                            onClick={() => setSelectedMedia(media)}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                media.type === 'image' 
                                  ? 'bg-gradient-to-br from-red-500/30 to-red-600/30' 
                                  : 'bg-gradient-to-br from-amber-500/30 to-amber-600/30'
                              }`}>
                                {media.type === 'image' ? (
                                  <ImageIcon className="w-6 h-6 text-red-300" />
                                ) : (
                                  <Play className="w-6 h-6 text-amber-300" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-xs font-bold uppercase ${
                                    media.type === 'image' ? 'text-red-300' : 'text-amber-300'
                                  }`}>
                                    {media.type === 'image' ? 'ẢNH' : 'VIDEO'}
                                  </span>
                                  <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-white">
                                    {mediaIdx + 1}
                                  </span>
                                </div>
                                <p className="text-white font-medium text-sm line-clamp-2">
                                  {media.caption}
                                </p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white flex-shrink-0 mt-1" />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 text-center">
                        <button
                          onClick={() => setActiveTab('gallery')}
                          className="text-sm text-amber-300 hover:text-amber-200 font-medium inline-flex items-center gap-1"
                        >
                          Xem tất cả tư liệu
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Navigation */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-red-600" />
                      DANH SÁCH SỰ KIỆN
                    </h4>
                    <div className="space-y-2">
                      {DATA_1945.slice(0, 5).map((event, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveEventIndex(idx)}
                          className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                            activeEventIndex === idx
                              ? 'bg-gradient-to-r from-red-50 to-amber-50 border-2 border-red-200 shadow-md'
                              : 'hover:bg-gray-50 border border-gray-100'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <div className={`w-2 h-2 rounded-full ${
                                  activeEventIndex === idx ? 'bg-red-500' : 'bg-gray-300'
                                }`}></div>
                                <span className={`font-bold ${
                                  activeEventIndex === idx ? 'text-red-700' : 'text-gray-700'
                                }`}>
                                  {event.date}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 line-clamp-2">{event.title}</p>
                            </div>
                            {activeEventIndex === idx && (
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center">
                                <ChevronRight className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB THƯ VIỆN TƯ LIỆU - Thiết kế mới */}
          {activeTab === 'gallery' && (
            <div className="space-y-8">
              {/* Stats Header */}
              <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 border border-red-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Tổng số tư liệu', value: allMedia.length, color: 'red' },
                    { label: 'Ảnh tư liệu', value: allMedia.filter(m => m.type === 'image').length, color: 'red' },
                    { label: 'Video tư liệu', value: allMedia.filter(m => m.type === 'video').length, color: 'amber' },
                    { label: 'Sự kiện lịch sử', value: DATA_1945.length, color: 'gray' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-200 hover:shadow-md transition-shadow duration-300">
                      <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Grid - Thiết kế mới */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(showAllMedia ? allMedia : featuredMedia).map((media, idx) => (
                  <div 
                    key={idx} 
                    className="group relative rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    onClick={() => setSelectedMedia(media)}
                  >
                    {/* Media Preview với overlay đẹp hơn */}
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                        </>
                      ) : (
                        <div className="relative w-full h-full">
                          <img 
                            src={`https://img.youtube.com/vi/${media.src}/maxresdefault.jpg`}
                            alt={media.caption}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://img.youtube.com/vi/${media.src}/hqdefault.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                            <div className="w-12 h-12 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Badge */}
                      <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold ${
                        media.type === 'image' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-amber-500 text-white'
                      }`}>
                        {media.type === 'image' ? 'ẢNH' : 'VIDEO'}
                      </div>
                    </div>

                    {/* Media Info với thiết kế mới */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${media.type === 'image' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            {media.type === 'image' ? 'TƯ LIỆU ẢNH' : 'TƯ LIỆU VIDEO'}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {media.eventDate}
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-900 line-clamp-2 mb-2 text-sm" title={media.caption}>
                        {media.caption}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2" title={media.eventTitle}>
                        {media.eventTitle}
                      </p>
                    </div>

                    {/* Hover Overlay mới */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center mx-auto mb-3 shadow-lg">
                          {media.type === 'image' ? (
                            <ImageIcon className="w-7 h-7 text-white" />
                          ) : (
                            <Play className="w-7 h-7 text-white" />
                          )}
                        </div>
                        <div className="text-white font-bold mb-1">Xem chi tiết</div>
                        <div className="text-white/80 text-sm">Nhấn để mở rộng</div>
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
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg"
                  >
                    <Film className="w-5 h-5" />
                    Xem tất cả {allMedia.length} tư liệu
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Media Modal với thiết kế mới */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia(null);
            }}
            className="absolute top-6 right-6 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-gray-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <div className="flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.caption}
                    className="w-full h-auto max-h-[70vh] object-contain animate-in fade-in duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/800x600/ef4444/ffffff?text=Không+thể+tải+ảnh+tư+liệu";
                    }}
                  />
                </div>
                <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedMedia.caption}</h3>
                      <p className="text-gray-300 mt-1">Tư liệu lịch sử Việt Nam</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="relative aspect-video w-full bg-black">
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
                <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedMedia.caption}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium">
                          VIDEO TƯ LIỆU
                        </span>
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          4K CHẤT LƯỢNG CAO
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
