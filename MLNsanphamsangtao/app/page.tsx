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
    title: 'Cách Mạng Tháng Tám'
  },
  { 
    year: 1954, 
    label: '1954', 
    title: 'Điện Biên Phủ'
  },
  { 
    year: 1975, 
    label: '1975', 
    title: 'Thống Nhất Đất Nước'
  },
  { 
    year: 1986, 
    label: '1986', 
    title: 'Đổi Mới'
  },
  { 
    year: 1991, 
    label: '1991', 
    title: 'Đại Hội VII'
  },
  { 
    year: 2011, 
    label: '2011', 
    title: 'Đại Hội XI'
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
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-12 border-b border-border/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Hành Trình Lịch Sử
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Theo dõi sự phát triển và tiến hóa qua các mốc thời gian quan trọng
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block mb-8">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-primary/30" />
            
            {/* Timeline Items - SỬ DỤNG GRID ĐỀU NHAU */}
            <div className="grid grid-cols-6 gap-0 relative">
              {TIMELINE_YEARS.map((item, index) => {
                const isActive = activeYear === item.year;
                
                return (
                  <div key={item.year} className="flex flex-col items-center px-2">
                    {/* Circle */}
                    <div className="relative z-10 mb-4">
                      <div className={`w-4 h-4 rounded-full border-2 border-background ${
                        isActive ? 'bg-primary scale-125' : 'bg-primary/40'
                      }`} />
                    </div>

                    {/* Content Card - CÙNG KÍCH THƯỚC */}
                    <button
                      onClick={() => setActiveYear(item.year)}
                      className={`w-full transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-[1.02]'}`}
                    >
                      <div className={`rounded-lg border p-4 text-center min-h-[120px] flex flex-col justify-center ${
                        isActive 
                          ? 'border-primary bg-primary/5 shadow-md' 
                          : 'border-border/50 bg-card hover:border-primary/30'
                      }`}>
                        {/* Year */}
                        <div className={`text-lg font-bold mb-1 ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          {item.label}
                        </div>
                        
                        {/* Title - CÙNG SỐ DÒNG */}
                        <div className={`text-sm font-medium mb-1 h-10 flex items-center justify-center ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          <span className="line-clamp-2 leading-tight">
                            {item.title}
                          </span>
                        </div>
                        
                        {/* Description */}
                        <div className="text-xs text-muted-foreground mt-1">
                          Nhấn để xem chi tiết
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Timeline */}
        <div className="lg:hidden mb-6">
          <div className="flex space-x-3 overflow-x-auto pb-4 px-1">
            {TIMELINE_YEARS.map((item) => {
              const isActive = activeYear === item.year;
              return (
                <div key={item.year} className="flex-shrink-0">
                  <button
                    onClick={() => setActiveYear(item.year)}
                    className={`w-28 transition-all ${isActive ? 'scale-105' : ''}`}
                  >
                    <div className={`rounded-lg border p-3 text-center min-h-[100px] flex flex-col justify-center ${
                      isActive 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border/50 bg-card hover:border-primary/30'
                    }`}>
                      {/* Year */}
                      <div className={`text-base font-bold mb-1 ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>
                        {item.label}
                      </div>
                      
                      {/* Title */}
                      <div className={`text-xs font-medium mb-1 h-8 flex items-center justify-center ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>
                        <span className="line-clamp-2 leading-tight">
                          {item.title}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <div className="text-[10px] text-muted-foreground">
                        Nhấn để xem chi tiết
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8">
          {activeYear ? (
            <div className="animate-in fade-in duration-300">
              <div className="bg-card rounded-lg border border-border/30 shadow-sm overflow-hidden">
                {/* Header with year and title */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b border-border/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <h2 className="text-2xl font-bold text-primary">
                        {TIMELINE_YEARS.find(item => item.year === activeYear)?.title}
                      </h2>
                    </div>
                    <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                      {activeYear}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {renderTimeline()}
                </div>
              </div>
            </div>
          ) : (
            /* Placeholder khi chưa chọn mốc */
            <div className="text-center py-12">
              <div className="bg-card rounded-lg border border-dashed border-border/30 p-8 max-w-md mx-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Chọn một mốc thời gian
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nhấn vào bất kỳ mốc nào trên timeline để xem thông tin chi tiết
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
