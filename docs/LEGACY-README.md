# HowDoI.vn — Tiếng Nói Độc Lập Về Tài Chính Cá Nhân Cho Người Việt

> *"Giúp người Việt không còn sợ hãi tiền bạc, làm chủ tài chính và sống an tâm hơn."* — Frank

Nền tảng tài chính cá nhân thực chiến kết hợp giữa:
1. **Web Platform (`howdoi.id.vn`)**: Bộ công cụ tính tài chính tự động (Lãi kép, Lương Gross-Net 2026, Ngân sách 50/30/20, Vay mua nhà) và kho cẩm nang thực chiến.
2. **Hệ thống Backend & API dùng chung**: Thiết kế sẵn để kết nối trực tiếp với ứng dụng **iOS App** tiếp theo mà Frank sẽ phát hành.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: Next.js 15 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS, Lucide Icons, Inter Font (hỗ trợ tối ưu tiếng Việt)
- **Biểu đồ tài chính tương tác**: Recharts
- **Backend & API**: Next.js Route Handlers (`/api/subscribe`)
- **Tối ưu SEO**: Metadata động, OpenGraph, JSON-LD Schema

---

## 🚀 Chạy Ứng Dụng Trên Máy Local

1. Mở terminal tại thư mục này:
   ```bash
   cd "/Volumes/SIDE HUSTLE/HOWDOI"
   ```
2. Khởi động server phát triển:
   ```bash
   npm run dev
   ```
3. Mở trình duyệt tại: [http://localhost:3000](http://localhost:3000)

---

## 📱 Sẵn Sàng Cho Ứng Dụng iOS Của Frank

Kiến trúc thư mục và thuật toán tính toán tại `lib/finance-math.ts` được tách biệt hoàn toàn dưới dạng pure TypeScript/JavaScript.

Khi phát triển ứng dụng di động iOS (Flutter hoặc React Native / Swift):
- Các thuật toán tính lãi kép, tính thuế TNCN, phân bổ 6 chiếc lọ có thể tái sử dụng 100%.
- Endpoint `/api/subscribe` và cơ sở dữ liệu Supabase kết nối trực tiếp với ứng dụng iOS qua Supabase SDK mà không cần viết lại backend.

---

## 🌐 Hướng Dẫn Cấu Hình Tên Miền `howdoi.id.vn` & Bật SSL Miễn Phí

Hiện tại tên miền `howdoi.id.vn` đang trỏ vào Netlify nhưng bị lỗi chứng chỉ SSL (`*.netlify.app`). Để trang web hoạt động mượt mà với ổ khóa xanh an toàn:

### Cách 1: Triển khai lên Vercel (Khuyên dùng, 2 phút)
1. Đẩy mã nguồn lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial HowDoI personal finance platform"
   git branch -M main
   # Đẩy lên repo GitHub của bạn
   ```
2. Đăng nhập [Vercel.com](https://vercel.com) -> Chọn **Import Git Repository** -> Bấm **Deploy**.
3. Vào mục **Settings** -> **Domains** -> Nhập `howdoi.id.vn`.
4. Mở trang quản trị nhà đăng ký tên miền của bạn (ví dụ: PA Việt Nam, Mắt Bão, Tenten, v.v.):
   - Thêm bản ghi **A**: Host `@` trỏ tới IP `76.76.21.21`
   - Thêm bản ghi **CNAME**: Host `www` trỏ tới `cname.vercel-dns.com`
5. Vercel sẽ tự động cấp chứng chỉ SSL HTTPS miễn phí trong vòng 2 phút.
