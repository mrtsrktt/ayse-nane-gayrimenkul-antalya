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
  ChevronRight
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
    <article className="pt-32 pb-24 bg-white min-h-screen text-slate-900">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-gold-700 transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-gold-700 transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          {post.category}
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
          {post.summary}
        </p>

        {/* Author & Meta Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-400">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900">{post.author.name}</p>
              <p className="text-[11px] text-gold-700">{post.author.role}</p>
            </div>
          </div>

          <span className="hidden sm:inline text-slate-300">|</span>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gold-600" />
            <span>{post.publishDate}</span>
          </div>

          <span className="hidden sm:inline text-slate-300">|</span>

          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold-600" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Large Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
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
        <div className="text-lg sm:text-xl font-serif text-slate-800 leading-relaxed mb-10 pb-8 border-b border-slate-200 first-letter:text-5xl first-letter:font-bold first-letter:text-gold-700 first-letter:mr-2 first-letter:float-left">
          {post.content.intro}
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-700 leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {section.highlightBox && (
                <div className="my-6 p-6 rounded-2xl bg-amber-50/70 border-l-4 border-gold-500 shadow-sm text-sm text-amber-950 font-medium leading-relaxed">
                  {section.highlightBox}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
            Sonuç ve Uzman Görüşü
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            {post.content.conclusion}
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappInquiry)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-button text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ayşe Hanım ile Bu Konuyu WhatsApp’ta Görüşün</span>
          </a>
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            Etiketler:
          </span>
          {post.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-navy-950 text-white border border-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold-400 shrink-0">
            <Image
              src="/ayse-nane.jpg"
              alt="Ayşe Nane"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="text-lg font-serif font-bold text-white">{siteConfig.agentName}</h4>
              <span className="text-xs text-gold-300 font-semibold">{post.author.role}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              12 yıldır Antalya, Döşemealtı, Lara, Kaş ve Kalkan bölgelerinde lüks konut, müstakil villalar ve stratejik yatırımlar alanında MYK Seviye 5 lisansıyla hizmet vermektedir.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-white hover:text-gold-300 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300"
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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors py-2 px-4 rounded-xl border border-slate-300 hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Makalelere Dön</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
