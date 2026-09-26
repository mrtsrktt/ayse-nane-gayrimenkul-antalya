import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'KVKK & Gizlilik Politikası | Ayşe Nane Gayrimenkul',
  description: 'Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni ve gizlilik politikası.',
};

export default function KvkkPage() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-muted hover:text-brand-text mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-bronze" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="editorial-card p-8 sm:p-12 bg-white">
          <div className="flex items-center gap-2 text-xs font-semibold text-bronze uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Yasal Bilgilendirme & Uyum</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-6">
            KVKK Aydınlatma Metni & Gizlilik Politikası
          </h1>

          <div className="prose prose-slate max-w-none text-sm text-brand-muted space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-serif font-bold text-ink mb-2">1. Veri Sorumlusu</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla
                <strong> {siteConfig.agencyName}</strong> (Yetkili: Ayşe Nane, Taşınmaz Ticareti Yetki No: 0701234) tarafından aşağıda açıklanan kapsamda işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-bold text-ink mb-2">2. İşlenen Kişisel Veriler ve İşleme Amaçları</h2>
              <p>
                Web sitemizdeki mülk değerleme formu, portföy inceleme talepleri ve iletişim kanalları vasıtasıyla paylaştığınız
                ad-soyad, telefon numarası, e-posta adresi ve mülk bilgileri;
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Gayrimenkul danışmanlık, alım-satım ve değerleme hizmetlerinin yürütülmesi,</li>
                <li>Tarafınızla randevu ve iletişim süreçlerinin planlanması,</li>
                <li>Taşınmaz ticareti mevzuatından doğan yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
              <p className="mt-2">amaçlarıyla sınırlı olarak işlenmektedir.</p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-bold text-ink mb-2">3. Kişisel Verilerin Aktarılması</h2>
              <p>
                Kişisel verileriniz, kanuni zorunluluklar (Tapu ve Kadastro Müdürlükleri, noterler, vergi daireleri gibi yetkili kamu kurumları) haricinde
                üçüncü şahıslara veya yurt dışı sunuculara ticari amaçla satılmaz veya devredilmez.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-bold text-ink mb-2">4. İlgili Kişi Olarak Haklarınız</h2>
              <p>
                KVKK’nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme,
                düzeltilmesini veya silinmesini isteme haklarına sahipsiniz. Taleplerinizi <strong>{siteConfig.email}</strong> adresine
                yazılı olarak iletebilirsiniz.
              </p>
            </section>

            <div className="pt-6 border-t border-limestone/50 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-muted">
              <span>Son Güncelleme: Eylül 2026</span>
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
