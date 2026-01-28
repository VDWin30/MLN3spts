interface Milestone {
  date: string;
  title: string;
  description: string;
  images: Array<{ src: string; alt: string }>;
  videos: Array<{ id: string; title: string }>;
  music?: { name: string; artist: string; url: string };
}

const MILESTONES_1986: Milestone[] = [
  {
    date: '12/1986',
    title: 'Đại Hội VI - Khởi Động Chính Sách Đổi Mới',
    description: 'Đảng Cộng sản Việt Nam khởi động chính sách Đổi Mới - bước ngoặt lớn trong lịch sử phát triển kinh tế-xã hội. Chính sách mở cửa, phát triển kinh tế thị trường định hướng xã hội chủ nghĩa.',
    images: [
      { src: '/images/1986-doi-moi.jpg', alt: 'Chính sách Đổi Mới 1986' },
    ],
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Phim tư liệu Đổi Mới' },
    ],
    music: {
      name: 'Việt Nam Của Chúng Ta',
      artist: 'Ca khúc thời kỳ Đổi Mới',
      url: 'https://example.com/doi-moi.mp3',
    },
  },
];

export function Timeline1986() {
  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-4">
        <h2 className="text-3xl font-bold text-primary">1986</h2>
        <p className="text-muted-foreground mt-1">Đổi Mới - Bước Ngoặt Kinh Tế</p>
      </div>

      <div className="space-y-8">
        {MILESTONES_1986.map((milestone, idx) => (
          <div key={idx} className="border-l-2 border-primary pl-6 pb-8 relative">
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-base leading-relaxed text-foreground mb-4">
                Năm 1986, Đảng Cộng sản Việt Nam triệu tập Hội Nghị Đại Hội VI, 
                đồng ý thực hiện chính sách Đổi Mới - một bước ngoặt lớn trong lịch sử 
                phát triển kinh tế-xã hội của đất nước. Chính sách này nhằm phát triển 
                kinh tế, thành lập nền kinh tế thị trường định hướng xã hội chủ nghĩa. 
                Đó là sự cải cách sâu sắc, mở ra một thời kỳ phát triển mới - từ một 
                nước bị cô lập, khó khăn chuyển sang khai mở, hội nhập với thế giới.
              </p>

              {/* Hình ảnh */}
              <div className="mb-6 bg-muted rounded-lg overflow-hidden h-64">
                <img 
                  src="/images/1986-doi-moi.jpg" 
                  alt="Đổi Mới 1986"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fontSize='20' fill='%236b7280' textAnchor='middle' dominantBaseline='middle'%3EHình ảnh 1986%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Video tư liệu */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-primary">Phim Tư Liệu:</h4>
                <div className="bg-muted rounded-lg overflow-hidden aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${milestone.videos[0].id}`} 
                    title={milestone.videos[0].title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  *Thay VIDEO_ID bằng ID của YouTube video
                </p>
              </div>

              {/* Bài hát */}
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-3 text-primary">Bài Hát Tiêu Biểu:</h4>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-semibold mb-2">{milestone.music?.name}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bài hát về tinh thần Đổi Mới và xây dựng đất nước
                  </p>
                  <audio 
                    controls 
                    className="w-full"
                  >
                    <source src={milestone.music?.url} type="audio/mpeg" />
                    Trình duyệt của bạn không hỗ trợ audio.
                  </audio>
                  <p className="text-sm text-muted-foreground mt-2">
                    *Thêm link audio
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 border border-accent rounded-lg">
                <p className="text-sm font-semibold text-accent mb-2">💡 Sự Kiện Chính:</p>
                <ul className="text-sm space-y-1 text-foreground">
                  <li>• Hội Nghị Đại Hội VI của Đảng Cộng sản Việt Nam</li>
                  <li>• Chính sách Đổi Mới được triển khai</li>
                  <li>• Mở cửa nền kinh tế, thực hiện cơ chế thị trường</li>
                  <li>• Bắt đầu quá trình hội nhập quốc tế</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
