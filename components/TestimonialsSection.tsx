'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="editorial-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
            Güven & Referanslar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight mb-4">
            Müşterilerimizin Gözünden <br />
            <span className="gold-gradient-text italic font-serif font-normal">Ayşe Nane ile Çalışmak</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
            Antalya’da ev sahibi olan aileler ve yüksek getiri sağlayan uluslararası yatırımcıların gerçek deneyimleri.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#EAE6DF] rounded-3xl p-6 flex flex-col justify-between hover:border-[#DFC596] shadow-[0_10px_30px_rgba(15,30,54,0.06)] hover:shadow-[0_20px_45px_rgba(15,30,54,0.12)] transition-all duration-300"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#B89047]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B89047] text-[#B89047]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#DFC596]" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6 font-light">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Transaction */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#DFC596] shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F1E36]">{item.name}</h4>
                    <p className="text-[11px] text-[#7E6128] font-medium">{item.role}</p>
                    <p className="text-[10px] text-slate-400">{item.location}</p>
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{item.transaction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
