import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://aysenanegayrimenkul.com'),
  title: 'Ayşe Nane | Antalya Lüks Gayrimenkul & Yatırım Danışmanlığı',
  description:
    'Antalya, Kaş, Kalkan, Lara ve Konyaaltı’nda lüks villalar, panoramik sahil rezidansları ve yüksek getirili arsa yatırımları. MYK Seviye 5 Lisanslı Danışman Ayşe Nane ile güvenli mülk alım-satımı.',
  keywords: [
    'Antalya lüks villa',
    'Antalya satılık gayrimenkul',
    'Ayşe Nane',
    'Ayşe Nane gayrimenkul',
    'Döşemealtı satılık villa',
    'Lara deniz manzaralı rezidans',
    'Kaş Kalkan lüks villa',
    'Antalya vatandaşlık yatırımı',
    'Antalya emlak değerleme',
  ],
  authors: [{ name: 'Ayşe Nane' }],
  openGraph: {
    title: 'Ayşe Nane | Antalya Lüks Gayrimenkul & Yatırım Danışmanı',
    description:
      'Antalya ve Akdeniz çanağında seçkin villalar, rezidanslar ve yüksek getirili yatırımlar. 12 yıllık bölgesel uzmanlık ve yasal güvence.',
    url: 'https://aysenanegayrimenkul.com',
    siteName: 'Ayşe Nane Gayrimenkul',
    images: [
      {
        url: '/ayse-nane.jpg',
        width: 800,
        height: 1000,
        alt: 'Ayşe Nane Gayrimenkul Danışmanı',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-gold-500 selection:text-navy-950">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
