'use client';

import { useState } from 'react';
import { Timeline1945 } from '@/components/timeline/timeline-1945';
import { Timeline1954 } from '@/components/timeline/timeline-1954';
import { Timeline1975 } from '@/components/timeline/timeline-1975';
import { Timeline1986 } from '@/components/timeline/timeline-1986';
import { Timeline1991 } from '@/components/timeline/timeline-1991';
import { Timeline2011 } from '@/components/timeline/timeline-2011';

const TIMELINE_YEARS = [
  { 
    year: 1945, 
    label: '1945', 
    title: 'Cách Mạng Tháng Tám',
    position: 'left'
  },
  { 
    year: 1954, 
    label: '1954', 
    title: 'Điện Biên Phủ',
    position: 'right' 
  },
  { 
    year: 1975, 
    label: '1975', 
    title: 'Thống Nhất Đất Nước',
    position: 'left' 
  },
  { 
    year: 1986, 
    label: '1986', 
    title: 'Đổi Mới',
    position: 'right' 
  },
  { 
    year: 1991, 
    label: '1991', 
    title: 'Đại Hội VII',
    position: 'left' 
  },
  { 
    year: 2011, 
    label: '2011', 
    title: 'Đại Hội XI',
    position: 'right' 
  },
];

export default function Home() {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const renderTimeline = () => {
    switch (activeYear) {
      case 1945:
        return <Timeline1945 />;
      case 1954:
        return <Timeline1954 />;
      case 1975:
        return <Timeline1975 />;
      case 1986:
        return <Timeline1986 />;
      case 1991:
        return <Timeline1991 />;
      case 2011:
        return <Timeline2011 />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-16 border-b border-border/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            Hành Trình Lịch Sử
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Theo dõi sự phát triển và tiến hóa qua các mốc thời gian quan trọng
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Timeline Section - Desktop */}
        <div className="hidden lg:block relative mb-20">
          {/* Main vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/80 to-primary" />
          
          {/* Timeline Items */}
          <div className="space-y-32 py-8">
            {TIMELINE_YEARS.map((item, index) => {
              const isActive = activeYear === item.year;
              const isLeft = item.position === 'left';
              
              return (
                <div
                  key={item.year}
                  className={`relative flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Content */}
                  <div className="w-1/2">
                    <div className={`${isLeft ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                      <button
                        onClick={() => setActiveYear(item.year)}
                        className={`group inline-block text-left transition-all duration-300 hover:scale-[1.02] ${
                          isLeft ? 'text-right' : 'text-left'
                        }`}
                      >
                        <div className={`rounded-2xl border-2 p-6 backdrop-blur-sm transition-all ${
                          isActive 
                            ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10' 
                            : 'border-border/50 bg-card/80 hover:border-primary/50 hover:bg-card'
                        }`}>
                          {/* Year Badge */}
                          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 transition-all ${
                            isActive 
                              ? 'bg-primary text-primary-foreground scale-110' 
                              : 'bg-secondary text-secondary-foreground group-hover:bg-primary/20'
                          }`}>
                            <span className="text-lg font-bold">{item.label}</span>
                          </div>
                          
                          {/* Title */}
                          <h3 className={`text-2xl font-bold mb-3 ${
                            isActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {item.title}
                          </h3>
                          
                          {/* Description */}
                          <p className={`text-sm ${
                            isActive ? 'text-primary/80' : 'text-muted-foreground'
                          }`}>
                            Nhấn để xem chi tiết
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Timeline Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center z-10">
                    <div className={`relative transition-all duration-300 ${
                      isActive ? 'scale-125' : 'scale-100'
                    }`}>
                      {/* Outer circle */}
                      <div className={`absolute inset-0 rounded-full transition-all ${
                        isActive ? 'animate-ping bg-primary/40' : 'bg-transparent'
                      }`} />
                      
                      {/* Middle circle */}
                      <div className={`absolute inset-0 rounded-full transition-all ${
                        isActive ? 'bg-primary/20' : 'bg-transparent'
                      }`} />
                      
                      {/* Inner circle */}
                      <div className={`relative w-8 h-8 rounded-full border-4 border-background transition-all ${
                        isActive ? 'bg-primary scale-110' : 'bg-primary/50'
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section - Mobile */}
        <div className="lg:hidden mb-8">
          <div className="space-y-4">
            {TIMELINE_YEARS.map((item) => {
              const isActive = activeYear === item.year;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                    isActive 
                      ? 'border-primary bg-primary/10 shadow-lg' 
                      : 'border-border/50 bg-card hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Year Circle */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      <span className="font-bold">{item.label}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Nhấn để xem chi tiết
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    <div className={`transition-transform ${
                      isActive ? 'rotate-90' : ''
                    }`}>
                      <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8">
          {activeYear ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm overflow-hidden shadow-xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 border-b border-border/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                      <div>
                        <h2 className="text-3xl font-bold text-primary">
                          {TIMELINE_YEARS.find(item => item.year === activeYear)?.title}
                        </h2>
                        <p className="text-muted-foreground mt-1">
                          Chi tiết về sự kiện lịch sử
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-md">
                        {activeYear}
                      </div>
                      <button
                        onClick={() => setActiveYear(null)}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Đóng chi tiết"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {renderTimeline()}
                </div>
              </div>
            </div>
          ) : (
            /* Placeholder khi chưa chọn mốc */
            <div className="text-center py-20 animate-in fade-in duration-700">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 mb-6">
                  <svg className="w-12 h-12 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Chọn một mốc thời gian
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Nhấn vào bất kỳ mốc nào trên timeline để xem thông tin chi tiết
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {TIMELINE_YEARS.map((item) => (
                    <button
                      key={item.year}
                      onClick={() => setActiveYear(item.year)}
                      className="px-5 py-2 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                    >
                      {item.label} • {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
