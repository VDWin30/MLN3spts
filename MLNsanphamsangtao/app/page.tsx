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
    title: 'Miền Bắc bắt đầu quá độ lên CNXH'
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
    label: '2011 - Đến nay', 
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
        {/* Desktop Timeline - Hoàn chỉnh */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[8%] right-[8%] top-10 h-0.5 bg-primary/30" />
            
            {/* Timeline Items */}
            <div className="grid grid-cols-6 gap-0">
              {TIMELINE_YEARS.map((item) => {
                const isActive = activeYear === item.year;
                
                return (
                  <div key={item.year} className="flex flex-col items-center">
                    {/* Timeline point with circle */}
                    <div className="relative mb-6">
                      {/* Outer circle (active state) */}
                      {isActive && (
                        <div className="absolute inset-0 w-6 h-6 rounded-full bg-primary/20 animate-ping" />
                      )}
                      {/* Main circle */}
                      <div className={`relative w-4 h-4 rounded-full border-2 border-background z-10 ${
                        isActive ? 'bg-primary scale-125' : 'bg-primary/40'
                      }`} />
                    </div>

                    {/* Content Card */}
                    <button
                      onClick={() => setActiveYear(item.year)}
                      className="w-full px-1"
                    >
                      <div className={`rounded-xl border-2 p-4 text-center transition-all duration-300 ${
                        isActive 
                          ? 'border-primary bg-primary/5 shadow-lg scale-105' 
                          : 'border-border bg-card hover:border-primary/40 hover:shadow-md'
                      }`}>
                        {/* Year */}
                        <div className={`text-xl font-bold mb-2 ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          {item.label}
                        </div>
                        
                        {/* Title */}
                        <div className={`text-base font-semibold min-h-[48px] flex items-center justify-center ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          <div className="line-clamp-2 leading-tight">
                            {item.title}
                          </div>
                        </div>
                        
                        {/* Description (only shown on hover/active) */}
                        <div className={`text-xs text-muted-foreground mt-2 transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}>
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

        {/* Mobile Timeline */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto pb-4 space-x-3 px-2">
            {TIMELINE_YEARS.map((item) => {
              const isActive = activeYear === item.year;
              return (
                <div key={item.year} className="flex-shrink-0">
                  <button
                    onClick={() => setActiveYear(item.year)}
                    className="w-32"
                  >
                    <div className={`rounded-lg border p-3 text-center ${
                      isActive 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border bg-card'
                    }`}>
                      {/* Year */}
                      <div className={`text-lg font-bold mb-1 ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>
                        {item.label}
                      </div>
                      
                      {/* Title */}
                      <div className={`text-sm font-medium h-12 flex items-center justify-center ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>
                        <div className="line-clamp-2 leading-tight">
                          {item.title}
                        </div>
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
              <div className="bg-card rounded-xl border border-border/30 shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b border-border/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        activeYear === 1945 ? 'bg-red-500' :
                        activeYear === 1954 ? 'bg-blue-500' :
                        activeYear === 1975 ? 'bg-green-500' :
                        activeYear === 1986 ? 'bg-purple-500' :
                        activeYear === 1991 ? 'bg-yellow-500' :
                        'bg-orange-500'
                      }`} />
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">
                          {TIMELINE_YEARS.find(item => item.year === activeYear)?.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Năm {activeYear}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow">
                      {activeYear}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {renderTimeline()}
                </div>
              </div>
            </div>
          ) : (
            /* Placeholder */
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Chọn một mốc thời gian
                </h3>
                <p className="text-muted-foreground mb-8">
                  Nhấn vào bất kỳ năm nào trên timeline để khám phá sự kiện lịch sử
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {TIMELINE_YEARS.map((item) => (
                    <button
                      key={item.year}
                      onClick={() => setActiveYear(item.year)}
                      className="py-2 px-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                    >
                      <div className="font-bold">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.title}</div>
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
