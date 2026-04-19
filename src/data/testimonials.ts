import type { ImageMetadata } from "astro";

import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.webp";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.webp";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
import image10 from "../assets/images/10.jpg";

export interface Testimonial {
  image: ImageMetadata;
  alt: string;
  /** Tailwind background color class for the testimonial row. */
  bg: string;
  /** Body copy. May contain `<br />` already. */
  html: string;
}

export const testimonials: Testimonial[] = [
  {
    image: image1,
    alt: "Bà hàng xóm đi buôn đồng nát đọc 300 bài code thiếu nhi rồi làm lead lập trình",
    bg: "bg-indigo-800",
    html: `Bà hàng xóm nhà mình đây, trước đi buôn đồng nát, tình cờ có thằng sinh viên khoa cntt nó bán đống sách cũ. Thế nào mà bà ấy mua "300 bài code thiếu nhi" cầm về đọc.<br />
Rồi sáng đi mua đồng nát, tối về đọc sách, cuối tuần ra quán net thực hành. Sáu tháng sau bà ấy khăn gói lên HN đi phỏng vấn, cũng nhờ code trên giấy nhiều mà mấy bài "whiteboard" bà ấy làm ngon ơ. <br />
Cũng 5 năm rồi, giờ đang làm lead ở một công ty khá lớn. Đúng là cái nghề này mang lại cơ hội đổi đời cho nhiều người.`,
  },
  {
    image: image2,
    alt: "Anh chài lưới làm được 300 bài code thiếu nhi rồi làm freelancer công ty Mỹ",
    bg: "bg-teal-500",
    html: `Quê tôi miền biển, có gia đình cạnh nhà làm nghề chài lưới.<br />
Bữa đi kéo lưới, thấy gì nặng nặng tưởng được mẻ cá to, ai ngờ toàn sách là sách. Nào là "300 bài code thiếu nhi", "Lập trình căn bản", " Machine Learning", "Deep Learning", "AI"...<br />
A định vất đi nhưng nhà mấy đời ko biết mặt chữ là gì nên quyết tâm cầm về gối đầu giường. A đi học bổ túc văn hóa ban đêm phổ cập con chữ. <br />
Ấy thế mà bẵng đi 6 tháng tôi từ thủ đô về thăm A khoe giờ ở nhà làm freelancer cho cty gì ở Mỹ ấy, to lắm, lương xấp xỉ 1 củ Trump/năm.`,
  },
  {
    image: image3,
    alt: "Ông tầm 30 tuổi chuyển ngành làm lập trình viên nhờ 300 bài code thiếu nhi",
    bg: "bg-rose-500",
    html: `Gần nhà mình có ông tầm gần 30, bảo làm cà phê, tiêu mệt quá. <br />
Thế là khăn gói xuống tp học 1 khóa lập trình pithon dip leaning gì đó, xong rồi làm 300 bài code thiếu nhi luyện tập. <br />
Bữa mới nói chuyện khoe đang làm lương cũng 1-2k gì đó!`,
  },
  {
    image: image4,
    alt: "Bác 46 tuổi chạy ba gác chuyển nghề làm data science",
    bg: "bg-indigo-500",
    html: `Bác họ tui 46 rồi, chạy ba gác hoài mệt quá đi học lớp code cấp tốc.<br />
Học hết 2 tháng với làm hết bài trong cuốn 300 bài code thiếu nhi, xong apply vào công ty kia làm mảng data science mỗi tháng lương net hơn 400 triệu.`,
  },
  {
    image: image5,
    alt: "Ông xe ôm học code, chuyển qua công ty AI lương cao",
    bg: "bg-indigo-800",
    html: `Ông xe ôm xóm mình sinh năm 82, hôm trước chạy xe lớ ngớ thế nào rớt xuống cống, rồi nhặt được cuốn lập trình "code thiếu nhi" gì gì đó.<br />
Về đọc đâu hơn 1 tháng rồi ra HN làm cho công ty trí tuệ nhân tạo to lắm, mới làm 1 năm mua được nhà HN, mua được thêm con mazda 6 rồi.`,
  },
  {
    image: image6,
    alt: "Người bán hủ tiếu chuyển sang làm blockchain và AI",
    bg: "bg-teal-500",
    html: `Giống tôi, trước đẩy xe hủ tiếu ngoài đường vô tình bắt gặp nhà nọ mở thời sự về blocktrain, thế là cứ ngày đi bán tối về coi NTN với tranh thủ coi clocktrain 1 xíu.<br />
Về nhà tối nào tôi cũng làm 3 bài trong "300 bài code thiếu nhi", mà sau 3 tháng cũng apply được công ty về tiền ảo.<br />
Giờ tôi đánh sang cả mảng AI nữa, mới viết app di dộng auto deepfake có người trả 300k$ chưa bán.`,
  },
  {
    image: image7,
    alt: "Phụ hồ công trình chuyển sang làm AI, ML sau 3 tháng luyện code",
    bg: "bg-rose-500",
    html: `Năm ngoái tui đi fuho sml ngoài công trình.<br />
Vô tình tui nhặt dc cuốn sách 300 bài lập trình dành cho thiếu nhi về nhà luyện tập theo.<br />
Sau 3 tháng, tui tự tin apply 1 cty chuyên về AI, ML ở quận 1 lương 3k chưa thưởng hay phụ cấp đây!`,
  },
  {
    image: image8,
    alt: "Người làm nhà hàng chuyển sang dev full stack",
    bg: "bg-indigo-500",
    html: `6 tháng trước làm nhà hàng vất vả quá, trong lúc thái thịt đọc lướt được cuốn java căn bản với 300 bài code thiếu nhi.<br />
Bây giờ dev full stack lương 2,2k rồi.`,
  },
  {
    image: image9,
    alt: "Chú bán SIM chuyển sang làm dev cứng FPT",
    bg: "bg-indigo-800",
    html: `Ông chú tôi làm sales sim số đẹp cho Viettel, đợt rồi đói ăn quá nên vất cho cuốn lập trình code thiếu nhi gì đấy.<br />
6 tháng sau ổng vào làm dev cứng FPT rồi , nghe bảo lương 2k vì ngành này đang hot.`,
  },
  {
    image: image10,
    alt: "Công nhân mệt mỏi chuyển sang làm freelancer lập trình tại nhà",
    bg: "bg-teal-500",
    html: `Ông già tôi làm công nhân than đuối quá, muốn kiếm việc gì nhẹ hơn.<br />
Tôi giới thiệu ổng khoá học HTML/CSS/PHP trên ucademy với làm bài tập trong cuốn 300 bài code thiếu nhi.<br />
Sau 6 tháng, giờ ổng ở nhà làm freelancer rung đùi hàng tháng tài khoản cứ bắn vào mấy ngàn $.<br />
Đang tính bảo bà già khỏi đi làm nữa ở nhà mà xài tiền.`,
  },
];
