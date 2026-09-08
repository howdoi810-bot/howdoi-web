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
  title: "Frank — Solo Indie Developer & Product Maker",
  description:
    "Trang cá nhân và hệ sinh thái sản phẩm của Frank — Nhà phát triển độc lập (Indie Developer). Tác giả ứng dụng Cho Con (iOS) và bộ công cụ HowDoI.",
  metadataBase: new URL("https://howdoi.id.vn"),
  keywords: [
    "Frank indie developer",
    "Frank solo maker",
    "Cho Con app iOS",
    "HowDoI",
    "howdoi.id.vn",
    "lập trình viên độc lập",
    "indie hacker vietnam",
    "iOS developer",
  ],
  authors: [{ name: "Frank (EvolveTech / HowDoI)" }],
  openGraph: {
    title: "Frank — Solo Indie Developer & Product Maker",
    description:
      "Tự tay thiết kế và phát triển các sản phẩm công nghệ tinh gọn, giải quyết các vấn đề thực tế trong cuộc sống.",
    url: "https://howdoi.id.vn",
    siteName: "Frank Indie Developer",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank — Solo Indie Developer & Product Maker",
    description: "Building focused, useful software for everyday life.",
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
