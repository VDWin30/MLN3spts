export function Timeline1991() {
  return (
    <div className="space-y-8">
      <div className="prose prose-sm max-w-none">
        <h3 className="text-2xl font-bold text-primary mb-4">1991: Hội Nghị Đại Hội VII - Xác Định Đường Lối</h3>
        
        <div className="bg-card rounded-lg p-6 border border-border">
          <p className="text-base leading-relaxed text-foreground mb-4">
            Năm 1991, Hội Nghị Đại Hội VII của Đảng Cộng sản Việt Nam diễn ra, 
            tiếp tục hoàn thiện con đường phát triển đất nước trên nền tảng xã hội 
            chủ nghĩa. Hội Nghị này nhấn mạnh tầm quan trọng của việc phát triển 
            kinh tế với cơ chế thị trường xã hội chủ nghĩa và đẩy mạnh hội nhập 
            quốc tế. Đây là giai đoạn quan trọng, giúp Việt Nam dần dần bước vào 
            thế kỷ mới với những thay đổi tích cực.
          </p>

          {/* Hình ảnh */}
          <div className="mb-6 bg-muted rounded-lg overflow-hidden h-64">
            <img 
              src="/images/1991-dai-hoi-vii.jpg" 
              alt="Đại Hội VII 1991"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fontSize='20' fill='%236b7280' textAnchor='middle' dominantBaseline='middle'%3EHình ảnh 1991%3C/text%3E%3C/svg%3E"
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
                src="https://www.youtube.com/embed/VIDEO_ID" 
                title="Phim tư liệu 1991"
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
              <p className="font-semibold mb-2">Người Lao Động Tươi Tắn</p>
              <p className="text-sm text-muted-foreground mb-4">
                Ca khúc về sức mạnh của lao động và xây dựng đất nước
              </p>
              <audio 
                controls 
                className="w-full"
              >
                <source src="/audio/nguoi-lao-dong.mp3" type="audio/mpeg" />
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
              <li>• Hội Nghị Đại Hội VII của Đảng Cộng sản Việt Nam</li>
              <li>• Xác định chiến lược phát triển dài hạn</li>
              <li>• Nước Cộng hòa Xã hội chủ nghĩa Việt Nam hoạt động toàn diện</li>
              <li>• Tiếp tục thực hiện Đổi Mới và hội nhập quốc tế</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
