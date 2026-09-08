import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HowDoI.vn — Tiếng Nói Độc Lập Về Tài Chính Cá Nhân Việt Nam",
  description:
    "Học cách làm chủ tiền bạc, xóa bỏ nỗi sợ tài chính và sống tự do hơn. Công cụ tính lãi kép, lương Gross-Net, quản lý ngân sách 50/30/20 và cẩm nang thực chiến từ Frank.",
  metadataBase: new URL("https://howdoi.id.vn"),
  keywords: [
    "tài chính cá nhân",
    "công cụ tính lãi kép",
    "tính lương gross sang net 2026",
    "quy tắc 50 30 20",
    "quản lý tài chính cá nhân",
    "đầu tư tích lũy",
    "howdoi",
    "howdoi id vn",
    "Frank tài chính",
  ],
  authors: [{ name: "Frank (HowDoI)" }],
  openGraph: {
    title: "HowDoI.vn — Tiếng Nói Độc Lập Về Tài Chính Cá Nhân Việt Nam",
    description:
      "Công cụ tính tài chính chuẩn xác và cẩm nang thực tế giúp người Việt kiểm soát đồng tiền và xây dựng sự thịnh vượng bền vững.",
    url: "https://howdoi.id.vn",
    siteName: "HowDoI Tài Chính",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HowDoI.vn — Tài Chính Cá Nhân Dành Cho Người Việt",
    description: "Công cụ tính lãi kép, lương Net, ngân sách và cẩm nang thực chiến.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
