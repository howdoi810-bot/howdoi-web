import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frank — Solo Indie Developer & Product Maker",
  description:
    "Official portfolio and software studio of Frank — Solo Indie Developer. Building simple, useful apps for everyday life.",
  metadataBase: new URL("https://howdoi.id.vn"),
  keywords: [
    "Frank indie developer",
    "Frank solo maker",
    "HowDoI",
    "howdoi.id.vn",
    "lập trình viên độc lập",
    "indie hacker vietnam",
    "iOS developer",
    "Vietnamese indie developer",
  ],
  authors: [{ name: "Frank (EvolveTech / HowDoI)" }],
  openGraph: {
    title: "Frank — Solo Indie Developer & Product Maker",
    description: "Designing, coding & shipping useful software for everyday life.",
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
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
