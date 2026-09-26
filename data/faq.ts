export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: "tapu-sureci",
    question: "Antalya'da gayrimenkul alımında tapu devir süreci ne kadar sürer?",
    answer: "Tapu devir süreci, belediye rayiç bedeli ve ekspertiz raporunun hazır olması durumunda genellikle WebTapu üzerinden başvuru yapıldıktan sonra 1 ila 2 iş günü içerisinde tamamlanır. Tüm yasal evrakların hazırlanması, ipotek/haciz sorgulamaları tarafımızca bizzat denetlenir.",
    category: "Alım-Satım Süreci"
  },
  {
    id: "vatandaslik-yatirim",
    question: "Gayrimenkul alımı ile Türk Vatandaşlığı başvurusu nasıl yapılır?",
    answer: "En az 400.000 USD (veya karşılığı döviz) tutarında gayrimenkul satın alan ve tapu kütüğüne 3 yıl satılamaz şerhi koyduran yabancı yatırımcılar aileleriyle birlikte Türk Vatandaşlığına başvurabilir. SPK lisanslı değerleme raporu ve uygunluk belgesi adımlarını anlaşmalı hukuk ekibimizle uçtan uca yürütüyoruz.",
    category: "Yatırım & Hukuk"
  },
  {
    id: "degerleme-hizmeti",
    question: "Mülkümü satmak istiyorum, değerleme için ücret ödüyor muyum?",
    answer: "Hayır. Ayşe Nane Gayrimenkul portföyüne dahil edilen ve profesyonel aracılık sözleşmesi yapılan mülkler için bölgesel emsal analizi, piyasa rayiç tespiti ve stratejik fiyatlandırma raporu tamamen ÜCRETSİZ olarak sunulmaktadır.",
    category: "Mülk Sahipleri"
  },
  {
    id: "kira-yonetimi",
    question: "Yatırım amaçlı aldığım villanın kiralamasını ve takibini yapıyor musunuz?",
    answer: "Evet. Özellikle Kalkan, Kaş, Lara ve Konyaaltı'nda yüksek sezonluk veya kurumsal uzun dönem kiralama amacıyla alınan mülkleriniz için güvenilir kiracı seçimi, sözleşme yönetimi ve kiralama danışmanlığı desteği sağlıyoruz.",
    category: "Yatırım Yönetimi"
  },
  {
    id: "danismanlik-ucreti",
    question: "Gayrimenkul danışmanlık hizmet bedeli (komisyon) ne kadardır?",
    answer: "Taşınmaz Ticareti Yönetmeliği uyarınca standart hizmet bedeli, alıcıdan %2 + KDV ve satıcıdan %2 + KDV olmak üzere toplam %4 + KDV olarak kanunla belirlenmiştir. Sürecin her adımında şeffaf ve faturalı çalışmaktayız.",
    category: "Mevzuat & Ücretler"
  }
];
