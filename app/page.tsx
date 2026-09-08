'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Wallet,
  PieChart,
  Building2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Lock,
  Smartphone,
} from 'lucide-react';

import CompoundInterestCalc from '@/components/calculators/CompoundInterestCalc';
import GrossNetCalc from '@/components/calculators/GrossNetCalc';
import BudgetCalc from '@/components/calculators/BudgetCalc';
import LoanCalc from '@/components/calculators/LoanCalc';
import NewsletterWaitlist from '@/components/NewsletterWaitlist';
import { GUIDES } from '@/content/guides-data';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'laikep' | 'grossnet' | 'budget' | 'loan'>('laikep');

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-12 overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/50 via-teal-50/20 to-transparent pointer-events-none -z-10 blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>HowDoI.vn — Tiếng Nói Độc Lập Về Tài Chính Cá Nhân</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15]">
            Người Việt Xứng Đáng Được{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
              Sống An Tâm
            </span>
            , Không Còn Nỗi Sợ Về Tiền Bạc.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tôi là <strong>Frank</strong>. Tôi tạo ra <strong>HowDoI</strong> để giúp bạn giải mã các con số tài chính phức tạp, thoát khỏi vòng xoáy lương mòn và từng bước làm chủ tương lai của chính mình.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <a
              href="#calculators"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Dùng công cụ tính tài chính</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/huong-dan"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Đọc cẩm nang thực chiến</span>
            </Link>
          </div>

          {/* Trust Value Pillars */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">100% Độc Lập</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Không nhận tài trợ lừa đảo, không phím hàng.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
              <Lock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Bảo Mật & Miễn Phí</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Mọi phép tính chạy ngay trên máy bạn.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Toán Học Chuẩn Xác</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Cập nhật luật BHXH & Thuế TNCN 2026.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Sắp Có Bản iOS App</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Trợ lý quản lý tài chính bỏ túi tiện lợi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CALCULATORS SUITE */}
      <section id="calculators" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-6">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Hộp Công Cụ Thực Chiến
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Tính Toán Tài Chính Chuẩn Xác Cho Người Việt
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Chọn công cụ bạn cần dưới đây để tính toán ngay lập tức:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab('laikep')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'laikep'
                ? 'bg-white text-emerald-800 shadow-md scale-100'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            Lãi Kép & Tích Lũy
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('grossnet')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'grossnet'
                ? 'bg-white text-blue-800 shadow-md scale-100'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Wallet className="w-4 h-4 text-blue-600" />
            Lương Gross - Net
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('budget')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'budget'
                ? 'bg-white text-teal-800 shadow-md scale-100'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <PieChart className="w-4 h-4 text-teal-600" />
            Ngân Sách 50/30/20
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('loan')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'loan'
                ? 'bg-white text-amber-900 shadow-md scale-100'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-600" />
            Vay Mua Nhà / Xe
          </button>
        </div>

        {/* Active Calculator Component */}
        <div className="pt-4 transition-all">
          {activeTab === 'laikep' && <CompoundInterestCalc />}
          {activeTab === 'grossnet' && <GrossNetCalc />}
          {activeTab === 'budget' && <BudgetCalc />}
          {activeTab === 'loan' && <LoanCalc />}
        </div>
      </section>

      {/* 3. FRANK'S MISSION STORY */}
      <section id="mission" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-950/40 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Lời tâm sự từ Frank</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              Tại sao tôi xây dựng HowDoI?
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Lớn lên tại Việt Nam, tôi chứng kiến quá nhiều người thân và bạn bè rơi vào căng thẳng vì tiền bạc. Chúng ta được dạy cách giải tích phân, làm thơ, nhưng không ai dạy chúng ta cách quản lý một tháng lương 10 triệu, cách bảo vệ gia đình trước bẫy nợ tín dụng, hay làm thế nào để tiền tiết kiệm không bị lạm phát ăn mòn.
              </p>
              <p>
                Mạng xã hội tràn ngập những lời hứa hẹn làm giàu sau một đêm, các nhóm 'phím lệnh', các dự án cam kết lãi suất phi thực tế. Kết quả là nhiều người mất trắng số tiền mồ hôi nước mắt và càng sợ hãi tài chính hơn.
              </p>
              <p className="text-emerald-300 font-semibold">
                HowDoI ra đời để trở thành một điểm tựa đáng tin cậy. Ở đây không có thuật ngữ đao to búa lớn, không có lừa dối, chỉ có sự thật, toán học minh bạch và sự đồng cảm.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-lg">
                F
              </div>
              <div>
                <span className="font-bold text-white block">Frank</span>
                <span className="text-xs text-slate-400">Người sáng lập HowDoI & Kỹ sư sản phẩm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Cẩm Nang Thực Chiến
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Bài Viết Mới Nhất Dành Cho Bạn
            </h2>
          </div>
          <Link
            href="/huong-dan"
            className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES.slice(0, 3).map((guide) => (
            <article
              key={guide.slug}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-lg transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {guide.category}
                  </span>
                  <span className="text-slate-400">{guide.readTime}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors leading-snug">
                  <Link href={`/huong-dan/${guide.slug}`}>{guide.title}</Link>
                </h3>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{guide.date}</span>
                <Link
                  href={`/huong-dan/${guide.slug}`}
                  className="font-semibold text-emerald-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Đọc tiếp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. NEWSLETTER & IOS APP WAITLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterWaitlist />
      </section>
    </div>
  );
}
