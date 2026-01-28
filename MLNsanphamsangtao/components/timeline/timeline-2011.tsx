export function Timeline2011() {
  return (
    <div className="space-y-8">
      <div className="prose prose-sm max-w-none">
        <h3 className="text-2xl font-bold text-primary mb-4">2011: Hội Nghị Đại Hội XI - Xây Dựng Thế Hệ Tương Lai</h3>
        
        <div className="bg-card rounded-lg p-6 border border-border">
          <p className="text-base leading-relaxed text-foreground mb-4">
            Năm 2011, Hội Nghị Đại Hội XI của Đảng Cộng sản Việt Nam diễn ra, 
            xác định các mục tiêu xây dựng đất nước giàu mạnh, dân chủ, công bằng 
            và văn minh. Tại Hội Nghị này, Việt Nam đã khẳng định cam kết đối với 
            việc phát triển bền vững, bảo vệ môi trường, và nâng cao chất lượng 
            cuộc sống của nhân dân. Đây là giai đoạn chuyển tiếp, nơi Việt Nam 
            tiếp tục cải cách sâu sắc, hội nhập quốc tế sâu rộng hơn.
          </p>

          {/* Hình ảnh */}
          <div className="mb-6 bg-muted rounded-lg overflow-hidden h-64">
            <img 
              src="/images/2011-dai-hoi-xi.jpg" 
              alt="Đại Hội XI 2011"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fontSize='20' fill='%236b7280' textAnchor='middle' dominantBaseline='middle'%3EHình ảnh 2011%3C/text%3E%3C/svg%3E"
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
                title="Phim tư liệu 2011"
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
              <p className="font-semibold mb-2">Việt Nam Ơi</p>
              <p className="text-sm text-muted-foreground mb-4">
                Ca khúc tôn vinh quốc gia và sự phát triển của dân tộc
              </p>
              <audio 
                controls 
                className="w-full"
              >
                <source src="/audio/viet-nam-oi.mp3" type="audio/mpeg" />
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
              <li>• Hội Nghị Đại Hội XI của Đảng Cộng sản Việt Nam</li>
              <li>• Xác định mục tiêu phát triển quốc gia</li>
              <li>• Tiếp tục cải cách kinh tế và chính trị</li>
              <li>• Nâng cao chất lượng cuộc sống và bảo vệ môi trường</li>
              <li>• Hội nhập sâu rộng vào cộng đồng quốc tế</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
