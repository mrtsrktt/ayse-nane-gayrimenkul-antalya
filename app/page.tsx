'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import PropertyPortfolio from '@/components/PropertyPortfolio';
import RegionsSection from '@/components/RegionsSection';
import ValuationSection from '@/components/ValuationSection';
import RoiCalculator from '@/components/RoiCalculator';
import AboutSection from '@/components/AboutSection';
import InstagramSection from '@/components/InstagramSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const handleHeroSearch = (filters: { type: string; location: string }) => {
    setFilterType(filters.type);
    setFilterLocation(filters.location);
  };

  const handleRegionSelect = (regionName: string) => {
    setFilterLocation(regionName);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero onSearch={handleHeroSearch} />

      {/* 2. Featured & Filterable Portfolio */}
      <PropertyPortfolio
        initialType={filterType}
        initialLocation={filterLocation}
      />

      {/* 3. Antalya Micro-Market Regional Guides */}
      <RegionsSection onSelectRegion={handleRegionSelect} />

      {/* 4. Seller Lead Capture: Free Property Valuation */}
      <ValuationSection />

      {/* 5. Interactive Investment & ROI Payback Calculator */}
      <RoiCalculator />

      {/* 6. Meet Ayşe Nane: Bio, Vision, Experience, Licenses */}
      <AboutSection />

      {/* 7. Instagram Showcase & Live Social Feed */}
      <InstagramSection />

      {/* 8. Verified Testimonials & International Investor Stories */}
      <TestimonialsSection />

      {/* 9. Editorial Blog & Market Research Insights */}
      <BlogSection />

      {/* 10. Real Estate & Legal FAQ Accordion */}
      <FaqSection />

      {/* 10. Contact Information & Consultation Appointment Booking */}
      <ContactSection />
    </div>
  );
}
