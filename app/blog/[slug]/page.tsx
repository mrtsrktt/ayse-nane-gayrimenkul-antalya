import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { siteConfig } from '@/data/siteConfig';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const whatsappInquiry = `Merhaba Ayşe Hanım, web sitenizdeki "${post.title}" başlıklı makalenizi okudum. Bu konu hakkında detaylı danışmanlık almak istiyorum.`;

  return (
    <article className="pt-36 pb-24 bg-[#FAF9F5] min-h-screen text-slate-800">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
          <Link href="/" className="hover:text-[#B89047] transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-[#B89047] transition-colors">Blog & Analizler</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#7E6128] truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
          {post.category}
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F1E36] tracking-tight leading-[1.12]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
          {post.summary}
        </p>

        {/* Author & Meta Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-[#EAE6DF] text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#B89047] shadow-sm">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-[#0F1E36]">{post.author.name}</p>
              <p className="text-[11px] text-[#7E6128] font-medium">{post.author.role}</p>
            </div>
          </div>

          <span className="hidden sm:inline text-slate-300">|</span>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#B89047]" />
            <span>{post.publishDate}</span>
          </div>

          <span className="hidden sm:inline text-slate-300">|</span>

          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#B89047]" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Large Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl bg-slate-100 border border-[#EAE6DF]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Main Reading Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-lg sm:text-xl font-serif text-[#0F1E36] leading-relaxed mb-10 pb-8 border-b border-[#EAE6DF] first-letter:text-5xl first-letter:font-bold first-letter:text-[#B89047] first-letter:mr-3 first-letter:float-left">
          {post.content.intro}
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36] tracking-tight">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-700 leading-relaxed font-light">
                  {p}
                </p>
              ))}

              {section.highlightBox && (
                <div className="my-6 p-6 rounded-2xl bg-white border-l-4 border-[#B89047] shadow-[0_4px_20px_rgba(15,30,54,0.05)] text-sm text-[#7E6128] font-medium leading-relaxed">
                  {section.highlightBox}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion Box */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-[#DFC596] shadow-sm">
          <h3 className="text-xl font-serif font-bold text-[#0F1E36] mb-3">
            Sonuç ve Uzman Görüşü
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">
            {post.content.conclusion}
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappInquiry)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-button text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl shadow-md hover:scale-102 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ayşe Hanım ile Bu Konuyu WhatsApp’ta Görüşün</span>
          </a>
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-[#EAE6DF] flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            Etiketler:
          </span>
          {post.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-white text-[#7E6128] border border-[#EAE6DF] shadow-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#DFC596] shadow-[0_10px_30px_rgba(15,30,54,0.06)] flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#B89047] shadow-sm shrink-0">
            <Image
              src="/ayse-nane.jpg"
              alt="Ayşe Nane"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="text-xl font-serif font-bold text-[#0F1E36]">{siteConfig.agentName}</h4>
              <span className="text-xs text-[#7E6128] font-bold">{post.author.role}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              12 yıldır Antalya, Döşemealtı, Lara, Kaş ve Kalkan bölgelerinde lüks konut, müstakil villalar ve stratejik yatırımlar alanında MYK Seviye 5 lisansıyla hizmet vermektedir.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-[#0F1E36] hover:text-[#B89047] flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89047]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C13584] hover:opacity-80"
              >
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Back */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#0F1E36] transition-colors py-3 px-6 rounded-xl border border-[#EAE6DF] bg-white hover:bg-[#FAF9F5] shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Makalelere Dön</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
