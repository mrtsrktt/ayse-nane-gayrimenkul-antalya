export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  comment: string;
  rating: number;
  transaction: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Selim & Ece Karahan",
    role: "Yatırımcı & Cerrah",
    location: "İstanbul -> Antalya",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "Döşemealtı'ndaki müstakil villamızı satın alırken Ayşe Hanım'ın piyasa bilgisi, hukuki titizliği ve tapu aşamasındaki dürüst rehberliği olmasaydı bu kadar rahat bir süreç yaşayamazdık. Antalya'da gayrimenkul dendiğinde tek adres.",
    rating: 5,
    transaction: "Döşemealtı Müstakil Villa Alımı"
  },
  {
    id: "2",
    name: "Alexander & Maria Schmidt",
    role: "Uluslararası Girişimci",
    location: "Berlin / Almanya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    comment: "Ayşe took care of everything for our citizenship-by-investment property in Lara. The transaction was 100% smooth, transparent and fast. Her English is fluent and she truly cares about her clients' financial future.",
    rating: 5,
    transaction: "Lara Penthouse & Yatırım Danışmanlığı"
  },
  {
    id: "3",
    name: "Burak Özdemir",
    role: "İnşaat Mühendisi & Müteahhit",
    location: "Antalya / Muratpaşa",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    comment: "Antalya'daki arsa yatırımlarımızın tüm portföy analizini Ayşe Hanım yönetiyor. Bölgenin imar planlarına ve gelecekteki gelişim akslarına o kadar hakim ki, her tavsiyesi bize ciddi kazanç sağladı.",
    rating: 5,
    transaction: "Ticari Arsa & Proje Geliştirme"
  },
  {
    id: "4",
    name: "Catherine Wright",
    role: "Turizm Yatırımcısı",
    location: "Londra / İngiltere",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    comment: "Kalkan'da sezonluk kiralama amaçlı aldığımız villada beklediğimizin çok üzerinde getiri elde ettik. Ayşe Hanım sadece satış yapmıyor, mülkün yönetimi ve getiri projeksiyonlarında da muazzam bir yol gösterici.",
    rating: 5,
    transaction: "Kalkan Panoramik Villa Satın Alımı"
  }
];
