import React from 'react';
import Link from 'next/link';
import { Mail, Heart, Terminal, Shield, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-24 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                F
              </div>
              <span className="font-bold text-slate-900 text-sm">Frank • Indie Maker</span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Xây dựng các ứng dụng di động và công cụ web tinh gọn, giải quyết các nhu cầu thiết thực trong cuộc sống với tinh thần tự do và độc lập.
            </p>
            <p className="text-slate-400 text-[11px] pt-1">
              Based in Vietnam • Crafting for the world
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider">Hệ Sinh Thái</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-emerald-700 transition-colors">
                  Sản phẩm & Tiện ích
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-emerald-700 transition-colors">
                  HowDoI Finance Suite
                </a>
              </li>
              <li>
                <Link href="/huong-dan" className="hover:text-emerald-700 transition-colors">
                  Bài viết & Cẩm nang
                </Link>
              </li>
            </ul>
          </div>

          {/* App Store & Legal Col */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider">Apple App Store</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
                  <span>Trung tâm Hỗ trợ (Support URL)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
                  <span>Quyền riêng tư (Privacy Policy)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a href="mailto:evolvetech8@outlook.com" className="hover:text-emerald-700 transition-colors">
                  Liên hệ: evolvetech8@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Frank (howdoi.id.vn). All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Solo Builder</span>
            <span>•</span>
            <span>No VC</span>
            <span>•</span>
            <span>100% Bootstrapped</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
