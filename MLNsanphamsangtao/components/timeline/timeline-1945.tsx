'use client';

import React, { useState } from 'react';
import { Calendar, Image as ImageIcon, Video, Play, ChevronRight, ExternalLink } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption: string;
  author?: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  content: string;
  media: MediaItem[];
}

const eventData: TimelineEvent = {
  date: '02/09/1945',
  title: 'Tuyên Ngôn Độc Lập Và Xác Lập Con Đường Phát Triển Của Dân Tộc',
  content: `Ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa. Văn kiện này không chỉ khẳng định quyền tự do, độc lập của dân tộc Việt Nam mà còn thể hiện tư tưởng nhất quán của Người: độc lập dân tộc phải gắn liền với con đường tiến lên chủ nghĩa xã hội.

Ngay sau khi giành chính quyền, Hồ Chí Minh xác định nhiệm vụ trung tâm là củng cố chính quyền cách mạng, bảo vệ thành quả cách mạng và xây dựng nền tảng cho một xã hội mới. Theo tư tưởng của Người, Việt Nam lựa chọn con đường quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa – phù hợp với đặc điểm là một nước thuộc địa, nông nghiệp lạc hậu.`,
  media: [
    { 
      type: 'image', 
      src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ho-chi-minh-doc-tuyen-ngon.jpg', 
      caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình',
      author: 'Tư liệu lịch sử'
    },
    { 
      type: 'image', 
      src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ba-dinh-1945.jpg', 
      caption: 'Quảng trường Ba Đình ngày 2/9/1945',
      author: 'Tư liệu lịch sử'
    },
    { 
      type: 'video', 
      src: 'dQw4w9WgXcQ', 
      caption: 'Toàn cảnh Lễ Tuyên ngôn Độc lập 2/9/1945',
      author: 'Tư liệu lịch sử'
    }
  ]
};

export function HistoryEventCard() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const handleNextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % eventData.media.length);
  };

  const handlePrevMedia = () => {
    setActiveMediaIndex((prev) => (prev - 1 + eventData.media.length) % eventData.media.length);
  };

  const activeMedia = eventData.media[activeMediaIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-amber-600">
              {eventData.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {eventData.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Content Header */}
              <div className="p-6 md:p-8 bg-gradient-to-r from-red-50 to-amber-50 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="font-semibold text-gray-700">Nội dung lịch sử</span>
                  </div>
                  <div className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200">
                    Mốc lịch sử quan trọng
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  {eventData.content.split('\n\n').map((paragraph, idx) => (
                    <div key={idx} className="mb-6">
                      <p className="text-gray-800 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-xl">
                      <div className="text-2xl font-bold text-red-700">2</div>
                      <div className="text-sm text-gray-600 mt-1">Ảnh tư liệu</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-xl">
                      <div className="text-2xl font-bold text-amber-700">1</div>
                      <div className="text-sm text-gray-600 mt-1">Video tư liệu</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-gray-700">1945</div>
                      <div className="text-sm text-gray-600 mt-1">Năm lịch sử</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Media Gallery */}
          <div className="lg:col-span-5">
            <div className="sticky top-8 space-y-6">
              {/* Main Media Display */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${activeMedia.type === 'image' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
                      <span className="font-semibold text-white">
                        {activeMedia.type === 'image' ? 'ẢNH TƯ LIỆU' : 'VIDEO TƯ LIỆU'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300">
                      {activeMediaIndex + 1} / {eventData.media.length}
                    </div>
                  </div>
                  
                  {/* Media Container */}
                  <div className="relative rounded-xl overflow-hidden bg-black/20">
                    {activeMedia.type === 'image' ? (
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={activeMedia.src} 
                          alt={activeMedia.caption}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/800x600/1f2937/ffffff?text=Tư+Liệu+Lịch+Sử";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <button
                          onClick={() => setSelectedMedia(activeMedia)}
                          className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg text-white hover:bg-black/70 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="aspect-video relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-amber-900/40"></div>
                        <img 
                          src={`https://img.youtube.com/vi/${activeMedia.src}/maxresdefault.jpg`}
                          alt={activeMedia.caption}
                          className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => setSelectedMedia(activeMedia)}
                            className="w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform group"
                          >
                            <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Media Info */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {activeMedia.caption}
                    </h3>
                    <div className="flex items-center justify-between text-gray-300">
                      <span className="text-sm">{activeMedia.author}</span>
                      {activeMedia.type === 'video' && (
                        <span className="text-sm px-2 py-1 bg-white/10 rounded-full">4K</span>
                      )}
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={handlePrevMedia}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                      Trước
                    </button>
                    <button
                      onClick={handleNextMedia}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      Tiếp theo
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-3 gap-4">
                {eventData.media.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMediaIndex(index)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeMediaIndex === index 
                        ? 'border-red-500 ring-2 ring-red-500/20' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <div className="aspect-square relative">
                      {media.type === 'image' ? (
                        <img 
                          src={media.src} 
                          alt={media.caption}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/400x400/1f2937/ffffff?text=Tư+Liệu";
                          }}
                        />
                      ) : (
                        <>
                          <img 
                            src={`https://img.youtube.com/vi/${media.src}/hqdefault.jpg`}
                            alt={media.caption}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </>
                      )}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex items-center justify-between">
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            media.type === 'image' 
                              ? 'bg-red-500/90 text-white' 
                              : 'bg-amber-500/90 text-white'
                          }`}>
                            {media.type === 'image' ? 'ẢNH' : 'VIDEO'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Thông tin tư liệu</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Chất lượng:</span>
                    <span className="font-medium text-gray-900">Độ phân giải cao</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Nguồn:</span>
                    <span className="font-medium text-gray-900">Lưu trữ quốc gia</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Trạng thái:</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Đã xác thực
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Media Content */}
            {selectedMedia.type === 'image' ? (
              <div className="relative">
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.caption}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.caption}</h3>
                  <p className="text-gray-300">Ảnh tư liệu lịch sử - {selectedMedia.author}</p>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="aspect-video">
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.caption}</h3>
                  <p className="text-gray-300">Video tư liệu lịch sử - {selectedMedia.author}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
