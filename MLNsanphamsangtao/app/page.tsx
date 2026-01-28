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
        {/* Timeline Section - Desktop */}
        <div className="hidden lg:block relative">
          {/* Main vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/50" />
          
          {/* Timeline Items */}
          <div className="space-y-16 py-4">
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
                    <div className={`${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <button
                        onClick={() => setActiveYear(item.year)}
                        className={`group inline-block w-full max-w-xs ${isLeft ? 'text-right ml-auto' : 'text-left mr-auto'}`}
                      >
                        <div className={`rounded-lg border p-5 transition-all ${
                          isActive 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border/50 bg-card hover:border-primary/30'
                        }`}>
                          {/* Year */}
                          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 ${
                            isActive 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground group-hover:bg-primary/20'
                          }`}>
                            <span className="text-sm font-bold">{item.label}</span>
                          </div>
                          
                          {/* Title */}
                          <h3 className={`text-lg font-bold mb-1 ${
                            isActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {item.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-xs text-muted-foreground">
                            Nhấn để xem chi tiết
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Timeline Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                    <div className={`w-4 h-4 rounded-full border-2 border-background transition-all ${
                      isActive ? 'bg-primary scale-125' : 'bg-primary/40'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section - Mobile */}
        <div className="lg:hidden mb-6">
          <div className="space-y-3">
            {TIMELINE_YEARS.map((item) => {
              const isActive = activeYear === item.year;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`w-full p-4 rounded-lg border transition-all text-left ${
                    isActive 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border/50 bg-card hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Year Circle */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <span className="text-sm font-bold">{item.label}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`font-bold ${isActive ? 'text-primary' : 'text-foreground'}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Nhấn để xem chi tiết
                      </p>
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
            <div className="animate-in fade-in duration-300">
              <div className="bg-card rounded-lg border border-border/30 shadow-sm overflow-hidden">
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
