import type { Metadata } from 'next';
import { Libre_Baskerville, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aysenanegayrimenkul.com'),
  title: 'Ayşe Nane | Antalya Lüks Gayrimenkul & Yatırım Danışmanlığı',
  description:
    'Antalya, Kaş, Kalkan ve Lara hattında seçkin müstakil villalar, panoramik rezidanslar ve yüksek getirili mülk yatırımları. MYK Seviye 5 Lisanslı Danışman Ayşe Nane ile güvenilir danışmanlık.',
  keywords: [
    'Antalya lüks villa',
    'Antalya satılık gayrimenkul',
    'Ayşe Nane',
    'Ayşe Nane gayrimenkul',
    'Döşemealtı satılık villa',
    'Lara deniz manzaralı rezidans',
    'Kaş Kalkan lüks villa',
    'Antalya emlak değerleme',
  ],
  authors: [{ name: 'Ayşe Nane' }],
  openGraph: {
    title: 'Ayşe Nane | Antalya Lüks Gayrimenkul & Yatırım Danışmanı',
    description:
      'Antalya ve Akdeniz çanağında seçkin villalar, rezidanslar ve stratejik gayrimenkul yatırımları. 12 yıllık bölgesel uzmanlık ve yasal güvence.',
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
    <html lang="tr" className={`scroll-smooth ${libreBaskerville.variable} ${manrope.variable}`}>
      <body className="bg-paper text-brand-text font-sans antialiased selection:bg-bronze selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
