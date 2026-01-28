'use client';

import { useState } from 'react';
import { Timeline1945 } from '@/components/timeline/timeline-1945';
import { Timeline1954 } from '@/components/timeline/timeline-1954';
import { Timeline1975 } from '@/components/timeline/timeline-1975';
import { Timeline1986 } from '@/components/timeline/timeline-1986';
import { Timeline1991 } from '@/components/timeline/timeline-1991';
import { Timeline2011 } from '@/components/timeline/timeline-2011';

// Danh sách các mốc timeline với vị trí hiển thị
const TIMELINE_YEARS = [
  { year: 1945, label: '1945', title: 'Cách Mạng Tháng Tám' },
  { year: 1954, label: '1954', title: 'Điện Biên Phủ' },
  { year: 1975, label: '1975', title: 'Thống Nhất Đất Nước' },
  { year: 1986, label: '1986', title: 'Đổi Mới' },
  { year: 1991, label: '1991', title: 'Đại Hội VII' },
  { year: 2011, label: '2011', title: 'Đại Hội XI' },
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

  const activeIndex = TIMELINE_YEARS.findIndex((item) => item.year === activeYear);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-12 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Chủ Nghĩa Xã Hội Việt Nam
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Lịch sử từ 1945 đến 2011
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-8 lg:gap-12 min-h-screen">
          {/* Left: Vertical Timeline Line with Years */}
          <div className="hidden lg:flex flex-col items-center w-48 relative py-12">
            {/* Main vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary" />

            {/* Timeline points and labels */}
            <div className="relative space-y-16 w-full">
              {TIMELINE_YEARS.map((item, idx) => {
                const isActive = activeYear === item.year;
                const circleSize = isActive ? 'w-8 h-8' : 'w-5 h-5';
                const circleBg = isActive ? 'bg-primary' : 'bg-primary/30';

                return (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className="relative flex flex-col items-center cursor-pointer group"
                    aria-label={`Go to ${item.year}`}
                  >
                    {/* Circle - appears on timeline line */}
                    <div
                      className={`${circleSize} ${circleBg} rounded-full border-2 border-background absolute left-1/2 -translate-x-1/2 transition-all duration-300 shadow-sm z-10`}
                    />

                    {/* Year label and title */}
                    <div className={`text-center pt-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                      <p className={`text-lg font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                        {item.label}
                      </p>
                      <p className={`text-xs ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                        {item.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="flex-1">
            {/* Mobile selector */}
            <div className="lg:hidden mb-6 overflow-x-auto pb-2">
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

            {/* Content */}
            <div className="bg-card rounded-lg border border-border/30 p-8 shadow-sm transition-all duration-500">
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
