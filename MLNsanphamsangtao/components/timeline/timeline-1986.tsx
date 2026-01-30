'use client';

import React, { useState } from 'react';
import { FileText, Film, Music, Calendar, Play, Image as ImageIcon, AlertTriangle, DollarSign, ShoppingCart, Users, PiggyBank, Train, BookOpen, Target, Lightbulb, Scale, Globe } from 'lucide-react';

// --- 1. CẤU TRÚC DỮ LIỆU 1986 ---
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

const DATA_1986: TimelineEvent[] = [
  {
    date: '1986',
    title: 'Năm 1986 - Đỉnh Điểm Của Khủng Hoảng Kinh Tế - Xã Hội',
    content: `Năm 1986 thường được nhắc đến như một năm của những con số kinh hoàng về kinh tế, là minh chứng rõ nét nhất cho sự thất bại của mô hình cũ.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2024/12/12/bao-cap.jpg', 
        caption: 'Cảnh xếp hàng thời bao cấp trước Đổi Mới' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'ikKM8nB8v44', 
        caption: 'Phim tài liệu: Đêm trước Đổi Mới - Những năm 80' 
      }
    ],
    music: []
  },
  {
    date: '1986',
    title: '1.1. Siêu Lạm Phát Và Sự Sụp Đổ Của Niềm Tin Vào Đồng Tiền',
    content: `Dữ liệu lịch sử ghi nhận tỷ lệ lạm phát phi mã lên tới 774% vào cuối năm 1986. Để hình dung con số này trong một sản phẩm sáng tạo, hãy tưởng tượng giá trị đồng lương của một công nhân viên chức bốc hơi từng ngày, thậm chí từng giờ. Một người lao động nhận lương đầu tháng có thể mua được một lượng gạo nhất định, nhưng đến cuối tháng, số tiền đó chỉ còn mua được vài phần nhỏ. Tiền mặt trở nên "nóng bỏng tay", người dân tìm cách quy đổi ngay sang hiện vật như vàng, đô la, gạo, hay bất cứ thứ gì có giá trị tích trữ.

Sự mất giá của đồng tiền kéo theo sự đảo lộn các giá trị xã hội. Những người làm công ăn lương, trí thức, cán bộ nhà nước vốn là rường cột của chế độ lại trở thành tầng lớp dễ bị tổn thương nhất vì thu nhập cố định không đuổi kịp đà tăng giá. Trong khi đó, giới đầu cơ, buôn bán "chợ đen" lại phất lên nhanh chóng. Điều này tạo ra một nghịch lý đau xót trong một xã hội đang hướng tới công bằng, và chính nghịch lý này là động lực buộc Đảng phải nhìn thẳng vào sự thật.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2023/12/24/lam-phat-1986.jpg', 
        caption: 'Lạm phát 774% năm 1986 - Đồng tiền mất giá nhanh chóng' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '1986',
    title: '1.2. Nền Kinh Tế Khan Hiếm',
    content: `Khái niệm "nền kinh tế thiếu" của Janos Kornai hoàn toàn đúng với Việt Nam năm 1986. Không chỉ thiếu vốn, thiếu công nghệ, mà cái thiếu hiện hữu ngay trong đời sống thường nhật: thiếu gạo, thiếu vải, thiếu thuốc men, thiếu xà phòng, thiếu giấy viết cho học sinh. Các cửa hàng mậu dịch quốc doanh biểu tượng của hệ thống phân phối XHCN thường xuyên trong tình trạng trống rỗng hoặc chỉ bày bán những mặt hàng kém chất lượng, tồn kho.

Tình trạng khan hiếm này không phải do năng lực sản xuất của người dân Việt Nam yếu kém bẩm sinh, mà do cơ chế "ngăn sông cấm chợ". Hàng hóa sản xuất ra không được lưu thông tự do mà phải đi qua hệ thống thu mua - phân phối tầng tầng lớp lớp của nhà nước. Nông dân làm ra lúa gạo nhưng không muốn bán cho nhà nước vì giá thu mua quá thấp so với giá thị trường, dẫn đến hiện tượng "lưu thông ách tắc". Những trạm kiểm soát thuế quan mọc lên khắp nơi, ngăn chặn việc mang vác vài cân gạo hay vài mét vải đi qua ranh giới các tỉnh.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2022-08/cua-hang-mau-dich.jpg', 
        caption: 'Cửa hàng mậu dịch quốc doanh trống rỗng thời bao cấp' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: 'Tết Bính Dần 1986',
    title: '1.3. Bức Tranh Xã Hội Qua Lăng Kính Tết Bính Dần 1986',
    content: `Để sản phẩm sáng tạo có tính nhân văn và chạm đến cảm xúc người xem, việc tái hiện không khí Tết Bính Dần 1986 là một lựa chọn tuyệt vời. Đây được coi là "cái Tết bao cấp cuối cùng", một cột mốc văn hóa gói gọn cả nỗi gian truân và niềm hy vọng của một thế hệ.

Tết năm 1986 diễn ra vào tháng 2 dương lịch, đúng vào giai đoạn khó khăn nhất sau cuộc đổi tiền năm 1985. Ký ức về cái Tết này không phải là sự đủ đầy của bánh chưng thịt mỡ, mà là nỗi lo âu thường trực về tiêu chuẩn, định mức. Người dân Hà Nội và các thành phố lớn phải xếp hàng từ tờ mờ sáng, sử dụng gạch, đá, nón mê để "xí chỗ" tại các cửa hàng mậu dịch hòng mua được chút nhu yếu phẩm theo tiêu chuẩn bìa phiếu.

Tuy nhiên, trong sự thiếu thốn vật chất ấy, tinh thần cộng đồng lại trỗi dậy mạnh mẽ. Hiện tượng "đụng lợn" là một nét văn hóa đặc sắc: các hộ gia đình hoặc cơ quan chung nhau nuôi lợn, đến Tết thì mổ chia nhau từng phần thịt, bộ lòng. Tiếng lợn kêu, tiếng dao thớt, sự phân chia tỉ mỉ từng lạng thịt nạc, thịt mỡ phản ánh sự chắt chiu và trân trọng thực phẩm đến tột cùng. Hình ảnh ga Hàng Cỏ (Ga Hà Nội) năm 1986 với những đoàn tàu chạy bằng đầu máy hơi nước hoặc diesel cũ kỹ, người dân chen chúc, đu bám trên các toa xe để về quê ăn Tết cũng là một biểu tượng hùng hồn cho khát vọng đoàn viên vượt lên trên nghịch cảnh.

Sự đối lập giữa không khí u ám của kinh tế và sắc đỏ của pháo, của hoa đào, hoa quất tại chợ hoa Hàng Lược tạo nên một chất liệu điện ảnh tuyệt vời. Tiếng pháo nổ đì đùng trong đêm giao thừa năm ấy không chỉ là phong tục, mà dường như còn là tiếng nổ giải tỏa những ức chế, lo toan dồn nén của cả một năm dài, gửi gắm hy vọng vào một sự thay đổi mà lúc đó chưa ai biết rõ hình hài sẽ ra sao.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2024/01/25/tet-binh-dan-1986.jpg', 
        caption: 'Tết Bính Dần 1986 - "Cái Tết bao cấp cuối cùng"' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: 'Tháng 8-12/1986',
    title: '2, Bước Ngoặt Tư Duy - Từ "Diên Hồng 1986" đến Đại hội VI',
    content: `Nếu năm 1986 là một vở kịch lớn của lịch sử Việt Nam, thì Tổng Bí thư Trường Chinh chính là nhân vật trung tâm đầy kịch tính. Được biết đến như một nhà lý luận kiên định và nguyên tắc, nhưng trước thực tế đau xót của đất nước, chính ông là người đã dũng cảm thực hiện cuộc "lột xác" về tư duy. Sau khi Tổng Bí thư Lê Duẩn từ trần vào tháng 7/1986, đồng chí Trường Chinh giữ cương vị Tổng Bí thư và trực tiếp chỉ đạo quá trình soạn thảo Báo cáo chính trị cho Đại hội VI.`,
    images: [
      { 
        type: 'image', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Truong_Chinh_1960.jpg/800px-Truong_Chinh_1960.jpg', 
        caption: 'Tổng Bí thư Trường Chinh - Người dẫn dắt bước ngoặt tư duy' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '25-30/8/1986',
    title: '2.1. Vai Trò Lịch Sử Của Tổng Bí Thư Trường Chinh Và Quá Trình Chuẩn Bị Văn Kiện',
    content: `Quá trình này không hề suôn sẻ. Đã có những cuộc tranh luận nảy lửa giữa quan điểm bảo thủ (muốn giữ nguyên cơ chế cũ, coi mọi cải cách thị trường là chệch hướng CNXH) và quan điểm đổi mới (nhìn thẳng vào sự thật để cứu vãn nền kinh tế). Hội nghị Bộ Chính trị từ ngày 25 đến 30/8/1986 là một mốc son chói lọi. Tại đây, Tổng Bí thư Trường Chinh đã đưa ra kết luận mang tính quyết định: "Đổi mới là yêu cầu bức thiết của sự nghiệp cách mạng, là vấn đề sống còn". Ông nhấn mạnh việc phải tôn trọng quy luật khách quan, thừa nhận cơ cấu kinh tế nhiều thành phần. Cuộc họp này có thể ví như "Hội nghị Diên Hồng" của thời kỳ đổi mới, nơi ý chí của Đảng hòa quyện với lòng dân và thực tiễn cuộc sống. Việc viết lại Báo cáo chính trị dựa trên quan điểm mới là một hành động dũng cảm, bác bỏ những định kiến giáo điều đã ăn sâu bám rễ hàng chục năm.`,
    images: [
      { 
        type: 'image', 
        src: 'https://file3.qdnd.vn/data/images/0/2023/08/30/upload_1803/hoi-nghi-bo-chinh-tri-1986.jpg', 
        caption: 'Hội nghị Bộ Chính trị tháng 8/1986 - "Diên Hồng 1986"' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '12/1986',
    title: '2.2. Đại Hội VI (Tháng 12/1986): Nhìn Thẳng Vào Sự Thật',
    content: `Đại hội đại biểu toàn quốc lần thứ VI của Đảng diễn ra vào tháng 12/1986 tại Hà Nội không mang màu sắc của những lời ca tụng sáo rỗng thường thấy trước đó. Phương châm của Đại hội là "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật". Báo cáo chính trị đã nghiêm khắc thừa nhận những sai lầm trong lãnh đạo kinh tế: bệnh chủ quan, duy ý chí, nóng vội muốn đốt cháy giai đoạn, ham làm lớn, thiên về phát triển công nghiệp nặng trong khi chưa đủ điều kiện.

Sự thừa nhận này không làm giảm uy tín của Đảng, mà ngược lại, đã khôi phục niềm tin trong nhân dân. Nó chứng minh rằng Đảng có khả năng tự sửa sai và tự đổi mới để tiếp tục sứ mệnh lãnh đạo. Đây là luận cứ quan trọng để bảo vệ quan điểm "không chệch hướng CNXH": Đổi mới để củng cố vai trò lãnh đạo của Đảng và tính ưu việt của chế độ, chứ không phải để phủ nhận nó.`,
    images: [
      { 
        type: 'image', 
        src: 'https://dangcongsan.vn/DATA/0/2016/12/15/Dangcongsan/dhoi%20vi%20_16_18_35_234.jpg', 
        caption: 'Đại hội Đảng toàn quốc lần thứ VI (12/1986)' 
      }
    ],
    videos: [
      { 
        type: 'video', 
        src: 'HH5gF0g8OJ4', 
        caption: 'Đổi Mới 1986 - Bước ngoặt lịch sử của Việt Nam' 
      }
    ],
    music: [
      { 
        type: 'audio', 
        src: 'https://www.nhaccuatui.com/mh/auto/Y6nLq4gDcQ2v', 
        caption: 'Mùa Xuân Bên Cửa Sổ', 
        author: 'Xuân Hồng' 
      }
    ]
  },
  {
    date: 'Từ 1986',
    title: '3, Nội Dung Cốt Lõi Của Đổi Mới Kinh Tế - "Phương Thức" Mới Cho CNXH',
    content: `Đại hội VI đã đề ra nội dung cốt lõi của Đổi mới kinh tế, tạo ra "phương thức" mới cho con đường phát triển XHCN ở Việt Nam.`,
    images: [],
    videos: [],
    music: []
  },
  {
    date: '1986',
    title: '3.1. Ba Chương Trình Kinh Tế Lớn: Sự Đảo Chiều Chiến Lược',
    content: `**Chương trình Lương thực – Thực phẩm** được xác định là ưu tiên hàng đầu trong bối cảnh Việt Nam là nước nông nghiệp nhưng người dân vẫn thiếu ăn, phải nhập khẩu lương thực. Đại hội VI đã đặt nông nghiệp vào vị trí "mặt trận hàng đầu", tập trung nguồn lực cho sản xuất lúa gạo và thực phẩm, đồng thời khuyến khích cơ chế khoán để tạo động lực cho nông dân. Việc giải quyết được vấn đề cái ăn không chỉ đáp ứng nhu cầu sống còn mà còn tạo nền tảng ổn định xã hội, làm tiền đề cho phát triển các ngành kinh tế khác.

**Chương trình Hàng tiêu dùng** ra đời nhằm khắc phục tình trạng khan hiếm hàng hóa thiết yếu gây bức xúc xã hội và lạm phát kéo dài. Nhà nước khuyến khích sản xuất các mặt hàng phục vụ đời sống hằng ngày như quần áo, vải vóc, đồ dùng sinh hoạt, giấy vở… Qua đó, chương trình góp phần cải thiện đời sống nhân dân, thu hút lượng tiền mặt trong lưu thông để kiềm chế lạm phát, đồng thời tạo thêm việc làm cho khu vực tiểu thủ công nghiệp.

**Chương trình Hàng xuất khẩu** được triển khai trong bối cảnh nền kinh tế thiếu ngoại tệ, cán cân thanh toán thâm hụt và bị bao vây cấm vận. Đại hội VI chủ trương mở rộng sản xuất các mặt hàng có lợi thế như nông sản, thủy hải sản, thủ công mỹ nghệ để đẩy mạnh xuất khẩu, từng bước chuyển từ cơ chế đóng cửa sang mở cửa hội nhập. Chương trình này giúp tạo nguồn ngoại tệ cho tái đầu tư, phá thế cô lập kinh tế và gắn nền kinh tế Việt Nam với thị trường quốc tế.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vneconomy.vn/images/upload/2024/06/24/doimoi-kinhte.jpg', 
        caption: 'Ba chương trình kinh tế lớn - Đảo chiều chiến lược phát triển' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '1986',
    title: '3.2. Thừa Nhận Nền Kinh Tế Nhiều Thành Phần',
    content: `Trước năm 1986, chỉ có hai thành phần kinh tế được coi là "chính thống" và XHCN: Kinh tế Quốc doanh và Kinh tế Tập thể. Các thành phần khác như cá thể, tư nhân bị coi là tàn dư của chế độ cũ cần phải xóa bỏ.

Đại hội VI đã tạo ra một cuộc cách mạng khi chính thức thừa nhận sự tồn tại khách quan và lâu dài của nền kinh tế nhiều thành phần trong thời kỳ quá độ. Điều này có nghĩa là Đảng chấp nhận cho kinh tế tư nhân, kinh tế cá thể được hoạt động, phát triển. Đây chính là "phương thức" mới: sử dụng động lực lợi ích cá nhân của người sản xuất nhỏ và tư nhân để đóng góp vào sự phát triển chung của xã hội. Việc "cởi trói" này đã giải phóng nguồn lực khổng lồ đang bị kìm nén trong dân, khơi dậy tinh thần khởi nghiệp và làm giàu.

Tuy nhiên, để "không chệch hướng", Nhà nước vẫn giữ vai trò chủ đạo, nắm giữ các ngành then chốt (như năng lượng, viễn thông, tài chính) và sử dụng các công cụ vĩ mô (pháp luật, thuế, chính sách) để điều tiết thị trường, đảm bảo định hướng xã hội chủ nghĩa và công bằng xã hội.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.baodautu.vn/Images/chicuong/2022/08/15/kinh-te-nhieu-thanh-phan.jpg', 
        caption: 'Kinh tế nhiều thành phần được thừa nhận từ Đại hội VI' 
      }
    ],
    videos: [],
    music: []
  },
  {
    date: '1986',
    title: '3.3. Xóa Bỏ Cơ Chế Tập Trung Quan Liêu Bao Cấp',
    content: `Đại hội VI đã tuyên bố xóa bỏ cơ chế tập trung quan liêu bao cấp với đặc trưng "xin – cho", giá cả do Nhà nước ấn định bất chấp quy luật cung – cầu, doanh nghiệp thua lỗ thì được bù, có lãi thì bị thu về. Thay vào đó, nền kinh tế chuyển sang cơ chế hạch toán kinh doanh xã hội chủ nghĩa, trong đó doanh nghiệp phải tự chủ về tài chính, tự vay – tự trả và tự chịu trách nhiệm về kết quả lỗ lãi của mình. Giá cả từng bước được điều chỉnh để phản ánh đúng giá trị sức lao động và quan hệ cung cầu, đồng thời xóa bỏ chế độ giao nộp sản phẩm, chuyển sang quan hệ mua bán bình đẳng và thực hiện nghĩa vụ nộp thuế. Mặc dù đây là quá trình chuyển đổi khó khăn, gây ra tình trạng giải thể hoặc sáp nhập nhiều xí nghiệp quốc doanh yếu kém và dẫn tới thất nghiệp tạm thời, nhưng về lâu dài đã tạo nền tảng cho một nền kinh tế năng động và hiệu quả hơn.`,
    images: [
      { 
        type: 'image', 
        src: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-12/co-che-bao-cap.jpg', 
        caption: 'Xóa bỏ cơ chế tập trung quan liêu bao cấp' 
      }
    ],
    videos: [],
    music: []
  }
];

// --- 2. COMPONENT CHÍNH ---
export function Timeline1986() {
  const [activeTab, setActiveTab] = useState<'info' | 'video' | 'music'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allVideos = DATA_1986.flatMap(event => event.videos.map(v => ({ 
    ...v, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));
  const allMusic = DATA_1986.flatMap(event => event.music.map(m => ({ 
    ...m, 
    eventDate: event.date, 
    eventTitle: event.title 
  })));

  return (
    <div className="space-y-8">
      {/* Header với hiệu ứng nổi bật */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-8 border border-indigo-200/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 tracking-tighter">
                1986
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Đổi Mới - Bước Ngoặt Từ Khủng Hoảng Đến Đột Phá
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
            count={DATA_1986.length}
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
            label="Bài Hát Thời Kỳ" 
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
            {DATA_1986.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-transparent" />
                
                {/* Content Card */}
                <div className="ml-10 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 history-card">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                    <div className="relative">
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg border-4 border-white">
                          <Calendar className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-bold border border-blue-200">
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
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-blue-600" />
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
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
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
              className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors px-4 py-2 bg-black/50 rounded-lg"
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
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
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
