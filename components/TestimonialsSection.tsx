'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#070A12] text-white relative overflow-hidden border-t border-white/[0.08]">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 text-[#DEC07E] text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DEC07E]" />
            Güven & Referanslar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Müşterilerimizin Gözünden <br />
            <span className="gold-gradient-text italic font-serif font-normal">Ayşe Nane ile Çalışmak</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Antalya’da ev sahibi olan aileler ve yüksek getiri sağlayan uluslararası yatırımcıların gerçek deneyimleri.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0C1222] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#DEC07E]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#DEC07E] text-[#DEC07E]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#DEC07E]/30" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Transaction */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C5A059]/40 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.name}</h4>
                    <p className="text-[11px] text-[#DEC07E] font-medium">{item.role}</p>
                    <p className="text-[10px] text-slate-500">{item.location}</p>
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
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
