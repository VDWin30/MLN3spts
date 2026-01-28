'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar } from 'lucide-react';

// ================== TYPES ==================
interface MediaItem {
  type: 'image' | 'video' | 'audio';
  src: string;
  thumbnail?: string;
  caption: string;
  author?: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  content: string;
  images: MediaItem[];
  videos: MediaItem[];
  music: MediaItem[];
}

// ================== DATA ==================
const DATA_1954: TimelineEvent[] = [
  {
    date: '10-10-1954',
    title: '1.1. Tiếp quản Thủ đô và củng cố chính quyền cách mạng',
    content: `Sự kiện ngày 10-10-1954, khi bộ đội Việt Nam tiến vào tiếp quản Thủ đô Hà Nội trong không khí hào hùng, đã mở đầu cho công cuộc xây dựng cuộc sống mới. Quá trình này hoàn tất khi toán lính Pháp cuối cùng rút khỏi đảo Cát Bà vào ngày 16-5-1955, đánh dấu việc miền Bắc sạch bóng quân xâm lược. Ngay sau đó, nhiệm vụ chính trị cấp thiết là củng cố chính quyền và ổn định đời sống nhân dân.

Về mặt tổ chức bộ máy, Nhà nước đã thực hiện những điều chỉnh lớn để phù hợp với yêu cầu quản lý kinh tế và xã hội trong thời kỳ mới. Tại kỳ họp thứ 5 Quốc hội khóa I (tháng 9-1955), hệ thống lãnh đạo cấp cao được kiện toàn với việc bầu Cụ Tôn Đức Thắng làm Trưởng ban Thường trực Quốc hội, ông Phạm Văn Đồng giữ chức Thủ tướng, và các ông Phan Kế Toại, Võ Nguyên Giáp giữ chức Phó Thủ tướng.`,
    images: [
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/vi/7/73/Tonducthang.jpg', caption: 'Tôn Đức Thắng' },
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg/500px-Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg', caption: 'Phạm Văn Đồng' },
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Phan_K%E1%BA%BF_To%E1%BA%A1i%2C_Souverains_et_notabilites_d%27Indochine_%28cropped%29.jpg/330px-Phan_K%E1%BA%BF_To%E1%BA%A1i%2C_Souverains_et_notabilites_d%27Indochine_%28cropped%29.jpg', caption: 'Phan Kế Toại' },
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mr._Vo_Nguyen_Giap.jpg/500px-Mr._Vo_Nguyen_Giap.jpg', caption: 'Võ Nguyên Giáp' }
    ],
    videos: [
      { type: 'video', src: 'rHB7aQG72po', caption: 'Phim tài liệu - Giải phóng Thủ đô 10/10/1954' }
    ],
    music: [
      { type: 'audio', src: '/music/tien-ve-ha-noi.mp3', caption: 'Tiến Về Hà Nội', author: 'Văn Cao' }
    ]
  },
  {
    date: '07-1954',
    title: '1.2. Cải cách ruộng đất',
    content: `Nhiệm vụ trọng tâm và triệt để nhất trong giai đoạn 1954 - 1956 là hoàn thành cải cách ruộng đất để thực hiện mục tiêu "Người cày có ruộng", xóa bỏ tàn dư phong kiến đã tồn tại hàng thế kỷ.`,
    images: [
      { type: 'image', src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUqmKxDcoByDdzzd1_D_lA2yz1OJ9rp5BL06Q647LHwySqThyphenhyphenGial34r2wXl2_85AhTpczl4a0hp5J7OipMfd5YLrVB7ZOUJ_2_rYZ5rhVCFC4vX96HtfNqpBZUWan1yXpzeOi0Cj3EdTz/s1600/6f6r8z.jpg', caption: 'Chia ruộng đất' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: '/music/bai-ca-lua.mp3', caption: 'Bài Ca Lúa', author: 'Dân ca' }
    ]
  },
  {
    date: '1955 - 1957',
    title: '1.3. Khôi phục kinh tế và ổn định xã hội',
    content: `Chính phủ ban hành nhiều chính sách khuyến khích sản xuất, khôi phục cơ sở hạ tầng và đảm bảo ổn định chính trị - xã hội, tạo tiền đề cho công cuộc xây dựng chủ nghĩa xã hội.`,
    images: [
      { type: 'image', src: 'https://baotangsonla.vn/data/2/images/tin-tuc/z4351850391454_899a29d6fe8350dabee6e88e391b4acb.jpg', caption: 'Miền Bắc khôi phục sau chiến tranh' }
    ],
    videos: [],
    music: [
      { type: 'audio', src: '/music/bai-ca-lua.mp3', caption: 'Bài Ca Lúa', author: 'Dân ca' }
    ]
  }
];

// ================== COMPONENT ==================
export function Timeline1954() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');

  const allVideos = DATA_1954.flatMap(e => e.videos.map(v => ({ ...v, date: e.date })));
  const allMusic = DATA_1954.flatMap(e => e.music.map(m => ({ ...m, date: e.date })));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-4">
        <div>
          <h2 className="text-4xl font-black">1954 - 1965</h2>
          <p className="text-muted-foreground">
            Miền Bắc quá độ lên chủ nghĩa xã hội
          </p>
        </div>

        <div className="flex bg-muted p-1 rounded-lg">
          <TabBtn active={activeTab === 'info'} onClick={() => setActiveTab('info')} icon={<FileText />} label="Thông tin" />
          <TabBtn active={activeTab === 'video'} onClick={() => setActiveTab('video')} icon={<Film />} label="Video" />
          <TabBtn active={activeTab === 'music'} onClick={() => setActiveTab('music')} icon={<Music />} label="Âm nhạc" />
        </div>
      </div>

      {activeTab === 'info' && (
        <div className="space-y-8">
          {DATA_1954.map((e, i) => (
            <div key={i} className="pl-6 border-l relative">
              <div className="absolute -left-2 top-1 w-4 h-4 bg-primary rounded-full" />
              <span className="text-xs font-bold flex items-center gap-1 mb-2">
                <Calendar className="w-3 h-3" /> {e.date}
              </span>
              <h3 className="text-xl font-bold">{e.title}</h3>
              <p className="whitespace-pre-line text-muted-foreground mt-2">
                {e.content}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'video' && (
        <div className="grid sm:grid-cols-2 gap-6">
          {allVideos.map((v, i) => (
            <iframe
              key={i}
              className="aspect-video rounded-xl"
              src={`https://www.youtube.com/embed/${v.src}`}
              allowFullScreen
            />
          ))}
        </div>
      )}

      {activeTab === 'music' && (
        <div className="space-y-4">
          {allMusic.map((m, i) => (
            <div key={i} className="border rounded-xl p-4 flex items-center gap-4">
              <Music />
              <div className="flex-1">
                <p className="font-bold">{m.caption}</p>
                <p className="text-sm text-muted-foreground">{m.author} • {m.date}</p>
              </div>
              <audio controls src={m.src} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ================== SUB ==================
function TabBtn({
  active,
  onClick,
  label,
  icon
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold ${
        active ? 'bg-background shadow' : 'opacity-70'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
