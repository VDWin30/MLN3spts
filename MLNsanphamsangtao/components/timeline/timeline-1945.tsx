/**
 * TIMELINE NĂM 1945: Cách Mạng Tháng Tám
 * 
 * CẤU TRÚC MỚI: MỖI NĂM CÓ THỂ CÓ NHIỀU MILESTONE (MỐC SỰ KIỆN)
 * 
 * HƯỚNG DẪN CHỈNH SỬA:
 * 1. Mỗi milestone là 1 phần nội dung độc lập
 * 2. Có thể thêm nhiều HÌNH ẢNH trong 1 milestone (gallery)
 * 3. Có thể thêm nhiều VIDEO YouTube trong 1 milestone
 * 4. Sử dụng LINK NHẠC từ internet (không cần upload file)
 * 
 * TÌM NHANH:
 * - Ctrl+F "[EDIT MILESTONE]" → Thêm/sửa milestone
 * - Ctrl+F "[EDIT IMAGE]" → Thêm/sửa hình ảnh
 * - Ctrl+F "[EDIT VIDEO]" → Thêm/sửa video YouTube
 * - Ctrl+F "[EDIT MUSIC]" → Thêm/sửa nhạc
 */

interface Milestone {
  date: string;
  title: string;
  description: string;
  images: Array<{ src: string; alt: string }>;
  videos: Array<{ id: string; title: string }>;
  music?: { name: string; artist: string; url: string };
}

const MILESTONES_1945: Milestone[] = [
  {
    // [EDIT MILESTONE] - MILESTONE 1: THÁNG 8
    date: '19/8/1945',
    title: 'Cách Mạng Tháng Tám Bắt Đầu',
    description: 'Cách Mạng Tháng Tám bùng nổ trên toàn quốc dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Nhân dân từ Bắc vào Nam đứng lên giành chính quyền từ tay thực dân Pháp và phát xít Nhật.',
    images: [
      // [EDIT IMAGE] - Thêm/sửa các hình ảnh
      { src: '/images/1945-canh-mang.jpg', alt: 'Cách Mạng Tháng Tám 1945' },
      // { src: 'https://example.com/image2.jpg', alt: 'Hình ảnh thứ 2' },
    ],
    videos: [
      // [EDIT VIDEO] - Thêm/sửa video YouTube (thay VIDEO_ID)
      { id: 'dQw4w9WgXcQ', title: 'Phim tư liệu Cách Mạng Tháng Tám' },
    ],
    music: {
      // [EDIT MUSIC] - Thay link nhạc từ internet
      name: 'Tiến Quân Ca',
      artist: 'Văn Cao',
      url: 'https://example.com/tien-quan-ca.mp3',
    },
  },
  {
    // [EDIT MILESTONE] - MILESTONE 2: 2/9
    date: '2/9/1945',
    title: 'Tuyên Bố Độc Lập',
    description: 'Tại Quảng Trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh chính thức tuyên bố độc lập của Việt Nam. Việt Nam Dân chủ Cộng hòa chính thức thành lập.',
    images: [
      { src: '/images/1945-canh-mang.jpg', alt: 'Lễ tuyên bố độc lập Ba Đình' },
    ],
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Lễ tuyên bố độc lập' },
    ],
    music: {
      name: 'Quốc Ca Việt Nam',
      artist: 'Văn Cao',
      url: 'https://example.com/quoc-ca.mp3',
    },
  },
];

export function Timeline1945() {
  return (
    <div className="space-y-8">
      {/* Tiêu đề năm */}
      <div className="border-b border-border pb-4">
        <h2 className="text-3xl font-bold text-primary">1945</h2>
        <p className="text-muted-foreground mt-1">Cách Mạng Tháng Tám - Thành Lập Việt Nam Dân Chủ Cộng Hòa</p>
      </div>

      {/* Danh sách các milestone */}
      <div className="space-y-8">
        {MILESTONES_1945.map((milestone, idx) => (
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

            {/* Images gallery - Có thể có nhiều ảnh */}
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
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fontSize='16' fill='%236b7280' textAnchor='middle' dominantBaseline='middle'%3EHình ảnh%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos - Có thể có nhiều video */}
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

            {/* Music - Link nhạc từ internet */}
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
