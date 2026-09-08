'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

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
              {t.footer.desc}
            </p>
            <p className="text-slate-400 text-[11px] pt-1">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider">{t.footer.ecosystem}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-emerald-700 transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-emerald-700 transition-colors">
                  HowDoI Finance Suite
                </a>
              </li>
              <li>
                <Link href="/huong-dan" className="hover:text-emerald-700 transition-colors">
                  {t.nav.writing}
                </Link>
              </li>
            </ul>
          </div>

          {/* App Store & Legal Col */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider">{t.footer.appstore}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
                  <span>{t.footer.supportCenter}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
                  <span>{t.footer.privacyPolicy}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a href="mailto:evolvetech8@outlook.com" className="hover:text-emerald-700 transition-colors">
                  evolvetech8@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Frank (howdoi.id.vn). {t.footer.copyright}</p>
          <div className="flex items-center gap-3">
            <span>Solo Builder • No VC • 100% Bootstrapped</span>
            <span className="text-slate-300">|</span>
            <div className="inline-flex items-center gap-1 font-semibold">
              <span>Language:</span>
              <button
                type="button"
                onClick={() => setLang('vi')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'vi' ? 'text-emerald-700 font-bold bg-slate-100' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                🇻🇳 VI
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'en' ? 'text-emerald-700 font-bold bg-slate-100' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
