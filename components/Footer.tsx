import React from 'react';
import Link from 'next/link';
import { Compass, Heart, ShieldAlert, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                HowDoI<span className="text-emerald-500">.vn</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Được sáng lập bởi <strong>Frank</strong> với niềm tin rằng: bất kỳ người Việt nào cũng xứng đáng được tiếp cận với kiến thức tài chính minh bạch, bình dị và không còn phải lo âu về tiền bạc mỗi ngày.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>cho cộng đồng người Việt toàn cầu</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Công cụ tính</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#calculators" className="hover:text-emerald-400 transition-colors">
                  Tính Lãi Kép & Đầu Tư
                </Link>
              </li>
              <li>
                <Link href="/#calculators" className="hover:text-emerald-400 transition-colors">
                  Tính Lương Gross sang Net 2026
                </Link>
              </li>
              <li>
                <Link href="/#calculators" className="hover:text-emerald-400 transition-colors">
                  Quy tắc Quản lý 50/30/20
                </Link>
              </li>
              <li>
                <Link href="/#calculators" className="hover:text-emerald-400 transition-colors">
                  Tính Vay Mua Nhà Trả Góp
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Cẩm nang nổi bật</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/huong-dan/quy-khan-cap-3-6-thang" className="hover:text-emerald-400 transition-colors">
                  Xây dựng quỹ khẩn cấp 3–6 tháng
                </Link>
              </li>
              <li>
                <Link href="/huong-dan/phan-bo-luong-10-15-trieu" className="hover:text-emerald-400 transition-colors">
                  Phân bổ lương 10–15 triệu hiệu quả
                </Link>
              </li>
              <li>
                <Link href="/huong-dan/lai-kep-ky-quan-cho-nguoi-tre" className="hover:text-emerald-400 transition-colors">
                  Sức mạnh lãi kép cho người trẻ
                </Link>
              </li>
              <li>
                <Link href="/huong-dan/5-bay-tai-chinh-lua-dao-pho-bien" className="hover:text-emerald-400 transition-colors">
                  5 bẫy tài chính & lừa đảo phổ biến
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-xs text-slate-500 space-y-3">
          <div className="flex items-start gap-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Tuyên bố miễn trừ trách nhiệm:</strong> Mọi nội dung và công cụ trên <em>howdoi.id.vn</em> được xây dựng hoàn toàn vì mục đích giáo dục và tham khảo kiến thức tài chính cá nhân. HowDoI không phải là tổ chức tư vấn đầu tư được cấp phép và không chịu trách nhiệm cho các quyết định tài chính cá nhân của độc giả.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4">
            <p>© {new Date().getFullYear()} HowDoI (howdoi.id.vn). Đã đăng ký bản quyền.</p>
            <div className="flex gap-4">
              <span>Độc lập</span>
              <span>•</span>
              <span>Minh bạch</span>
              <span>•</span>
              <span>Không phím hàng</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
