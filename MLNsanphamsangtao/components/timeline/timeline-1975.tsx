import React from 'react';

interface Milestone {
  date: string;
  title: string;
  description: string;
  images: Array<{ src: string; alt: string }>;
  videos: Array<{ id: string; title: string }>;
  music?: { name: string; artist: string; url: string };
}

const MILESTONES_1975: Milestone[] = [
  {
    date: '30/4/1975',
    title: 'Giải Phóng Sài Gòn - Thống Nhất Đất Nước',
    description: 'Quân Giải Phóng Nhân Dân Việt Nam tiến vào Sài Gòn, kết thúc cuộc chiến tranh chống Mỹ. Việt Nam được thống nhất dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.',
    images: [
      { src: '/images/1975-thong-nhat.jpg', alt: 'Giải phóng Sài Gòn 1975' },
    ],
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Phim tư liệu ngày giải phóng' },
    ],
    music: {
      name: 'Hành Tiến Thống Nhất Nước',
      artist: 'Bài hát cách mạng',
      url: 'https://example.com/thong-nhat.mp3',
    },
  },
  {
    date: '2/7/1975',
    title: 'Thành Lập Nước Việt Nam Xã Hội Chủ Nghĩa',
    description: 'Việt Nam Xã Hội Chủ Nghĩa chính thức được thành lập. Đất nước bước vào giai đoạn quá độ lên chủ nghĩa xã hội.',
    images: [
      { src: '/images/1975-thong-nhat.jpg', alt: 'Quốc kỳ Việt Nam' },
    ],
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Thành lập Nước VNXHCN' },
    ],
  },
];

export function Timeline1975() {
  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-4">
        <h2 className="text-3xl font-bold text-primary">1975</h2>
        <p className="text-muted-foreground mt-1">Giải Phóng Sài Gòn - Thống Nhất Đất Nước</p>
      </div>

      <div className="space-y-8">
        {MILESTONES_1975.map((milestone, idx) => (
          <div key={idx} className="border-l-2 border-primary pl-6 pb-8 relative">
            <div className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full" />
            <div className="mb-4">
              <p className="text-sm font-semibold text-primary">{milestone.date}</p>
              <h3 className="text-xl font-bold text-foreground mt-1">{milestone.title}</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{milestone.description}</p>

            {milestone.images.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">Hình Ảnh</p>
                <div className={`grid gap-4 ${milestone.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {milestone.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="bg-muted rounded-lg overflow-hidden h-48">
                      <img src={img.src || "/placeholder.svg"} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" onError={(e) => { e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fontSize='16' fill='%236b7280' textAnchor='middle' dominantBaseline='middle'%3EHình ảnh%3C/text%3E%3C/svg%3E`; }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {milestone.videos.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">Videos Tư Liệu</p>
                <div className="space-y-4">
                  {milestone.videos.map((video, vidIdx) => (
                    <div key={vidIdx} className="bg-muted rounded-lg overflow-hidden aspect-video">
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.id}`} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {milestone.music && (
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Bài Hát</p>
                <p className="text-xs text-muted-foreground mb-3">{milestone.music.name} - {milestone.music.artist}</p>
                <audio controls className="w-full">
                  <source src={milestone.music.url} type="audio/mpeg" />
                  Trình duyệt không hỗ trợ audio
                </audio>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
