export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: 'Piyasa Analizi' | 'Yatırım & Getiri' | 'Vatandaşlık & Hukuk' | 'Bölge Rehberi' | 'Arsa & İmar';
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  coverImage: string;
  featured: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      highlightBox?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "antalya-luks-konut-piyasasi-2026-trendleri",
    title: "Antalya Lüks Konut Piyasası 2026 Trendleri: Döşemealtı Villaları ve Sahil Bandı Değerleme Analizi",
    summary: "Antalya'da gayrimenkul fiyat dinamikleri, yabancı yatırımcı profilindeki değişim ve özellikle Döşemealtı villa projelerindeki rekor prim potansiyeline derinlemesine bakış.",
    category: "Piyasa Analizi",
    readTime: "6 dk okuma",
    publishDate: "18 Eylül 2026",
    author: {
      name: "Ayşe Nane",
      role: "Lüks Gayrimenkul & Yatırım Danışmanı",
      image: "/ayse-nane.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Antalya Gayrimenkul", "Döşemealtı Villaları", "Konut Fiyat Trendleri", "Lüks Yaşam"],
    content: {
      intro: "Akdeniz'in küresel cazibe merkezi Antalya, sadece tatil rotası değil; uluslararası sermayenin ve nitelikli yaşam arayan yerli sermayenin en güçlü sığınağı haline geldi. 2026 yılı ilk üç çeyrek verileri, özellikle geniş bahçeli akıllı müstakil villalara ve falez bandındaki kesintisiz deniz manzaralı rezidanslara olan ilginin rekor seviyede olduğunu gösteriyor.",
      sections: [
        {
          heading: "1. Şehir Merkezinden Yaylaya Kaçış: Döşemealtı'nın Yükselişi",
          paragraphs: [
            "Antalya'da son yıllarda yaşanan en belirgin mimari dönüşüm, şehir içi sıkışık apartman hayatından ferah ve izole müstakil yapılara geçiştir. Şehir merkezine kıyasla yaz aylarında 4-5 derece daha serin olan ve bağıl nemi oldukça düşük seyreden Döşemealtı, bugün 'Antalya'nın Beverly Hills'i' olarak anılmaktadır.",
            "Bölgede inşa edilen yeni nesil villalar; tuzlu su sonsuzluk havuzları, VRF iklimlendirme sistemleri, müstakil hamam/sauna ve yüksek tavanlı ferah mimarileriyle hem yerleşik yaşam hem de yabancı alıcılar için cazibe merkezidir."
          ],
          highlightBox: "Döşemealtı Yeniköy ve Yeşilbayır hatlarındaki lüks villa projeleri, son 24 ayda döviz bazında ortalama %42 sermaye kazancı sağlayarak Antalya genelinin iki katı performans gösterdi."
        },
        {
          heading: "2. Falez ve Sahil Bandında Sınırlı Arz, Sonsuz Talep",
          paragraphs: [
            "Lara falez hattı ve Konyaaltı sahil şeridinde yeni arsa üretiminin fiziki olarak imkansız olması, bu bölgelerdeki mevcut lüks penthouse ve rezidansları nadir bir koleksiyon parçası haline getiriyor.",
            "Talebin sürekli artmasına karşılık arzın sabit kalması, özellikle Akdeniz ve Beydağları manzarasına hakim mülklerin amortisman sürelerini kısaltırken, döviz bazında yüksek kira getirisi sağlamaktadır."
          ]
        },
        {
          heading: "3. Yatırımcılar İçin 2026 Stratejik Önerileri",
          paragraphs: [
            "Yatırım yaparken sadece bugünkü fiyatı değil; 3-5 yıllık bölgesel gelişim akslarını, çevre yolu bağlantılarını ve imar planlarını analiz etmek esastır.",
            "Müstakil tapulu, iskanı alınmış ve hukuki açıdan pürüzsüz portföyler, gelecekteki likidite ve satış kolaylığı açısından her zaman en güvenli limandır."
          ]
        }
      ],
      conclusion: "Antalya lüks gayrimenkul pazarı, doğru zamanlama ve uzman rehberlikle birleştiğinde hem yaşam konforu hem de yüksek finansal getiri vadeden eşsiz bir ekosistem sunmaktadır."
    }
  },
  {
    slug: "turk-vatandasligi-gayrimenkul-yatirim-rehberi",
    title: "Yabancı Yatırımcılar İçin Türk Vatandaşlığı & Gayrimenkul Alım Rehberi (2026)",
    summary: "400.000 USD tutarındaki gayrimenkul yatırımı ile Türk Vatandaşlığı edinimi: SPK lisanslı değerleme, uygunluk belgesi ve tapu süreçleri rehberi.",
    category: "Vatandaşlık & Hukuk",
    readTime: "8 dk okuma",
    publishDate: "12 Eylül 2026",
    author: {
      name: "Ayşe Nane",
      role: "Lüks Gayrimenkul & Yatırım Danışmanı",
      image: "/ayse-nane.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Türk Vatandaşlığı", "Yabancıya Satış", "SPK Ekspertiz", "Antalya Yatırım"],
    content: {
      intro: "Türkiye Cumhuriyeti'nin sunduğu yatırım yoluyla vatandaşlık programı, stratejik coğrafi konumu ve zengin yaşam standartları sayesinde dünya genelindeki yatırımcıların ilk tercihleri arasında yer alıyor. Antalya ise bu yatırımların merkez üssüdür.",
      sections: [
        {
          heading: "1. Temel Şartlar ve 400.000 USD Kriteri",
          paragraphs: [
            "Yabancı ülke vatandaşlarının en az 400.000 Amerikan Doları veya karşılığı döviz tutarında gayrimenkul satın alması ve tapu kütüğüne '3 yıl boyunca satılamaz' şerhi koydurması gerekmektedir.",
            "Satın alınacak mülk tek bir lüks villa olabileceği gibi, toplam değeri bu barajı aşan birden fazla daire veya arsa kombinasyonu da olabilir."
          ],
          highlightBox: "Önemli Not: Ödemenin Türkiye Cumhuriyet Merkez Bankası'na (TCMB) DAB (Döviz Alım Belgesi) düzenlenerek yapılması zorunludur. Döviz transferi aşamasında yapılan hatalar süreci aylarca aksatabilmektedir."
        },
        {
          heading: "2. SPK Lisanslı Değerleme Raporunun Önemi",
          paragraphs: [
            "Satın alma işleminden önce Sermaye Piyasası Kurulu (SPK) lisanslı bağımsız değerleme şirketlerince hazırlanmış resmi ekspertiz raporu alınmalıdır.",
            "Ayşe Nane Gayrimenkul olarak, mülk alımından önce ön ekspertiz kontrolü sağlayarak yatırımcımızın vatandaşlık kriterini %100 güvence altına alıyoruz."
          ]
        },
        {
          heading: "3. Aile Bireylerinin Kapsamı ve Avantajlar",
          paragraphs: [
            "Ana yatırımcı ile birlikte eşi ve 18 yaşından küçük tüm çocukları doğrudan Türk pasaportu almaya hak kazanır.",
            "Dünya çapında vizesiz seyahat imkanları, ücretsiz sağlık ve eğitim hakları bu sürecin getirdiği en büyük avantajlardır."
          ]
        }
      ],
      conclusion: "Anlaşmalı uzman hukuk ekibimiz ve yeminli tercümanlarımızla, yatırım kararından pasaport teslimine kadar tüm aşamaları anahtar teslim yönetmekteyiz."
    }
  },
  {
    slug: "kas-kalkan-villa-kiralama-doviz-getirisi",
    title: "Kaş & Kalkan’da Sezonluk Villa Kiralama: Döviz Bazlı Yıllık %10+ Getiri Stratejisi",
    summary: "İngiliz Sterlini ve Euro bazında yüksek sezonluk kira getirisi sunan Kaş Kalkan villalarında yatırım matematiği ve profesyonel mülk yönetimi incelikleri.",
    category: "Yatırım & Getiri",
    readTime: "7 dk okuma",
    publishDate: "05 Eylül 2026",
    author: {
      name: "Ayşe Nane",
      role: "Lüks Gayrimenkul & Yatırım Danışmanı",
      image: "/ayse-nane.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Kaş Villaları", "Kalkan Kiralık", "Döviz Kira Getirisi", "Yazlık Yatırım"],
    content: {
      intro: "Antalya'nın batı ucunda yer alan Kaş ve Kalkan, coğrafi yapısı ve korunaklı koylarıyla Türkiye'nin en seçkin butik turizm bölgesidir. Kalkan, 1980'lerden bu yana İngiliz ve Avrupalı elitlerin tatil rotası olup, gayrimenkul kiralama pazarında sterlin bazında getiri sağlayan benzersiz bir ekosisteme sahiptir.",
      sections: [
        {
          heading: "1. Kalkan'ın Eşsiz Kira Matematiği",
          paragraphs: [
            "Kalkan'da panoramik deniz ve Meis adası manzaralı, sonsuzluk havuzlu 3+1 veya 4+1 bir villa, yüksek sezonda haftalık 2.500 £ ila 4.500 £ arasında kiralanabilmektedir.",
            "Mayıs - Ekim ayları arasındaki 24 haftalık aktif kiralama sezonunda brüt 45.000 £ - 65.000 £ aralığında döviz geliri elde etmek mümkündür."
          ],
          highlightBox: "Doğru konumlanmış ve kaliteli donatılmış bir Kalkan villası, yatırım maliyetini 8 ila 10 yıl gibi gayrimenkul için rekor sayılacak bir sürede amorti etmektedir."
        },
        {
          heading: "2. Havuz Isıtması ve 12 Ay Kullanım İmkanı",
          paragraphs: [
            "Son dönemde villalara entegre edilen havuz ısıtma pompaları, kapalı jakuzili kış bahçeleri ve sauna donanımları, sezonu Kasım, Aralık ve Nisan aylarına da yayarak doluluk oranlarını %35 artırmıştır.",
            "Balayı çiftleri ve uzaktan çalışan dijital göçebeler, kış aylarında da yüksek bütçeli konaklamalar gerçekleştirmektedir."
          ]
        }
      ],
      conclusion: "Kaş ve Kalkan'da villa satın alırken hem kendi aileniz için cennet gibi bir tatil sığınağına sahip olur hem de paranızı enflasyona karşı koruyan güçlü bir döviz makinesi yaratırsınız."
    }
  },
  {
    slug: "lara-vs-konyaalti-rezidans-karsilastirmasi",
    title: "Lara Falezler vs. Konyaaltı Sahili: Antalya’da Lüks Rezidans Yatırımı Karşılaştırması",
    summary: "Şehir merkezinde lüks daire arayanların en çok kararsız kaldığı iki dev bölge: Hangisi daha prim yapar, hangisinde yaşam tarzı size daha uygundur?",
    category: "Bölge Rehberi",
    readTime: "5 dk okuma",
    publishDate: "28 Ağustos 2026",
    author: {
      name: "Ayşe Nane",
      role: "Lüks Gayrimenkul & Yatırım Danışmanı",
      image: "/ayse-nane.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Lara Rezidans", "Konyaaltı Daire", "Falez Manzarası", "Bölge Analizi"],
    content: {
      intro: "Antalya'da mülk edinmek isteyen müşterilerimizin ilk sorduğu sorulardan biri: 'Lara mı yoksa Konyaaltı mı?' Her iki bölge de şehrin en gözde noktaları olsa da demografik yapıları, mimari tarzları ve getiri karakterleri açısından çok ciddi farklılıklar taşır.",
      sections: [
        {
          heading: "1. Lara ve Şirinyalı Falezleri: Köklü Prestij ve Finans Merkezi",
          paragraphs: [
            "Lara, Antalya'nın en köklü elit ailelerinin, doktorların, iş insanlarının ve diplomatik temsilciliklerin ikamet ettiği bölgedir.",
            "Falez bandındaki daireler kesintisiz Akdeniz ufkuna bakar. Terracity AVM, gurme restoranlar ve Antalya Havalimanı'na sadece 12 dakikalık mesafesiyle iş dünyası için maksimum konfor sunar."
          ]
        },
        {
          heading: "2. Konyaaltı: Mavi Bayraklı Plaj, Dinamik Yaşam ve Yabancı Komşuluk",
          paragraphs: [
            "Konyaaltı ise 7 kilometrelik sahil parkı, Boğaçayı marina projesi ve modern kafeleriyle daha genç, dinamik ve uluslararası bir kitleye hitap eder.",
            "Sahile yürüme mesafesindeki projeler, Rusya ve Avrupa'dan gelen yatırımcıların en yüksek talep gösterdiği, yüksek likiditeye sahip mülklerdir."
          ],
          highlightBox: "Özet Kural: 'Şehir merkezi bağlantısı, kurumsal prestij ve geniş m² arıyorsanız Lara; sahil yürüyüşü, turizm enerjisi ve kolay kiralanabilirlik istiyorsanız Konyaaltı'nı tercih etmelisiniz."
        }
      ],
      conclusion: "Her iki lokasyondaki seçkin portföylerimizle, yaşam tarzınıza ve yatırım hedefinize en uygun adresi birlikte belirliyoruz."
    }
  },
  {
    slug: "antalya-villa-imar-ve-arsa-yatirimi-kurallari",
    title: "Antalya’da Arsa Yatırımı ve Müstakil Villa İnşaatı: İmar, KAKS ve Tapu Kuralları",
    summary: "Boş parsel alıp kendi hayalindeki villayı inşa etmek veya yüksek kazançlı proje geliştirmek isteyenler için temel imar ve mevzuat rehberi.",
    category: "Arsa & İmar",
    readTime: "9 dk okuma",
    publishDate: "20 Ağustos 2026",
    author: {
      name: "Ayşe Nane",
      role: "Lüks Gayrimenkul & Yatırım Danışmanı",
      image: "/ayse-nane.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Arsa Yatırımı", "Villa İmarı", "Döşemealtı Parsel", "İnşaat İzni"],
    content: {
      intro: "Konut fiyatlarının hızla yükseldiği Antalya'da, özellikle Döşemealtı, Altıntaş ve Aksu hattında arsa alarak kendi özel villasını inşa etmek hem maliyet avantajı sağlamakta hem de %100 kişiselleştirilmiş bir yaşam sunmaktadır. Ancak arsa yatırımı en teknik ve hata kabul etmeyen gayrimenkul branşıdır.",
      sections: [
        {
          heading: "1. TAKS ve KAKS (Emsal) Hesaplaması",
          paragraphs: [
            "Döşemealtı Yeniköy ve Düzlerçamı gibi bölgelerde standart villa imarı genellikle %20 taban (TAKS) ve %40 toplam inşaat alanı (KAKS) şeklindedir.",
            "Örneğin 1.000 m² müstakil bir parselde 200 m² tabanlı ve 400 m² toplam kapalı alana sahip 2 katlı lüks bir malikâne veya 2 adet bağımsız dubleks villa inşa edebilirsiniz."
          ]
        },
        {
          heading: "2. Hisseli Tapu Tuzağına Dikkat: Daima Müstakil Parsel",
          paragraphs: [
            "Yatırımcıların en sık düştüğü hata, fiyatı uygun görünen tarla vasıflı veya hisseli arazileri satın almaktır. Hisseli yerlerde inşaat ruhsatı almak hukuken son derece zordur.",
            "Portföyümüzde sunduğumuz tüm arsalar tek tapulu (müstakil), ifrazı yapılmış ve hemen ruhsat başvurusuna hazır durumdadır."
          ],
          highlightBox: "Altın Tavsiye: Arsa almadan önce belediyeden güncel İmar Çapı ve Harita Kadastro Müdürlüğü'nden sınır aplikasyon krokisi mutlaka teyit edilmelidir."
        }
      ],
      conclusion: "Arsa seçiminden mimari projelendirmeye ve müteahhitlik sözleşmelerine kadar tüm süreçte yatırımcılarımıza profesyonel danışmanlık sağlıyoruz."
    }
  }
];
