'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Calculator, BookOpen, Smartphone, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                HowDoI<span className="text-emerald-600">.vn</span>
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                Tài chính cá nhân thực chiến
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#calculators"
              className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              Công cụ tính
            </Link>
            <Link
              href="/huong-dan"
              className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-teal-600" />
              Cẩm nang & Bài viết
            </Link>
            <Link
              href="/#mission"
              className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Sứ mệnh
            </Link>
          </nav>

          {/* Desktop CTA: iOS App waitlist */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#ios-app"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow transition-all hover:scale-105"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Sắp có trên iOS</span>
              <span className="px-1.5 py-0.5 text-[9px] bg-emerald-500 text-slate-950 font-bold rounded-full uppercase">
                Early
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/#calculators"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <Calculator className="w-4 h-4 text-emerald-600" />
            Công cụ tính tài chính
          </Link>
          <Link
            href="/huong-dan"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <BookOpen className="w-4 h-4 text-teal-600" />
            Cẩm nang & Bài viết
          </Link>
          <Link
            href="/#mission"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Sứ mệnh của Frank
          </Link>
          <Link
            href="/#ios-app"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold shadow"
          >
            <Smartphone className="w-4 h-4" />
            Đăng ký trải nghiệm iOS App
          </Link>
        </div>
      )}
    </header>
  );
}
