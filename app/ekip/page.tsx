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
  ArrowRight
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
      phone: '+7 916 555 77 88',
      propertyInterest: 'Sahile 350m Rezidans Dairesi',
      location: 'Konyaaltı',
      budget: '400.000 €',
      stage: 'Görüşme Yapıldı',
      assignedAgent: 'Daria Romanova',
      notes: 'İkamet iznine uygunluk teyit edildi. Proje kat planları ve video turu WhatsApp üzerinden iletildi.',
      lastContactDate: '23 Eylül 2026',
    },
    {
      id: 'c5',
      name: 'Hakan Koç',
      phone: '+90 530 999 88 77',
      propertyInterest: 'Villa İmarlı Arsa',
      location: 'Döşemealtı / Yeniköy',
      budget: '10.000.000 ₺',
      stage: 'Yeni Talep',
      assignedAgent: 'Ayşe Nane',
      notes: '1.050 m² parsel için belediyeden imar çapı ve emsal durumu çıkarıldı. Yarın öğleden sonra telefonla aranacak.',
      lastContactDate: '26 Eylül 2026',
    },
  ];

  const [clients, setClients] = useState<ClientRecord[]>(initialClients);
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Client Form State
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
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Görüşme Yapıldı':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Mülk Gezildi':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Teklif / Pazarlık':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Tapu Aşaması':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Satış Kapatıldı':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      {/* Security Banner Notice */}
      <div className="bg-navy-950 text-white border-b border-gold-500/30 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30">
              <Lock className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold text-gold-300">
              Ayşe Nane & Ekibi İç Portalı (CRM & Danışman Masası)
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="text-slate-300 hidden md:inline">
              Müşteri Görüşme ve Portföy Takip Sistemi
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Yönetici Önizleme Modu Aktif (Şifresiz Erişim)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        {/* Section 1: Team Roster */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-1">
                Lüks Gayrimenkul & Yatırım Kadrosu
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Ayşe Nane ve Danışman Ekibi
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Hukuki, finansal ve saha uzmanlığını bir araya getiren A sınıfı danışman kadromuzla Antalya’da kusursuz mülk alım-satım deneyimi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-900 mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-navy-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                        {member.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-slate-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-gold-700 mb-2">{member.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{member.focus}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-1.5 text-slate-700 hover:text-gold-700 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-600" />
                    <span>{member.phone}</span>
                  </a>
                  <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Aktif
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Interactive CRM Dashboard */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
          {/* CRM Header & KPI Stats */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 text-gold-300 text-xs font-semibold mb-2">
                <FileText className="w-3.5 h-3.5 text-gold-400" />
                Müşteri & Görüşme Takip Masası (CRM)
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Görüşülen Müşteriler & Mülk Talepleri
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Görüşme notları, bütçeler, teklif aşamaları ve bir sonraki randevu tarihleri.
              </p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="gold-gradient-button text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Yeni Müşteri & Görüşme Ekle</span>
            </button>
          </div>

          {/* KPI Mini Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Kayıtlı Müşteri
              </span>
              <span className="text-2xl font-serif font-bold text-slate-900 mt-1 block">
                {clients.length} Kişi
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Mülk Gezen / Sıcak
              </span>
              <span className="text-2xl font-serif font-bold text-amber-700 mt-1 block">
                {clients.filter((c) => c.stage === 'Mülk Gezildi').length} Müşteri
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Teklif & Pazarlık
              </span>
              <span className="text-2xl font-serif font-bold text-orange-600 mt-1 block">
                {clients.filter((c) => c.stage === 'Teklif / Pazarlık').length} Dosya
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Tapu / Kapanan
              </span>
              <span className="text-2xl font-serif font-bold text-emerald-700 mt-1 block">
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
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-gold-500 cursor-pointer"
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

          {/* CRM Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Müşteri</th>
                  <th className="py-3.5 px-4">İlgilenilen Mülk & Bölge</th>
                  <th className="py-3.5 px-4">Bütçe</th>
                  <th className="py-3.5 px-4">Aşama / Durum</th>
                  <th className="py-3.5 px-4">Danışman</th>
                  <th className="py-3.5 px-4">Son Görüşme Notu</th>
                  <th className="py-3.5 px-4 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-bold text-slate-900 text-sm">{client.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={`tel:${client.phone}`}
                          className="text-slate-500 hover:text-gold-700 flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3 text-gold-600" />
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
                      <p className="font-semibold text-slate-800">{client.propertyInterest}</p>
                      <span className="text-[11px] text-slate-500">{client.location}</span>
                    </td>

                    <td className="py-4 px-4">
                      <span className="font-serif font-bold text-slate-900">{client.budget}</span>
                    </td>

                    <td className="py-4 px-4">
                      <select
                        value={client.stage}
                        onChange={(e) => handleStageChange(client.id, e.target.value as any)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none ${getStageBadgeClass(
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
                      <span className="font-medium text-slate-700">{client.assignedAgent}</span>
                    </td>

                    <td className="py-4 px-4 max-w-xs">
                      <p className="text-slate-600 line-clamp-2 leading-relaxed">{client.notes}</p>
                      {client.nextMeetingDate && (
                        <p className="text-[10px] text-gold-700 font-semibold mt-1">
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
        </div>
      </div>

      {/* Add Client Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="border-b border-slate-200 pb-4 mb-4 flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-gold-600" /> Yeni Müşteri & Görüşme Kaydı
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-gold-500"
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-gold-500"
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Bölge
                  </label>
                  <select
                    value={newClient.location}
                    onChange={(e) => setNewClient({ ...newClient, location: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-gold-500 cursor-pointer"
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Sorumlu Danışman
                  </label>
                  <select
                    value={newClient.assignedAgent}
                    onChange={(e) => setNewClient({ ...newClient, assignedAgent: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-gold-500 cursor-pointer"
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-gold-500 cursor-pointer"
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="w-1/2 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="w-1/2 gold-gradient-button py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
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
