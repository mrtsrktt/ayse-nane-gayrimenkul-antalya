export interface SiteConfig {
  agentName: string;
  agencyName: string;
  tagline: string;
  experienceYears: number;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinUrl: string;
  youtubeUrl: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  licenses: {
    title: string;
    code: string;
  }[];
}

export const siteConfig: SiteConfig = {
  agentName: "Ayşe Nane",
  agencyName: "Ayşe Nane Gayrimenkul & Yatırım",
  tagline: "Antalya’da Hayalinizdeki Yaşama ve Güvenli Yatırıma Açılan Kapı",
  experienceYears: 12,
  phone: "+905051725284",
  phoneDisplay: "+90 (505) 172 52 84",
  whatsappNumber: "905051725284",
  email: "info@aysenanegayrimenkul.com",
  address: "Şirinyalı Mah. İsmet Gökşen Cad. No: 48/A, Muratpaşa / Antalya",
  city: "Antalya, Türkiye",
  instagramUrl: "https://www.instagram.com/aysenane.gayrimenkul?stkn=ems4dWJ6YjVsanJw",
  instagramHandle: "@aysenane.gayrimenkul",
  linkedinUrl: "https://linkedin.com",
  youtubeUrl: "https://youtube.com",
  stats: [
    {
      value: "850M+ ₺",
      label: "Tamamlanan İşlem Hacmi",
      sublabel: "Antalya genelinde yüksek değerli portföy yönetimi",
    },
    {
      value: "150+",
      label: "Mutlu Yatırımcı & Aile",
      sublabel: "Yurt içi ve uluslararası memnun alıcı & satıcı",
    },
    {
      value: "12+",
      label: "Yıllık Bölge Uzmanlığı",
      sublabel: "Antalya, Kaş, Kalkan ve Alanya pazar dinamikleri",
    },
    {
      value: "%99.4",
      label: "Müşteri Memnuniyeti",
      sublabel: "Şeffaf, güvenilir ve yasal güvenceli danışmanlık",
    },
  ],
  licenses: [
    {
      title: "MYK Seviye 5 Sorumlu Emlak Danışmanı",
      code: "Yetki Belge No: YB0044/17UY0333-5/00/1245",
    },
    {
      title: "Taşınmaz Ticareti Yetki Belgesi",
      code: "Antalya Ticaret İl Müdürlüğü No: 0701234",
    },
    {
      title: "TÜGEM & ATSO Akredite Üyesi",
      code: "Tüm Girişimci Emlak Müşavirleri Derneği",
    },
  ],
};
