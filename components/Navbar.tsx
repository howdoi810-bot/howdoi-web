'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Calculator, BookOpen, HelpCircle, Menu, X, Mail, Globe, FolderKanban } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, toggleLang, t } = useLanguage();

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
                  {t.nav.role}
                </span>
              </div>
              <span className="block text-[11px] text-slate-500 font-medium -mt-0.5">
                howdoi.id.vn • Product Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#products"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              {t.nav.products}
            </Link>
            <Link
              href="/projects"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <FolderKanban className="w-4 h-4 text-slate-400" />
              {t.nav.allProjects}
            </Link>
            <Link
              href="/#tools"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-slate-400" />
              {t.nav.tools}
            </Link>
            <Link
              href="/huong-dan"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              {t.nav.writing}
            </Link>
            <Link
              href="/support"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              {t.nav.support}
            </Link>
          </nav>

          {/* Language Switcher & Actions (Visible on BOTH Desktop and Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <div className="inline-flex items-center p-1 bg-slate-100/90 border border-slate-200 rounded-full text-xs font-semibold shadow-inner">
              <button
                type="button"
                onClick={() => setLang('vi')}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                  lang === 'vi'
                    ? 'bg-white text-emerald-700 shadow-sm font-bold ring-1 ring-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Chuyển sang Tiếng Việt"
              >
                <span className="text-sm">🇻🇳</span>
                <span className="text-xs">VI</span>
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                  lang === 'en'
                    ? 'bg-white text-emerald-700 shadow-sm font-bold ring-1 ring-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                <span className="text-sm">🇬🇧</span>
                <span className="text-xs">EN</span>
              </button>
            </div>

            {/* Desktop Contact CTA */}
            <a
              href="mailto:evolvetech8@outlook.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-all hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.nav.contact}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
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
          {/* Mobile Lang Selector */}
          <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
            <span className="font-semibold text-slate-500">Ngôn ngữ / Language:</span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setLang('vi')}
                className={`px-3 py-1 rounded-md text-xs font-semibold ${
                  lang === 'vi' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                🇻🇳 Tiếng Việt
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-md text-xs font-semibold ${
                  lang === 'en' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          <Link
            href="/#products"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            {t.nav.products}
          </Link>
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <FolderKanban className="w-4 h-4 text-slate-400" />
            {t.nav.allProjects}
          </Link>
          <Link
            href="/#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <Calculator className="w-4 h-4 text-slate-400" />
            {t.nav.tools}
          </Link>
          <Link
            href="/huong-dan"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            {t.nav.writing}
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            {t.nav.support}
          </Link>
          <a
            href="mailto:evolvetech8@outlook.com"
            className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow"
          >
            <Mail className="w-4 h-4" />
            {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}
