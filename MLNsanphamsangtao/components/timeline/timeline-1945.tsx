'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon, BookOpen, Target, Users, Shield, LandPlot, GraduationCap } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU ---
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

const DATA_1945: TimelineEvent[] = [
  {
    date: 'Từ 1945',
    title: 'Nền Tảng Lý Luận: Con Đường Quá Độ Gián Tiếp Lên Chủ Nghĩa Xã Hội',
    content: `Theo tư tưởng Hồ Chí Minh, được vận dụng sáng tạo từ chủ nghĩa Mác - Lênin vào điều kiện Việt Nam, **"quá độ gián tiếp" lên chủ nghĩa xã hội** là con đường phát triển đặc thù của nước ta:

**Bản chất của "quá độ gián tiếp":**
• Xuất phát từ một nước **thuộc địa**, **nông nghiệp lạc hậu**
• **Bỏ qua việc thiết lập chế độ tư bản chủ nghĩa hoàn chỉnh**
• Tiến thẳng lên chủ nghĩa xã hội không qua giai đoạn tư bản chủ nghĩa

**Ý nghĩa "bỏ qua chế độ tư bản chủ nghĩa":**
• KHÔNG phủ nhận hoàn toàn những yếu tố tiến bộ của văn minh tư bản
• KHÔNG xây dựng nhà nước tư sản
• KHÔNG để quan hệ sản xuất tư bản chủ nghĩa giữ vai trò thống trị

**Con đường thực hiện tại Việt Nam:**
1. **Cách mạng dân tộc dân chủ nhân dân** do Đảng Cộng sản lãnh đạo
2. **Từng bước xây dựng nền tảng chính trị**: Nhà nước dân chủ nhân dân
3. **Từng bước xây dựng nền tảng kinh tế**: Kinh tế nhiều thành phần dưới sự lãnh đạo của kinh tế nhà nước
4. **Từng bước xây dựng nền tảng xã hội**: Công bằng, dân chủ, văn minh

**Tầm nhìn chiến lược của Chủ tịch Hồ Chí Minh:**
_"Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy và xây dựng chế độ dân chủ mới, tiến lên chủ nghĩa xã hội."_

Đây chính là **cơ sở lý luận quan trọng** định hướng cho sự phát triển của Việt Nam từ sau Cách mạng Tháng Tám 1945.`,
    images: [
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg/1280px-H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh - Kiến trúc sư của con đường phát triển Việt Nam' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ho-chi-minh-doc-tuyen-ngon.jpg', 
        caption: 'Tư tưởng Hồ Chí Minh về con đường quá độ gián tiếp' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'o7lwWGfYyAg', 
        caption: 'Tư tưởng Hồ Chí Minh về con đường phát triển của Việt Nam' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/qWZt0CjXlIfg', 
        caption: 'Tiến Quân Ca (Quốc Ca)', 
        author: 'Văn Cao' 
      }
    ]
  },
  {
    date: '02/09/1945',
    title: 'Tuyên Ngôn Độc Lập - Xác Lập Con Đường Phát Triển Của Dân Tộc',
    content: `Ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc **Tuyên ngôn Độc lập**, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa. Văn kiện này không chỉ khẳng định quyền tự do, độc lập của dân tộc Việt Nam mà còn thể hiện tư tưởng nhất quán của Người: **độc lập dân tộc phải gắn liền với con đường tiến lên chủ nghĩa xã hội**.

**Ý nghĩa lịch sử của Tuyên ngôn Độc lập:**
• Chấm dứt chế độ thực dân phong kiến, mở ra kỷ nguyên độc lập dân tộc
• Thể hiện tầm nhìn chiến lược về con đường phát triển đất nước
• Khẳng định quyết tâm xây dựng chế độ dân chủ mới

**Xác định nhiệm vụ trung tâm sau khi giành chính quyền:**
1. Củng cố chính quyền cách mạng
2. Bảo vệ thành quả cách mạng
3. Xây dựng nền tảng cho một xã hội mới

**Con đường phát triển được xác định:**
Việt Nam lựa chọn con đường **quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa** – phù hợp với đặc điểm là một nước thuộc địa, nông nghiệp lạc hậu.`,
    images: [
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ho_Chi_Minh_reading_declaration_of_independence_of_Vietnam_02.09.1945.jpg/800px-Ho_Chi_Minh_reading_declaration_of_independence_of_Vietnam_02.09.1945.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/09/02/ba-dinh-1945.jpg', 
        caption: 'Hàng vạn người dân Hà Nội tham dự Lễ Tuyên ngôn Độc lập' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'dQw4w9WgXcQ', 
        caption: 'Toàn cảnh Lễ Tuyên ngôn Độc lập 2/9/1945' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://soundcloud.com/user-665366008/tien-quan-ca?si=530e6cd9bd8c49719ff192268bba1269&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', 
        caption: 'Tiến Quân Ca (Quốc Ca)', 
        author: 'Văn Cao' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/VEP9VglCDq6T', 
        caption: 'Ba Đình Nắng', 
        author: 'Bùi Công Kỳ' 
      }
    ]
  },
  {
    date: 'Cuối 1945',
    title: 'Giải Quyết "Giặc Đói" Và "Giặc Dốt"',
    content: `Sau khi độc lập, đất nước rơi vào tình trạng khủng hoảng nghiêm trọng. Nạn đói năm 1945 đã làm hơn 2 triệu người chết ở miền Bắc. Trước tình hình đó, Chính phủ đã triển khai các biện pháp quyết liệt:

**Chống "giặc đói":**
• Phát động phong trào **"nhường cơm sẻ áo"**
• Kêu gọi mỗi người dân nhịn ăn một bữa để cứu đói đồng bào
• Triển khai rộng khắp phong trào **tăng gia sản xuất**
• Tổ chức phân phối lương thực công bằng

**Chống "giặc dốt":**
• Ngày 8/9/1945: Chủ tịch Hồ Chí Minh ký sắc lệnh thành lập **Nha Bình dân học vụ**
• Mục tiêu: Xóa nạn mù chữ trên toàn quốc
• Hàng triệu người dân tham gia học chữ trong những năm đầu của chính quyền cách mạng

**Ý nghĩa chiến lược:**
Điều này thể hiện quan điểm của Hồ Chí Minh: **xây dựng xã hội mới phải bắt đầu từ nâng cao dân trí**, phát huy vai trò làm chủ của nhân dân. Đây là bước đầu tiên trong xây dựng con người mới XHCN.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2020-09/nan-doi-1945.jpg', 
        caption: 'Nạn đói năm 1945 - Thảm họa nhân đạo sau Cách mạng Tháng Tám' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2020/09/07/upload_1597/binh-dan-hoc-vu.jpg', 
        caption: 'Lớp học bình dân học vụ - Xóa nạn mù chữ sau 1945' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2020/09/08/tang-gia-san-xuat-1945.jpg', 
        caption: 'Phong trào tăng gia sản xuất để chống đói' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'eF5g9hDq8Rc', 
        caption: 'Chống giặc đói, giặc dốt những năm đầu độc lập' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/W9xY2aBjEz5g', 
        caption: 'Bài Ca Giáo Dục', 
        author: 'Văn Ký' 
      }
    ]
  },
  {
    date: '1946',
    title: 'Tổng Tuyển Cử Và Hiến Pháp Đầu Tiên',
    content: `**Ngày 6/1/1946:** Cuộc Tổng tuyển cử đầu tiên được tổ chức với **hơn 90% cử tri đi bầu**. Quốc hội khóa I ra đời, đánh dấu bước trưởng thành của Nhà nước dân chủ nhân dân.

**Thành phần Quốc hội khóa I:**
• Đại biểu của các đảng phái chính trị
• Đại biểu không đảng phái
• Đại biểu của các dân tộc thiểu số
• Đại biểu của các tôn giáo

**Cuối năm 1946:** **Hiến pháp 1946** được thông qua – bản Hiến pháp đầu tiên trong lịch sử Việt Nam.

**Những nguyên tắc cơ bản của Hiến pháp 1946:**
• Khẳng định các quyền tự do dân chủ cơ bản của nhân dân
• Nguyên tắc **quyền lực thuộc về nhân dân**
• Xác định Việt Nam là nước dân chủ cộng hòa
• Quy định quyền và nghĩa vụ của công dân

**Ý nghĩa lịch sử:**
Đây là bước cụ thể hóa tư tưởng Hồ Chí Minh về **một nhà nước của dân, do dân và vì dân** – nền tảng chính trị cho quá trình quá độ lên CNXH sau này.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/01/06/tong-tuyen-cu-1946.jpg', 
        caption: 'Cử tri Hà Nội đi bầu trong cuộc Tổng tuyển cử đầu tiên 6/1/1946' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2021/01/06/upload_1594/quoc-hoi-khoa-i.jpg', 
        caption: 'Kỳ họp đầu tiên của Quốc hội khóa I năm 1946' 
      },
      { 
        type: 'image', 
        src: 'https://media.baodautu.vn/Images/chicuong/2021/11/09/hien-phap-1946.jpg', 
        caption: 'Hiến pháp 1946 - Bản Hiến pháp đầu tiên của nước Việt Nam độc lập' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'fG6h3iEq9Sd', 
        caption: 'Tổng tuyển cử 1946 - Mốc son của nền dân chủ' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/X0yZ3bCkFa6h', 
        caption: 'Bài Ca Tổ Quốc', 
        author: 'Hoàng Vân' 
      }
    ]
  },
  {
    date: '19/12/1946',
    title: 'Toàn Quốc Kháng Chiến',
    content: `Trước dã tâm xâm lược trở lại của thực dân Pháp, ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra **Lời kêu gọi Toàn quốc kháng chiến** với tinh thần: **"Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."**

**Diễn biến chính:**
• 20h ngày 19/12/1946: Cuộc kháng chiến toàn quốc bùng nổ
• Quân và dân Hà Nội chiến đấu anh dũng trong 60 ngày đêm
• Sau đó rút lên chiến khu Việt Bắc, chuyển sang chiến tranh du kích lâu dài

**Phương châm kháng chiến của Hồ Chí Minh:**
• **Toàn dân**: Huy động sức mạnh toàn dân tộc
• **Toàn diện**: Đấu tranh trên mọi mặt trận
• **Trường kỳ**: Chuẩn bị cho cuộc chiến lâu dài
• **Tự lực cánh sinh**: Dựa vào sức mình là chính

**Đặc điểm của thời kỳ quá độ:**
Vừa chiến đấu bảo vệ độc lập, vừa xây dựng nền tảng kinh tế – xã hội mới. Đây là thử thách lớn đầu tiên của chính quyền cách mạng non trẻ.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-12/hanoi-1946.jpg', 
        caption: 'Chiến sĩ tự vệ chiến đấu trên đường phố Hà Nội, đêm 19/12/1946' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2021/12/19/upload_1889/loi-keu-goi-toan-quoc-khang-chien.jpg', 
        caption: 'Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2021/12/19/viet-bac-khang-chien.jpg', 
        caption: 'Căn cứ địa Việt Bắc - Nơi lãnh đạo kháng chiến' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'gH7j4iFr0Te', 
        caption: '60 ngày đêm chiến đấu bảo vệ Thủ đô Hà Nội' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Y1aA4cDlGb7i', 
        caption: 'Hành Quân Xa', 
        author: 'Đỗ Nhuận' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Z2bB5dEmHc8j', 
        caption: 'Du Kích Sông Thao', 
        author: 'Đỗ Nhuận' 
      }
    ]
  },
  {
    date: '1947–1950',
    title: 'Xây Dựng Căn Cứ Địa Và Kinh Tế Kháng Chiến',
    content: `Sau chiến thắng Việt Bắc thu – đông 1947, căn cứ địa Việt Bắc được củng cố vững chắc. Đây là giai đoạn vừa kháng chiến vừa kiến quốc:

**Xây dựng căn cứ địa:**
• Củng cố hệ thống chính quyền ở vùng tự do
• Xây dựng hệ thống giao thông liên lạc
• Phát triển các cơ sở sản xuất vũ khí

**Phát triển kinh tế kháng chiến:**
• Tổ chức sản xuất tại các vùng tự do
• Phát triển nông nghiệp: Tăng diện tích canh tác, cải tiến kỹ thuật
• Phát triển thủ công nghiệp: Sản xuất hàng tiêu dùng thiết yếu
• Phát triển công nghiệp quốc phòng: Xưởng quân giới cung cấp vũ khí

**Đặc điểm kinh tế thời kỳ này:**
Sự tồn tại nhiều thành phần: **kinh tế nhà nước**, **kinh tế cá thể của nông dân** và một bộ phận **kinh tế tư nhân**. 

Theo tư tưởng Hồ Chí Minh, đây là biểu hiện tất yếu của thời kỳ quá độ, khi chưa thể ngay lập tức xây dựng quan hệ sản xuất xã hội chủ nghĩa hoàn chỉnh.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2022-10/xuong-quan-gioi-viet-bac.jpg', 
        caption: 'Xưởng quân giới tại Việt Bắc - Sản xuất vũ khí phục vụ kháng chiến' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2022/03/15/upload_1656/kinh-te-khang-chien.jpg', 
        caption: 'Sản xuất nông nghiệp tại vùng tự do Việt Bắc' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2022/03/15/can-cu-dia-viet-bac.jpg', 
        caption: 'Căn cứ địa Việt Bắc - Trung tâm lãnh đạo kháng chiến' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'hI8k5gGs1Uf', 
        caption: 'Kinh tế kháng chiến - Vừa sản xuất vừa chiến đấu' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/A3cC6eFnId9k', 
        caption: 'Bài Ca Xây Dựng', 
        author: 'Hoàng Vân' 
      }
    ]
  },
  {
    date: '1950',
    title: 'Bước Ngoặt Của Kháng Chiến',
    content: `Năm 1950 đánh dấu bước phát triển quan trọng trong cuộc kháng chiến chống Pháp:

**Mở rộng quan hệ quốc tế:**
• Việt Nam chính thức thiết lập quan hệ ngoại giao với **Trung Quốc** và **Liên Xô**
• Mở rộng quan hệ với các nước xã hội chủ nghĩa
• Phá thế bao vây, cô lập của đế quốc

**Chiến dịch Biên giới (Tháng 9–10/1950):**
• Đánh bại cuộc tấn công của quân Pháp
• Giải phóng thị xã Cao Bằng, Thất Khê, Đông Khê
• Mở thông đường liên lạc quốc tế
• Phá thế bao vây của địch

**Ý nghĩa chiến lược:**
• Củng cố niềm tin của nhân dân vào thắng lợi cuối cùng
• Nâng cao vị thế quốc tế của Việt Nam
• Tạo điều kiện thuận lợi để tiếp tục xây dựng lực lượng
• Chứng minh tính đúng đắn của đường lối kháng chiến toàn dân, toàn diện

**Ảnh hưởng đến quá trình quá độ:**
Thắng lợi này tạo điều kiện để đẩy mạnh xây dựng kinh tế, củng cố chính quyền, chuẩn bị cho những bước phát triển tiếp theo.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-09/chien-dich-bien-gioi-1950.jpg', 
        caption: 'Chiến dịch Biên giới 1950 - Bước ngoặt của cuộc kháng chiến' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/01/30/upload_1789/quan-he-ngoai-giao-1950.jpg', 
        caption: 'Việt Nam thiết lập quan hệ ngoại giao với các nước XHCN năm 1950' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/09/18/giai-phong-cao-bang.jpg', 
        caption: 'Quân giải phóng tiến vào thị xã Cao Bằng' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'iJ9l6hHs2Vg', 
        caption: 'Chiến dịch Biên giới 1950 - Mở ra cục diện mới' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/B4dD7fGoJe0l', 
        caption: 'Chiến Thắng Biên Giới', 
        author: 'Văn Cao' 
      }
    ]
  },
  {
    date: '04/12/1953',
    title: 'Luật Cải Cách Ruộng Đất',
    content: `Ngày 4/12/1953, Quốc hội thông qua **Luật Cải cách ruộng đất**. Đây là chính sách quan trọng trong quá trình xây dựng nền tảng kinh tế - xã hội mới:

**Mục tiêu của cải cách ruộng đất:**
• Xóa bỏ quan hệ sản xuất phong kiến ở nông thôn
• Thực hiện khẩu hiệu **"người cày có ruộng"**
• Tịch thu ruộng đất của địa chủ phản động chia cho nông dân nghèo

**Nội dung chính:**
• Đánh đổ địa chủ phong kiến
• Thực hiện giảm tô, giảm tức
• Chia ruộng đất cho nông dân
• Xây dựng chính quyền cơ sở vững mạnh

**Ý nghĩa kinh tế - chính trị:**
• **Kinh tế**: Giải phóng sức sản xuất ở nông thôn, tạo động lực phát triển nông nghiệp
• **Chính trị**: Củng cố khối liên minh công – nông, tăng cường hậu phương kháng chiến
• **Xã hội**: Xóa bỏ bất công xã hội, nâng cao đời sống nông dân

**Vai trò trong quá trình quá độ:**
Cải cách ruộng đất là bước quan trọng trong việc xây dựng quan hệ sản xuất mới, chuẩn bị điều kiện cho sự phát triển tiếp theo của cách mạng.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-12/cai-cach-ruong-dat-1953.jpg', 
        caption: 'Nông dân nhận ruộng trong cải cách ruộng đất năm 1953' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/12/04/upload_1923/luat-cai-cach-ruong-dat.jpg', 
        caption: 'Luật Cải cách ruộng đất được Quốc hội thông qua ngày 4/12/1953' 
      },
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/12/04/chia-ruong-cho-nong-dan.jpg', 
        caption: 'Chia ruộng cho nông dân nghèo - Thực hiện "người cày có ruộng"' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'jK0m7iIt3Wh', 
        caption: 'Cải cách ruộng đất 1953 - Bước ngoặt ở nông thôn Việt Nam' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/C5eE8gHpKf1m', 
        caption: 'Bài Ca Nông Dân', 
        author: 'Trần Kiết Tường' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/D6fF9hIqLg2n', 
        caption: 'Hát Về Cánh Đồng Quê', 
        author: 'Văn Cao' 
      }
    ]
  },
  {
    date: 'Tổng Kết 1945–1953',
    title: 'Nền Móng Cho Con Đường Quá Độ',
    content: `**Tổng kết giai đoạn 1945–1953:**

**Thành tựu chính:**
1. **Bảo vệ nền độc lập non trẻ**: Vượt qua muôn vàn thử thách, kháng chiến chống Pháp
2. **Xây dựng nhà nước dân chủ nhân dân**: Tổ chức tổng tuyển cử, ban hành Hiến pháp
3. **Phát triển kinh tế kháng chiến**: Xây dựng căn cứ địa, phát triển sản xuất
4. **Cải tạo xã hội cũ**: Chống giặc đói, giặc dốt, cải cách ruộng đất

**Ý nghĩa đối với con đường quá độ:**
• **Chính trị**: Xây dựng được nhà nước dân chủ nhân dân - nền tảng chính trị cho CNXH
• **Kinh tế**: Bước đầu xây dựng kinh tế nhiều thành phần, giải phóng sức sản xuất
• **Xã hội**: Nâng cao dân trí, xóa bỏ bất công, củng cố khối đại đoàn kết toàn dân

**Đặc điểm của giai đoạn:**
Giai đoạn này tuy chưa trực tiếp xây dựng chủ nghĩa xã hội, nhưng đã **đặt nền móng chính trị, kinh tế và xã hội quan trọng** cho con đường quá độ lên CNXH ở Việt Nam trong những năm sau đó.

**Bài học kinh nghiệm:**
• Kết hợp giữa chiến đấu và xây dựng
• Phát huy sức mạnh toàn dân tộc
• Kiên trì con đường độc lập dân tộc gắn liền với CNXH
• Sáng tạo trong vận dụng lý luận vào thực tiễn Việt Nam

Đây chính là **giai đoạn khởi đầu** của con đường quá độ gián tiếp lên chủ nghĩa xã hội ở Việt Nam.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/12/31/tong-ket-1945-1953.jpg', 
        caption: 'Việt Nam 1945-1953: Từ độc lập đến kháng chiến thắng lợi' 
      },
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/12/31/upload_1987/nen-mong-qua-do.jpg', 
        caption: 'Nền móng cho con đường quá độ lên CNXH đã được xây dựng' 
      },
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-12/ho-chi-minh-1953.jpg', 
        caption: 'Chủ tịch Hồ Chí Minh - Người dẫn dắt con đường phát triển của dân tộc' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'kL1n8jJu4Xi', 
        caption: 'Việt Nam 1945-1953: Hành trình xây dựng nền móng' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/E7gG0iJrMh3o', 
        caption: 'Việt Nam Quê Hương Tôi', 
        author: 'Đỗ Nhuận' 
      },
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/F8hH1jKsNi4p', 
        caption: 'Bài Ca Tổ Quốc Quang Vinh', 
        author: 'Lưu Hữu Phước' 
      }
    ]
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1945() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1945.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_1945.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/20 to-amber-900/20 p-8 border border-amber-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-amber-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-amber-700 tracking-tighter">
                1945 - 1953
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Khởi Đầu Con Đường Quá Độ Gián Tiếp Lên Chủ Nghĩa Xã Hội
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation cải tiến */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-1 shadow-sm">
        <div className="flex flex-wrap gap-1">
          <TabBtn 
            isActive={activeTab === 'info'} 
            onClick={() => setActiveTab('info')} 
            label="Thông Tin Lịch Sử" 
            icon={<FileText className="w-5 h-5" />} 
            count={DATA_1945.length}
          />
          <TabBtn 
            isActive={activeTab === 'video'} 
            onClick={() => setActiveTab('video')} 
            label="Video Tư Liệu" 
            icon={<Film className="w-5 h-5" />} 
            count={allVideos.length}
          />
          <TabBtn 
            isActive={activeTab === 'music'} 
            onClick={() => setActiveTab('music')} 
            label="Bài Hát Lịch Sử" 
            icon={<Music className="w-5 h-5" />} 
            count={allMusic.length}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[500px] animate-in fade-in duration-700">
        
        {/* TAB THÔNG TIN */}
        {activeTab === 'info' && (
          <div className="space-y-10 pl-4 md:pl-6">
            {DATA_1945.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-amber-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-800 text-sm font-bold border border-red-200">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{event.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg whitespace-pre-line">
                      {event.content}
                    </p>

                    {/* Image Gallery */}
                    {event.images.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4 text-gray-600">
                          <ImageIcon className="w-5 h-5" />
                          <span className="font-semibold">Hình ảnh tư liệu</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {event.images.map((img, imgIdx) => (
                            <div 
                              key={imgIdx} 
                              className="group relative rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                              onClick={() => setSelectedImage(img.src)}
                            >
                              <div className="aspect-[16/10] overflow-hidden">
                                <img 
                                  src={img.src} 
                                  alt={img.caption}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                  onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="p-4 bg-gradient-to-b from-white to-gray-50">
                                <p className="text-sm font-medium text-gray-800 line-clamp-2">{img.caption}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB VIDEO */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allVideos.length > 0 ? allVideos.map((vid, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${vid.src}`}
                    title={vid.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 line-clamp-2 mb-1" title={vid.caption}>
                        {vid.caption}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="px-2 py-1 bg-gray-100 rounded-full">
                          {vid.eventDate}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500 truncate" title={vid.eventTitle}>
                          {vid.eventTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <EmptyState 
                message="Đang cập nhật video tư liệu cho giai đoạn này" 
                icon={<Film className="w-12 h-12" />}
              />
            )}
          </div>
        )}

        {/* TAB MUSIC */}
        {activeTab === 'music' && (
          <div className="space-y-4">
            {allMusic.length > 0 ? allMusic.map((song, idx) => (
              <div key={idx} className="group bg-white/90 backdrop-blur-sm rounded-xl border border-gray-300 p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  {/* Album Art */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-amber-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 truncate">{song.caption}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-600">
                        Sáng tác: {song.author || "Không rõ"}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        Thời kỳ: {song.eventDate}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 truncate">
                      {song.eventTitle}
                    </div>
                  </div>

                  {/* Audio Player */}
                  <div className="w-full max-w-xs">
                    <audio controls className="w-full h-10 rounded-full">
                      <source src={song.src} type="audio/mpeg" />
                      Trình duyệt không hỗ trợ phát audio.
                    </audio>
                  </div>
                </div>
              </div>
            )) : (
              <EmptyState 
                message="Đang cập nhật bài hát cho giai đoạn này" 
                icon={<Music className="w-12 h-12" />}
              />
            )}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-red-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
            >
              ✕ Đóng
            </button>
            <img 
              src={selectedImage} 
              alt="Xem chi tiết" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Component cải tiến
function TabBtn({ isActive, onClick, label, icon, count }: { 
  isActive: boolean; 
  onClick: () => void; 
  label: string; 
  icon: React.ReactNode;
  count?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 min-w-[200px] justify-center ${
        isActive 
          ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg' 
          : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-gray-200'
      }`}
    >
      {icon}
      <span>{label}</span>
      {count !== undefined && (
        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
        }`}>
          {count}
        </span>
      )}
    </button>
  );
}

function EmptyState({ message, icon }: { message: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <div className="w-20 h-20 mb-6 text-gray-300">
        {icon}
      </div>
      <p className="text-lg font-medium">{message}</p>
      <p className="text-sm mt-2 text-gray-400">Vui lòng quay lại sau!</p>
    </div>
  );
}
