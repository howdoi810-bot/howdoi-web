'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { GUIDES, Guide } from '@/content/guides-data';

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', 'Tiết kiệm', 'Đầu tư', 'Quản lý nợ', 'Tâm lý tiền bạc', 'Bảo hiểm'];

  const filteredGuides = selectedCategory === 'Tất cả'
    ? GUIDES
    : GUIDES.filter((g) => g.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
          <BookOpen className="w-4 h-4" />
          <span>Kho Cẩm Nang Thực Chiến</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Học Cách Quản Lý Tiền Bạc & Đầu Tư Thông Minh
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Không thuật ngữ tài chính cao siêu. Các bài viết được đúc kết thực tế, gần gũi và minh bạch giúp bạn làm chủ từng đồng thu nhập của mình.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-slate-200 pb-4">
        <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Chủ đề:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
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
                <span>Đọc bài</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
