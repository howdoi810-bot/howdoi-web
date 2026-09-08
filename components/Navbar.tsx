'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Layers, Calculator, BookOpen, HelpCircle, Menu, X, Mail, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo / Indie Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-emerald-600 transition-colors">
              F
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Frank
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200/60">
                  Indie Maker
                </span>
              </div>
              <span className="block text-[11px] text-slate-500 font-medium -mt-0.5">
                howdoi.id.vn • Product Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/#products"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              Sản phẩm
            </Link>
            <Link
              href="/#tools"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-slate-400" />
              Công cụ tính
            </Link>
            <Link
              href="/huong-dan"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              Bài viết
            </Link>
            <Link
              href="/support"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              Hỗ trợ App (Support)
            </Link>
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:evolvetech8@outlook.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-all hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Gửi thư cho Frank</span>
            </a>
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
            href="/#products"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            Sản phẩm & Ứng dụng
          </Link>
          <Link
            href="/#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <Calculator className="w-4 h-4 text-slate-400" />
            Công cụ tính miễn phí
          </Link>
          <Link
            href="/huong-dan"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            Bài viết & Cẩm nang
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            Hỗ trợ App (Support Portal)
          </Link>
          <a
            href="mailto:evolvetech8@outlook.com"
            className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow"
          >
            <Mail className="w-4 h-4" />
            Gửi email tới Frank
          </a>
        </div>
      )}
    </header>
  );
}
