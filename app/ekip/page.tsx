'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Lock,
  ShieldCheck,
  PlusCircle,
  Search,
  Phone,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  UserCheck,
  Building,
  DollarSign,
  TrendingUp,
  FileText,
  Filter,
  Trash2,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface ClientRecord {
  id: string;
  name: string;
  phone: string;
  propertyInterest: string;
  location: string;
  budget: string;
  stage: 'Yeni Talep' | 'Görüşme Yapıldı' | 'Mülk Gezildi' | 'Teklif / Pazarlık' | 'Tapu Aşaması' | 'Satış Kapatıldı';
  assignedAgent: string;
  notes: string;
  lastContactDate: string;
  nextMeetingDate?: string;
}

export default function TeamAndCrmPage() {
  const teamMembers = [
    {
      name: siteConfig.agentName,
      role: 'Kurucu Broker & Lüks Portföy Direktörü',
      focus: 'Döşemealtı Villaları, Falez Rezidansları & VIP Yatırımlar',
      phone: siteConfig.phoneDisplay,
      image: '/ayse-nane.jpg',
      badge: 'MYK Seviye 5 Lisanslı',
    },
    {
      name: 'Av. Melis Arslan',
      role: 'Hukuk & Tapu Danışmanı',
      focus: 'Vatandaşlık Mevzuatı, Sözleşme İnceleme & SPK Ekspertiz',
      phone: '+90 (505) 172 52 84',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      badge: 'Antalya Barosu',
    },
    {
      name: 'Kerem Taş',
      role: 'Saha & Portföy Uzmanı',
      focus: 'Kaş, Kalkan & Belek Bölgesi Saha Temsilcisi',
      phone: '+90 (505) 172 52 84',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      badge: 'Gayrimenkul Değerleme',
    },
    {
      name: 'Daria Romanova',
      role: 'Uluslararası Yatırım Koordinatörü',
      focus: 'Rusya, Almanya & Körfez Bölgesi Yatırımcı Temsili',
      phone: '+90 (505) 172 52 84',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      badge: 'EN / RU / TR',
    },
  ];

  const initialClients: ClientRecord[] = [
    {
      id: 'c1',
      name: 'Dr. Selim Karahan',
      phone: '+90 533 111 22 33',
      propertyInterest: 'Müstakil Havuzlu Villa',
      location: 'Döşemealtı',
      budget: '28.500.000 ₺',
      stage: 'Teklif / Pazarlık',
      assignedAgent: 'Ayşe Nane',
      notes: 'Pazar günü eşiyle villayı gezdik. İskân ve havuz filtre sistemini incelediler. Satıcıya 27.2M ₺ teklif iletildi.',
      lastContactDate: '26 Eylül 2026',
      nextMeetingDate: '28 Eylül 2026 (Tapu rayiç kontrolü)',
    },
    {
      id: 'c2',
      name: 'Alexander Schmidt',
      phone: '+49 176 1234567',
      propertyInterest: 'Falez Deniz Manzaralı Penthouse',
      location: 'Lara / Muratpaşa',
      budget: '950.000 €',
      stage: 'Tapu Aşaması',
      assignedAgent: 'Ayşe Nane',
      notes: 'Vatandaşlık için TCMB Döviz Alım Belgesi (DAB) onaylandı. WebTapu üzerinden başvuru yapıldı.',
      lastContactDate: '25 Eylül 2026',
      nextMeetingDate: '29 Eylül 2026 (Tapu Randevusu)',
    },
    {
      id: 'c3',
      name: 'Murat Demir',
      phone: '+90 542 333 44 55',
      propertyInterest: 'Panoramik Sonsuzluk Havuzlu Villa',
      location: 'Kaş / Kalkan',
      budget: '24.000.000 ₺',
      stage: 'Mülk Gezildi',
      assignedAgent: 'Kerem Taş',
      notes: 'Haftalık sterlin bazlı kira getirisi tablosu paylaşıldı. Ekim ayı içinde Kalkan’a gelip 2 villayı yerinde görecek.',
      lastContactDate: '24 Eylül 2026',
    },
    {
      id: 'c4',
      name: 'Elena Petrova',
      phone: '+7 903 888 99 00',
      propertyInterest: 'Konyaaltı Rezidans 2+1',
      location: 'Konyaaltı',
      budget: '320.000 $',
      stage: 'Görüşme Yapıldı',
      assignedAgent: 'Daria Romanova',
      notes: 'İkamet izni kısıtlamaları olmayan mahalleler listesi paylaşıldı. Online video tur organize edilecek.',
      lastContactDate: '23 Eylül 2026',
      nextMeetingDate: '27 Eylül 2026 (Zoom Sunumu)',
    },
    {
      id: 'c5',
      name: 'Cengiz Han İnşaat Ltd.',
      phone: '+90 532 999 88 77',
      propertyInterest: 'Villa İmarlı Parsel (2.000 m²)',
      location: 'Döşemealtı',
      budget: '38.000.000 ₺',
      stage: 'Yeni Talep',
      assignedAgent: 'Ayşe Nane',
      notes: '4 müstakil villa projesi geliştirmek için kadastro ve emsal planı istendi. Belediyeden imar durumu çekiliyor.',
      lastContactDate: '22 Eylül 2026',
    },
    {
      id: 'c6',
      name: 'Hakan & Yasemin Çetin',
      phone: '+90 530 444 55 66',
      propertyInterest: 'Belek Golf Villası',
      location: 'Belek',
      budget: '31.000.000 ₺',
      stage: 'Satış Kapatıldı',
      assignedAgent: 'Ayşe Nane',
      notes: 'Tapu devri ve anahtar teslimi başarıyla tamamlandı. Abonelik devirleri için destek verildi.',
      lastContactDate: '20 Eylül 2026',
    },
  ];

  const [clients, setClients] = useState<ClientRecord[]>(initialClients);
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const [newClient, setNewClient] = useState({
    name: '',
    phone: '',
    propertyInterest: 'Müstakil Villa',
    location: 'Döşemealtı',
    budget: '',
    stage: 'Yeni Talep' as ClientRecord['stage'],
    assignedAgent: 'Ayşe Nane',
    notes: '',
  });

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    const record: ClientRecord = {
      id: 'c_' + Date.now(),
      name: newClient.name,
      phone: newClient.phone,
      propertyInterest: newClient.propertyInterest,
      location: newClient.location,
      budget: newClient.budget || 'Belirtilmedi',
      stage: newClient.stage,
      assignedAgent: newClient.assignedAgent,
      notes: newClient.notes || 'Görüşme notu girilmedi.',
      lastContactDate: 'Bugün',
    };
    setClients([record, ...clients]);
    setShowAddModal(false);
    setNewClient({
      name: '',
      phone: '',
      propertyInterest: 'Müstakil Villa',
      location: 'Döşemealtı',
      budget: '',
      stage: 'Yeni Talep',
      assignedAgent: 'Ayşe Nane',
      notes: '',
    });
  };

  const handleDeleteClient = (id: string) => {
    if (confirm('Bu müşteri kaydını silmek istediğinize emin misiniz?')) {
      setClients(clients.filter((c) => c.id !== id));
    }
  };

  const handleStageChange = (id: string, newStage: ClientRecord['stage']) => {
    setClients(
      clients.map((c) => (c.id === id ? { ...c, stage: newStage } : c))
    );
  };

  const filteredClients = clients.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm) ||
      c.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.notes.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = stageFilter === 'all' || c.stage === stageFilter;
    return matchesSearch && matchesStage;
  });

  const getStageBadgeClass = (stage: ClientRecord['stage']) => {
    switch (stage) {
      case 'Yeni Talep':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Görüşme Yapıldı':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Mülk Gezildi':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Teklif / Pazarlık':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Tapu Aşaması':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'Satış Kapatıldı':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F5] min-h-screen text-slate-800">
      {/* Security Banner Notice */}
      <div className="bg-[#F4F1EA] text-slate-700 border-b border-[#EAE6DF] py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-white border border-[#DFC596] text-[#B89047]">
              <Lock className="w-3.5 h-3.5" />
            </span>
            <span className="font-bold text-[#0F1E36]">
              Ayşe Nane & Ekibi İç Portalı (CRM & Danışman Masası)
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="text-slate-500 hidden md:inline">
              Müşteri Görüşme ve Portföy Takip Sistemi
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Yönetici Önizleme Modu Aktif (Şifresiz Erişim)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-14">
        {/* Section 1: Team Roster */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7E6128] block mb-1">
                Lüks Gayrimenkul & Yatırım Kadrosu
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight">
                Ayşe Nane ve Danışman Ekibi
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md font-light">
              Hukuki, finansal ve saha uzmanlığını bir araya getiren A sınıfı danışman kadromuzla Antalya’da kusursuz mülk alım-satım deneyimi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-[#EAE6DF] shadow-[0_10px_30px_rgba(15,30,54,0.06)] hover:border-[#DFC596] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-[#EAE6DF] group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#7E6128] border border-[#DFC596] shadow-sm backdrop-blur-md">
                        {member.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#0F1E36]">{member.name}</h3>
                  <p className="text-xs font-bold text-[#7E6128] mb-2">{member.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{member.focus}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-1.5 text-[#0F1E36] hover:text-[#B89047] font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B89047]" />
                    <span>{member.phone}</span>
                  </a>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Müsait
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Interactive CRM Dashboard */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DFC596] shadow-[0_20px_50px_rgba(15,30,54,0.08)] space-y-8">
          {/* CRM Header & KPI Stats */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF9F5] border border-[#DFC596] text-[#7E6128] text-[11px] font-bold mb-2 shadow-sm">
                <FileText className="w-3.5 h-3.5 text-[#B89047]" />
                Müşteri & Görüşme Takip Masası (CRM)
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36]">
                Görüşülen Müşteriler & Portföy Talepleri
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-light">
                Görüşme notları, bütçeler, teklif aşamaları ve bir sonraki randevu tarihleri.
              </p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="gold-gradient-button text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 shrink-0 hover:scale-102 transition-transform"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Yeni Müşteri & Görüşme Ekle</span>
            </button>
          </div>

          {/* KPI Mini Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DF]">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Kayıtlı Müşteri
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36] mt-1 block">
                {clients.length} Kişi
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DF]">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Mülk Gezen / Sıcak
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#B89047] mt-1 block">
                {clients.filter((c) => c.stage === 'Mülk Gezildi').length} Müşteri
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DF]">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Teklif & Pazarlık
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-orange-600 mt-1 block">
                {clients.filter((c) => c.stage === 'Teklif / Pazarlık').length} Dosya
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DF]">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Tapu / Kapanan
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700 mt-1 block">
                {clients.filter((c) => c.stage === 'Tapu Aşaması' || c.stage === 'Satış Kapatıldı').length} İşlem
              </span>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Müşteri adı, telefon veya bölge ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] font-semibold focus:outline-none focus:border-[#B89047] cursor-pointer"
              >
                <option value="all">Tüm Aşamalar</option>
                <option value="Yeni Talep">Yeni Talep</option>
                <option value="Görüşme Yapıldı">Görüşme Yapıldı</option>
                <option value="Mülk Gezildi">Mülk Gezildi</option>
                <option value="Teklif / Pazarlık">Teklif / Pazarlık</option>
                <option value="Tapu Aşaması">Tapu Aşaması</option>
                <option value="Satış Kapatıldı">Satış Kapatıldı</option>
              </select>
            </div>
          </div>

          {/* CRM Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#EAE6DF]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF9F5] text-[#0F1E36] font-bold uppercase tracking-wider text-[11px] border-b border-[#EAE6DF]">
                <tr>
                  <th className="py-4 px-4">Müşteri</th>
                  <th className="py-4 px-4">İlgilenilen Mülk & Bölge</th>
                  <th className="py-4 px-4">Bütçe</th>
                  <th className="py-4 px-4">Aşama / Durum</th>
                  <th className="py-4 px-4">Danışman</th>
                  <th className="py-4 px-4">Son Görüşme Notu</th>
                  <th className="py-4 px-4 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-[#FAF9F5]/70 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-bold text-[#0F1E36] text-sm">{client.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={`tel:${client.phone}`}
                          className="text-slate-500 hover:text-[#B89047] flex items-center gap-1 font-medium"
                        >
                          <Phone className="w-3 h-3 text-[#B89047]" />
                          <span>{client.phone}</span>
                        </a>
                        <a
                          href={`https://wa.me/${client.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Merhaba ${client.name}, portföy görüşmemiz hakkında bilgi vermek istedim.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-700"
                          title="WhatsApp Gönder"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <p className="font-semibold text-[#0F1E36]">{client.propertyInterest}</p>
                      <span className="text-[11px] text-slate-500">{client.location}</span>
                    </td>

                    <td className="py-4 px-4">
                      <span className="font-serif font-bold text-[#7E6128] text-sm">{client.budget}</span>
                    </td>

                    <td className="py-4 px-4">
                      <select
                        value={client.stage}
                        onChange={(e) => handleStageChange(client.id, e.target.value as any)}
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border cursor-pointer focus:outline-none ${getStageBadgeClass(
                          client.stage
                        )}`}
                      >
                        <option value="Yeni Talep">Yeni Talep</option>
                        <option value="Görüşme Yapıldı">Görüşme Yapıldı</option>
                        <option value="Mülk Gezildi">Mülk Gezildi</option>
                        <option value="Teklif / Pazarlık">Teklif / Pazarlık</option>
                        <option value="Tapu Aşaması">Tapu Aşaması</option>
                        <option value="Satış Kapatıldı">Satış Kapatıldı</option>
                      </select>
                    </td>

                    <td className="py-4 px-4">
                      <span className="font-semibold text-slate-700">{client.assignedAgent}</span>
                    </td>

                    <td className="py-4 px-4 max-w-xs">
                      <p className="text-slate-600 line-clamp-2 leading-relaxed font-light">{client.notes}</p>
                      {client.nextMeetingDate && (
                        <p className="text-[10px] text-[#7E6128] font-bold mt-1">
                          📅 {client.nextMeetingDate}
                        </p>
                      )}
                    </td>

                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleDeleteClient(client.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
                        title="Kaydı Sil"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CRM Mobile Cards View */}
          <div className="md:hidden space-y-3">
            {filteredClients.map((client) => (
              <div key={client.id} className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DF] space-y-3 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-[#0F1E36] text-base">{client.name}</h4>
                    <p className="text-xs text-slate-500">{client.propertyInterest} • {client.location}</p>
                  </div>
                  <span className="font-serif font-bold text-[#7E6128] text-sm shrink-0">
                    {client.budget}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#EAE6DF]/60">
                  <select
                    value={client.stage}
                    onChange={(e) => handleStageChange(client.id, e.target.value as any)}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none ${getStageBadgeClass(
                      client.stage
                    )}`}
                  >
                    <option value="Yeni Talep">Yeni Talep</option>
                    <option value="Görüşme Yapıldı">Görüşme Yapıldı</option>
                    <option value="Mülk Gezildi">Mülk Gezildi</option>
                    <option value="Teklif / Pazarlık">Teklif / Pazarlık</option>
                    <option value="Tapu Aşaması">Tapu Aşaması</option>
                    <option value="Satış Kapatıldı">Satış Kapatıldı</option>
                  </select>

                  <span className="text-[11px] text-slate-500 font-medium">
                    {client.assignedAgent}
                  </span>
                </div>

                {client.notes && (
                  <p className="text-xs text-slate-600 bg-white p-2.5 rounded-xl border border-[#EAE6DF] font-light leading-relaxed">
                    {client.notes}
                  </p>
                )}

                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${client.phone}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-[#EAE6DF] text-xs font-semibold text-[#0F1E36]"
                    >
                      <Phone className="w-3 h-3 text-[#B89047]" />
                      <span>{client.phone}</span>
                    </a>
                    <a
                      href={`https://wa.me/${client.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Merhaba ${client.name}, portföy görüşmemiz hakkında bilgi vermek istedim.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600"
                      title="WhatsApp Gönder"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => handleDeleteClient(client.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                    title="Sil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Client Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#DFC596]">
            <div className="border-b border-slate-100 pb-4 mb-4 flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-[#0F1E36] flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-[#B89047]" /> Yeni Müşteri & Görüşme Kaydı
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-[#0F1E36] text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddClient} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Müşteri Adı Soyadı *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ahmet Bey"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+90 5XX XXX XX XX"
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    İlgilenilen Mülk Türü
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: 4+1 Müstakil Villa"
                    value={newClient.propertyInterest}
                    onChange={(e) => setNewClient({ ...newClient, propertyInterest: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Bölge
                  </label>
                  <select
                    value={newClient.location}
                    onChange={(e) => setNewClient({ ...newClient, location: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] focus:outline-none focus:border-[#B89047] cursor-pointer"
                  >
                    <option value="Döşemealtı">Döşemealtı</option>
                    <option value="Lara">Lara</option>
                    <option value="Konyaaltı">Konyaaltı</option>
                    <option value="Kaş / Kalkan">Kaş / Kalkan</option>
                    <option value="Belek">Belek</option>
                    <option value="Alanya">Alanya</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Bütçe
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: 25.000.000 ₺"
                    value={newClient.budget}
                    onChange={(e) => setNewClient({ ...newClient, budget: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Sorumlu Danışman
                  </label>
                  <select
                    value={newClient.assignedAgent}
                    onChange={(e) => setNewClient({ ...newClient, assignedAgent: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] focus:outline-none focus:border-[#B89047] cursor-pointer"
                  >
                    <option value="Ayşe Nane">Ayşe Nane</option>
                    <option value="Kerem Taş">Kerem Taş</option>
                    <option value="Daria Romanova">Daria Romanova</option>
                    <option value="Av. Melis Arslan">Av. Melis Arslan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Aşama / Durum
                </label>
                <select
                  value={newClient.stage}
                  onChange={(e) => setNewClient({ ...newClient, stage: e.target.value as any })}
                  className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] focus:outline-none focus:border-[#B89047] cursor-pointer"
                >
                  <option value="Yeni Talep">Yeni Talep</option>
                  <option value="Görüşme Yapıldı">Görüşme Yapıldı</option>
                  <option value="Mülk Gezildi">Mülk Gezildi</option>
                  <option value="Teklif / Pazarlık">Teklif / Pazarlık</option>
                  <option value="Tapu Aşaması">Tapu Aşaması</option>
                  <option value="Satış Kapatıldı">Satış Kapatıldı</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Görüşme Notları & Sonraki Adım
                </label>
                <textarea
                  rows={3}
                  placeholder="Müşterinin özel istekleri, bütçe esnekliği, gezilen villa veya sonraki randevu tarihi..."
                  value={newClient.notes}
                  onChange={(e) => setNewClient({ ...newClient, notes: e.target.value })}
                  className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047] resize-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="w-1/2 py-3 rounded-xl border border-[#EAE6DF] text-xs font-bold text-slate-600 hover:bg-[#FAF9F5]"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="w-1/2 gold-gradient-button py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
