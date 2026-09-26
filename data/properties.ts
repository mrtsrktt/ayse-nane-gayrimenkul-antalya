export interface Property {
  id: string;
  title: string;
  subtitle: string;
  type: 'villa' | 'apartment' | 'land' | 'commercial';
  typeName: string;
  status: 'sale' | 'rent';
  statusName: string;
  badge?: string;
  priceTRY: number;
  priceEUR: number;
  location: string;
  district: string;
  bedrooms: string;
  bathrooms: number;
  area: number; // m²
  lotArea?: number; // arsa payı m²
  buildingAge: string;
  floor?: string;
  features: string[];
  images: string[];
  description: string;
  highlights: string[];
  featured: boolean;
  suitableForCitizenship: boolean;
  rentalYield?: string;
}

export const properties: Property[] = [
  {
    id: "dosemealti-panoramic-villa",
    title: "Döşemealtı Özel Havuzlu Akıllı Müstakil Villa",
    subtitle: "Doğayla iç içe, müstakil bahçeli, ultra lüks akıllı yaşam konsepti",
    type: "villa",
    typeName: "Müstakil Villa",
    status: "sale",
    statusName: "Satılık",
    badge: "Vatandaşlığa Uygun",
    priceTRY: 28500000,
    priceEUR: 780000,
    location: "Döşemealtı, Antalya",
    district: "Döşemealtı",
    bedrooms: "5+1",
    bathrooms: 5,
    area: 520,
    lotArea: 750,
    buildingAge: "Sıfır Yapı",
    floor: "3 Katlı Triplex",
    features: [
      "Özel Isıtmalı Sonsuzluk Havuzu",
      "Akıllı Ev Otomasyonu",
      "Yerden Isıtma & VRF Klima",
      "Özel Hamam & Fin Saunası",
      "2 Araçlık Kapalı Otopark",
      "Otomatik Bahçe Sulama",
      "Güneş Enerjisi Altyapısı",
      "Giyinme Odası & Ebeveyn Banyoları"
    ],
    highlights: [
      "Antalya şehir merkezine 20 dakika",
      "Uluslararası okullara 8 dakika",
      "Havadar ve nemsiz mikroklimalı konum",
      "Hemen taşınmaya hazır müstakil tapulu"
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Antalya'nın gözde villa bölgesi Döşemealtı'nda, modern Akdeniz mimarisiyle inşa edilmiş müstakil şaheser. Yüksek tavanlı ferah salonu, bahçeyle bütünleşen veranda alanı, tuzlu sistem sonsuzluk havuzu ve en üst segment ankastre donanımıyla aileniz için ayrıcalıklı bir yaşam sunuyor.",
    featured: true,
    suitableForCitizenship: true,
    rentalYield: "%7.2 Yıllık Kira Getirisi Potansiyeli"
  },
  {
    id: "lara-falez-penthouse",
    title: "Lara Falezler Kesintisiz Deniz Manzaralı Penthouse",
    subtitle: "Akdeniz ve Beydağları'na hakim panoramik teras ve özel jakuzi",
    type: "apartment",
    typeName: "Lüks Rezidans / Penthouse",
    status: "sale",
    statusName: "Satılık",
    badge: "Öne Çıkan",
    priceTRY: 34500000,
    priceEUR: 940000,
    location: "Lara / Muratpaşa, Antalya",
    district: "Lara",
    bedrooms: "4+1",
    bathrooms: 4,
    area: 310,
    buildingAge: "2 Yaşında",
    floor: "Çatı Katı (10. Kat)",
    features: [
      "Kesintisiz Panoramik Deniz & Dağ Manzarası",
      "Özel Teras Jakuzi & BBQ Alanı",
      "İtalyan Tasarım Ada Mutfak",
      "Gaggenau Üst Segment Ankastre Seti",
      "7/24 Özel Güvenlik & Concierge",
      "Site İçi Açık/Kapalı Havuz & Spa",
      "Falez Parkı ve Yürüyüş Yoluna Sıfır",
      "Kapalı Otoparkta 2 Araçlık Yer"
    ],
    highlights: [
      "Antalya Havalimanı'na sadece 12 dakika",
      "Terracity AVM ve seçkin restoranlara yürüme mesafesinde",
      "Doğrudan denize inen falez asansörüne komşu",
      "Yüksek prim ve prestij garantili lokasyon"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Antalya'nın en prestijli caddesinde, Akdeniz mavisinin tüm tonlarını evinize taşıyan rüya penthouse. Akşam gün batımlarını teras jakuzinizde izlerken şehrin tüm karmaşasından uzakta, en üst düzey güvenlik ve konfor standartlarında yaşayacaksınız.",
    featured: true,
    suitableForCitizenship: true,
    rentalYield: "%8.0 Yıllık Döviz Getirisi"
  },
  {
    id: "kas-kalkan-infinity-villa",
    title: "Kaş Kalkan Panoramik Meis Manzaralı Lüks Villa",
    subtitle: "Özel koya hakim, yüksek döviz kira getirili butik malikane",
    type: "villa",
    typeName: "Yazlık Villa",
    status: "sale",
    statusName: "Satılık",
    badge: "Yüksek Gelir Fırsatı",
    priceTRY: 24000000,
    priceEUR: 655000,
    location: "Kalkan / Kaş, Antalya",
    district: "Kaş",
    bedrooms: "3+1",
    bathrooms: 4,
    area: 260,
    lotArea: 500,
    buildingAge: "1 Yaşında",
    floor: "2 Katlı Dublex",
    features: [
      "Kapanmaz Panoramik Deniz & Adalar Manzarası",
      "Geniş Güneşlenme Terası & Sonsuzluk Havuzu",
      "Havuz Isıtma Sistemi (4 Mevsim Kullanım)",
      "Her Odada Özel Banyo & Manzaralı Balkon",
      "Özel Taş Mimari ve Akdeniz Peyzajı",
      "Airbnb & Yabancı Turizm Ruhsatlı",
      "Full Lüks Eşyalı Satış"
    ],
    highlights: [
      "Yıllık ortalama £40.000 - £50.000 döviz kira getirisi",
      "Kalkan Merkeze ve Marinalara 5 dakika mesafe",
      "Tam mahremiyet ve korunaklı havuz yapısı",
      "Avrupalı ve seçkin tatilcilerin 1 numaralı tercihi"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Kaş Kalkan'ın büyüleyici koylarına ve Meis Adası'na bakan bu özel villa, hem sakin huzurlu bir yaşam hem de İngiliz sterlini bazında yüksek sezonluk kira geliri elde etmek isteyen yatırımcılar için eşsiz bir fırsattır.",
    featured: true,
    suitableForCitizenship: true,
    rentalYield: "%9.5 Yıllık Döviz Getirisi"
  },
  {
    id: "konyaalti-sahil-residence",
    title: "Konyaaltı Sahiline 350m Prestij Rezidans Dairesi",
    subtitle: "Mavi bayraklı plajlara komşu, modern mimari ve sosyal yaşam",
    type: "apartment",
    typeName: "Rezidans Daire",
    status: "sale",
    statusName: "Satılık",
    badge: "Denize Çok Yakın",
    priceTRY: 14750000,
    priceEUR: 405000,
    location: "Konyaaltı / Gürsu, Antalya",
    district: "Konyaaltı",
    bedrooms: "3+1",
    bathrooms: 2,
    area: 175,
    buildingAge: "Sıfır Proje",
    floor: "4. Kat",
    features: [
      "Konyaaltı Plajına 4 Dakika Yürüme Mesafesi",
      "Büyük Açık Yüzme Havuzu ve Çocuk Havuzu",
      "Fitness Center, Sauna ve Buhar Odası",
      "Kapalı Otopark ve Şarj İstasyonu",
      "Doğalgaz Kombili & Yerden Isıtmalı",
      "Özel Tasarım Ada Tezgah & Lüks Mobilyalar",
      "7/24 Kamera ve Güvenlik Görevlisi"
    ],
    highlights: [
      "Boğaçayı marina projesine komşu",
      "Uluslararası kafe ve gurme restoranlar sokağında",
      "Toplu taşıma ve ana arterlere doğrudan bağlantı",
      "İkamet izni ve vatandaşlık kriterlerine uygun"
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Konyaaltı Gürsu'nun en elit caddesinde, plaja havlunuzu omzunuza atıp yürüyebileceğiniz mesafede yer alan bu daire; geniş yaşam alanları, modern malzeme kalitesi ve site olanaklarıyla Akdeniz sahil yaşamını ayağınıza seriyor.",
    featured: true,
    suitableForCitizenship: true,
    rentalYield: "%6.8 Yıllık Kira Getirisi"
  },
  {
    id: "belek-golf-mansion",
    title: "Belek Golf Sahalarına Komşu Özel Tasarım Malikane",
    subtitle: "1.200 m² müstakil bahçe, golf kulübü üyeliği ve özel havuz",
    type: "villa",
    typeName: "Müstakil Malikane",
    status: "sale",
    statusName: "Satılık",
    badge: "Ultra Lüks",
    priceTRY: 45000000,
    priceEUR: 1230000,
    location: "Belek / Serik, Antalya",
    district: "Belek",
    bedrooms: "6+2",
    bathrooms: 6,
    area: 680,
    lotArea: 1200,
    buildingAge: "3 Yaşında",
    floor: "Müstakil Villa",
    features: [
      "PGA Golf Tesislerine Özel Golf Arabası Yolu",
      "Isıtmalı Özel Yüzme Havuzu & Pool Bar",
      "Müştemilat & Ayrı Personel Dairesi",
      "Kış Bahçesi & Şömineli Büyük Salon",
      "Özel Şarap Mahzeni & Sinema Odası",
      "4 Araçlık Kapalı Garaj",
      "Güneş Panelleri ile Sıfır Enerji Tüketimi"
    ],
    highlights: [
      "The Land of Legends tema parkına 7 dakika",
      "Antalya Uluslararası Havalimanı'na 20 dakika",
      "Dünyaca ünlü golf turnuvalarına ev sahipliği yapan bölge",
      "Yüksek sosyo-ekonomik elit komşuluk profili"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Belek'in dünya standartlarındaki çim golf sahaları arasında, geniş peyzajlı botanik bahçesi ve eşsiz mimarisiyle özel olarak projelendirilen bu malikane; mahremiyet, prestij ve huzuru en üst mertebede sunmaktadır.",
    featured: false,
    suitableForCitizenship: true,
    rentalYield: "%7.5 Yıllık Kira Getirisi"
  },
  {
    id: "dosemealti-villa-imari-arsa",
    title: "Döşemealtı Yeniköy Villa İmarlı Yatırımlık Arsa",
    subtitle: "Müstakil tapulu, %20-40 villa emsalli, elit projelerin komşusu",
    type: "land",
    typeName: "Villa İmarlı Arsa",
    status: "sale",
    statusName: "Satılık",
    badge: "Yatırım Fırsatı",
    priceTRY: 9800000,
    priceEUR: 270000,
    location: "Döşemealtı / Yeniköy, Antalya",
    district: "Döşemealtı",
    bedrooms: "Arsa",
    bathrooms: 0,
    area: 1050,
    lotArea: 1050,
    buildingAge: "Boş Parsel",
    features: [
      "Müstakil Parsel Tek Tapu (Hisseli Değildir)",
      "%20 Taban / %40 Toplam İnşaat Emsali",
      "Elektrik, Su, Doğalgaz Altyapısı Hazır",
      "Yolu Açılmış ve Asfalt Cepheli",
      "2 Adet Bağımsız Lüks Villa Yapımına Uygun",
      "Çevresinde Tamamlanmış Lüks Siteler Mevcut",
      "Hemen İnşaat Ruhsatı Alınabilir Durumda"
    ],
    highlights: [
      "Bölgede son 2 yılda %140 değer artışı",
      "Müteahhit veya bireysel yatırımcılar için ideal",
      "Takas ve banka kredisine uygun",
      "Ayşe Nane portföyüne özel tek yetkili satış sözleşmeli"
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Antalya'nın en hızlı prim yapan villa gelişim koridorunda, önü açık doğa manzaralı ve kusursuz altyapıya sahip 1.050 m² müstakil arsa. Kendi hayalinizdeki villayı inşa etmek veya kısa-orta vadede yüksek prim hedefleyen yatırımcılar için kaçırılmayacak fırsat.",
    featured: false,
    suitableForCitizenship: true
  },
  {
    id: "alanya-kargicak-sea-view-residence",
    title: "Alanya Kargıcak Denize Sıfır Ultra Rezidans",
    subtitle: "Alanya Kalesi manzarası, özel plaj iskelesi ve 5 yıldızlı otel konsepti",
    type: "apartment",
    typeName: "Deniz Manzaralı Rezidans",
    status: "sale",
    statusName: "Satılık",
    badge: "Denize Sıfır",
    priceTRY: 8900000,
    priceEUR: 245000,
    location: "Kargıcak / Alanya, Antalya",
    district: "Alanya",
    bedrooms: "2+1",
    bathrooms: 2,
    area: 120,
    buildingAge: "1 Yaşında",
    floor: "6. Kat",
    features: [
      "Kesintisiz Alanya Kalesi ve Akdeniz Manzarası",
      "Siteye Özel Plaj İskelesi ve Alt Geçit",
      "Açık & Kapalı Sonsuzluk Havuzları",
      "Türk Hamamı, Masaj Odaları ve Fitness",
      "A La Carte Restoran ve Havuz Başı Kafe",
      "Full Tasarım Mobilyalar ile Birlikte",
      "Resepsiyon ve 7/24 Güvenlik"
    ],
    highlights: [
      "Gazipaşa-Alanya Havalimanı'na sadece 25 dakika",
      "Yüksek döviz bazlı sezonluk kiralama talebi",
      "Uluslararası mülk sahipleri topluluğu",
      "Tapu devrine ve ikamet başvurusuna hazır"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Alanya'nın huzurlu sahil kasabası Kargıcak'ta, denize sıfır konumda lüks otel konseptini ev konforuyla buluşturan prestij projesi. Geniş balkondan güneşin batışını izlerken Akdeniz rüzgarının tadını çıkarın.",
    featured: false,
    suitableForCitizenship: false,
    rentalYield: "%8.4 Yıllık Döviz Getirisi"
  },
  {
    id: "kundu-turizm-arsa",
    title: "Kundu Oteller Bölgesi Ticari & Butik Otel İmarlı Arsa",
    subtitle: "5 Yıldızlı tatil köylerinin merkezinde, yüksek ticari getiri potansiyeli",
    type: "commercial",
    typeName: "Turizm / Ticari Arsa",
    status: "sale",
    statusName: "Satılık",
    badge: "Yüksek Ticari Değer",
    priceTRY: 62000000,
    priceEUR: 1700000,
    location: "Kundu / Aksu, Antalya",
    district: "Kundu",
    bedrooms: "Ticari",
    bathrooms: 0,
    area: 2400,
    lotArea: 2400,
    buildingAge: "Boş Parsel",
    features: [
      "Kundu Turizm ve Oteller Caddesine Cepheli",
      "Butik Otel, Sağlık Turizmi veya Ticari Merkez İmarı",
      "Antalya Havalimanı'na 10 Dakika Mesafede",
      "Yıllık Milyonlarca Yabancı Turist Trafiği",
      "Müstakil ve Sorunsuz Şirket Mülkiyeti Tapusu",
      "Tüm Altyapı ve Enerji Hatları Parsel Başında"
    ],
    highlights: [
      "Antalya'nın en yüksek cirolu turizm aksı",
      "Sağlık turizmi kliniği veya rezidans otel için ideal",
      "Döviz bazlı kira garantili kurumsal markalara kiralanabilir",
      "Özel yatırımcı dosyası hazırlanmıştır"
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Antalya'nın dünyaca ünlü Kundu turizm merkezinde, lüks 5 yıldızlı resort otellerin hemen yanı başında yer alan 2.400 m² ticari parsel. Kurumsal yatırımcılar ve turizm girişimcileri için stratejik değerde tek portföy.",
    featured: false,
    suitableForCitizenship: true
  }
];
