"use client";

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import OpeningReflectionSection from '@/components/sections/OpeningReflectionSection';
import InteractiveTimelineSection from '@/components/sections/InteractiveTimelineSection';
import PhotoJourneyGallerySection from '@/components/sections/PhotoJourneyGallerySection';
import SpeakingEventsGallerySection from '@/components/sections/SpeakingEventsGallerySection';
import LifePhilosophiesSection from '@/components/sections/LifePhilosophiesSection';
import HolisticLifeWheelSection from '@/components/sections/HolisticLifeWheelSection';
import GratitudeSection from '@/components/sections/GratitudeSection';
import CloudEngineLabsSection from '@/components/sections/CloudEngineLabsSection';
import FinalMessageSection from '@/components/sections/FinalMessageSection';
import ContactReachoutSection from '@/components/sections/ContactReachoutSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-slate-100 selection:bg-cyan-accent selection:text-navy-deep">
      {/* Sticky Editorial Navigation Header */}
      <Header />

      {/* 1. Full-Width Visual Hero Section */}
      <HeroSection />

      {/* 2. Opening Reflection Section */}
      <OpeningReflectionSection />

      {/* 3. Interactive 25-Year Timeline */}
      <InteractiveTimelineSection />

      {/* 4. Curated Life Photo Archive Gallery */}
      <PhotoJourneyGallerySection />

      {/* 5. Dedicated Speaking Events Gallery */}
      <SpeakingEventsGallerySection />

      {/* 6. Life Philosophies & Lessons Learned */}
      <LifePhilosophiesSection />

      {/* 6. Holistic Life Wheel (21DC & TiE Chennai Framework) */}
      <HolisticLifeWheelSection />

      {/* 7. Gratitude Section */}
      <GratitudeSection />

      {/* 8. Final Message & Silver Jubilee Creed */}
      <FinalMessageSection />

      {/* 9. CloudEngine Labs Consulting Showcase */}
      <CloudEngineLabsSection />

      {/* 10. Connect & Reach Out Section */}
      <ContactReachoutSection />

      {/* 11. Footer Section */}
      <FooterSection />
    </main>
  );
}
