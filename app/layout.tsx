import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { SITE, isPublicRelease } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "HowDoI - Practical GitHub Setup Guides", template: "%s | HowDoI" },
  description: SITE.description,
  robots: { index: isPublicRelease(), follow: true },
  openGraph: { siteName: "HowDoI", locale: "en_US", type: "website" },
  twitter: { card: "summary" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased min-h-screen flex flex-col">
    <a className="hd-skip" href="#main-content">Skip to content</a>
    <Header />
    <LanguageProvider><main id="main-content" className="flex-1" tabIndex={-1}>{children}</main></LanguageProvider>
    <Footer />
  </body></html>;
}
