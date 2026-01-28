// components/timeline/timeline-1945.tsx
export function Timeline1945() {
  return (
    <div className="space-y-6">
      {/* Tiêu đề chính */}
      <h1 className="text-3xl font-bold text-primary">
        Cách Mạng Tháng Tám
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg text-muted-foreground">
        Khởi nghĩa giành chính quyền, thành lập nước Việt Nam Dân chủ Cộng hòa
      </p>

      {/* Checklist */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded border border-border flex items-center justify-center">
            <div className="w-3 h-3 rounded bg-primary/20" />
          </div>
          <span className="text-foreground">Khởi nghĩa toàn quốc</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded border border-border flex items-center justify-center">
            <div className="w-3 h-3 rounded bg-primary/20" />
          </div>
          <span className="text-foreground">Tuyên ngôn Độc lập</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded border border-border flex items-center justify-center">
            <div className="w-3 h-3 rounded bg-primary/20" />
          </div>
          <span className="text-foreground">Thành lập chính phủ lâm thời</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded border border-border flex items-center justify-center">
            <div className="w-3 h-3 rounded bg-primary/20" />
          </div>
          <span className="text-foreground">Xây dựng chế độ mới</span>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-border/30 my-4" />

      {/* Nội dung chi tiết */}
      <div className="space-y-4">
        <p className="text-foreground leading-relaxed">
          Ngày 19 tháng 8 năm 1945, cuộc Tổng khởi nghĩa Cách mạng Tháng Tám thành công, 
          lật đổ chế độ phong kiến và thực dân, giành chính quyền về tay nhân dân.
        </p>
        
        <p className="text-foreground leading-relaxed">
          Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh 
          đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.
        </p>
        
        <p className="text-foreground leading-relaxed">
          Đây là thắng lợi vĩ đại đầu tiên của nhân dân Việt Nam từ khi có Đảng lãnh đạo, 
          mở ra kỷ nguyên mới - kỷ nguyên độc lập dân tộc và chủ nghĩa xã hội.
        </p>
      </div>

      {/* Separator */}
      <div className="border-t border-border/30 my-4" />

      {/* Video section */}
      <div>
        <h4 className="font-bold text-lg mb-3">Phim Tư Liệu:</h4>
        <div className="bg-muted rounded-lg p-4 text-center">
          <div className="w-full h-48 bg-muted/50 rounded flex items-center justify-center">
            <svg className="w-12 h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Video tư liệu về Cách mạng Tháng Tám</p>
        </div>
      </div>
    </div>
  );
}
