'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Smartphone,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Wallet,
  PieChart,
  Building2,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
} from 'lucide-react';

import CompoundInterestCalc from '@/components/calculators/CompoundInterestCalc';
import GrossNetCalc from '@/components/calculators/GrossNetCalc';
import BudgetCalc from '@/components/calculators/BudgetCalc';
import LoanCalc from '@/components/calculators/LoanCalc';
import NewsletterWaitlist from '@/components/NewsletterWaitlist';
import { GUIDES } from '@/content/guides-data';

export default function IndieHomePage() {
  const [activeTab, setActiveTab] = useState<'laikep' | 'grossnet' | 'budget' | 'loan'>('laikep');

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 sm:pt-24 pb-8 overflow-hidden">
        {/* Soft background ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-emerald-100/60 via-teal-50/30 to-transparent pointer-events-none -z-10 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Frank • Solo Indie Developer</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            I design, code & ship{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              useful software
            </span>{' '}
            for everyday life.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Chào bạn, tôi là <strong>Frank</strong>. Tôi tự tay lập trình và vận hành các ứng dụng di động & công cụ web độc lập. Không nhà đầu tư, không bộ máy cồng kềnh — chỉ tập trung giải quyết đúng vấn đề và mang lại giá trị thực tế cho người dùng.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <a
              href="#products"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              <span>Xem các sản phẩm đã phát hành</span>
            </a>
            <a
              href="#tools"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 shadow-sm transition-all flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 text-emerald-600" />
              <span>Dùng thử bộ công cụ miễn phí</span>
            </a>
          </div>

          {/* Indie Maker Stats Bar */}
          <div className="pt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto text-center border-t border-slate-200/80">
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">100%</span>
              <span className="text-[11px] text-slate-500 font-medium">Solo Bootstrapped</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-emerald-600 block">iOS & Web</span>
              <span className="text-[11px] text-slate-500 font-medium">Cross-Platform</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">Offline-First</span>
              <span className="text-[11px] text-slate-500 font-medium">Bảo mật dữ liệu</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHIPPED PRODUCTS & APPS SHOWCASE */}
      <section id="products" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Danh Mục Sản Phẩm
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Các Ứng Dụng Đã & Đang Xây Dựng
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-xs">
            Mỗi sản phẩm đều xuất phát từ một nhu cầu thực tế và được trau chuốt tỉ mỉ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product 1: HowDoI Financial Suite (Web) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-bl-full -z-0 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-white flex items-center justify-center shadow-md">
                  <Wallet className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  🟢 Live • Free Web Platform
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Web App • howdoi.id.vn
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1 group-hover:text-emerald-700 transition-colors">
                  HowDoI Finance Suite
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bộ công cụ tính toán tài chính cá nhân dành cho người Việt: mô phỏng lãi kép với biểu đồ tăng trưởng, chuyển đổi lương Gross sang Net chuẩn luật 2026, lập ngân sách 50/30/20 và tính toán vay ngân hàng.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-lg">
                  Next.js 15
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-lg">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-lg">
                  Recharts
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
              <a
                href="#tools"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors"
              >
                <span>Dùng ngay bên dưới</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/huong-dan"
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                Đọc cẩm nang tài chính
              </Link>
            </div>
          </div>

          {/* Product 2: Mobile & Web Utilities (In Development) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-50 rounded-bl-full -z-0 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-slate-800 text-white flex items-center justify-center shadow-md">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                  ⚡ In Development • iOS & Web
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Mobile & Productivity Lab
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                  Personal Apps & Micro-Tools
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Các ứng dụng di động iOS bản địa (Native iOS) và công cụ tiện ích hỗ trợ năng suất cá nhân, quản lý công việc và cuộc sống theo triết lý tinh gọn, ưu tiên lưu trữ offline và bảo vệ quyền riêng tư 100%.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-lg">
                  SwiftUI / iOS
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-lg">
                  Offline-First
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-lg">
                  Zero Tracking
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
              <Link
                href="/support"
                className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
              >
                <span>Hỗ Trợ Ứng Dụng (Support Portal)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                Chính sách bảo mật
              </Link>
            </div>
          </div>

        </div>

        {/* Product 3: Next Thing / Lab teaser */}
        <div className="p-6 rounded-2xl bg-slate-100/70 border border-dashed border-slate-300 text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-700 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">What&apos;s next? Đang ấp ủ sản phẩm tiếp theo...</h4>
              <p className="text-xs text-slate-500">Thử nghiệm các tiện ích AI và micro-tools hỗ trợ năng suất cá nhân.</p>
            </div>
          </div>
          <a
            href="mailto:evolvetech8@outlook.com"
            className="text-xs font-bold px-4 py-2 bg-white rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 shrink-0 transition-colors"
          >
            Đề xuất ý tưởng cho Frank →
          </a>
        </div>
      </section>

      {/* 3. INTERACTIVE TOOLS PLAYGROUND */}
      <section id="tools" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Interactive Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Bộ Công Cụ Tính Toán Miễn Phí
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
            Một phần trong hệ sinh thái sản phẩm HowDoI. Chọn công cụ để tính toán ngay:
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab('laikep')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'laikep'
                ? 'bg-white text-emerald-800 shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            Lãi Kép & Tích Lũy
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('grossnet')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'grossnet'
                ? 'bg-white text-blue-800 shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wallet className="w-4 h-4 text-blue-600" />
            Lương Gross - Net
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('budget')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'budget'
                ? 'bg-white text-teal-800 shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <PieChart className="w-4 h-4 text-teal-600" />
            Ngân Sách 50/30/20
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('loan')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'loan'
                ? 'bg-white text-amber-900 shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-600" />
            Vay Mua Nhà / Xe
          </button>
        </div>

        {/* Tab Content */}
        <div className="pt-2">
          {activeTab === 'laikep' && <CompoundInterestCalc />}
          {activeTab === 'grossnet' && <GrossNetCalc />}
          {activeTab === 'budget' && <BudgetCalc />}
          {activeTab === 'loan' && <LoanCalc />}
        </div>
      </section>

      {/* 4. FRANK'S SOLO PHILOSOPHY & TECH STACK */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <Terminal className="w-3.5 h-3.5" />
              <span>Indie Dev Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Tại sao tôi chọn con đường Solo Indie Developer?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tôi tin vào sức mạnh của sự tinh gọn. Khi một kỹ sư làm chủ toàn bộ quy trình từ ý tưởng, thiết kế UI/UX, viết code front-end/back-end đến hỗ trợ người dùng, sản phẩm sẽ được tạo ra với sự thấu hiểu sâu sắc nhất mà không bị phân mảnh qua các tầng họp hành báo cáo.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Vũ Khí Công Nghệ (Tech Stack Của Frank)
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 bg-slate-800 text-emerald-400 font-mono rounded-lg border border-slate-700">
                Swift / SwiftUI (iOS)
              </span>
              <span className="px-3 py-1.5 bg-slate-800 text-cyan-400 font-mono rounded-lg border border-slate-700">
                Flutter (Cross-platform)
              </span>
              <span className="px-3 py-1.5 bg-slate-800 text-white font-mono rounded-lg border border-slate-700">
                Next.js 15 (React 19)
              </span>
              <span className="px-3 py-1.5 bg-slate-800 text-blue-400 font-mono rounded-lg border border-slate-700">
                TypeScript
              </span>
              <span className="px-3 py-1.5 bg-slate-800 text-teal-400 font-mono rounded-lg border border-slate-700">
                Tailwind CSS
              </span>
              <span className="px-3 py-1.5 bg-slate-800 text-amber-400 font-mono rounded-lg border border-slate-700">
                Python / Anaconda
              </span>
              <span className="px-3 py-1.5 bg-slate-800 text-rose-400 font-mono rounded-lg border border-slate-700">
                SQLite / Supabase
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER / FOLLOW MY JOURNEY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterWaitlist />
      </section>
    </div>
  );
}
