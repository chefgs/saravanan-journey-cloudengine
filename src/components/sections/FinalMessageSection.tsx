"use client";

import React from 'react';
import { useJourney } from '@/context/JourneyContext';
import { Sparkles, Award, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import LazyImage from '@/components/ui/LazyImage';

export default function FinalMessageSection() {
  const { data } = useJourney();
  const { finalMessage } = data;

  const triggerJubileeCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06B6D4', '#F59E0B', '#38BDF8', '#D97706']
    });
  };

  return (
    <section
      id="final-message"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#0A1128] via-[#060B19] to-[#0A1128] border-t border-slate-800/80"
    >
      <div className="relative max-w-4xl mx-auto text-center space-y-10">
        {/* Silver Jubilee Badge */}
        <div className="flex justify-center">
          <button
            onClick={triggerJubileeCelebration}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide hover:scale-105 transition-all shadow-xl shadow-amber-500/10 cursor-pointer"
            title="Click to celebrate 25 years!"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>25 Years Since Engineering • Celebrate the Journey</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Statement 1 */}
        <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-relaxed">
          &ldquo;{finalMessage.statement}&rdquo;
        </p>

        {/* Statement 2 */}
        <p className="text-xl sm:text-2xl font-serif italic text-cyan-accent leading-relaxed">
          {finalMessage.silverJubileeReflection}
        </p>

        {/* Small & Intimate Compressed Family Photo Card */}
        <div className="pt-2 pb-2 flex flex-col items-center">
          <div className="group relative rounded-2xl overflow-hidden bg-navy-card/90 border border-slate-700/80 p-2 sm:p-2.5 shadow-2xl hover:border-amber-500/50 transition-all max-w-[280px] sm:max-w-[320px]">
            <div className="relative rounded-xl overflow-hidden aspect-square w-full bg-slate-900">
              <LazyImage
                src="/gallery/saravanan-family-airport.jpg"
                alt="Saravanan Gnanaguru with Family"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="pt-3 pb-1.5 px-2 text-center">
              <div className="inline-flex items-center justify-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>My Anchor</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                With my family — the daily strength and purpose behind every milestone of this 25-year journey.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        {/* Final Line */}
        <div className="p-8 sm:p-10 rounded-3xl bg-navy-card/90 border border-amber-500/40 shadow-2xl">
          <p className="text-lg sm:text-xl font-serif font-bold text-amber-200 tracking-wide uppercase">
            &ldquo;{finalMessage.closingCreed}&rdquo;
          </p>
          <div className="mt-4 text-xs font-mono text-slate-400">
            — SARAVANAN GNANAGURU • BATCH OF 2001 SILVER JUBILEE • 2026
          </div>
        </div>
      </div>
    </section>
  );
}
