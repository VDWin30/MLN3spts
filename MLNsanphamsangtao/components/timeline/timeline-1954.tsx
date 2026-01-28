/**
 * TIMELINE NĂM 1954: Chiến Thắng Điện Biên Phủ
 * 
 * CẤU TRÚC MỚI: HỖ TRỢ NHIỀU MILESTONE, HÌNH ẢNH, VIDEO VÀ LINK NHẠC
 */

interface Milestone {
  date: string;
  title: string;
  description: string;
  images: Array<{ src: string; alt: string }>;
  videos: Array<{ id: string; title: string }>;
  music?: { name: string; artist: string; url: string };
}

const MILESTONES_1954: Milestone[] = [
  {
    date: '7/5/1954',
    title: 'Chiến Thắng Điện Biên Phủ',
    description: 'Quân Giải Phóng Việt Nam dưới sự chỉ huy của tướng Võ Nguyên Giáp đạt chiến thắng vĩ đại tại Điện Biên Phủ, kết thúc cuộc chiến tranh chống thực dân Pháp. Đây là sự kiện lịch sử thay đổi cả tình hình Đông Nam Á.',
    images: [
      { src: '/images/1954-dien-bien-phu.jpg', alt: 'Chiến thắng Điện Biên Phủ 1954' },
    ],
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Phim tư liệu Điện Biên Phủ' },
    ],
    music: {
      name: 'Điện Biên Phủ Không Quên',
      artist: 'Ca khúc truyền thống',
      url: 'https://example.com/dien-bien-phu.mp3',
    },
  },
  {
    date: '21/7/1954',
    title: 'Hiệp Định Genève',
    description: 'Hiệp định Genève được ký kết, chính thức kết thúc cuộc chiến tranh Đông Dương. Việt Nam tạm thời chia làm 2 miền để chuẩn bị cho cuộc bầu cử thống nhất.',
    images: [
      { src: '/images/1954-dien-bien-phu.jpg', alt: 'Hiệp định Genève' },
    ],
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Hiệp định Genève' },
    ],
  },
];

export function Timeline1954() {
  return (
    <div className="space-y-8">
      {/* Tiêu đề năm */}
      <div className="border-b border-border pb-4">
        <h2 className="text-3xl font-bold text-primary">1954</h2>
        <p className="text-muted-foreground mt-1">Chiến Thắng Điện Biên Phủ - Độc Lập Hoàn Toàn</p>
      </div>

      {/* Danh sách các milestone */}
      <div className="space-y-8">
        {MILESTONES_1954.map((milestone, idx) => (
          <div key={idx} className="border-l-2 border-primary pl-6 pb-8 relative">
            {/* Dot trên timeline */}
            <div className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full" />

            {/* Milestone header */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-primary">{milestone.date}</p>
              <h3 className="text-xl font-bold text-foreground mt-1">{milestone.title}</h3>
            </div>

            {/* Milestone description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {milestone.description}
            </p>

            {/* Images gallery */}
            {milestone.images.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">Hình Ảnh</p>
                <div className={`grid gap-4 ${milestone.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {milestone.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="bg-muted rounded-lg overflow-hidden h-48">
                      <img
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fontSize='16' fill='%236b7280' textAnchor='middle' dominantBaseline='middle'%3EHình ảnh%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {milestone.videos.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">Videos Tư Liệu</p>
                <div className="space-y-4">
                  {milestone.videos.map((video, vidIdx) => (
                    <div key={vidIdx} className="bg-muted rounded-lg overflow-hidden aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Music */}
            {milestone.music && (
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Bài Hát</p>
                <p className="text-xs text-muted-foreground mb-3">
                  {milestone.music.name} - {milestone.music.artist}
                </p>
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
