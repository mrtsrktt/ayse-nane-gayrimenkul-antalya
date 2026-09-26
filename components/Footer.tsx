'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, ArrowUp, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ivory border-t border-limestone/60 text-brand-muted text-xs pt-16 pb-12">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-limestone/50">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-limestone shrink-0">
                <Image
                  src="/ayse-nane.jpg"
                  alt="Ayşe Nane"
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-ink">
                  AYŞE NANE
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-bronze font-semibold">
                  Antalya Gayrimenkul & Yatırım Danışmanlığı
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-muted leading-relaxed max-w-sm font-normal">
              Döşemealtı villaları, Lara falez hattı ve Kaş-Kalkan kıyılarında; 12 yıllık bölgesel uzmanlık, şeffaf tapu denetimi ve güvenilir mülk danışmanlığı.
            </p>

            <div className="pt-1">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-limestone hover:border-pink-300 text-brand-text hover:text-pink-600 transition-colors text-xs font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-ink text-xs font-bold uppercase tracking-wider">Hızlı Erişim</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#portfoy" className="hover:text-bronze transition-colors">Seçkin Portföy</Link>
              </li>
              <li>
                <Link href="/#bolgeler" className="hover:text-bronze transition-colors">Bölge Rehberi</Link>
              </li>
              <li>
                <Link href="/#degerleme" className="hover:text-bronze transition-colors">Ücretsiz Mülk Değerleme</Link>
              </li>
              <li>
                <Link href="/#yatirim-hesapla" className="hover:text-bronze transition-colors">Yatırım & Amortisman Simülatörü</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-bronze transition-colors">İçgörüler & Piyasa Raporları</Link>
              </li>
              <li>
                <Link href="/#hakkimda" className="hover:text-bronze transition-colors">Ayşe Nane Hakkında</Link>
              </li>
              <li>
                <Link href="/#sss" className="hover:text-bronze transition-colors">Sıkça Sorulan Sorular</Link>
              </li>
            </ul>
          </div>

          {/* Accreditations (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="text-ink text-xs font-bold uppercase tracking-wider">Resmi Akreditasyonlar</h4>
            <div className="space-y-2 text-[11px] text-brand-muted">
              {siteConfig.licenses.map((lic, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white border border-limestone/50">
                  <p className="font-bold text-ink">{lic.title}</p>
                  <p className="text-bronze text-[10px] mt-0.5">{lic.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-muted">
          <p>
            © {new Date().getFullYear()} Ayşe Nane Gayrimenkul. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/kvkk" className="hover:text-ink transition-colors">
              KVKK & Gizlilik Politikası
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-limestone hover:border-bronze hover:text-ink transition-colors"
              title="Yukarı Çık"
              aria-label="Sayfanın Başına Dön"
            >
              <ArrowUp className="w-3.5 h-3.5 text-bronze" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
