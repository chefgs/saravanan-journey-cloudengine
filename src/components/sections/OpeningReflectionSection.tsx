"use client";

import React from 'react';
import { useJourney } from '@/context/JourneyContext';
import { Quote, Sparkles } from 'lucide-react';

export default function OpeningReflectionSection() {
  const { data } = useJourney();
  const { openingReflection } = data;

  return (
    <section
      id="reflection"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1128] via-[#0D1636] to-[#0A1128] border-y border-slate-800/80"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Opening Reflection
          </span>
        </div>

        {/* Editorial Body Text */}
        <div className="space-y-8 text-center sm:text-left">
          <p className="text-xl sm:text-2xl font-serif text-slate-100 leading-relaxed font-normal">
            &ldquo;{openingReflection.introParagraph1}&rdquo;
          </p>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            {openingReflection.introParagraph2}
          </p>

          {/* Central Message Callout Quote Block */}
          <div className="relative my-12 p-8 sm:p-10 rounded-3xl bg-navy-card/90 border border-amber-500/30 shadow-2xl shadow-amber-500/5">
            <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-amber-500 text-navy-deep flex items-center justify-center shadow-lg">
              <Quote className="w-5 h-5" />
            </div>

            <p className="text-lg sm:text-2xl font-serif italic text-amber-200 leading-relaxed pt-2">
              &ldquo;{openingReflection.quote}&rdquo;
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
              <div>
                <span className="block text-sm font-semibold text-white">
                  Saravanan Gnanaguru
                </span>
                <span className="block text-xs text-slate-400">
                  Amrita Institute of Technology • Batch of 2001
                </span>
              </div>
              <span className="text-xs font-mono text-amber-400/80 uppercase tracking-widest">
                25-Year Silver Jubilee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
