'use client';

import { useState } from 'react';
import { Timeline1945 } from '@/components/timeline/timeline-1945';
import { Timeline1954 } from '@/components/timeline/timeline-1954';
import { Timeline1975 } from '@/components/timeline/timeline-1975';
import { Timeline1986 } from '@/components/timeline/timeline-1986';
import { Timeline1991 } from '@/components/timeline/timeline-1991';
import { Timeline2011 } from '@/components/timeline/timeline-2011';

// Danh sách các mốc timeline với vị trí hiển thị (trái/phải)
const TIMELINE_YEARS = [
  { 
    year: 1945, 
    label: '1945', 
    title: 'Cách Mạng Tháng Tám',
    position: 'left' // 'left' hoặc 'right'
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
  const [activeYear, setActiveYear] = useState(1945);

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
        return <Timeline1945 />;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-12 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Chủ Nghĩa Xã Hội Việt Nam
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Hành trình lịch sử từ 1945 đến 2011
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mobile selector */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {TIMELINE_YEARS.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeYear === item.year
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Vertical line in center */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary" />

            {/* Timeline items */}
            <div className="space-y-24">
              {TIMELINE_YEARS.map((item, index) => {
                const isActive = activeYear === item.year;
                const isLeft = item.position === 'left';
                
                return (
                  <div
                    key={item.year}
                    className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Content box */}
                    <div
                      className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'} cursor-pointer transition-all duration-300 ${
                        isActive ? 'scale-105' : 'opacity-70 hover:opacity-100 hover:scale-[1.02]'
                      }`}
                      onClick={() => setActiveYear(item.year)}
                    >
                      <div className="bg-card rounded-lg border border-border/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                          isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.label}
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Nhấn để xem chi tiết
                        </p>
                      </div>
                    </div>

                    {/* Circle on timeline */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-background transition-all duration-300 ${
                          isActive ? 'w-6 h-6 bg-primary' : 'bg-primary/50'
                        } ${isActive ? 'ring-4 ring-primary/20' : ''}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content area (for mobile and active year display) */}
          <div className="mt-8 lg:mt-16">
            <div className="bg-card rounded-lg border border-border/30 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h2 className="text-2xl font-bold text-primary">
                  {TIMELINE_YEARS.find(item => item.year === activeYear)?.title}
                </h2>
                <span className="ml-auto px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {activeYear}
                </span>
              </div>
              
              <div className="animate-in fade-in duration-300">
                {renderTimeline()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
