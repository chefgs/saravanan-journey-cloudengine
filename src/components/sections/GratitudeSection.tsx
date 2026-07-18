"use client";

import React from 'react';
import { useJourney } from '@/context/JourneyContext';
import { Heart, Sparkles, UserCheck } from 'lucide-react';

export default function GratitudeSection() {
  const { data } = useJourney();
  const { gratitude } = data;

  return (
    <section id="gratitude" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-amber-400/20" />
            Gratitude & Acknowledgments
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            No Journey is Built Alone
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-light">
            &ldquo;Every opportunity, encouragement, rejection, responsibility, and relationship played a part in shaping who I became.&rdquo;
          </p>
        </div>

        {/* Gratitude Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gratitude.map((category) => (
            <div
              key={category.id}
              className="p-8 rounded-3xl bg-navy-card/90 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-amber-300 mb-6 pb-4 border-b border-slate-800">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.people.map((person, pIdx) => (
                    <div
                      key={pIdx}
                      className={`p-4 rounded-2xl transition-all ${
                        person.highlight
                          ? 'bg-[#0A1128]/90 border border-amber-500/30 shadow-md'
                          : 'bg-[#0A1128]/40 border border-slate-800/80'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-base font-serif font-bold text-white">
                            {person.name}
                          </h4>
                          <span className="block text-xs font-semibold text-cyan-accent mt-0.5">
                            {person.roleOrRelation}{' '}
                            {person.websiteUrl && person.websiteLabel && (
                              <a
                                href={person.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {person.websiteLabel}
                              </a>
                            )}
                          </span>
                        </div>
                        {person.highlight && (
                          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-light">
                        {person.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                Saravanan Gnanaguru • Silver Jubilee Dedication
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
