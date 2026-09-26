import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  ArrowLeft,
  MessageCircle,
  Phone,
  ChevronRight,
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
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
    <article className="pt-32 pb-24 bg-paper min-h-screen text-brand-text">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-brand-muted font-medium">
          <Link href="/" className="hover:text-ink transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-limestone" />
          <Link href="/blog" className="hover:text-ink transition-colors">İçgörüler</Link>
          <ChevronRight className="w-3.5 h-3.5 text-limestone" />
          <span className="text-bronze truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 mb-12">
        <div className="flex items-center gap-2">
          <span className="w-5 h-px bg-bronze" />
          <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-[1.18] tracking-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
          {post.summary}
        </p>

        {/* Author & Meta Bar */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-limestone/50 text-xs text-brand-muted">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-limestone shrink-0">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-serif font-bold text-ink">{post.author.name}</p>
              <p className="text-[11px] text-bronze">{post.author.role}</p>
            </div>
          </div>

          <span className="text-limestone">•</span>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-bronze" />
            <span>{post.publishDate}</span>
          </div>

          <span className="text-limestone">•</span>

          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-bronze" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Large Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="relative h-72 sm:h-[460px] rounded-2xl overflow-hidden bg-ivory border border-limestone/60 shadow-sm">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Reading Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Intro */}
        <div className="text-lg font-serif text-ink leading-relaxed mb-10 pb-8 border-b border-limestone/40">
          {post.content.intro}
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-ink leading-snug">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {section.highlightBox && (
                <div className="my-6 p-5 rounded-xl bg-ivory border-l-2 border-bronze text-xs sm:text-sm text-brand-text font-medium leading-relaxed">
                  {section.highlightBox}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-ivory border border-limestone/60">
          <h3 className="text-lg font-serif font-bold text-ink mb-2">
            Sonuç ve Danışman Notu
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-5 font-normal">
            {post.content.conclusion}
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappInquiry)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ayşe Hanım ile Bu Konuyu WhatsApp’ta Görüşün</span>
          </a>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-limestone/40 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-brand-muted mr-1">
            Etiketler:
          </span>
          {post.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-xs px-2.5 py-1 rounded bg-ivory text-brand-text border border-limestone/50"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="mt-10 p-6 rounded-xl bg-white border border-limestone/60 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-limestone shrink-0">
            <Image
              src="/ayse-nane.jpg"
              alt="Ayşe Nane"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-1.5 flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="text-base font-serif font-bold text-ink">{siteConfig.agentName}</h4>
              <span className="text-xs text-bronze font-semibold">{post.author.role}</span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed font-normal">
              12 yıldır Antalya, Döşemealtı, Lara ve Kaş hattında lüks konut, müstakil villalar ve stratejik yatırımlar alanında MYK Seviye 5 lisansıyla hizmet vermektedir.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-ink hover:text-bronze flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-bronze" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <span className="text-limestone">•</span>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:opacity-80"
              >
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="btn-secondary text-xs inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-bronze" />
            <span>Tüm Makalelere Dön</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
