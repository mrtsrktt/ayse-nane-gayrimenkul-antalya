export interface RegionGuide {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  averagePriceTrend: string;
  lifestyle: string;
  image: string;
  propertyCount: number;
}

export const regionsData: RegionGuide[] = [
  {
    id: "dosemealti",
    name: "Döşemealtı",
    tagline: "Müstakil Yaşam & Doğa İle İç İçe Lüks Villalar",
    description: "Antalya şehir merkezinin neminden uzak, serin yayla havası ve çam ormanlarıyla çevrili Döşemealtı; geniş bahçeli, havuzlu akıllı villaların ve elit sitelerin başkentidir.",
    highlights: ["Düşük nem oranı & temiz hava", "Geniş arsa paylı lüks villalar", "Hızla prim yapan yatırım bölgesi"],
    averagePriceTrend: "+%110 (Son 2 Yılda)",
    lifestyle: "Sessiz, sakin ve korunaklı aile yaşamı",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
    propertyCount: 18
  },
  {
    id: "lara",
    name: "Lara & Falezler",
    tagline: "Şehir İçi Elit Yaşam & Panoramik Akdeniz",
    description: "Antalya'nın kalbi Muratpaşa'da falezlerin üzerinde yükselen Lara; lüks restoranları, Terracity AVM'si, sahil parkları ve havalimanına yakınlığıyla daimi bir prestij simgesidir.",
    highlights: ["Falez bandında kesintisiz deniz manzarası", "Havalimanına 12 dk mesafe", "En köklü ve yüksek likiditeye sahip bölge"],
    averagePriceTrend: "+%95 Değer Artışı",
    lifestyle: "Canlı sahil ve kozmopolit şehir hayatı",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    propertyCount: 24
  },
  {
    id: "konyaalti",
    name: "Konyaaltı",
    tagline: "Mavi Bayraklı Sahil & Boğaçayı Marina",
    description: "Dünyaca ünlü 7 kilometrelik sahil şeridi, modern yürüyüş kordonu ve Boğaçayı projesiyle Konyaaltı; yabancı yatırımcıların ve dinamik ailelerin ilk tercihidir.",
    highlights: ["Mavi bayraklı plaja yürüme mesafesi", "Zengin yabancı mülk sahibi topluluğu", "Sürekli yüksek kira getirisi"],
    averagePriceTrend: "+%98 Değer Artışı",
    lifestyle: "Deniz, spor ve Akdeniz tatil ritmi",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
    propertyCount: 22
  },
  {
    id: "kas-kalkan",
    name: "Kaş & Kalkan",
    tagline: "Turkuaz Koylar & Panoramik Butik Villalar",
    description: "Akdeniz'in en büyüleyici coğrafyasında, dağ yamaçlarına kurulu sonsuzluk havuzlu villalarıyla Kaş ve Kalkan; özellikle İngiltere ve Avrupa pazarında en yüksek döviz kira getirisi sağlayan merkezdir.",
    highlights: ["Yıllık £40.000+ döviz kira potansiyeli", "Benzersiz Meis adası ve gün batımı manzarası", "Butik ve ayrıcalıklı tatil konsepti"],
    averagePriceTrend: "Döviz Bazında %8.5 Yıllık Getiri",
    lifestyle: "Eşsiz doğa, sanat ve lüks kaçış rotası",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    propertyCount: 14
  },
  {
    id: "belek",
    name: "Belek",
    tagline: "Dünya Standartlarında Golf & Resort Malikâneleri",
    description: "Uluslararası standartlardaki şampiyona golf kulüpleri, çam ormanları ve The Land of Legends kompleksine ev sahipliği yapan Belek; dünya çapında golf tutkunlarının mülk edindiği elit bir destinasyondur.",
    highlights: ["PGA onaylı 15+ golf sahası", "Geniş arazili müstakil malikaneler", "Antalya Havalimanı'na 20 dk"],
    averagePriceTrend: "Yüksek Uluslararası Talep",
    lifestyle: "Spor, golf, lüks resort ve spa konforu",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    propertyCount: 12
  },
  {
    id: "alanya",
    name: "Alanya",
    tagline: "Tarihi Yarımada, Güneş & Otel Konseptli Rezidanslar",
    description: "Yılın 300 günü güneş alan Alanya; Kleopatra Plajı, Gazipaşa Havalimanı erişimi ve full sosyal donatılı lüks rezidans projeleriyle Akdeniz'in en popüler yatırım sahasıdır.",
    highlights: ["Gazipaşa Havalimanı'na yakınlık", "5 yıldızlı otel konseptli yaşam", "Ulaşılabilir lüks & kolay kiralama"],
    averagePriceTrend: "+%85 Değer Artışı",
    lifestyle: "Güneş, plaj ve çok kültürlü sıcak atmosfer",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    propertyCount: 19
  }
];
