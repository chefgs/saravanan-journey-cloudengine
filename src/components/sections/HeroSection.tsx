"use client";

import React from 'react';
import { useJourney } from '@/context/JourneyContext';
import {
  ArrowDown,
  Sparkles,
  Building2
} from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';

export default function HeroSection() {
  const { data } = useJourney();
  const { hero } = data;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle architectural background pattern (minimal engineering/cloud nodes reference) */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full stroke-slate-800/60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Top Jubilee Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>25-Year Silver Jubilee Milestone • 2001–2026</span>
          </div>
        </div>

        {/* Two Column Layout: Editorial Narrative + Prominent Personal Story Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Editorial Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15]">
              {hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#timeline"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-cyan-accent text-navy-deep font-semibold text-sm sm:text-base hover:bg-cyan-400 shadow-xl shadow-cyan-accent/20 hover:scale-[1.02] transition-all"
              >
                <span>Explore My Journey</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#cloudengine"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-navy-card border border-slate-700/80 text-white font-semibold text-sm sm:text-base hover:bg-slate-800/80 hover:border-cyan-accent/50 transition-all"
              >
                <Building2 className="w-4 h-4 text-cyan-accent" />
                <span>View CloudEngine Labs</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Personal Portrait Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Subtle Gold accent ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-cyan-accent/40 via-amber-500/40 to-blue-600/30 blur-md opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-navy-card border border-slate-700/80 p-2 sm:p-3 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] w-72 sm:w-80 bg-slate-900">
                  <LazyImage
                    priority={true}
                    src={hero.heroPhotoUrl}
                    alt="Saravanan Gnanaguru — Founder of CloudEngine Labs"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/80 to-transparent p-5">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-amber-400">
                      Saravanan Gnanaguru
                    </span>
                    <span className="block text-base font-serif font-bold text-white">
                      Founder & Cloud Architect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Labels Grid (4 Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-slate-800/80">
          {hero.milestoneLabels.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-navy-card/60 border border-slate-800/80 hover:border-cyan-accent/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-cyan-accent group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
