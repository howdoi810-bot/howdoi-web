import React from 'react';
import Link from 'next/link';
import { Smartphone, HelpCircle, Mail, ArrowRight, Shield } from 'lucide-react';

export const metadata = {
  title: 'Trung Tâm Hỗ Trợ — HowDoI.vn',
  description: 'Trung tâm hỗ trợ người dùng ứng dụng và cổng thông tin tài chính HowDoI.',
};

export default function GeneralSupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
          <HelpCircle className="w-4 h-4" />
          <span>Trung Tâm Trợ Giúp & Hỗ Trợ</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Chúng Tôi Có Thể Giúp Gì Cho Bạn?
        </h1>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Chọn ứng dụng hoặc dịch vụ bạn cần trợ giúp kỹ thuật, giải đáp thắc mắc hoặc báo lỗi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* App Cho Con */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-rose-300 hover:shadow-lg transition-all group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">Ứng dụng iOS</span>
            <h2 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
              Cho Con - Chuẩn Bị Đón Bé
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Trang hỗ trợ chính thức trên Apple App Store: Hướng dẫn danh sách đồ sơ sinh, giỏ đồ đi sinh, quản lý ngân sách và gửi yêu cầu hỗ trợ kỹ thuật.
            </p>
          </div>
          <div className="pt-6 mt-4 border-t border-slate-100">
            <Link
              href="/support/cho-con"
              className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <span>Vào trang hỗ trợ ứng dụng Cho Con</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* HowDoI Portal */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-lg transition-all group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <HelpCircle className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Nền tảng Web</span>
            <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              HowDoI.vn Tài Chính Cá Nhân
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Hỗ trợ các công cụ tính lãi kép, lương Gross sang Net, quy tắc quản lý chi tiêu và đóng góp nội dung cẩm nang tài chính.
            </p>
          </div>
          <div className="pt-6 mt-4 border-t border-slate-100">
            <a
              href="mailto:evolvetech8@outlook.com"
              className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Gửi email tới Frank (evolvetech8@outlook.com)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
